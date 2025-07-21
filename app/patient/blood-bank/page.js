"use client";
import React, { useContext, useState } from 'react';
import { SearchContext } from '../../../components/Context/SearchContext';
import { FaTint, FaUser, FaCalendarAlt, FaHeart, FaEye } from 'react-icons/fa';
import StatCard from '../../../components/compafterlogin/Common/StatCard';
import DonorDetailModal from '../../../components/compafterlogin/Patient/DonorDetailModal';

const initialDonors = [
  {
    id: 1,
    name: "Mishelle Obama",
    age: 30,
    sex: "Female",
    bloodGroup: "A+",
    lastDonationDate: "2024-06-15",
    phone: "+1-555-0123",
    email: "mishelle.obama@email.com",
    address: "123 Main St, City",
    donationCount: 5,
    eligibleForNext: "2024-09-15"
  },
  {
    id: 2,
    name: "John Smith",
    age: 28,
    sex: "Male",
    bloodGroup: "O+",
    lastDonationDate: "2024-07-10",
    phone: "+1-555-0124",
    email: "john.smith@email.com",
    address: "456 Oak Ave, City",
    donationCount: 8,
    eligibleForNext: "2024-10-10"
  },
  {
    id: 3,
    name: "Sarah Johnson",
    age: 35,
    sex: "Female",
    bloodGroup: "B+",
    lastDonationDate: "2024-05-20",
    phone: "+1-555-0125",
    email: "sarah.johnson@email.com",
    address: "789 Pine St, City",
    donationCount: 12,
    eligibleForNext: "2024-08-20"
  },
  {
    id: 4,
    name: "Michael Chen",
    age: 32,
    sex: "Male",
    bloodGroup: "AB+",
    lastDonationDate: "2024-06-30",
    phone: "+1-555-0126",
    email: "michael.chen@email.com",
    address: "321 Elm St, City",
    donationCount: 6,
    eligibleForNext: "2024-09-30"
  }
];

const initialStatus = [
  { bloodGroup: "A+", available: 25, critical: false, lastUpdated: "2024-07-17" },
  { bloodGroup: "A-", available: 8, critical: true, lastUpdated: "2024-07-17" },
  { bloodGroup: "AB+", available: 15, critical: false, lastUpdated: "2024-07-17" },
  { bloodGroup: "AB-", available: 3, critical: true, lastUpdated: "2024-07-17" },
  { bloodGroup: "B+", available: 18, critical: false, lastUpdated: "2024-07-17" },
  { bloodGroup: "B-", available: 5, critical: true, lastUpdated: "2024-07-17" },
  { bloodGroup: "O+", available: 30, critical: false, lastUpdated: "2024-07-17" },
  { bloodGroup: "O-", available: 12, critical: false, lastUpdated: "2024-07-17" },
];

export default function PatientBloodBank() {
  const { search } = useContext(SearchContext);
  const [donors] = useState(initialDonors);
  const [tab, setTab] = useState("donors");
  const [status] = useState(initialStatus);
  const [selectedDonor, setSelectedDonor] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [filterBloodGroup, setFilterBloodGroup] = useState("All");

  const bloodGroups = ["All", ...new Set(donors.map(donor => donor.bloodGroup))];

  const filteredDonors = donors.filter((donor) => {
    const matchesSearch = 
      donor.name.toLowerCase().includes(search.toLowerCase()) ||
      donor.bloodGroup.toLowerCase().includes(search.toLowerCase()) ||
      donor.phone.toLowerCase().includes(search.toLowerCase());
    
    const matchesBloodGroup = filterBloodGroup === "All" || donor.bloodGroup === filterBloodGroup;
    
    return matchesSearch && matchesBloodGroup;
  });

  const handleViewDonor = (donor) => {
    setSelectedDonor(donor);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedDonor(null);
  };

  const getBloodGroupColor = (bloodGroup) => {
    const colors = {
      "A+": "text-red-600 bg-red-50",
      "A-": "text-red-700 bg-red-100",
      "B+": "text-blue-600 bg-blue-50",
      "B-": "text-blue-700 bg-blue-100",
      "AB+": "text-purple-600 bg-purple-50",
      "AB-": "text-purple-700 bg-purple-100",
      "O+": "text-green-600 bg-green-50",
      "O-": "text-green-700 bg-green-100",
    };
    return colors[bloodGroup] || "text-gray-600 bg-gray-50";
  };

  const statData = [
    {
      icon: <FaUser className="w-5 h-5 text-red-600" />,
      stat:donors.length,
      label: "Total Donors",
    },
    {
      icon: <FaTint className="w-5 h-5 text-blue-600" />,
      stat: bloodGroups.length - 1,
      label: "Blood Types",
    },
    {
      icon: <span className="text-green-600 text-xl">💉</span>,
      stat: status.reduce((sum, item) => sum + item.available, 0),
      label: "Total Units",
    },
    {
      icon:<span className="text-yellow-600 text-xl">⚠️</span>,
      stat: status.filter(item => item.critical).length,
      label: "Critical Types",
    }
  ]
  
  return (
    <div className="p-6" style={{ fontFamily: "'Gill Sans MT', 'Gill Sans', 'GillSans', 'Arial', 'sans-serif'" }}>
      {/* Header */}
      <div className="flex items-center mb-6">
        <span className="text-2xl mr-2">
          <FaTint className="w-7 h-7 text-red-500" />
        </span>
        <h1 className="text-2xl font-bold text-gray-800">Blood Bank</h1>
        <span className="ml-3 text-sm text-gray-600">Donor information and blood availability</span>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        {statData.map((stat, index) => (
                  <StatCard icon={stat.icon} stat={stat.stat} label={stat.label} key={index} />
                ))}
      </div>

      {/* Tab Navigation */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden mb-6">
        <div className="flex border-b border-gray-200">
          <button
            className={`px-6 py-3 font-medium text-sm ${
              tab === 'donors' 
                ? 'border-b-2 border-red-500 text-red-600 bg-red-50' 
                : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setTab('donors')}
          >
            <FaUser className="w-4 h-4 inline mr-2" />
            Blood Donors ({donors.length})
          </button>
          <button
            className={`px-6 py-3 font-medium text-sm ${
              tab === 'status' 
                ? 'border-b-2 border-red-500 text-red-600 bg-red-50' 
                : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setTab('status')}
          >
            <FaTint className="w-4 h-4 inline mr-2" />
            Blood Bank Status
          </button>
        </div>

        {/* Donors Tab */}
        {tab === 'donors' && (
          <div className="p-6">
            {/* Filter */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Filter by Blood Group</label>
                <select
                  value={filterBloodGroup}
                  onChange={(e) => setFilterBloodGroup(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  {bloodGroups.map(group => (
                    <option key={group} value={group}>{group}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Donors Table */}
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Donor</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Age/Sex</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Blood Group</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Donation</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Donations</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredDonors.length === 0 ? (
                    <tr>
                      <td colSpan={6} className="px-6 py-8 text-center text-gray-500">
                        <FaUser className="w-12 h-12 mx-auto text-gray-300 mb-2" />
                        <p>No donors found matching your criteria.</p>
                      </td>
                    </tr>
                  ) : (
                    filteredDonors.map((donor) => (
                      <tr key={donor.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="w-10 h-10 bg-gradient-to-br from-red-50 to-red-100 rounded-full flex items-center justify-center mr-3">
                              <FaUser className="w-5 h-5 text-red-500" />
                            </div>
                            <div>
                              <div className="text-sm font-medium text-gray-900">{donor.name}</div>
                              <div className="text-sm text-gray-500">{donor.phone}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <div>{donor.age} years</div>
                          <div className="text-xs text-gray-400">{donor.sex}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-3 py-1 text-sm font-medium rounded-full ${getBloodGroupColor(donor.bloodGroup)}`}>
                            {donor.bloodGroup}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <div className="flex items-center">
                            <FaCalendarAlt className="w-3 h-3 mr-2 text-gray-400" />
                            {donor.lastDonationDate}
                          </div>
                          <div className="text-xs text-gray-400">
                            Next eligible: {donor.eligibleForNext}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <FaHeart className="w-3 h-3 mr-2 text-red-500" />
                            <span className="text-sm font-medium">{donor.donationCount} times</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <button
                            onClick={() => handleViewDonor(donor)}
                            className="bg-red-500 hover:bg-red-600 text-white ml-2 px-4 py-1 rounded text-xs transition-colors"
                          >
                            <FaEye className="inline text-center" />
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Blood Bank Status Tab */}
        {tab === 'status' && (
          <div className="p-6">
            {/* Detailed Status Table */}
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Blood Group</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Available Units</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Updated</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {status.map((item, idx) => (
                    <tr key={idx} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-3 py-1 text-sm font-medium rounded-full ${getBloodGroupColor(item.bloodGroup)}`}>
                          {item.bloodGroup}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <FaTint className="w-4 h-4 mr-2 text-red-500" />
                          <span className="text-sm font-medium">{item.available} units</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          item.critical ? 'bg-red-100 text-red-800' :
                          item.available > 20 ? 'bg-green-100 text-green-800' :
                          item.available > 10 ? 'bg-yellow-100 text-yellow-800' : 'bg-orange-100 text-orange-800'
                        }`}>
                          {/* {getStatusIcon(item.available, item.critical)} */}
                          <span className="ml-1">
                            {item.critical ? "Critical" : 
                             item.available > 20 ? "Well Stocked" :
                             item.available > 10 ? "Adequate" : "Low Stock"}
                          </span>
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {item.lastUpdated}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>

      {/* Donor Details Modal */}
      {showModal && selectedDonor && (
        <DonorDetailModal selectedDonor={selectedDonor} handleCloseModal={handleCloseModal} getBloodGroupColor={getBloodGroupColor} />
      )}
    </div>
  );
}
