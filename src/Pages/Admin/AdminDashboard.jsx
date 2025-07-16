import React from 'react'
import { useNavigate } from "react-router-dom";

const stats = [
  { 
    label: "Total Patients", 
    value: "245", 
    icon: (
      <svg className="w-8 h-8 text-[#198172]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ), 
    bgColor: "bg-blue-50",
    // iconBg: "bg-blue-100"
  },
  { 
    label: "Active Doctors", 
    value: "18", 
    icon: (
      <svg className="w-8 h-8 text-[#198172]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        <path d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4" />
      </svg>
    ), 
    bgColor: "bg-green-50",
    // iconBg: "bg-green-100"
  },
  { 
    label: "Pharmacists", 
    value: "5", 
    icon: (
      <svg className="w-8 h-8 text-[#198172]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ), 
    bgColor: "bg-purple-50",
    // iconBg: "bg-purple-100"
  },
  { 
    label: "Accountants", 
    value: "3", 
    icon: (
      <svg className="w-8 h-8 text-[#198172]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ), 
    bgColor: "bg-orange-50",
    // iconBg: "bg-orange-100"
  }
];

const AdminDashboard = () => {
  const navigate = useNavigate();
  
  return (
    <div className="w-full min-h-screen p-6 bg-gray-50" style={{ fontFamily: "'Gill Sans MT', 'Gill Sans', 'GillSans', 'Arial', 'sans-serif'" }}>
      {/* Header Section with Action Buttons */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-[#0B2443] mb-2">Dashboard</h1>
          <p className="text-gray-600">Welcome to King's College Hospital London Dashboard</p>
        </div>
        
        {/* Action Buttons */}
        <div className="flex gap-4 ">
          <button 
            onClick={() => navigate('/admin/accountants')}
            className="bg-[#0ea5e9] text-white px-4 py-2 rounded-lg font-medium hover:bg-[#0284c7] transition-colors"
          >
            New Accountant
          </button>
          <button 
            onClick={() => navigate('/admin/patients')}
            className="bg-[#10b981] text-white px-4 py-2 rounded-lg font-medium hover:bg-[#059669] transition-colors"
          >
            New Patient
          </button>
          <button 
            onClick={() => navigate('/admin/doctors')}
            className="bg-[#f59e0b] text-white px-4 py-2 rounded-lg font-medium hover:bg-[#d97706] transition-colors"
          >
            New Doctor
          </button>
        </div>
      </div>
      
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-[#0B2443]  uppercase tracking-wide">{stat.label}</h3>
              <div className={`${stat.iconBg} p-2 rounded-lg`}>
                {stat.icon}
              </div>
            </div>
            <div className="mb-2">
              <span className="text-3xl font-bold text-[#0B2443] ">{stat.value}</span>
            </div>
            <p className="text-sm text-gray-500">
              {stat.label === "Total Patients" && "Total registered patients"}
              {stat.label === "Active Doctors" && "Currently available"}
              {stat.label === "Pharmacists" && "Total registered pharmacists"}
              {stat.label === "Accountants" && "Total registered accountants"}
            </p>
          </div>
        ))}
      </div>

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Recent Activities */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-[#0B2443] ">Recent Activities</h2>
            <button 
              onClick={() => navigate('/admin/activities')}
              className="px-4 py-2 bg-[#C0E6DA] text-[#0B2443]  rounded-lg text-sm font-medium hover:bg-[#047857] transition-colors"
            >
              View All
            </button>
          </div>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div>
                <p className="font-medium text-[#0B2443] ">New Patient Registered</p>
                <p className="text-sm text-gray-500">Sarah Johnson - 2 hours ago</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="font-medium text-[#0B2443] ">Doctor Added</p>
                <p className="text-sm text-gray-500">Dr. Michael Brown - 4 hours ago</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <div>
                <p className="font-medium text-[#0B2443] ">Pharmacist Update</p>
                <p className="text-sm text-gray-500">Inventory restocked - 6 hours ago</p>
              </div>
            </div>
          </div>
        </div>

        {/* System Overview */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-[#0B2443] ">System Overview</h2>
            <button 
              onClick={() => navigate('/admin/system')}
              className="px-4 py-2 bg-[#C0E6DA] text-[#0B2443]  rounded-lg text-sm font-medium hover:bg-[#047857] transition-colors"
            >
              Manage
            </button>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="font-medium text-[#0B2443] ">Server Status</span>
              </div>
              <span className="text-sm text-green-600 font-medium">Online</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="font-medium text-[#0B2443] ">Database</span>
              </div>
              <span className="text-sm text-blue-600 font-medium">Connected</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <span className="font-medium text-[#0B2443] ">Backup Status</span>
              </div>
              <span className="text-sm text-orange-600 font-medium">Scheduled</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="font-medium text-[#0B2443] ">Security</span>
              </div>
              <span className="text-sm text-green-600 font-medium">Secure</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Quick Actions Panel */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h2 className="text-xl font-semibold mb-6 text-[#0B2443] ">Quick Actions</h2>
        <div className="space-y-4">
          <button 
            onClick={() => navigate('/admin/patients')}
            className="w-full bg-blue-100 hover:bg-blue-200 text-blue-700 py-4 rounded-lg font-medium transition-colors text-left px-6"
          >
            Manage Patients
          </button>
          <button 
            onClick={() => navigate('/admin/doctors')}
            className="w-full bg-green-100 hover:bg-green-200 text-green-700 py-4 rounded-lg font-medium transition-colors text-left px-6"
          >
            Manage Doctors
          </button>
          <button 
            onClick={() => navigate('/admin/pharmacists')}
            className="w-full bg-orange-100 hover:bg-orange-200 text-orange-700 py-4 rounded-lg font-medium transition-colors text-left px-6"
          >
            Manage Pharmacists
          </button>
          <button 
            onClick={() => navigate('/admin/accountants')}
            className="w-full bg-green-100 hover:bg-green-200 text-green-700 py-4 rounded-lg font-medium transition-colors text-left px-6"
          >
            Manage Accountants
          </button>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard
