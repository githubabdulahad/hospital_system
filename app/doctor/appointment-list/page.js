"use client";
import { useState } from "react";
import CommonAddButton from "../../../components/compafterlogin/Common/CommonAddButton";
import CommonTable from "../../../components/compafterlogin/Common/CommonTable";
import Toast from "../../../components/compafterlogin/Common/Toast";
import StatCard from "../../../components/compafterlogin/Common/StatCard";
import ShowApptDetail from "../../../components/compafterlogin/Doctor/ShowApptDetail";
import AddEditApptModal from "../../../components/compafterlogin/Doctor/Add&EditApptModal";
import DeleteApptModal from "../../../components/compafterlogin/Doctor/DeleteApptModal";
import { FaCalendar, FaCheck, FaClock, FaEdit, FaEye, FaTrash, FaUser } from "react-icons/fa";
import GenericCard from "../../../components/compafterlogin/Common/GenericCard";
import { FaMapLocation } from "react-icons/fa6";

const AppointmentList = () => {
  const [appointments, setAppointments] = useState([
    {
      id: 1,
      appointmentId: "APT001",
      patientName: "John Doe",
      patientId: "P001",
      appointmentDate: "2024-07-16",
      appointmentTime: "09:00 AM",
      duration: "30 minutes",
      type: "Consultation",
      status: "Scheduled",
      reason: "Regular checkup",
      notes: "Patient reported stomach discomfort",
      room: "201",
      createdDate: "2024-07-10",
    },
    {
      id: 2,
      appointmentId: "APT002",
      patientName: "Jane Smith",
      patientId: "P002",
      appointmentDate: "2024-07-16",
      appointmentTime: "10:30 AM",
      duration: "15 minutes",
      type: "Follow-up",
      status: "Completed",
      reason: "Follow-up for cold symptoms",
      notes: "Patient feeling better, symptoms resolved",
      room: "203",
      createdDate: "2024-07-12",
    },
    {
      id: 3,
      appointmentId: "APT003",
      patientName: "Mike Johnson",
      patientId: "P003",
      appointmentDate: "2024-07-16",
      appointmentTime: "02:00 PM",
      duration: "45 minutes",
      type: "Consultation",
      status: "In Progress",
      reason: "Knee pain consultation",
      notes: "Patient experiencing chronic knee pain",
      room: "205",
      createdDate: "2024-07-11",
    },
    {
      id: 4,
      appointmentId: "APT004",
      patientName: "Sarah Wilson",
      patientId: "P004",
      appointmentDate: "2024-07-17",
      appointmentTime: "11:00 AM",
      duration: "30 minutes",
      type: "Consultation",
      status: "Scheduled",
      reason: "Lipid profile review",
      notes: "Review cholesterol levels and medication adjustment",
      room: "207",
      createdDate: "2024-07-13",
    },
    {
      id: 5,
      appointmentId: "APT005",
      patientName: "David Lee",
      patientId: "P005",
      appointmentDate: "2024-07-17",
      appointmentTime: "03:30 PM",
      duration: "30 minutes",
      type: "Follow-up",
      status: "Scheduled",
      reason: "Blood pressure monitoring",
      notes: "Regular follow-up for hypertension management",
      room: "209",
      createdDate: "2024-07-14",
    },
    {
      id: 6,
      appointmentId: "APT006",
      patientName: "Lisa Anderson",
      patientId: "P006",
      appointmentDate: "2024-07-15",
      appointmentTime: "04:00 PM",
      duration: "30 minutes",
      type: "Consultation",
      status: "Cancelled",
      reason: "General consultation",
      notes: "Patient cancelled due to emergency",
      room: "211",
      createdDate: "2024-07-10",
    },
  ]);

  const [toast, setToast] = useState({ show: false, message: "", type: "success" });
  const [showAppointmentModal, setShowAppointmentModal] = useState(false);
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [filterStatus, setFilterStatus] = useState("All");
  const [filterType, setFilterType] = useState("All");
  const [showAddModal, setShowAddModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [appointmentToDelete, setAppointmentToDelete] = useState(null);
  const [editingAppointment, setEditingAppointment] = useState(null);
  const [formData, setFormData] = useState({
    appointmentId: "",
    patientName: "",
    patientId: "",
    appointmentDate: "",
    appointmentTime: "",
    duration: "30 minutes",
    type: "Consultation",
    status: "Scheduled",
    reason: "",
    notes: "",
    room: "",
    createdDate: new Date().toISOString().split('T')[0]
  });

  const filteredAppointments = appointments.filter((appointment) => {
    const matchesStatus = filterStatus === "All" || appointment.status === filterStatus;
    const matchesType = filterType === "All" || appointment.type === filterType;
    return matchesStatus && matchesType;
  });

  const showToast = (message, type = "success") => {
    setToast({ show: true, message, type });
  };

  const hideToast = () => {
    setToast({ show: false, message: "", type: "success" });
  };

  const getStatusBadge = (status) => {
    const statusStyles = {
      Scheduled: "bg-blue-100 text-blue-800",
      "In Progress": "bg-yellow-100 text-yellow-800",
      Completed: "bg-green-100 text-green-800",
      Cancelled: "bg-red-100 text-red-800",
      "No Show": "bg-gray-100 text-gray-800",
    };
    
    return (
      <span className={`px-2 py-1 text-xs font-medium rounded-full ${statusStyles[status] || 'bg-gray-100 text-gray-800'}`}>
        {status}
      </span>
    );
  };

  const getTypeBadge = (type) => {
    const typeStyles = {
      Consultation: "bg-purple-100 text-purple-800",
      "Follow-up": "bg-green-100 text-green-800",
      Emergency: "bg-red-100 text-red-800",
      "Check-up": "bg-blue-100 text-blue-800",
    };
    
    return (
      <span className={`px-2 py-1 text-xs font-medium rounded ${typeStyles[type] || 'bg-gray-100 text-gray-800'}`}>
        {type}
      </span>
    );
  };

  const handleViewAppointment = (appointment) => {
    setSelectedAppointment(appointment);
    setShowAppointmentModal(true);
  };

  const handleStartAppointment = (appointment) => {
    const updatedAppointments = appointments.map(apt => 
      apt.id === appointment.id ? { ...apt, status: "In Progress" } : apt
    );
    setAppointments(updatedAppointments);
    showToast(`Starting appointment with ${appointment.patientName}`, "info");
  };

  const handleCompleteAppointment = (appointment) => {
    const updatedAppointments = appointments.map(apt => 
      apt.id === appointment.id ? { ...apt, status: "Completed" } : apt
    );
    setAppointments(updatedAppointments);
    showToast(`Appointment with ${appointment.patientName} marked as completed`, "success");
  };

  const handleAddAppointment = () => {
    setFormData({
      appointmentId: "",
      patientName: "",
      patientId: "",
      appointmentDate: "",
      appointmentTime: "",
      duration: "30 minutes",
      type: "Consultation",
      status: "Scheduled",
      reason: "",
      notes: "",
      room: "",
      createdDate: new Date().toISOString().split('T')[0]
    });
    setEditingAppointment(null);
    setShowAddModal(true);
  };

  const handleEditAppointment = (appointment) => {
    setFormData({
      appointmentId: appointment.appointmentId,
      patientName: appointment.patientName,
      patientId: appointment.patientId,
      appointmentDate: appointment.appointmentDate,
      appointmentTime: appointment.appointmentTime,
      duration: appointment.duration,
      type: appointment.type,
      status: appointment.status,
      reason: appointment.reason,
      notes: appointment.notes,
      room: appointment.room,
      createdDate: appointment.createdDate
    });
    setEditingAppointment(appointment);
    setShowAddModal(true);
  };

  const handleDeleteAppointment = (appointment) => {
    setAppointmentToDelete(appointment);
    setShowDeleteModal(true);
  };

  const confirmDeleteAppointment = () => {
    if (appointmentToDelete) {
      setAppointments(appointments.filter(apt => apt.id !== appointmentToDelete.id));
      showToast(`Appointment ${appointmentToDelete.appointmentId} deleted successfully`, "success");
      setShowDeleteModal(false);
      setAppointmentToDelete(null);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.patientName || !formData.appointmentDate || !formData.appointmentTime) {
      showToast("Please fill in all required fields", "error");
      return;
    }

    if (editingAppointment) {
      // Update existing appointment
      const updatedAppointments = appointments.map(apt => 
        apt.id === editingAppointment.id ? { ...formData, id: editingAppointment.id } : apt
      );
      setAppointments(updatedAppointments);
      showToast("Appointment updated successfully", "success");
    } else {
      // Add new appointment
      const newAppointment = {
        ...formData,
        id: appointments.length + 1,
        appointmentId: formData.appointmentId || `APT${String(appointments.length + 1).padStart(3, '0')}`
      };
      setAppointments([...appointments, newAppointment]);
      showToast("Appointment added successfully", "success");
    }
    
    setShowAddModal(false);
    setEditingAppointment(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Statistics
  const totalAppointments = appointments.length;
  const scheduledAppointments = appointments.filter(a => a.status === "Scheduled").length;
  const completedAppointments = appointments.filter(a => a.status === "Completed").length;
  const inProgressAppointments = appointments.filter(a => a.status === "In Progress").length;

  // Today's appointments
  const today = new Date().toISOString().split('T')[0];
  const todaysAppointments = appointments.filter(a => a.appointmentDate === today);

  const statData = [
    {
      icon: <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>,
      stat: totalAppointments,
      label: "Total Appointments"
    },
    {
      icon: <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>,
      stat: scheduledAppointments,
      label: "Scheduled"
    },
    {
      icon: <svg className="w-5 h-5 text-yellow-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>,
      stat: completedAppointments,
      label: "Completed"
    },
    {
      icon: <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>,
      stat: inProgressAppointments,
      label: "In Progress"
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
            className="w-7 h-7 text-purple-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
            />
          </svg>
        </span>
        <h2 className="text-3xl font-semibold text-[#0B2443]">Appointment List</h2>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">      
{statData.map((stat, index) => (
          <StatCard icon={stat.icon} stat={stat.stat} label={stat.label} key={index} />
        ))}
      </div>

      {/* Today's Schedule */}
      <div className="hidden md:block bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-lg p-4 mb-6">
        <h3 className="text-lg font-semibold text-gray-700 mb-3">Today's Schedule ({todaysAppointments.length} appointments)</h3>
        <div className="space-y-2">
          {todaysAppointments.length > 0 ? (
            todaysAppointments.map((appointment) => (
              <div key={appointment.id} className="flex items-center justify-between bg-white rounded-lg p-3 shadow-sm">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-sm font-semibold text-blue-600">{appointment.appointmentTime}</span>
                  </div>
                  <div>
                    <p className="font-medium">{appointment.patientName} - {appointment.type}</p>
                    <p className="text-sm text-gray-600">Room {appointment.room}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  {getStatusBadge(appointment.status)}
                  {appointment.status === "Scheduled" && (
                    <button
                      onClick={() => handleStartAppointment(appointment)}
                      className="px-3 py-1 bg-green-500 hover:bg-green-600 text-white text-xs rounded transition-colors"
                    >
                      Start
                    </button>
                  )}
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-center py-4">No appointments scheduled for today</p>
          )}
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap justify-between items-end gap-4 mb-4">
  <div className="flex gap-4 flex-wrap">
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
      <select
        value={filterStatus}
        onChange={(e) => setFilterStatus(e.target.value)}
        className="px-2 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
      >
        <option value="All">All Status</option>
        <option value="Scheduled">Scheduled</option>
        <option value="In Progress">In Progress</option>
        <option value="Completed">Completed</option>
        <option value="Cancelled">Cancelled</option>
        <option value="No Show">No Show</option>
      </select>
    </div>

    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">Type</label>
      <select
        value={filterType}
        onChange={(e) => setFilterType(e.target.value)}
        className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
      >
        <option value="All">All Types</option>
        <option value="Consultation">Consultation</option>
        <option value="Follow-up">Follow-up</option>
        <option value="Emergency">Emergency</option>
        <option value="Check-up">Check-up</option>
      </select>
    </div>
  </div>

  <div>
    <CommonAddButton 
      label="New Appointment" 
      onClick={handleAddAppointment} 
    />
  </div>
</div>


      <div className="hidden md:block">
        <CommonTable
        columns={[
          { label: "Appointment ID", key: "appointmentId" },
          { label: "Patient", key: "patientName" },
          { label: "Date", key: "appointmentDate" },
          { label: "Time", key: "appointmentTime" },
          { label: "Duration", key: "duration" },
          { 
            label: "Type", 
            key: "type", 
            render: (appointment) => getTypeBadge(appointment.type)
          },
          { label: "Reason", key: "reason" },
          { 
            label: "Status", 
            key: "status", 
            render: (appointment) => getStatusBadge(appointment.status)
          },
        ]}
        data={filteredAppointments}
        actions={[
          {
            label: (
              <>
                <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </>
            ),
            onClick: (appointment) => handleViewAppointment(appointment),
            className: "bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-xs flex items-center transition-colors",
            title: "View Details"
          },
          {
            label: (
              <>
                <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </>
            ),
            onClick: (appointment) => handleEditAppointment(appointment),
            className: "bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded text-xs flex items-center transition-colors",
            title: "Edit"
          },
          {
            label: (
              <>
                <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </>
            ),
            onClick: (appointment) => handleCompleteAppointment(appointment),
            className: "bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded text-xs flex items-center transition-colors",
            title: "Complete"
          },
          {
            label: (
              <>
                <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </>
            ),
            onClick: (appointment) => handleDeleteAppointment(appointment),
            className: "bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-xs flex items-center transition-colors",
            title: "Delete"
          },
        ]}
      />
      </div>

      <div className="block md:hidden">
                    <h1 className="text-2xl font-bold text-center text-[#0b2443] mb-2">Appointment List </h1>
                    <div className="grid  grid-cols-2 gap-4">
                                    {filteredAppointments.length === 0 ? (
                                      <div className="text-center text-gray-500 py-8">
                                        <FaUser className="w-12 h-12 mx-auto text-gray-300 mb-2" />
                                        <p>No record found.</p>
                                      </div>
                                    ) : (
                                      filteredAppointments.map((appointment) => (
                                        <GenericCard
                                          key={appointment.id}
                                          data={appointment}
                                          hospitalFields={[
                                         {
                                           key: "patientName",
                                           icon: <FaUser />,
                                         },
                                         {
                                           key: "appointmentDate",
                                           icon: <FaCalendar />,
                                         },
                                          {
                                            key: 'appointmentTime',
                                            icon: <FaClock />,
                                          },
                                       ]}
                                       personalFields={[
                                         { key: "status", icon: <FaCheck /> },
                                         { key: "room", icon: <FaMapLocation /> },
                                      ]}
                                          actions={[
                                            {
                                              label: "View",
                                              icon: <FaEye className="w-3 h-3" />,
                                              color: "text-blue-600",
                                              onClick: handleViewAppointment,
                                            },
                                            {
                                              label: "Edit",
                                              icon: <FaEdit className="w-3 h-3" />,
                                              color: "text-gray-800",
                                              onClick: handleEditAppointment,
                                            },
                                            {
                                              label: "Delete",
                                              icon: <FaTrash className="w-3 h-3" />,
                                              color: "text-red-600",
                                              onClick: handleDeleteAppointment,
                                            }
                                          ]}
                                        />
                                      ))
                                    )}
                                  </div>
                  </div>

      {/* Appointment Detail Modal */}
      {showAppointmentModal && selectedAppointment && (
        <ShowApptDetail getStatusBadge={getStatusBadge} getTypeBadge={getTypeBadge} setShowAppointmentModal={setShowAppointmentModal} selectedAppointment={selectedAppointment} />
      )}

      {/* Add/Edit Appointment Modal */}
      {showAddModal && (
        <AddEditApptModal editingAppointment={editingAppointment} handleFormSubmit={handleFormSubmit} handleInputChange={handleInputChange} setShowAddModal={setShowAddModal} formData={formData} />
      )}

      {/* Delete Confirmation Modal */}
      {showDeleteModal  && (
        <DeleteApptModal setShowDeleteModal={setShowDeleteModal} confirmDeleteAppointment={confirmDeleteAppointment} appointmentToDelete={appointmentToDelete} />
      )}

      <Toast
        message={toast.message}
        isVisible={toast.show}
        type={toast.type}
        onClose={hideToast}
      />
    </div>
  );
};

export default AppointmentList;
