"use client";
import { useState } from 'react';

const AddDepartmentModal = ({ isOpen, onClose, onAdd }) => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    headOfDepartment: '',
    doctorCount: '',
    established: '',
    image: '',
    facilities: ''
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
    
    if (!formData.name.trim()) newErrors.name = 'Department name is required';
    if (!formData.description.trim()) newErrors.description = 'Description is required';
    if (!formData.headOfDepartment.trim()) newErrors.headOfDepartment = 'Head of Department is required';
    if (!formData.doctorCount || formData.doctorCount < 1) newErrors.doctorCount = 'Valid doctor count is required';
    if (!formData.established.trim()) newErrors.established = 'Established year is required';
    if (!formData.facilities.trim()) newErrors.facilities = 'Facilities are required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const newDepartment = {
        id: Date.now(), // Simple ID generation
        name: formData.name,
        description: formData.description,
        headOfDepartment: formData.headOfDepartment,
        doctorCount: parseInt(formData.doctorCount),
        established: formData.established,
        image: formData.image || 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop&crop=center',
        facilities: formData.facilities.split(',').map(f => f.trim()).filter(f => f)
      };
      
      onAdd(newDepartment);
      handleClose();
    }
  };

  const handleClose = () => {
    setFormData({
      name: '',
      description: '',
      headOfDepartment: '',
      doctorCount: '',
      established: '',
      image: '',
      facilities: ''
    });
    setErrors({});
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 ">
      <div className="bg-white pl-3 rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto" style={{ fontFamily: "'Gill Sans MT', 'Gill Sans', 'GillSans', 'Arial', 'sans-serif'" }}>
        {/* Modal Header */}
        <div className="flex items-center justify-between p-8 border-b border-gray-200">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-[#C0E6DA] rounded-full flex items-center justify-center mr-3">
              <svg className="w-5 h-5 text-[#198172]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[#0B2443]">Add New Department</h2>
              <p className="text-gray-600 text-sm">Create a new hospital department</p>
            </div>
          </div>
          <button
            onClick={handleClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Modal Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Department Name */}
            <div>
              <label className="block text-sm font-semibold text-[#0B2443] mb-2">
                Department Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#198172] transition-colors ${
                  errors.name ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="e.g., Cardiology"
              />
              {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
            </div>

            {/* Head of Department */}
            <div>
              <label className="block text-sm font-semibold text-[#0B2443] mb-2">
                Head of Department *
              </label>
              <input
                type="text"
                name="headOfDepartment"
                value={formData.headOfDepartment}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#198172] transition-colors ${
                  errors.headOfDepartment ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="e.g., Dr. John Smith"
              />
              {errors.headOfDepartment && <p className="text-red-500 text-xs mt-1">{errors.headOfDepartment}</p>}
            </div>

            {/* Doctor Count */}
            <div>
              <label className="block text-sm font-semibold text-[#0B2443] mb-2">
                Number of Doctors *
              </label>
              <input
                type="number"
                name="doctorCount"
                value={formData.doctorCount}
                onChange={handleChange}
                min="1"
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#198172] transition-colors ${
                  errors.doctorCount ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="e.g., 8"
              />
              {errors.doctorCount && <p className="text-red-500 text-xs mt-1">{errors.doctorCount}</p>}
            </div>

            {/* Established Year */}
            <div>
              <label className="block text-sm font-semibold text-[#0B2443] mb-2">
                Established Year *
              </label>
              <input
                type="text"
                name="established"
                value={formData.established}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#198172] transition-colors ${
                  errors.established ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="e.g., 2020"
              />
              {errors.established && <p className="text-red-500 text-xs mt-1">{errors.established}</p>}
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-semibold text-[#0B2443] mb-2">
              Description *
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="4"
              className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#198172] transition-colors resize-none ${
                errors.description ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Comprehensive description of the department's services and expertise..."
            />
            {errors.description && <p className="text-red-500 text-xs mt-1">{errors.description}</p>}
          </div>

          {/* Facilities */}
          <div>
            <label className="block text-sm font-semibold text-[#0B2443] mb-2">
              Key Facilities *
            </label>
            <input
              type="text"
              name="facilities"
              value={formData.facilities}
              onChange={handleChange}
              className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#198172] transition-colors ${
                errors.facilities ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="e.g., ECG, Echo, Cardiac Catheterization, Pacemaker (comma separated)"
            />
            {errors.facilities && <p className="text-red-500 text-xs mt-1">{errors.facilities}</p>}
            <p className="text-gray-500 text-xs mt-1">Separate multiple facilities with commas</p>
          </div>

          {/* Department Image URL */}
          <div>
            <label className="block text-sm font-semibold text-[#0B2443] mb-2">
              Department Image URL (Optional)
            </label>
            <input
              type="url"
              name="image"
              value={formData.image}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#198172] transition-colors"
              placeholder="https://example.com/image.jpg"
            />
            <p className="text-gray-500 text-xs mt-1">Leave empty to use a default image</p>
          </div>

          {/* Form Actions */}
          <div className="flex items-center justify-end space-x-4 pt-6 border-t border-gray-200">
            <button
              type="button"
              onClick={handleClose}
              className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-3 bg-[#198172] text-white rounded-lg hover:bg-[#0B2443] transition-colors font-medium flex items-center space-x-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              <span>Add Department</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddDepartmentModal;
