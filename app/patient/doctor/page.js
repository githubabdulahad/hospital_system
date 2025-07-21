"use client";
import React, { useContext, useState } from 'react';
import { SearchContext } from '../../../components/Context/SearchContext';
import { FaEye, FaPhone, FaMapMarkerAlt, FaStethoscope, FaCalendarAlt, FaUserMd } from 'react-icons/fa';
import StatCard from '../../../components/compafterlogin/Common/StatCard';
import DoctorsCard from '../../../components/compafterlogin/Patient/DoctorsCard';
import PatientDoctorProfileModal from '../../../components/compafterlogin/Patient/PatientDoctorProfileModal';

// These are doctors currently treating/attending this patient
const myDoctors = [
  {
    id: 1,
    name: 'Dr. Micheal Pieterson',
    department: 'Cardiology',
    specialization: 'Heart Surgery, Cardiac Care',
    address: 'Cardiac Wing, Room 204',
    phone: '+984-46-9388638',
    email: 'micheal.pew@hospital.com',
    experience: '15 years',
    education: 'MD - Cardiology, Harvard Medical School',
    nextAppointment: '2024-07-20 at 10:30 AM',
    lastVisit: '2024-07-15',
    treatmentFor: 'Essential Hypertension',
    status: 'Primary Doctor',
    consultationFee: '$150',
    rating: 4.8,
    totalReviews: 245,
    profile: 'Dr. Micheal Pew is your primary cardiologist managing your heart condition. He has been overseeing your treatment since your first visit.',
    image: '/images/doctors/doctor1.jpg'
  },
  {
    id: 2,
    name: 'Dr. Sarah Johnson',
    department: 'Internal Medicine',
    specialization: 'General Medicine, Diabetes Care',
    address: 'Internal Medicine, Room 108',
    phone: '+555-123-4567',
    email: 'sarah.johnson@hospital.com',
    experience: '10 years',
    education: 'MD - Internal Medicine, Yale University',
    nextAppointment: '2024-07-25 at 2:00 PM',
    lastVisit: '2024-07-10',
    treatmentFor: 'Diabetes Management',
    status: 'Consulting Doctor',
    consultationFee: '$100',
    rating: 4.9,
    totalReviews: 312,
    profile: 'Dr. Sarah Johnson is managing your diabetes care and overall health monitoring. She works closely with your primary cardiologist.',
    image: '/images/doctors/doctor3.jpg'
  },
  {
    id: 3,
    name: 'Dr. Ahmed Rahman',
    department: 'Neurology',
    specialization: 'Brain Surgery, Neurological Disorders',
    address: 'Neuroscience Wing, Room 301',
    phone: '+777-888-9999',
    email: 'ahmed.rahman@hospital.com',
    experience: '18 years',
    education: 'MD - Neurology, Stanford Medical School',
    nextAppointment: '2024-08-02 at 11:00 AM',
    lastVisit: '2024-06-28',
    treatmentFor: 'Migraine Consultation',
    status: 'Specialist Consultant',
    consultationFee: '$200',
    rating: 4.7,
    totalReviews: 156,
    profile: 'Dr. Ahmed Rahman was consulted for your migraine episodes and provides specialist neurological care when needed.',
    image: '/images/doctors/doctor4.jpg'
  }
];

export default function MyDoctors() {
  const { search } = useContext(SearchContext);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [filterStatus, setFilterStatus] = useState("All");

  const statuses = ["All", ...new Set(myDoctors.map(doc => doc.status))];

  const filteredDoctors = myDoctors.filter((doc) => {
    const matchesSearch = 
      doc.name.toLowerCase().includes(search.toLowerCase()) ||
      doc.department.toLowerCase().includes(search.toLowerCase()) ||
      doc.specialization.toLowerCase().includes(search.toLowerCase()) ||
      doc.treatmentFor.toLowerCase().includes(search.toLowerCase());
    
    const matchesStatus = filterStatus === "All" || doc.status === filterStatus;
    
    return matchesSearch && matchesStatus;
  });

  const handleViewProfile = (doc) => {
    setSelectedDoctor(doc);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedDoctor(null);
  };
  
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <span key={i} className="text-yellow-400">★</span>
      );
    }

    if (hasHalfStar) {
      stars.push(
        <span key="half" className="text-yellow-400">☆</span>
      );
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <span key={`empty-${i}`} className="text-gray-300">☆</span>
      );
    }

    return stars;
  };

  const getStatusBadge = (status) => {
    const statusStyles = {
      "Primary Doctor": "bg-blue-100 text-blue-800",
      "Consulting Doctor": "bg-green-100 text-green-800",
      "Specialist Consultant": "bg-purple-100 text-purple-800"
    };
    
    return (
      <span className={`px-2 py-1 text-xs font-medium rounded-full ${statusStyles[status] || 'bg-gray-100 text-gray-800'}`}>
        {status}
      </span>
    );
  };

  const statData =[
    {
      icon:<FaUserMd className="w-5 h-5 text-[#0B2443]" />,
      stat: myDoctors.length,
      label: "My Doctors"      
    },
    {
      icon:<svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>,
      stat: new Set(myDoctors.map(d => d.department)).size,
      label: "Departments"
    },
    {
      icon:<FaCalendarAlt className="w-5 h-5 text-yellow-600" />,
      stat: myDoctors.filter(d => d.nextAppointment).length,
      label: "Upcoming Appointments"
    },
    {
      icon:<span className="text-yellow-500 text-2xl">★</span>,
      stat: (myDoctors.reduce((sum, doc) => sum + doc.rating, 0) / myDoctors.length).toFixed(1),
      label: "Avg Rating"
    }
  ]

  return (
    <div className="p-6" style={{ fontFamily: "'Gill Sans MT', 'Gill Sans', 'GillSans', 'Arial', 'sans-serif'" }}>
      {/* Header */}
      <div className="flex items-center mb-6">
        <span className="text-2xl mr-2">
          <FaUserMd className="w-7 h-7 text-blue-500" />
        </span>
        <h1 className="text-2xl font-bold text-gray-800">My Doctors</h1>
        <span className="ml-3 text-sm text-gray-600">Healthcare team currently treating you</span>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        {statData.map((stat, index) => (
                  <StatCard icon={stat.icon} stat={stat.stat} label={stat.label} key={index} />
                ))}
      </div>

      {/* Filter */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Filter by Role</label>
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {statuses.map(status => (
              <option key={status} value={status}>{status}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Doctors Grid */}
      <DoctorsCard getStatusBadge={getStatusBadge} renderStars={renderStars} handleViewProfile={handleViewProfile} filteredDoctors={filteredDoctors} />

      {/* Doctor Profile Modal */}
      {showModal && (
        <PatientDoctorProfileModal selectedDoctor={selectedDoctor} renderStars={renderStars} handleCloseModal={handleCloseModal}  getStatusBadge={getStatusBadge} />
      )}
    </div>
  );
}