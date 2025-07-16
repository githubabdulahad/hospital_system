import React, { useState, useEffect } from 'react';

const EditMedicineModal = ({ isOpen, onClose, onSubmit, medicine }) => {
  const [formData, setFormData] = useState({
    name: '',
    medicalCategory: '',
    price: '',
    totalQuantity: '',
    manufacturingCompany: '',
    state: 'Available'
  });

  const [errors, setErrors] = useState({});

  // Populate form with medicine data when modal opens
  useEffect(() => {
    if (medicine && isOpen) {
      setFormData({
        name: medicine.name || '',
        medicalCategory: medicine.medicalCategory || '',
        price: medicine.price || '',
        totalQuantity: medicine.totalQuantity || '',
        manufacturingCompany: medicine.manufacturingCompany || '',
        state: medicine.state || 'Available'
      });
    }
  }, [medicine, isOpen]);

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

    if (!formData.name.trim()) {
      newErrors.name = 'Medicine name is required';
    }

    if (!formData.medicalCategory.trim()) {
      newErrors.medicalCategory = 'Category is required';
    }

    if (!formData.price || parseFloat(formData.price) <= 0) {
      newErrors.price = 'Valid price is required';
    }

    if (!formData.totalQuantity || parseInt(formData.totalQuantity) <= 0) {
      newErrors.totalQuantity = 'Valid quantity is required';
    }

    if (!formData.manufacturingCompany.trim()) {
      newErrors.manufacturingCompany = 'Company name is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      const updatedMedicine = {
        ...medicine,
        ...formData,
        price: parseFloat(formData.price).toString(),
        totalQuantity: parseInt(formData.totalQuantity).toString()
      };
      
      onSubmit(updatedMedicine);
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
          <h2 className="text-xl font-bold text-[#0B2443]">Edit Medicine</h2>
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
                Medicine Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#198172] ${
                  errors.name ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Enter medicine name"
              />
              {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Medical Category *
              </label>
              <input
                type="text"
                name="medicalCategory"
                value={formData.medicalCategory}
                onChange={handleChange}
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#198172] ${
                  errors.medicalCategory ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Enter category"
              />
              {errors.medicalCategory && <p className="text-red-500 text-xs mt-1">{errors.medicalCategory}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Price ($) *
              </label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                step="0.01"
                min="0"
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#198172] ${
                  errors.price ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="0.00"
              />
              {errors.price && <p className="text-red-500 text-xs mt-1">{errors.price}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Total Quantity *
              </label>
              <input
                type="number"
                name="totalQuantity"
                value={formData.totalQuantity}
                onChange={handleChange}
                min="1"
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#198172] ${
                  errors.totalQuantity ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Enter quantity"
              />
              {errors.totalQuantity && <p className="text-red-500 text-xs mt-1">{errors.totalQuantity}</p>}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Manufacturing Company *
            </label>
            <input
              type="text"
              name="manufacturingCompany"
              value={formData.manufacturingCompany}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#198172] ${
                errors.manufacturingCompany ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Enter company name"
            />
            {errors.manufacturingCompany && <p className="text-red-500 text-xs mt-1">{errors.manufacturingCompany}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Status
            </label>
            <select
              name="state"
              value={formData.state}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#198172]"
            >
              <option value="Available">Available</option>
              <option value="Low Stock">Low Stock</option>
              <option value="Out of Stock">Out of Stock</option>
            </select>
          </div>

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
              Update Medicine
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditMedicineModal;
