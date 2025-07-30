"use client";
import React, { useContext, useState } from "react";
import { SearchContext } from "../../../components/Context/SearchContext";
import AddDoctorModal from "../../../components/compafterlogin/Admin/AddDoctorModal";
import EditDoctorModal from "../../../components/compafterlogin/Admin/EditDoctorModal";
import DeleteDoctorModal from "../../../components/compafterlogin/Admin/DeleteDoctorModal";
import Toast from "../../../components/compafterlogin/Common/Toast";
import {
  FaUserMd,
  FaPlus,
  FaEdit,
  FaTrash,
  FaEnvelope,
  FaPhone,
  FaBuilding,
  FaUser,
  FaCalendar,
  FaStethoscope,
  FaUserGraduate,
} from "react-icons/fa";
import StatCard from "../../../components/compafterlogin/Common/StatCard";
import GenericCard from "../../../components/compafterlogin/Common/GenericCard";

const AdmDoctors = () => {
  const { search } = useContext(SearchContext);
  const [doctors, setDoctors] = useState([
    {
      id: 1,
      name: "Dr. Michael Pewd",
      email: "michael.pewd@hospital.com",
      phone: "+984-388638",
      department: "Cardiology",
      specialization: "Interventional Cardiology",
      qualification: "MBBS, MD Cardiology",
      gender: "male",
      address: "123 Medical Street, London, UK",
    },
    {
      id: 2,
      name: "Dr. Erich Mcbride",
      email: "erich.mcbride@hospital.com",
      phone: "+612-385682",
      department: "Anesthetics",
      specialization: "Cardiac Anesthesia",
      qualification: "MBBS, MD Anesthesiology",
      gender: "male",
      address: "456 Health Avenue, Sydney, AU",
    },
    {
      id: 3,
      name: "Dr. Sarah Johnson",
      email: "sarah.johnson@hospital.com",
      phone: "+612-385682",
      department: "Pediatrics",
      specialization: "Neonatal Care",
      qualification: "MBBS, MD Pediatrics",
      gender: "female",
      address: "789 Care Lane, Melbourne, AU",
    },
  ]);

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [toast, setToast] = useState({
    isVisible: false,
    message: "",
    type: "success",
  });

  const handleAddDoctor = (newDoctor) => {
    setDoctors((prev) => [...prev, newDoctor]);
    setToast({
      isVisible: true,
      message: `Dr. ${newDoctor.name} has been added successfully!`,
      type: "success",
    });
  };

  const handleEditDoctor = (updatedDoctor) => {
    setDoctors((prev) =>
      prev.map((doc) => (doc.id === updatedDoctor.id ? updatedDoctor : doc))
    );
    setToast({
      isVisible: true,
      message: `Dr. ${updatedDoctor.name} has been updated successfully!`,
      type: "success",
    });
  };

  const handleDeleteDoctor = (doctorId) => {
    const doctorToDelete = doctors.find((doc) => doc.id === doctorId);
    setDoctors((prev) => prev.filter((doc) => doc.id !== doctorId));
    setToast({
      isVisible: true,
      message: `Dr. ${doctorToDelete?.name} has been removed successfully!`,
      type: "success",
    });
  };

  const openEditModal = (doctor) => {
    setSelectedDoctor(doctor);
    setIsEditModalOpen(true);
  };

  const openDeleteModal = (doctor) => {
    setSelectedDoctor(doctor);
    setIsDeleteModalOpen(true);
  };

  const filteredDoctors = doctors.filter(
    (doc) =>
      doc.name.toLowerCase().includes(search.toLowerCase()) ||
      doc.email.toLowerCase().includes(search.toLowerCase()) ||
      doc.phone.toLowerCase().includes(search.toLowerCase()) ||
      doc.department.toLowerCase().includes(search.toLowerCase())
  );

  const statData = [
    {
      icon: <FaUserMd className="w-5 h-5 text-blue-600" />,
      stat: doctors.length,
      label: "Total Doctors",
    },
    {
      icon: <FaBuilding className="w-5 h-5 text-green-600" />,
      stat: new Set(doctors.map((doc) => doc.department)).size,
      label: "Departments",
    },
    {
      icon: <FaUserMd className="w-5 h-5 text-purple-600" />,
      stat: doctors.filter((doc) => doc.specialization).length,
      label: "Specialists",
    },
    {
      icon: <FaUserMd className="w-5 h-5 text-orange-600" />,
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
        <div className="flex items-center md:mb-0 mb-4">
          <FaUserMd className="w-7 h-7 text-[#0B2443] mr-3" />
          <div>
            <h1 className="text-2xl font-bold text-gray-800">
              Doctors Management
            </h1>
            <p className="text-gray-600 mt-1">
              Manage hospital doctors and medical staff
            </p>
          </div>
        </div>
        <button
          onClick={() => setIsAddModalOpen(true)}
          className="bg-[#0B2443] hover:bg-blue-900 text-white px-6 py-3 rounded-lg font-medium flex items-center w-1/2 md:w-auto gap-2 transition-colors shadow-lg"
        >
          <FaPlus className="w-4 h-4" />
          Add Doctor
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
        <div className="py-6 px-2">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Doctor
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Contact
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Department
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Specialization
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredDoctors.length === 0 ? (
                  <tr>
                    <td
                      colSpan={6}
                      className="px-6 py-8 text-center text-gray-500"
                    >
                      <FaUserMd className="w-12 h-12 mx-auto text-gray-300 mb-2" />
                      <p>No doctors found.</p>
                    </td>
                  </tr>
                ) : (
                  filteredDoctors.map((doctor) => (
                    <tr key={doctor.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                            <span className="text-blue-600 font-semibold text-sm">
                              {doctor.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </span>
                          </div>
                          <div>
                            <div className="text-sm font-medium text-gray-900">
                              {doctor.name}
                            </div>
                            <div className="text-sm text-gray-500">
                              {doctor.qualification}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900 flex items-center mb-1">
                          <FaEnvelope className="w-3 h-3 mr-2 text-gray-400" />
                          {doctor.email}
                        </div>
                        <div className="text-sm text-gray-500 flex items-center">
                          <FaPhone className="w-3 h-3 mr-2 text-gray-400" />
                          {doctor.phone}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900 flex items-center">
                          <FaBuilding className="w-3 h-3 mr-2 text-gray-400" />
                          {doctor.department}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {doctor.specialization || "General"}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <div className="flex space-x-2">
                          <button
                            onClick={() => openEditModal(doctor)}
                            className="text-[#0B2443] hover:text-blue-900 bg-green-50 hover:bg-green-100 px-2 py-1 rounded transition-colors"
                            title="Edit Doctor"
                          >
                            <FaEdit className="w-3 h-3" />
                          </button>
                          <button
                            onClick={() => openDeleteModal(doctor)}
                            className="text-red-600 hover:text-red-900 bg-red-50 hover:bg-red-100 px-2 py-1 rounded transition-colors"
                            title="Delete Doctor"
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
          Our Doctors
        </h1>
        <div className="grid md:hidden grid-cols-2 gap-4">
          {filteredDoctors.length === 0 ? (
            <div className="text-center text-gray-500 py-8">
              <FaUserMd className="w-12 h-12 mx-auto text-gray-300 mb-2" />
              <p>No doctors found.</p>
            </div>
          ) : (
            filteredDoctors.map((doctor) => (
              <GenericCard
                key={doctor.id}
                data={doctor}
                hospitalFields={[
                  {
                    key: "qualification",
                    icon: <FaUserGraduate />,
                  },
                  {
                    key: "department",
                    icon: <FaBuilding />,
                  },
                ]}
                personalFields={[
                  { key: "email", icon: <FaEnvelope /> },
                  { key: "phone", icon: <FaPhone /> },
                  { key: "gender", icon: <FaUser /> },
                ]}
                actions={[
                  {
                    label: "Edit",
                    icon: <FaEdit className="w-3 h-3" />,
                    color: "text-[#0B2443]",
                    onClick: openEditModal,
                  },
                  {
                    label: "Delete",
                    icon: <FaTrash className="w-3 h-3" />,
                    color: "text-red-600",
                    onClick: openDeleteModal,
                  },
                ]}
              />
            ))
          )}
        </div>
      </div>

      {/* Modals */}
      <AddDoctorModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAdd={handleAddDoctor}
      />

      <EditDoctorModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        onEdit={handleEditDoctor}
        doctor={selectedDoctor}
      />

      <DeleteDoctorModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={handleDeleteDoctor}
        doctor={selectedDoctor}
      />

      {/* Toast Notification */}
      <Toast
        message={toast.message}
        isVisible={toast.isVisible}
        type={toast.type}
        onClose={() => setToast((prev) => ({ ...prev, isVisible: false }))}
      />
    </div>
  );
};

export default AdmDoctors;
