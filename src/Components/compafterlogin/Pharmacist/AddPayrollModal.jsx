import React, { useState } from 'react';

const AddPayrollModal = ({ onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
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

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.pharmacist.trim()) {
      newErrors.pharmacist = 'Pharmacist name is required';
    }

    if (!formData.position.trim()) {
      newErrors.position = 'Position is required';
    }

    if (!formData.baseSalary || parseFloat(formData.baseSalary) <= 0) {
      newErrors.baseSalary = 'Valid base salary is required';
    }

    if (!formData.payPeriod.trim()) {
      newErrors.payPeriod = 'Pay period is required';
    }

    if (!formData.payDate.trim()) {
      newErrors.payDate = 'Pay date is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const calculateNetPay = () => {
    const base = parseFloat(formData.baseSalary) || 0;
    const overtime = parseFloat(formData.overtime) || 0;
    const bonus = parseFloat(formData.bonus) || 0;
    const deductions = parseFloat(formData.deductions) || 0;
    
    return base + overtime + bonus - deductions;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      const payrollData = {
        ...formData,
        baseSalary: parseFloat(formData.baseSalary),
        overtime: parseFloat(formData.overtime) || 0,
        bonus: parseFloat(formData.bonus) || 0,
        deductions: parseFloat(formData.deductions) || 0,
        netPay: calculateNetPay()
      };
      
      onSubmit(payrollData);
    }
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount || 0);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 animate-fadeIn">
      <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl w-full max-w-4xl mx-4 max-h-[90vh] overflow-y-auto animate-slideUp">
        {/* Modal Header */}
        <div className="sticky top-0 bg-white/90 backdrop-blur-md border-b border-gray-200 px-8 py-6 rounded-t-2xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-[#198172] rounded-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-[#0B2443]">Add New Payroll</h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
            >
              <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Modal Content */}
        <form onSubmit={handleSubmit} className="p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column - Employee Information */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-[#0B2443] mb-4">Employee Information</h3>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Pharmacist Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="pharmacist"
                  value={formData.pharmacist}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-[#198172] focus:border-transparent transition-all duration-200 ${
                    errors.pharmacist ? 'border-red-300' : 'border-gray-200'
                  }`}
                  placeholder="Enter pharmacist name"
                />
                {errors.pharmacist && <p className="mt-1 text-sm text-red-600">{errors.pharmacist}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Position <span className="text-red-500">*</span>
                </label>
                <select
                  name="position"
                  value={formData.position}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-[#198172] focus:border-transparent transition-all duration-200 ${
                    errors.position ? 'border-red-300' : 'border-gray-200'
                  }`}
                >
                  <option value="">Select Position</option>
                  <option value="Pharmacy Manager">Pharmacy Manager</option>
                  <option value="Senior Pharmacist">Senior Pharmacist</option>
                  <option value="Clinical Pharmacist">Clinical Pharmacist</option>
                  <option value="Staff Pharmacist">Staff Pharmacist</option>
                  <option value="Pharmacy Technician">Pharmacy Technician</option>
                </select>
                {errors.position && <p className="mt-1 text-sm text-red-600">{errors.position}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Pay Period <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="payPeriod"
                  value={formData.payPeriod}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-[#198172] focus:border-transparent transition-all duration-200 ${
                    errors.payPeriod ? 'border-red-300' : 'border-gray-200'
                  }`}
                  placeholder="e.g., 2024-01-01 to 2024-01-31"
                />
                {errors.payPeriod && <p className="mt-1 text-sm text-red-600">{errors.payPeriod}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Pay Date <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  name="payDate"
                  value={formData.payDate}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-[#198172] focus:border-transparent transition-all duration-200 ${
                    errors.payDate ? 'border-red-300' : 'border-gray-200'
                  }`}
                />
                {errors.payDate && <p className="mt-1 text-sm text-red-600">{errors.payDate}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Status
                </label>
                <select
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-[#198172] focus:border-transparent transition-all duration-200"
                >
                  <option value="Pending">Pending</option>
                  <option value="Processing">Processing</option>
                  <option value="Paid">Paid</option>
                </select>
              </div>
            </div>

            {/* Right Column - Salary Information */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-[#0B2443] mb-4">Salary Information</h3>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Base Salary <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  name="baseSalary"
                  value={formData.baseSalary}
                  onChange={handleChange}
                  step="0.01"
                  min="0"
                  className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-[#198172] focus:border-transparent transition-all duration-200 ${
                    errors.baseSalary ? 'border-red-300' : 'border-gray-200'
                  }`}
                  placeholder="0.00"
                />
                {errors.baseSalary && <p className="mt-1 text-sm text-red-600">{errors.baseSalary}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Overtime Pay
                </label>
                <input
                  type="number"
                  name="overtime"
                  value={formData.overtime}
                  onChange={handleChange}
                  step="0.01"
                  min="0"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-[#198172] focus:border-transparent transition-all duration-200"
                  placeholder="0.00"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Bonus
                </label>
                <input
                  type="number"
                  name="bonus"
                  value={formData.bonus}
                  onChange={handleChange}
                  step="0.01"
                  min="0"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-[#198172] focus:border-transparent transition-all duration-200"
                  placeholder="0.00"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Deductions
                </label>
                <input
                  type="number"
                  name="deductions"
                  value={formData.deductions}
                  onChange={handleChange}
                  step="0.01"
                  min="0"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-[#198172] focus:border-transparent transition-all duration-200"
                  placeholder="0.00"
                />
              </div>

              {/* Net Pay Display */}
              <div className="bg-[#C0E6DA] rounded-lg p-4">
                <label className="block text-sm font-medium text-[#0B2443] mb-2">
                  Net Pay (Calculated)
                </label>
                <div className="text-2xl font-bold text-[#0B2443]">
                  {formatCurrency(calculateNetPay())}
                </div>
              </div>
            </div>
          </div>

          {/* Modal Footer */}
          <div className="flex items-center justify-end space-x-4 mt-8 pt-6 border-t border-gray-200">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-3 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg font-medium transition-colors duration-200"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-3 bg-[#198172] hover:bg-[#0B2443] text-white rounded-lg font-medium transition-colors duration-200"
            >
              Add Payroll
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPayrollModal;
