"use client";
import React, { useContext, useState } from 'react';
import { SearchContext } from '../../../components/Context/SearchContext';
import { FaCalendarAlt, FaClock, FaUserMd, FaMapMarkerAlt, FaPhone, FaEye, FaEdit, FaTimes, FaExclamationTriangle, FaTrash, FaUser, FaBuilding } from 'react-icons/fa';
import StatCard from '../../../components/compafterlogin/Common/StatCard';
import PendingAppointments from '../../../components/compafterlogin/Patient/PendingAppointments';
import CancelAppointment from '../../../components/compafterlogin/Patient/CancelAppointment';
import { FaUserDoctor } from 'react-icons/fa6';
import GenericCard from '../../../components/compafterlogin/Common/GenericCard';

const pendingAppointments = [
  { 
    id: 1,
    date: '10 Jul, 2025 – 10:00', 
    patient: 'Tanvir Hasan', 
    doctor: 'Dr. Micheal Pew',
    department: 'Cardiology',
    type: 'Consultation',
    reason: 'Chest pain and irregular heartbeat',
    urgency: 'Normal',
    location: 'Room 204, Second Floor',
    phone: '+1-555-0123',
    requestedOn: '05 Jul, 2025',
    estimatedDuration: '30 minutes'
  },
  { 
    id: 2,
    date: '12 Jul, 2025 – 11:30', 
    patient: 'Tanvir Hasan', 
    doctor: 'Dr. Erich Mcbride',
    department: 'Orthopedics',
    type: 'Follow-up',
    reason: 'Knee pain follow-up after treatment',
    urgency: 'Normal',
    location: 'Room 108, First Floor',
    phone: '+1-555-0124',
    requestedOn: '06 Jul, 2025',
    estimatedDuration: '25 minutes'
  },
  { 
    id: 3,
    date: '15 Jul, 2025 – 09:15', 
    patient: 'Tanvir Hasan', 
    doctor: 'Dr. Micheal Pew',
    department: 'Cardiology',
    type: 'Check-up',
    reason: 'Regular cardiac health monitoring',
    urgency: 'Urgent',
    location: 'Room 204, Second Floor',
    phone: '+1-555-0123',
    requestedOn: '07 Jul, 2025',
    estimatedDuration: '45 minutes'
  },
];

const PatientPendingAppointments = () => {
  const { search } = useContext(SearchContext);
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showCancelModal, setShowCancelModal] = useState(false);
  const [cancelReason, setCancelReason] = useState('');

  const filteredData = pendingAppointments.filter(
    (row) =>
      row.date.toLowerCase().includes(search.toLowerCase()) ||
      row.patient.toLowerCase().includes(search.toLowerCase()) ||
      row.doctor.toLowerCase().includes(search.toLowerCase()) ||
      row.department.toLowerCase().includes(search.toLowerCase())
  );

  const handleViewDetails = (appointment) => {
    setSelectedAppointment(appointment);
    setShowModal(true);
  };

  const handleCancelAppointment = (appointment) => {
    setSelectedAppointment(appointment);
    setShowCancelModal(true);
  };

  const confirmCancel = () => {
    if (!cancelReason.trim()) {
      alert('Please provide a reason for cancellation');
      return;
    }
    
    // In a real application, you would send this to your backend
    console.log('Cancelling appointment:', selectedAppointment.id, 'Reason:', cancelReason);
    alert('Appointment cancelled successfully!');
    
    // Reset and close modal
    setCancelReason('');
    setShowCancelModal(false);
    setSelectedAppointment(null);
  };

  const getUrgencyBadge = (urgency) => {
    const urgencyStyles = {
      Normal: "bg-green-100 text-green-800",
      Urgent: "bg-yellow-100 text-yellow-800",
      Emergency: "bg-red-100 text-red-800"
    };
    
    return (
      <span className={`px-2 py-1 text-xs font-medium rounded-full ${urgencyStyles[urgency] || 'bg-gray-100 text-gray-800'}`}>
        {urgency}
      </span>
    );
  };

  const statData =[
    {
      icon: <FaClock className="w-5 h-5 text-yellow-600" />,
      stat: pendingAppointments.length,
      label:'Total Pending',
    },
    {
      icon: <FaExclamationTriangle className="w-5 h-5 text-red-600" />,
      stat: pendingAppointments.filter(apt => apt.urgency === 'Urgent').length,
      label: 'Urgent',
    },
    {
      icon: <FaUserMd className="w-5 h-5 text-blue-600" />,
      stat: new Set(pendingAppointments.map(apt => apt.doctor)).size,
      label: 'Doctors',
    }
  ]

  return (
    <div className="p-6" style={{ fontFamily: "'Gill Sans MT', 'Gill Sans', 'GillSans', 'Arial', 'sans-serif'" }}>
      {/* Header */}
      <div className="flex items-center mb-6">
        <FaClock className="w-7 h-7 text-yellow-500 mr-3" />
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Pending Appointments</h1>
          <p className="text-gray-600 mt-1">Appointments awaiting confirmation</p>
        </div>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
        {statData.map((stat, index) => (
                  <StatCard icon={stat.icon} stat={stat.stat} label={stat.label} key={index} />
        ))}
      </div>

      {/* Appointments Table */}
      <div className="bg-white hidden md:block rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="p-6">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date & Time</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Doctor</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Department</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Urgency</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredData.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="px-6 py-8 text-center text-gray-500">
                      <FaClock className="w-12 h-12 mx-auto text-gray-300 mb-2" />
                      <p>No pending appointments found.</p>
                    </td>
                  </tr>
                ) : (
                  filteredData.map((row) => (
                    <tr key={row.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <FaCalendarAlt className="w-4 h-4 text-gray-400 mr-2" />
                          <div>
                            <div className="text-sm font-medium text-gray-900">{row.date}</div>
                            <div className="text-xs text-gray-500">Requested: {row.requestedOn}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <FaUserMd className="w-4 h-4 text-gray-400 mr-2" />
                          <div>
                            <div className="text-sm font-medium text-gray-900">{row.doctor}</div>
                            <div className="text-xs text-gray-500">{row.location}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {row.department}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {row.type}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {getUrgencyBadge(row.urgency)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <div className="flex space-x-2">
                          <button
                            onClick={() => handleViewDetails(row)}
                            className="text-blue-600 hover:text-blue-900 bg-blue-50 hover:bg-blue-100 px-2 py-1 rounded transition-colors"
                            title="View Details"
                          >
                            <FaEye className="w-3 h-3" />
                          </button>
                          <button
                            onClick={() => handleCancelAppointment(row)}
                            className="text-red-600 hover:text-red-900 bg-red-50 hover:bg-red-100 px-2 py-1 rounded transition-colors"
                            title="Cancel Appointment"
                          >
                            <FaTimes className="w-3 h-3" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="block md:hidden">
                    <h1 className="text-2xl font-bold text-center text-[#0b2443] mb-2">Pending Appointments</h1>
                    <div className="grid  grid-cols-2 gap-4">
                                    {filteredData.length === 0 ? (
                                      <div className="text-center text-gray-500 py-8">
                                        <FaUser className="w-12 h-12 mx-auto text-gray-300 mb-2" />
                                        <p>No record found.</p>
                                      </div>
                                    ) : (
                                      filteredData.map((data) => (
                                        <GenericCard
                                          key={data.id}
                                          data={data}
                                          hospitalFields={[
                                         {
                                           key: "patient",
                                           icon: <FaUser />,
                                         },
                                         {
                                           key: "doctor",
                                           icon: <FaUserDoctor />,
                                         },
                                         
                                         {
                                           key: "urgency",
                                           icon: <FaClock />,
                                         },
                                       ]}
                                       personalFields={[
                                         { key: "department", icon: <FaBuilding /> },
                                         { key: "date", icon: <FaCalendarAlt /> },
                                      ]}
                                          actions={[
                                            {
                                              label: "View",
                                              icon: <FaEye className="w-3 h-3" />,
                                              color: "text-[#0B2443] ",
                                              onClick: handleViewDetails,
                                            },
                                            {
                                              label: "Download",
                                              icon: <FaTrash className="w-3 h-3" />,
                                              color: "text-red-600",
                                              onClick: handleCancelAppointment,
                                            }
                                          ]}
                                        />
                                      ))
                                    )}
                                  </div>
                  </div>

      {/* View Details Modal */}
      {showModal && selectedAppointment && (
        <PendingAppointments getUrgencyBadge={getUrgencyBadge} setShowModal={setShowModal} selectedAppointment={selectedAppointment}/>
      )}

      {/* Cancel Appointment Modal */}
      {showCancelModal && selectedAppointment && (
       <CancelAppointment setCancelReason={setCancelReason} cancelReason={cancelReason} confirmCancel={confirmCancel} selectedAppointment={selectedAppointment} setShowCancelModal={setShowCancelModal} />
      )}
    </div>
  );
};

export default PatientPendingAppointments;