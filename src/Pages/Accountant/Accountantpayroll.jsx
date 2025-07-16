

import React, { useState } from "react";
import CommonAddButton from "../../Components/compafterlogin/Common/CommonAddButton";
import AddPayrollModal from "../../Components/compafterlogin/Accountant/AddPayrollModal";
import EditPayrollModal from "../../Components/compafterlogin/Accountant/EditPayrollModal";
import DeletePayrollModal from "../../Components/compafterlogin/Accountant/DeletePayrollModal";

const payrolls = [
  { id: "PR-0012", employee: "Dr. John Doe", role: "Doctor", month: "June 2025", amount: "$6,000", status: "Paid", date: "2025-07-01" },
  { id: "PR-0011", employee: "Jane Smith", role: "Nurse", month: "June 2025", amount: "$3,200", status: "Pending", date: "2025-07-01" },
  { id: "PR-0010", employee: "Michael Brown", role: "Pharmacist", month: "June 2025", amount: "$4,000", status: "Paid", date: "2025-07-01" },
  { id: "PR-0009", employee: "Emily White", role: "Receptionist", month: "June 2025", amount: "$2,500", status: "Paid", date: "2025-07-01" },
];

export default function AccountantPayroll() {
  const [payrollData, setPayrollData] = useState(payrolls);
  const [editingPayroll, setEditingPayroll] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [payrollToDelete, setPayrollToDelete] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);

  // Add functionality
  const handleAddPayroll = (newPayroll) => {
    setPayrollData([newPayroll, ...payrollData]);
  };

  // Edit functionality
  const handleEdit = (payroll) => {
    setEditingPayroll({ ...payroll });
  };

  const handleSaveEdit = () => {
    setPayrollData(payrollData.map(pr => 
      pr.id === editingPayroll.id ? editingPayroll : pr
    ));
    setEditingPayroll(null);
  };

  const handleCancelEdit = () => {
    setEditingPayroll(null);
  };

  // Delete functionality
  const handleDelete = (payroll) => {
    setPayrollToDelete(payroll);
    setShowDeleteModal(true);
  };

  const confirmDelete = () => {
    setPayrollData(payrollData.filter(pr => pr.id !== payrollToDelete.id));
    setShowDeleteModal(false);
    setPayrollToDelete(null);
  };

  const cancelDelete = () => {
    setShowDeleteModal(false);
    setPayrollToDelete(null);
  };
  return (
    <div className="w-full min-h-screen p-2 md:p-6 bg-[#f8fafc] animate-fadeIn">
      <h1 className="text-2xl md:text-3xl font-bold text-[#198172] mb-8 tracking-wide" style={{ fontFamily: "'Gill Sans MT', 'Gill Sans', 'GillSans', 'Arial', 'sans-serif'" }}>Payroll Management</h1>
      <div className="bg-white rounded-2xl shadow-xl p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-[#23253A]" style={{ fontFamily: "'Gill Sans MT', 'Gill Sans', 'GillSans', 'Arial', 'sans-serif'" }}>Recent Payrolls</h2>
          <CommonAddButton label="Add Payroll" onClick={() => setShowAddModal(true)} />
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm md:text-base">
            <thead>
              <tr className="bg-[#C0E6DA] text-[#23253A]" style={{ fontFamily: "'Gill Sans MT', 'Gill Sans', 'GillSans', 'Arial', 'sans-serif'" }}>
                <th className="py-2 px-4 rounded-tl-lg">Payroll ID</th>
                <th className="py-2 px-4">Employee</th>
                <th className="py-2 px-4">Role</th>
                <th className="py-2 px-4">Month</th>
                <th className="py-2 px-4">Amount</th>
                <th className="py-2 px-4">Status</th>
                <th className="py-2 px-4">Date</th>
                <th className="py-2 px-4 rounded-tr-lg">Options</th>
              </tr>
            </thead>
            <tbody>
              {payrollData.map((pr) => (
                <tr key={pr.id} className={`border-b last:border-b-0 ${pr.status === 'Paid' ? 'bg-green-50' : 'bg-yellow-50'}`}>
                  <td className="py-2 px-4 font-semibold">{pr.id}</td>
                  <td className="py-2 px-4">{pr.employee}</td>
                  <td className="py-2 px-4">{pr.role}</td>
                  <td className="py-2 px-4">{pr.month}</td>
                  <td className="py-2 px-4">{pr.amount}</td>
                  <td className={`py-2 px-4 font-bold ${pr.status === 'Paid' ? 'text-[#0B2443]' : 'text-red-700'}`}>{pr.status}</td>
                  <td className="py-2 px-4">{pr.date}</td>
                  <td className="py-2 px-4 flex">
                    <button 
                      className="text-[#000000] bg-[#C0E6DA] rounded-md p-2 hover:bg-[#A5D6CC] mr-2" 
                      title="Edit"
                      onClick={() => handleEdit(pr)}
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                    </button>
                    <button 
                      className="text-red-600 bg-[#C0E6DA] rounded-md p-2 hover:bg-[#A5D6CC]" 
                      title="Delete"
                      onClick={() => handleDelete(pr)}
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal Components */}
      <AddPayrollModal
        isOpen={showAddModal}
        onClose={() => setShowAddModal(false)}
        onAdd={handleAddPayroll}
      />

      <EditPayrollModal
        isOpen={!!editingPayroll}
        payroll={editingPayroll}
        onClose={handleCancelEdit}
        onSave={handleSaveEdit}
        onChange={setEditingPayroll}
      />

      <DeletePayrollModal
        isOpen={showDeleteModal}
        payroll={payrollToDelete}
        onClose={cancelDelete}
        onConfirm={confirmDelete}
      />
    </div>
  );
}
