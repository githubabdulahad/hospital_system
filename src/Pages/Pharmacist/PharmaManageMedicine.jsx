/* eslint-disable no-unused-vars */
import React, { useState, useContext } from 'react'
import { SearchContext } from '../../Context/SearchContext'
import CommonAddButton from '../../Components/compafterlogin/Common/CommonAddButton'
import AddMedicineModal from '../../Components/compafterlogin/Pharmacist/AddMedicineModal'
import EditMedicineModal from '../../Components/compafterlogin/Pharmacist/EditMedicineModal'
import DeleteMedicineModal from '../../Components/compafterlogin/Pharmacist/DeleteMedicineModal'

const medicinesData = [
  { 
    id: 1, 
    name: "Epival", 
    medicalCategory: "Epival", 
    description: "Seizure prevention med", 
    price: "299", 
    totalQuantity: "16", 
    soldQuantity: "0", 
    manufacturingCompany: "Global Pharma", 
    state: "Available" 
  },
  { 
    id: 2, 
    name: "Paracetamol", 
    medicalCategory: "Pain Relief", 
    description: "Pain and fever relief", 
    price: "15", 
    totalQuantity: "150", 
    soldQuantity: "45", 
    manufacturingCompany: "MediCorp", 
    state: "Available" 
  },
  { 
    id: 3, 
    name: "Amoxicillin", 
    medicalCategory: "Antibiotics", 
    description: "Bacterial infection treatment", 
    price: "85", 
    totalQuantity: "200", 
    soldQuantity: "78", 
    manufacturingCompany: "PharmaTech", 
    state: "Available" 
  },
  { 
    id: 4, 
    name: "Lisinopril", 
    medicalCategory: "Cardiovascular", 
    description: "Blood pressure medication", 
    price: "120", 
    totalQuantity: "75", 
    soldQuantity: "23", 
    manufacturingCompany: "CardioMed", 
    state: "Available" 
  },
  { 
    id: 5, 
    name: "Metformin", 
    medicalCategory: "Diabetes", 
    description: "Blood sugar management", 
    price: "65", 
    totalQuantity: "120", 
    soldQuantity: "56", 
    manufacturingCompany: "DiabetCare", 
    state: "Low Stock" 
  }
];

export const PharmaManageMedicine = () => {
  const [medicines, setMedicines] = useState(medicinesData);
  const [currentPage, setCurrentPage] = useState(1);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedMedicine, setSelectedMedicine] = useState(null);
  
  // Use search context
  const { search } = useContext(SearchContext);

  const itemsPerPage = 10; // Fixed items per page

  // Filter medicines based on search term from context
  const filteredMedicines = medicines.filter(medicine =>
    medicine.name.toLowerCase().includes(search.toLowerCase()) ||
    medicine.medicalCategory.toLowerCase().includes(search.toLowerCase()) ||
    medicine.description.toLowerCase().includes(search.toLowerCase()) ||
    medicine.manufacturingCompany.toLowerCase().includes(search.toLowerCase())
  );

  // Pagination with filtered results
  const totalPages = Math.ceil(filteredMedicines.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentMedicines = filteredMedicines.slice(startIndex, startIndex + itemsPerPage);

  const handleAdd = (newMedicine) => {
    setMedicines([...medicines, newMedicine]);
  };

  const handleEdit = (medicine) => {
    setSelectedMedicine(medicine);
    setShowEditModal(true);
  };

  const handleEditSubmit = (updatedMedicine) => {
    setMedicines(medicines.map(med => 
      med.id === updatedMedicine.id ? updatedMedicine : med
    ));
    setSelectedMedicine(null);
  };

  const handleDelete = (medicine) => {
    setSelectedMedicine(medicine);
    setShowDeleteModal(true);
  };

  const handleDeleteConfirm = (medicineToDelete) => {
    setMedicines(medicines.filter(med => med.id !== medicineToDelete.id));
    setSelectedMedicine(null);
  };

  return (
    <div className="min-h-screen p-6 bg-gray-50" style={{ fontFamily: "'Gill Sans MT', 'Gill Sans', 'GillSans', 'Arial', 'sans-serif'" }}>
      {/* Header Section */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center">
          <svg className="w-8 h-8 text-gray-600 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
          </svg>
          <h1 className="text-2xl font-bold text-gray-700">Medicine</h1>
        </div>
        
        {/* Add Medicine Button */}
        <CommonAddButton 
          label="Add Medicine"
          onClick={() => setShowAddModal(true)}
        />
      </div>

      {/* Table Section */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Medicine Name
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Category
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Price
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Total Qty
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Sold Qty
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Company
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {currentMedicines.map((medicine) => (
                <tr key={medicine.id} className="hover:bg-gray-50">
                  <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {medicine.name}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                    {medicine.medicalCategory}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500 font-semibold">
                    ${medicine.price}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500 text-center">
                    {medicine.totalQuantity}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500 text-center">
                    {medicine.soldQuantity}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                    {medicine.manufacturingCompany}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-3 py-1 text-xs font-semibold rounded-full ${
                      medicine.state === 'Available' 
                        ? 'bg-green-100 text-green-800' 
                        : medicine.state === 'Low Stock'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {medicine.state}
                    </span>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex justify-end space-x-2">
                      <button 
                        onClick={() => handleEdit(medicine)}
                        className="bg-gray-500 hover:bg-gray-600 text-white px-3 py-1 rounded text-xs flex items-center transition-colors"
                        title="Edit Medicine"
                      >
                        <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                        
                      </button>
                      <button 
                        onClick={() => handleDelete(medicine)}
                        className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-xs flex items-center transition-colors"
                        title="Delete Medicine"
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
      </div>

      {/* Pagination Footer */}
      <div className="flex items-center justify-between mt-6">
        <div className="text-sm text-gray-500">
          Showing {startIndex + 1} to {Math.min(startIndex + itemsPerPage, filteredMedicines.length)} of {filteredMedicines.length} entries
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

      {/* Modals */}
      <AddMedicineModal
        isOpen={showAddModal}
        onClose={() => setShowAddModal(false)}
        onSubmit={handleAdd}
      />

      <EditMedicineModal
        isOpen={showEditModal}
        onClose={() => {
          setShowEditModal(false);
          setSelectedMedicine(null);
        }}
        onSubmit={handleEditSubmit}
        medicine={selectedMedicine}
      />

      <DeleteMedicineModal
        isOpen={showDeleteModal}
        onClose={() => {
          setShowDeleteModal(false);
          setSelectedMedicine(null);
        }}
        onConfirm={handleDeleteConfirm}
        medicine={selectedMedicine}
      />
    </div>
  )
}