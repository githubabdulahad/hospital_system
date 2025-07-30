"use client";
import { useState } from "react";
import CommonAddButton from "../../../components/compafterlogin/Common/CommonAddButton";
import CommonTable from "../../../components/compafterlogin/Common/CommonTable";
import Toast from "../../../components/compafterlogin/Common/Toast";
import StatCard from "../../../components/compafterlogin/Common/StatCard";
import AddEditPrescription from "../../../components/compafterlogin/Doctor/Add&EditPrescription";
import DeletePrescription from "../../../components/compafterlogin/Doctor/DeletePrescriptionModal";
import ViewPrescription from "../../../components/compafterlogin/Doctor/Viewprescription";
import { FaCalendarAlt, FaCheck, FaClipboard, FaClipboardList, FaEdit, FaEye, FaTrash, FaUser } from "react-icons/fa";
import GenericCard from "../../../components/compafterlogin/Common/GenericCard";
import { FaPenClip } from "react-icons/fa6";

const Prescriptions = () => {
  const [prescriptions, setPrescriptions] = useState([
    {
      id: 1,
      prescriptionId: "RX001",
      patientName: "John Doe",
      patientId: "P001",
      diagnosisCode: "K30",
      medications: [
        { name: "Omeprazole", dosage: "20mg", frequency: "Once daily", duration: "7 days" },
        { name: "Metoclopramide", dosage: "10mg", frequency: "Three times daily", duration: "5 days" }
      ],
      instructions: "Take with food. Avoid spicy foods.",
      prescribedDate: "2024-07-16",
      status: "Active",
      followUpDate: "2024-07-23",
    },
    {
      id: 2,
      prescriptionId: "RX002",
      patientName: "Jane Smith",
      patientId: "P002", 
      diagnosisCode: "J00",
      medications: [
        { name: "Paracetamol", dosage: "500mg", frequency: "Four times daily", duration: "3 days" },
        { name: "Dextromethorphan", dosage: "15mg", frequency: "Every 6 hours", duration: "5 days" }
      ],
      instructions: "Complete rest. Increase fluid intake.",
      prescribedDate: "2024-07-15",
      status: "Completed",
      followUpDate: "2024-07-20",
    },
    {
      id: 3,
      prescriptionId: "RX003",
      patientName: "Mike Johnson",
      patientId: "P003",
      diagnosisCode: "M25.561",
      medications: [
        { name: "Ibuprofen", dosage: "400mg", frequency: "Three times daily", duration: "10 days" },
        { name: "Topical Diclofenac", dosage: "1% gel", frequency: "Apply twice daily", duration: "14 days" }
      ],
      instructions: "Apply ice 15-20 minutes. Avoid heavy activities.",
      prescribedDate: "2024-07-14",
      status: "Active",
      followUpDate: "2024-07-28",
    },
    {
      id: 4,
      prescriptionId: "RX004",
      patientName: "Sarah Wilson",
      patientId: "P004",
      diagnosisCode: "E78.5",
      medications: [
        { name: "Atorvastatin", dosage: "20mg", frequency: "Once daily at bedtime", duration: "30 days" }
      ],
      instructions: "Follow low-fat diet. Regular exercise recommended.",
      prescribedDate: "2024-07-13",
      status: "Active",
      followUpDate: "2024-08-13",
    },
    {
      id: 5,
      prescriptionId: "RX005",
      patientName: "David Lee",
      patientId: "P005",
      diagnosisCode: "I10",
      medications: [
        { name: "Amlodipine", dosage: "5mg", frequency: "Once daily", duration: "30 days" },
        { name: "Hydrochlorothiazide", dosage: "25mg", frequency: "Once daily", duration: "30 days" }
      ],
      instructions: "Monitor blood pressure daily. Reduce salt intake.",
      prescribedDate: "2024-07-12",
      status: "Active",
      followUpDate: "2024-08-12",
    },
  ]);

  const [toast, setToast] = useState({ show: false, message: "", type: "success" });
  const [showPrescriptionModal, setShowPrescriptionModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedPrescription, setSelectedPrescription] = useState(null);
  const [editingPrescription, setEditingPrescription] = useState(null);
  const [filterStatus, setFilterStatus] = useState("All");
  
  // Form state for new/edit prescription
  const [prescriptionForm, setPrescriptionForm] = useState({
    patientName: "",
    patientId: "",
    diagnosisCode: "",
    medications: [{ name: "", dosage: "", frequency: "", duration: "" }],
    instructions: "",
    followUpDate: "",
    status: "Active"
  });

  // Handler functions
  const showToast = (message, type = "success") => {
    setToast({ show: true, message, type });
  };

  const hideToast = () => {
    setToast({ show: false, message: "", type: "success" });
  };

  const handleViewPrescription = (prescription) => {
    setSelectedPrescription(prescription);
    setShowPrescriptionModal(true);
  };

  const handleEditPrescription = (prescription) => {
    setEditingPrescription(prescription);
    setPrescriptionForm({
      patientName: prescription.patientName,
      patientId: prescription.patientId,
      diagnosisCode: prescription.diagnosisCode,
      medications: prescription.medications,
      instructions: prescription.instructions,
      followUpDate: prescription.followUpDate,
      status: prescription.status
    });
    setShowEditModal(true);
  };

  const handleDeletePrescription = (prescription) => {
    setSelectedPrescription(prescription);
    setShowDeleteModal(true);
  };

  const handleAddPrescription = () => {
    setPrescriptionForm({
      patientName: "",
      patientId: "",
      diagnosisCode: "",
      medications: [{ name: "", dosage: "", frequency: "", duration: "" }],
      instructions: "",
      followUpDate: "",
      status: "Active"
    });
    setShowEditModal(true);
    setEditingPrescription(null);
  };

  const resetForm = () => {
    setPrescriptionForm({
      patientName: "",
      patientId: "",
      diagnosisCode: "",
      medications: [{ name: "", dosage: "", frequency: "", duration: "" }],
      instructions: "",
      followUpDate: "",
      status: "Active"
    });
    setEditingPrescription(null);
  };

  const formatMedications = (medications) => {
    return medications.map(med => `${med.name} ${med.dosage}`).join(", ");
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

  const handleFormSubmit = () => {
    if (editingPrescription) {
      handleUpdatePrescription();
    } else {
      handleCreatePrescription();
    }
  };

  const addMedication = () => {
    setPrescriptionForm({
      ...prescriptionForm,
      medications: [...prescriptionForm.medications, { name: "", dosage: "", frequency: "", duration: "" }]
    });
  };

  const removeMedication = (index) => {
    const newMedications = prescriptionForm.medications.filter((_, i) => i !== index);
    setPrescriptionForm({
      ...prescriptionForm,
      medications: newMedications
    });
  };

  const updateMedication = (index, field, value) => {
    const newMedications = prescriptionForm.medications.map((med, i) => 
      i === index ? { ...med, [field]: value } : med
    );
    setPrescriptionForm({
      ...prescriptionForm,
      medications: newMedications
    });
  };

  // Statistics
  const totalPrescriptions = prescriptions.length;
  const activePrescriptions = prescriptions.filter(p => p.status === "Active").length;
  const completedPrescriptions = prescriptions.filter(p => p.status === "Completed").length;

  // Handlers for CRUD operations
  const handleCreatePrescription = () => {
    const newPrescription = {
      id: prescriptions.length + 1,
      prescriptionId: `RX00${prescriptions.length + 1}`,
      patientName: prescriptionForm.patientName,
      patientId: prescriptionForm.patientId,
      diagnosisCode: prescriptionForm.diagnosisCode,
      medications: prescriptionForm.medications,
      instructions: prescriptionForm.instructions,
      prescribedDate: new Date().toISOString().split("T")[0],
      status: prescriptionForm.status,
      followUpDate: prescriptionForm.followUpDate,
    };

    setPrescriptions([...prescriptions, newPrescription]);
    setShowPrescriptionModal(false);
    showToast(`Prescription ${newPrescription.prescriptionId} created`, "success");
  };

  const handleUpdatePrescription = () => {
    const updatedPrescriptions = prescriptions.map(prescription => 
      prescription.id === editingPrescription.id ? { ...prescription, ...prescriptionForm } : prescription
    );

    setPrescriptions(updatedPrescriptions);
    setShowEditModal(false);
    showToast(`Prescription ${editingPrescription.prescriptionId} updated`, "success");
  };

  const handleConfirmDelete = () => {
    const filteredPrescriptions = prescriptions.filter(prescription => prescription.id !== selectedPrescription.id);
    setPrescriptions(filteredPrescriptions);
    setShowDeleteModal(false);
    showToast(`Prescription ${selectedPrescription.prescriptionId} deleted`, "success");
  };

  const statData = [
    {
      icon: <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>,
      stat : totalPrescriptions,
      label: "Total Prescriptions"
    },
    {
      icon: <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
      stat: activePrescriptions,
      label: "Active Prescriptions"
    },
    {
      icon: <svg className="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>,
      stat: completedPrescriptions,
      label: "Completed Prescriptions"
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
            className="w-7 h-7 text-green-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
        </span>
        <h2 className="text-3xl font-semibold text-[#0B2443]">My Prescriptions</h2>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
        {statData.map((stat, index) => (
                  <StatCard icon={stat.icon} stat={stat.stat} label={stat.label} key={index} />
                ))}
      </div>

      <div className="flex gap-10  md:items-center md:justify-between md:mb-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Filter by Status</label>
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            <option value="All">All Status</option>
            <option value="Active">Active</option>
            <option value="Completed">Completed</option>
            <option value="Cancelled">Cancelled</option>
            <option value="Pending">Pending</option>
          </select>
        </div>
      <div className="mb-4">
        <CommonAddButton 
          label="Add New Prescription" 
          onClick={handleAddPrescription} 
        />
      </div>
      </div>


      <div className="hidden md:block">
        <CommonTable
        columns={[
          { label: "Prescription ID", key: "prescriptionId" },
          { label: "Patient", key: "patientName" },
          { 
            label: "Medications", 
            key: "medications", 
            render: (prescription) => (
              <div className="max-w-xs truncate" title={formatMedications(prescription.medications)}>
                {formatMedications(prescription.medications)}
              </div>
            )
          },
          { label: "Prescribed Date", key: "prescribedDate" },
          { label: "Follow-up Date", key: "followUpDate" },
          { 
            label: "Status", 
            key: "status", 
            render: (prescription) => getStatusBadge(prescription.status)
          },
        ]}
        data={prescriptions.filter(p => filterStatus === "All" || p.status === filterStatus)}
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
            onClick: (prescription) => handleViewPrescription(prescription),
            className: "bg-[#0B2443] hover:bg-blue-900 text-white px-3 py-1 rounded text-xs flex items-center transition-colors",
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
            onClick: (prescription) => handleEditPrescription(prescription),
            className: "bg-[#0B2443] hover:bg-blue-900 text-white px-3 py-1 rounded text-xs flex items-center transition-colors",
            title: "Edit Prescription"
          },
          {
            label: (
              <>
                <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </>
            ),
            onClick: (prescription) => handleDeletePrescription(prescription),
            className: "bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-xs flex items-center transition-colors",
            title: "Delete Prescription"
          },
        ]}
      />
      </div>

      <div className="block md:hidden">
              <h1 className="text-2xl font-bold text-center text-[#0b2443] mb-2">Prescriptions </h1>
              <div className="grid  grid-cols-2 gap-4">
                              {prescriptions.length === 0 ? (
                                <div className="text-center text-gray-500 py-8">
                                  <FaUser className="w-12 h-12 mx-auto text-gray-300 mb-2" />
                                  <p>No record found.</p>
                                </div>
                              ) : (
                                prescriptions.map((prescription) => (
                                  <GenericCard
                                    key={prescription.id}
                                    data={prescription}
                                    hospitalFields={[
                                   {
                                     key: "patientName",
                                     icon: <FaUser />,
                                   },
                                   {
                                     key: "prescriptionId",
                                     icon: <FaClipboard />,
                                   },
                                    {
                                      key: 'status',
                                      icon: <FaCheck />,
                                    },
                                 ]}
                                 personalFields={[
                                   { key: "prescribedDate", icon: <FaCalendarAlt /> },
                                   { key: "followUpDate", icon: <FaCalendarAlt /> },
                                ]}
                                    actions={[
                                      {
                                        label: "View",
                                        icon: <FaEye className="w-3 h-3" />,
                                        color: "text-[#0B2443] ",
                                        onClick: handleViewPrescription,
                                      },
                                      {
                                        label: "Edit",
                                        icon: <FaEdit className="w-3 h-3" />,
                                        color: "text-gray-800",
                                        onClick: handleEditPrescription,
                                      },
                                      {
                                        label: "Delete",
                                        icon: <FaTrash className="w-3 h-3" />,
                                        color: "text-red-600",
                                        onClick: handleDeletePrescription,
                                      }
                                    ]}
                                  />
                                ))
                              )}
                            </div>
            </div>

      {/* Prescription Detail Modal */}
      {showPrescriptionModal  && (
        <ViewPrescription setShowPrescriptionModal={setShowPrescriptionModal} getStatusBadge={getStatusBadge} selectedPrescription={selectedPrescription} />
      )}

      {/* Edit/Add Prescription Modal */}
      {showEditModal && (
        <AddEditPrescription setPrescriptionForm={setPrescriptionForm} prescriptionForm={prescriptionForm} resetForm={resetForm} handleFormSubmit={handleFormSubmit} addMedication={addMedication} updateMedication={updateMedication} removeMedication={removeMedication} setShowEditModal={setShowEditModal} editingPrescription={editingPrescription}/>
      )}

      {/* Delete Prescription Confirmation Modal */}
      {showDeleteModal &&  (
        <DeletePrescription selectedPrescription={selectedPrescription} setShowDeleteModal={setShowDeleteModal} handleConfirmDelete={handleConfirmDelete} />
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

export default Prescriptions;
