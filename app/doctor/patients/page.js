"use client";
import { useState } from "react";
import CommonAddButton from "../../../components/compafterlogin/Common/CommonAddButton";
import CommonTable from "../../../components/compafterlogin/Common/CommonTable";
import Toast from "../../../components/compafterlogin/Common/Toast";
import StatCard from "../../../components/compafterlogin/Common/StatCard";
import ShowPatientDetail from "../../../components/compafterlogin/Doctor/ShowPatientDetail";
import EditPatientModal from "../../../components/compafterlogin/Doctor/Edit&AddPatientModal";
import DeletePatientModal from "../../../components/compafterlogin/Doctor/DeletePatientModal";

const Patients = () => {
  const [patients, setPatients] = useState([
    {
      id: 1,
      patientId: "P001",
      name: "John Doe",
      age: 45,
      gender: "Male",
      phone: "+1-555-0123",
      email: "john.doe@email.com",
      bloodGroup: "O+",
      address: "123 Main St, City, State 12345",
      emergencyContact: "Jane Doe - +1-555-0124",
      lastVisit: "2024-07-16",
      nextAppointment: "2024-07-23",
      diagnosis: "Functional dyspepsia",
      status: "Active",
      admissionDate: "2024-07-10",
      room: "201",
    },
    {
      id: 2,
      patientId: "P002",
      name: "Jane Smith",
      age: 32,
      gender: "Female", 
      phone: "+1-555-0125",
      email: "jane.smith@email.com",
      bloodGroup: "A+",
      address: "456 Oak Ave, City, State 12345",
      emergencyContact: "Bob Smith - +1-555-0126",
      lastVisit: "2024-07-15",
      nextAppointment: "2024-07-20",
      diagnosis: "Acute nasopharyngitis",
      status: "Recovered",
      admissionDate: "2024-07-14",
      room: "203",
    },
    {
      id: 3,
      patientId: "P003",
      name: "Mike Johnson",
      age: 38,
      gender: "Male",
      phone: "+1-555-0127",
      email: "mike.johnson@email.com",
      bloodGroup: "B+",
      address: "789 Pine St, City, State 12345",
      emergencyContact: "Lisa Johnson - +1-555-0128",
      lastVisit: "2024-07-14",
      nextAppointment: "2024-07-28",
      diagnosis: "Pain in right knee",
      status: "Active",
      admissionDate: "2024-07-12",
      room: "205",
    },
    {
      id: 4,
      patientId: "P004",
      name: "Sarah Wilson",
      age: 55,
      gender: "Female",
      phone: "+1-555-0129",
      email: "sarah.wilson@email.com",
      bloodGroup: "AB+",
      address: "321 Elm St, City, State 12345",
      emergencyContact: "Tom Wilson - +1-555-0130",
      lastVisit: "2024-07-13",
      nextAppointment: "2024-08-13",
      diagnosis: "Hyperlipidemia",
      status: "Active",
      admissionDate: "2024-07-11",
      room: "207",
    },
    {
      id: 5,
      patientId: "P005",
      name: "David Lee",
      age: 62,
      gender: "Male",
      phone: "+1-555-0131",
      email: "david.lee@email.com",
      bloodGroup: "O-",
      address: "654 Maple Dr, City, State 12345",
      emergencyContact: "Mary Lee - +1-555-0132",
      lastVisit: "2024-07-12",
      nextAppointment: "2024-08-12",
      diagnosis: "Essential hypertension",
      status: "Active",
      admissionDate: "2024-07-10",
      room: "209",
    },
  ]);

  const [toast, setToast] = useState({ show: false, message: "", type: "success" });
  const [showPatientModal, setShowPatientModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [editingPatient, setEditingPatient] = useState(null);
  const [filterStatus, setFilterStatus] = useState("All");
  const [filterBloodGroup, setFilterBloodGroup] = useState("All");

  // Form state for new/edit patient
  const [patientForm, setPatientForm] = useState({
    name: "",
    age: "",
    gender: "Male",
    phone: "",
    email: "",
    bloodGroup: "A+",
    address: "",
    emergencyContact: "",
    diagnosis: "",
    status: "Active",
    room: ""
  });

  const filteredPatients = patients.filter((patient) => {
    const matchesStatus = filterStatus === "All" || patient.status === filterStatus;
    const matchesBloodGroup = filterBloodGroup === "All" || patient.bloodGroup === filterBloodGroup;
    return matchesStatus && matchesBloodGroup;
  });

  const showToast = (message, type = "success") => {
    setToast({ show: true, message, type });
  };

  const hideToast = () => {
    setToast({ show: false, message: "", type: "success" });
  };

  const handleViewPatient = (patient) => {
    setSelectedPatient(patient);
    setShowPatientModal(true);
  };

  const handleEditPatient = (patient) => {
    setEditingPatient(patient);
    setPatientForm({
      name: patient.name,
      age: patient.age,
      gender: patient.gender,
      phone: patient.phone,
      email: patient.email,
      bloodGroup: patient.bloodGroup,
      address: patient.address,
      emergencyContact: patient.emergencyContact,
      diagnosis: patient.diagnosis,
      status: patient.status,
      room: patient.room
    });
    setShowEditModal(true);
  };

  const handleDeletePatient = (patient) => {
    setSelectedPatient(patient);
    setShowDeleteModal(true);
  };

  const handleAddPatient = () => {
    setPatientForm({
      name: "",
      age: "",
      gender: "Male",
      phone: "",
      email: "",
      bloodGroup: "A+",
      address: "",
      emergencyContact: "",
      diagnosis: "",
      status: "Active",
      room: ""
    });
    setShowEditModal(true);
    setEditingPatient(null);
  };

  const handleCreatePatient = () => {
    const newPatient = {
      id: patients.length + 1,
      patientId: `P${String(patients.length + 1).padStart(3, '0')}`,
      name: patientForm.name,
      age: parseInt(patientForm.age),
      gender: patientForm.gender,
      phone: patientForm.phone,
      email: patientForm.email,
      bloodGroup: patientForm.bloodGroup,
      address: patientForm.address,
      emergencyContact: patientForm.emergencyContact,
      lastVisit: new Date().toISOString().split("T")[0],
      nextAppointment: "",
      diagnosis: patientForm.diagnosis,
      status: patientForm.status,
      admissionDate: new Date().toISOString().split("T")[0],
      room: patientForm.room,
    };

    setPatients([...patients, newPatient]);
    setShowEditModal(false);
    showToast(`Patient ${newPatient.name} added successfully`, "success");
    resetForm();
  };

  const handleUpdatePatient = () => {
    const updatedPatients = patients.map(patient => 
      patient.id === editingPatient.id 
        ? { 
            ...patient, 
            ...patientForm,
            age: parseInt(patientForm.age)
          } 
        : patient
    );

    setPatients(updatedPatients);
    setShowEditModal(false);
    showToast(`Patient ${editingPatient.name} updated successfully`, "success");
    resetForm();
  };

  const handleConfirmDelete = () => {
    const filteredPatients = patients.filter(patient => patient.id !== selectedPatient.id);
    setPatients(filteredPatients);
    setShowDeleteModal(false);
    showToast(`Patient ${selectedPatient.name} deleted successfully`, "success");
  };

  const resetForm = () => {
    setPatientForm({
      name: "",
      age: "",
      gender: "Male",
      phone: "",
      email: "",
      bloodGroup: "A+",
      address: "",
      emergencyContact: "",
      diagnosis: "",
      status: "Active",
      room: ""
    });
    setEditingPatient(null);
  };

  const handleFormSubmit = () => {
    if (editingPatient) {
      handleUpdatePatient();
    } else {
      handleCreatePatient();
    }
  };

  const getStatusBadge = (status) => {
    const statusStyles = {
      Active: "bg-green-100 text-green-800",
      Recovered: "bg-blue-100 text-blue-800",
      Critical: "bg-red-100 text-red-800",
      Discharged: "bg-gray-100 text-gray-800"
    };
    
    return (
      <span className={`px-2 py-1 text-xs font-medium rounded-full ${statusStyles[status] || 'bg-gray-100 text-gray-800'}`}>
        {status}
      </span>
    );
  };

  const getBloodGroupBadge = (bloodGroup) => {
    const bloodGroupStyles = {
      "A+": "bg-red-100 text-red-800",
      "A-": "bg-red-200 text-red-900",
      "B+": "bg-blue-100 text-blue-800",
      "B-": "bg-blue-200 text-blue-900",
      "AB+": "bg-purple-100 text-purple-800",
      "AB-": "bg-purple-200 text-purple-900",
      "O+": "bg-green-100 text-green-800",
      "O-": "bg-green-200 text-green-900",
    };
    
    return (
      <span className={`px-2 py-1 text-xs font-bold rounded-full ${bloodGroupStyles[bloodGroup] || 'bg-gray-100 text-gray-800'}`}>
        {bloodGroup}
      </span>
    );
  };

  // Statistics
  const totalPatients = patients.length;
  const activePatients = patients.filter(p => p.status === "Active").length;
  const recoveredPatients = patients.filter(p => p.status === "Recovered").length;
  const criticalPatients = patients.filter(p => p.status === "Critical").length;

  const statData = [
    {
      icon:<svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18m9-9H3" /></svg>,
      stat:totalPatients,
      label: "Total Patients"
    },
    {
      icon:<svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-green-500" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
      stat:activePatients,
      label: "Active Patients"
    },
    {
      icon:<svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
      stat:recoveredPatients, 
      label: "Recovered Patients"
    },
    {
      icon:<svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-red-500" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
      stat:criticalPatients,
      label: "Critical Patients"
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
            className="w-7 h-7 text-blue-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
            />
          </svg>
        </span>
        <h2 className="text-3xl font-semibold text-[#0B2443]">My Patients</h2>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        {statData.map((stat, index) => (
          <StatCard icon={stat.icon} stat={stat.stat} label={stat.label} key={index} />
        ))}
      </div>

      {/* Filters and Add Button */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
        <div className="flex flex-wrap gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Filter by Status</label>
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              <option value="All">All Status</option>
              <option value="Active">Active</option>
              <option value="Recovered">Recovered</option>
              <option value="Critical">Critical</option>
              <option value="Discharged">Discharged</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Filter by Blood Group</label>
            <select
              value={filterBloodGroup}
              onChange={(e) => setFilterBloodGroup(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              <option value="All">All Blood Groups</option>
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
        </div>

        <CommonAddButton 
          label="Add New Patient"
          onClick={handleAddPatient}
        />
      </div>

      <CommonTable
        columns={[
          { label: "Patient ID", key: "patientId" },
          { label: "Name", key: "name" },
          { label: "Age", key: "age" },
          { label: "Gender", key: "gender" },
          { 
            label: "Blood Group", 
            key: "bloodGroup", 
            render: (patient) => getBloodGroupBadge(patient.bloodGroup)
          },
          { label: "Room", key: "room" },
          { label: "Last Visit", key: "lastVisit" },
          { label: "Next Appointment", key: "nextAppointment" },
          { 
            label: "Status", 
            key: "status", 
            render: (patient) => getStatusBadge(patient.status)
          },
        ]}
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
            onClick: (patient) => handleViewPatient(patient),
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
            onClick: (patient) => handleEditPatient(patient),
            className: "bg-orange-500 hover:bg-orange-600 text-white px-3 py-1 rounded text-xs flex items-center transition-colors",
            title: "Edit Patient"
          },          
          {
            label: (
              <>
                <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </>
            ),
            onClick: (patient) => handleDeletePatient(patient),
            className: "bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-xs flex items-center transition-colors",
            title: "Delete Patient"
          },
        ]}
        data={filteredPatients}
      />

      {/* Patient Detail Modal */}
      {showPatientModal && (
        <ShowPatientDetail selectedPatient={selectedPatient} setShowPatientModal={setShowPatientModal} getBloodGroupBadge={getBloodGroupBadge} getStatusBadge={getStatusBadge}/>
      )}

      {/* Edit and Add Patient Modal */}
      {showEditModal && (
        <EditPatientModal editingPatient={editingPatient} setShowEditModal={setShowEditModal} patientForm={patientForm} setPatientForm={setPatientForm} handleFormSubmit={handleFormSubmit} />
      )}

      {/* Delete Patient Confirmation Modal */}
      {showDeleteModal && (
        <DeletePatientModal selectedPatient={selectedPatient} setShowDeleteModal={setShowDeleteModal} handleConfirmDelete={handleConfirmDelete} />
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

export default Patients;
