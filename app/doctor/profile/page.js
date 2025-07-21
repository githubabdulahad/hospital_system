"use client";
import { useState } from "react";
import Toast from "../../../components/compafterlogin/Common/Toast";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [toast, setToast] = useState({ show: false, message: "", type: "success" });
  
  const [doctorInfo, setDoctorInfo] = useState({
    personalInfo: {
      firstName: "John",
      lastName: "Smith",
      email: "dr.john.smith@hospital.com",
      phone: "+1-555-0123",
      dateOfBirth: "1985-03-15",
      gender: "Male",
      address: "123 Medical Center Drive, Health City, HC 12345",
      emergencyContact: "+1-555-9876",
      profileImage: null,
    },
    professionalInfo: {
      employeeId: "DOC001",
      specialization: "Cardiology",
      department: "Cardiology Department",
      position: "Senior Cardiologist",
      licenseNumber: "MD123456789",
      yearsExperience: 12,
      joinDate: "2020-01-15",
      qualifications: "MD, FACC, Board Certified Cardiologist",
      certifications: "Advanced Cardiac Life Support (ACLS), Basic Life Support (BLS)",
    },
    workSchedule: {
      mondayStart: "08:00",
      mondayEnd: "17:00",
      tuesdayStart: "08:00",
      tuesdayEnd: "17:00",
      wednesdayStart: "08:00",
      wednesdayEnd: "17:00",
      thursdayStart: "08:00",
      thursdayEnd: "17:00",
      fridayStart: "08:00",
      fridayEnd: "15:00",
      saturdayStart: "",
      saturdayEnd: "",
      sundayStart: "",
      sundayEnd: "",
    },
  });

  const showToast = (message, type = "success") => {
    setToast({ show: true, message, type });
  };

  const hideToast = () => {
    setToast({ show: false, message: "", type: "success" });
  };

  const handleInputChange = (section, field, value) => {
    setDoctorInfo(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }));
  };

  const handleSave = () => {
    // Here you would typically save to your backend
    setIsEditing(false);
    showToast("Profile updated successfully!", "success");
  };

  const handleCancel = () => {
    setIsEditing(false);
    showToast("Changes cancelled", "info");
    // Reset form data here if needed
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        handleInputChange('personalInfo', 'profileImage', e.target.result);
      };
      reader.readAsDataURL(file);
      showToast("Profile image updated", "success");
    }
  };

  return (
    <div
      className="p-6"
      style={{
        fontFamily:
          "'Gill Sans MT', 'Gill Sans', 'GillSans', 'Arial', 'sans-serif'",
      }}
    >
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <span className="text-2xl mr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-7 h-7 text-blue-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </span>
          <h2 className="text-3xl font-semibold text-[#0B2443]">Doctor Profile</h2>
        </div>
        
        <div className="flex space-x-3">
          {isEditing ? (
            <>
              <button
                onClick={handleCancel}
                className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                Save Changes
              </button>
            </>
          ) : (
            <button
              onClick={() => setIsEditing(true)}
              className="px-4 py-2 bg-[#0B2443] text-white rounded-md hover:bg-blue-900 flex items-center"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
              Edit Profile
            </button>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Image and Quick Info */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex flex-col items-center">
              <div className="relative mb-4">
                {doctorInfo.personalInfo.profileImage ? (
                  <img
                    src={doctorInfo.personalInfo.profileImage}
                    alt="Profile"
                    className="w-32 h-32 rounded-full object-cover border-4 border-blue-200"
                  />
                ) : (
                  <div className="w-32 h-32 rounded-full bg-blue-100 flex items-center justify-center border-4 border-blue-200">
                    <svg className="w-16 h-16 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                )}
                {isEditing && (
                  <label className="absolute bottom-0 right-0 bg-blue-600 text-white rounded-full p-2 cursor-pointer hover:bg-blue-700">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                      <path d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                  </label>
                )}
              </div>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Dr. {doctorInfo.personalInfo.firstName} {doctorInfo.personalInfo.lastName}
              </h3>
              <p className="text-gray-600 mb-1">{doctorInfo.professionalInfo.specialization}</p>
              <p className="text-gray-500 text-sm mb-4">{doctorInfo.professionalInfo.department}</p>
              
              <div className="w-full space-y-3">
                <div className="flex items-center text-sm text-gray-600">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  {doctorInfo.personalInfo.email}
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  {doctorInfo.personalInfo.phone}
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  {doctorInfo.professionalInfo.employeeId}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Profile Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Personal Information */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h4 className="text-lg font-semibold text-gray-800 mb-4 border-b pb-2">Personal Information</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                {isEditing ? (
                  <input
                    type="text"
                    value={doctorInfo.personalInfo.firstName}
                    onChange={(e) => handleInputChange('personalInfo', 'firstName', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                ) : (
                  <p className="text-gray-900">{doctorInfo.personalInfo.firstName}</p>
                )}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                {isEditing ? (
                  <input
                    type="text"
                    value={doctorInfo.personalInfo.lastName}
                    onChange={(e) => handleInputChange('personalInfo', 'lastName', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                ) : (
                  <p className="text-gray-900">{doctorInfo.personalInfo.lastName}</p>
                )}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                {isEditing ? (
                  <input
                    type="email"
                    value={doctorInfo.personalInfo.email}
                    onChange={(e) => handleInputChange('personalInfo', 'email', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                ) : (
                  <p className="text-gray-900">{doctorInfo.personalInfo.email}</p>
                )}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                {isEditing ? (
                  <input
                    type="tel"
                    value={doctorInfo.personalInfo.phone}
                    onChange={(e) => handleInputChange('personalInfo', 'phone', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                ) : (
                  <p className="text-gray-900">{doctorInfo.personalInfo.phone}</p>
                )}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Date of Birth</label>
                {isEditing ? (
                  <input
                    type="date"
                    value={doctorInfo.personalInfo.dateOfBirth}
                    onChange={(e) => handleInputChange('personalInfo', 'dateOfBirth', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                ) : (
                  <p className="text-gray-900">{doctorInfo.personalInfo.dateOfBirth}</p>
                )}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
                {isEditing ? (
                  <select
                    value={doctorInfo.personalInfo.gender}
                    onChange={(e) => handleInputChange('personalInfo', 'gender', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                ) : (
                  <p className="text-gray-900">{doctorInfo.personalInfo.gender}</p>
                )}
              </div>
              
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                {isEditing ? (
                  <textarea
                    value={doctorInfo.personalInfo.address}
                    onChange={(e) => handleInputChange('personalInfo', 'address', e.target.value)}
                    rows="3"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                ) : (
                  <p className="text-gray-900">{doctorInfo.personalInfo.address}</p>
                )}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Emergency Contact</label>
                {isEditing ? (
                  <input
                    type="tel"
                    value={doctorInfo.personalInfo.emergencyContact}
                    onChange={(e) => handleInputChange('personalInfo', 'emergencyContact', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                ) : (
                  <p className="text-gray-900">{doctorInfo.personalInfo.emergencyContact}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Professional Information - Full Width */}
      <div className="bg-white rounded-lg shadow-md p-6 mt-6">
        <h4 className="text-lg font-semibold text-gray-800 mb-4 border-b pb-2">Professional Information</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Employee ID</label>
            <p className="text-gray-900">{doctorInfo.professionalInfo.employeeId}</p>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Specialization</label>
            {isEditing ? (
              <input
                type="text"
                value={doctorInfo.professionalInfo.specialization}
                onChange={(e) => handleInputChange('professionalInfo', 'specialization', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            ) : (
              <p className="text-gray-900">{doctorInfo.professionalInfo.specialization}</p>
            )}
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Department</label>
            {isEditing ? (
              <input
                type="text"
                value={doctorInfo.professionalInfo.department}
                onChange={(e) => handleInputChange('professionalInfo', 'department', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            ) : (
              <p className="text-gray-900">{doctorInfo.professionalInfo.department}</p>
            )}
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Position</label>
            {isEditing ? (
              <input
                type="text"
                value={doctorInfo.professionalInfo.position}
                onChange={(e) => handleInputChange('professionalInfo', 'position', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            ) : (
              <p className="text-gray-900">{doctorInfo.professionalInfo.position}</p>
            )}
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">License Number</label>
            {isEditing ? (
              <input
                type="text"
                value={doctorInfo.professionalInfo.licenseNumber}
                onChange={(e) => handleInputChange('professionalInfo', 'licenseNumber', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            ) : (
              <p className="text-gray-900">{doctorInfo.professionalInfo.licenseNumber}</p>
            )}
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Years of Experience</label>
            {isEditing ? (
              <input
                type="number"
                value={doctorInfo.professionalInfo.yearsExperience}
                onChange={(e) => handleInputChange('professionalInfo', 'yearsExperience', parseInt(e.target.value))}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            ) : (
              <p className="text-gray-900">{doctorInfo.professionalInfo.yearsExperience} years</p>
            )}
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Join Date</label>
            <p className="text-gray-900">{doctorInfo.professionalInfo.joinDate}</p>
          </div>
          
          <div className="md:col-span-2 lg:col-span-3">
            <label className="block text-sm font-medium text-gray-700 mb-1">Qualifications</label>
            {isEditing ? (
              <textarea
                value={doctorInfo.professionalInfo.qualifications}
                onChange={(e) => handleInputChange('professionalInfo', 'qualifications', e.target.value)}
                rows="2"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            ) : (
              <p className="text-gray-900">{doctorInfo.professionalInfo.qualifications}</p>
            )}
          </div>
          
          <div className="md:col-span-2 lg:col-span-3">
            <label className="block text-sm font-medium text-gray-700 mb-1">Certifications</label>
            {isEditing ? (
              <textarea
                value={doctorInfo.professionalInfo.certifications}
                onChange={(e) => handleInputChange('professionalInfo', 'certifications', e.target.value)}
                rows="2"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            ) : (
              <p className="text-gray-900">{doctorInfo.professionalInfo.certifications}</p>
            )}
          </div>
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

export default Profile;
