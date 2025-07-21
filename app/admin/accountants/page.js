"use client";
import { useContext, useState } from "react";
import { SearchContext } from "../../../components/Context/SearchContext";
import Toast from "../../../components/compafterlogin/Common/Toast";
import AddAccountantModal from "../../../components/compafterlogin/Admin/AddAccountantModal";
import EditAccountantModal from "../../../components/compafterlogin/Admin/EditAccountantModal";
import DeleteAccountantModal from "../../../components/compafterlogin/Admin/DeleteAccountantModal";
import { FaCalculator, FaPlus, FaEdit, FaTrash, FaTimes, FaSave, FaEnvelope, FaPhone, FaMapMarkerAlt, FaUserCircle, FaDollarSign, FaIdCard, FaCalendar } from 'react-icons/fa';
import StatCard from "../../../components/compafterlogin/Common/StatCard";

const AdmAccountants = () => {
  const { search } = useContext(SearchContext);
  const [accountants, setAccountants] = useState([
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@hospital.com",
      address: "123 Finance Street, City Center",
      phone: "+1234567890",
      employeeId: "ACC001",
      position: "Senior Accountant",
      salary: 50000,
      hireDate: "2022-01-15",
      qualification: "CPA Certified",
      gender: "Male",
      dateOfBirth: "1985-06-15",
      emergencyContact: "Jane Doe",
      emergencyPhone: "+1234567891",
      bankAccount: "ACC-123456789",
      taxId: "TAX123456"
    },
    {
      id: 2,
      name: "Jason Smith",
      email: "jason.smith@hospital.com",
      address: "456 Accounting Avenue, Downtown",
      phone: "+1234567892",
      employeeId: "ACC002",
      position: "Junior Accountant",
      salary: 35000,
      hireDate: "2023-03-20",
      qualification: "Bachelor's in Accounting",
      gender: "Male",
      dateOfBirth: "1990-08-22",
      emergencyContact: "Mary Smith",
      emergencyPhone: "+1234567893",
      bankAccount: "ACC-987654321",
      taxId: "TAX654321"
    },
    {
      id: 3,
      name: "Sarah Johnson",
      email: "sarah.johnson@hospital.com",
      address: "789 Billing Boulevard, Uptown",
      phone: "+1234567894",
      employeeId: "ACC003",
      position: "Billing Specialist",
      salary: 32000,
      hireDate: "2023-06-10",
      qualification: "Associate Degree in Finance",
      gender: "Female",
      dateOfBirth: "1992-12-10",
      emergencyContact: "Robert Johnson",
      emergencyPhone: "+1234567895",
      bankAccount: "ACC-555666777",
      taxId: "TAX789012"
    },
  ]);

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedAccountant, setSelectedAccountant] = useState(null);
  const [toast, setToast] = useState({ show: false, message: "", type: "success" });

  const filteredAccountants = accountants.filter(
    (acc) =>
      acc.name.toLowerCase().includes(search.toLowerCase()) ||
      acc.email.toLowerCase().includes(search.toLowerCase()) ||
      acc.address.toLowerCase().includes(search.toLowerCase()) ||
      acc.phone.toLowerCase().includes(search.toLowerCase()) ||
      acc.employeeId.toLowerCase().includes(search.toLowerCase()) ||
      acc.department.toLowerCase().includes(search.toLowerCase()) ||
      acc.position.toLowerCase().includes(search.toLowerCase())
  );

  const showToast = (message, type = "success") => {
    setToast({ show: true, message, type });
  };

  const hideToast = () => {
    setToast({ show: false, message: "", type: "success" });
  };

  const handleAddAccountant = (accountantData) => {
    const newAccountant = {
      id: Date.now(),
      ...accountantData,
    };
    setAccountants([...accountants, newAccountant]);
    setIsAddModalOpen(false);
    showToast("Accountant added successfully!");
  };

  const handleEditAccountant = (accountantData) => {
    setAccountants(accountants.map(accountant =>
      accountant.id === selectedAccountant.id
        ? { ...accountant, ...accountantData }
        : accountant
    ));
    setIsEditModalOpen(false);
    setSelectedAccountant(null);
    showToast("Accountant updated successfully!");
  };

  const handleDeleteAccountant = (accountant) => {
    setAccountants(accountants.filter(acc => acc.id !== accountant.id));
    setIsDeleteModalOpen(false);
    setSelectedAccountant(null);
    showToast("Accountant deleted successfully!", "info");
  };

  const openEditModal = (accountant) => {
    setSelectedAccountant(accountant);
    setIsEditModalOpen(true);
  };

  const openDeleteModal = (accountant) => {
    setSelectedAccountant(accountant);
    setIsDeleteModalOpen(true);
  };

  const statData = [
    { icon: <FaCalculator className="w-5 h-5 text-blue-600" />,
      stat: accountants.length,
      label: "Total Accountants",
    },
    { icon: <FaDollarSign className="w-5 h-5 text-green-600" />,
      stat: accountants.reduce((sum, acc) => sum + acc.salary, 0).toLocaleString(),
      label: "Total Payroll",
    },
    { icon: <FaIdCard className="w-5 h-5 text-purple-600" />,
      stat: new Set(accountants.map(acc => acc.department)).size,
      label: "Departments",
    },
    { icon: <FaCalendar className="w-5 h-5 text-orange-600" />,
      stat: Math.round(accountants.reduce((sum, acc) => sum + acc.salary, 0) / accountants.length || 0).toLocaleString(),
      label: "Avg. Salary",
    },
  ];

  return (
    <div className="p-6" style={{ fontFamily: "'Gill Sans MT', 'Gill Sans', 'GillSans', 'Arial', 'sans-serif'" }}>
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center">
          <FaCalculator className="w-7 h-7 text-[#0B2443] mr-3" />
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Accountants Management</h1>
            <p className="text-gray-600 mt-1">Manage hospital accounting staff and financial personnel</p>
          </div>
        </div>
        <button
          onClick={() => setIsAddModalOpen(true)}
          className="bg-[#0B2443]  hover:bg-blue-900 text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2 transition-colors shadow-lg"
        >
          <FaPlus className="w-4 h-4" />
          Add Accountant
        </button>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        {statData.map((stat, index) => (
                  <StatCard icon={stat.icon} stat={stat.stat} label={stat.label} key={index} />
                ))}
      </div>

      {/* Table Section */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="p-6">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Employee
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Contact
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Position
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Salary
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredAccountants.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="px-6 py-8 text-center text-gray-500">
                      <FaCalculator className="w-12 h-12 mx-auto text-gray-300 mb-2" />
                      <p>No accountants found.</p>
                    </td>
                  </tr>
                ) : (
                  filteredAccountants.map((accountant) => (
                    <tr key={accountant.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="w-10 h-10  rounded-full flex items-center justify-center mr-3">
                            <FaUserCircle className="w-6 h-6 text-[#0B2443] " />
                          </div>
                          <div>
                            <div className="text-sm font-medium text-gray-900">{accountant.name}</div>
                            <div className="text-sm text-gray-500 flex items-center">
                              <FaIdCard className="w-3 h-3 mr-1" />
                              {accountant.employeeId}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900 flex items-center mb-1">
                          <FaEnvelope className="w-3 h-3 mr-2 text-gray-400" />
                          {accountant.email}
                        </div>
                        <div className="text-sm text-gray-500 flex items-center">
                          <FaPhone className="w-3 h-3 mr-2 text-gray-400" />
                          {accountant.phone}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{accountant.position}</div>
                        <div className="text-sm text-gray-500">{accountant.qualification}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-[#0B2443] ">
                          ${accountant.salary.toLocaleString()}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <div className="flex space-x-2">
                          <button 
                            onClick={() => openEditModal(accountant)}
                            className="text-[#0B2443]  hover:text-blue-900 bg-green-50 hover:bg-green-100 px-2 py-1 rounded transition-colors"
                            title="Edit Accountant"
                          >
                            <FaEdit className="w-3 h-3" />
                          </button>
                          <button 
                            onClick={() => openDeleteModal(accountant)}
                            className="text-red-600 hover:text-red-900 bg-red-50 hover:bg-red-100 px-2 py-1 rounded transition-colors"
                            title="Delete Accountant"
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

      {/* Modals */}
      <AddAccountantModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAdd={handleAddAccountant}
      />

      <EditAccountantModal
        isOpen={isEditModalOpen}
        onClose={() => {
          setIsEditModalOpen(false);
          setSelectedAccountant(null);
        }}
        onEdit={handleEditAccountant}
        accountant={selectedAccountant}
      />

      <DeleteAccountantModal
        isOpen={isDeleteModalOpen}
        onClose={() => {
          setIsDeleteModalOpen(false);
          setSelectedAccountant(null);
        }}
        onDelete={handleDeleteAccountant}
        accountant={selectedAccountant}
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

export default AdmAccountants;
