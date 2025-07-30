"use client";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import StatCard from '../../../components/compafterlogin/Common/StatCard';

export default function PharmacistDashboard() {
  const [visible, setVisible] = useState(false);
  const router = useRouter();
  
  useEffect(() => {
    setVisible(true);
    document.title = 'Pharmacist Dashboard - Kings Hospital';
  }, []);

  const statData = [
    {
      icon:<svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>,
      stat: '1,847',
      label: 'Total Medicines',
    },
    {
icon:<svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>,
      stat:'23',
      label:'Pending Prescriptions'
    },
    {
      icon:<svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>,
      stat:'8',
      label:'Low Stock Items'
    },
    {
      icon:<svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
              </svg>,
      stat:'£45K',
      label:'Monthly Sales'
    }
  ]

  return (
    <div className={`min-h-screen bg-gradient-to-br from-[#C0E6DA]/30 via-white to-[#198172]/10 transition-opacity duration-700 ${visible ? "opacity-100" : "opacity-0"}`}>
      <div className="max-w-7xl mx-auto p-6" style={{ fontFamily: "'Gill Sans MT', 'Gill Sans', 'GillSans', 'Arial', 'sans-serif'" }}>
        {/* Header Section */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 overflow-hidden mb-6">
          <div className="px-6 py-4 bg-gradient-to-r from-[#198172]/10 to-[#0B2443]/10 border-b border-gray-200">
            <h1 className="text-2xl font-bold text-[#0B2443]">Pharmacist Dashboard</h1>
            <p className="text-sm text-gray-600 mt-1">Manage medicines, inventory, and prescriptions.</p>
          </div>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
          {statData.map((stat, index) => (
            <StatCard key={index} icon={stat.icon} stat={stat.stat} label={stat.label} />
          ))}
        </div>

        {/* Quick Actions */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 overflow-hidden mb-6">
          <div className="px-6 py-4 bg-gradient-to-r from-[#198172]/10 to-[#0B2443]/10 border-b border-gray-200">
            <h2 className="text-xl font-bold text-[#0B2443]">Quick Actions</h2>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <button 
                onClick={() => router.push('/pharmacist/manage-medicine')}
                className="flex flex-col items-center p-4 rounded-xl bg-gradient-to-br from-green-50 to-green-100 hover:from-green-100 hover:to-green-200 transition-all duration-300 group"
              >
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-gray-700">Manage Medicines</span>
              </button>

              <button 
                onClick={() => router.push('/pharmacist/profile')}
                className="flex flex-col items-center p-4 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200 transition-all duration-300 group"
              >
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-gray-700">Update Profile</span>
              </button>

              <button 
                onClick={() => router.push('/pharmacist/medicine-category')}
                className="flex flex-col items-center p-4 rounded-xl bg-gradient-to-br from-purple-50 to-purple-100 hover:from-purple-100 hover:to-purple-200 transition-all duration-300 group"
              >
                <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-gray-700">Check Inventory</span>
              </button>

              <button 
                onClick={() => router.push('/pharmacist/medicine-sales')}
                className="flex flex-col items-center p-4 rounded-xl bg-gradient-to-br from-yellow-50 to-yellow-100 hover:from-yellow-100 hover:to-yellow-200 transition-all duration-300 group"
              >
                <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-gray-700">Sales Reports</span>
              </button>
            </div>
          </div>
        </div>

        {/* Recent Activity & Alerts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 overflow-hidden">
            <div className="px-6 py-4 bg-gradient-to-r from-[#198172]/10 to-[#0B2443]/10 border-b border-gray-200">
              <h2 className="text-xl font-bold text-[#0B2443]">Recent Prescriptions</h2>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <div className="flex items-center p-3 rounded-lg bg-blue-50 border border-blue-200">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white text-xs font-bold">RX</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">Prescription #12345</p>
                    <p className="text-xs text-gray-500">Patient: John Doe - Paracetamol 500mg</p>
                  </div>
                  <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">Pending</span>
                </div>

                <div className="flex items-center p-3 rounded-lg bg-green-50 border border-green-200">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white text-xs font-bold">RX</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">Prescription #12344</p>
                    <p className="text-xs text-gray-500">Patient: Jane Smith - Amoxicillin 250mg</p>
                  </div>
                  <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Completed</span>
                </div>

                <div className="flex items-center p-3 rounded-lg bg-purple-50 border border-purple-200">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white text-xs font-bold">RX</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">Prescription #12343</p>
                    <p className="text-xs text-gray-500">Patient: Mike Johnson - Insulin</p>
                  </div>
                  <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">In Progress</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 overflow-hidden">
            <div className="px-6 py-4 bg-gradient-to-r from-[#198172]/10 to-[#0B2443]/10 border-b border-gray-200">
              <h2 className="text-xl font-bold text-[#0B2443]">Stock Alerts</h2>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <div className="flex items-center p-3 rounded-lg bg-red-50 border border-red-200">
                  <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center mr-3">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">Paracetamol 500mg</p>
                    <p className="text-xs text-gray-500">Only 10 units left</p>
                  </div>
                </div>

                <div className="flex items-center p-3 rounded-lg bg-yellow-50 border border-yellow-200">
                  <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center mr-3">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">Amoxicillin 250mg</p>
                    <p className="text-xs text-gray-500">25 units remaining</p>
                  </div>
                </div>

                <div className="flex items-center p-3 rounded-lg bg-orange-50 border border-orange-200">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center mr-3">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">Insulin Pen</p>
                    <p className="text-xs text-gray-500">Expires in 7 days</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
