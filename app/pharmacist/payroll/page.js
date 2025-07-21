"use client";
import React, { useState, useContext } from 'react';
import { SearchContext } from '../../../components/Context/SearchContext';
import { FaDollarSign, FaPlus, FaEdit, FaTrash, FaTimes, FaSave, FaEye, FaCheck, FaClock, FaExclamationTriangle } from 'react-icons/fa';
import AddPayrollModal from '../../../components/compafterlogin/Pharmacist/AddPayrollModal';
import EditPayrollModal from '../../../components/compafterlogin/Pharmacist/EditPayrollModal';
import DeletePayrollModal from '../../../components/compafterlogin/Pharmacist/DeletePayrollModal';
import StatCard from '../../../components/compafterlogin/Common/StatCard';

export default function PharmaPayroll() {
  const { search } = useContext(SearchContext);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedPayroll, setSelectedPayroll] = useState(null);

  // Sample payroll data
  const [payrollData, setPayrollData] = useState([
    {
      id: 'P001',
      pharmacist: 'Dr. Sarah Johnson',
      position: 'Senior Pharmacist',
      baseSalary: 75000,
      overtime: 2500,
      bonus: 3000,
      deductions: 1200,
      netPay: 79300,
      payPeriod: '2024-01-01 to 2024-01-31',
      status: 'Paid',
      payDate: '2024-02-01'
    },
    {
      id: 'P002',
      pharmacist: 'Dr. Michael Chen',
      position: 'Clinical Pharmacist',
      baseSalary: 68000,
      overtime: 1800,
      bonus: 2000,
      deductions: 1100,
      netPay: 70700,
      payPeriod: '2024-01-01 to 2024-01-31',
      status: 'Paid',
      payDate: '2024-02-01'
    },
    {
      id: 'P003',
      pharmacist: 'Dr. Emma Wilson',
      position: 'Pharmacy Manager',
      baseSalary: 85000,
      overtime: 3200,
      bonus: 5000,
      deductions: 1500,
      netPay: 91700,
      payPeriod: '2024-01-01 to 2024-01-31',
      status: 'Processing',
      payDate: '2024-02-01'
    },
    {
      id: 'P004',
      pharmacist: 'Dr. James Rodriguez',
      position: 'Staff Pharmacist',
      baseSalary: 62000,
      overtime: 1200,
      bonus: 1500,
      deductions: 950,
      netPay: 63750,
      payPeriod: '2024-01-01 to 2024-01-31',
      status: 'Pending',
      payDate: '2024-02-01'
    },
    {
      id: 'P005',
      pharmacist: 'Dr. Lisa Thompson',
      position: 'Clinical Pharmacist',
      baseSalary: 70000,
      overtime: 2100,
      bonus: 2500,
      deductions: 1050,
      netPay: 73550,
      payPeriod: '2024-01-01 to 2024-01-31',
      status: 'Paid',
      payDate: '2024-02-01'
    }
  ]);

    // Filter payroll data based on search query
  const filteredPayrollData = payrollData.filter(payroll => {
    const query = (search || '').toLowerCase();
    return (
      payroll.pharmacist.toLowerCase().includes(query) ||
      payroll.position.toLowerCase().includes(query) ||
      payroll.id.toLowerCase().includes(query) ||
      payroll.status.toLowerCase().includes(query)
    );
  });

  const handleAddPayroll = (newPayroll) => {
    const payrollWithId = {
      ...newPayroll,
      id: `P${String(payrollData.length + 1).padStart(3, '0')}`,
    };
    setPayrollData([...payrollData, payrollWithId]);
    setShowAddModal(false);
    alert('Payroll record added successfully!');
  };

  const handleEdit = (payroll) => {
    setSelectedPayroll(payroll);
    setShowEditModal(true);
  };

  const handleEditSubmit = (updatedPayroll) => {
    setPayrollData(payrollData.map(payroll => 
      payroll.id === updatedPayroll.id ? updatedPayroll : payroll
    ));
    setShowEditModal(false);
    setSelectedPayroll(null);
    alert('Payroll record updated successfully!');
  };

  const handleDelete = (payroll) => {
    setSelectedPayroll(payroll);
    setShowDeleteModal(true);
  };

  const handleDeleteConfirm = () => {
    setPayrollData(payrollData.filter(payroll => payroll.id !== selectedPayroll.id));
    setShowDeleteModal(false);
    setSelectedPayroll(null);
    alert('Payroll record deleted successfully!');
  };

  const getStatusBadge = (status) => {
    const statusStyles = {
      'Paid': 'bg-green-100 text-green-800',
      'Processing': 'bg-yellow-100 text-yellow-800',
      'Pending': 'bg-red-100 text-red-800'
    };
    return statusStyles[status] || 'bg-gray-100 text-gray-800';
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount);
  };

  const statData = [
    {
        icon : <FaDollarSign className="w-5 h-5 text-blue-600" />,
        stat :formatCurrency(payrollData.reduce((sum, p) => sum + p.netPay, 0)),
        label : 'Total Payroll'
    },
    {
      icon : <FaCheck className="w-5 h-5 text-green-600" />,
      stat : payrollData.filter(p => p.status === 'Paid').length,
      label : 'Total Paid'
    },
    {
      icon : <FaClock className="w-5 h-5 text-yellow-600" />,
      stat : payrollData.filter(p => p.status === 'Processing').length,
      label : 'Total Processing'
    },
    {
      icon : <FaExclamationTriangle className="w-5 h-5 text-red-600" />,
      stat : payrollData.filter(p => p.status === 'Pending').length,
      label : 'Total Pending'
    }
  ]

  return (
    <div className="p-6" style={{ fontFamily: "'Gill Sans MT', 'Gill Sans', 'GillSans', 'Arial', 'sans-serif'" }}>
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center">
          <FaDollarSign className="w-7 h-7 text-[#0B2443] mr-3" />
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Payroll Management</h1>
            <p className="text-gray-600 mt-1">Manage pharmacy staff payroll and compensation</p>
          </div>
        </div>
        <button
          onClick={() => setShowAddModal(true)}
          className="bg-[#0B2443] hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2 transition-colors shadow-lg"
        >
          <FaPlus className="w-4 h-4" />
          Add Payroll
        </button>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        {statData.map((stat, index) => (
          <StatCard
            key={index}
            icon={stat.icon}
            stat={stat.stat}
            label={stat.label}
          />
        ))}
      </div>

      {/* Payroll Table */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="p-6">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Pharmacist</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Salary Details</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Pay Period</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredPayrollData.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="px-6 py-8 text-center text-gray-500">
                      <FaDollarSign className="w-12 h-12 mx-auto text-gray-300 mb-2" />
                      <p>No payroll records found.</p>
                    </td>
                  </tr>
                ) : (
                  filteredPayrollData.map((payroll) => (
                    <tr key={payroll.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{payroll.id}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                            <span className="text-[#0B2443] font-semibold text-sm">
                              {payroll.pharmacist.split(' ').map(n => n[0]).join('')}
                            </span>
                          </div>
                          <div>
                            <div className="text-sm font-medium text-gray-900">{payroll.pharmacist}</div>
                            <div className="text-sm text-gray-500">{payroll.position}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          <div>Base: {formatCurrency(payroll.baseSalary)}</div>
                          <div className="font-bold text-green-600">Net: {formatCurrency(payroll.netPay)}</div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{payroll.payPeriod}</div>
                        <div className="text-xs text-gray-500">Pay Date: {payroll.payDate}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusBadge(payroll.status)}`}>
                          {payroll.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <div className="flex space-x-2">
                          <button 
                            onClick={() => handleEdit(payroll)}
                            className="text-green-600 hover:text-green-900 bg-green-50 hover:bg-green-100 px-2 py-1 rounded transition-colors"
                            title="Edit Payroll"
                          >
                            <FaEdit className="w-3 h-3" />
                          </button>
                          <button 
                            onClick={() => handleDelete(payroll)}
                            className="text-red-600 hover:text-red-900 bg-red-50 hover:bg-red-100 px-2 py-1 rounded transition-colors"
                            title="Delete Payroll"
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

      {/* Modals */}
      <AddPayrollModal
        isOpen={showAddModal}
        onClose={() => setShowAddModal(false)}
        onAdd={handleAddPayroll}
      />
      
      <EditPayrollModal
        isOpen={showEditModal}
        payroll={selectedPayroll}
        onClose={() => {
          setShowEditModal(false);
          setSelectedPayroll(null);
        }}
        onSave={handleEditSubmit}
      />
      
      <DeletePayrollModal
        isOpen={showDeleteModal}
        payroll={selectedPayroll}
        onClose={() => {
          setShowDeleteModal(false);
          setSelectedPayroll(null);
        }}
        onConfirm={handleDeleteConfirm}
      />
    </div>
  );
}
