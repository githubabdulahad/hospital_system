"use client";
import { useState } from "react";
import CommonTable from "../../../components/compafterlogin/Common/CommonTable";
import CommonAddButton from "../../../components/compafterlogin/Common/CommonAddButton";
import Toast from "../../../components/compafterlogin/Common/Toast";
import StatCard from "../../../components/compafterlogin/Common/StatCard";
import AddbedModal from "../../../components/compafterlogin/Doctor/AddbedModal";
import AllotbedModal from "../../../components/compafterlogin/Doctor/AllotbedModal";
import GenericCard from "../../../components/compafterlogin/Common/GenericCard";
import {
  FaBed,
  FaCalendarAlt,
  FaCheck,
  FaClipboard,
  FaClock,
  FaEdit,
  FaEye,
  FaUser,
} from "react-icons/fa";

const BedAllotment = () => {
  const [beds, setBeds] = useState([
    {
      id: 1,
      bedNumber: "A101",
      ward: "General Ward A",
      bedType: "Standard",
      status: "Occupied",
      patientName: "John Doe",
      patientId: "P001",
      admissionDate: "2024-07-15",
      expectedDischarge: "2024-07-20",
      condition: "Stable",
      notes: "Post-surgery recovery",
      admittedBy: "Dr. Smith",
      charges: 150,
    },
    {
      id: 2,
      bedNumber: "A102",
      ward: "General Ward A",
      bedType: "Standard",
      status: "Available",
      patientName: "",
      patientId: "",
      admissionDate: "",
      expectedDischarge: "",
      condition: "",
      notes: "",
      admittedBy: "",
      charges: 150,
    },
    {
      id: 3,
      bedNumber: "A103",
      ward: "General Ward A",
      bedType: "Standard",
      status: "Available",
      patientName: "",
      patientId: "",
      admissionDate: "",
      expectedDischarge: "",
      condition: "",
      notes: "",
      admittedBy: "",
      charges: 150,
    },
    {
      id: 4,
      bedNumber: "B201",
      ward: "ICU Ward",
      bedType: "ICU",
      status: "Occupied",
      patientName: "Jane Smith",
      patientId: "P002",
      admissionDate: "2024-07-16",
      expectedDischarge: "2024-07-22",
      condition: "Critical",
      notes: "Intensive monitoring required",
      admittedBy: "Dr. Johnson",
      charges: 300,
    },
    {
      id: 5,
      bedNumber: "B202",
      ward: "ICU Ward",
      bedType: "ICU",
      status: "Available",
      patientName: "",
      patientId: "",
      admissionDate: "",
      expectedDischarge: "",
      condition: "",
      notes: "",
      admittedBy: "",
      charges: 300,
    },
    {
      id: 6,
      bedNumber: "C301",
      ward: "Private Ward",
      bedType: "Private",
      status: "Maintenance",
      patientName: "",
      patientId: "",
      admissionDate: "",
      expectedDischarge: "",
      condition: "",
      notes: "Under maintenance",
      admittedBy: "",
      charges: 250,
    },
  ]);

  const [toast, setToast] = useState({
    show: false,
    message: "",
    type: "success",
  });
  const [selectedBed, setSelectedBed] = useState(null);
  const [showAllotModal, setShowAllotModal] = useState(false);
  const [showAddBedModal, setShowAddBedModal] = useState(false);
  const [allotmentData, setAllotmentData] = useState({
    patientName: "",
    patientId: "",
    admissionDate: "",
    expectedDischarge: "",
    condition: "Stable",
    notes: "",
    admittedBy: "",
  });
  const [newBedData, setNewBedData] = useState({
    bedNumber: "",
    ward: "",
    bedType: "Standard",
    charges: 150,
  });

  // Calculate statistics
  const totalBeds = beds.length;
  const availableBeds = beds.filter((bed) => bed.status === "Available").length;
  const occupiedBeds = beds.filter((bed) => bed.status === "Occupied").length;
  // const maintenanceBeds = beds.filter(bed => bed.status === "Maintenance").length;
  const occupancyRate =
    totalBeds > 0 ? ((occupiedBeds / totalBeds) * 100).toFixed(1) : 0;

  // Statistics data for StatCard
  const statData = [
    {
      icon: (
        <svg
          className="w-5 h-5 text-green-700"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
          <path d="M8 21v-4a2 2 0 012-2h4a2 2 0 012 2v4" />
        </svg>
      ),
      stat: totalBeds,
      label: "Total Beds",
    },
    {
      icon: (
        <svg
          className="w-5 h-5 text-[#0B2443]"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      stat: availableBeds,
      label: "Available Beds",
    },
    {
      icon: (
        <svg
          className="w-5 h-5 text-blue-600"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      stat: occupiedBeds,
      label: "Occupied Beds",
    },
    {
      icon: (
        <svg
          className="w-5 h-5 text-purple-500"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      stat: `${occupancyRate}%`,
      label: "Occupancy Rate",
    },
  ];

  const showToast = (message, type = "success") => {
    setToast({ show: true, message, type });
  };

  const hideToast = () => {
    setToast({ show: false, message: "", type: "success" });
  };

  const handleAllotBed = (bed) => {
    if (bed.status !== "Available") {
      showToast("This bed is not available for allotment", "error");
      return;
    }
    setSelectedBed(bed);
    setAllotmentData({
      patientName: "",
      patientId: "",
      admissionDate: new Date().toISOString().split("T")[0],
      expectedDischarge: "",
      condition: "Stable",
      notes: "",
      admittedBy: "",
    });
    setShowAllotModal(true);
  };

  const handleDischargeBed = (bed) => {
    if (bed.status !== "Occupied") {
      showToast("This bed is not occupied", "error");
      return;
    }
    if (
      window.confirm(`Are you sure you want to discharge bed ${bed.bedNumber}?`)
    ) {
      const updatedBeds = beds.map((b) =>
        b.id === bed.id
          ? {
              ...b,
              status: "Available",
              patientName: "",
              patientId: "",
              admissionDate: "",
              expectedDischarge: "",
              condition: "",
              notes: "",
              admittedBy: "",
            }
          : b
      );
      setBeds(updatedBeds);
      showToast(
        `Bed ${bed.bedNumber} has been discharged successfully`,
        "success"
      );
    }
  };

  const handleAllotmentSubmit = (e) => {
    e.preventDefault();

    if (!allotmentData.patientName || !allotmentData.patientId) {
      showToast("Please fill in patient name and ID", "error");
      return;
    }

    const updatedBeds = beds.map((bed) =>
      bed.id === selectedBed.id
        ? {
            ...bed,
            status: "Occupied",
            patientName: allotmentData.patientName,
            patientId: allotmentData.patientId,
            admissionDate: allotmentData.admissionDate,
            expectedDischarge: allotmentData.expectedDischarge,
            condition: allotmentData.condition,
            notes: allotmentData.notes,
            admittedBy: allotmentData.admittedBy,
          }
        : bed
    );

    setBeds(updatedBeds);
    setShowAllotModal(false);
    showToast(
      `Bed ${selectedBed.bedNumber} allotted to ${allotmentData.patientName}`,
      "success"
    );
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAllotmentData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddBed = () => {
    setNewBedData({
      bedNumber: "",
      ward: "",
      bedType: "Standard",
      charges: 150,
    });
    setShowAddBedModal(true);
  };

  const handleNewBedInputChange = (e) => {
    const { name, value } = e.target;
    setNewBedData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddBedSubmit = (e) => {
    e.preventDefault();

    if (!newBedData.bedNumber || !newBedData.ward) {
      showToast("Please fill in bed number and ward", "error");
      return;
    }

    // Check if bed number already exists
    const bedExists = beds.some(
      (bed) => bed.bedNumber === newBedData.bedNumber
    );
    if (bedExists) {
      showToast("Bed number already exists", "error");
      return;
    }

    const newBed = {
      id: beds.length + 1,
      bedNumber: newBedData.bedNumber,
      ward: newBedData.ward,
      bedType: newBedData.bedType,
      status: "Available",
      patientName: "",
      patientId: "",
      admissionDate: "",
      expectedDischarge: "",
      condition: "",
      notes: "",
      admittedBy: "",
      charges: parseInt(newBedData.charges),
    };

    setBeds([...beds, newBed]);
    setShowAddBedModal(false);
    showToast(`Bed ${newBedData.bedNumber} added successfully`, "success");
  };

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

      <div className="mb-4 w-full flex md:justify-end justify-start">
        <CommonAddButton label="Add New Bed" onClick={handleAddBed} />
      </div>

      <div className="hidden md:block">
        <CommonTable
          columns={[
            { label: "Bed Number", key: "bedNumber" },
            { label: "Ward", key: "ward" },
            { label: "Bed Type", key: "bedType" },
            {
              label: "Status",
              key: "status",
              render: (bed) => (
                <span
                  className={`px-2 py-1 rounded-full text-xs ${
                    bed.status === "Available"
                      ? "bg-green-100 text-green-800"
                      : bed.status === "Occupied"
                      ? "bg-red-100 text-red-800"
                      : "bg-yellow-100 text-yellow-800"
                  }`}
                >
                  {bed.status}
                </span>
              ),
            },
            {
              label: "Patient",
              key: "patientName",
              render: (bed) => bed.patientName || "-",
            },
            {
              label: "Admission Date",
              key: "admissionDate",
              render: (bed) => bed.admissionDate || "-",
            },
            {
              label: "Daily Charges",
              key: "charges",
              render: (bed) => `$${bed.charges}`,
            },
          ]}
          data={beds}
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
                    <path d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                  </svg>
                </>
              ),
              onClick: (bed) => handleAllotBed(bed),
              className:
                "bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded text-xs flex items-center transition-colors",
              title: "Allot",
              condition: (bed) => bed.status === "Available",
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
              onClick: (bed) => handleDischargeBed(bed),
              className:
                "bg-orange-500 hover:bg-orange-600 text-white px-3 py-1 rounded text-xs flex items-center transition-colors",
              title: "Discharge",
              condition: (bed) => bed.status === "Occupied",
            },
          ]}
        />
      </div>

      <div className="block md:hidden">
        <h1 className="text-2xl font-bold text-center text-[#0b2443] mb-2">
          Bed Allotment
        </h1>
        <div className="grid  grid-cols-2 gap-4">
          {beds.length === 0 ? (
            <div className="text-center text-gray-500 py-8">
              <FaUser className="w-12 h-12 mx-auto text-gray-300 mb-2" />
              <p>No record found.</p>
            </div>
          ) : (
            beds.map((bed) => (
              <GenericCard
                key={bed.id}
                data={bed}
                hospitalFields={[
                  {
                    key: "bedNumber",
                    icon: <FaBed />,
                  },
                  {
                    key: "bedNumber",
                    icon: <FaClipboard />,
                  },
                  {
                    key: "status",
                    icon: <FaClock />,
                  },
                ]}
                personalFields={[
                  { key: "bedType", icon: <FaBed /> },
                  { key: "patientName", icon: <FaUser /> },
                ]}
                actions={[
                  {
                    label: "Allot Bed",
                    icon: (
                      <svg
                        className="w-4 h-4 mr-1"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                      </svg>
                    ),
                    color: "text-[#0B2443] ",
                    onClick: handleAllotBed,
                  },
                  {
                    label: "Discharge",
                    icon: (
                      <svg
                        className="w-4 h-4 mr-1"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                      </svg>
                    ),
                    color: "text-red-800",
                    onClick: handleDischargeBed,
                  },
                ]}
              />
            ))
          )}
        </div>
      </div>

      <Toast
        message={toast.message}
        isVisible={toast.show}
        type={toast.type}
        onClose={hideToast}
      />

      {/* Allotment Modal */}
      {showAllotModal && (
        <AllotbedModal
          selectedBed={selectedBed}
          setShowAllotModal={setShowAllotModal}
          handleAllotmentSubmit={handleAllotmentSubmit}
          handleInputChange={handleInputChange}
          allotmentData={allotmentData}
        />
      )}

      {/* Add Bed Modal */}
      {showAddBedModal && (
        <AddbedModal
          setShowAddBedModal={setShowAddBedModal}
          handleAddBedSubmit={handleAddBedSubmit}
          newBedData={newBedData}
          handleNewBedInputChange={handleNewBedInputChange}
        />
      )}
    </div>
  );
};

export default BedAllotment;
