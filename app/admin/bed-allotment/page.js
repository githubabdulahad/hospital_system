"use client";
import { useContext, useState } from "react";
import { SearchContext } from "../../../components/Context/SearchContext";
import CommonTable from "../../../components/compafterlogin/Common/CommonTable";
import Toast from "../../../components/compafterlogin/Common/Toast";
import StatCard from "../../../components/compafterlogin/Common/StatCard";
import Viewbedallotment from "../../../components/compafterlogin/Admin/Viewbedallotment";
import Editbedallotment from "../../../components/compafterlogin/Admin/Editbedallotment";
import DeleteBedAllotment from "../../../components/compafterlogin/Admin/Deletebedallotment";
import GenericCard from "../../../components/compafterlogin/Common/GenericCard";
import { FaBed, FaBuilding, FaCalendarAlt, FaClock, FaDollarSign, FaEdit, FaEnvelope, FaPhone, FaTrash, FaUser, FaVenusMars } from "react-icons/fa";

const BedAllotment = () => {
  const { search } = useContext(SearchContext);
  const [bedAllotments, setBedAllotments] = useState([
    {
      id: 1,
      allotmentId: "BA001",
      patientName: "John Smith",
      patientId: "PAT001",
      bedNumber: "101",
      wardName: "General Ward",
      bedType: "Standard",
      allotmentDate: "2024-01-15",
      dischargeDate: "",
      status: "Occupied",
      doctorName: "Dr. Sarah Wilson",
      nurseName: "Nurse Mary Johnson",
      dailyRate: 150.0,
      totalCharges: 450.0,
      admissionReason: "Pneumonia treatment",
      emergencyContact: "Jane Smith - 555-0123",
      notes: "Patient requires regular monitoring",
    },
    {
      id: 2,
      allotmentId: "BA002",
      patientName: "Alice Johnson",
      patientId: "PAT002",
      bedNumber: "205",
      wardName: "ICU",
      bedType: "ICU",
      allotmentDate: "2024-01-10",
      dischargeDate: "",
      status: "Occupied",
      doctorName: "Dr. Michael Brown",
      nurseName: "Nurse Lisa Davis",
      dailyRate: 500.0,
      totalCharges: 3500.0,
      admissionReason: "Post-surgery recovery",
      emergencyContact: "Bob Johnson - 555-0456",
      notes: "Critical care required",
    },
    {
      id: 3,
      allotmentId: "BA003",
      patientName: "Robert Davis",
      patientId: "PAT003",
      bedNumber: "302",
      wardName: "Private Ward",
      bedType: "Private",
      allotmentDate: "2024-01-08",
      dischargeDate: "2024-01-12",
      status: "Discharged",
      doctorName: "Dr. Emily Clark",
      nurseName: "Nurse Jennifer Wilson",
      dailyRate: 300.0,
      totalCharges: 1200.0,
      admissionReason: "Routine surgery",
      emergencyContact: "Mary Davis - 555-0789",
      notes: "Recovery completed successfully",
    },
    {
      id: 4,
      allotmentId: "BA004",
      patientName: "Lisa Anderson",
      patientId: "PAT004",
      bedNumber: "150",
      wardName: "Maternity Ward",
      bedType: "Maternity",
      allotmentDate: "2024-01-14",
      dischargeDate: "",
      status: "Occupied",
      doctorName: "Dr. Patricia Moore",
      nurseName: "Nurse Susan Taylor",
      dailyRate: 250.0,
      totalCharges: 750.0,
      admissionReason: "Childbirth",
      emergencyContact: "David Anderson - 555-0321",
      notes: "New mother and baby doing well",
    },
    {
      id: 5,
      allotmentId: "BA005",
      patientName: "James Wilson",
      patientId: "PAT005",
      bedNumber: "203",
      wardName: "ICU",
      bedType: "ICU",
      allotmentDate: "2024-01-13",
      dischargeDate: "",
      status: "Reserved",
      doctorName: "Dr. Michael Brown",
      nurseName: "Nurse Lisa Davis",
      dailyRate: 500.0,
      totalCharges: 0.0,
      admissionReason: "Scheduled surgery preparation",
      emergencyContact: "Margaret Wilson - 555-0654",
      notes: "Pre-surgery preparation",
    },
  ]);

  const [toast, setToast] = useState({
    show: false,
    message: "",
    type: "success",
  });
  const [filterStatus, setFilterStatus] = useState("All");
  const [filterWard, setFilterWard] = useState("All");
  const [filterBedType, setFilterBedType] = useState("All");

  // State for modals
  const [showViewModal, setShowViewModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedAllotment, setSelectedAllotment] = useState(null);
  const [allotmentToDelete, setAllotmentToDelete] = useState(null);
  const [editFormData, setEditFormData] = useState({});

  const filteredAllotments = bedAllotments.filter((allotment) => {
    const matchesSearch =
      allotment.patientName.toLowerCase().includes(search.toLowerCase()) ||
      allotment.allotmentId.toLowerCase().includes(search.toLowerCase()) ||
      allotment.bedNumber.toLowerCase().includes(search.toLowerCase()) ||
      allotment.wardName.toLowerCase().includes(search.toLowerCase()) ||
      allotment.doctorName.toLowerCase().includes(search.toLowerCase());

    const matchesStatus =
      filterStatus === "All" || allotment.status === filterStatus;
    const matchesWard =
      filterWard === "All" || allotment.wardName === filterWard;
    const matchesBedType =
      filterBedType === "All" || allotment.bedType === filterBedType;

    return matchesSearch && matchesStatus && matchesWard && matchesBedType;
  });

  const showToast = (message, type = "success") => {
    setToast({ show: true, message, type });
  };

  const hideToast = () => {
    setToast({ show: false, message: "", type: "success" });
  };

  const getStatusBadge = (status) => {
    const statusStyles = {
      Occupied: "bg-green-100 text-green-800",
      Reserved: "bg-yellow-100 text-yellow-800",
      Discharged: "bg-blue-100 text-blue-800",
      Available: "bg-gray-100 text-gray-800",
      Maintenance: "bg-red-100 text-red-800",
    };

    return (
      <span
        className={`px-2 py-1 text-xs font-medium rounded-full ${
          statusStyles[status] || "bg-gray-100 text-gray-800"
        }`}
      >
        {status}
      </span>
    );
  };

  const getBedTypeBadge = (bedType) => {
    const typeStyles = {
      Standard: "bg-blue-100 text-blue-800",
      ICU: "bg-red-100 text-red-800",
      Private: "bg-purple-100 text-purple-800",
      Maternity: "bg-pink-100 text-pink-800",
      Emergency: "bg-orange-100 text-orange-800",
    };

    return (
      <span
        className={`px-2 py-1 text-xs font-medium rounded ${
          typeStyles[bedType] || "bg-gray-100 text-gray-800"
        }`}
      >
        {bedType}
      </span>
    );
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amount);
  };

  const calculateDaysStayed = (allotmentDate, dischargeDate) => {
    const start = new Date(allotmentDate);
    const end = dischargeDate ? new Date(dischargeDate) : new Date();
    const diffTime = Math.abs(end - start);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  // View functionality
  const handleViewAllotment = (allotment) => {
    setSelectedAllotment(allotment);
    setShowViewModal(true);
  };

  // Edit functionality
  const handleEditAllotment = (allotment) => {
    if (allotment.status === "Discharged") {
      showToast("Cannot edit discharged bed allotment", "error");
      return;
    }
    setSelectedAllotment(allotment);
    setEditFormData({ ...allotment });
    setShowEditModal(true);
  };

  const handleSaveEdit = () => {
    setBedAllotments(
      bedAllotments.map((allotment) =>
        allotment.id === editFormData.id ? editFormData : allotment
      )
    );
    setShowEditModal(false);
    setSelectedAllotment(null);
    setEditFormData({});
    showToast(
      `Bed allotment ${editFormData.allotmentId} updated successfully`,
      "success"
    );
  };

  const handleCancelEdit = () => {
    setShowEditModal(false);
    setSelectedAllotment(null);
    setEditFormData({});
  };

  // Delete functionality
  const handleDeleteAllotment = (allotment) => {
    if (allotment.status === "Occupied") {
      showToast("Cannot delete active bed allotment", "error");
      return;
    }
    setAllotmentToDelete(allotment);
    setShowDeleteModal(true);
  };

  const confirmDelete = () => {
    setBedAllotments(
      bedAllotments.filter((allotment) => allotment.id !== allotmentToDelete.id)
    );
    showToast(
      `Bed allotment ${allotmentToDelete.allotmentId} deleted successfully`,
      "success"
    );
    setShowDeleteModal(false);
    setAllotmentToDelete(null);
  };

  const cancelDelete = () => {
    setShowDeleteModal(false);
    setAllotmentToDelete(null);
  };

  

  const oncloseViewModal = () => {
    setShowViewModal(false);
    setSelectedAllotment(null);
  }
  // Discharge functionality
  const handleDischarge = (allotment) => {
    if (allotment.status !== "Occupied") {
      showToast("Only occupied beds can be discharged", "error");
      return;
    }

    const dischargeDate = new Date().toISOString().split("T")[0];
    const daysStayed = calculateDaysStayed(
      allotment.allotmentDate,
      dischargeDate
    );
    const totalCharges = allotment.dailyRate * daysStayed;

    setBedAllotments(
      bedAllotments.map((bed) =>
        bed.id === allotment.id
          ? {
              ...bed,
              status: "Discharged",
              dischargeDate: dischargeDate,
              totalCharges: totalCharges,
            }
          : bed
      )
    );
    showToast(
      `Patient ${allotment.patientName} discharged successfully`,
      "success"
    );
  };

  // Statistics
  const totalBeds = bedAllotments.length;
  const occupiedBeds = bedAllotments.filter(
    (b) => b.status === "Occupied"
  ).length;
  const reservedBeds = bedAllotments.filter(
    (b) => b.status === "Reserved"
  ).length;
  const availableBeds = bedAllotments.filter(
    (b) => b.status === "Available"
  ).length;

  const statData = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-7 h-7 text-blue-600"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 21h16.5M4.5 3h15l-.75 18h-13.5L4.5 3z"
          />
        </svg>
      ),
      stat: totalBeds,
      label: "Total Beds",
    },
    {
      icon: (
        <svg
          className="w-5 h-5 text-green-600"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      stat: occupiedBeds,
      label: "Occupied",
    },
    {
      icon: (
        <svg
          className="w-5 h-5 text-yellow-600"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      stat: reservedBeds,
      label: "Reserved",
    },
    {
      icon: (
        <svg
          className="w-5 h-5 text-gray-600"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M5 13l4 4L19 7" />
        </svg>
      ),
      stat: availableBeds,
      label: "Available",
    },
  ];

  return (
    <div
      className="p-6"
      style={{
        fontFamily: "'Gill Sans MT', 'GillSans', 'Arial', 'sans-serif'",
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
            className="w-7 h-7 text-[#0B2443]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 21h16.5M4.5 3h15l-.75 18h-13.5L4.5 3z"
            />
          </svg>
        </span>
        <h2 className="text-3xl font-semibold text-[#0B2443]">Bed Allotment</h2>
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

      {/* Filters */}
      <div className="flex flex-wrap gap-4 mb-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Status
          </label>
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="All">All Status</option>
            <option value="Occupied">Occupied</option>
            <option value="Reserved">Reserved</option>
            <option value="Discharged">Discharged</option>
            <option value="Available">Available</option>
            <option value="Maintenance">Maintenance</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Ward
          </label>
          <select
            value={filterWard}
            onChange={(e) => setFilterWard(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="All">All Wards</option>
            <option value="General Ward">General Ward</option>
            <option value="ICU">ICU</option>
            <option value="Private Ward">Private Ward</option>
            <option value="Maternity Ward">Maternity Ward</option>
            <option value="Emergency Ward">Emergency Ward</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Bed Type
          </label>
          <select
            value={filterBedType}
            onChange={(e) => setFilterBedType(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="All">All Types</option>
            <option value="Standard">Standard</option>
            <option value="ICU">ICU</option>
            <option value="Private">Private</option>
            <option value="Maternity">Maternity</option>
            <option value="Emergency">Emergency</option>
          </select>
        </div>
      </div>

        <div className="hidden md:block">
      <CommonTable
        columns={[
          { label: "Allotment ID", key: "allotmentId" },
          { label: "Patient", key: "patientName" },
          { label: "Bed", key: "bedNumber" },
          { label: "Ward", key: "wardName" },
          {
            label: "Type",
            key: "bedType",
            render: (allotment) => getBedTypeBadge(allotment.bedType),
          },
          {
            label: "Status",
            key: "status",
            render: (allotment) => getStatusBadge(allotment.status),
          },
          { label: "Allotment Date", key: "allotmentDate" },
          {
            label: "Daily Rate",
            key: "dailyRate",
            render: (allotment) => formatCurrency(allotment.dailyRate),
          },
          {
            label: "Total Charges",
            key: "totalCharges",
            render: (allotment) => (
              <span className="font-semibold text-green-600">
                {formatCurrency(allotment.totalCharges)}
              </span>
            ),
          },
        ]}
        data={filteredAllotments}
        actions={[
          {
            label: (
              <>
                <svg
                  className="w-3 h-3 mr-1"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </>
            ),
            onClick: (allotment) => handleViewAllotment(allotment),
            className:
              "bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-xs flex items-center transition-colors",
            title: "View Details",
          },
          {
            label: (
              <>
                <svg
                  className="w-3 h-3 mr-1"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </>
            ),
            onClick: (allotment) => handleEditAllotment(allotment),
            className:
              "bg-orange-500 hover:bg-orange-600 text-white px-3 py-1 rounded text-xs flex items-center transition-colors",
            title: "Edit Allotment",
          },
          {
            label: (
              <>
                <svg
                  className="w-3 h-3 mr-1"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
              </>
            ),
            onClick: (allotment) => handleDischarge(allotment),
            className:
              "bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded text-xs flex items-center transition-colors",
            title: "Discharge Patient",
          },
          {
            label: (
              <>
                <svg
                  className="w-3 h-3 mr-1"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </>
            ),
            onClick: (allotment) => handleDeleteAllotment(allotment),
            className:
              "bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-xs flex items-center transition-colors",
            title: "Delete Allotment",
          },
        ]}
      />
      </div>

      <div className="block md:hidden">
              <h1 className="text-2xl font-bold text-center text-[#0b2443] mb-2">
                Bed Allotment List
              </h1>
              <div className="grid  grid-cols-2 gap-4">
                {filteredAllotments.length === 0 ? (
                  <div className="text-center text-gray-500 py-8">
                    <FaUser className="w-12 h-12 mx-auto text-gray-300 mb-2" />
                    <p>No bed allotments found.</p>
                  </div>
                ) : (
                  filteredAllotments.map((allotment) => (
                    <GenericCard
                      key={allotment.id}
                      data={allotment}
                      hospitalFields={[
                     {
                       key: "patientName",
                       label: "Patient",
                       icon: <FaUser />,
                     },
                     {
                       key: "bedNumber",
                       label: "Bed No",
                       icon: <FaBed />,
                     },
                     {
                      key:"status",
                      label: "Status",
                      icon: <FaClock />,
                     }
                   ]}
                   personalFields={[
                  { key: "allotmentDate", icon: <FaCalendarAlt /> },
                  { key: "wardName", icon: <FaBed /> },
                   ]}
                      actions={[
                        {
                          label: "View Details",
                          icon: <svg
                          className="w-3 h-3"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                        >
                          <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>,
                          color: "text-blue-900",
                          onClick: handleViewAllotment,
                        },
                        {
                          label: "Edit Allotment",
                          icon: (
                            <FaEdit className="w-3 h-3" />
                          ),
                          color: "text-green-900",
                          onClick: handleEditAllotment,
                        },
                        {
                          label: "Delete Allotment",
                          icon: (
                            <FaTrash className="w-3 h-3" />
                          ),
                          color: "text-red-600",
                          onClick: handleDeleteAllotment,
                        },
                      ]}
                    />
                  ))
                )}
              </div>
            </div>

      {/* View Details Modal */}
      {showViewModal && (
        <Viewbedallotment 
          oncloseViewModal={oncloseViewModal} 
          calDays={calculateDaysStayed} 
          getbedbadge={getBedTypeBadge} 
          getStatbadge={getStatusBadge} 
          selectedAllotment={selectedAllotment} 
          formatCurrency={formatCurrency}   
        />
      )}

      {/* Edit Modal */}
      {showEditModal && (
        <Editbedallotment handleCancelEdit={handleCancelEdit} handleSaveEdit={handleSaveEdit} editFormData={editFormData} setEditFormData={setEditFormData}/>
      )}

      {/* Delete Confirmation Modal */}
      {showDeleteModal  && (
        <DeleteBedAllotment allotmentToDelete={allotmentToDelete} cancelDelete={cancelDelete} confirmDelete={confirmDelete}/>
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

export default BedAllotment;
