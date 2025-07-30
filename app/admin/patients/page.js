"use client";
import React, { useContext, useState } from "react";
import { SearchContext } from "../../../components/Context/SearchContext";
import AddPatientModal from "../../../components/compafterlogin/Admin/AddPatientModal";
import EditPatientModal from "../../../components/compafterlogin/Admin/EditPatientModal";
import DeletePatientModal from "../../../components/compafterlogin/Admin/DeletePatientModal";
import Toast from "../../../components/compafterlogin/Common/Toast";
import GenericCard from "../../../components/compafterlogin/Common/GenericCard";
import {
  FaUser,
  FaPlus,
  FaUsers,
  FaEdit,
  FaTrash,
  FaTint,
  FaVenusMars,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaUserCircle,
  FaBuilding,
  FaCalendar,
} from "react-icons/fa";
import StatCard from "../../../components/compafterlogin/Common/StatCard";

const AdmPatients = () => {
  const { search } = useContext(SearchContext);
  const [patients, setPatients] = useState([
    {
      id: 1,
      name: "Alice Smith",
      email: "alice@example.com",
      phone: "+123-45-6789012",
      address: "123 Main St, City",
      gender: "Female",
      dateOfBirth: "1990-05-15",
      emergencyContact: "John Smith",
      emergencyPhone: "+123-45-6789013",
      bloodType: "A+",
      allergies: "Penicillin",
      medicalHistory: "Hypertension, managed with medication",
      insurance: "Blue Cross",
      insuranceNumber: "BC123456789",
      occupation: "Teacher",
      maritalStatus: "Married",
    },
    {
      id: 2,
      name: "Bob Johnson",
      email: "bob@example.com",
      phone: "+321-54-9876543",
      address: "456 Elm St, Town",
      gender: "Male",
      dateOfBirth: "1985-08-22",
      emergencyContact: "Mary Johnson",
      emergencyPhone: "+321-54-9876544",
      bloodType: "O-",
      allergies: "None",
      medicalHistory: "No significant medical history",
      insurance: "Aetna",
      insuranceNumber: "AE987654321",
      occupation: "Engineer",
      maritalStatus: "Married",
    },
    {
      id: 3,
      name: "Jane Doe",
      email: "jane@gmail.com",
      phone: "+111-22-3334444",
      address: "789 Oak St, Village",
      gender: "Female",
      dateOfBirth: "1992-12-03",
      emergencyContact: "Michael Doe",
      emergencyPhone: "+111-22-3334445",
      bloodType: "B+",
      allergies: "Shellfish",
      medicalHistory: "Asthma, uses inhaler",
      insurance: "Cigna",
      insuranceNumber: "CG456789123",
      occupation: "Nurse",
      maritalStatus: "Single",
    },
  ]);

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [toast, setToast] = useState({
    show: false,
    message: "",
    type: "success",
  });

  const filteredPatients = patients.filter(
    (patient) =>
      patient.name.toLowerCase().includes(search.toLowerCase()) ||
      patient.email.toLowerCase().includes(search.toLowerCase()) ||
      patient.phone.toLowerCase().includes(search.toLowerCase()) ||
      patient.address.toLowerCase().includes(search.toLowerCase()) ||
      patient.gender.toLowerCase().includes(search.toLowerCase())
  );

  const showToast = (message, type = "success") => {
    setToast({ show: true, message, type });
  };

  const hideToast = () => {
    setToast({ show: false, message: "", type: "success" });
  };

  const handleAddPatient = (patientData) => {
    const newPatient = {
      id: Date.now(),
      ...patientData,
    };
    setPatients([...patients, newPatient]);
    setIsAddModalOpen(false);
    showToast("Patient added successfully!");
  };

  const handleEditPatient = (patientData) => {
    setPatients(
      patients.map((patient) =>
        patient.id === selectedPatient.id
          ? { ...patient, ...patientData }
          : patient
      )
    );
    setIsEditModalOpen(false);
    setSelectedPatient(null);
    showToast("Patient updated successfully!");
  };

  const handleDeletePatient = (patient) => {
    setPatients(patients.filter((p) => p.id !== patient.id));
    setIsDeleteModalOpen(false);
    setSelectedPatient(null);
    showToast("Patient deleted successfully!", "info");
  };

  const openEditModal = (patient) => {
    setSelectedPatient(patient);
    setIsEditModalOpen(true);
  };

  const openDeleteModal = (patient) => {
    setSelectedPatient(patient);
    setIsDeleteModalOpen(true);
  };

  const statData = [
    {
      icon: <FaUsers className="w-5 h-5 text-blue-600" />,
      stat: patients.length,
      label: "Total Patients",
    },
    {
      icon: <FaUsers className="w-5 h-5 text-green-600" />,
      stat: patients.filter((p) => p.gender === "Male").length,
      label: "Male Patients",
    },
    {
      icon: <FaUsers className="w-5 h-5 text-pink-600" />,
      stat: patients.filter((p) => p.gender === "Female").length,
      label: "Female Patients",
    },
    {
      icon: <FaUsers className="w-5 h-5 text-purple-600" />,
      stat: "100%",
      label: "Active Status",
    },
  ];

  return (
    <div
      className="p-6"
      style={{
        fontFamily:
          "'Gill Sans MT', 'Gill Sans', 'GillSans', 'Arial', 'sans-serif'",
      }}
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6">
        <div className="flex md:items-center mb-2">
          <FaUsers className="w-7 h-7 text-[#0B2443] mr-3 md:mt-0 mt-3" />
          <div>
            <h1 className="text-2xl font-bold text-gray-800">
              Patients Management
            </h1>
            <p className="text-gray-600 mt-1">
              Manage hospital patients and their records
            </p>
          </div>
        </div>
        <button
          onClick={() => setIsAddModalOpen(true)}
          className="bg-[#0B2443] hover:bg-blue-900 text-white px-6 py-3 rounded-lg font-medium flex items-center w-1/2 md:w-auto gap-2 transition-colors shadow-lg"
        >
          <FaPlus className="w-4 h-4" />
          Add Patient
        </button>
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

      {/* Table Section */}
      <div className="hidden md:block bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="p-6">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Patient
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Contact
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Gender
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Blood Type
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Insurance
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredPatients.length === 0 ? (
                  <tr>
                    <td
                      colSpan={6}
                      className="px-6 py-8 text-center text-gray-500"
                    >
                      <FaUsers className="w-12 h-12 mx-auto text-gray-300 mb-2" />
                      <p>No patients found.</p>
                    </td>
                  </tr>
                ) : (
                  filteredPatients.map((patient) => (
                    <tr key={patient.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                            <FaUserCircle className="w-6 h-6 text-[#0B2443]" />
                          </div>
                          <div>
                            <div className="text-sm font-medium text-gray-900">
                              {patient.name}
                            </div>
                            <div className="text-sm text-gray-500">
                              {patient.occupation}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900 flex items-center mb-1">
                          <FaEnvelope className="w-3 h-3 mr-2 text-gray-400" />
                          {patient.email}
                        </div>
                        <div className="text-sm text-gray-500 flex items-center">
                          <FaPhone className="w-3 h-3 mr-2 text-gray-400" />
                          {patient.phone}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`px-2 py-1 text-xs font-medium rounded-full ${
                            patient.gender === "Male"
                              ? "bg-blue-100 text-blue-800"
                              : patient.gender === "Female"
                              ? "bg-pink-100 text-pink-800"
                              : "bg-gray-100 text-gray-800"
                          }`}
                        >
                          {patient.gender}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {patient.bloodType}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {patient.insurance}
                        </div>
                        <div className="text-sm text-gray-500">
                          {patient.insuranceNumber}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <div className="flex space-x-2">
                          <button
                            onClick={() => openEditModal(patient)}
                            className="text-[#0B2443] hover:text-blue-900 bg-green-50 hover:bg-green-100 px-2 py-1 rounded transition-colors"
                            title="Edit Patient"
                          >
                            <FaEdit className="w-3 h-3" />
                          </button>
                          <button
                            onClick={() => openDeleteModal(patient)}
                            className="text-red-600 hover:text-red-900 bg-red-50 hover:bg-red-100 px-2 py-1 rounded transition-colors"
                            title="Delete Patient"
                          >
                            <FaTrash className="w-3 h-3" />
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
        <h1 className="text-2xl font-bold text-center text-[#0b2443] mb-2">
          Patient List
        </h1>
        <div className="grid  grid-cols-2 gap-4">
          {filteredPatients.length === 0 ? (
            <div className="text-center text-gray-500 py-8">
              <FaUser className="w-12 h-12 mx-auto text-gray-300 mb-2" />
              <p>No patients found.</p>
            </div>
          ) : (
            filteredPatients.map((patient) => (
              <GenericCard
                key={patient.id}
                data={patient}
                hospitalFields={[
                  { key: "bloodType", icon: <FaTint /> },
                  { key: "emergencyContact", label: "Emerg. Contact", icon: <FaPhone /> },
                ]}
                personalFields={[
                  { key: "email", label: "Email", icon: <FaEnvelope /> },
                  { key: "phone", label: "Phone", icon: <FaPhone /> },
                  { key: "gender", label: "Gender", icon: <FaUser /> },
                ]}
                actions={[
                  { icon: <FaEdit />, label: "Edit", onClick: () => openEditModal(patient),color: "text-[#0b2443]" },
                  { icon: <FaTrash />, label: "Delete", onClick: () => openDeleteModal(patient), color: "text-red-500" },
                ]}
              />
            ))
          )}
        </div>
      </div>

      {/* Modals */}
      <AddPatientModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAdd={handleAddPatient}
      />

      <EditPatientModal
        isOpen={isEditModalOpen}
        onClose={() => {
          setIsEditModalOpen(false);
          setSelectedPatient(null);
        }}
        onEdit={handleEditPatient}
        patient={selectedPatient}
      />

      <DeletePatientModal
        isOpen={isDeleteModalOpen}
        onClose={() => {
          setIsDeleteModalOpen(false);
          setSelectedPatient(null);
        }}
        onConfirm={handleDeletePatient}
        patient={selectedPatient}
      />

      <Toast
        message={toast.message}
        isVisible={toast.show}
        type={toast.type}
        onClose={hideToast}
      />
    </div>
  );
};

export default AdmPatients;
