"use client";
import { useContext, useState } from "react";
import { SearchContext } from "../../../components/Context/SearchContext";
import CommonTable from "../../../components/compafterlogin/Common/CommonTable";
import Toast from "../../../components/compafterlogin/Common/Toast";
import StatCard from "../../../components/compafterlogin/Common/StatCard";
import GenericCard from "../../../components/compafterlogin/Common/GenericCard";
import { FaBuilding, FaChild, FaClock, FaEnvelope, FaPhone, FaTint, FaUser, FaVenusMars } from "react-icons/fa";

const BloodDonor = () => {
  const { search } = useContext(SearchContext);
  const [donors] = useState([
    {
      id: 1,
      donorId: "DON001",
      name: "John Smith",
      bloodType: "A+",
      phone: "+1-555-0123",
      email: "john@email.com",
      age: 28,
      lastDonation: "2024-01-10",
      nextEligible: "2024-04-10",
      totalDonations: 5,
      status: "Eligible",
      address: "123 Main St, City",
      emergencyContact: "Jane Smith - +1-555-0124",
      medicalNotes: "No known allergies, regular donor",
    },
    {
      id: 2,
      donorId: "DON002",
      name: "Sarah Johnson",
      bloodType: "O-",
      phone: "+1-555-0234",
      email: "sarah.johnson@email.com",
      age: 32,
      lastDonation: "2024-01-08",
      nextEligible: "2024-04-08",
      totalDonations: 12,
      status: "Eligible",
      address: "456 Oak Ave, City",
      emergencyContact: "Mike Johnson - +1-555-0235",
      medicalNotes: "Universal donor, high iron levels",
    },
    {
      id: 3,
      donorId: "DON003",
      name: "Mike Wilson",
      bloodType: "B+",
      phone: "+1-555-0345",
      email: "mike.wilson@email.com",
      age: 25,
      lastDonation: "2024-01-12",
      nextEligible: "2024-04-12",
      totalDonations: 3,
      status: "Eligible",
      address: "789 Pine Rd, City",
      emergencyContact: "Lisa Wilson - +1-555-0346",
      medicalNotes: "First-time donor, passed all screening tests",
    },
    {
      id: 4,
      donorId: "DON004",
      name: "Lisa Brown",
      bloodType: "AB+",
      phone: "+1-555-0456",
      email: "lisa.brown@email.com",
      age: 35,
      lastDonation: "2023-12-15",
      nextEligible: "2024-03-15",
      totalDonations: 8,
      status: "Not Eligible",
      address: "321 Elm St, City",
      emergencyContact: "Tom Brown - +1-555-0457",
      medicalNotes: "Recent medication, temporary deferral",
    },
    {
      id: 5,
      donorId: "DON005",
      name: "David Lee",
      bloodType: "O+",
      phone: "+1-555-0567",
      email: "david.lee@email.com",
      age: 29,
      lastDonation: "2024-01-14",
      nextEligible: "2024-04-14",
      totalDonations: 15,
      status: "Eligible",
      address: "654 Maple Dr, City",
      emergencyContact: "Anna Lee - +1-555-0568",
      medicalNotes: "Regular donor, excellent health record",
    },
    {
      id: 6,
      donorId: "DON006",
      name: "Emma Davis",
      bloodType: "A-",
      phone: "+1-555-0678",
      email: "emma.davis@email.com",
      age: 26,
      lastDonation: "2024-01-11",
      nextEligible: "2024-04-11",
      totalDonations: 7,
      status: "Eligible",
      address: "987 Cedar Lane, City",
      emergencyContact: "John Davis - +1-555-0679",
      medicalNotes: "Rare blood type, priority donor",
    },
  ]);

  const [toast, setToast] = useState({ show: false, message: "", type: "success" });
  const [filterBloodType, setFilterBloodType] = useState("All");
  const [filterStatus, setFilterStatus] = useState("All");

  const filteredDonors = donors.filter((donor) => {
    const matchesSearch = 
      donor.name.toLowerCase().includes(search.toLowerCase()) ||
      donor.donorId.toLowerCase().includes(search.toLowerCase()) ||
      donor.email.toLowerCase().includes(search.toLowerCase()) ||
      donor.phone.toLowerCase().includes(search.toLowerCase()) ||
      donor.bloodType.toLowerCase().includes(search.toLowerCase());
    
    const matchesBloodType = filterBloodType === "All" || donor.bloodType === filterBloodType;
    const matchesStatus = filterStatus === "All" || donor.status === filterStatus;
    
    return matchesSearch && matchesBloodType && matchesStatus;
  });

  const hideToast = () => {
    setToast({ show: false, message: "", type: "success" });
  };

  const getStatusBadge = (status) => {
    const statusStyles = {
      Eligible: "bg-green-100 text-green-800",
      "Not Eligible": "bg-red-100 text-red-800",
      "Temporarily Deferred": "bg-yellow-100 text-yellow-800",
      "Permanently Deferred": "bg-gray-100 text-gray-800",
    };
    
    return (
      <span className={`px-2 py-1 text-xs font-medium rounded-full ${statusStyles[status] || 'bg-gray-100 text-gray-800'}`}>
        {status}
      </span>
    );
  };

  const getBloodTypeBadge = (bloodType) => {
    const typeColors = {
      "A+": "bg-red-100 text-red-800",
      "A-": "bg-red-50 text-red-600",
      "B+": "bg-blue-100 text-blue-800",
      "B-": "bg-blue-50 text-blue-600",
      "AB+": "bg-purple-100 text-purple-800",
      "AB-": "bg-purple-50 text-purple-600",
      "O+": "bg-green-100 text-green-800",
      "O-": "bg-green-50 text-green-600",
    };
    
    return (
      <span className={`px-2 py-1 text-sm font-bold rounded ${typeColors[bloodType] || 'bg-gray-100 text-gray-800'}`}>
        {bloodType}
      </span>
    );
  };

  // Statistics
  const totalDonors = donors.length;
  const eligibleDonors = donors.filter(d => d.status === "Eligible").length;
  const totalDonations = donors.reduce((sum, donor) => sum + donor.totalDonations, 0);
  const universalDonors = donors.filter(d => d.bloodType === "O-").length;

  const statData = [
    {
      icon:<svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>,
      stat: totalDonors,
      label: "Total Donors",
    },
    {
      icon:<svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>,
      stat: eligibleDonors, 
      label: "Eligible Donors",
    },
    {
      icon:<svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>,
      stat: totalDonations,
      label: "Total Donations",
    },
    {
      icon:<svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.371-1.676 .945l-3.976-2a1 1 0 00-.95 .69l-1.519 4.674c-.3 .921-1.603 .921-1.902 .001l-1.519-4.674a1 1 0 00-.95-.69H3c-.969 .001-1.371-1.24-.588-1.81l3.976-2a1 1 0 00 .363 -1.118L6 .927c-.3-.922 .755-1 .676-.945z" />
              </svg>,
      stat: universalDonors,
      label: "Universal Donors",
    }
  ]
    
  return (
    <div
      className="p-6"
      style={{
        fontFamily:
          "'Gill Sans MT', 'Gill Sans', 'GillSans', 'Arial', 'sans-serif'",
      }}
    >
      <div className="flex items-center mb-6">
        <span className="text-2xl mr-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-7 h-7 text-red-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
            />
          </svg>
        </span>
        <h2 className="text-3xl font-semibold text-[#0b2443]">Blood Donors</h2>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {statData.map((stat, index) => (
                  <StatCard icon={stat.icon} stat={stat.stat} label={stat.label} key={index} />
                ))}
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 mb-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Blood Type</label>
          <select
            value={filterBloodType}
            onChange={(e) => setFilterBloodType(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            <option value="All">All Types</option>
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
          <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            <option value="All">All Status</option>
            <option value="Eligible">Eligible</option>
            <option value="Not Eligible">Not Eligible</option>
            <option value="Temporarily Deferred">Temporarily Deferred</option>
            <option value="Permanently Deferred">Permanently Deferred</option>
          </select>
        </div>
      </div>

      <div className="hidden md:block">
        <CommonTable
        columns={[
          { label: "Donor ID", key: "donorId" },
          { label: "Name", key: "name" },
          { 
            label: "Blood Type", 
            key: "bloodType", 
            render: (donor) => getBloodTypeBadge(donor.bloodType)
          },
          { label: "Age", key: "age" },
          { label: "Phone", key: "phone" },
          { label: "Last Donation", key: "lastDonation" },
          { label: "Next Eligible", key: "nextEligible" },
          { label: "Total Donations", key: "totalDonations" },
          { 
            label: "Status", 
            key: "status", 
            render: (donor) => getStatusBadge(donor.status)
          },
        ]}
        data={filteredDonors}
      />
      </div>

      <div className="block md:hidden">
                          <h1 className="text-2xl font-bold text-center text-[#0b2443] mb-2">
                            Blood Donors List
                          </h1>
                          <div className="grid  grid-cols-2 gap-4">
                            {filteredDonors.length === 0 ? (
                              <div className="text-center text-gray-500 py-8">
                                <FaUser className="w-12 h-12 mx-auto text-gray-300 mb-2" />
                                <p>No donors found.</p>
                              </div>
                            ) : (
                              filteredDonors.map((donor) => (
                                <GenericCard
                                  key={donor.id}
                                  data={donor}
                                  hospitalFields={[
                     {
                       key: "bloodType",
                       icon: <FaTint />,
                     },
                     {
                       key: "age",
                       icon: <FaChild />,
                     },
                   ]}
                   personalFields={[
                  { key: "email", icon:<FaEnvelope/> },
                  { key: "phone", icon:<FaPhone/> },
                  { key: "status", icon:<FaUser/> }
                   ]}
                                                         />
                              ))
                            )}
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

export default BloodDonor;
