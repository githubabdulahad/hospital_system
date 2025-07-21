import React, { useState } from 'react';
import {  FaPlus, FaTimes, FaSave } from 'react-icons/fa';

const AddPayrollModal = ({ isOpen, onClose, onAdd }) => {
  const [form, setForm] = useState({
    pharmacist: '',
    position: '',
    baseSalary: '',
    overtime: '',
    bonus: '',
    deductions: '',
    payPeriod: '',
    payDate: '',
    status: 'Pending'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.pharmacist.trim() || !form.position.trim() || !form.baseSalary) {
      alert('Please fill in all required fields');
      return;
    }
    
    const baseSalary = parseFloat(form.baseSalary) || 0;
    const overtime = parseFloat(form.overtime) || 0;
    const bonus = parseFloat(form.bonus) || 0;
    const deductions = parseFloat(form.deductions) || 0;
    const netPay = baseSalary + overtime + bonus - deductions;

    const newPayroll = {
      ...form,
      baseSalary,
      overtime,
      bonus,
      deductions,
      netPay
    };
    
    onAdd(newPayroll);
    setForm({
      pharmacist: '',
      position: '',
      baseSalary: '',
      overtime: '',
      bonus: '',
      deductions: '',
      payPeriod: '',
      payDate: '',
      status: 'Pending'
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl mx-4 max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
            <FaPlus className="w-5 h-5 text-blue-500" />
            Add Payroll Record
          </h3>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <FaTimes className="w-5 h-5 text-gray-600" />
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Pharmacist Name *</label>
              <input
                type="text"
                value={form.pharmacist}
                onChange={(e) => setForm({ ...form, pharmacist: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter pharmacist name"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Position *</label>
              <select
                value={form.position}
                onChange={(e) => setForm({ ...form, position: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              >
                <option value="">Select position</option>
                <option value="Senior Pharmacist">Senior Pharmacist</option>
                <option value="Clinical Pharmacist">Clinical Pharmacist</option>
                <option value="Pharmacy Manager">Pharmacy Manager</option>
                <option value="Staff Pharmacist">Staff Pharmacist</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Base Salary *</label>
              <input
                type="number"
                value={form.baseSalary}
                onChange={(e) => setForm({ ...form, baseSalary: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter base salary"
                min="0"
                step="0.01"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Overtime</label>
              <input
                type="number"
                value={form.overtime}
                onChange={(e) => setForm({ ...form, overtime: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter overtime amount"
                min="0"
                step="0.01"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Bonus</label>
              <input
                type="number"
                value={form.bonus}
                onChange={(e) => setForm({ ...form, bonus: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter bonus amount"
                min="0"
                step="0.01"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Deductions</label>
              <input
                type="number"
                value={form.deductions}
                onChange={(e) => setForm({ ...form, deductions: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter deductions amount"
                min="0"
                step="0.01"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Pay Period</label>
              <input
                type="text"
                value={form.payPeriod}
                onChange={(e) => setForm({ ...form, payPeriod: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="e.g., 2024-01-01 to 2024-01-31"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Pay Date</label>
              <input
                type="date"
                value={form.payDate}
                onChange={(e) => setForm({ ...form, payDate: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
            <select
              value={form.status}
              onChange={(e) => setForm({ ...form, status: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="Pending">Pending</option>
              <option value="Processing">Processing</option>
              <option value="Paid">Paid</option>
            </select>
          </div>
          
          <div className="flex justify-end space-x-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white hover:bg-blue-600 rounded-lg transition-colors flex items-center gap-2"
            >
              <FaSave className="w-4 h-4" />
              Add Payroll
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPayrollModal;
