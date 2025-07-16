import React, { useState, useContext } from 'react';
import { SearchContext } from '../../Context/SearchContext';
import AddPayrollModal from '../../Components/compafterlogin/Pharmacist/AddPayrollModal';
import EditPayrollModal from '../../Components/compafterlogin/Pharmacist/EditPayrollModal';
import DeletePayrollModal from '../../Components/compafterlogin/Pharmacist/DeletePayrollModal';

export const PharmaPayroll = () => {
  const { searchQuery } = useContext(SearchContext);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedPayroll, setSelectedPayroll] = useState(null);

  // Sample payroll data - replace with actual API data
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
    const query = (searchQuery || '').toLowerCase();
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
  };

  const handleDelete = (payroll) => {
    setSelectedPayroll(payroll);
    setShowDeleteModal(true);
  };

  const handleDeleteConfirm = () => {
    setPayrollData(payrollData.filter(payroll => payroll.id !== selectedPayroll.id));
    setShowDeleteModal(false);
    setSelectedPayroll(null);
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-[#C0E6DA]/20">
      <div className="p-3">
        {/* Header Section */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-gradient-to-r from-[#198172] to-[#0B2443] rounded-xl shadow-lg">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-[#0B2443]">Payroll Management</h1>
              <p className="text-gray-600 mt-1">Manage pharmacy staff payroll and compensation</p>
            </div>
          </div>
          
        </div>        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 mb-8">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-6 hover:shadow-xl transition-all duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 mb-1">Total Payroll</p>
                <p className="text-xl font-bold text-[#0B2443]">
                  {formatCurrency(payrollData.reduce((sum, p) => sum + p.netPay, 0))}
                </p>
              </div>
              <div className="p-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl shadow-lg">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-6 hover:shadow-xl transition-all duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 mb-1">Paid</p>
                <p className="text-2xl font-bold text-green-600">
                  {payrollData.filter(p => p.status === 'Paid').length}
                </p>
              </div>
              <div className="p-3 bg-gradient-to-r from-green-500 to-green-600 rounded-xl shadow-lg">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-6 hover:shadow-xl transition-all duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 mb-1">Processing</p>
                <p className="text-2xl font-bold text-yellow-600">
                  {payrollData.filter(p => p.status === 'Processing').length}
                </p>
              </div>
              <div className="p-3 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-xl shadow-lg">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-6 hover:shadow-xl transition-all duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 mb-1">Pending</p>
                <p className="text-2xl font-bold text-red-600">
                  {payrollData.filter(p => p.status === 'Pending').length}
                </p>
              </div>
              <div className="p-3 bg-gradient-to-r from-red-500 to-red-600 rounded-xl shadow-lg">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

      {/* Payroll Table */}
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 overflow-hidden">
        <div className="px-6 py-4 bg-gradient-to-r from-[#198172]/10 to-[#0B2443]/10 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-[#0B2443]">Payroll Records</h3>
          <p className="text-sm text-gray-600 mt-1">Comprehensive view of all pharmacy staff payroll</p>
        </div>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50/50">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">#</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">ID</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Pharmacist</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Summary</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Data</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-100">
              {filteredPayrollData.map((payroll, index) => (
                <tr key={payroll.id} className="hover:bg-[#C0E6DA]/10 transition-all duration-200 group">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-600">
                    {index + 1}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-[#0B2443]">
                    {payroll.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-[#198172] to-[#0B2443] rounded-full flex items-center justify-center">
                        <span className="text-white font-semibold text-sm">
                          {payroll.pharmacist.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-gray-900">{payroll.pharmacist}</div>
                        <div className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full inline-block mt-1">{payroll.position}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="space-y-1">
                      <div className="text-sm text-gray-700">Base: <span className="font-semibold text-[#0B2443]">{formatCurrency(payroll.baseSalary)}</span></div>
                      <div className="text-sm text-gray-700">Net: <span className="font-bold text-[#198172]">{formatCurrency(payroll.netPay)}</span></div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="space-y-1">
                      <div className="text-sm font-medium text-gray-900">{payroll.payPeriod}</div>
                      <div className="text-xs text-gray-500">Pay Date: {payroll.payDate}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-3 py-1 text-xs font-semibold rounded-full shadow-sm ${getStatusBadge(payroll.status)}`}>
                      {payroll.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-2">
                      <button 
                          onClick={() => handleEdit(payroll)}
                          className="bg-gray-500 hover:bg-gray-600 text-white px-3 py-1 rounded text-xs flex items-center transition-colors"
                          title="Edit Sale"
                        >
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                          </svg>
                      </button>
                      <button 
                          onClick={() => handleDelete(payroll)}
                          className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-xs flex items-center transition-colors"
                          title="Delete Sale"
                        >
                          <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredPayrollData.length === 0 && (
          <div className="text-center py-16 bg-gradient-to-b from-gray-50 to-white">
            <div className="text-gray-400 mb-6">
              <div className="mx-auto w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">No payroll records found</h3>
            <p className="text-gray-500 max-w-sm mx-auto">
              {searchQuery ? 'Try adjusting your search criteria to find payroll records.' : 'Get started by adding your first payroll record to manage staff compensation.'}
            </p>
          </div>
        )}
      </div>

      {/* Modals */}
      {showAddModal && (
        <AddPayrollModal
          onClose={() => setShowAddModal(false)}
          onSubmit={handleAddPayroll}
        />
      )}

      {showEditModal && selectedPayroll && (
        <EditPayrollModal
          payroll={selectedPayroll}
          onClose={() => {
            setShowEditModal(false);
            setSelectedPayroll(null);
          }}
          onSubmit={handleEditSubmit}
        />
      )}

      {showDeleteModal && selectedPayroll && (
        <DeletePayrollModal
          payroll={selectedPayroll}
          onClose={() => {
            setShowDeleteModal(false);
            setSelectedPayroll(null);
          }}
          onConfirm={handleDeleteConfirm}
        />
      )}
      </div>
    </div>
  );
};
