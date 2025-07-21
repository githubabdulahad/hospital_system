"use client";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import StatCard from '../../../components/compafterlogin/Common/StatCard';

export default function PatientDashboard() {
  const [visible, setVisible] = useState(false);
  const router = useRouter();
  
  useEffect(() => {
    setVisible(true);
    document.title = 'Patient Dashboard - Kings Hospital';
  }, []);

  // Statistics data for StatCard
  const statData = [
    {
      icon: (
        <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      stat: 3,
      label: "Upcoming Appointments"
    },
    {
      icon: (
        <svg className="w-5 h-5 text-[#0B2443]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      stat: 2,
      label: "Active Prescriptions"
    },
    {
      icon: (
        <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      stat: "100%",
      label: "Profile Complete"
    }
  ];

  return (
    <div className={`min-h-screen bg-gradient-to-br from-[#C0E6DA]/30 via-white to-[#198172]/10 transition-opacity duration-700 ${visible ? "opacity-100" : "opacity-0"}`}>
      <div className="max-w-7xl mx-auto p-6" style={{ fontFamily: "'Gill Sans MT', 'Gill Sans', 'GillSans', 'Arial', 'sans-serif'" }}>
        {/* Header Section */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 overflow-hidden mb-6">
          <div className="px-6 py-4 bg-gradient-to-r from-[#198172]/10 to-[#0B2443]/10 border-b border-gray-200">
            <h1 className="text-2xl font-bold text-[#0B2443]">Patient Dashboard</h1>
            <p className="text-sm text-gray-600 mt-1">Welcome back! Here's your health overview and quick actions.</p>
          </div>
        </div>
        
        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {statData.map((stat, index) => (
            <div key={index} onClick={() => {
              if (index === 0) router.push('/patient/appointments');
              if (index === 1) router.push('/patient/prescriptions');
              if (index === 2) router.push('/patient/profile');
            }}>
              <StatCard
                icon={stat.icon}
                stat={stat.stat}
                label={stat.label}
              />
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 overflow-hidden mb-6">
          <div className="px-6 py-4 bg-gradient-to-r from-[#198172]/10 to-[#0B2443]/10 border-b border-gray-200">
            <h2 className="text-xl font-bold text-[#0B2443]">Quick Actions</h2>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <button 
                onClick={() => router.push('/patient/appointments')}
                className="flex flex-col items-center p-4 rounded-xl bg-gradient-to-br  hover:from-blue-100 hover:to-blue-200 transition-all duration-300 group"
              >
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-gray-700">Book Appointment</span>
              </button>

              <button 
                onClick={() => router.push('/patient/doctor')}
                className="flex flex-col items-center p-4 rounded-xl bg-gradient-to-br  hover:from-green-100 hover:to-green-200 transition-all duration-300 group"
              >
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-gray-700">My Doctors</span>
              </button>

              <button 
                onClick={() => router.push('/patient/blood-bank')}
                className="flex flex-col items-center p-4 rounded-xl bg-gradient-to-br from-red-50 to-red-100 hover:from-red-100 hover:to-red-200 transition-all duration-300 group"
              >
                <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-gray-700">Blood Bank</span>
              </button>

              <button 
                onClick={() => router.push('/patient/operation-history')}
                className="flex flex-col items-center p-4 rounded-xl bg-gradient-to-br from-purple-50 to-purple-100 hover:from-purple-100 hover:to-purple-200 transition-all duration-300 group"
              >
                <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-gray-700">Medical History</span>
              </button>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 overflow-hidden">
          <div className="px-6 py-4 bg-gradient-to-r from-[#198172]/10 to-[#0B2443]/10 border-b border-gray-200">
            <h2 className="text-xl font-bold text-[#0B2443]">Recent Activity</h2>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              <div className="flex items-center p-3 rounded-lg bg-blue-50 border border-blue-200">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">Appointment scheduled with Dr. Smith</p>
                  <p className="text-xs text-gray-500">2 hours ago</p>
                </div>
              </div>

              <div className="flex items-center p-3 rounded-lg bg-green-50 border border-green-200">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">New prescription added</p>
                  <p className="text-xs text-gray-500">Yesterday</p>
                </div>
              </div>

              <div className="flex items-center p-3 rounded-lg bg-purple-50 border border-purple-200">
                <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center mr-3">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">Profile updated successfully</p>
                  <p className="text-xs text-gray-500">3 days ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
