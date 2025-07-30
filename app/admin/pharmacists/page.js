"use client";
import { useContext, useState } from "react";
import { SearchContext } from "../../../components/Context/SearchContext";
import AddPharmacistModal from "../../../components/compafterlogin/Admin/AddPharmacistModal";
import EditPharmacistModal from "../../../components/compafterlogin/Admin/EditPharmacistModal"
import DeletePharmacistModal from "../../../components/compafterlogin/Admin/DeletePharmacistModal";
import Toast from "../../../components/compafterlogin/Common/Toast";
import { FaPills, FaPlus, FaEdit, FaTrash, FaEnvelope, FaPhone, FaVenusMars, FaUserCircle, FaIdCard, FaCertificate, FaClock, FaGraduationCap, FaUser, FaBuilding, FaUserGraduate } from 'react-icons/fa';
import StatCard from "../../../components/compafterlogin/Common/StatCard";
import GenericCard from "../../../components/compafterlogin/Common/GenericCard";
import { FaDollarSign } from "react-icons/fa6";


const AdmPharmacists = () => {
  const { search } = useContext(SearchContext);
  const [pharmacists, setPharmacists] = useState([
    {
      id: 1,
      name: "Sarah Wilson",
      email: "sarah.wilson@hospital.com",
      phone: "+1-234-567-8901",
      address: "123 Pharmacy Lane, Medical City",
      employeeId: "PHAR001",
      department: "Pharmacy",
      position: "Head Pharmacist",
      salary: 75000,
      hireDate: "2021-03-15",
      licenseNumber: "RPH12345",
      specialization: "Clinical Pharmacy",
      shift: "Day",
      gender: "Female",
      dateOfBirth: "1985-03-15",
      emergencyContact: "John Wilson",
      emergencyPhone: "+1-234-567-8911"
    },
    {
      id: 2,
      name: "Michael Brown",
      email: "michael.brown@hospital.com",
      phone: "+1-234-567-8902",
      address: "456 Medicine St, Health District",
      employeeId: "PHAR002",
      department: "Pharmacy",
      position: "Clinical Pharmacist",
      salary: 65000,
      hireDate: "2022-07-20",
      licenseNumber: "RPH23456",
      specialization: "Oncology Pharmacy",
      shift: "Day",
      gender: "Male",
      dateOfBirth: "1988-07-20",
      emergencyContact: "Lisa Brown",
      emergencyPhone: "+1-234-567-8912"
    },
    {
      id: 3,
      name: "Emily Davis",
      email: "emily.davis@hospital.com",
      phone: "+1-234-567-8903",
      address: "789 Wellness Ave, Care Center",
      employeeId: "PHAR003",
      department: "Pharmacy",
      position: "Staff Pharmacist",
      salary: 58000,
      hireDate: "2023-01-10",
      licenseNumber: "RPH34567",
      specialization: "Pediatric Pharmacy",
      shift: "Night",
      gender: "Female",
      dateOfBirth: "1992-01-10",
      emergencyContact: "Robert Davis",
      emergencyPhone: "+1-234-567-8913"
    },
  ]);

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedPharmacist, setSelectedPharmacist] = useState(null);
  const [toast, setToast] = useState({ show: false, message: "", type: "success" });

  const filteredPharmacists = pharmacists.filter(
    (pharmacist) =>
      pharmacist.name.toLowerCase().includes(search.toLowerCase()) ||
      pharmacist.email.toLowerCase().includes(search.toLowerCase()) ||
      pharmacist.phone.toLowerCase().includes(search.toLowerCase()) ||
      pharmacist.address.toLowerCase().includes(search.toLowerCase()) ||
      pharmacist.specialization.toLowerCase().includes(search.toLowerCase()) ||
      pharmacist.licenseNumber.toLowerCase().includes(search.toLowerCase())
  );

  const showToast = (message, type = "success") => {
    setToast({ show: true, message, type });
  };

  const hideToast = () => {
    setToast({ show: false, message: "", type: "success" });
  };

  const handleAddPharmacist = (pharmacistData) => {
    const newPharmacist = {
      id: Date.now(),
      ...pharmacistData,
    };
    setPharmacists([...pharmacists, newPharmacist]);
    setIsAddModalOpen(false);
    showToast("Pharmacist added successfully!");
  };

  const handleEditPharmacist = (pharmacistData) => {
    setPharmacists(pharmacists.map(pharmacist =>
      pharmacist.id === selectedPharmacist.id
        ? { ...pharmacist, ...pharmacistData }
        : pharmacist
    ));
    setIsEditModalOpen(false);
    setSelectedPharmacist(null);
    showToast("Pharmacist updated successfully!");
  };

  const handleDeletePharmacist = (pharmacist) => {
    setPharmacists(pharmacists.filter(p => p.id !== pharmacist.id));
    setIsDeleteModalOpen(false);
    setSelectedPharmacist(null);
    showToast("Pharmacist deleted successfully!", "info");
  };

  const openEditModal = (pharmacist) => {
    setSelectedPharmacist(pharmacist);
    setIsEditModalOpen(true);
  };

  const openDeleteModal = (pharmacist) => {
    setSelectedPharmacist(pharmacist);
    setIsDeleteModalOpen(true);
  };

  const statData = [
    {
      icon: <FaPills className="w-5 h-5 text-[#0B2443]" />,
      stat: pharmacists.length,
      label: "Total Pharmacists",
    },
    {
      icon: <FaClock className="w-5 h-5 text-green-600" />,
      stat: pharmacists.filter(p => p.shift === 'Day').length,
      label: "Day Shift",
    },
    {
      icon: <FaClock className="w-5 h-5 text-purple-600" />,
      stat: pharmacists.filter(p => p.shift === 'Night').length,
      label: "Night Shift",
    },
    {
      icon: <FaCertificate className="w-5 h-5 text-orange-600" />,
      stat: pharmacists.filter(p => p.licenseNumber).length,
      label: "Licensed Pharmacists",  
    },
  ];
  return (
    <div className="p-6" style={{ fontFamily: "'Gill Sans MT', 'Gill Sans', 'GillSans', 'Arial', 'sans-serif'" }}>
      {/* Header */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6">
        <div className="flex items-center mb-4 md:mb-0">
          <FaPills className="w-7 h-7 text-[#0B2443] mr-3" />
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Pharmacists Management</h1>
            <p className="text-gray-600 mt-1">Manage hospital pharmacy staff and pharmaceutical personnel</p>
          </div>
        </div>
        <button
          onClick={() => setIsAddModalOpen(true)}
          className="bg-[#0B2443] hover:bg-blue-900 w-1/2 md:w-auto text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2 transition-colors shadow-lg"
        >
          <FaPlus className="w-4 h-4" />
          Add Pharmacist
        </button>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {statData.map((stat, index) => (
                  <StatCard icon={stat.icon} stat={stat.stat} label={stat.label} key={index} />
                ))}
      </div>

      {/* Table Section */}
      <div className="bg-white hidden md:block rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="p-6">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Pharmacist
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Contact
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Position
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    License
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredPharmacists.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="px-6 py-8 text-center text-gray-500">
                      <FaPills className="w-12 h-12 mx-auto text-gray-300 mb-2" />
                      <p>No pharmacists found.</p>
                    </td>
                  </tr>
                ) : (
                  filteredPharmacists.map((pharmacist) => (
                    <tr key={pharmacist.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="w-10 h-10 rounded-full flex items-center justify-center mr-3">
                            <FaUserCircle className="w-6 h-6 text-[#0B2443]" />
                          </div>
                          <div>
                            <div className="text-sm font-medium text-gray-900">{pharmacist.name}</div>
                            <div className="text-sm text-gray-500 flex items-center">
                              <FaIdCard className="w-3 h-3 mr-1" />
                              {pharmacist.employeeId}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900 flex items-center mb-1">
                          <FaEnvelope className="w-3 h-3 mr-2 text-gray-400" />
                          {pharmacist.email}
                        </div>
                        <div className="text-sm text-gray-500 flex items-center">
                          <FaPhone className="w-3 h-3 mr-2 text-gray-400" />
                          {pharmacist.phone}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{pharmacist.position}</div>
                        <div className="text-sm text-gray-500 flex items-center">
                          <FaClock className="w-3 h-3 mr-1" />
                          {pharmacist.shift} Shift
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">
                          {pharmacist.licenseNumber}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <div className="flex space-x-2">
                          <button 
                            onClick={() => openEditModal(pharmacist)}
                            className="text-[#0B2443] hover:text-blue-900 bg-green-50 hover:bg-green-100 px-2 py-1 rounded transition-colors"
                            title="Edit Pharmacist"
                          >
                            <FaEdit className="w-3 h-3" />
                          </button>
                          <button 
                            onClick={() => openDeleteModal(pharmacist)}
                            className="text-red-600 hover:text-red-900 bg-red-50 hover:bg-red-100 px-2 py-1 rounded transition-colors"
                            title="Delete Pharmacist"
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
              <h1 className="text-2xl font-bold text-center text-[#0b2443] mb-2">Accountant List</h1>
              <div className="grid  grid-cols-2 gap-4">
                              {filteredPharmacists.length === 0 ? (
                                <div className="text-center text-gray-500 py-8">
                                  <FaUser className="w-12 h-12 mx-auto text-gray-300 mb-2" />
                                  <p>No accountants found.</p>
                                </div>
                              ) : (
                                filteredPharmacists.map((pharmacist) => (
                                  <GenericCard
                                    key={pharmacist.id}
                                    data={pharmacist}
                                    hospitalFields={[
                                    {
                                      key: "position",
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
      <AddPharmacistModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAdd={handleAddPharmacist}
      />

      <EditPharmacistModal
        isOpen={isEditModalOpen}
        onClose={() => {
          setIsEditModalOpen(false);
          setSelectedPharmacist(null);
        }}
        onEdit={handleEditPharmacist}
        pharmacist={selectedPharmacist}
      />

      <DeletePharmacistModal
        isOpen={isDeleteModalOpen}
        onClose={() => {
          setIsDeleteModalOpen(false);
          setSelectedPharmacist(null);
        }}
        onDelete={handleDeletePharmacist}
        pharmacist={selectedPharmacist}
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

export default AdmPharmacists;