"use client";
import { useState } from "react";
import CommonTable from "../../../components/compafterlogin/Common/CommonTable";
import CommonAddButton from "../../../components/compafterlogin/Common/CommonAddButton";
import Toast from "../../../components/compafterlogin/Common/Toast";
import StatCard from "../../../components/compafterlogin/Common/StatCard";
import AddEditRequestModal from "../../../components/compafterlogin/Doctor/Add&EditRequestModal";
import DeleteRequestModal from "../../../components/compafterlogin/Doctor/DeleteRequestModal";


const RequestedAppointments = () => {
  const [requestedAppointments, setRequestedAppointments] = useState([
    {
      id: 1,
      requestId: "REQ001",
      patientName: "Emma Wilson",
      patientId: "P007",
      preferredDate: "2024-07-20",
      preferredTime: "10:00 AM",
      alternativeDate: "2024-07-21",
      alternativeTime: "02:00 PM",
      reason: "Persistent headaches",
      urgency: "Medium",
      status: "Pending",
      requestedDate: "2024-07-16",
      patientPhone: "+1-555-0140",
      patientEmail: "emma.wilson@email.com",
      notes: "Patient experiencing headaches for the past week",
      type: "Consultation",
    },
    {
      id: 2,
      requestId: "REQ002",
      patientName: "Robert Brown",
      patientId: "P008",
      preferredDate: "2024-07-19",
      preferredTime: "11:30 AM",
      alternativeDate: "2024-07-22",
      alternativeTime: "03:00 PM",
      reason: "Chest pain",
      urgency: "High",
      status: "Pending",
      requestedDate: "2024-07-16",
      patientPhone: "+1-555-0141",
      patientEmail: "robert.brown@email.com",
      notes: "Patient reports chest discomfort after exercise",
      type: "Emergency",
    },
    {
      id: 3,
      requestId: "REQ003",
      patientName: "Alice Johnson",
      patientId: "P009",
      preferredDate: "2024-07-18",
      preferredTime: "09:00 AM",
      alternativeDate: "2024-07-19",
      alternativeTime: "01:00 PM",
      reason: "Skin rash",
      urgency: "Low",
      status: "Approved",
      requestedDate: "2024-07-15",
      patientPhone: "+1-555-0142",
      patientEmail: "alice.johnson@email.com",
      notes: "Patient has developed a rash on arms",
      type: "Consultation",
    },
    {
      id: 4,
      requestId: "REQ004",
      patientName: "Mark Davis",
      patientId: "P010",
      preferredDate: "2024-07-17",
      preferredTime: "02:30 PM",
      alternativeDate: "2024-07-18",
      alternativeTime: "04:00 PM",
      reason: "Annual checkup",
      urgency: "Low",
      status: "Rejected",
      requestedDate: "2024-07-14",
      patientPhone: "+1-555-0143",
      patientEmail: "mark.davis@email.com",
      notes: "Routine annual health checkup",
      type: "Check-up",
    },
    {
      id: 5,
      requestId: "REQ005",
      patientName: "Jennifer Lee",
      patientId: "P011",
      preferredDate: "2024-07-21",
      preferredTime: "04:30 PM",
      alternativeDate: "2024-07-22",
      alternativeTime: "10:00 AM",
      reason: "Follow-up diabetes",
      urgency: "Medium",
      status: "Pending",
      requestedDate: "2024-07-16",
      patientPhone: "+1-555-0144",
      patientEmail: "jennifer.lee@email.com",
      notes: "Regular diabetes monitoring appointment",
      type: "Follow-up",
    },
  ]);

  const [toast, setToast] = useState({ show: false, message: "", type: "success" });
  const [filterStatus, setFilterStatus] = useState("All");
  const [filterUrgency, setFilterUrgency] = useState("All");
  const [showAddModal, setShowAddModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [requestToDelete, setRequestToDelete] = useState(null);
  const [editingRequest, setEditingRequest] = useState(null);
  const [formData, setFormData] = useState({
    requestId: "",
    patientName: "",
    patientId: "",
    preferredDate: "",
    preferredTime: "",
    alternativeDate: "",
    alternativeTime: "",
    reason: "",
    urgency: "Medium",
    status: "Pending",
    requestedDate: new Date().toISOString().split('T')[0],
    patientPhone: "",
    patientEmail: "",
    notes: "",
    type: "Consultation"
  });

  const filteredRequests = requestedAppointments.filter((request) => {
    const matchesStatus = filterStatus === "All" || request.status === filterStatus;
    const matchesUrgency = filterUrgency === "All" || request.urgency === filterUrgency;
    return matchesStatus && matchesUrgency;
  });

  const showToast = (message, type = "success") => {
    setToast({ show: true, message, type });
  };

  const hideToast = () => {
    setToast({ show: false, message: "", type: "success" });
  };

  const getStatusBadge = (status) => {
    const statusStyles = {
      Pending: "bg-yellow-100 text-yellow-800",
      Approved: "bg-green-100 text-green-800",
      Rejected: "bg-red-100 text-red-800",
      Scheduled: "bg-blue-100 text-blue-800",
    };
    
    return (
      <span className={`px-2 py-1 text-xs font-medium rounded-full ${statusStyles[status] || 'bg-gray-100 text-gray-800'}`}>
        {status}
      </span>
    );
  };

  const getUrgencyBadge = (urgency) => {
    const urgencyStyles = {
      Low: "bg-green-100 text-green-800",
      Medium: "bg-yellow-100 text-yellow-800",
      High: "bg-red-100 text-red-800",
      Critical: "bg-red-200 text-red-900",
    };
    
    return (
      <span className={`px-2 py-1 text-xs font-medium rounded ${urgencyStyles[urgency] || 'bg-gray-100 text-gray-800'}`}>
        {urgency}
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

  const handleApproveRequest = (request) => {
    const updatedRequests = requestedAppointments.map(req => 
      req.id === request.id ? { ...req, status: "Approved" } : req
    );
    setRequestedAppointments(updatedRequests);
    showToast(`Appointment request for ${request.patientName} approved`, "success");
  };

  

  const handleAddRequest = () => {
    setFormData({
      requestId: "",
      patientName: "",
      patientId: "",
      preferredDate: "",
      preferredTime: "",
      alternativeDate: "",
      alternativeTime: "",
      reason: "",
      urgency: "Medium",
      status: "Pending",
      requestedDate: new Date().toISOString().split('T')[0],
      patientPhone: "",
      patientEmail: "",
      notes: "",
      type: "Consultation"
    });
    setEditingRequest(null);
    setShowAddModal(true);
  };

  const handleEditRequest = (request) => {
    setFormData({
      requestId: request.requestId,
      patientName: request.patientName,
      patientId: request.patientId,
      preferredDate: request.preferredDate,
      preferredTime: request.preferredTime,
      alternativeDate: request.alternativeDate,
      alternativeTime: request.alternativeTime,
      reason: request.reason,
      urgency: request.urgency,
      status: request.status,
      requestedDate: request.requestedDate,
      patientPhone: request.patientPhone,
      patientEmail: request.patientEmail,
      notes: request.notes,
      type: request.type
    });
    setEditingRequest(request);
    setShowAddModal(true);
  };

  const handleDeleteRequest = (request) => {
    setRequestToDelete(request);
    setShowDeleteModal(true);
  };

  const confirmDeleteRequest = () => {
    if (requestToDelete) {
      setRequestedAppointments(requestedAppointments.filter(req => req.id !== requestToDelete.id));
      showToast(`Request ${requestToDelete.requestId} deleted successfully`, "success");
      setShowDeleteModal(false);
      setRequestToDelete(null);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.patientName || !formData.preferredDate || !formData.preferredTime) {
      showToast("Please fill in all required fields", "error");
      return;
    }

    if (editingRequest) {
      // Update existing request
      const updatedRequests = requestedAppointments.map(req => 
        req.id === editingRequest.id ? { ...formData, id: editingRequest.id } : req
      );
      setRequestedAppointments(updatedRequests);
      showToast("Request updated successfully", "success");
    } else {
      // Add new request
      const newRequest = {
        ...formData,
        id: requestedAppointments.length + 1,
        requestId: formData.requestId || `REQ${String(requestedAppointments.length + 1).padStart(3, '0')}`
      };
      setRequestedAppointments([...requestedAppointments, newRequest]);
      showToast("Request added successfully", "success");
    }
    
    setShowAddModal(false);
    setEditingRequest(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Statistics
  const totalRequests = requestedAppointments.length;
  const pendingRequests = requestedAppointments.filter(r => r.status === "Pending").length;
  const approvedRequests = requestedAppointments.filter(r => r.status === "Approved").length;
  const highUrgencyRequests = requestedAppointments.filter(r => r.urgency === "High" || r.urgency === "Critical").length;

   const statData = [
    {
      icon: (
        <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      stat: totalRequests,
      label: "Total Requests"
    },
    {
      icon: (
        <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      stat: pendingRequests,
      label: "Pending Requests"
    },
    {
      icon: (
        <svg className="w-5 h-5 text-[#198172]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      stat: approvedRequests,
      label: "Approved Requests"
    },
    {
      icon: (
        <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      ),
      stat: highUrgencyRequests,
      label: "High Priority"
    }
  ];

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
            className="w-7 h-7 text-blue-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
        </span>
        <h2 className="text-3xl font-semibold text-[#0B2443]">Requested Appointments</h2>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        {statData.map((stat, index) => (
          <StatCard
            key={index}
            icon={stat.icon}
            stat={stat.stat}
            label={stat.label}
          />
        ))}
      </div>

      {/* Filters */}
      <div className="flex flex-wrap justify-between items-end gap-4 mb-4">
        <div className="flex gap-4 flex-wrap">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            <option value="All">All Status</option>
            <option value="Pending">Pending</option>
            <option value="Approved">Approved</option>
            <option value="Rejected">Rejected</option>
            <option value="Scheduled">Scheduled</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Urgency</label>
          <select
            value={filterUrgency}
            onChange={(e) => setFilterUrgency(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            <option value="All">All Urgency</option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
            <option value="Critical">Critical</option>
          </select>
        </div>
        </div>

        <div className="flex items-end">
          <CommonAddButton 
            label="New Request" 
            onClick={handleAddRequest} 
          />
        </div>
      </div>

      <CommonTable
        columns={[
          { label: "Request ID", key: "requestId" },
          { label: "Patient", key: "patientName" },
          { label: "Preferred Date", key: "preferredDate" },
          { label: "Preferred Time", key: "preferredTime" },
          { 
            label: "Type", 
            key: "type", 
            render: (request) => getTypeBadge(request.type)
          },
          { label: "Reason", key: "reason" },
          { 
            label: "Urgency", 
            key: "urgency", 
            render: (request) => getUrgencyBadge(request.urgency)
          },
          { label: "Requested Date", key: "requestedDate" },
          { 
            label: "Status", 
            key: "status", 
            render: (request) => getStatusBadge(request.status)
          },
        ]}
        data={filteredRequests}
        actions={[
          
          {
            label: (
              <>
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </>
            ),
            onClick: (request) => handleEditRequest(request),
            className: "bg-[#0B2443] hover:bg-blue-900 text-white px-3 py-1 rounded text-xs flex items-center transition-colors",
            title: "Edit Request"
          },
          {
            label: (
              <>
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </>
            ),
            onClick: (request) => handleApproveRequest(request),
            className: "bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded text-xs flex items-center transition-colors",
            title: "Approve Request"
          },
          {
            label: (
              <>
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </>
            ),
            onClick: (request) => handleDeleteRequest(request),
            className: "bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-xs flex items-center transition-colors",
            title: "Delete"
          },
        ]}
      />

      {/* Add/Edit Request Modal */}
      {showAddModal && (
        <AddEditRequestModal editingRequest={editingRequest} setShowAddModal={setShowAddModal} formData={formData}  handleFormSubmit={handleFormSubmit} handleInputChange={handleInputChange} />
      )}

      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <DeleteRequestModal setShowDeleteModal={setShowDeleteModal} confirmDeleteRequest={confirmDeleteRequest} requestToDelete={requestToDelete} />
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

export default RequestedAppointments;
