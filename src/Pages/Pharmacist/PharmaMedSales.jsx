/* eslint-disable no-unused-vars */
import React, { useState, useContext } from 'react'
import { SearchContext } from '../../Context/SearchContext'
import CommonAddButton from '../../Components/compafterlogin/Common/CommonAddButton'
import EditMedicineSaleModal from '../../Components/compafterlogin/Pharmacist/EditMedicineSaleModal'
import DeleteMedicineSaleModal from '../../Components/compafterlogin/Pharmacist/DeleteMedicineSaleModal'

const salesData = [
  {
    id: 1,
    medicine: "Paracetamol",
    totalPrice: "$45.00",
    patient: "John Smith",
    date: "2025-07-14",
    quantity: 3,
    unitPrice: "$15.00"
  },
  {
    id: 2,
    medicine: "Amoxicillin",
    totalPrice: "$170.00",
    patient: "Sarah Johnson",
    date: "2025-07-14",
    quantity: 2,
    unitPrice: "$85.00"
  },
  {
    id: 3,
    medicine: "Lisinopril",
    totalPrice: "$240.00",
    patient: "Michael Brown",
    date: "2025-07-13",
    quantity: 2,
    unitPrice: "$120.00"
  },
  {
    id: 4,
    medicine: "Metformin",
    totalPrice: "$130.00",
    patient: "Emily Davis",
    date: "2025-07-13",
    quantity: 2,
    unitPrice: "$65.00"
  },
  {
    id: 5,
    medicine: "Epival",
    totalPrice: "$299.00",
    patient: "David Wilson",
    date: "2025-07-12",
    quantity: 1,
    unitPrice: "$299.00"
  }
];

export const PharmaMedSales = () => {
  const [sales, setSales] = useState(salesData);
  const [currentPage, setCurrentPage] = useState(1);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedSale, setSelectedSale] = useState(null);
  
  // Use search context
  const { search } = useContext(SearchContext);

  const itemsPerPage = 10; // Fixed items per page

  // Filter sales based on search term from context
  const filteredSales = sales.filter(sale =>
    sale.medicine.toLowerCase().includes(search.toLowerCase()) ||
    sale.patient.toLowerCase().includes(search.toLowerCase()) ||
    sale.totalPrice.toLowerCase().includes(search.toLowerCase())
  );

  // Pagination with filtered results
  const totalPages = Math.ceil(filteredSales.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentSales = filteredSales.slice(startIndex, startIndex + itemsPerPage);

  const handleAdd = (newSale) => {
    setSales([...sales, newSale]);
  };

  const handleEdit = (sale) => {
    setSelectedSale(sale);
    setShowEditModal(true);
  };

  const handleEditSubmit = (updatedSale) => {
    setSales(sales.map(sale => 
      sale.id === updatedSale.id ? updatedSale : sale
    ));
    setSelectedSale(null);
  };

  const handleDelete = (sale) => {
    setSelectedSale(sale);
    setShowDeleteModal(true);
  };

  const handleDeleteConfirm = (saleToDelete) => {
    setSales(sales.filter(sale => sale.id !== saleToDelete.id));
    setSelectedSale(null);
  };

  return (
    <div className="min-h-screen p-6 bg-gray-50" style={{ fontFamily: "'Gill Sans MT', 'Gill Sans', 'GillSans', 'Arial', 'sans-serif'" }}>
      {/* Header Section */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center">
          <svg className="w-8 h-8 text-gray-600 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
          <h1 className="text-2xl font-bold text-gray-700">Medicine Sales</h1>
        </div>
        
        {/* Add Medicine Sale Button */}
        <CommonAddButton 
          label="Add Medicine Sale"
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
                  #
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Medicine
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Total Price
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Patient
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Quantity
                </th>
                <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Options
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {currentSales.length === 0 ? (
                <tr>
                  <td colSpan="7" className="px-4 py-8 text-center text-gray-500">
                    No data available in table
                  </td>
                </tr>
              ) : (
                currentSales.map((sale, index) => (
                  <tr key={sale.id} className="hover:bg-gray-50">
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                      {startIndex + index + 1}
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {sale.medicine}
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500 font-semibold">
                      {sale.totalPrice}
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                      {sale.patient}
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Date(sale.date).toLocaleDateString()}
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500 text-center">
                      {sale.quantity}
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex justify-end space-x-2">
                        <button 
                          onClick={() => handleEdit(sale)}
                          className="bg-gray-500 hover:bg-gray-600 text-white px-3 py-1 rounded text-xs flex items-center transition-colors"
                          title="Edit Sale"
                        >
                          <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                          </svg>
                          
                        </button>
                        <button 
                          onClick={() => handleDelete(sale)}
                          className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-xs flex items-center transition-colors"
                          title="Delete Sale"
                        >
                          <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                          
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

      {/* Pagination Footer */}
      <div className="flex items-center justify-between mt-6">
        <div className="text-sm text-gray-500">
          Showing {currentSales.length === 0 ? 0 : startIndex + 1} to {Math.min(startIndex + itemsPerPage, filteredSales.length)} of {filteredSales.length} entries
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
      <EditMedicineSaleModal
        isOpen={showEditModal}
        onClose={() => {
          setShowEditModal(false);
          setSelectedSale(null);
        }}
        onSubmit={handleEditSubmit}
        sale={selectedSale}
      />

      <DeleteMedicineSaleModal
        isOpen={showDeleteModal}
        onClose={() => {
          setShowDeleteModal(false);
          setSelectedSale(null);
        }}
        onConfirm={handleDeleteConfirm}
        sale={selectedSale}
      />
    </div>
  )
}
