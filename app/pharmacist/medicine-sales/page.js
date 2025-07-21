"use client";
import React, { useState, useContext } from 'react'
import { SearchContext } from '../../../components/Context/SearchContext'
import { FaDollarSign, FaPlus, FaEdit, FaTrash, FaTimes, FaSave, FaChartLine, FaPills, FaUsers, FaCalendar } from 'react-icons/fa'
import StatCard from '../../../components/compafterlogin/Common/StatCard';
import AddMedicineSaleModal from '../../../components/compafterlogin/Pharmacist/AddMedicineSaleModal';
import EditMedicineSaleModal from '../../../components/compafterlogin/Pharmacist/EditMedicineSaleModal';
import DeleteMedicineSaleModal from '../../../components/compafterlogin/Pharmacist/DeleteMedicineSaleModal';

const salesData = [
  {
    id: 1,
    medicine: "Paracetamol",
    totalPrice: 45.00,
    patient: "John Smith",
    date: "2025-07-14",
    quantity: 3,
    unitPrice: 15.00
  },
  {
    id: 2,
    medicine: "Amoxicillin",
    totalPrice: 170.00,
    patient: "Sarah Johnson",
    date: "2025-07-14",
    quantity: 2,
    unitPrice: 85.00
  },
  {
    id: 3,
    medicine: "Lisinopril",
    totalPrice: 240.00,
    patient: "Michael Brown",
    date: "2025-07-13",
    quantity: 2,
    unitPrice: 120.00
  },
  {
    id: 4,
    medicine: "Metformin",
    totalPrice: 130.00,
    patient: "Emily Davis",
    date: "2025-07-13",
    quantity: 2,
    unitPrice: 65.00
  },
  {
    id: 5,
    medicine: "Epival",
    totalPrice: 299.00,
    patient: "David Wilson",
    date: "2025-07-12",
    quantity: 1,
    unitPrice: 299.00
  },
  {
    id: 6,
    medicine: "Ibuprofen",
    totalPrice: 50.00,
    patient: "Lisa Anderson",
    date: "2025-07-12",
    quantity: 2,
    unitPrice: 25.00
  },
  {
    id: 7,
    medicine: "Aspirin",
    totalPrice: 36.00,
    patient: "Robert Taylor",
    date: "2025-07-11",
    quantity: 2,
    unitPrice: 18.00
  },
  {
    id: 8,
    medicine: "Omeprazole",
    totalPrice: 90.00,
    patient: "Jennifer Wilson",
    date: "2025-07-11",
    quantity: 2,
    unitPrice: 45.00
  }
];


export default function PharmaMedSales() {
  const [sales, setSales] = useState(salesData);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedSale, setSelectedSale] = useState(null);
  
  // Form state for AddMedicineSaleModal
  const [form, setForm] = useState({
    medicine: '',
    patient: '',
    quantity: '',
    unitPrice: '',
    date: new Date().toISOString().split('T')[0]
  });
  
  // Use search context
  const { search } = useContext(SearchContext);

  // Filter sales based on search term from context
  const filteredSales = sales.filter(sale =>
    sale.medicine.toLowerCase().includes(search.toLowerCase()) ||
    sale.patient.toLowerCase().includes(search.toLowerCase()) ||
    sale.totalPrice.toString().includes(search.toLowerCase())
  );

  const handleAdd = (e) => {
    e.preventDefault();
    if (!form.medicine.trim() || !form.patient.trim() || !form.quantity || !form.unitPrice) {
      alert('Please fill in all required fields');
      return;
    }
    
    const quantity = parseInt(form.quantity);
    const unitPrice = parseFloat(form.unitPrice);
    const totalPrice = quantity * unitPrice;
    
    const newSale = {
      ...form,
      id: Date.now(),
      quantity,
      unitPrice,
      totalPrice
    };
    
    setSales([...sales, newSale]);
    setForm({
      medicine: '',
      patient: '',
      quantity: '',
      unitPrice: '',
      date: new Date().toISOString().split('T')[0]
    });
    setShowAddModal(false);
    alert('Medicine sale added successfully!');
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
    alert('Sale record updated successfully!');
  };

  const handleDelete = (sale) => {
    setSelectedSale(sale);
    setShowDeleteModal(true);
  };

  const handleDeleteConfirm = (saleToDelete) => {
    setSales(sales.filter(sale => sale.id !== saleToDelete.id));
    setSelectedSale(null);
    alert('Sale record deleted successfully!');
  };

  // Calculate statistics
  const totalSales = sales.reduce((sum, sale) => sum + sale.totalPrice, 0);
  const totalTransactions = sales.length;
  const uniquePatients = new Set(sales.map(sale => sale.patient)).size;
  const averageSale = totalSales / totalTransactions || 0;

  const statData = [
    {
      icon: <FaDollarSign className="w-6 h-6 text-blue-600" />,
      stat: `$${totalSales.toFixed(2)}`,
      label: 'Total Sales'
    },
    {
      icon: <FaChartLine className="w-6 h-6 text-green-600" />,
      stat: totalTransactions,
      label: 'Total Transactions'
    },
    {
      icon: <FaUsers className="w-6 h-6 text-purple-700" />,
      stat: uniquePatients,
      label: 'Unique Patients' 
    },
    {
      icon: <FaPills className="w-6 h-6 text-[#0b2443]" />,
      stat: `$${averageSale.toFixed(2)}`,
      label: 'Average Sale'
    }
  ];

  return (
    <div className="p-6" style={{ fontFamily: "'Gill Sans MT', 'Gill Sans', 'GillSans', 'Arial', 'sans-serif'" }}>
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center">
          <FaChartLine className="w-7 h-7 text-blue-500 mr-3" />
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Medicine Sales</h1>
            <p className="text-gray-600 mt-1">Track and manage medicine sales transactions</p>
          </div>
        </div>
        <button
          onClick={() => setShowAddModal(true)}
          className="bg-[#0B2443] hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2 transition-colors shadow-lg"
        >
          <FaPlus className="w-4 h-4" />
          Add Medicine Sale
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
        <div className="py-6 px-4">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    #
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Medicine
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Patient
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Quantity
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Unit Price
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Total Price
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredSales.length === 0 ? (
                  <tr>
                    <td colSpan={8} className="px-6 py-8 text-center text-gray-500">
                      <FaChartLine className="w-12 h-12 mx-auto text-gray-300 mb-2" />
                      <p>No sales records found.</p>
                    </td>
                  </tr>
                ) : (
                  filteredSales.map((sale, index) => (
                    <tr key={sale.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {index + 1}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                            <FaPills className="w-4 h-4 text-[#0B2443]" />
                          </div>
                          <div className="text-sm font-medium text-gray-900">{sale.medicine}</div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{sale.patient}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900 text-center font-medium">{sale.quantity}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">${sale.unitPrice.toFixed(2)}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-bold text-green-600">${sale.totalPrice.toFixed(2)}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900 flex items-center">
                          <FaCalendar className="w-3 h-3 mr-1 text-gray-400" />
                          {new Date(sale.date).toLocaleDateString()}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <div className="flex space-x-2">
                          <button 
                            onClick={() => handleEdit(sale)}
                            className="text-green-600 hover:text-green-900 bg-green-50 hover:bg-green-100 px-2 py-1 rounded transition-colors"
                            title="Edit Sale"
                          >
                            <FaEdit className="w-3 h-3" />
                          </button>
                          <button 
                            onClick={() => handleDelete(sale)}
                            className="text-red-600 hover:text-red-900 bg-red-50 hover:bg-red-100 px-2 py-1 rounded transition-colors"
                            title="Delete Sale"
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
      {showAddModal && (<AddMedicineSaleModal
        onClose={() => setShowAddModal(false)}
        handleSubmit={handleAdd}
        form={form}
        setForm={setForm}
      />) }
      
      <EditMedicineSaleModal
        isOpen={showEditModal}
        sale={selectedSale}
        onClose={() => {
          setShowEditModal(false);
          setSelectedSale(null);
        }}
        onSubmit={handleEditSubmit}
      />

      <DeleteMedicineSaleModal
        isOpen={showDeleteModal}
        sale={selectedSale}
        onClose={() => {
          setShowDeleteModal(false);
          setSelectedSale(null);
        }}
        onConfirm={handleDeleteConfirm}
      />
    </div>
  );
}
