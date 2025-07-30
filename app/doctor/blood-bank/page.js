"use client";
import { useState } from "react";
import CommonTable from "../../../components/compafterlogin/Common/CommonTable";
import StatCard from "../../../components/compafterlogin/Common/StatCard";
import GenericCard from "../../../components/compafterlogin/Common/GenericCard";
import { FaCalendarAlt, FaCheck, FaClock, FaTint, FaUsb, FaUser, FaVenusMars } from "react-icons/fa";

const BloodBank = () => {
  const [bloodInventory] = useState([
    {
      id: 1,
      bloodType: "A+",
      unitsAvailable: 25,
      expiryDate: "2024-08-15",
      donorId: "D001",
      donorName: "John Smith",
      collectionDate: "2024-07-10",
      status: "Available",
      location: "Fridge-A1"
    },
    {
      id: 2,
      bloodType: "O-",
      unitsAvailable: 15,
      expiryDate: "2024-08-20",
      donorId: "D002",
      donorName: "Sarah Johnson",
      collectionDate: "2024-07-12",
      status: "Available",
      location: "Fridge-A2"
    },
    {
      id: 3,
      bloodType: "B+",
      unitsAvailable: 8,
      expiryDate: "2024-07-25",
      donorId: "D003",
      donorName: "Mike Wilson",
      collectionDate: "2024-06-28",
      status: "Expiring Soon",
      location: "Fridge-B1"
    },
    {
      id: 4,
      bloodType: "AB-",
      unitsAvailable: 3,
      expiryDate: "2024-08-30",
      donorId: "D004",
      donorName: "Emily Davis",
      collectionDate: "2024-07-18",
      status: "Low Stock",
      location: "Fridge-B2"
    },
    {
      id: 5,
      bloodType: "A-",
      unitsAvailable: 12,
      expiryDate: "2024-08-25",
      donorId: "D005",
      donorName: "Robert Brown",
      collectionDate: "2024-07-14",
      status: "Available",
      location: "Fridge-A3"
    },
    {
      id: 6,
      bloodType: "O+",
      unitsAvailable: 20,
      expiryDate: "2024-08-18",
      donorId: "D006",
      donorName: "Lisa White",
      collectionDate: "2024-07-11",
      status: "Available",
      location: "Fridge-B3"
    },
    {
      id: 7,
      bloodType: "B-",
      unitsAvailable: 0,
      expiryDate: "2024-08-22",
      donorId: "D007",
      donorName: "David Green",
      collectionDate: "2024-07-13",
      status: "Out of Stock",
      location: "Fridge-C1"
    },
    {
      id: 8,
      bloodType: "AB+",
      unitsAvailable: 4,
      expiryDate: "2024-07-28",
      donorId: "D008",
      donorName: "Maria Garcia",
      collectionDate: "2024-06-30",
      status: "Expiring Soon",
      location: "Fridge-C2"
    }
  ]);

  // Calculate statistics
  const totalUnits = bloodInventory.reduce((sum, item) => sum + item.unitsAvailable, 0);
  const totalBloodTypes = bloodInventory.length;
  const lowStockItems = bloodInventory.filter(item => item.unitsAvailable <= 5 && item.unitsAvailable > 0).length;
  const expiringSoon = bloodInventory.filter(item => {
    const expiryDate = new Date(item.expiryDate);
    const today = new Date();
    const daysUntilExpiry = Math.ceil((expiryDate - today) / (1000 * 60 * 60 * 24));
    return daysUntilExpiry <= 7 && daysUntilExpiry > 0;
  }).length;

  // Statistics data for StatCard
  const statData = [
    {
      icon: (
        <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 9.172V5L8 4z" />
        </svg>
      ),
      stat: totalUnits,
      label: "Total Units Available"
    },
    {
      icon: (
        <svg className="w-5 h-5 text-[#0B2443]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      stat: totalBloodTypes,
      label: "Blood Types"
    },
    {
      icon: (
        <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      ),
      stat: lowStockItems,
      label: "Low Stock Items"
    },
    {
      icon: (
        <svg className="w-5 h-5 text-green-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      stat: expiringSoon,
      label: "Expiring Soon"
    }
  ];

  const getStatusColor = (status, unitsAvailable) => {
    if (unitsAvailable === 0) return "bg-gray-100 text-gray-800";
    if (status === "Expiring Soon") return "bg-yellow-100 text-yellow-800";
    if (status === "Low Stock" || unitsAvailable <= 5) return "bg-orange-100 text-orange-800";
    return "bg-green-100 text-green-800";
  };

  const getBloodTypeColor = (bloodType) => {
    const colors = {
      "A+": "bg-red-100 text-red-800",
      "A-": "bg-red-200 text-red-900",
      "B+": "bg-blue-100 text-blue-800",
      "B-": "bg-blue-200 text-blue-900",
      "AB+": "bg-purple-100 text-purple-800",
      "AB-": "bg-purple-200 text-purple-900",
      "O+": "bg-green-100 text-green-800",
      "O-": "bg-green-200 text-green-900"
    };
    return colors[bloodType] || "bg-gray-100 text-gray-800";
  };

  return (
    <div className="p-6" style={{ fontFamily: "'Gill Sans MT', 'Gill Sans', 'GillSans', 'Arial', 'sans-serif'" }}>
      <div className="flex items-center mb-6">
        <span className="text-2xl mr-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-7 h-7 text-red-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 9.172V5L8 4z"
            />
          </svg>
        </span>
        <h2  className="text-3xl font-semibold text-[#0B2443]">Blood Bank Management</h2>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {statData.map((stat, index) => (
          <StatCard
            icon={stat.icon}
            stat={stat.stat}
            label={stat.label}
            key={index}
          />
        ))}
      </div>

        <div className="hidden md:block">
          <CommonTable
        columns={[
          { 
            label: "Blood Type", 
            key: "bloodType",
            render: (blood) => (
              <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getBloodTypeColor(blood.bloodType)}`}>
                {blood.bloodType}
              </span>
            )
          },
          { 
            label: "Units Available", 
            key: "unitsAvailable",
            render: (blood) => (
              <span className={`font-semibold ${blood.unitsAvailable <= 5 ? 'text-red-600' : 'text-green-600'}`}>
                {blood.unitsAvailable}
              </span>
            )
          },
          { 
            label: "Status", 
            key: "status",
            render: (blood) => (
              <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(blood.status, blood.unitsAvailable)}`}>
                {blood.unitsAvailable === 0 ? "Out of Stock" : blood.status}
              </span>
            )
          },
          { label: "Donor Name", key: "donorName" },
          { label: "Donor ID", key: "donorId" },
          { label: "Collection Date", key: "collectionDate" },
          { 
            label: "Expiry Date", 
            key: "expiryDate",
            render: (blood) => {
              const isExpiringSoon = new Date(blood.expiryDate) <= new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
              return (
                <span className={isExpiringSoon ? 'text-red-600 font-semibold' : ''}>
                  {blood.expiryDate}
                </span>
              );
            }
          },
          { label: "Location", key: "location" },
        ]}
        data={bloodInventory}
      />
        </div>

        <div className="block md:hidden">
                      <h1 className="text-2xl font-bold text-center text-[#0b2443] mb-2">Blood Bank </h1>
                      <div className="grid  grid-cols-2 gap-4">
                                      {bloodInventory.length === 0 ? (
                                        <div className="text-center text-gray-500 py-8">
                                          <FaUser className="w-12 h-12 mx-auto text-gray-300 mb-2" />
                                          <p>No record found.</p>
                                        </div>
                                      ) : (
                                        bloodInventory.map((blood) => (
                                          <GenericCard
                                            key={blood.id}
                                            data={blood}
                                            hospitalFields={[
                                           {
                                             key: "bloodType",
                                             icon: <FaTint />,
                                           },
                                           {
                                             key: "unitsAvailable",
                                             icon: <FaVenusMars />,
                                           },
                                            {
                                              key: 'expiryDate',
                                              icon: <FaCalendarAlt />,
                                            },
                                         ]}
                                         personalFields={[
                                           { key: "status", icon: <FaClock /> },
                                           { key: "donorName", icon: <FaUser /> },
                                        ]}
                                          />
                                        ))
                                      )}
                                    </div>
                    </div>
    
    </div>
  );
};

export default BloodBank;