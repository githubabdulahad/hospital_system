"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Toast from "../../../components/compafterlogin/Common/Toast";

const CreatePayroll = () => {
  const router = useRouter();
  const [toast, setToast] = useState({ show: false, message: "", type: "success" });
  const [payrollData, setPayrollData] = useState({
    payrollPeriod: "",
    payrollMonth: "",
    payrollYear: new Date().getFullYear(),
    employeeType: "All",
    department: "All",
    includeBonus: false,
    includeOvertimePay: false,
    includeDeductions: true,
    taxRate: 20,
    notes: "",
  });

  const [employees] = useState([
    {
      id: 1,
      employeeId: "EMP001",
      name: "Dr. John Doe",
      department: "Cardiology",
      position: "Senior Doctor",
      employeeType: "Doctor",
      baseSalary: 8000,
      overtimeHours: 5,
      overtimeRate: 50,
      bonus: 500,
      selected: true,
    },
    {
      id: 2,
      employeeId: "EMP002", 
      name: "Sarah Wilson",
      department: "Nursing",
      position: "Head Nurse",
      employeeType: "Nurse",
      baseSalary: 4000,
      overtimeHours: 8,
      overtimeRate: 25,
      bonus: 200,
      selected: true,
    },
    {
      id: 3,
      employeeId: "EMP003",
      name: "Mike Johnson",
      department: "Administration",
      position: "Finance Manager",
      employeeType: "Accountant",
      baseSalary: 5000,
      overtimeHours: 3,
      overtimeRate: 30,
      bonus: 300,
      selected: false,
    },
    {
      id: 4,
      employeeId: "EMP004",
      name: "Lisa Anderson",
      department: "Pharmacy",
      position: "Chief Pharmacist",
      employeeType: "Pharmacist",
      baseSalary: 6000,
      overtimeHours: 4,
      overtimeRate: 35,
      bonus: 400,
      selected: true,
    },
    {
      id: 5,
      employeeId: "EMP005",
      name: "David Lee",
      department: "Emergency",
      position: "Emergency Doctor",
      employeeType: "Doctor",
      baseSalary: 7500,
      overtimeHours: 12,
      overtimeRate: 60,
      bonus: 800,
      selected: true,
    },
  ]);

  const [selectedEmployees, setSelectedEmployees] = useState(
    employees.filter(emp => emp.selected).map(emp => emp.id)
  );

  const showToast = (message, type = "success") => {
    setToast({ show: true, message, type });
  };

  const hideToast = () => {
    setToast({ show: false, message: "", type: "success" });
  };

  const handleInputChange = (field, value) => {
    setPayrollData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleEmployeeToggle = (employeeId) => {
    setSelectedEmployees(prev => 
      prev.includes(employeeId) 
        ? prev.filter(id => id !== employeeId)
        : [...prev, employeeId]
    );
  };

  const calculateEmployeePayroll = (employee) => {
    const overtimePay = payrollData.includeOvertimePay ? 
      employee.overtimeHours * employee.overtimeRate : 0;
    const bonus = payrollData.includeBonus ? employee.bonus : 0;
    const grossPay = employee.baseSalary + overtimePay + bonus;
    const taxDeduction = payrollData.includeDeductions ? 
      (grossPay * payrollData.taxRate / 100) : 0;
    const netPay = grossPay - taxDeduction;

    return {
      grossPay,
      overtimePay,
      bonus,
      taxDeduction,
      netPay
    };
  };

  const getFilteredEmployees = () => {
    return employees.filter(emp => {
      const matchesType = payrollData.employeeType === "All" || emp.employeeType === payrollData.employeeType;
      const matchesDept = payrollData.department === "All" || emp.department === payrollData.department;
      return matchesType && matchesDept;
    });
  };

  const calculateTotalPayroll = () => {
    const filteredEmployees = getFilteredEmployees().filter(emp => selectedEmployees.includes(emp.id));
    return filteredEmployees.reduce((total, emp) => {
      const calc = calculateEmployeePayroll(emp);
      return {
        totalGross: total.totalGross + calc.grossPay,
        totalNet: total.totalNet + calc.netPay,
        totalTax: total.totalTax + calc.taxDeduction,
        employeeCount: total.employeeCount + 1
      };
    }, { totalGross: 0, totalNet: 0, totalTax: 0, employeeCount: 0 });
  };

  const handleGeneratePayroll = () => {
    if (!payrollData.payrollPeriod || !payrollData.payrollMonth) {
      showToast("Please fill in all required fields", "error");
      return;
    }

    if (selectedEmployees.length === 0) {
      showToast("Please select at least one employee", "error");
      return;
    }

    const totals = calculateTotalPayroll();
    const selectedEmployeeDetails = getFilteredEmployees().filter(emp => selectedEmployees.includes(emp.id));
    
    // Generate a unique payroll ID
    const payrollId = `PR${String(Date.now()).slice(-6)}`;
    
    // Create the new payroll object
    const newPayroll = {
      id: Date.now(),
      payrollId: payrollId,
      payrollPeriod: payrollData.payrollPeriod,
      month: payrollData.payrollMonth,
      year: payrollData.payrollYear,
      employeeCount: totals.employeeCount,
      totalGrossPay: totals.totalGross,
      totalDeductions: totals.totalTax,
      totalNetPay: totals.totalNet,
      status: "Completed",
      createdDate: new Date().toISOString().split('T')[0],
      createdBy: "Admin User",
      processedDate: new Date().toISOString().split('T')[0],
      notes: payrollData.notes || `Payroll for ${selectedEmployeeDetails.length} employees`,
      employeeDetails: selectedEmployeeDetails.map(emp => ({
        ...emp,
        payrollCalculation: calculateEmployeePayroll(emp)
      })),
      payrollSettings: {
        includeBonus: payrollData.includeBonus,
        includeOvertimePay: payrollData.includeOvertimePay,
        includeDeductions: payrollData.includeDeductions,
        taxRate: payrollData.taxRate
      }
    };

    // Store in localStorage for the payroll list page to access
    const existingPayrolls = JSON.parse(localStorage.getItem('generatedPayrolls') || '[]');
    existingPayrolls.unshift(newPayroll); // Add to beginning of array
    localStorage.setItem('generatedPayrolls', JSON.stringify(existingPayrolls));

    showToast(`Payroll generated successfully! Redirecting to payroll list...`, "success");
    
    // Redirect to payroll list page after a short delay
    setTimeout(() => {
      router.push('/admin/payroll-list');
    }, 1500);
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount);
  };

  const filteredEmployees = getFilteredEmployees();
  const payrollTotals = calculateTotalPayroll();

  return (
    <div
      className="p-6"
      style={{
        fontFamily:
          "'Gill Sans MT', 'Gill Sans', 'GillSans', 'Arial', 'sans-serif'",
      }}
    >
      <div className="flex items-center mb-6">
        <span className="text-2xl mr-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-7 h-7 text-green-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </span>
        <h2 className="text-3xl font-semibold text-[#0b2443]">Create Payroll</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Payroll Configuration */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">Payroll Configuration</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Payroll Period *</label>
                <select
                  value={payrollData.payrollPeriod}
                  onChange={(e) => handleInputChange("payrollPeriod", e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                >
                  <option value="">Select Period</option>
                  <option value="Weekly">Weekly</option>
                  <option value="Bi-weekly">Bi-weekly</option>
                  <option value="Monthly">Monthly</option>
                  <option value="Quarterly">Quarterly</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Month *</label>
                <select
                  value={payrollData.payrollMonth}
                  onChange={(e) => handleInputChange("payrollMonth", e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                >
                  <option value="">Select Month</option>
                  <option value="January">January</option>
                  <option value="February">February</option>
                  <option value="March">March</option>
                  <option value="April">April</option>
                  <option value="May">May</option>
                  <option value="June">June</option>
                  <option value="July">July</option>
                  <option value="August">August</option>
                  <option value="September">September</option>
                  <option value="October">October</option>
                  <option value="November">November</option>
                  <option value="December">December</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Year</label>
                <input
                  type="number"
                  value={payrollData.payrollYear}
                  onChange={(e) => handleInputChange("payrollYear", parseInt(e.target.value))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  min="2020"
                  max="2030"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Employee Type</label>
                <select
                  value={payrollData.employeeType}
                  onChange={(e) => handleInputChange("employeeType", e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  <option value="All">All Types</option>
                  <option value="Doctor">Doctors</option>
                  <option value="Nurse">Nurses</option>
                  <option value="Accountant">Accountants</option>
                  <option value="Pharmacist">Pharmacists</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Department</label>
                <select
                  value={payrollData.department}
                  onChange={(e) => handleInputChange("department", e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  <option value="All">All Departments</option>
                  <option value="Cardiology">Cardiology</option>
                  <option value="Nursing">Nursing</option>
                  <option value="Administration">Administration</option>
                  <option value="Pharmacy">Pharmacy</option>
                  <option value="Emergency">Emergency</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Tax Rate (%)</label>
                <input
                  type="number"
                  value={payrollData.taxRate}
                  onChange={(e) => handleInputChange("taxRate", parseFloat(e.target.value))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  min="0"
                  max="50"
                  step="0.1"
                />
              </div>

              <div className="space-y-2">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={payrollData.includeBonus}
                    onChange={(e) => handleInputChange("includeBonus", e.target.checked)}
                    className="mr-2 h-4 w-4 text-green-600"
                  />
                  <span className="text-sm text-gray-700">Include Bonus</span>
                </label>

                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={payrollData.includeOvertimePay}
                    onChange={(e) => handleInputChange("includeOvertimePay", e.target.checked)}
                    className="mr-2 h-4 w-4 text-green-600"
                  />
                  <span className="text-sm text-gray-700">Include Overtime Pay</span>
                </label>

                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={payrollData.includeDeductions}
                    onChange={(e) => handleInputChange("includeDeductions", e.target.checked)}
                    className="mr-2 h-4 w-4 text-green-600"
                  />
                  <span className="text-sm text-gray-700">Include Tax Deductions</span>
                </label>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Notes</label>
                <textarea
                  value={payrollData.notes}
                  onChange={(e) => handleInputChange("notes", e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  rows="3"
                  placeholder="Additional notes for this payroll..."
                />
              </div>
            </div>
          </div>

          {/* Payroll Summary */}
          <div className="bg-white rounded-lg shadow-sm border p-6 mt-6">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">Payroll Summary</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Selected Employees:</span>
                <span className="font-semibold">{payrollTotals.employeeCount}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Total Gross Pay:</span>
                <span className="font-semibold text-green-600">{formatCurrency(payrollTotals.totalGross)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Total Deductions:</span>
                <span className="font-semibold text-red-600">{formatCurrency(payrollTotals.totalTax)}</span>
              </div>
              <div className="flex justify-between border-t pt-2">
                <span className="text-sm font-semibold text-gray-700">Total Net Pay:</span>
                <span className="font-bold text-green-700">{formatCurrency(payrollTotals.totalNet)}</span>
              </div>
            </div>

            <button
              onClick={handleGeneratePayroll}
              className="w-full mt-4 bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
            >
              Generate Payroll
            </button>
          </div>
        </div>

        {/* Employee Selection */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">
              Employee Selection ({filteredEmployees.length} employees)
            </h3>

            <div className="space-y-4">
              {filteredEmployees.map((employee) => {
                const calculation = calculateEmployeePayroll(employee);
                const isSelected = selectedEmployees.includes(employee.id);
                
                return (
                  <div
                    key={employee.id}
                    className={`border rounded-lg p-4 transition-colors ${
                      isSelected ? 'border-green-500 bg-green-50' : 'border-gray-200 bg-white'
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          checked={isSelected}
                          onChange={() => handleEmployeeToggle(employee.id)}
                          className="mr-3 h-4 w-4 text-green-600"
                        />
                        <div>
                          <h4 className="font-semibold text-gray-900">{employee.name}</h4>
                          <p className="text-sm text-gray-600">{employee.position} - {employee.department}</p>
                          <p className="text-xs text-gray-500">ID: {employee.employeeId}</p>
                        </div>
                      </div>
                      
                      <div className="text-right">
                        <div className="text-lg font-bold text-green-600">
                          {formatCurrency(calculation.netPay)}
                        </div>
                        <div className="text-xs text-gray-500">Net Pay</div>
                      </div>
                    </div>

                    {isSelected && (
                      <div className="mt-3 pt-3 border-t border-gray-200">
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <span className="text-gray-600">Base Salary:</span>
                            <span className="ml-2 font-medium">{formatCurrency(employee.baseSalary)}</span>
                          </div>
                          {payrollData.includeOvertimePay && (
                            <div>
                              <span className="text-gray-600">Overtime:</span>
                              <span className="ml-2 font-medium">{formatCurrency(calculation.overtimePay)}</span>
                            </div>
                          )}
                          {payrollData.includeBonus && (
                            <div>
                              <span className="text-gray-600">Bonus:</span>
                              <span className="ml-2 font-medium">{formatCurrency(calculation.bonus)}</span>
                            </div>
                          )}
                          <div>
                            <span className="text-gray-600">Gross Pay:</span>
                            <span className="ml-2 font-medium">{formatCurrency(calculation.grossPay)}</span>
                          </div>
                          {payrollData.includeDeductions && (
                            <div>
                              <span className="text-gray-600">Tax Deduction:</span>
                              <span className="ml-2 font-medium text-red-600">{formatCurrency(calculation.taxDeduction)}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {filteredEmployees.length === 0 && (
              <div className="text-center py-8 text-gray-500">
                No employees found matching the selected criteria.
              </div>
            )}
          </div>
        </div>
      </div>

      <Toast
        message={toast.message}
        isVisible={toast.show}
        type={toast.type}
        onClose={hideToast}
      />
    </div>
  );
};

export default CreatePayroll;
