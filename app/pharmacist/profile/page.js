"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import StatCard from '../../../components/compafterlogin/Common/StatCard';

const initialProfile = {
  name: 'Sarah Johnson',
  email: 'sarah.johnson@hospital.com',
  phone: '+1 234 567 8902',
  address: '456 Medical Ave, London, UK',
  gender: "female",
  dob: "1988-03-22",
  bloodGroup: "A+",
  avatar: null,
  department: "Pharmacy",
  designation: "Chief Pharmacist",
  employeeId: "PHAR001",
  experience: "7 years",
  licenseNumber: "PHARM2024001",
  status: "Active",
  totalMedicines: 450,
  totalSales: 28650,
  medicineCategories: 25,
  monthlySales: 15420,
};

export default function PharmaProfile() {
  const [profile, setProfile] = useState(initialProfile);
  const [editMode, setEditMode] = useState(false);
  const [form, setForm] = useState(profile);
  const [avatarPreview, setAvatarPreview] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setForm({ ...form, avatar: file });
      const reader = new FileReader();
      reader.onloadend = () => setAvatarPreview(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleSave = (e) => {
    e.preventDefault();
    setProfile({ ...form, avatar: avatarPreview || profile.avatar });
    setEditMode(false);
    alert('Profile updated successfully!');
  };

  const statData = [
      {
        icon: <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 9.172V5L8 4z" />
              </svg>,
        stat: profile.totalMedicines,
        label: "Total Medicines",
      },
      {
        icon: <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
              </svg>,
        stat: profile.totalSales.toLocaleString(),
        label: "Total Sales",
      },
      {
        icon: <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>,
        stat: profile.medicineCategories,
        label: "Medicine Categories",
      },
      {
        icon: <svg className="w-6 h-6 text-[#198172]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 912-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>,
        stat: profile.monthlySales.toLocaleString(),
        label: "Monthly Sales",
      },
    ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#C0E6DA]/30 via-white to-[#198172]/10" style={{ fontFamily: "'Gill Sans MT', 'Gill Sans', 'GillSans', 'Arial', 'sans-serif'" }}>
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-gray-200 px-6 py-4">
        {/* Desktop */}
        <div className="max-w-7xl mx-auto hidden md:flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link 
              href="/pharmacist/dashboard"
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </Link>
            <div>
              <h1 className="text-2xl font-bold text-[#0B2443]">Pharmacist Profile</h1>
              <p className="text-sm text-gray-600">View and manage pharmacist information</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <button 
              onClick={() => { setEditMode(true); setForm(profile); }}
              className="px-4 py-2 text-[#0b2443] bg-[#c0e6da] hover:bg-[#abd5d0] rounded-lg transition-colors font-medium"
            >
              Edit Profile
            </button>
            <Link 
              href='/pharmacist/manage-medicine' 
              className="px-4 py-2 bg-[#0b2443] text-white hover:bg-[#273c54] rounded-lg transition-colors font-medium"
            >
              Manage Medicines
            </Link>
          </div>
        </div>
        {/* Mobile */}
        <div className="max-w-7xl mx-auto flex flex-col md:hidden items-center">
          <div className="flex items-center mb-1">
            <Link 
              href="/pharmacist/dashboard"
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </Link>
            <h1 className="text-2xl font-bold text-[#0B2443] ml-2">Pharmacist Profile</h1>
          </div>
          <p className="text-sm text-gray-600 mb-2 text-center">View and manage pharmacist information</p>
          <div className="flex flex-col w-full gap-2">
            <button 
              onClick={() => { setEditMode(true); setForm(profile); }}
              className="w-1/2 px-4 py-2 text-[#0b2443] bg-[#c0e6da] hover:bg-[#abd5d0] rounded-lg transition-colors font-medium"
            >
              Edit Profile
            </button>
            <Link 
              href='/pharmacist/manage-medicine' 
              className="w-1/2 px-4 py-2 bg-[#0b2443] text-white hover:bg-[#273c54] rounded-lg transition-colors font-medium"
            >
              Manage Medicines
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-6">
        {/* Profile Card */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 overflow-hidden mb-6">
          <div className="p-6">
            <div className="flex flex-col md:flex-row md:items-start md:space-x-6 space-y-6 md:space-y-0 items-center">
              {/* Profile Image */}
              <div className="relative flex justify-center md:block">
                <div className="w-20 h-20 bg-gradient-to-r from-[#198172] to-[#0B2443] rounded-full flex items-center justify-center text-white text-2xl font-bold overflow-hidden">
                  {profile.avatar ? (
                    <img src={profile.avatar} alt="Profile Avatar" className="w-full h-full object-cover" />
                  ) : (
                    profile.name.split(' ').map(n => n[0]).join('')
                  )}
                </div>
              </div>

              {/* Profile Info */}
              <div className="flex-1 w-full md:w-auto">
                <div className="flex flex-col md:flex-row md:items-center md:space-x-3 mb-2 items-center">
                  <h2 className="text-2xl font-bold text-[#0B2443] text-center md:text-left">{profile.name}</h2>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 mt-2 md:mt-0">
                    <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 8 8">
                      <circle cx={4} cy={4} r={3} />
                    </svg>
                    {profile.status}
                  </span>
                </div>
                <p className="text-lg text-gray-600 mb-4 text-center md:text-left">{profile.department}</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div className="flex items-center space-x-2 justify-center md:justify-start">
                    <svg className="w-4 h-4 text-[#198172]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 9.172V5L8 4z" />
                    </svg>
                    <span className="text-gray-600">{profile.designation}</span>
                  </div>
                  <div className="flex items-center space-x-2 justify-center md:justify-start">
                    <svg className="w-4 h-4 text-[#198172]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V4a2 2 0 114 0v2m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
                    </svg>
                    <span className="text-gray-600">ID: {profile.employeeId}</span>
                  </div>
                  <div className="flex items-center space-x-2 justify-center md:justify-start">
                    <svg className="w-4 h-4 text-[#198172]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <span className="text-gray-600">License: {profile.licenseNumber}</span>
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="w-full md:w-auto text-center md:text-right mt-6 md:mt-0">
                <div className="mb-3">
                  <p className="text-sm text-gray-500 mb-1">Phone</p>
                  <p className="text-sm font-medium text-[#0B2443]">{profile.phone}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Email</p>
                  <p className="text-sm font-medium text-[#0B2443]">{profile.email}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {statData.map((stat, index) => (
                    <StatCard
                      key={index}
                      icon={stat.icon}
                      stat={stat.stat}
                      label={stat.label}
                    />
                  ))}
        </div>

        {/* Tabs */}
        <div className="hidden md:block bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 overflow-hidden">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8 px-6">
              {[
                { id: 'overview', label: 'Overview', icon: '📋' },
                { id: 'medicines', label: 'Medicine Inventory', icon: '💊' },
                { id: 'sales', label: 'Sales Reports', icon: '📊' },
                { id: 'prescriptions', label: 'Prescriptions', icon: '📝' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === tab.id
                      ? 'border-[#198172] text-[#198172]'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <span className="mr-2">{tab.icon}</span>
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          <div className="p-6">
            {activeTab === 'overview' && (
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-6">Professional Information</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                  {/* Left Column */}
                  <div className="space-y-6">
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Department</p>
                      <p className="text-lg font-semibold text-gray-900">{profile.department}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Designation</p>
                      <p className="text-lg font-semibold text-gray-900">{profile.designation}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Gender</p>
                      <p className="text-lg font-semibold text-gray-900 capitalize">{profile.gender}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Date of Birth</p>
                      <p className="text-lg font-semibold text-gray-900">{profile.dob}</p>
                    </div>
                  </div>
                  
                  {/* Right Column */}
                  <div className="space-y-6">
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Employee ID</p>
                      <p className="text-lg font-semibold text-gray-900">{profile.employeeId}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">License Number</p>
                      <p className="text-lg font-semibold text-gray-900">{profile.licenseNumber}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Experience</p>
                      <p className="text-lg font-semibold text-gray-900">{profile.experience}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Blood Group</p>
                      <p className="text-lg font-semibold text-gray-900">{profile.bloodGroup}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Contact Information</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                    {/* Left Column */}
                    <div className="space-y-6">
                      <div>
                        <p className="text-sm text-gray-500 mb-1">Email Address</p>
                        <p className="text-lg font-semibold text-gray-900">{profile.email}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 mb-1">Phone Number</p>
                        <p className="text-lg font-semibold text-gray-900">{profile.phone}</p>
                      </div>
                    </div>
                    
                    {/* Right Column */}
                    <div className="space-y-6">
                      <div>
                        <p className="text-sm text-gray-500 mb-1">Address</p>
                        <p className="text-lg font-semibold text-gray-900">{profile.address}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 mb-1">Status</p>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800">
                          {profile.status}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'medicines' && (
              <div>
                <h3 className="text-lg font-semibold text-[#0B2443] mb-4">Medicine Inventory Management</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-[#C0E6DA]/20 rounded-lg p-4 text-center">
                    <h4 className="text-2xl font-bold text-[#0B2443] mb-1">{profile.totalMedicines}</h4>
                    <p className="text-sm text-gray-600">Total Medicines in Stock</p>
                  </div>
                  <div className="bg-[#C0E6DA]/20 rounded-lg p-4 text-center">
                    <h4 className="text-2xl font-bold text-[#0B2443] mb-1">{profile.medicineCategories}</h4>
                    <p className="text-sm text-gray-600">Medicine Categories</p>
                  </div>
                  <div className="bg-[#C0E6DA]/20 rounded-lg p-4 text-center">
                    <h4 className="text-2xl font-bold text-[#0B2443] mb-1">98%</h4>
                    <p className="text-sm text-gray-600">Stock Availability</p>
                  </div>
                </div>
                <div className="text-center py-4">
                  <p className="text-gray-500">Medicine inventory details will be displayed here</p>
                  <Link 
                    href="/pharmacist/manage-medicine"
                    className="inline-block mt-4 px-6 py-2 bg-[#198172] text-white rounded-lg hover:bg-[#0B2443] transition-colors"
                  >
                    Go to Medicine Management
                  </Link>
                </div>
              </div>
            )}

            {activeTab === 'sales' && (
              <div>
                <h3 className="text-lg font-semibold text-[#0B2443] mb-4">Sales Performance</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-[#C0E6DA]/20 rounded-lg p-4">
                    <h4 className="text-lg font-semibold text-[#0B2443] mb-2">Total Sales</h4>
                    <p className="text-2xl font-bold text-green-600">${profile.totalSales.toLocaleString()}</p>
                    <p className="text-sm text-gray-600">Lifetime sales revenue</p>
                  </div>
                  <div className="bg-[#C0E6DA]/20 rounded-lg p-4">
                    <h4 className="text-lg font-semibold text-[#0B2443] mb-2">Monthly Sales</h4>
                    <p className="text-2xl font-bold text-[#198172]">${profile.monthlySales.toLocaleString()}</p>
                    <p className="text-sm text-gray-600">Current month performance</p>
                  </div>
                </div>
                <div className="text-center py-4">
                  <p className="text-gray-500">Detailed sales reports and analytics will be displayed here</p>
                  <Link 
                    href="/pharmacist/medicine-sales"
                    className="inline-block mt-4 px-6 py-2 bg-[#198172] text-white rounded-lg hover:bg-[#0B2443] transition-colors"
                  >
                    View Sales Reports
                  </Link>
                </div>
              </div>
            )}

            {activeTab === 'prescriptions' && (
              <div>
                <h3 className="text-lg font-semibold text-[#0B2443] mb-4">Prescription Management</h3>
                <div className="text-center py-8">
                  <svg className="w-12 h-12 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 712-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <p className="text-gray-500 mb-4">No recent prescriptions</p>
                  <p className="text-sm text-gray-400">Prescription management features will be available here</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Edit Mode Modal */}
      {editMode && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl m-4 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h3 className="text-xl font-bold text-[#0B2443]">Edit Profile</h3>
              <button 
                onClick={() => { setEditMode(false); setForm(profile); setAvatarPreview(null); }}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <form onSubmit={handleSave} className="p-6">
              <div className="space-y-6">
                {/* Avatar Section */}
                <div className="flex flex-col items-center mb-6">
                  <div className="relative mb-4">
                    <div className="w-20 h-20 bg-gradient-to-r from-[#198172] to-[#0B2443] rounded-full flex items-center justify-center text-white text-xl font-bold overflow-hidden">
                      {avatarPreview ? (
                        <img src={avatarPreview} alt="Avatar Preview" className="w-full h-full object-cover" />
                      ) : profile.avatar ? (
                        <img src={profile.avatar} alt="Avatar" className="w-full h-full object-cover" />
                      ) : (
                        profile.name.split(' ').map(n => n[0]).join('')
                      )}
                    </div>
                    <label className="absolute bottom-0 right-0 bg-[#198172] text-white p-1 rounded-full cursor-pointer hover:bg-[#0B2443] transition-colors">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                      </svg>
                      <input type="file" accept="image/*" className="hidden" onChange={handleAvatarChange} />
                    </label>
                  </div>
                </div>

                {/* Form Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#198172] focus:border-transparent"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#198172] focus:border-transparent"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                    <input
                      type="text"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#198172] focus:border-transparent"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Gender</label>
                    <select
                      name="gender"
                      value={form.gender}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#198172] focus:border-transparent"
                      required
                    >
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Date of Birth</label>
                    <input
                      type="date"
                      name="dob"
                      value={form.dob}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#198172] focus:border-transparent"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Blood Group</label>
                    <select
                      name="bloodGroup"
                      value={form.bloodGroup}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#198172] focus:border-transparent"
                      required
                    >
                      <option value="A+">A+</option>
                      <option value="A-">A-</option>
                      <option value="B+">B+</option>
                      <option value="B-">B-</option>
                      <option value="AB+">AB+</option>
                      <option value="AB-">AB-</option>
                      <option value="O+">O+</option>
                      <option value="O-">O-</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Department</label>
                    <input
                      type="text"
                      name="department"
                      value={form.department}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#198172] focus:border-transparent"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Designation</label>
                    <input
                      type="text"
                      name="designation"
                      value={form.designation}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#198172] focus:border-transparent"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">License Number</label>
                    <input
                      type="text"
                      name="licenseNumber"
                      value={form.licenseNumber}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#198172] focus:border-transparent"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Experience</label>
                    <input
                      type="text"
                      name="experience"
                      value={form.experience}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#198172] focus:border-transparent"
                      required
                    />
                  </div>
                  
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
                    <textarea
                      name="address"
                      value={form.address}
                      onChange={handleChange}
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#198172] focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex justify-end space-x-4 pt-6 border-t border-gray-200">
                  <button
                    type="button"
                    onClick={() => { setEditMode(false); setForm(profile); setAvatarPreview(null); }}
                    className="px-6 py-2 border border-gray-300 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors font-medium"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2 bg-[#198172] text-white hover:bg-[#0B2443] rounded-lg transition-colors font-medium"
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
