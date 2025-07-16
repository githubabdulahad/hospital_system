import React from 'react'
import { useNavigate } from "react-router-dom";

const pharmacyStats = [
  { 
    label: "Total Medicines", 
    value: "1,247", 
    icon: (
      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    bgColor: "bg-blue-50",
    iconBg: "bg-blue-100"
  },
  { 
    label: "Pending Prescriptions", 
    value: "23", 
    icon: (
      <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    bgColor: "bg-orange-50",
    iconBg: "bg-orange-100"
  },
  { 
    label: "Low Stock Items", 
    value: "8", 
    icon: (
      <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
    bgColor: "bg-red-50",
    iconBg: "bg-red-100"
  }
];

const recentPrescriptions = [
  { id: "RX-00234", patient: "Sarah Johnson", medicine: "Amoxicillin 500mg", status: "Dispensed", time: "10:30 AM" },
  { id: "RX-00233", patient: "David Lee", medicine: "Metformin 850mg", status: "Pending", time: "11:15 AM" },
  { id: "RX-00232", patient: "Maria Garcia", medicine: "Lisinopril 10mg", status: "Dispensed", time: "2:45 PM" }
];

const lowStockMedicines = [
  { name: "Paracetamol 500mg", current: "45", minimum: "100", urgency: "Medium" },
  { name: "Ibuprofen 400mg", current: "23", minimum: "50", urgency: "High" },
  { name: "Omeprazole 20mg", current: "12", minimum: "75", urgency: "Critical" }
];

export const PharmacistDashboard = () => {
  const navigate = useNavigate();
  
  return (
    <div className="w-full min-h-screen p-6 bg-gray-50" style={{ fontFamily: "'Gill Sans MT', 'Gill Sans', 'GillSans', 'Arial', 'sans-serif'" }}>
      {/* Header Section */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-[#0B2443]  mb-2">Pharmacy Dashboard</h1>
          <p className="text-gray-600">Manage prescriptions and inventory</p>
        </div>
        
        {/* Quick Actions */}
        <div className="flex gap-4">
          <button 
            onClick={() => navigate('/pharmacist/dispense')}
            className="bg-[#0ea5e9] text-white px-4 py-2 rounded-lg font-medium hover:bg-[#0284c7] transition-colors"
          >
            Dispense Medicine
          </button>
          <button 
            onClick={() => navigate('/pharmacist/inventory')}
            className="bg-[#10b981] text-white px-4 py-2 rounded-lg font-medium hover:bg-[#059669] transition-colors"
          >
            Manage Inventory
          </button>
        </div>
      </div>
      
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {pharmacyStats.map((stat, index) => (
          <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-gray-600 uppercase tracking-wide">{stat.label}</h3>
              <div className={`${stat.iconBg} p-2 rounded-lg`}>
                {stat.icon}
              </div>
            </div>
            <div className="mb-2">
              <span className="text-3xl font-bold text-[#0B2443] ">{stat.value}</span>
            </div>
            <p className="text-sm text-gray-500">
              {stat.label === "Total Medicines" && "Available in inventory"}
              {stat.label === "Pending Prescriptions" && "Awaiting dispensing"}
              {stat.label === "Low Stock Items" && "Need restocking"}
            </p>
          </div>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Recent Prescriptions */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-[#0B2443]     ">Recent Prescriptions</h2>
            <button 
              onClick={() => navigate('/pharmacist/prescriptions')}
              className="px-4 py-2 bg-[#C0E6Da] text-[#0B2443]  rounded-lg text-sm font-medium hover:bg-[#047857] transition-colors"
            >
              View All
            </button>
          </div>
          <div className="space-y-4">
            {recentPrescriptions.map((prescription) => (
              <div key={prescription.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex-1">
                  <div className="font-semibold text-[#0B2443] ">{prescription.id}</div>
                  <div className="text-sm text-gray-600">{prescription.patient}</div>
                  <div className="text-sm text-blue-600">{prescription.medicine}</div>
                </div>
                <div className="text-right">
                  <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                    prescription.status === 'Dispensed' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-orange-100 text-orange-800'
                  }`}>
                    {prescription.status}
                  </div>
                  <div className="text-xs text-gray-500 mt-1">{prescription.time}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Low Stock Alert */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-[#0B2443] ">Low Stock Alert</h2>
            <button 
              onClick={() => navigate('/pharmacist/inventory')}
              className="px-4 py-2 bg-[#dc2626] text-white rounded-lg text-sm font-medium hover:bg-[#b91c1c] transition-colors"
            >
              Restock
            </button>
          </div>
          <div className="space-y-4">
            {lowStockMedicines.map((medicine, index) => (
              <div key={index} className="p-4 bg-red-50 rounded-lg border border-red-200">
                <div className="flex justify-between items-start mb-2">
                  <div className="font-semibold text-[#0B2443] ">{medicine.name}</div>
                  <div className={`px-2 py-1 rounded text-xs font-medium ${
                    medicine.urgency === 'Critical' ? 'bg-red-200 text-red-800' :
                    medicine.urgency === 'High' ? 'bg-orange-200 text-orange-800' :
                    'bg-yellow-200 text-yellow-800'
                  }`}>
                    {medicine.urgency}
                  </div>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Current: <span className="font-bold text-red-600">{medicine.current}</span></span>
                  <span className="text-gray-600">Min: <span className="text-[#0B2443] ">{medicine.minimum}</span></span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
