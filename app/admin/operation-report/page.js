"use client";
import { useContext, useState } from "react";
import { SearchContext } from "../../../components/Context/SearchContext";
import CommonTable from "../../../components/compafterlogin/Common/CommonTable";
import Toast from "../../../components/compafterlogin/Common/Toast";
import StatCard from "../../../components/compafterlogin/Common/StatCard";
import { FaClock, FaDownload, FaHospital, FaPrint, FaStethoscope, FaUser } from "react-icons/fa";
import { FaBuilding, FaVenusMars } from "react-icons/fa6";
import GenericCard from "../../../components/compafterlogin/Common/GenericCard";

const OperationReport = () => {
  const { search } = useContext(SearchContext);
  const [operations] = useState([
    {
      id: 1,
      operationId: "OP001",
      patientName: "Alice Smith",
      patientId: "PAT001",
      surgeonName: "Dr. John Doe",
      operationType: "Appendectomy",
      operationDate: "2024-01-15",
      startTime: "09:00 AM",
      endTime: "11:30 AM",
      duration: "2h 30m",
      operationRoom: "OR-1",
      anesthesiaType: "General",
      anesthesiologist: "Dr. Sarah Wilson",
      status: "Completed",
      outcome: "Successful",
      complications: "None",
      notes: "Routine appendectomy, no complications observed",
      postOpInstructions: "Bed rest for 24 hours, monitor vital signs",
    },
    {
      id: 2,
      operationId: "OP002",
      patientName: "Bob Johnson",
      patientId: "PAT002",
      surgeonName: "Dr. Michael Brown",
      operationType: "Cardiac Bypass",
      operationDate: "2024-01-14",
      startTime: "07:00 AM",
      endTime: "02:15 PM",
      duration: "7h 15m",
      operationRoom: "OR-2",
      anesthesiaType: "General",
      anesthesiologist: "Dr. Emily Davis",
      status: "Completed",
      outcome: "Successful",
      complications: "Minor bleeding, controlled",
      notes: "Triple vessel bypass, patient stable post-operation",
      postOpInstructions: "ICU monitoring for 48 hours, cardiac rehabilitation",
    },
    {
      id: 3,
      operationId: "OP003",
      patientName: "Jane Doe",
      patientId: "PAT003",
      surgeonName: "Dr. Lisa Anderson",
      operationType: "Knee Replacement",
      operationDate: "2024-01-13",
      startTime: "10:30 AM",
      endTime: "01:45 PM",
      duration: "3h 15m",
      operationRoom: "OR-3",
      anesthesiaType: "Spinal",
      anesthesiologist: "Dr. James Miller",
      status: "Completed",
      outcome: "Successful",
      complications: "None",
      notes: "Total knee replacement, prosthetic implanted successfully",
      postOpInstructions: "Physical therapy in 48 hours, pain management protocol",
    },
    {
      id: 4,
      operationId: "OP004",
      patientName: "Robert Davis",
      patientId: "PAT004",
      surgeonName: "Dr. David Lee",
      operationType: "Gallbladder Removal",
      operationDate: "2024-01-12",
      startTime: "02:00 PM",
      endTime: "03:30 PM",
      duration: "1h 30m",
      operationRoom: "OR-1",
      anesthesiaType: "General",
      anesthesiologist: "Dr. Sarah Wilson",
      status: "In Progress",
      outcome: "Pending",
      complications: "None so far",
      notes: "Laparoscopic cholecystectomy in progress",
      postOpInstructions: "To be determined post-operation",
    },
    {
      id: 5,
      operationId: "OP005",
      patientName: "Emma Wilson",
      patientId: "PAT005",
      surgeonName: "Dr. Anna Thompson",
      operationType: "Cataract Surgery",
      operationDate: "2024-01-11",
      startTime: "11:00 AM",
      endTime: "12:15 PM",
      duration: "1h 15m",
      operationRoom: "OR-4",
      anesthesiaType: "Local",
      anesthesiologist: "Dr. Mark Johnson",
      status: "Completed",
      outcome: "Successful",
      complications: "None",
      notes: "Bilateral cataract extraction with IOL implantation",
      postOpInstructions: "Eye drops as prescribed, follow-up in 1 week",
    },
    {
      id: 6,
      operationId: "OP006",
      patientName: "Tom Brown",
      patientId: "PAT006",
      surgeonName: "Dr. Rachel Green",
      operationType: "Hip Fracture Repair",
      operationDate: "2024-01-10",
      startTime: "08:30 AM",
      endTime: "11:00 AM",
      duration: "2h 30m",
      operationRoom: "OR-2",
      anesthesiaType: "General",
      anesthesiologist: "Dr. Emily Davis",
      status: "Completed",
      outcome: "Complicated",
      complications: "Bone fragment displacement during procedure",
      notes: "Additional fixation required, extended surgery time",
      postOpInstructions: "Extended bed rest, orthopedic follow-up in 48 hours",
    },
  ]);

  const [toast, setToast] = useState({ show: false, message: "", type: "success" });
  const [filterStatus, setFilterStatus] = useState("All");
  const [filterOutcome, setFilterOutcome] = useState("All");

  const filteredOperations = operations.filter((operation) => {
    const matchesSearch = 
      operation.patientName.toLowerCase().includes(search.toLowerCase()) ||
      operation.operationId.toLowerCase().includes(search.toLowerCase()) ||
      operation.surgeonName.toLowerCase().includes(search.toLowerCase()) ||
      operation.operationType.toLowerCase().includes(search.toLowerCase()) ||
      operation.operationRoom.toLowerCase().includes(search.toLowerCase());
    
    const matchesStatus = filterStatus === "All" || operation.status === filterStatus;
    const matchesOutcome = filterOutcome === "All" || operation.outcome === filterOutcome;
    
    return matchesSearch && matchesStatus && matchesOutcome;
  });

  const showToast = (message, type = "success") => {
    setToast({ show: true, message, type });
  };

  const hideToast = () => {
    setToast({ show: false, message: "", type: "success" });
  };

  const getStatusBadge = (status) => {
    const statusStyles = {
      Completed: "bg-green-100 text-green-800",
      "In Progress": "bg-blue-100 text-blue-800",
      Scheduled: "bg-yellow-100 text-yellow-800",
      Cancelled: "bg-red-100 text-red-800",
    };
    
    return (
      <span className={`px-2 py-1 text-xs font-medium rounded-full ${statusStyles[status] || 'bg-gray-100 text-gray-800'}`}>
        {status}
      </span>
    );
  };

  const getOutcomeBadge = (outcome) => {
    const outcomeStyles = {
      Successful: "bg-green-100 text-green-800",
      Complicated: "bg-orange-100 text-orange-800",
      Failed: "bg-red-100 text-red-800",
      Pending: "bg-gray-100 text-gray-800",
    };
    
    return (
      <span className={`px-2 py-1 text-xs font-medium rounded-full ${outcomeStyles[outcome] || 'bg-gray-100 text-gray-800'}`}>
        {outcome}
      </span>
    );
  };

  // Print functionality
  const handlePrintReport = (operation) => {
    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Operation Report - ${operation.operationId}</title>
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
            .status-badge {
              display: inline-block;
              padding: 4px 12px;
              border-radius: 20px;
              font-size: 12px;
              font-weight: bold;
              background: #d4edda;
              color: #155724;
            }
            .outcome-badge {
              display: inline-block;
              padding: 4px 12px;
              border-radius: 20px;
              font-size: 12px;
              font-weight: bold;
              background: ${operation.outcome === 'Successful' ? '#d4edda' : operation.outcome === 'Complicated' ? '#fff3cd' : '#f8d7da'};
              color: ${operation.outcome === 'Successful' ? '#155724' : operation.outcome === 'Complicated' ? '#856404' : '#721c24'};
            }
            .notes-section {
              background: #e8f5e8;
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
              <h2>Operation Report</h2>
              <p>Report Generated: ${new Date().toLocaleDateString()}</p>
            </div>
            
            <div class="info-section">
              <h3>Operation Information</h3>
              <div class="info-grid">
                <div>
                  <div class="info-item">
                    <span class="info-label">Operation ID:</span>
                    <span class="info-value">${operation.operationId}</span>
                  </div>
                  <div class="info-item">
                    <span class="info-label">Patient Name:</span>
                    <span class="info-value">${operation.patientName}</span>
                  </div>
                  <div class="info-item">
                    <span class="info-label">Patient ID:</span>
                    <span class="info-value">${operation.patientId}</span>
                  </div>
                  <div class="info-item">
                    <span class="info-label">Operation Type:</span>
                    <span class="info-value">${operation.operationType}</span>
                  </div>
                  <div class="info-item">
                    <span class="info-label">Operation Date:</span>
                    <span class="info-value">${operation.operationDate}</span>
                  </div>
                  <div class="info-item">
                    <span class="info-label">Operation Room:</span>
                    <span class="info-value">${operation.operationRoom}</span>
                  </div>
                </div>
                <div>
                  <div class="info-item">
                    <span class="info-label">Surgeon:</span>
                    <span class="info-value">${operation.surgeonName}</span>
                  </div>
                  <div class="info-item">
                    <span class="info-label">Anesthesiologist:</span>
                    <span class="info-value">${operation.anesthesiologist}</span>
                  </div>
                  <div class="info-item">
                    <span class="info-label">Anesthesia Type:</span>
                    <span class="info-value">${operation.anesthesiaType}</span>
                  </div>
                  <div class="info-item">
                    <span class="info-label">Start Time:</span>
                    <span class="info-value">${operation.startTime}</span>
                  </div>
                  <div class="info-item">
                    <span class="info-label">End Time:</span>
                    <span class="info-value">${operation.endTime}</span>
                  </div>
                  <div class="info-item">
                    <span class="info-label">Duration:</span>
                    <span class="info-value">${operation.duration}</span>
                  </div>
                </div>
              </div>
              
              <div class="info-item" style="margin-top: 15px;">
                <span class="info-label">Status:</span>
                <span class="info-value">
                  <span class="status-badge">${operation.status}</span>
                </span>
              </div>
              
              <div class="info-item">
                <span class="info-label">Outcome:</span>
                <span class="info-value">
                  <span class="outcome-badge">${operation.outcome}</span>
                </span>
              </div>
              
              <div class="info-item">
                <span class="info-label">Complications:</span>
                <span class="info-value">${operation.complications}</span>
              </div>
            </div>
            
            <div class="notes-section">
              <h3>Operation Notes</h3>
              <p>${operation.notes}</p>
              
              <h4 style="margin-top: 20px;">Post-Operation Instructions</h4>
              <p>${operation.postOpInstructions}</p>
            </div>
            
            <div class="footer">
              <p>This is a computer-generated report and does not require a signature.</p>
              <p>Generated on: ${new Date().toLocaleString()}</p>
            </div>
          </div>
        </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
    showToast(`Operation report for ${operation.operationId} printed successfully`, "success");
  };

  // Statistics
  const totalOperations = operations.length;
  const completedOperations = operations.filter(op => op.status === "Completed").length;
  const successfulOperations = operations.filter(op => op.outcome === "Successful").length;
  const inProgressOperations = operations.filter(op => op.status === "In Progress").length;

  const statData = [
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6 text-blue-600"><path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>,
      stat: totalOperations,  
      label: "Total Operations",
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6 text-green-600"><path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>,
      stat: completedOperations,
      label: "Completed Operations",
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6 text-yellow-600"><path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>,
      stat: successfulOperations,
      label: "Successful Operations",
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6 text-blue-600"><path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>,
      stat: inProgressOperations,
      label: "In Progress Operations",
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
            className="w-7 h-7 text-blue-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V8.25m-9 6h9m-9 0a3 3 0 01-3-3V9a3 3 0 013-3h9a3 3 0 013 3v6a3 3 0 01-3 3m-9 0h9"
            />
          </svg>
        </span>
        <h2 className="text-3xl font-semibold text-[#0b2443]">Operation Reports</h2>
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
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="All">All Status</option>
            <option value="Completed">Completed</option>
            <option value="In Progress">In Progress</option>
            <option value="Scheduled">Scheduled</option>
            <option value="Cancelled">Cancelled</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Outcome</label>
          <select
            value={filterOutcome}
            onChange={(e) => setFilterOutcome(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="All">All Outcomes</option>
            <option value="Successful">Successful</option>
            <option value="Complicated">Complicated</option>
            <option value="Failed">Failed</option>
            <option value="Pending">Pending</option>
          </select>
        </div>
      </div>

      <div className="hidden md:block">
        <CommonTable
        columns={[
          { label: "Operation ID", key: "operationId" },
          { label: "Patient", key: "patientName" },
          { label: "Operation Type", key: "operationType" },
          { label: "Surgeon", key: "surgeonName" },
          { label: "Date", key: "operationDate" },
          { label: "Duration", key: "duration" },
          { label: "Room", key: "operationRoom" },
          { 
            label: "Status", 
            key: "status", 
            render: (operation) => getStatusBadge(operation.status)
          },
          { 
            label: "Outcome", 
            key: "outcome", 
            render: (operation) => getOutcomeBadge(operation.outcome)
          },
        ]}
        data={filteredOperations}
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
            onClick: (operation) => handlePrintReport(operation),
            className: "bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded text-xs flex items-center transition-colors",
            title: "Print Report"
          },
        ]}
      />
      </div>

            <div className="block md:hidden">
                          <h1 className="text-2xl font-bold text-center text-[#0b2443] mb-2">
                            Operation Record List
                          </h1>
                          <div className="grid  grid-cols-2 gap-4">
                            {filteredOperations.length === 0 ? (
                              <div className="text-center text-gray-500 py-8">
                                <FaUser className="w-12 h-12 mx-auto text-gray-300 mb-2" />
                                <p>No Reports found.</p>
                              </div>
                            ) : (
                              filteredOperations.map((report) => (
                                <GenericCard
                                  key={report.id}
                                  data={report}
                                  hospitalFields={[
                                    { key: "operationType", icon: <FaHospital /> },
                                    { key: "surgeonName", icon: <FaStethoscope /> },
                                    { key: "status", icon: <FaClock /> },
                                    
                                  ]}
                                  personalFields={[
                                    { key: "patientName", icon: <FaUser /> },
                                    { key: "operationDate", icon: <FaClock /> },
                                    { key: "operationRoom", icon: <FaStethoscope /> },
                                  ]}
                                  actions={[
                                    {
                                      label: "Print Report",
                                      icon: <FaDownload className="w-4 h-4" />,
                                      color: "text-[#0b2443]",
                                      onClick: handlePrintReport,
                                    }
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
    </div>
  );
};

export default OperationReport;
