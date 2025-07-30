"use client";
import React, { useContext, useState } from "react";
import { SearchContext } from "../../../components/Context/SearchContext";
import {
  FaCalendarAlt,
  FaClock,
  FaUserMd,
  FaPlus,
  FaTimes,
  FaUser,
  FaBuilding,
} from "react-icons/fa";
import StatCard from "../../../components/compafterlogin/Common/StatCard";
import NewAppointmentModal from "../../../components/compafterlogin/Patient/NewAppointmentModal";
import GenericCard from "../../../components/compafterlogin/Common/GenericCard";
import { FaUserDoctor } from "react-icons/fa6";

const appointmentData = [
  {
    id: 1,
    date: "04 Jul, 2025 – 00:05",
    patient: "Tanvir Hasan",
    doctor: "Dr. Micheal Pew",
    department: "Cardiology",
    status: "Confirmed",
  },
  {
    id: 2,
    date: "04 Jul, 2025 – 00:05",
    patient: "Tanvir Hasan",
    doctor: "Dr. Micheal Pew",
    department: "Cardiology",
    status: "Pending",
  },
  {
    id: 3,
    date: "04 Jul, 2025 – 00:05",
    patient: "Tanvir Hasan",
    doctor: "Dr. Micheal Pew",
    department: "Neurology",
    status: "Confirmed",
  },
  {
    id: 4,
    date: "09 Jul, 2025 – 14:05",
    patient: "Tanvir Hasan",
    doctor: "Dr. Micheal Pew",
    department: "Orthopedics",
    status: "Completed",
  },
  {
    id: 5,
    date: "17 Nov, 2017 – 19:00",
    patient: "Tanvir Hasan",
    doctor: "Dr. Micheal Pew",
    department: "General Medicine",
    status: "Cancelled",
  },
];

const doctors = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    department: "Cardiology",
    available: ["09:00", "11:00", "14:00", "16:00"],
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    department: "Orthopedics",
    available: ["10:00", "13:00", "15:00", "17:00"],
  },
  {
    id: 3,
    name: "Dr. Emily Davis",
    department: "General Medicine",
    available: ["08:00", "12:00", "14:30", "16:30"],
  },
  {
    id: 4,
    name: "Dr. Ahmed Rahman",
    department: "Neurology",
    available: ["09:30", "11:30", "15:30"],
  },
  {
    id: 5,
    name: "Dr. Lisa Wong",
    department: "Dermatology",
    available: ["10:30", "13:30", "16:00"],
  },
];

const departments = [
  "Cardiology",
  "Orthopedics",
  "General Medicine",
  "Neurology",
  "Dermatology",
];

const PatientAppointmentList = () => {
  const { search } = useContext(SearchContext);
  const [showModal, setShowModal] = useState(false);
  const [appointmentForm, setAppointmentForm] = useState({
    department: "",
    doctor: "",
    date: "",
    time: "",
    reason: "",
    urgency: "Normal",
  });

  const filteredData = appointmentData.filter(
    (row) =>
      row.date.toLowerCase().includes(search.toLowerCase()) ||
      row.patient.toLowerCase().includes(search.toLowerCase()) ||
      row.doctor.toLowerCase().includes(search.toLowerCase()) ||
      row.department.toLowerCase().includes(search.toLowerCase())
  );

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAppointmentForm((prev) => ({
      ...prev,
      [name]: value,
      // Reset doctor when department changes
      ...(name === "department" && { doctor: "", time: "" }),
    }));
  };

  const getAvailableDoctors = () => {
    return doctors.filter(
      (doctor) =>
        appointmentForm.department === "" ||
        doctor.department === appointmentForm.department
    );
  };

  const getAvailableTimes = () => {
    const selectedDoctor = doctors.find(
      (doctor) => doctor.name === appointmentForm.doctor
    );
    return selectedDoctor ? selectedDoctor.available : [];
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (
      !appointmentForm.department ||
      !appointmentForm.doctor ||
      !appointmentForm.date ||
      !appointmentForm.time ||
      !appointmentForm.reason
    ) {
      alert("Please fill in all required fields");
      return;
    }

    // In a real application, you would send this data to your backend
    console.log("Appointment Request:", appointmentForm);
    alert(
      "Appointment request submitted successfully! You will receive a confirmation shortly."
    );

    // Reset form and close modal
    setAppointmentForm({
      department: "",
      doctor: "",
      date: "",
      time: "",
      reason: "",
      urgency: "Normal",
    });
    setShowModal(false);
  };

  const getStatusBadge = (status) => {
    const statusStyles = {
      Confirmed: "bg-green-100 text-green-800",
      Pending: "bg-yellow-100 text-yellow-800",
      Completed: "bg-blue-100 text-blue-800",
      Cancelled: "bg-red-100 text-red-800",
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

  // Get tomorrow's date as minimum selectable date
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split("T")[0];

  const statData = [
    {
      icon: <FaCalendarAlt className="w-5 h-5 text-blue-600" />,
      stat: appointmentData.length,
      label: "Total Appointments",
    },
    {
      icon: <FaClock className="w-5 h-5 text-green-600" />,
      stat: appointmentData.filter((apt) => apt.status === "Confirmed").length,
      label: "Confirmed",
    },
    {
      icon: <FaClock className="w-5 h-5 text-yellow-600" />,
      stat: appointmentData.filter((apt) => apt.status === "Pending").length,
      label: "Pending",
    },
    {
      icon: <FaUserMd className="w-5 h-5 text-purple-600" />,
      stat: appointmentData.filter((apt) => apt.status === "Completed").length,
      label: "Completed",
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
      <div className="mb-6">
        {/* Mobile view */}
        <div className="flex flex-col md:hidden">
          <div className="flex items-center mb-1">
            <FaCalendarAlt className="w-7 h-7 text-blue-500 mr-3" />
            <h1 className="text-2xl font-bold text-gray-800">Appointment List</h1>
          </div>
          <span className="text-sm text-gray-600 mb-2">
            View and manage your appointments
          </span>
          <button
            onClick={() => setShowModal(true)}
            className="bg-[#0B2443] hover:bg-blue-900 text-white w-1/2 px-6 py-3 rounded-lg font-medium flex items-center gap-2 transition-colors shadow-lg"
          >
            <FaPlus className="w-4 h-4" />
            Apply For Appointment
          </button>
        </div>
        {/* Desktop view */}
        <div className="hidden md:flex justify-between items-center">
          <div className="flex items-center">
            <FaCalendarAlt className="w-7 h-7 text-blue-500 mr-3" />
            <div>
              <h1 className="text-2xl font-bold text-gray-800">
                Appointment List
              </h1>
              <p className="text-gray-600 mt-1">
                View and manage your appointments
              </p>
            </div>
          </div>
          <button
            onClick={() => setShowModal(true)}
            className="bg-[#0B2443] hover:bg-blue-900 text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2 transition-colors shadow-lg"
          >
            <FaPlus className="w-4 h-4" />
            Apply For Appointment
          </button>
        </div>
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

      {/* Appointments Table */}
      <div className="bg-white hidden md:block rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="p-6">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date & Time
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Patient
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Doctor
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Department
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredData.length === 0 ? (
                  <tr>
                    <td
                      colSpan={5}
                      className="px-6 py-8 text-center text-gray-500"
                    >
                      <FaCalendarAlt className="w-12 h-12 mx-auto text-gray-300 mb-2" />
                      <p>No appointments found.</p>
                    </td>
                  </tr>
                ) : (
                  filteredData.map((row) => (
                    <tr key={row.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <FaCalendarAlt className="w-4 h-4 text-gray-400 mr-2" />
                          <span className="text-sm text-gray-900">
                            {row.date}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {row.patient}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <FaUserMd className="w-4 h-4 text-gray-400 mr-2" />
                          <span className="text-sm text-gray-900">
                            {row.doctor}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {row.department}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {getStatusBadge(row.status)}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Mobile layout */}
      <div className="block md:hidden">
                    <h1 className="text-2xl font-bold text-center text-[#0b2443] mb-2">Appointment List</h1>
                    <div className="grid  grid-cols-2 gap-4">
                                    {filteredData.length === 0 ? (
                                      <div className="text-center text-gray-500 py-8">
                                        <FaUser className="w-12 h-12 mx-auto text-gray-300 mb-2" />
                                        <p>No record found.</p>
                                      </div>
                                    ) : (
                                      filteredData.map((data) => (
                                        <GenericCard
                                          key={data.id}
                                          data={data}
                                          hospitalFields={[
                                         {
                                           key: "patient",
                                           icon: <FaUser />,
                                         },
                                         {
                                           key: "doctor",
                                           icon: <FaUserDoctor />,
                                         },
                                         
                                         {
                                           key: "date",
                                           icon: <FaCalendarAlt />,
                                         },
                                       ]}
                                       personalFields={[
                                         { key: "status", icon: <FaClock /> },
                                         { key: "department", icon: <FaBuilding /> },
                                       ]}
                                        />
                                      ))
                                    )}
                                  </div>
                  </div>

      {/* Apply for Appointment Modal */}
      {showModal && (
        <NewAppointmentModal
          setShowModal={setShowModal}
          submit={handleSubmit}
          appointmentForm={appointmentForm}
          handleInputChange={handleInputChange}
          departments={departments}
          getAvailableDoctors={getAvailableDoctors}
          getAvailableTimes={getAvailableTimes}
          minDate={minDate}
        />
      )}
    </div>
  );
};

export default PatientAppointmentList;
