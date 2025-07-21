"use client";
import React, { useState, useContext } from "react";
import { SearchContext } from "../../../components/Context/SearchContext";
import AddMedicineModal from '../../../components/compafterlogin/Pharmacist/AddMedicineModal'
import EditMedicineModal from '../../../components/compafterlogin/Pharmacist/EditMedicineModal'
import DeleteMedicineModal from '../../../components/compafterlogin/Pharmacist/DeleteMedicineModal'
import {
  FaPills,
  FaPlus,
  FaEdit,
  FaTrash,
  FaTimes,
  FaSave,
  FaEye,
  FaIndustry,
  FaDollarSign,
} from "react-icons/fa";
import StatCard from "../../../components/compafterlogin/Common/StatCard";

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
    state: "Available",
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
    state: "Available",
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
    state: "Available",
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
    state: "Available",
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
    state: "Low Stock",
  },
  {
    id: 6,
    name: "Ibuprofen",
    medicalCategory: "Pain Relief",
    description: "Anti-inflammatory medication",
    price: "25",
    totalQuantity: "180",
    soldQuantity: "67",
    manufacturingCompany: "MediCorp",
    state: "Available",
  },
  {
    id: 7,
    name: "Aspirin",
    medicalCategory: "Cardiovascular",
    description: "Blood thinner and pain relief",
    price: "18",
    totalQuantity: "220",
    soldQuantity: "89",
    manufacturingCompany: "PharmaTech",
    state: "Available",
  },
  {
    id: 8,
    name: "Omeprazole",
    medicalCategory: "Gastrointestinal",
    description: "Acid reflux treatment",
    price: "45",
    totalQuantity: "95",
    soldQuantity: "34",
    manufacturingCompany: "GastroMed",
    state: "Available",
  },
];

export default function PharmaManageMedicine() {
  const [medicines, setMedicines] = useState(medicinesData);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedMedicine, setSelectedMedicine] = useState(null);

  // Use search context
  const { search } = useContext(SearchContext);

  // Filter medicines based on search term from context
  const filteredMedicines = medicines.filter(
    (medicine) =>
      medicine.name.toLowerCase().includes(search.toLowerCase()) ||
      medicine.medicalCategory.toLowerCase().includes(search.toLowerCase()) ||
      medicine.description.toLowerCase().includes(search.toLowerCase()) ||
      medicine.manufacturingCompany.toLowerCase().includes(search.toLowerCase())
  );

  const handleAdd = (newMedicine) => {
    setMedicines([...medicines, newMedicine]);
    alert("Medicine added successfully!");
  };

  const handleEdit = (medicine) => {
    setSelectedMedicine(medicine);
    setShowEditModal(true);
  };

  const handleEditSubmit = (updatedMedicine) => {
    setMedicines(
      medicines.map((med) =>
        med.id === updatedMedicine.id ? updatedMedicine : med
      )
    );
    setSelectedMedicine(null);
    alert("Medicine updated successfully!");
  };

  const handleDelete = (medicine) => {
    setSelectedMedicine(medicine);
    setShowDeleteModal(true);
  };

  const handleDeleteConfirm = (medicineToDelete) => {
    setMedicines(medicines.filter((med) => med.id !== medicineToDelete.id));
    setSelectedMedicine(null);
    alert("Medicine deleted successfully!");
  };

  const getStatusBadge = (status) => {
    const statusStyles = {
      Available: "bg-green-100 text-green-800",
      "Low Stock": "bg-yellow-100 text-yellow-800",
      "Out of Stock": "bg-red-100 text-red-800",
    };
    return statusStyles[status] || "bg-gray-100 text-gray-800";
  };

  const statData = [
    {
      icon: <FaPills className="w-6  h-6 text-blue-600" />,
      stat: medicines.length,
      label: "Total Medicines",
    },
    {
      icon: <FaPills className="w-6 h-6 text-green-600" />,
      stat: medicines.filter((med) => med.state === "Available").length,
      label: "Available Medicines",
    },
    {
      icon: <FaPills className="w-6 h-6 text-yellow-600" />,
      stat: medicines.filter((med) => med.state === "Low Stock").length,
      label: "Low Stock Items",
    },
    {
      icon: <FaDollarSign className="w-6 h-6 text-purple-600" />,
      stat: `$${medicines
        .reduce(
          (sum, med) =>
            sum + parseFloat(med.price) * parseInt(med.totalQuantity),
          0
        )
        .toLocaleString()}`,
      label: "Total Value",
    },
  ];

  return (
    <div
      className="p-6"
      style={{
        fontFamily:
          "'Gill Sans MT', 'Gill Sans', 'GillSans', 'Arial', 'sans-serif'",
      }}
    >
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center">
          <FaPills className="w-7 h-7 text-[#0B2443] mr-3" />
          <div>
            <h1 className="text-2xl font-bold text-gray-800">
              Medicine Management
            </h1>
            <p className="text-gray-600 mt-1">
              Manage pharmacy medicine inventory and stock
            </p>
          </div>
        </div>
        <button
          onClick={() => setShowAddModal(true)}
          className="bg-[#0B2443] hover:bg-blue-900 text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2 transition-colors shadow-lg"
        >
          <FaPlus className="w-4 h-4" />
          Add Medicine
        </button>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        {statData.map((stat, index) => (
          <StatCard
            key={index}
            icon={stat.icon}
            stat={stat.stat}
            label={stat.label}
          />
        ))}
      </div>

      {/* Table Section */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="py-6 px-3">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
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
                    Stock
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Company
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredMedicines.length === 0 ? (
                  <tr>
                    <td
                      colSpan={7}
                      className="px-6 py-8 text-center text-gray-500"
                    >
                      <FaPills className="w-12 h-12 mx-auto text-gray-300 mb-2" />
                      <p>No medicines found.</p>
                    </td>
                  </tr>
                ) : (
                  filteredMedicines.map((medicine) => (
                    <tr key={medicine.id} className="hover:bg-gray-50">
                      <td className="px-3 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                            <FaPills className="w-4 h-4 text-[#0B2443]" />
                          </div>
                          <div>
                            <div className="text-sm font-medium text-gray-900">
                              {medicine.name}
                            </div>
                            <div className="text-sm text-gray-500">
                              {medicine.description}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-5 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {medicine.medicalCategory}
                        </div>
                      </td>
                      <td className="px-5 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">
                          ${medicine.price}
                        </div>
                      </td>
                      <td className="px-5 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          Total: {medicine.totalQuantity}
                        </div>
                        <div className="text-sm text-gray-500">
                          Sold: {medicine.soldQuantity}
                        </div>
                      </td>
                      <td className="px-5 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900 flex items-center">
                          <FaIndustry className="w-3 h-3 mr-1 text-gray-400" />
                          {medicine.manufacturingCompany}
                        </div>
                      </td>
                      <td className="px-5 py-4 whitespace-nowrap">
                        <span
                          className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusBadge(
                            medicine.state
                          )}`}
                        >
                          {medicine.state}
                        </span>
                      </td>
                      <td className="px-5 py-4 whitespace-nowrap text-sm font-medium">
                        <div className="flex space-x-2">
                          <button
                            onClick={() => handleEdit(medicine)}
                            className="text-green-600 hover:text-green-900 bg-green-50 hover:bg-green-100 px-2 py-1 rounded transition-colors"
                            title="Edit Medicine"
                          >
                            <FaEdit className="w-3 h-3" />
                          </button>
                          <button
                            onClick={() => handleDelete(medicine)}
                            className="text-red-600 hover:text-red-900 bg-red-50 hover:bg-red-100 px-2 py-1 rounded transition-colors"
                            title="Delete Medicine"
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
  );
}
