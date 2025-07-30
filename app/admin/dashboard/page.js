"use client";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import StatCard from '../../../components/compafterlogin/Common/StatCard';

const statData = [{
  icon:<svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>,
  stat:'1,247',
  label:'System users',
},
{
  icon:<svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>,
  stat:'15',
  label:'Active departments',
},
{
  icon:<svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>,
  stat:'89',
  label:'Active staff',
},
{
  icon:<svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>,
  stat:'£125K',
  label:'This month',
}
];

export default function AdminDashboard() {
  const [visible, setVisible] = useState(false);
  const router = useRouter();
  
  useEffect(() => {
    setVisible(true);
    document.title = 'Admin Dashboard - Kings Hospital';
  }, []);

  return (
    <div className={`min-h-screen bg-gradient-to-br from-[#C0E6DA]/30 via-white to-[#198172]/10 transition-opacity duration-700 ${visible ? "opacity-100" : "opacity-0"}`}>
      <div className="max-w-7xl mx-auto p-6" style={{ fontFamily: "'Gill Sans MT', 'Gill Sans', 'GillSans', 'Arial', 'sans-serif'" }}>
        {/* Header Section */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 overflow-hidden mb-6">
          <div className="px-6 py-4 bg-gradient-to-r from-[#198172]/10 to-[#0B2443]/10 border-b border-gray-200">
            <h1 className="text-2xl font-bold text-[#0B2443]">Admin Dashboard</h1>
            <p className="text-sm text-gray-600 mt-1">Manage hospital operations, staff, and system settings.</p>
          </div>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 mb-6">
          <StatCard icon={statData[0].icon} stat={statData[0].stat} label={statData[0].label} />
          <StatCard icon={statData[1].icon} stat={statData[1].stat} label={statData[1].label} />
          <StatCard icon={statData[2].icon} stat={statData[2].stat} label={statData[2].label} />
          <StatCard icon={statData[3].icon} stat={statData[3].stat} label={statData[3].label} />
        </div>

        {/* Quick Actions */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 overflow-hidden mb-6">
          <div className="px-6 py-4 bg-gradient-to-r from-[#198172]/10 to-[#0B2443]/10 border-b border-gray-200">
            <h2 className="text-xl font-bold text-[#0B2443]">Management Tools</h2>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <button 
                onClick={() => router.push('/admin/users')}
                className="flex flex-col items-center p-4 rounded-xl  hover:from-blue-100 hover:to-blue-200 transition-all duration-300 group"
              >
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-gray-700">Manage Users</span>
              </button>

              <button 
                onClick={() => router.push('/admin/departments')}
                className="flex flex-col items-center p-4 rounded-xl   hover:from-green-100 hover:to-green-200 transition-all duration-300 group"
              >
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-gray-700">Departments</span>
              </button>

              <button 
                onClick={() => router.push('/admin/reports')}
                className="flex flex-col items-center p-4 rounded-xl bg-gradient-to-br from-purple-50 to-purple-100 hover:from-purple-100 hover:to-purple-200 transition-all duration-300 group"
              >
                <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-gray-700">View Reports</span>
              </button>

              <button 
                onClick={() => router.push('/admin/settings')}
                className="flex flex-col items-center p-4 rounded-xl bg-gradient-to-br from-red-50 to-red-100 hover:from-red-100 hover:to-red-200 transition-all duration-300 group"
              >
                <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-gray-700">System Settings</span>
              </button>
            </div>
          </div>
        </div>

        {/* Recent Activity & System Status */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 overflow-hidden">
            <div className="px-6 py-4 bg-gradient-to-r from-[#198172]/10 to-[#0B2443]/10 border-b border-gray-200">
              <h2 className="text-xl font-bold text-[#0B2443]">Recent Activity</h2>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <div className="flex items-center p-3 rounded-lg bg-blue-50 border border-blue-200">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">New doctor registered</p>
                    <p className="text-xs text-gray-500">Dr. Sarah Johnson joined Cardiology</p>
                  </div>
                </div>

                <div className="flex items-center p-3 rounded-lg bg-green-50 border border-green-200">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">System backup completed</p>
                    <p className="text-xs text-gray-500">Daily backup successful</p>
                  </div>
                </div>

                <div className="flex items-center p-3 rounded-lg bg-yellow-50 border border-yellow-200">
                  <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center mr-3">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">Server maintenance scheduled</p>
                    <p className="text-xs text-gray-500">Tomorrow at 2:00 AM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 overflow-hidden">
            <div className="px-6 py-4 bg-gradient-to-r from-[#198172]/10 to-[#0B2443]/10 border-b border-gray-200">
              <h2 className="text-xl font-bold text-[#0B2443]">System Status</h2>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 rounded-lg bg-green-50 border border-green-200">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                    <span className="text-sm font-medium text-gray-900">Database</span>
                  </div>
                  <span className="text-sm text-green-600 font-medium">Online</span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-lg bg-green-50 border border-green-200">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                    <span className="text-sm font-medium text-gray-900">API Services</span>
                  </div>
                  <span className="text-sm text-green-600 font-medium">Running</span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-lg bg-yellow-50 border border-yellow-200">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full mr-3"></div>
                    <span className="text-sm font-medium text-gray-900">Backup System</span>
                  </div>
                  <span className="text-sm text-yellow-600 font-medium">Scheduled</span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-lg bg-blue-50 border border-blue-200">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                    <span className="text-sm font-medium text-gray-900">Server Load</span>
                  </div>
                  <span className="text-sm text-blue-600 font-medium">67%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
