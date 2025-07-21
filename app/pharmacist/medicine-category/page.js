"use client";
import React, { useState, useContext } from 'react'
import EditMedicineCategoryModal from '../../../components/compafterlogin/Pharmacist/EditMedicineCategoryModal'
import AddMedicineCategoryModal from '../../../components/compafterlogin/Pharmacist/AddMedicineCategoryModal'
import DeleteMedicineCategoryModal from '../../../components/compafterlogin/Pharmacist/DeleteMedicineCategoryModal'
import { SearchContext } from '../../../components/Context/SearchContext'
import { FaPills, FaPlus, FaEdit, FaTrash, FaTimes, FaSave, FaEye, FaList } from 'react-icons/fa'
import StatCard from '../../../components/compafterlogin/Common/StatCard';

const medicalCategories = [
  { id: 1, name: "Antibiotics", description: "Bacterial infection treatment", medicineCount: 45, status: "Active" },
  { id: 2, name: "Pain Relief", description: "Analgesics and anti-inflammatory drugs", medicineCount: 32, status: "Active" },
  { id: 3, name: "Cardiovascular", description: "Heart and blood pressure medications", medicineCount: 28, status: "Active" },
  { id: 4, name: "Diabetes", description: "Blood sugar management medications", medicineCount: 19, status: "Active" },
  { id: 5, name: "Respiratory", description: "Breathing and lung medications", medicineCount: 23, status: "Active" },
  { id: 6, name: "Vitamins", description: "Nutritional supplements", medicineCount: 56, status: "Active" },
  { id: 7, name: "Topical", description: "External application medicines", medicineCount: 34, status: "Inactive" },
  { id: 8, name: "Gastrointestinal", description: "Digestive system medications", medicineCount: 27, status: "Active" },
  { id: 9, name: "Neurological", description: "Brain and nervous system drugs", medicineCount: 18, status: "Active" },
  { id: 10, name: "Dermatology", description: "Skin condition treatments", medicineCount: 41, status: "Active" }
];






export default function PharmaMedcategory() {
  const [categories, setCategories] = useState(medicalCategories);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  
  // Use search context
  const { search } = useContext(SearchContext);

  // Filter categories based on search term from context
  const filteredCategories = categories.filter(category =>
    category.name.toLowerCase().includes(search.toLowerCase()) ||
    category.description.toLowerCase().includes(search.toLowerCase()) ||
    category.status.toLowerCase().includes(search.toLowerCase())
  );

  const handleAdd = (newCategory) => {
    setCategories([...categories, newCategory]);
    alert('Category added successfully!');
  };

  const handleEdit = (category) => {
    setSelectedCategory(category);
    setShowEditModal(true);
  };

  const handleSaveEdit = (updatedCategory) => {
    setCategories(categories.map(cat => 
      cat.id === updatedCategory.id ? updatedCategory : cat
    ));
    setSelectedCategory(null);
    alert('Category updated successfully!');
  };

  const handleDelete = (category) => {
    setSelectedCategory(category);
    setShowDeleteModal(true);
  };

  const handleConfirmDelete = () => {
    setCategories(categories.filter(cat => cat.id !== selectedCategory.id));
    setSelectedCategory(null);
    setShowDeleteModal(false);
    alert('Category deleted successfully!');
  };

  const getStatusBadge = (status) => {
    return (
      <span className={`px-2 py-1 text-xs font-medium rounded-full ${
        status === 'Active' 
          ? 'bg-green-100 text-green-800' 
          : 'bg-red-100 text-red-800'
      }`}>
        {status}
      </span>
    );
  };

  const statData = [
    {
      icon: <FaList className="w-5 h-5 text-blue-600" />,
      stat: categories.length,
      label: 'Total Categories'
    },
    {
      icon: <FaPills className="w-6 h-6 text-green-600" />,
      stat: categories.filter(cat => cat.status === 'Active').length,
      label: 'Active Categories'
    },
    {
      icon: <FaPills className="w-6 h-6 text-yellow-600" />,
      stat: categories.reduce((sum, cat) => sum + cat.medicineCount, 0),
      label: 'Total Medicines'
    },
    {
      icon: <FaPills className="w-6 h-6 text-red-600" />,
      stat: categories.filter(cat => cat.status === 'Inactive').length,
      label: 'Inactive Categories'
    }
  ]

  return (
    <div className="p-6" style={{ fontFamily: "'Gill Sans MT', 'Gill Sans', 'GillSans', 'Arial', 'sans-serif'" }}>
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center">
          <FaPills className="w-7 h-7 text-[#0B2443] mr-3" />
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Medicine Categories</h1>
            <p className="text-gray-600 mt-1">Manage and organize medicine categories</p>
          </div>
        </div>
        <button
          onClick={() => setShowAddModal(true)}
          className="bg-[#0B2443] hover:bg-blue-900 text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2 transition-colors shadow-lg"
        >
          <FaPlus className="w-4 h-4" />
          Add Category
        </button>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        {statData.map((stat, index) => (
          <StatCard key={index} icon={stat.icon} stat={stat.stat} label={stat.label} />
        ))}
      </div>

      {/* Table Section */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="p-6">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Category Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Description
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Medicines
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredCategories.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="px-6 py-8 text-center text-gray-500">
                      <FaPills className="w-12 h-12 mx-auto text-gray-300 mb-2" />
                      <p>No categories found.</p>
                    </td>
                  </tr>
                ) : (
                  filteredCategories.map((category) => (
                    <tr key={category.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                            <FaPills className="w-4 h-4 text-[#0B2443]" />
                          </div>
                          <div className="text-sm font-medium text-gray-900">{category.name}</div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-900 max-w-xs truncate">{category.description}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{category.medicineCount}</div>
                        <div className="text-xs text-gray-500">medicines</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {getStatusBadge(category.status)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <div className="flex space-x-2">
                          <button 
                            onClick={() => handleEdit(category)}
                            className="text-green-600 hover:text-green-900 bg-green-50 hover:bg-green-100 px-2 py-1 rounded transition-colors"
                            title="Edit Category"
                          >
                            <FaEdit className="w-3 h-3" />
                          </button>
                          <button 
                            onClick={() => handleDelete(category)}
                            className="text-red-600 hover:text-red-900 bg-red-50 hover:bg-red-100 px-2 py-1 rounded transition-colors"
                            title="Delete Category"
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
      <AddMedicineCategoryModal
        isOpen={showAddModal}
        onClose={() => setShowAddModal(false)}
        onAdd={handleAdd}
      />
      
      <EditMedicineCategoryModal
        isOpen={showEditModal}
        category={selectedCategory}
        onClose={() => {
          setShowEditModal(false);
          setSelectedCategory(null);
        }}
        onSave={handleSaveEdit}
      />
      
      <DeleteMedicineCategoryModal
        isOpen={showDeleteModal}
        category={selectedCategory}
        onClose={() => {
          setShowDeleteModal(false);
          setSelectedCategory(null);
        }}
        onConfirm={handleConfirmDelete}
      />
    </div>
  );
}
