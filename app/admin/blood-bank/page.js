"use client";
import { useContext, useState } from "react";
import { SearchContext } from "../../../components/Context/SearchContext";
import CommonTable from "../../../components/compafterlogin/Common/CommonTable";
import Toast from "../../../components/compafterlogin/Common/Toast";
import EditBloodBankModel from "../../../components/compafterlogin/Admin/Editbloodbankmodel";
import DeleteBloodbankModal from "../../../components/compafterlogin/Admin/DeleteBloodbankModal";
import StatCard from "../../../components/compafterlogin/Common/StatCard";
import GenericCard from "../../../components/compafterlogin/Common/GenericCard";
import { FaBuilding, FaCalendarAlt, FaClock, FaEdit, FaTrash, FaUser, FaVenusMars } from "react-icons/fa";

const BloodBank = () => {
  const { search } = useContext(SearchContext);
  const [bloodInventory, setBloodInventory] = useState([
    {
      id: 1,
      bloodId: "BB001",
      bloodType: "A+",
      unitsAvailable: 25,
      expiryDate: "2024-02-15",
      donorId: "DON001",
      donorName: "John Smith",
      collectionDate: "2024-01-15",
      status: "Available",
      location: "Refrigerator A1",
      testResults: "Negative",
      notes: "Regular donation",
    },
    {
      id: 2,
      bloodId: "BB002",
      bloodType: "O-",
      unitsAvailable: 15,
      expiryDate: "2024-02-20",
      donorId: "DON002",
      donorName: "Sarah Wilson",
      collectionDate: "2024-01-20",
      status: "Available",
      location: "Refrigerator A2",
      testResults: "Negative",
      notes: "Emergency donor",
    },
    {
      id: 3,
      bloodId: "BB003",
      bloodType: "B+",
      unitsAvailable: 8,
      expiryDate: "2024-02-10",
      donorId: "DON003",
      donorName: "Michael Brown",
      collectionDate: "2024-01-10",
      status: "Low Stock",
      location: "Refrigerator B1",
      testResults: "Negative",
      notes: "Low stock alert",
    },
    {
      id: 4,
      bloodId: "BB004",
      bloodType: "AB+",
      unitsAvailable: 0,
      expiryDate: "2024-02-05",
      donorId: "DON004",
      donorName: "Emily Davis",
      collectionDate: "2024-01-05",
      status: "Out of Stock",
      location: "Refrigerator B2",
      testResults: "Negative",
      notes: "Urgent need for restocking",
    },
    {
      id: 5,
      bloodId: "BB005",
      bloodType: "O+",
      unitsAvailable: 30,
      expiryDate: "2024-02-25",
      donorId: "DON005",
      donorName: "David Anderson",
      collectionDate: "2024-01-25",
      status: "Available",
      location: "Refrigerator C1",
      testResults: "Negative",
      notes: "Fresh stock",
    },
    {
      id: 6,
      bloodId: "BB006",
      bloodType: "A-",
      unitsAvailable: 3,
      expiryDate: "2024-01-30",
      donorId: "DON006",
      donorName: "Lisa Johnson",
      collectionDate: "2023-12-30",
      status: "Expired",
      location: "Refrigerator C2",
      testResults: "Negative",
      notes: "Expired - needs disposal",
    },
  ]);

  const [toast, setToast] = useState({ show: false, message: "", type: "success" });
  const [filterStatus, setFilterStatus] = useState("All");
  const [filterBloodType, setFilterBloodType] = useState("All");
  
  // State for modals
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [selectedBlood, setSelectedBlood] = useState(null);
  const [bloodToDelete, setBloodToDelete] = useState(null);
  const [editFormData, setEditFormData] = useState({});
  

  const filteredInventory = bloodInventory.filter((blood) => {
    const matchesSearch = 
      blood.bloodType.toLowerCase().includes(search.toLowerCase()) ||
      blood.donorName.toLowerCase().includes(search.toLowerCase()) ||
      blood.bloodId.toLowerCase().includes(search.toLowerCase()) ||
      blood.location.toLowerCase().includes(search.toLowerCase());
    
    const matchesStatus = filterStatus === "All" || blood.status === filterStatus;
    const matchesBloodType = filterBloodType === "All" || blood.bloodType === filterBloodType;
    
    return matchesSearch && matchesStatus && matchesBloodType;
  });

  const showToast = (message, type = "success") => {
    setToast({ show: true, message, type });
  };

  const hideToast = () => {
    setToast({ show: false, message: "", type: "success" });
  };

  const getStatusBadge = (status) => {
    const statusStyles = {
      Available: "bg-green-100 text-green-800",
      "Low Stock": "bg-yellow-100 text-yellow-800",
      "Out of Stock": "bg-red-100 text-red-800",
      Expired: "bg-gray-100 text-gray-800",
      Reserved: "bg-blue-100 text-blue-800",
    };
    
    return (
      <span className={`px-2 py-1 text-xs font-medium rounded-full ${statusStyles[status] || 'bg-gray-100 text-gray-800'}`}>
        {status}
      </span>
    );
  };

  const getBloodTypeBadge = (bloodType) => {
    const typeStyles = {
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
      <span className={`px-3 py-1 text-sm font-bold rounded-full ${typeStyles[bloodType] || 'bg-gray-100 text-gray-800'}`}>
        {bloodType}
      </span>
    );
  };

  const isExpired = (expiryDate) => {
    return new Date(expiryDate) < new Date();
  };

  const getDaysUntilExpiry = (expiryDate) => {
    const today = new Date();
    const expiry = new Date(expiryDate);
    const diffTime = expiry - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  // Edit functionality
  const handleEditBlood = (blood) => {
    if (blood.status === "Expired") {
      showToast("Cannot edit expired blood units", "error");
      return;
    }
    setSelectedBlood(blood);
    setEditFormData({ ...blood });
    setShowEditModal(true);
  };

  const handleSaveEdit = () => {
    setBloodInventory(bloodInventory.map(blood => 
      blood.id === editFormData.id ? editFormData : blood
    ));
    setShowEditModal(false);
    setSelectedBlood(null);
    setEditFormData({});
    showToast(`Blood unit ${editFormData.bloodId} updated successfully`, "success");
  };

  const handleCancelEdit = () => {
    setShowEditModal(false);
    setSelectedBlood(null);
    setEditFormData({});
  };

  // Delete functionality
  const handleDeleteBlood = (blood) => {
    setBloodToDelete(blood);
    setShowDeleteModal(true);
  };

  const confirmDelete = () => {
    setBloodInventory(bloodInventory.filter(blood => blood.id !== bloodToDelete.id));
    showToast(`Blood unit ${bloodToDelete.bloodId} deleted successfully`, "success");
    setShowDeleteModal(false);
    setBloodToDelete(null);
  };

  const cancelDelete = () => {
    setShowDeleteModal(false);
    setBloodToDelete(null);
  };
  // Statistics
  const totalUnits = bloodInventory.reduce((sum, blood) => sum + blood.unitsAvailable, 0);
  const availableTypes = bloodInventory.filter(b => b.status === "Available").length;
  const lowStockTypes = bloodInventory.filter(b => b.status === "Low Stock").length;
  const expiredUnits = bloodInventory.filter(b => b.status === "Expired").length;

  const statData = [
    {
      icon :<svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
              </svg> ,
      stat:totalUnits ,
      label:"Total Units",
    },
    {
      icon :<svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg> ,
      stat:availableTypes ,
      label:"Available Types",
    },
    {
      icon :<svg className="w-5 h-5 text-yellow-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.502 0L4.268 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg> ,
      stat:lowStockTypes ,
      label:"Low Stock",
    },
    {
      icon :<svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M6 18L18 6M6 6l12 12" />
              </svg> ,
      stat:expiredUnits ,
      label:"Expired",
    },
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
            className="w-7 h-7 text-red-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
        </span>
        <h2 className="text-3xl font-semibold text-[#0b2443]">Blood Bank</h2>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
       {statData.map((stat, index) => (
                 <StatCard icon={stat.icon} stat={stat.stat} label={stat.label} key={index} />
               ))}
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 mb-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            <option value="All">All Status</option>
            <option value="Available">Available</option>
            <option value="Low Stock">Low Stock</option>
            <option value="Out of Stock">Out of Stock</option>
            <option value="Expired">Expired</option>
            <option value="Reserved">Reserved</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Blood Type</label>
          <select
            value={filterBloodType}
            onChange={(e) => setFilterBloodType(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            <option value="All">All Types</option>
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

      <div className="hidden md:block">
        <CommonTable
        columns={[
          { label: "Blood ID", key: "bloodId" },
          { 
            label: "Blood Type", 
            key: "bloodType", 
            render: (blood) => getBloodTypeBadge(blood.bloodType)
          },
          { 
            label: "Units", 
            key: "unitsAvailable",
            render: (blood) => (
              <span className={`font-semibold ${blood.unitsAvailable <= 5 ? 'text-red-600' : 'text-green-600'}`}>
                {blood.unitsAvailable}
              </span>
            )
          },
          { 
            label: "Status", 
            key: "status", 
            render: (blood) => getStatusBadge(blood.status)
          },
          { label: "Donor", key: "donorName" },
          { 
            label: "Expiry Date", 
            key: "expiryDate",
            render: (blood) => (
              <span className={isExpired(blood.expiryDate) ? 'text-red-600 font-semibold' : 'text-gray-600'}>
                {blood.expiryDate}
                {!isExpired(blood.expiryDate) && (
                  <span className="text-xs block">
                    ({getDaysUntilExpiry(blood.expiryDate)} days)
                  </span>
                )}
              </span>
            )
          },
          { label: "Location", key: "location" },
          { label: "Collection Date", key: "collectionDate" },
        ]}
        data={filteredInventory}
        actions={[
          {
            label: (
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
            ),
            onClick: (blood) => handleEditBlood(blood),
            className: "bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded transition-colors",
            title: "Edit Blood Unit"
          },
          {
            label: (
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            ),
            onClick: (blood) => handleDeleteBlood(blood),
            className: "bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded transition-colors",
            title: "Delete Blood Unit"
          },
        ]}
      />
      </div>

      <div className="block md:hidden">
                    <h1 className="text-2xl font-bold text-center text-[#0b2443] mb-2">
                      Blood Record List
                    </h1>
                    <div className="grid  grid-cols-2 gap-4">
                      {filteredInventory.length === 0 ? (
                        <div className="text-center text-gray-500 py-8">
                          <FaUser className="w-12 h-12 mx-auto text-gray-300 mb-2" />
                          <p>No blood units found.</p>
                        </div>
                      ) : (
                        filteredInventory.map((blood) => (
                          <GenericCard
                            key={blood.id}
                            data={blood}
                            hospitalFields={[
                              {
                                key: "bloodType",
                                label: "Blood Type",
                                icon: <FaUser />,
                              },
                           {
                             key: "unitsAvailable",
                             label: "Blood Units",
                             icon: <FaBuilding />,
                           },
                           {
                            key: "status",
                            label: "Status",
                            icon: <FaClock />,
                           }
                            ]}
                            personalFields={[
                           { key: "collectionDate", icon: <FaCalendarAlt /> },
                           { key: "expiryDate", icon: <FaCalendarAlt /> },
                            ]}
                            actions={[
                              {
                                label: "Edit Allotment",
                                icon: (
                                  <FaEdit className="w-3 h-3" />
                                ),
                                color: "text-[#0b2443]",
                                onClick: handleEditBlood,
                              },
                              {
                                label: "Delete Allotment",
                                icon: (
                                  <FaTrash className="w-3 h-3" />
                                ),
                                color: "text-red-600",
                                onClick: handleDeleteBlood,
                              },
                            ]}
                          />
                        ))
                      )}
                    </div>
                  </div>

      {/* Edit Modal */}
      {showEditModal && (
        <EditBloodBankModel handleCancelEdit={handleCancelEdit} handleSaveEdit={handleSaveEdit} editFormData={editFormData} setEditFormData={setEditFormData}/>
      )}

      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <DeleteBloodbankModal confirmDelete={confirmDelete} cancelDelete={cancelDelete} bloodToDelete={bloodToDelete} />
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

export default BloodBank;