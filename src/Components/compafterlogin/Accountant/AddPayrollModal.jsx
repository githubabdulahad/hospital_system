import React, { useState } from "react";

const AddPayrollModal = ({ isOpen, onClose, onAdd }) => {
  const [newPayroll, setNewPayroll] = useState({
    employee: "",
    role: "Doctor",
    month: "",
    amount: "",
    status: "Pending",
    date: new Date().toISOString().split('T')[0]
  });

  const handleSubmit = () => {
    if (!newPayroll.employee || !newPayroll.month || !newPayroll.amount) {
      alert("Please fill in all required fields");
      return;
    }

    // Generate new ID
    const newId = `PR-${String(Math.floor(Math.random() * 9999)).padStart(4, '0')}`;
    
    const payrollToAdd = {
      ...newPayroll,
      id: newId,
      amount: newPayroll.amount.startsWith('$') ? newPayroll.amount : `$${newPayroll.amount}`
    };

    onAdd(payrollToAdd);
    
    // Reset form
    setNewPayroll({
      employee: "",
      role: "Doctor",
      month: "",
      amount: "",
      status: "Pending",
      date: new Date().toISOString().split('T')[0]
    });
    
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50 animate-fadeIn">
      <div className="bg-white/95 backdrop-blur-md rounded-xl shadow-2xl p-6 w-full max-w-md mx-4 transform transition-all duration-300 ease-out animate-slideUp border border-white/20">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-[#0B2443]">Add New Payroll</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full p-1 transition-colors"
            title="Close"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Employee Name *</label>
            <input
              type="text"
              value={newPayroll.employee}
              onChange={(e) => setNewPayroll({...newPayroll, employee: e.target.value})}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#198172]"
              placeholder="Enter employee name"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Role</label>
            <select
              value={newPayroll.role}
              onChange={(e) => setNewPayroll({...newPayroll, role: e.target.value})}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#198172]"
            >
              <option value="Doctor">Doctor</option>
              <option value="Nurse">Nurse</option>
              <option value="Pharmacist">Pharmacist</option>
              <option value="Receptionist">Receptionist</option>
              <option value="Accountant">Accountant</option>
              <option value="Admin">Admin</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Month *</label>
            <input
              type="text"
              value={newPayroll.month}
              onChange={(e) => setNewPayroll({...newPayroll, month: e.target.value})}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#198172]"
              placeholder="e.g., July 2025"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Amount *</label>
            <input
              type="text"
              value={newPayroll.amount}
              onChange={(e) => setNewPayroll({...newPayroll, amount: e.target.value})}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#198172]"
              placeholder="e.g., 5000 or $5000"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
            <select
              value={newPayroll.status}
              onChange={(e) => setNewPayroll({...newPayroll, status: e.target.value})}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#198172]"
            >
              <option value="Paid">Paid</option>
              <option value="Pending">Pending</option>
              <option value="Processing">Processing</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
            <input
              type="date"
              value={newPayroll.date}
              onChange={(e) => setNewPayroll({...newPayroll, date: e.target.value})}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#198172]"
            />
          </div>
        </div>
        
        <div className="flex gap-3 mt-6">
          <button
            onClick={handleSubmit}
            className="flex-1 bg-[#198172] text-white py-2 px-4 rounded-md hover:bg-[#156B5D] transition-colors"
          >
            Add Payroll
          </button>
          <button
            onClick={onClose}
            className="flex-1 bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600 transition-colors"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddPayrollModal;
