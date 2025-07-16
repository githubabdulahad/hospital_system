import React, { useState, useEffect } from 'react';

const EditMedicineSaleModal = ({ isOpen, onClose, onSubmit, sale }) => {
  const [formData, setFormData] = useState({
    medicine: '',
    patient: '',
    quantity: '',
    unitPrice: '',
    date: ''
  });

  const [errors, setErrors] = useState({});

  // Populate form with sale data when modal opens
  useEffect(() => {
    if (sale && isOpen) {
      setFormData({
        medicine: sale.medicine || '',
        patient: sale.patient || '',
        quantity: sale.quantity || '',
        unitPrice: sale.unitPrice?.replace('$', '') || '',
        date: sale.date || ''
      });
    }
  }, [sale, isOpen]);

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

    if (!formData.medicine.trim()) {
      newErrors.medicine = 'Medicine name is required';
    }

    if (!formData.patient.trim()) {
      newErrors.patient = 'Patient name is required';
    }

    if (!formData.quantity || parseInt(formData.quantity) <= 0) {
      newErrors.quantity = 'Valid quantity is required';
    }

    if (!formData.unitPrice || parseFloat(formData.unitPrice) <= 0) {
      newErrors.unitPrice = 'Valid unit price is required';
    }

    if (!formData.date) {
      newErrors.date = 'Date is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      const quantity = parseInt(formData.quantity);
      const unitPrice = parseFloat(formData.unitPrice);
      const totalPrice = quantity * unitPrice;

      const updatedSale = {
        ...sale,
        ...formData,
        quantity: quantity,
        unitPrice: `$${unitPrice.toFixed(2)}`,
        totalPrice: `$${totalPrice.toFixed(2)}`
      };
      
      onSubmit(updatedSale);
      setErrors({});
      onClose();
    }
  };

  const handleClose = () => {
    setErrors({});
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50 animate-fadeIn">
      <div className="bg-white/95 backdrop-blur-md rounded-xl shadow-2xl p-6 w-full max-w-md mx-4 transform transition-all duration-300 ease-out animate-slideUp border border-white/20">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-[#0B2443]">Edit Medicine Sale</h2>
          <button
            onClick={handleClose}
            className="text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full p-1 transition-colors"
            title="Close"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Medicine *
              </label>
              <input
                type="text"
                name="medicine"
                value={formData.medicine}
                onChange={handleChange}
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#198172] ${
                  errors.medicine ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Enter medicine name"
              />
              {errors.medicine && <p className="text-red-500 text-xs mt-1">{errors.medicine}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Patient *
              </label>
              <input
                type="text"
                name="patient"
                value={formData.patient}
                onChange={handleChange}
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#198172] ${
                  errors.patient ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Enter patient name"
              />
              {errors.patient && <p className="text-red-500 text-xs mt-1">{errors.patient}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Quantity *
              </label>
              <input
                type="number"
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
                min="1"
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#198172] ${
                  errors.quantity ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Enter quantity"
              />
              {errors.quantity && <p className="text-red-500 text-xs mt-1">{errors.quantity}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Unit Price ($) *
              </label>
              <input
                type="number"
                name="unitPrice"
                value={formData.unitPrice}
                onChange={handleChange}
                step="0.01"
                min="0"
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#198172] ${
                  errors.unitPrice ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="0.00"
              />
              {errors.unitPrice && <p className="text-red-500 text-xs mt-1">{errors.unitPrice}</p>}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Date *
            </label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#198172] ${
                errors.date ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.date && <p className="text-red-500 text-xs mt-1">{errors.date}</p>}
          </div>

          {formData.quantity && formData.unitPrice && (
            <div className="bg-gray-50 rounded-lg p-3">
              <div className="text-sm text-gray-600">
                <span className="font-medium">Total Price: </span>
                <span className="font-semibold text-[#198172]">
                  ${(parseInt(formData.quantity || 0) * parseFloat(formData.unitPrice || 0)).toFixed(2)}
                </span>
              </div>
            </div>
          )}

          <div className="flex justify-end space-x-3 pt-4">
            <button
              type="button"
              onClick={handleClose}
              className="px-4 py-2 text-gray-600 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-[#198172] text-white rounded-md hover:bg-[#146b61] transition-colors"
            >
              Update Sale
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditMedicineSaleModal;
