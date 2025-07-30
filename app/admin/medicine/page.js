"use client";
import { useContext, useState } from "react";
import { SearchContext } from "../../../components/Context/SearchContext";
import CommonTable from "../../../components/compafterlogin/Common/CommonTable";
import Toast from "../../../components/compafterlogin/Common/Toast";
import StatCard from "../../../components/compafterlogin/Common/StatCard";
import GenericCard from "../../../components/compafterlogin/Common/GenericCard";
import { FaCheck, FaClock, FaIndustry, FaList, FaVenusMars } from "react-icons/fa";
import { FaCalendarCheck } from "react-icons/fa6";

const Medicine = () => {
  const { search } = useContext(SearchContext);
  const [medicines] = useState([
    {
      id: 1,
      medicineId: "MED001",
      name: "Paracetamol 500mg",
      manufacturer: "PharmaCorp",
      category: "Analgesic",
      stock: 150,
      minStockLevel: 20,
      unitPrice: 2.50,
      expiryDate: "2025-06-15",
      batchNumber: "PC001234",
      location: "Shelf A1",
      status: "Available",
      prescriptionRequired: false,
      notes: "Common pain reliever, fever reducer",
    },
    {
      id: 2,
      medicineId: "MED002",
      name: "Amoxicillin 250mg",
      manufacturer: "MediLab",
      category: "Antibiotic",
      stock: 75,
      minStockLevel: 15,
      unitPrice: 8.75,
      expiryDate: "2024-12-20",
      batchNumber: "ML002456",
      location: "Refrigerator R1",
      status: "Available",
      prescriptionRequired: true,
      notes: "Broad-spectrum antibiotic, requires prescription",
    },
    {
      id: 3,
      medicineId: "MED003",
      name: "Insulin Glargine",
      manufacturer: "DiabetesCare",
      category: "Antidiabetic",
      stock: 25,
      minStockLevel: 10,
      unitPrice: 45.00,
      expiryDate: "2024-08-30",
      batchNumber: "DC003789",
      location: "Refrigerator R2",
      status: "Available",
      prescriptionRequired: true,
      notes: "Long-acting insulin, store in refrigerator",
    },
    {
      id: 4,
      medicineId: "MED004",
      name: "Aspirin 81mg",
      manufacturer: "CardioMed",
      category: "Antiplatelet",
      stock: 8,
      minStockLevel: 25,
      unitPrice: 1.25,
      expiryDate: "2025-03-10",
      batchNumber: "CM004567",
      location: "Shelf B2",
      status: "Low Stock",
      prescriptionRequired: false,
      notes: "Low-dose aspirin for heart protection",
    },
    {
      id: 5,
      medicineId: "MED005",
      name: "Omeprazole 20mg",
      manufacturer: "GastroPharm",
      category: "Proton Pump Inhibitor",
      stock: 45,
      minStockLevel: 15,
      unitPrice: 5.50,
      expiryDate: "2024-11-05",
      batchNumber: "GP005890",
      location: "Shelf C1",
      status: "Available",
      prescriptionRequired: true,
      notes: "For acid reflux and stomach ulcers",
    },
    {
      id: 6,
      medicineId: "MED006",
      name: "Morphine 10mg",
      manufacturer: "PainRelief Inc",
      category: "Opioid Analgesic",
      stock: 12,
      minStockLevel: 5,
      unitPrice: 25.00,
      expiryDate: "2024-09-15",
      batchNumber: "PR006123",
      location: "Controlled Substances Vault",
      status: "Controlled",
      prescriptionRequired: true,
      notes: "Controlled substance, requires special handling",
    },
  ]);

  const [toast, setToast] = useState({ show: false, message: "", type: "success" });
  const [filterCategory, setFilterCategory] = useState("All");
  const [filterStatus, setFilterStatus] = useState("All");

  const filteredMedicines = medicines.filter((medicine) => {
    const matchesSearch = 
      medicine.name.toLowerCase().includes(search.toLowerCase()) ||
      medicine.genericName.toLowerCase().includes(search.toLowerCase()) ||
      medicine.medicineId.toLowerCase().includes(search.toLowerCase()) ||
      medicine.manufacturer.toLowerCase().includes(search.toLowerCase()) ||
      medicine.category.toLowerCase().includes(search.toLowerCase());
    
    const matchesCategory = filterCategory === "All" || medicine.category === filterCategory;
    const matchesStatus = filterStatus === "All" || medicine.status === filterStatus;
    
    return matchesSearch && matchesCategory && matchesStatus;
  });

 

  const hideToast = () => {
    setToast({ show: false, message: "", type: "success" });
  };

  const getStatusBadge = (status) => {
    const statusStyles = {
      Available: "bg-green-100 text-green-800",
      "Low Stock": "bg-yellow-100 text-yellow-800",
      "Out of Stock": "bg-red-100 text-red-800",
      Controlled: "bg-purple-100 text-purple-800",
      Expired: "bg-gray-100 text-gray-800",
    };
    
    return (
      <span className={`px-2 py-1 text-xs font-medium rounded-full ${statusStyles[status] || 'bg-gray-100 text-gray-800'}`}>
        {status}
      </span>
    );
  };

  const getCategoryBadge = (category) => {
    const categoryColors = {
      "Analgesic": "bg-blue-100 text-blue-800",
      "Antibiotic": "bg-red-100 text-red-800",
      "Antidiabetic": "bg-green-100 text-green-800",
      "Antiplatelet": "bg-orange-100 text-orange-800",
      "Proton Pump Inhibitor": "bg-purple-100 text-purple-800",
      "Opioid Analgesic": "bg-gray-100 text-gray-800",
    };
    
    return (
      <span className={`px-2 py-1 text-xs font-medium rounded ${categoryColors[category] || 'bg-gray-100 text-gray-800'}`}>
        {category}
      </span>
    );
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount);
  };




  // Statistics
  const totalMedicines = medicines.length;
  const lowStockMedicines = medicines.filter(m => m.status === "Low Stock").length;
  const controlledSubstances = medicines.filter(m => m.status === "Controlled").length;
  const totalValue = medicines.reduce((sum, medicine) => sum + (medicine.stock * medicine.unitPrice), 0);

  const statData = [
    {
      icon:<svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2H5a2 2 0 00-2 2v2M7 7h10" />
              </svg>,
      stat: totalMedicines,
      label: "Total Medicines"
    },
    {
      icon:<svg className="w-5 h-5 text-yellow-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">  
                <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>,
              stat: lowStockMedicines,
            label: "Low Stock Medicines"
          },
    {
      icon:<svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>, 
      stat: controlledSubstances,
      label: "Controlled Substances"
    },
    {
      icon:<svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>,
      stat: formatCurrency(totalValue),
      label: "Total Value of Medicines"
    }
  ]
  return (
    <div
      className="p-6"
      style={{
        fontFamily:
          "'Gill Sans MT', 'Gill Sans', 'GillSans', 'Arial', 'sans-serif'",
      }}
    >
      <div className="flex items-center mb-6">
        <span className="text-2xl mr-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-7 h-7 text-green-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 14.5M14.25 3.104c.251.023.501.05.75.082M19.8 14.5l-5.069 5.069A2.25 2.25 0 0113.5 21.186h-3A2.25 2.25 0 019.169 19.8L4.1 14.731A2.25 2.25 0 014.1 12.269l5.069-5.069A2.25 2.25 0 0110.5 6.186h3a2.25 2.25 0 011.331.414l5.069 5.069a2.25 2.25 0 010 3.182z"
            />
          </svg>
        </span>
        <h2 className="text-3xl font-semibold text-[#0b2443]">Medicine Inventory</h2>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {statData.map((stat, index) => (
                  <StatCard icon={stat.icon} stat={stat.stat} label={stat.label} key={index} />
                ))}
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 mb-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
          <select
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <option value="All">All Categories</option>
            <option value="Analgesic">Analgesic</option>
            <option value="Antibiotic">Antibiotic</option>
            <option value="Antidiabetic">Antidiabetic</option>
            <option value="Antiplatelet">Antiplatelet</option>
            <option value="Proton Pump Inhibitor">Proton Pump Inhibitor</option>
            <option value="Opioid Analgesic">Opioid Analgesic</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <option value="All">All Status</option>
            <option value="Available">Available</option>
            <option value="Low Stock">Low Stock</option>
            <option value="Out of Stock">Out of Stock</option>
            <option value="Controlled">Controlled</option>
            <option value="Expired">Expired</option>
          </select>
        </div>
      </div>

      <div className ="hidden md:block">
        <CommonTable
        columns={[
          { label: "Medicine ID", key: "medicineId" },
          { label: "Name", key: "name" },
          { 
            label: "Category", 
            key: "category", 
            render: (medicine) => getCategoryBadge(medicine.category)
          },
          { label: "Stock", key: "stock" },
          { 
            label: "Unit Price", 
            key: "unitPrice", 
            render: (medicine) => (
              <span className="font-semibold text-green-600">
                {formatCurrency(medicine.unitPrice)}
              </span>
            )
          },
          { label: "Expiry Date", key: "expiryDate" },
          { label: "Location", key: "location" },
          { 
            label: "Status", 
            key: "status", 
            render: (medicine) => getStatusBadge(medicine.status)
          },
        ]}
        data={filteredMedicines}
      />
      </div>

      <div className="block md:hidden">
                                <h1 className="text-2xl font-bold text-center text-[#0b2443] mb-2">
                                  Medicine Inventory
                                </h1>
                                <div className="grid grid-cols-2 gap-4">
                                  {filteredMedicines.length === 0 ? (
                                    <div className="text-center text-gray-500 py-8 col-span-2">
                                      <FaUser className="w-12 h-12 mx-auto text-gray-300 mb-2" />
                                      <p>No medicines found.</p>
                                    </div>
                                  ) : (
                                    filteredMedicines.map((medicine) => (
                                      <GenericCard
                                        key={medicine.id}
                                        data={medicine}
                                        hospitalFields={[
                                          {
                                            key: "stock",
                                            icon: <FaCheck className="w-3 h-3" />,
                                          },
                                          {
                                            key: "expiryDate",
                                            icon: <FaCalendarCheck className="w-3 h-3" />,
                                          },
                                          {
                                            key: "status",
                                            icon: <FaClock className="w-3 h-3" />,
                                          },
                                        ]}
                                        personalFields={[
                                          {
                                            key: "manufacturer",
                                            icon: <FaIndustry/>,
                                          },
                                          {
                                            key: "category",
                                            icon: <FaList  />,
                                          }
                                        ]}
                                        // Optionally add actions here if needed
                                      />
                                    ))
                                  )}
                                </div>
                              </div>

      <Toast
        message={toast.message}
        isVisible={toast.show}
        type={toast.type}
        onClose={hideToast}
      />
    </div>
  );
};

export default Medicine;
