"use client";
import { useContext, useState } from "react";
import { SearchContext } from "../../../components/Context/SearchContext";
import CommonTable from "../../../components/compafterlogin/Common/CommonTable";
import Toast from "../../../components/compafterlogin/Common/Toast";
import StatCard from "../../../components/compafterlogin/Common/StatCard";

const DeathReport = () => {
  const { search } = useContext(SearchContext);
  const [deaths] = useState([
    {
      id: 1,
      deathId: "DR001",
      patientName: "Robert Johnson",
      patientId: "PAT045",
      age: 78,
      gender: "Male",
      dateOfDeath: "2024-01-15",
      timeOfDeath: "03:45 AM",
      causeOfDeath: "Cardiac Arrest",
      primaryDiagnosis: "Coronary Artery Disease",
      attendingPhysician: "Dr. Michael Brown",
      locationOfDeath: "ICU-2",
      familyNotified: true,
      autopsy: false,
      deathCertificateIssued: true,
      burialPermit: true,
      nextOfKin: "Mary Johnson (Wife)",
      contactNumber: "+1-555-0678",
      notes: "Patient expired after prolonged cardiac issues, family present",
    },
    {
      id: 2,
      deathId: "DR002",
      patientName: "Eleanor Smith",
      patientId: "PAT067",
      age: 85,
      gender: "Female",
      dateOfDeath: "2024-01-14",
      timeOfDeath: "11:30 PM",
      causeOfDeath: "Respiratory Failure",
      primaryDiagnosis: "COPD",
      attendingPhysician: "Dr. Sarah Wilson",
      locationOfDeath: "General Ward",
      familyNotified: true,
      autopsy: false,
      deathCertificateIssued: true,
      burialPermit: false,
      nextOfKin: "James Smith (Son)",
      contactNumber: "+1-555-0789",
      notes: "Chronic respiratory condition, peaceful passing",
    },
    {
      id: 3,
      deathId: "DR003",
      patientName: "William Davis",
      patientId: "PAT023",
      age: 42,
      gender: "Male",
      dateOfDeath: "2024-01-13",
      timeOfDeath: "07:20 PM",
      causeOfDeath: "Trauma",
      primaryDiagnosis: "Multiple Injuries",
      attendingPhysician: "Dr. Emily Davis",
      locationOfDeath: "Emergency Room",
      familyNotified: true,
      autopsy: true,
      deathCertificateIssued: false,
      burialPermit: false,
      nextOfKin: "Susan Davis (Wife)",
      contactNumber: "+1-555-0890",
      notes: "Motor vehicle accident, autopsy required by law",
    },
    {
      id: 4,
      deathId: "DR004",
      patientName: "Margaret Wilson",
      patientId: "PAT089",
      age: 92,
      gender: "Female",
      dateOfDeath: "2024-01-12",
      timeOfDeath: "05:15 AM",
      causeOfDeath: "Natural Causes",
      primaryDiagnosis: "Advanced Age",
      attendingPhysician: "Dr. James Miller",
      locationOfDeath: "Private Room",
      familyNotified: true,
      autopsy: false,
      deathCertificateIssued: true,
      burialPermit: true,
      nextOfKin: "Robert Wilson (Son)",
      contactNumber: "+1-555-0901",
      notes: "Natural death due to advanced age, family comfortable with care",
    },
    {
      id: 5,
      deathId: "DR005",
      patientName: "Thomas Brown",
      patientId: "PAT034",
      age: 65,
      gender: "Male",
      dateOfDeath: "2024-01-11",
      timeOfDeath: "02:10 PM",
      causeOfDeath: "Cancer",
      primaryDiagnosis: "Metastatic Lung Cancer",
      attendingPhysician: "Dr. Lisa Anderson",
      locationOfDeath: "Oncology Ward",
      familyNotified: true,
      autopsy: false,
      deathCertificateIssued: true,
      burialPermit: true,
      nextOfKin: "Linda Brown (Wife)",
      contactNumber: "+1-555-0912",
      notes: "Terminal cancer patient, hospice care provided",
    },
    {
      id: 6,
      deathId: "DR006",
      patientName: "Helen Garcia",
      patientId: "PAT056",
      age: 71,
      gender: "Female",
      dateOfDeath: "2024-01-10",
      timeOfDeath: "09:40 AM",
      causeOfDeath: "Stroke",
      primaryDiagnosis: "Cerebrovascular Accident",
      attendingPhysician: "Dr. David Lee",
      locationOfDeath: "Neurology ICU",
      familyNotified: true,
      autopsy: false,
      deathCertificateIssued: false,
      burialPermit: false,
      nextOfKin: "Carlos Garcia (Husband)",
      contactNumber: "+1-555-0123",
      notes: "Massive stroke, unsuccessful resuscitation attempts",
    },
  ]);

  const [toast, setToast] = useState({ show: false, message: "", type: "success" });
  const [filterGender, setFilterGender] = useState("All");
  const [filterAutopsy, setFilterAutopsy] = useState("All");

  const filteredDeaths = deaths.filter((death) => {
    const matchesSearch = 
      death.patientName.toLowerCase().includes(search.toLowerCase()) ||
      death.patientId.toLowerCase().includes(search.toLowerCase()) ||
      death.deathId.toLowerCase().includes(search.toLowerCase()) ||
      death.attendingPhysician.toLowerCase().includes(search.toLowerCase()) ||
      death.causeOfDeath.toLowerCase().includes(search.toLowerCase());
    
    const matchesGender = filterGender === "All" || death.gender === filterGender;
    const matchesAutopsy = filterAutopsy === "All" || 
      (filterAutopsy === "Required" && death.autopsy) ||
      (filterAutopsy === "Not Required" && !death.autopsy);
    
    return matchesSearch && matchesGender && matchesAutopsy;
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

  const getAutopsyBadge = (required) => {
    return (
      <span className={`px-2 py-1 text-xs font-medium rounded-full ${required ? 'bg-orange-100 text-orange-800' : 'bg-green-100 text-green-800'}`}>
        {required ? 'Required' : 'Not Required'}
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
  const handlePrintReport = (death) => {
    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Death Report - ${death.deathId}</title>
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
              background: #fff3cd;
              padding: 20px;
              margin: 20px 0;
              border-radius: 8px;
              border: 1px solid #ffeaa7;
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
              <h2>Death Certificate Report</h2>
              <p>Report Generated: ${new Date().toLocaleDateString()}</p>
            </div>
            
            <div class="info-section">
              <h3>Deceased Information</h3>
              <div class="info-grid">
                <div>
                  <div class="info-item">
                    <span class="info-label">Death Report ID:</span>
                    <span class="info-value">${death.deathId}</span>
                  </div>
                  <div class="info-item">
                    <span class="info-label">Patient Name:</span>
                    <span class="info-value">${death.patientName}</span>
                  </div>
                  <div class="info-item">
                    <span class="info-label">Patient ID:</span>
                    <span class="info-value">${death.patientId}</span>
                  </div>
                  <div class="info-item">
                    <span class="info-label">Age:</span>
                    <span class="info-value">${death.age} years</span>
                  </div>
                  <div class="info-item">
                    <span class="info-label">Gender:</span>
                    <span class="info-value">${death.gender}</span>
                  </div>
                  <div class="info-item">
                    <span class="info-label">Date of Death:</span>
                    <span class="info-value">${death.dateOfDeath}</span>
                  </div>
                  <div class="info-item">
                    <span class="info-label">Time of Death:</span>
                    <span class="info-value">${death.timeOfDeath}</span>
                  </div>
                </div>
                <div>
                  <div class="info-item">
                    <span class="info-label">Cause of Death:</span>
                    <span class="info-value">${death.causeOfDeath}</span>
                  </div>
                  <div class="info-item">
                    <span class="info-label">Primary Diagnosis:</span>
                    <span class="info-value">${death.primaryDiagnosis}</span>
                  </div>
                  <div class="info-item">
                    <span class="info-label">Location of Death:</span>
                    <span class="info-value">${death.locationOfDeath}</span>
                  </div>
                  <div class="info-item">
                    <span class="info-label">Attending Physician:</span>
                    <span class="info-value">${death.attendingPhysician}</span>
                  </div>
                  <div class="info-item">
                    <span class="info-label">Autopsy Required:</span>
                    <span class="info-value">${death.autopsy ? 'Yes' : 'No'}</span>
                  </div>
                  <div class="info-item">
                    <span class="info-label">Death Certificate:</span>
                    <span class="info-value">${death.deathCertificateIssued ? 'Issued' : 'Pending'}</span>
                  </div>
                  <div class="info-item">
                    <span class="info-label">Burial Permit:</span>
                    <span class="info-value">${death.burialPermit ? 'Issued' : 'Pending'}</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="info-section">
              <h3>Next of Kin Information</h3>
              <div class="info-grid">
                <div>
                  <div class="info-item">
                    <span class="info-label">Next of Kin:</span>
                    <span class="info-value">${death.nextOfKin}</span>
                  </div>
                </div>
                <div>
                  <div class="info-item">
                    <span class="info-label">Contact Number:</span>
                    <span class="info-value">${death.contactNumber}</span>
                  </div>
                </div>
              </div>
              <div class="info-item" style="margin-top: 15px;">
                <span class="info-label">Family Notified:</span>
                <span class="info-value">${death.familyNotified ? 'Yes' : 'No'}</span>
              </div>
            </div>
            
            <div class="notes-section">
              <h3>Medical Notes</h3>
              <p>${death.notes}</p>
            </div>
            
            <div class="footer">
              <p>This is an official death report from the Hospital Management System.</p>
              <p>Generated on: ${new Date().toLocaleString()}</p>
              <p style="margin-top: 20px; font-weight: bold;">This document is confidential and should be handled with appropriate care.</p>
            </div>
          </div>
        </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
    showToast(`Death report for ${death.patientName} printed successfully`, "success");
  };

  // Statistics
  const totalDeaths = deaths.length;
  const maleDeaths = deaths.filter(d => d.gender === "Male").length;
  const femaleDeaths = deaths.filter(d => d.gender === "Female").length;
  const autopsyRequired = deaths.filter(d => d.autopsy).length;

  const statData = [
    {
      icon:<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-500">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>,
      stat: totalDeaths,
      label: "Total Deaths",
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-blue-500">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>,
      stat: maleDeaths,
      label:"Male Deaths",
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-pink-500">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>,
      stat: femaleDeaths,
      label:"Female Deaths",
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-orange-500">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3m0 4.5v.75m-6.75-3h13.5a2.25 2.25 0 002.25-2.25V7.5A2.25 2.25 0 0018.75 5H5.25A2.25 2.25 0 003 7.5v6a2.25 2.25 0 002.25 2.25z" />
      </svg>,
      stat: autopsyRequired,
      label:"Autopsy Required",
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
            className="w-7 h-7 text-gray-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
        </span>
        <h2 className="text-3xl font-semibold text-[#0b2443]">Death Reports</h2>
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
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            <option value="All">All Genders</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Autopsy</label>
          <select
            value={filterAutopsy}
            onChange={(e) => setFilterAutopsy(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            <option value="All">All Cases</option>
            <option value="Required">Autopsy Required</option>
            <option value="Not Required">Autopsy Not Required</option>
          </select>
        </div>
      </div>

      <CommonTable
        columns={[
          { label: "Death ID", key: "deathId" },
          { label: "Patient Name", key: "patientName" },
          { label: "Age", key: "age" },
          { 
            label: "Gender", 
            key: "gender", 
            render: (death) => getGenderBadge(death.gender)
          },
          { label: "Date of Death", key: "dateOfDeath" },
          { label: "Time", key: "timeOfDeath" },
          { label: "Cause of Death", key: "causeOfDeath" },
          { label: "Attending Physician", key: "attendingPhysician" },
          { 
            label: "Autopsy", 
            key: "autopsy", 
            render: (death) => getAutopsyBadge(death.autopsy)
          },
          { 
            label: "Certificate", 
            key: "deathCertificateIssued", 
            render: (death) => getCertificateStatus(death.deathCertificateIssued)
          },
        ]}
        data={filteredDeaths}
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
            onClick: (death) => handlePrintReport(death),
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

export default DeathReport;
