"use client";
import React, { useState } from 'react';
import { FaUser, FaEdit, FaPrint, FaFileAlt, FaPhone, FaEnvelope, FaMapMarkerAlt, FaCalendarAlt, FaTint, FaHeart } from 'react-icons/fa';
import PatientProfileModal from '../../../components/compafterlogin/Patient/PatientProfileModal';

const initialProfile = {
  fullName: 'Maaz Ahmad',
  age: '21 years',
  gender: 'Male',
  bloodGroup: 'B+',
  dob: 'May 13, 2004',
  registrationDate: 'July 3, 2025',
  medicalConditions: 'None',
  mobileNumber: '+97735345352',
  email: 'maazahmad915@gmail.com',
  address: 'Rawalpindi, Pakistan',
  emergencyContact: '+92300-1234567',
  emergencyContactName: 'Ahmad Khan (Father)',
  height: '5\'8"',
  weight: '70 kg',
  occupation: 'Student',
  maritalStatus: 'Single',
  insuranceProvider: 'State Life Insurance',
  insuranceNumber: 'SLI-2024-001'
};

const PatientProfile = () => {
  const [profile, setProfile] = useState(initialProfile);
  const [editMode, setEditMode] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handleEdit = () => setEditMode(true);
  const handleCancel = () => {
    setProfile(initialProfile);
    setEditMode(false);
  };
  const handleSave = () => {
    setEditMode(false);
    // Here you would typically save to a database
    alert('Profile updated successfully!');
  };  
  const tabs = [
    { id: 'overview', label: 'Overview', icon: <FaUser className="w-4 h-4" /> },
    { id: 'medical-records', label: 'Medical Records', icon: <FaFileAlt className="w-4 h-4" /> },
    { id: 'medical-report', label: 'Medical Report', icon: <FaHeart className="w-4 h-4" /> },
    { id: 'appointments', label: 'Appointments', icon: <FaCalendarAlt className="w-4 h-4" /> },
    { id: 'notes', label: 'Notes', icon: <FaFileAlt className="w-4 h-4" /> },
    { id: 'prescriptions', label: 'Prescriptions', icon: <FaTint className="w-4 h-4" /> }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6" style={{ fontFamily: "'Gill Sans MT', 'Gill Sans', 'GillSans', 'Arial', 'sans-serif'" }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6 flex-wrap ">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-50 to-blue-100 rounded-full flex items-center justify-center">
              <FaUser className="w-8 h-8 text-[#0B2443]" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-[#0B2443]">Patient Profile</h1>
              <p className="text-gray-600 mt-1 block md:inline mb-2">View and manage your personal information</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <button 
              onClick={handleEdit}
              className="px-6 py-3 border-2 border-none bg-[#0B2443] hover:bg-blue-900 text-white rounded-lg transition-all duration-300 font-medium flex items-center space-x-2"
            >
              <FaEdit className="w-4 h-4" />
              <span>Edit Profile</span>
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="bg-white hidden md:block rounded-lg shadow-sm border mb-6 overflow-hidden">
          <div className="flex border-b border-gray-200 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-6 py-4 font-medium transition-all duration-300 whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'text-blue-600 border-b-2 border-blue-500 bg-blue-50'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        {activeTab === 'overview' && (
          <div>
            {/* Overview Header */}
            <div className="bg-white rounded-lg shadow-sm border p-6 mb-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">Patient Overview</h2>
                  <p className="text-gray-600 mt-1">Complete view of your personal and medical information</p>
                </div>
              </div>

              {/* Patient Information Cards */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Personal Information Card */}
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <FaUser className="w-5 h-5 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800">Personal Information</h3>
                  </div>

                  <div className="grid grid-cols-1 gap-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-500 mb-1">Full Name</p>
                        <p className="text-base font-semibold text-gray-800">{profile.fullName}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 mb-1">Age</p>
                        <p className="text-base font-semibold text-gray-800">{profile.age}</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-500 mb-1">Gender</p>
                        <p className="text-base font-semibold text-gray-800">{profile.gender}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 mb-1">Blood Group</p>
                        <span className="inline-block px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-semibold">
                          {profile.bloodGroup}
                        </span>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-500 mb-1">Date of Birth</p>
                        <p className="text-base font-semibold text-gray-800">{profile.dob}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 mb-1">Registration Date</p>
                        <p className="text-base font-semibold text-gray-800">{profile.registrationDate}</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-500 mb-1">Height</p>
                        <p className="text-base font-semibold text-gray-800">{profile.height}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 mb-1">Weight</p>
                        <p className="text-base font-semibold text-gray-800">{profile.weight}</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-500 mb-1">Occupation</p>
                        <p className="text-base font-semibold text-gray-800">{profile.occupation}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 mb-1">Marital Status</p>
                        <p className="text-base font-semibold text-gray-800">{profile.maritalStatus}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Medical Information Card */}
                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <FaHeart className="w-5 h-5 text-green-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800">Medical Information</h3>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-gray-500 mb-2">Medical Conditions</p>
                      <div className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                        {profile.medicalConditions}
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-2">Insurance Provider</p>
                      <p className="text-base font-semibold text-gray-800">{profile.insuranceProvider}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-2">Insurance Number</p>
                      <p className="text-base font-semibold text-gray-800">{profile.insuranceNumber}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Information Card */}
              <div className="mt-6">
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                      <FaPhone className="w-5 h-5 text-purple-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800">Contact Information</h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="flex items-center space-x-3">
                      <FaPhone className="w-4 h-4 text-gray-400" />
                      <div>
                        <p className="text-sm text-gray-500">Mobile Number</p>
                        <p className="text-base font-semibold text-gray-800">{profile.mobileNumber}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <FaEnvelope className="w-4 h-4 text-gray-400" />
                      <div>
                        <p className="text-sm text-gray-500">Email Address</p>
                        <p className="text-base font-semibold text-gray-800">{profile.email}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <FaMapMarkerAlt className="w-4 h-4 text-gray-400" />
                      <div>
                        <p className="text-sm text-gray-500">Address</p>
                        <p className="text-base font-semibold text-gray-800">{profile.address}</p>
                      </div>
                    </div>
                  </div>

                  {/* Emergency Contact */}
                  <div className="mt-6 pt-6 border-t border-purple-200">
                    <h4 className="text-md font-semibold text-gray-800 mb-4">Emergency Contact</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex items-center space-x-3">
                        <FaUser className="w-4 h-4 text-gray-400" />
                        <div>
                          <p className="text-sm text-gray-500">Contact Person</p>
                          <p className="text-base font-semibold text-gray-800">{profile.emergencyContactName}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <FaPhone className="w-4 h-4 text-gray-400" />
                        <div>
                          <p className="text-sm text-gray-500">Phone Number</p>
                          <p className="text-base font-semibold text-gray-800">{profile.emergencyContact}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Other tabs content */}
        {activeTab !== 'overview' && (
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaFileAlt className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                {tabs.find(tab => tab.id === activeTab)?.label}
              </h3>
              <p className="text-gray-500">No {activeTab.replace('-', ' ')} available at the moment</p>
              <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                Add New {tabs.find(tab => tab.id === activeTab)?.label}
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Edit Mode Modal */}
      {editMode && (
        <PatientProfileModal handleCancel={handleCancel} handleSave={handleSave} profile={profile} handleChange={handleChange} />
      )}
    </div>
  );
};

export default PatientProfile;