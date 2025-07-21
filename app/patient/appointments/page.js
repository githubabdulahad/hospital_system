"use client";
import React, { useState, useContext } from 'react';
import { useRouter } from 'next/navigation';
import { SearchContext } from '../../../components/Context/SearchContext';
import { FaCalendarAlt, FaClock, FaUserMd, FaMapMarkerAlt, FaEye, FaPlus, FaFilter } from 'react-icons/fa';
import StatCard from '../../../components/compafterlogin/Common/StatCard';
import AppointmentDetailsModal from '../../../components/compafterlogin/Patient/AppointmenDetailsModal';

// Enhanced appointment data with more details
const appointmentData = [
  {
    id: 1,
    date: '2025-07-20',
    time: '10:30 AM',
    doctor: 'Dr. Sarah Johnson',
    department: 'Cardiology',
    type: 'Follow-up',
    status: 'Confirmed',
    location: 'Room 204, Second Floor',
    phone: '+1-555-0123',
    notes: 'Regular checkup for heart condition',
    duration: '30 minutes'
  },
  {
    id: 2,
    date: '2025-07-25',
    time: '02:15 PM',
    doctor: 'Dr. Michael Chen',
    department: 'Orthopedics',
    type: 'Consultation',
    status: 'Pending',
    location: 'Room 108, First Floor',
    phone: '+1-555-0124',
    notes: 'Knee pain consultation',
    duration: '45 minutes'
  },
  {
    id: 3,
    date: '2025-06-15',
    time: '09:00 AM',
    doctor: 'Dr. Emily Davis',
    department: 'General Medicine',
    type: 'Check-up',
    status: 'Completed',
    location: 'Room 301, Third Floor',
    phone: '+1-555-0125',
    notes: 'Annual health checkup',
    duration: '30 minutes'
  },
  {
    id: 4,
    date: '2025-06-10',
    time: '11:45 AM',
    doctor: 'Dr. Ahmed Rahman',
    department: 'Neurology',
    type: 'Follow-up',
    status: 'Completed',
    location: 'Room 205, Second Floor',
    phone: '+1-555-0126',
    notes: 'Migraine follow-up treatment',
    duration: '25 minutes'
  }
];

const daysShort = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

function getDaysInMonth(year, month) {
  return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfWeek(year, month) {
  return new Date(year, month, 1).getDay();
}

const PatientAppointments = () => {
  const { search } = useContext(SearchContext);
  const today = new Date();
  const [year, setYear] = useState(today.getFullYear());
  const [month, setMonth] = useState(today.getMonth());
  const [activeTab, setActiveTab] = useState('upcoming');
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showCalendar, setShowCalendar] = useState(true);
  const [filterStatus, setFilterStatus] = useState('All');
  const [filterDepartment, setFilterDepartment] = useState('All');

  const daysInMonth = getDaysInMonth(year, month);
  const firstDay = getFirstDayOfWeek(year, month);

  // Filter appointments based on active tab
  const filteredAppointments = appointmentData.filter(appointment => {
    const appointmentDate = new Date(appointment.date);
    const matchesSearch = 
      appointment.doctor.toLowerCase().includes(search.toLowerCase()) ||
      appointment.department.toLowerCase().includes(search.toLowerCase()) ||
      appointment.type.toLowerCase().includes(search.toLowerCase());
    
    const matchesStatus = filterStatus === 'All' || appointment.status === filterStatus;
    const matchesDepartment = filterDepartment === 'All' || appointment.department === filterDepartment;
    
    if (activeTab === 'upcoming') {
      return appointmentDate >= today && matchesSearch && matchesStatus && matchesDepartment;
    } else {
      return appointmentDate < today && matchesSearch && matchesStatus && matchesDepartment;
    }
  });

  // Get appointments for calendar view
  const calendarAppointments = appointmentData
    .filter(appointment => {
      const d = new Date(appointment.date);
      return d.getFullYear() === year && d.getMonth() === month;
    })
    .reduce((acc, appointment) => {
      const day = new Date(appointment.date).getDate();
      if (!acc[day]) acc[day] = [];
      acc[day].push(appointment);
      return acc;
    }, {});

  const departments = ['All', ...new Set(appointmentData.map(apt => apt.department))];
  const statuses = ['All', ...new Set(appointmentData.map(apt => apt.status))];

  const handlePrev = () => {
    if (month === 0) {
      setMonth(11);
      setYear(y => y - 1);
    } else {
      setMonth(m => m - 1);
    }
  };

  const handleNext = () => {
    if (month === 11) {
      setMonth(0);
      setYear(y => y + 1);
    } else {
      setMonth(m => m + 1);
    }
  };

  const handleViewAppointment = (appointment) => {
    setSelectedAppointment(appointment);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedAppointment(null);
  };

  const getStatusBadge = (status) => {
    const statusStyles = {
      Confirmed: "bg-green-100 text-green-800",
      Pending: "bg-yellow-100 text-yellow-800",
      Completed: "bg-blue-100 text-blue-800",
      Cancelled: "bg-red-100 text-red-800"
    };
    
    return (
      <span className={`px-2 py-1 text-xs font-medium rounded-full ${statusStyles[status] || 'bg-gray-100 text-gray-800'}`}>
        {status}
      </span>
    );
  };

  const statData = [
    {
      icon: <FaCalendarAlt className="w-5 h-5 text-blue-600" />,
      stat:appointmentData.length,
      label:'Total Appointments',
    },
    {
      icon:<FaClock className="w-5 h-5 text-green-600" />,
      stat: appointmentData.filter(apt => new Date(apt.date) >= today).length,
      label: 'Upcoming',
    },
    {
      icon: <FaUserMd className="w-5 h-5 text-purple-600" />,
      stat: new Set(appointmentData.map(apt => apt.doctor)).size,
      label: 'Doctors',
    },
    {
      icon: <span className="text-yellow-600 text-xl">📋</span>,
      stat: appointmentData.filter(apt => apt.status === 'Completed').length,
      label: 'Completed',
    }
  ]

  const router = useRouter();

  return (
    <div className="p-6" style={{ fontFamily: "'Gill Sans MT', 'Gill Sans', 'GillSans', 'Arial', 'sans-serif'" }}>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <span className="text-2xl mr-2">
            <FaCalendarAlt className="w-7 h-7 text-blue-500" />
          </span>
          <h1 className="text-2xl font-bold text-gray-800">My Appointments</h1>
          <span className="ml-3 text-sm text-gray-600">Manage your medical appointments</span>
        </div>
        <div className="flex items-center space-x-3">
          <button
            onClick={() => setShowCalendar(!showCalendar)}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              showCalendar ? 'bg-[#C0e6DA] text-[#0B2443]' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {showCalendar ? 'List View' : 'Calendar View'}
          </button>
          <button onClick={() => router.push('/patient/appointment-list')} className="bg-[#0B2443] hover:bg-blue-950 text-white px-4 py-2 rounded-lg font-medium flex items-center gap-2 transition-colors">
            <FaPlus className="w-4 h-4" />
            Book Appointment
          </button>
        </div>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        {statData.map((stat, index) => (
                  <StatCard icon={stat.icon} stat={stat.stat} label={stat.label} key={index} />
                ))}
      </div>

      {/* Calendar View */}
      {showCalendar && (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
          {/* Calendar Header */}
          <div className="flex items-center justify-between mb-6">
            <button
              onClick={handlePrev}
              className="text-2xl text-blue-500 hover:text-blue-700 hover:bg-blue-50 rounded-full w-10 h-10 flex items-center justify-center transition-colors"
            >
              ←
            </button>
            <h2 className="text-xl font-bold text-gray-800">
              {months[month]} {year}
            </h2>
            <button
              onClick={handleNext}
              className="text-2xl text-blue-500 hover:text-blue-700 hover:bg-blue-50 rounded-full w-10 h-10 flex items-center justify-center transition-colors"
            >
              →
            </button>
          </div>

          {/* Calendar Grid */}
          <div className="grid grid-cols-7 gap-2 mb-2">
            {daysShort.map(day => (
              <div key={day} className="text-center text-sm font-medium text-gray-500 py-2">
                {day}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-2">
            {Array(firstDay).fill(null).map((_, i) => (
              <div key={i} className="h-20"></div>
            ))}
            {Array.from({ length: daysInMonth }, (_, i) => {
              const day = i + 1;
              const isToday =
                year === today.getFullYear() &&
                month === today.getMonth() &&
                day === today.getDate();
              const dayAppointments = calendarAppointments[day] || [];
              
              return (
                <div
                  key={day}
                  className={`h-20 border rounded-lg p-1 cursor-pointer transition-colors ${
                    isToday ? 'bg-blue-50 border-blue-300' : 'hover:bg-gray-50'
                  }`}
                >
                  <div className={`text-sm font-medium ${isToday ? 'text-blue-600' : 'text-gray-700'}`}>
                    {day}
                  </div>
                  {dayAppointments.slice(0, 2).map((apt, idx) => (
                    <div
                      key={idx}
                      className="text-xs bg-blue-100 text-blue-800 rounded px-1 py-0.5 mt-1 truncate"
                      title={`${apt.time} - ${apt.doctor}`}
                    >
                      {apt.time}
                    </div>
                  ))}
                  {dayAppointments.length > 2 && (
                    <div className="text-xs text-gray-500 mt-1">+{dayAppointments.length - 2} more</div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Tab Navigation */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden mb-6">
        <div className="flex border-b border-gray-200">
          <button
            className={`px-6 py-3 font-medium text-sm ${
              activeTab === 'upcoming' 
                ? 'border-b-2 border-blue-500 text-blue-600 bg-blue-50' 
                : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab('upcoming')}
          >
            <FaClock className="w-4 h-4 inline mr-2" />
            Upcoming Appointments ({appointmentData.filter(apt => new Date(apt.date) >= today).length})
          </button>
          <button
            className={`px-6 py-3 font-medium text-sm ${
              activeTab === 'previous' 
                ? 'border-b-2 border-blue-500 text-blue-600 bg-blue-50' 
                : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab('previous')}
          >
            <FaCalendarAlt className="w-4 h-4 inline mr-2" />
            Previous Appointments ({appointmentData.filter(apt => new Date(apt.date) < today).length})
          </button>
        </div>

        {/* Filters */}
        <div className="p-4 bg-gray-50 border-b border-gray-200">
          <div className="flex items-center gap-4">
            <FaFilter className="w-4 h-4 text-gray-500" />
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">Status</label>
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="px-3 py-1 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {statuses.map(status => (
                  <option key={status} value={status}>{status}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">Department</label>
              <select
                value={filterDepartment}
                onChange={(e) => setFilterDepartment(e.target.value)}
                className="px-3 py-1 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {departments.map(dept => (
                  <option key={dept} value={dept}>{dept}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Appointments List */}
        <div className="p-6">
          {filteredAppointments.length === 0 ? (
            <div className="text-center py-8">
              <FaCalendarAlt className="w-16 h-16 mx-auto text-gray-300 mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No appointments found</h3>
              <p className="text-gray-500 mb-4">
                {activeTab === 'upcoming' ? 'You have no upcoming appointments.' : 'No previous appointments found.'}
              </p>
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-medium flex items-center gap-2 mx-auto transition-colors">
                <FaPlus className="w-4 h-4" />
                Book New Appointment
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredAppointments.map((appointment) => (
                <div key={appointment.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                        <FaUserMd className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{appointment.doctor}</h3>
                        <p className="text-sm text-gray-600">{appointment.department}</p>
                        <div className="flex items-center space-x-4 mt-1">
                          <span className="flex items-center text-sm text-gray-500">
                            <FaCalendarAlt className="w-3 h-3 mr-1" />
                            {new Date(appointment.date).toLocaleDateString()}
                          </span>
                          <span className="flex items-center text-sm text-gray-500">
                            <FaClock className="w-3 h-3 mr-1" />
                            {appointment.time}
                          </span>
                          <span className="flex items-center text-sm text-gray-500">
                            <FaMapMarkerAlt className="w-3 h-3 mr-1" />
                            {appointment.location}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="text-right">
                        <div className="mb-2">{getStatusBadge(appointment.status)}</div>
                        <p className="text-xs text-gray-500">{appointment.type}</p>
                      </div>
                      <button
                        onClick={() => handleViewAppointment(appointment)}
                        className="bg-[#0B2443] hover:bg-blue-900 text-white px-3 py-1 rounded text-xs flex items-center transition-colors"
                      >
                        <FaEye className="w-3 h-3 mr-1" />
                        View
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      {/* Appointment Details Modal */}
      {showModal && selectedAppointment && (
        <AppointmentDetailsModal selectedAppointment={selectedAppointment} handleCloseModal={handleCloseModal} getStatusBadge={getStatusBadge} />
      )}
    </div>
  );
};

export default PatientAppointments;
