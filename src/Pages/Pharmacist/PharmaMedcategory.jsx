import React, { useState, useContext } from 'react'
import { SearchContext } from '../../Context/SearchContext'
import CommonAddButton from '../../Components/compafterlogin/Common/CommonAddButton'
import AddMedicineCategoryModal from '../../Components/compafterlogin/Pharmacist/AddMedicineCategoryModal'
import EditMedicineCategoryModal from '../../Components/compafterlogin/Pharmacist/EditMedicineCategoryModal'
import DeleteMedicineCategoryModal from '../../Components/compafterlogin/Pharmacist/DeleteMedicineCategoryModal'

const medicalCategories = [
  { id: 1, name: "Antibiotics", description: "Bacterial infection treatment" },
  { id: 2, name: "Pain Relief", description: "Analgesics and anti-inflammatory drugs" },
  { id: 3, name: "Cardiovascular", description: "Heart and blood pressure medications" },
  { id: 4, name: "Diabetes", description: "Blood sugar management medications" },
  { id: 5, name: "Respiratory", description: "Breathing and lung medications" },
  { id: 6, name: "Vitamins", description: "Nutritional supplements" },
  { id: 7, name: "Topical", description: "External application medicines" },
  { id: 8, name: "Gastrointestinal", description: "Digestive system medications" },
  { id: 9, name: "Neurological", description: "Brain and nervous system drugs" },
  { id: 10, name: "Dermatology", description: "Skin condition treatments" }
];

export const PharmaMedcategory = () => {
  const [categories, setCategories] = useState(medicalCategories);
  const [currentPage, setCurrentPage] = useState(1);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  
  // Use search context
  const { search } = useContext(SearchContext);

  const itemsPerPage = 10; // Fixed items per page

  // Filter categories based on search term from context
  const filteredCategories = categories.filter(category =>
    category.name.toLowerCase().includes(search.toLowerCase()) ||
    category.description.toLowerCase().includes(search.toLowerCase())
  );

  // Pagination with filtered results
  const totalPages = Math.ceil(filteredCategories.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentCategories = filteredCategories.slice(startIndex, startIndex + itemsPerPage);

  const handleAdd = (newCategory) => {
    setCategories([...categories, newCategory]);
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
  };

  const handleDelete = (category) => {
    setSelectedCategory(category);
    setShowDeleteModal(true);
  };

  const handleConfirmDelete = () => {
    setCategories(categories.filter(cat => cat.id !== selectedCategory.id));
    setSelectedCategory(null);
    setShowDeleteModal(false);
  };

  return (
    <div className="w-full min-h-screen p-6 bg-gray-50" style={{ fontFamily: "'Gill Sans MT', 'Gill Sans', 'GillSans', 'Arial', 'sans-serif'" }}>
      {/* Header Section */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center">
          <svg className="w-8 h-8 text-gray-600 mr-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
          </svg>
          <h1 className="text-2xl font-bold text-gray-700">Medical Category</h1>
        </div>
        
        {/* Add Category Button */}
        <CommonAddButton 
          label="Add Medicine Category"
          onClick={() => setShowAddModal(true)}
        />
      </div>

      {/* Table Section */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <table className="min-w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Description
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Options
                <svg className="w-4 h-4 inline ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M7 10l5 5 5-5z" />
                </svg>
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {currentCategories.map((category) => (
              <tr key={category.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {category.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {category.description}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <div className="flex justify-end space-x-2">
                    <button 
                      onClick={() => handleEdit(category)}
                      className="bg-gray-500 hover:bg-gray-600 text-white px-3 py-1 rounded text-xs flex items-center"
                    >
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                        
                    </button>
                    <button 
                      onClick={() => handleDelete(category)}
                      className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-xs flex items-center"
                    >
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
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

      {/* Pagination Footer */}
      <div className="flex items-center justify-between mt-6">
        <div className="text-sm text-gray-500">
          Showing {startIndex + 1} to {Math.min(startIndex + itemsPerPage, filteredCategories.length)} of {filteredCategories.length} entries
        </div>
        
        <div className="flex items-center space-x-2">
          <button 
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            className="px-3 py-1 bg-gray-200 text-gray-600 rounded disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-300"
          >
            ‹
          </button>
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i + 1}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-3 py-1 rounded ${
                currentPage === i + 1 
                  ? 'bg-gray-800 text-white' 
                  : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
              }`}
            >
              {i + 1}
            </button>
          ))}
          <button 
            onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
            disabled={currentPage === totalPages}
            className="px-3 py-1 bg-gray-200 text-gray-600 rounded disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-300"
          >
            ›
          </button>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-200 text-sm text-gray-500">
        <div>© 2017 King's College Hospital Management System Developed by Creativeitem</div>
        <div>VERSION 4.0</div>
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
        onChange={setSelectedCategory}
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
  )
}
