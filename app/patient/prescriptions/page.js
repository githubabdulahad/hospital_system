"use client"
import React, { useContext, useState } from 'react';
// Fix the import path - adjust based on your actual Context location
import { SearchContext } from '../../../components/Context/SearchContext';
// import { SearchContext } from '../../../../src/Context/SearchContext';
import { FaEye, FaUser, FaPhone,FaPrescriptionBottle, FaClock, FaVenus, FaVenusMars } from 'react-icons/fa';
import StatCard from '../../../components/compafterlogin/Common/StatCard';
import PrescriptionDetail from '../../../components/compafterlogin/Patient/PrescriptionDetail';
import GenericCard from '../../../components/compafterlogin/Common/GenericCard';
import { FaUserDoctor } from 'react-icons/fa6';

const prescriptions = [
  {
    id: 1,
    prescriptionId: "RX001",
    date: "2024-07-16",
    time: "11:10",
    patientName: "Tanvir Hasan",
    doctorName: "Dr. Michael Pewd",
    department: "General Medicine",
    regNo: "DOC123456",
    age: 27,
    sex: "Male",
    diagnosisCode: "K30",
    diagnosis: "Functional dyspepsia",
    medications: [
      { name: "Omeprazole", dosage: "20mg", frequency: "Once daily", duration: "7 days", instructions: "Take before breakfast" },
      { name: "Metoclopramide", dosage: "10mg", frequency: "Three times daily", duration: "5 days", instructions: "Take before meals" }
    ],
    instructions: "Take with food. Avoid spicy foods. Complete the course.",
    followUpDate: "2024-07-23",
    status: "Active"
  },
  {
    id: 2,
    prescriptionId: "RX002",
    date: "2024-07-15",
    time: "14:30",
    patientName: "Ali Hasan",
    doctorName: "Dr. Sarah Johnson",
    department: "Internal Medicine",
    regNo: "DOC789012",
    age: 32,
    sex: "Male",
    diagnosisCode: "J00",
    diagnosis: "Acute nasopharyngitis (common cold)",
    medications: [
      { name: "Paracetamol", dosage: "500mg", frequency: "Four times daily", duration: "3 days", instructions: "Take after meals" },
      { name: "Dextromethorphan", dosage: "15mg", frequency: "Every 6 hours", duration: "5 days", instructions: "Take as needed for cough" }
    ],
    instructions: "Complete rest. Increase fluid intake. Avoid cold drinks.",
    followUpDate: "2024-07-20",
    status: "Completed"
  },
  {
    id: 3,
    prescriptionId: "RX003",
    date: "2024-07-12",
    time: "09:45",
    patientName: "Tanvir Hasan",
    doctorName: "Dr. Ahmed Rahman",
    department: "Cardiology",
    regNo: "DOC345678",
    age: 27,
    sex: "Male",
    diagnosisCode: "I10",
    diagnosis: "Essential hypertension",
    medications: [
      { name: "Amlodipine", dosage: "5mg", frequency: "Once daily", duration: "30 days", instructions: "Take in the morning" },
      { name: "Metformin", dosage: "500mg", frequency: "Twice daily", duration: "30 days", instructions: "Take with meals" }
    ],
    instructions: "Monitor blood pressure daily. Reduce salt intake. Regular exercise.",
    followUpDate: "2024-08-12",
    status: "Active"
  }
];


export default function PatientPrescriptions() {
  const { search } = useContext(SearchContext);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPrescription, setSelectedPrescription] = useState(null);
  const [filterStatus, setFilterStatus] = useState("All");

  // Filter prescriptions based on search and status
  const filteredPrescriptions = prescriptions.filter((prescription) => {
    const matchesSearch = 
      prescription.patientName.toLowerCase().includes(search.toLowerCase()) ||
      prescription.doctorName.toLowerCase().includes(search.toLowerCase()) ||
      prescription.prescriptionId.toLowerCase().includes(search.toLowerCase()) ||
      prescription.diagnosis.toLowerCase().includes(search.toLowerCase());
    
    const matchesStatus = filterStatus === "All" || prescription.status === filterStatus;
    
    return matchesSearch && matchesStatus;
  });

  const handleViewPrescription = (prescription) => {
    setSelectedPrescription(prescription);
    setModalOpen(true);
  };

  const handleClosePrescription = () => {
    setModalOpen(false);
    setSelectedPrescription(null);
  };



  const handlePrint = () => {
    window.print();
  };


  const getStatusBadge = (status) => {
    const statusStyles = {
      Active: "bg-green-100 text-green-800",
      Completed: "bg-blue-100 text-blue-800",
      Cancelled: "bg-red-100 text-red-800",
      Pending: "bg-yellow-100 text-yellow-800"
    };
 
    return (
      <span className={`px-2 py-1 text-xs font-medium rounded-full ${statusStyles[status] || 'bg-gray-100 text-gray-800'}`}>
        {status}
      </span>
    );
  };

  const statData = [
  {
    icon:<svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>,
    stat:prescriptions.length,
    label: "Total Prescriptions",
  },
  {
    icon:<svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"> 
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>,
    stat: prescriptions.filter(p => p.status === "Active").length,
    label: "Active Prescriptions",
  },
  {
    icon:<svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M5 13l4 4L19 7" />
              </svg>,
    stat: prescriptions.filter(p => p.status === "Completed").length,
    label: "Completed Prescriptions",
  }
]

  return (
    <div className="p-6" style={{ fontFamily: "'Gill Sans MT', 'Gill Sans', 'GillSans', 'Arial', 'sans-serif'" }}>
      {/* Header */}
      <div className="flex items-center mb-6">
        <span className="text-2xl mr-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 text-green-500">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
          </svg>
        </span>
        <h1 className="text-2xl font-bold text-gray-800">My Prescriptions</h1>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-6">
        {statData.map((stat, index) => (
                  <StatCard icon={stat.icon} stat={stat.stat} label={stat.label} key={index} />
                ))}
      </div>

      {/* Filter */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Filter by Status</label>
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="All">All Status</option>
            <option value="Active">Active</option>
            <option value="Completed">Completed</option>
            <option value="Cancelled">Cancelled</option>
            <option value="Pending">Pending</option>
          </select>
        </div>
      </div>

      {/* Prescriptions Table */}
      <div className="bg-white hidden md:block rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Prescription ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Doctor</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Diagnosis</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredPrescriptions.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-6 py-4 whitespace-nowrap text-center text-gray-500">
                    No prescriptions found matching your criteria.
                  </td>
                </tr>
              ) : (
                filteredPrescriptions.map((prescription) => (
                  <tr key={prescription.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {prescription.prescriptionId}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {prescription.date}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {prescription.doctorName}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <div className="max-w-xs truncate" title={prescription.diagnosis}>
                        {prescription.diagnosis}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {getStatusBadge(prescription.status)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                      <button
                        onClick={() => handleViewPrescription(prescription)}
                        className="bg-[#0B2443] hover:bg-blue-900 ml-2 text-white px-3 py-1 rounded text-xs flex items-center transition-colors"
                        title="View Prescription"
                      >
                        <FaEye className="w-3 h-3 mr-1" />
                       </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      <div className="block md:hidden">
              <h1 className="text-2xl font-bold text-center text-[#0b2443] mb-2">Accountant List</h1>
              <div className="grid  grid-cols-2 gap-4">
                              {filteredPrescriptions.length === 0 ? (
                                <div className="text-center text-gray-500 py-8">
                                  <FaUser className="w-12 h-12 mx-auto text-gray-300 mb-2" />
                                  <p>No prescriptions found.</p>
                                </div>
                              ) : (
                                filteredPrescriptions.map((prescription) => (
                                  <GenericCard
                                    key={prescription.id}
                                    data={prescription}
                                    hospitalFields={[
                                   {
                                     key: "prescriptionId",
                                     icon: <FaPrescriptionBottle />,
                                   },
                                   {
                                     key: "doctorName",
                                     icon: <FaUserDoctor />,
                                   },
                                 ]}
                                 personalFields={[
                                { key: "patientName", icon: <FaUser /> },
                                { key: "age", icon: <FaClock /> },
                                { key: "sex", icon: <FaVenusMars /> },
                                 ]}
                                    actions={[
                                      {
                                        label: "View",
                                        icon: <FaEye className="w-3 h-3" />,
                                        color: "text-[#0B2443] ",
                                        onClick: handleViewPrescription,
                                      }
                                    ]}
                                  />
                                ))
                              )}
                            </div>
            </div>
      {/* Prescription Detail Modal */}
      {modalOpen && (
        <PrescriptionDetail selectedPrescription={selectedPrescription} handleClosePrescription={handleClosePrescription} handlePrint={handlePrint} />        
      )}
    </div>
  );
}
