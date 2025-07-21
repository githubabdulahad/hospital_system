"use client";
import { useContext, useState } from "react";
import { SearchContext } from "../../../components/Context/SearchContext";
import CommonTable from "../../../components/compafterlogin/Common/CommonTable";
import Toast from "../../../components/compafterlogin/Common/Toast";
import StatCard from "../../../components/compafterlogin/Common/StatCard";

const BirthReport = () => {
  const { search } = useContext(SearchContext);
  const [births] = useState([
    {
      id: 1,
      birthId: "BR001",
      babyName: "Baby Smith",
      motherName: "Alice Smith",
      fatherName: "John Smith",
      dateOfBirth: "2024-01-15",
      timeOfBirth: "08:30 AM",
      weight: "3.2 kg",
      height: "50 cm",
      gender: "Female",
      deliveryType: "Normal",
      attendingDoctor: "Dr. Sarah Wilson",
      midwife: "Nurse Mary Johnson",
      complications: "None",
      apgarScore: "9/10",
      bloodType: "O+",
      birthCertificateIssued: true,
      roomNumber: "MAT-201",
      notes: "Healthy baby, normal delivery, no complications",
    },
    {
      id: 2,
      birthId: "BR002",
      babyName: "Baby Johnson",
      motherName: "Emma Johnson",
      fatherName: "Michael Johnson",
      dateOfBirth: "2024-01-14",
      timeOfBirth: "02:15 PM",
      weight: "2.8 kg",
      height: "48 cm",
      gender: "Male",
      deliveryType: "C-Section",
      attendingDoctor: "Dr. Lisa Anderson",
      midwife: "Nurse Jennifer Davis",
      complications: "Cord around neck",
      apgarScore: "8/10",
      bloodType: "A+",
      birthCertificateIssued: true,
      roomNumber: "MAT-202",
      notes: "Emergency C-section due to cord complications, baby stable",
    },
    {
      id: 3,
      birthId: "BR003",
      babyName: "Baby Wilson",
      motherName: "Lisa Wilson",
      fatherName: "David Wilson",
      dateOfBirth: "2024-01-13",
      timeOfBirth: "11:45 PM",
      weight: "3.5 kg",
      height: "52 cm",
      gender: "Female",
      deliveryType: "Normal",
      attendingDoctor: "Dr. Emily Davis",
      midwife: "Nurse Rebecca Miller",
      complications: "None",
      apgarScore: "10/10",
      bloodType: "B+",
      birthCertificateIssued: false,
      roomNumber: "MAT-203",
      notes: "Large baby, normal delivery, excellent health",
    },
    {
      id: 4,
      birthId: "BR004",
      babyName: "Baby Brown",
      motherName: "Rachel Brown",
      fatherName: "Tom Brown",
      dateOfBirth: "2024-01-12",
      timeOfBirth: "06:20 AM",
      weight: "2.9 kg",
      height: "49 cm",
      gender: "Male",
      deliveryType: "Assisted",
      attendingDoctor: "Dr. James Miller",
      midwife: "Nurse Anna Thompson",
      complications: "Prolonged labor",
      apgarScore: "7/10",
      bloodType: "AB+",
      birthCertificateIssued: true,
      roomNumber: "MAT-201",
      notes: "Vacuum-assisted delivery, baby required brief monitoring",
    },
    {
      id: 5,
      birthId: "BR005",
      babyName: "Baby Davis",
      motherName: "Sophie Davis",
      fatherName: "Mark Davis",
      dateOfBirth: "2024-01-11",
      timeOfBirth: "04:10 PM",
      weight: "3.1 kg",
      height: "51 cm",
      gender: "Female",
      deliveryType: "Normal",
      attendingDoctor: "Dr. Sarah Wilson",
      midwife: "Nurse Helen Clark",
      complications: "None",
      apgarScore: "9/10",
      bloodType: "O-",
      birthCertificateIssued: true,
      roomNumber: "MAT-204",
      notes: "Twin birth - first baby, normal delivery",
    },
    {
      id: 6,
      birthId: "BR006",
      babyName: "Baby Davis (Twin)",
      motherName: "Sophie Davis",
      fatherName: "Mark Davis",
      dateOfBirth: "2024-01-11",
      timeOfBirth: "04:25 PM",
      weight: "2.7 kg",
      height: "47 cm",
      gender: "Male",
      deliveryType: "Normal",
      attendingDoctor: "Dr. Sarah Wilson",
      midwife: "Nurse Helen Clark",
      complications: "None",
      apgarScore: "8/10",
      bloodType: "O-",
      birthCertificateIssued: false,
      roomNumber: "MAT-204",
      notes: "Twin birth - second baby, slightly smaller, healthy",
    },
  ]);

  const [toast, setToast] = useState({ show: false, message: "", type: "success" });
  const [filterGender, setFilterGender] = useState("All");
  const [filterDeliveryType, setFilterDeliveryType] = useState("All");

  const filteredBirths = births.filter((birth) => {
    const matchesSearch = 
      birth.babyName.toLowerCase().includes(search.toLowerCase()) ||
      birth.motherName.toLowerCase().includes(search.toLowerCase()) ||
      birth.fatherName.toLowerCase().includes(search.toLowerCase()) ||
      birth.birthId.toLowerCase().includes(search.toLowerCase()) ||
      birth.attendingDoctor.toLowerCase().includes(search.toLowerCase());
    
    const matchesGender = filterGender === "All" || birth.gender === filterGender;
    const matchesDeliveryType = filterDeliveryType === "All" || birth.deliveryType === filterDeliveryType;
    
    return matchesSearch && matchesGender && matchesDeliveryType;
  });

  const showToast = (message, type = "success") => {
    setToast({ show: true, message, type });
  };

  const hideToast = () => {
    setToast({ show: false, message: "", type: "success" });
  };

  const getGenderBadge = (gender) => {
    const genderStyles = {
      Female: "bg-pink-100 text-pink-800",
      Male: "bg-blue-100 text-blue-800",
    };
    
    return (
      <span className={`px-2 py-1 text-xs font-medium rounded-full ${genderStyles[gender] || 'bg-gray-100 text-gray-800'}`}>
        {gender}
      </span>
    );
  };

  const getDeliveryTypeBadge = (type) => {
    const typeStyles = {
      Normal: "bg-green-100 text-green-800",
      "C-Section": "bg-orange-100 text-orange-800",
      Assisted: "bg-yellow-100 text-yellow-800",
    };
    
    return (
      <span className={`px-2 py-1 text-xs font-medium rounded-full ${typeStyles[type] || 'bg-gray-100 text-gray-800'}`}>
        {type}
      </span>
    );
  };

  const getCertificateStatus = (issued) => {
    return (
      <span className={`px-2 py-1 text-xs font-medium rounded-full ${issued ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
        {issued ? 'Issued' : 'Pending'}
      </span>
    );
  };

  // Print functionality
  const handlePrintReport = (birth) => {
    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Birth Report - ${birth.birthId}</title>
          <style>
            body { 
              font-family: Arial, sans-serif; 
              margin: 0; 
              padding: 20px; 
              background: white;
            }
            .report-container {
              max-width: 800px;
              margin: 0 auto;
              background: white;
            }
            .header {
              text-align: center;
              margin-bottom: 30px;
              padding: 20px;
              border-bottom: 2px solid #232946;
            }
            .header h1 {
              margin: 0;
              color: #232946;
              font-size: 28px;
            }
            .header h2 {
              margin: 10px 0 0 0;
              color: #666;
              font-size: 18px;
            }
            .info-section {
              margin: 20px 0;
              padding: 15px;
              background: #f8f9fa;
              border-left: 4px solid #232946;
            }
            .info-grid {
              display: grid;
              grid-template-columns: 1fr 1fr;
              gap: 15px;
              margin: 20px 0;
            }
            .info-item {
              display: flex;
              justify-content: space-between;
              padding: 8px 0;
              border-bottom: 1px solid #eee;
            }
            .info-label {
              font-weight: bold;
              color: #555;
            }
            .info-value {
              color: #333;
            }
            .notes-section {
              background: #fce4ec;
              padding: 20px;
              margin: 20px 0;
              border-radius: 8px;
            }
            .footer {
              margin-top: 40px;
              text-align: center;
              color: #666;
              font-size: 12px;
              border-top: 1px solid #ddd;
              padding-top: 20px;
            }
            @media print {
              body { margin: 0; }
            }
          </style>
        </head>
        <body>
          <div class="report-container">
            <div class="header">
              <h1>Hospital Management System</h1>
              <h2>Birth Report</h2>
              <p>Report Generated: ${new Date().toLocaleDateString()}</p>
            </div>
            
            <div class="info-section">
              <h3>Baby Information</h3>
              <div class="info-grid">
                <div>
                  <div class="info-item">
                    <span class="info-label">Birth ID:</span>
                    <span class="info-value">${birth.birthId}</span>
                  </div>
                  <div class="info-item">
                    <span class="info-label">Baby Name:</span>
                    <span class="info-value">${birth.babyName}</span>
                  </div>
                  <div class="info-item">
                    <span class="info-label">Gender:</span>
                    <span class="info-value">${birth.gender}</span>
                  </div>
                  <div class="info-item">
                    <span class="info-label">Date of Birth:</span>
                    <span class="info-value">${birth.dateOfBirth}</span>
                  </div>
                  <div class="info-item">
                    <span class="info-label">Time of Birth:</span>
                    <span class="info-value">${birth.timeOfBirth}</span>
                  </div>
                  <div class="info-item">
                    <span class="info-label">Weight:</span>
                    <span class="info-value">${birth.weight}</span>
                  </div>
                  <div class="info-item">
                    <span class="info-label">Height:</span>
                    <span class="info-value">${birth.height}</span>
                  </div>
                </div>
                <div>
                  <div class="info-item">
                    <span class="info-label">Blood Type:</span>
                    <span class="info-value">${birth.bloodType}</span>
                  </div>
                  <div class="info-item">
                    <span class="info-label">APGAR Score:</span>
                    <span class="info-value">${birth.apgarScore}</span>
                  </div>
                  <div class="info-item">
                    <span class="info-label">Delivery Type:</span>
                    <span class="info-value">${birth.deliveryType}</span>
                  </div>
                  <div class="info-item">
                    <span class="info-label">Room Number:</span>
                    <span class="info-value">${birth.roomNumber}</span>
                  </div>
                  <div class="info-item">
                    <span class="info-label">Complications:</span>
                    <span class="info-value">${birth.complications}</span>
                  </div>
                  <div class="info-item">
                    <span class="info-label">Certificate Status:</span>
                    <span class="info-value">${birth.birthCertificateIssued ? 'Issued' : 'Pending'}</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="info-section">
              <h3>Parents Information</h3>
              <div class="info-grid">
                <div>
                  <div class="info-item">
                    <span class="info-label">Mother Name:</span>
                    <span class="info-value">${birth.motherName}</span>
                  </div>
                </div>
                <div>
                  <div class="info-item">
                    <span class="info-label">Father Name:</span>
                    <span class="info-value">${birth.fatherName}</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="info-section">
              <h3>Medical Staff</h3>
              <div class="info-grid">
                <div>
                  <div class="info-item">
                    <span class="info-label">Attending Doctor:</span>
                    <span class="info-value">${birth.attendingDoctor}</span>
                  </div>
                </div>
                <div>
                  <div class="info-item">
                    <span class="info-label">Midwife:</span>
                    <span class="info-value">${birth.midwife}</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="notes-section">
              <h3>Medical Notes</h3>
              <p>${birth.notes}</p>
            </div>
            
            <div class="footer">
              <p>This is an official birth report from the Hospital Management System.</p>
              <p>Generated on: ${new Date().toLocaleString()}</p>
            </div>
          </div>
        </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
    showToast(`Birth report for ${birth.birthId} printed successfully`, "success");
  };

  // Statistics
  const totalBirths = births.length;
  const maleCount = births.filter(b => b.gender === "Male").length;
  const femaleCount = births.filter(b => b.gender === "Female").length;
  const certificatesIssued = births.filter(b => b.birthCertificateIssued).length;

  const statData = [{
    icon: (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-green-600"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" /></svg>),
    stat: totalBirths,
    label: "Total Births"
  },
    {
      icon: (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-blue-600"><path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>),
      stat: maleCount,
      label:"Male Babies"
    },
    {
      icon: (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-pink-600"><path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>),
      stat: femaleCount,
      label:"Female Babies"
      },
    {
      icon: (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-purple-600"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" /></svg>),
      stat: certificatesIssued,
      label: "Certificates Issued"
    }
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
            className="w-7 h-7 text-pink-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
            />
          </svg>
        </span>
        <h2 className="text-3xl font-semibold text-[#0b2443]">Birth Reports</h2>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        {statData.map((stat, index) => (
                  <StatCard icon={stat.icon} stat={stat.stat} label={stat.label} key={index} />
                ))}
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 mb-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
          <select
            value={filterGender}
            onChange={(e) => setFilterGender(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
          >
            <option value="All">All Genders</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Delivery Type</label>
          <select
            value={filterDeliveryType}
            onChange={(e) => setFilterDeliveryType(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
          >
            <option value="All">All Types</option>
            <option value="Normal">Normal</option>
            <option value="C-Section">C-Section</option>
            <option value="Assisted">Assisted</option>
          </select>
        </div>
      </div>

      <CommonTable
        columns={[
          { label: "Birth ID", key: "birthId" },
          { label: "Baby Name", key: "babyName" },
          { label: "Mother", key: "motherName" },
          { label: "Date of Birth", key: "dateOfBirth" },
          { label: "Time", key: "timeOfBirth" },
          { label: "Weight", key: "weight" },
          { 
            label: "Gender", 
            key: "gender", 
            render: (birth) => getGenderBadge(birth.gender)
          },
          { 
            label: "Delivery Type", 
            key: "deliveryType", 
            render: (birth) => getDeliveryTypeBadge(birth.deliveryType)
          },
          { label: "Doctor", key: "attendingDoctor" },
          { 
            label: "Certificate", 
            key: "birthCertificateIssued", 
            render: (birth) => getCertificateStatus(birth.birthCertificateIssued)
          },
        ]}
        data={filteredBirths}
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
                <path d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
              </svg>
            ),
            onClick: (birth) => handlePrintReport(birth),
            className: "bg-gray-500 hover:bg-gray-600 text-white px-3 py-1 rounded text-xs flex items-center transition-colors",
            title: "Print Report"
          },
        ]}
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

export default BirthReport;
