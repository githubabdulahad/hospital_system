"use client";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import StatCard from '../../../components/compafterlogin/Common/StatCard';

export default function DoctorDashboard() {
  const [visible, setVisible] = useState(false);
  const router = useRouter();
  
  useEffect(() => {
    setVisible(true);
    document.title = 'Doctor Dashboard - Kings Hospital';
  }, []);

  const statData = [
    {
      icon: <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/></svg>,
      stat : '147', 
      label: 'Total Patients'
    },
    {
      icon: <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>,
      stat : '12', 
      label: 'Today\'s Appointments'
    },
    {
      icon: <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>,
      stat : '8', 
      label: 'Pending Requests'
    },
    {
      icon: <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>,
      stat : '23', 
      label: 'Prescriptions This Week'
    }
  ]

  return (
    <div className={`min-h-screen bg-gradient-to-br from-[#C0E6DA]/30 via-white to-[#198172]/10 transition-opacity duration-700 ${visible ? "opacity-100" : "opacity-0"}`}>
      <div className="max-w-7xl mx-auto p-6" style={{ fontFamily: "'Gill Sans MT', 'Gill Sans', 'GillSans', 'Arial', 'sans-serif'" }}>
        {/* Header Section */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 overflow-hidden mb-6">
          <div className="px-6 py-4 bg-gradient-to-r from-[#198172]/10 to-[#0B2443]/10 border-b border-gray-200">
            <h1 className="text-2xl font-bold text-[#0B2443]">Doctor Dashboard</h1>
            <p className="text-sm text-gray-600 mt-1">Manage your patients, appointments, and medical records.</p>
          </div>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
          {statData.map((stat, index) => (
                    <StatCard icon={stat.icon} stat={stat.stat} label={stat.label} key={index} />
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
                onClick={() => router.push('/doctor/patients')}
                className="flex flex-col items-center p-4 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200 transition-all duration-300 group"
              >
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-gray-700">View Patients</span>
              </button>

              <button 
                onClick={() => router.push('/doctor/appointment-list')}
                className="flex flex-col items-center p-4 rounded-xl bg-gradient-to-br from-green-50 to-green-100 hover:from-green-100 hover:to-green-200 transition-all duration-300 group"
              >
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-gray-700">Manage Appointments</span>
              </button>

              <button 
                onClick={() => router.push('/doctor/prescriptions')}
                className="flex flex-col items-center p-4 rounded-xl bg-gradient-to-br from-purple-50 to-purple-100 hover:from-purple-100 hover:to-purple-200 transition-all duration-300 group"
              >
                <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-gray-700">Add Prescription</span>
              </button>

              <button 
                onClick={() => router.push('/doctor/payroll')}
                className="flex flex-col items-center p-4 rounded-xl bg-gradient-to-br from-red-50 to-red-100 hover:from-red-100 hover:to-red-200 transition-all duration-300 group"
              >
                <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-gray-700">View Payroll</span>
              </button>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 overflow-hidden">
          <div className="px-6 py-4 bg-gradient-to-r from-[#198172]/10 to-[#0B2443]/10 border-b border-gray-200">
            <h2 className="text-xl font-bold text-[#0B2443]">Today's Schedule</h2>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              <div className="flex items-center p-3 rounded-lg bg-blue-50 border border-blue-200">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-xs font-bold">9:00</span>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">John Doe - General Checkup</p>
                  <p className="text-xs text-gray-500">Room 201</p>
                </div>
              </div>

              <div className="flex items-center p-3 rounded-lg bg-green-50 border border-green-200">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-xs font-bold">10:30</span>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">Jane Smith - Follow-up</p>
                  <p className="text-xs text-gray-500">Room 203</p>
                </div>
              </div>

              <div className="flex items-center p-3 rounded-lg bg-purple-50 border border-purple-200">
                <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-xs font-bold">2:00</span>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">Mike Johnson - Consultation</p>
                  <p className="text-xs text-gray-500">Room 205</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
