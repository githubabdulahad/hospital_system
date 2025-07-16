import React, { useState } from "react";
import CommonTable from "../../Components/compafterlogin/Common/CommonTable";

const employees = [
  { id: 1, name: "John Doe", role: "Pharmacist" },
  { id: 2, name: "Jane Smith", role: "Accountant" },
  { id: 3, name: "Ali Ahmed", role: "Doctor" },
  { id: 4, name: "Sara Khan", role: "Nurse" },
];

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const years = [2024, 2025, 2026];

const payrollTableColumns = [
  { label: "Component", key: "component" },
  { label: "Amount (PKR)", key: "amount" },
];

import { useNavigate } from "react-router-dom";

const AdmCreatePayroll = () => {
  const [selectedEmployee, setSelectedEmployee] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [showPayroll, setShowPayroll] = useState(false);
  const [basic, setBasic] = useState(50000);
  const [allowance, setAllowance] = useState(10000);
  const [deduction, setDeduction] = useState(5000);
  const navigate = useNavigate();

  const net = Number(basic) + Number(allowance) - Number(deduction);

  const payrollTableData = [
    { component: "Basic Salary", amount: `₨ ${basic}` },
    { component: "Allowance", amount: `₨ ${allowance}` },
    { component: "Deduction", amount: `₨ ${deduction}` },
    { component: "Net Salary", amount: `₨ ${net}` },
  ];

  const handleGenerate = () => {
    if (selectedEmployee && selectedMonth && selectedYear) {
      setShowPayroll(true);
    }
  };

  const handlePayslip = () => {
    // Save to localStorage for payroll list
    const emp = employees.find((e) => e.id === Number(selectedEmployee));
    const newPayroll = {
      id: Date.now(),
      employee: emp.name,
      role: emp.role,
      month: selectedMonth,
      year: selectedYear,
      net: `₨ ${net}`,
      status: "Generated",
    };
    const prev = JSON.parse(localStorage.getItem("payrollList") || "[]");
    localStorage.setItem("payrollList", JSON.stringify([newPayroll, ...prev]));
    navigate("/admin/payroll-list");
  };

  return (
    <div
      className="p-6 "
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
              className="w-7 h-7 text-gray-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118A7.5 7.5 0 0112 15.75a7.5 7.5 0 017.5 4.368M18 6.75a2.25 2.25 0 112.25 2.25"
              />
            </svg>
          </span>
          <h2 className="text-3xl font-semibold text-gray-500">Create Payroll</h2>
        </div>
      <div className="bg-white rounded-xl shadow p-6 mb-6 ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div>
            <label className="block mb-1 font-medium">Employee</label>
            <select
              className="w-full border rounded px-3 py-2"
              value={selectedEmployee}
              onChange={(e) => setSelectedEmployee(e.target.value)}
            >
              <option value="">Select Employee</option>
              {employees.map((emp) => (
                <option key={emp.id} value={emp.id}>
                  {emp.name} ({emp.role})
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block mb-1 font-medium">Month</label>
            <select
              className="w-full border rounded px-3 py-2"
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(e.target.value)}
            >
              <option value="">Select Month</option>
              {months.map((month) => (
                <option key={month} value={month}>
                  {month}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block mb-1 font-medium">Year</label>
            <select
              className="w-full border rounded px-3 py-2"
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
            >
              <option value="">Select Year</option>
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="flex flex-col items-end">
        <button
          className="bg-[#0B2443] hover:bg-[#345B8C] text-white font-semibold px-6 py-2 rounded mt-2"
          onClick={handleGenerate}
          disabled={!(selectedEmployee && selectedMonth && selectedYear)}
        >
          Generate Payroll
        </button>
        </div>
      </div>

      {showPayroll && (
        <div className="bg-white rounded-xl shadow p-6 mb-6">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">
            Payroll Details
          </h3>
          <div className="mb-4">
            <span className=" font-medium">Employee:</span>{" "}
            {employees.find((e) => e.id === Number(selectedEmployee))?.name}
            <br />
            <span className=" font-medium">Role:</span>{" "}
            {employees.find((e) => e.id === Number(selectedEmployee))?.role}
            <br />
            <span className=" font-medium">Month:</span> {selectedMonth}
            <br />
            <span className=" font-medium">Year:</span> {selectedYear}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div>
              <label className="block mb-1 font-medium">Basic Salary</label>
              <input
                type="number"
                className="w-full border rounded px-3 py-2"
                value={basic}
                min={0}
                onChange={(e) => setBasic(e.target.value)}
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Allowance</label>
              <input
                type="number"
                className="w-full border rounded px-3 py-2"
                value={allowance}
                min={0}
                onChange={(e) => setAllowance(e.target.value)}
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Deduction</label>
              <input
                type="number"
                className="w-full border rounded px-3 py-2"
                value={deduction}
                min={0}
                onChange={(e) => setDeduction(e.target.value)}
              />
            </div>
          </div>
          <CommonTable
            columns={payrollTableColumns}
            data={payrollTableData}
            actions={[]}
          />
          <button
            className="bg-[#C0E6DA] hover:bg-[#bbdbd1] text-[#0B2443] font-semibold px-6 py-2 rounded mt-4"
            onClick={handlePayslip}
          >
            Generate Payslip
          </button>
        </div>
      )}
    </div>
  );
};

export default AdmCreatePayroll;
