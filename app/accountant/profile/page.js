"use client";
import React, { useState } from 'react';
import Link from "next/link";
import { FaUser, FaEdit, FaSave, FaTimes, FaPhone, FaEnvelope, FaMapMarkerAlt, FaIdCard, FaClock, FaUsers, FaMoneyBillWave, FaFileInvoiceDollar, FaChartBar } from 'react-icons/fa';
import StatCard from '../../../components/compafterlogin/Common/StatCard';
import EditProfileModal from '../../../components/compafterlogin/Accountant/EditProfileModal';

const initialProfile = {
  name: 'Alex Turner',
  email: 'alex.turner@hospital.com',
  phone: '+1 234 567 8901',
  address: '123 Main St, London, UK',
  gender: "male",
  dob: "1990-05-15",
  bloodGroup: "O+",
  avatar: null,
  department: "Finance & Accounting",
  designation: "Senior Accountant",
  employeeId: "ACC001",
  experience: "5 years",
  status: "Active",
  totalInvoices: 156,
  pendingInvoices: 24,
  totalRevenue: 45280,
  monthlyPayroll: 28450,
};

const AccountantProfile = () => {
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

  const handleEdit = () => {
    setEditMode(true);
    setForm(profile);
    setAvatarPreview(null);
  };

  const handleCancel = () => {
    setEditMode(false);
    setForm(profile);
    setAvatarPreview(null);
  };

  const handleSave = (e) => {
    e.preventDefault();
    setProfile({ ...form, avatar: avatarPreview || profile.avatar });
    setEditMode(false);
    alert('Profile updated successfully!');
  };

  const statData = [
    {
      icon: <FaMoneyBillWave className="w-6 h-6 text-green-600" />,
      stat: `$${profile.totalRevenue.toLocaleString()}`,
      label: 'Total Revenue',
    },
    {
      icon: <FaFileInvoiceDollar className="w-6 h-6 text-blue-600" />,
      stat: profile.totalInvoices,
      label: 'Total Invoices',
    },
    {
      icon: <FaClock className="w-6 h-6 text-orange-600" />,
      stat: profile.pendingInvoices,
      label: 'Pending Invoices',
    },
    {
      icon: <FaUsers className="w-6 h-6 text-purple-600" />,
      stat: `$${profile.monthlyPayroll.toLocaleString()}`,
      label: 'Monthly Payroll',
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-gray-50" style={{ fontFamily: "'Gill Sans MT', 'Gill Sans', 'GillSans', 'Arial', 'sans-serif'" }}>
      {/* Header */}
      <div className="bg-white/90 backdrop-blur-sm border-b border-gray-200 px-6 py-4 top-0 z-40">
        {/* Desktop */}
        <div className="max-w-7xl mx-auto hidden md:flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <FaUser className="w-7 h-7 text-[#0B2443] mr-3" />
              <div>
                <h1 className="text-2xl font-bold text-gray-800">Accountant Profile</h1>
                <p className="text-sm text-gray-600">View and manage accountant information</p>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <button 
              onClick={handleEdit}
              className="px-5 py-2 border-none bg-[#c0e6da] text-[#0B2443] hover:bg-[#96c5b6] hover:text-[#0B2443] rounded-lg transition-colors font-medium flex items-center gap-2"
            >
              <FaEdit className="w-4 h-4" />
              Edit Profile
            </button>
            <Link 
              href='/accountant/manage-invoice' 
              className="px-4 py-2 bg-[#0B2443] text-white hover:bg-[#352c65] rounded-lg transition-colors font-medium flex items-center gap-2"
            >
              <FaFileInvoiceDollar className="w-4 h-4" />
              Manage Invoices
            </Link>
          </div>
        </div>
        {/* Mobile */}
        <div className="max-w-7xl mx-auto md:hidden flex flex-col items-center">
          <div className="flex items-center mb-2">
            <FaUser className="w-7 h-7 text-[#0B2443] mr-3" />
            <h1 className="text-2xl font-bold text-gray-800">Accountant Profile</h1>
          </div>
          <p className="text-sm text-gray-600 mb-2 text-center">View and manage accountant information</p>
          <div className="flex flex-col w-auto gap-2 -ml-20">
            <button 
              onClick={handleEdit}
              className="w-full px-5 py-2 border-none bg-[#c0e6da] text-[#0B2443] hover:bg-[#96c5b6] hover:text-[#0B2443] rounded-lg transition-colors font-medium flex items-center justify-center gap-2"
            >
              <FaEdit className="w-4 h-4" />
              Edit Profile
            </button>
            <Link 
              href='/accountant/manage-invoice' 
              className="w-full px-4 py-2 bg-[#0B2443] text-white hover:bg-[#352c65] rounded-lg transition-colors font-medium flex items-center justify-center gap-2"
            >
              <FaFileInvoiceDollar className="w-4 h-4" />
              Manage Invoices
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-6">
        {/* Profile Card */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden mb-6">
          <div className="p-8">
            <div className="flex flex-col md:flex-row md:items-start md:space-x-8 space-y-8 md:space-y-0">
              {/* Profile Image */}
              <div className="relative flex justify-center md:block">
                <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                  {avatarPreview ? (
                    <img src={avatarPreview} alt="Avatar Preview" className="w-full h-full object-cover rounded-full" />
                  ) : profile.avatar ? (
                    <img src={profile.avatar} alt="Avatar" className="w-full h-full object-cover rounded-full" />
                  ) : (
                    profile.name.split(' ').map(n => n[0]).join('')
                  )}
                </div>
                <div className="absolute hidden  bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white md:flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
              </div>

              {/* Profile Info */}
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center md:space-x-3 mb-2 items-center">
                  <h2 className="text-3xl font-bold text-gray-800 text-center md:text-left">{profile.name}</h2>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 mt-2 md:mt-0">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                    {profile.status}
                  </span>
                </div>
                <p className="text-xl text-gray-600 mb-1 text-center md:text-left">{profile.designation}</p>
                <p className="text-lg text-[#0B2443] font-medium mb-4 text-center md:text-left">{profile.department}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div className="flex items-center space-x-2 bg-gray-50 rounded-lg p-3">
                    <FaIdCard className="w-4 h-4 text-blue-500" />
                    <div>
                      <p className="text-gray-500 text-xs">Employee ID</p>
                      <p className="font-semibold text-gray-800">{profile.employeeId}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 bg-gray-50 rounded-lg p-3">
                    <FaClock className="w-4 h-4 text-green-500" />
                    <div>
                      <p className="text-gray-500 text-xs">Experience</p>
                      <p className="font-semibold text-gray-800">{profile.experience}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 bg-gray-50 rounded-lg p-3">
                    <FaUsers className="w-4 h-4 text-purple-500" />
                    <div>
                      <p className="text-gray-500 text-xs">Blood Group</p>
                      <p className="font-semibold text-gray-800">{profile.bloodGroup}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="bg-gray-50 rounded-xl p-6 min-w-[250px] w-full md:w-auto mt-8 md:mt-0">
                <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center md:text-left">Contact Information</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <FaPhone className="w-4 h-4 text-green-500" />
                    <div>
                      <p className="text-xs text-gray-500">Phone</p>
                      <p className="text-sm font-medium text-gray-800">{profile.phone}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <FaEnvelope className="w-4 h-4 text-blue-500" />
                    <div>
                      <p className="text-xs text-gray-500">Email</p>
                      <p className="text-sm font-medium text-gray-800">{profile.email}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <FaMapMarkerAlt className="w-4 h-4 text-red-500 mt-1" />
                    <div>
                      <p className="text-xs text-gray-500">Address</p>
                      <p className="text-sm font-medium text-gray-800">{profile.address}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          {statData.map((stat, index) => (
                    <StatCard icon={stat.icon} stat={stat.stat} label={stat.label} key={index} />
                  ))}
        </div>

        {/* Tabs */}
        <div className="bg-white hidden md:block rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8 px-6">
              {[
                { id: 'overview', label: 'Overview', icon: <FaUser className="w-4 h-4" /> },
                { id: 'invoices', label: 'Recent Invoices', icon: <FaFileInvoiceDollar className="w-4 h-4" /> },
                { id: 'payroll', label: 'Payroll', icon: <FaMoneyBillWave className="w-4 h-4" /> },
                { id: 'reports', label: 'Reports', icon: <FaChartBar className="w-4 h-4" /> }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors flex items-center gap-2 ${
                    activeTab === tab.id
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {tab.icon}
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          <div className="p-8">
            {activeTab === 'overview' && (
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-8 flex items-center gap-2">
                  <FaUser className="w-6 h-6 text-blue-500" />
                  Professional Information
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                  {/* Left Column */}
                  <div className="space-y-6">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <p className="text-sm text-gray-500 mb-2">Department</p>
                      <p className="text-lg font-semibold text-gray-900">{profile.department}</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <p className="text-sm text-gray-500 mb-2">Designation</p>
                      <p className="text-lg font-semibold text-gray-900">{profile.designation}</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <p className="text-sm text-gray-500 mb-2">Gender</p>
                      <p className="text-lg font-semibold text-gray-900 capitalize">{profile.gender}</p>
                    </div>
                  </div>
                  
                  {/* Right Column */}
                  <div className="space-y-6">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <p className="text-sm text-gray-500 mb-2">Employee ID</p>
                      <p className="text-lg font-semibold text-gray-900">{profile.employeeId}</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <p className="text-sm text-gray-500 mb-2">Experience</p>
                      <p className="text-lg font-semibold text-gray-900">{profile.experience}</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <p className="text-sm text-gray-500 mb-2">Date of Birth</p>
                      <p className="text-lg font-semibold text-gray-900">{profile.dob}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-12">
                  <h3 className="text-2xl font-bold text-gray-800 mb-8 flex items-center gap-2">
                    <FaEnvelope className="w-6 h-6 text-green-500" />
                    Contact Information
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                    {/* Left Column */}
                    <div className="space-y-6">
                      <div className="bg-gray-50 rounded-lg p-4">
                        <p className="text-sm text-gray-500 mb-2">Email Address</p>
                        <p className="text-lg font-semibold text-gray-900">{profile.email}</p>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-4">
                        <p className="text-sm text-gray-500 mb-2">Phone Number</p>
                        <p className="text-lg font-semibold text-gray-900">{profile.phone}</p>
                      </div>
                    </div>
                    
                    {/* Right Column */}
                    <div className="space-y-6">
                      <div className="bg-gray-50 rounded-lg p-4">
                        <p className="text-sm text-gray-500 mb-2">Address</p>
                        <p className="text-lg font-semibold text-gray-900">{profile.address}</p>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-4">
                        <p className="text-sm text-gray-500 mb-2">Blood Group</p>
                        <p className="text-lg font-semibold text-gray-900">{profile.bloodGroup}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'invoices' && (
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
                  <FaFileInvoiceDollar className="w-5 h-5 text-blue-500" />
                  Recent Invoices
                </h3>
                <div className="text-center py-12 bg-gray-50 rounded-lg">
                  <FaFileInvoiceDollar className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500 text-lg">No recent invoices available</p>
                  <p className="text-gray-400 text-sm mt-2">Invoice data will appear here once available</p>
                </div>
              </div>
            )}

            {activeTab === 'payroll' && (
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
                  <FaMoneyBillWave className="w-5 h-5 text-green-500" />
                  Payroll Management
                </h3>
                <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 border border-green-200">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <FaMoneyBillWave className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <p className="text-xl font-bold text-gray-800">Monthly Payroll Processing</p>
                      <p className="text-3xl font-bold text-green-600">${profile.monthlyPayroll.toLocaleString()}</p>
                    </div>
                  </div>
                  <p className="text-gray-600">Responsible for processing employee salaries, benefits, and compensation management</p>
                </div>
              </div>
            )}

            {activeTab === 'reports' && (
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
                  <FaChartBar className="w-5 h-5 text-purple-500" />
                  Financial Reports
                </h3>
                <div className="text-center py-12 bg-gray-50 rounded-lg">
                  <FaChartBar className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500 text-lg">No reports available</p>
                  <p className="text-gray-400 text-sm mt-2">Financial reports and analytics will be displayed here</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Edit Mode Modal */}
      {editMode && (
        <EditProfileModal form={form} handleAvatarChange={handleAvatarChange} handleChange={handleChange} handleSave={handleSave} handleCancel={handleCancel} avatarPreview={avatarPreview} profile={profile} />
      )}
    </div>
  );
};

export default AccountantProfile;