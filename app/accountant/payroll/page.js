"use client";
import  { useState, useContext } from "react";
import { SearchContext } from "../../../components/Context/SearchContext";
import { FaMoneyBillWave, FaUsers, FaClipboardCheck, FaClock, FaEye, FaEdit, FaTrash, FaPlus, FaTimes, FaUser, FaDollarSign, FaCalendarAlt, FaUserGraduate } from "react-icons/fa";
import StatCard from "../../../components/compafterlogin/Common/StatCard";
import ViewPayroll from "../../../components/compafterlogin/Accountant/ViewPayroll";
import AddPayrollModal from "../../../components/compafterlogin/Accountant/AddPayrollModal";
import DeletePayrollModal from "../../../components/compafterlogin/Accountant/DeletePayrollModal";
import GenericCard from "../../../components/compafterlogin/Common/GenericCard";

const payrolls = [
  { id: "PR-0012", employee: "Dr. John Doe", role: "Doctor", month: "June 2025", amount: "$6,000", status: "Paid", date: "2025-07-01", department: "Cardiology", baseSalary: 5500, bonus: 500, deductions: 0 },
  { id: "PR-0011", employee: "Jane Smith", role: "Nurse", month: "June 2025", amount: "$3,200", status: "Pending", date: "2025-07-01", department: "Emergency", baseSalary: 3000, bonus: 200, deductions: 0 },
  { id: "PR-0010", employee: "Michael Brown", role: "Pharmacist", month: "June 2025", amount: "$4,000", status: "Paid", date: "2025-07-01", department: "Pharmacy", baseSalary: 3800, bonus: 200, deductions: 0 },
  { id: "PR-0009", employee: "Emily White", role: "Receptionist", month: "June 2025", amount: "$2,500", status: "Paid", date: "2025-07-01", department: "Administration", baseSalary: 2500, bonus: 0, deductions: 0 },
  { id: "PR-0008", employee: "Dr. Sarah Johnson", role: "Doctor", month: "June 2025", amount: "$6,500", status: "Paid", date: "2025-07-01", department: "Neurology", baseSalary: 6000, bonus: 500, deductions: 0 },
];

const AccountantPayroll = () => {
  const { search } = useContext(SearchContext);
  const [payrollData, setPayrollData] = useState(payrolls);
  const [selectedPayroll, setSelectedPayroll] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [payrollToDelete, setPayrollToDelete] = useState(null);
  const [payrollForm, setPayrollForm] = useState({
    employee: '',
    role: '',
    department: '',
    month: '',
    baseSalary: '',
    bonus: '',
    deductions: '',
    status: 'Pending'
  });

  const filteredData = payrollData.filter(
    (row) =>
      row.employee.toLowerCase().includes(search.toLowerCase()) ||
      row.role.toLowerCase().includes(search.toLowerCase()) ||
      row.department.toLowerCase().includes(search.toLowerCase()) ||
      row.month.toLowerCase().includes(search.toLowerCase()) ||
      row.status.toLowerCase().includes(search.toLowerCase())
  );

  const handleViewDetails = (payroll) => {
    setSelectedPayroll(payroll);
    setShowModal(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPayrollForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const calculateTotal = () => {
    const base = parseFloat(payrollForm.baseSalary) || 0;
    const bonus = parseFloat(payrollForm.bonus) || 0;
    const deductions = parseFloat(payrollForm.deductions) || 0;
    return base + bonus - deductions;
  };

  const handleAddPayroll = (e) => {
    e.preventDefault();
    
    if (!payrollForm.employee || !payrollForm.role || !payrollForm.month || !payrollForm.baseSalary) {
      alert('Please fill in all required fields');
      return;
    }

    const total = calculateTotal();
    const newPayroll = {
      id: `PR-${String(Date.now()).slice(-4)}`,
      ...payrollForm,
      amount: `$${total.toLocaleString()}`,
      date: new Date().toISOString().split('T')[0],
      baseSalary: parseFloat(payrollForm.baseSalary),
      bonus: parseFloat(payrollForm.bonus) || 0,
      deductions: parseFloat(payrollForm.deductions) || 0
    };

    setPayrollData([newPayroll, ...payrollData]);
    setPayrollForm({
      employee: '',
      role: '',
      department: '',
      month: '',
      baseSalary: '',
      bonus: '',
      deductions: '',
      status: 'Pending'
    });
    setShowAddModal(false);
    alert('Payroll added successfully!');
  };

  const handleDelete = (payroll) => {
    setPayrollToDelete(payroll);
    setShowDeleteModal(true);
  };

  const confirmDelete = () => {
    setPayrollData(payrollData.filter(pr => pr.id !== payrollToDelete.id));
    setShowDeleteModal(false);
    setPayrollToDelete(null);
    alert('Payroll deleted successfully!');
  };

  const getStatusBadge = (status) => {
    const statusStyles = {
      Paid: "bg-green-100 text-green-800",
      Pending: "bg-yellow-100 text-yellow-800",
      Processing: "bg-blue-100 text-blue-800"
    };
    
    return (
      <span className={`px-2 py-1 text-xs font-medium rounded-full ${statusStyles[status] || 'bg-gray-100 text-gray-800'}`}>
        {status}
      </span>
    );
  };

  // Calculate totals
  const totalPayroll = payrollData.reduce((sum, pr) => sum + parseFloat(pr.amount.replace('$', '').replace(',', '')), 0);
  const paidCount = payrollData.filter(pr => pr.status === 'Paid').length;
  const pendingCount = payrollData.filter(pr => pr.status === 'Pending').length;

  const statData = [
    {
      icon:<FaMoneyBillWave className="w-5 h-5 text-green-600" />,
      stat:totalPayroll.toLocaleString(),
      label: "Total Payroll",      
    },
    {
      icon:<FaUsers className="w-5 h-5 text-blue-600" />,
      stat:payrollData.length,
      label: "Total Employees"
    },
    {
      icon:<FaClipboardCheck className="w-5 h-5 text-green-600" />,
      stat:paidCount,
      label: "Paid"
    },
    {
      icon:<FaClock className="w-5 h-5 text-yellow-600" />,
      stat:pendingCount,
      label: "Pending"
    }
  ]

  return (
    <div className="p-6" style={{ fontFamily: "'Gill Sans MT', 'Gill Sans', 'GillSans', 'Arial', 'sans-serif'" }}>
      {/* Header */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6">
        <div className="flex items-center md:mb-0 mb-4">
          <FaMoneyBillWave className="w-8 h-8 text-[#516961] mr-3" />
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Payroll Management</h1>
            <p className="text-gray-600 mt-1">Manage employee payroll and compensation</p>
          </div>
        </div>
        <button
          onClick={() => setShowAddModal(true)}
          className="bg-[#C0E6da] hover:bg-[#a5d7c7] text-[#0B2443] px-6 py-3 rounded-lg w-1/2 md:w-auto font-medium flex items-center gap-2 transition-colors shadow-lg"
        >
          <FaPlus className="w-4 h-4" />
          Add Payroll
        </button>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {statData.map((stat, index) => (
                  <StatCard icon={stat.icon} stat={stat.stat} label={stat.label} key={index} />
                ))}
      </div>

      {/* Payroll Table */}
      <div className="bg-white hidden md:block rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="p-6">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Employee</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Department</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Month</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredData.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="px-6 py-8 text-center text-gray-500">
                      <FaMoneyBillWave className="w-12 h-12 mx-auto text-gray-300 mb-2" />
                      <p>No payroll records found.</p>
                    </td>
                  </tr>
                ) : (
                  filteredData.map((payroll) => (
                    <tr key={payroll.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div>
                          <div className="text-sm font-medium text-gray-900">{payroll.employee}</div>
                          <div className="text-xs text-gray-500">ID: {payroll.id}</div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {payroll.role}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {payroll.department}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {payroll.month}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {payroll.amount}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {getStatusBadge(payroll.status)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <div className="flex space-x-2">
                          <button
                            onClick={() => handleViewDetails(payroll)}
                            className="text-blue-600 hover:text-blue-900 bg-blue-50 hover:bg-blue-100 px-2 py-1 rounded transition-colors"
                            title="View Details"
                          >
                            <FaEye className="w-3 h-3" />
                          </button>
                          <button
                            onClick={() => handleDelete(payroll)}
                            className="text-red-600 hover:text-red-900 bg-red-50 hover:bg-red-100 px-2 py-1 rounded transition-colors"
                            title="Delete"
                          >
                            <FaTrash className="w-3 h-3" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="block md:hidden">
              <h1 className="text-2xl font-bold text-center text-[#0b2443] mb-2">
                Payrolls
              </h1>
              <div className="grid md:hidden grid-cols-2 gap-4">
                {filteredData.length === 0 ? (
                  <div className="text-center text-gray-500 py-8">
                    <FaUserMd className="w-12 h-12 mx-auto text-gray-300 mb-2" />
                    <p>No payrolls found.</p>
                  </div>
                ) : (
                  filteredData.map((payroll) => (
                    <GenericCard
                      key={payroll.id}
                      data={payroll}
                      hospitalFields={[
                        {
                          key: "employee",
                          icon: <FaUserGraduate />,
                        },
                        {
                          key: "role",
                          icon: <FaUser />,
                        },
                        {
                          key: "status",
                          icon:<FaClock />
                        }
                      ]}
                      personalFields={[
                        { key: "amount", icon: <FaDollarSign /> },
                        { key: "date", icon: <FaCalendarAlt /> }
                      ]}
                      actions={[
                        {
                          label: "View",
                          icon: <FaEye className="w-3 h-3" />,
                          color: "text-[#0B2443]",
                          onClick: handleViewDetails,
                        },
                        {
                          label: "Delete",
                          icon: <FaTrash className="w-3 h-3" />,
                          color: "text-red-600",
                          onClick: handleDelete,
                        },
                      ]}
                    />
                  ))
                )}
              </div>
            </div>

      {/* View Details Modal */}
      {showModal &&  (
        <ViewPayroll setShowModal={setShowModal} selectedPayroll={selectedPayroll} getStatusBadge={getStatusBadge} />
      )}

      {/* Add Payroll Modal */}
      {showAddModal && (
        <AddPayrollModal handleAddPayroll={handleAddPayroll} handleInputChange={handleInputChange} calculateTotal={calculateTotal} payrollForm={payrollForm} setShowAddModal={setShowAddModal} />
      )}

      {/* Delete Confirmation Modal */}
      {showDeleteModal && payrollToDelete && (
        <DeletePayrollModal setShowDeleteModal={setShowDeleteModal} payrollToDelete={payrollToDelete} confirmDelete={confirmDelete} />
      )}
    </div>
  );
};

export default AccountantPayroll;
