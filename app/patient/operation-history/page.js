"use client";
import React, { useContext, useState } from 'react';
import { SearchContext } from '../../../components/Context/SearchContext';
import { FaEye, FaDownload, FaPrint, FaFileMedical, FaHeartbeat, FaSkull } from 'react-icons/fa';
import StatCard from '../../../components/compafterlogin/Common/StatCard';
import ReportDetailsModal from '../../../components/compafterlogin/Patient/ReportDetailsModal';

const operationHistoryData = [
  {
    id: 1,
    reportId: 'OP001',
    description: 'Cardiac Bypass Surgery',
    date: '2024-07-15',
    time: '14:30',
    doctor: 'Dr. Micheal Pew',
    department: 'Cardiology',
    duration: '4 hours 30 minutes',
    outcome: 'Successful',
    complications: 'None',
    notes: 'Patient responded well to surgery. Recovery proceeding as expected.',
    reportFile: 'cardiac_bypass_report.pdf'
  },
  {
    id: 2,
    reportId: 'OP002',
    description: 'Appendectomy',
    date: '2024-03-25',
    time: '22:15',
    doctor: 'Dr. Emily Chen',
    department: 'Emergency Surgery',
    duration: '1 hour 15 minutes',
    outcome: 'Successful',
    complications: 'Minor bleeding controlled',
    notes: 'Laparoscopic appendectomy completed successfully. Patient discharged next day.',
    reportFile: 'appendectomy_report.pdf'
  }
];

const birthHistoryData = [
  {
    id: 1,
    reportId: 'BR001',
    description: 'Normal Vaginal Delivery',
    date: '2024-06-10',
    time: '08:45',
    doctor: 'Dr. Sarah Johnson',
    department: 'Obstetrics',
    duration: '8 hours',
    outcome: 'Successful',
    babyWeight: '3.2 kg',
    babyGender: 'Female',
    complications: 'None',
    notes: 'Healthy baby girl delivered. Mother and child in good condition.',
    reportFile: 'birth_report.pdf'
  }
];

const deathHistoryData = [
  {
    id: 1,
    reportId: 'DR001',
    description: 'Post-operative Complications',
    date: '2024-05-20',
    time: '15:30',
    doctor: 'Dr. Ahmed Rahman',
    department: 'Critical Care',
    causeOfDeath: 'Cardiac Arrest',
    primaryDiagnosis: 'Acute Myocardial Infarction',
    secondaryDiagnosis: 'Diabetes Mellitus',
    complications: 'Multi-organ failure',
    notes: 'Patient expired despite intensive care efforts. Family notified.',
    reportFile: 'death_certificate.pdf'
  }
];

export default function PatientOperationHistory() {
  const { search } = useContext(SearchContext);
  const [activeTab, setActiveTab] = useState('Operation');
  const [selectedReport, setSelectedReport] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  let data = [];
  if (activeTab === 'Operation') data = operationHistoryData;
  if (activeTab === 'Birth') data = birthHistoryData;
  if (activeTab === 'Death') data = deathHistoryData;

  const filteredData = data.filter(
    (row) =>
      (row.description?.toLowerCase().includes(search.toLowerCase()) || '') ||
      (row.date?.includes(search) || '') ||
      (row.doctor?.toLowerCase().includes(search.toLowerCase()) || '') ||
      (row.reportId?.toLowerCase().includes(search.toLowerCase()) || '')
  );

  const handleViewReport = (report) => {
    setSelectedReport(report);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedReport(null);
  };
  // Generate and download PDF version (more advanced)
  const handleDownloadPDFReport = async (report) => {
    try {
      setIsDownloading(true);
      
      // Create HTML content for PDF
      const htmlContent = `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="UTF-8">
          <title>${report.reportId} - ${activeTab} Report</title>
          <style>
            body { font-family: Arial, sans-serif; margin: 20px; line-height: 1.6; }
            .header { text-align: center; border-bottom: 2px solid #333; padding-bottom: 20px; margin-bottom: 30px; }
            .hospital-name { font-size: 24px; font-weight: bold; color: #0B2443; }
            .hospital-info { font-size: 12px; color: #666; margin-top: 10px; }
            .report-title { font-size: 20px; font-weight: bold; text-align: center; margin: 20px 0; background: #f5f5f5; padding: 10px; }
            .section { margin: 20px 0; }
            .section-title { font-size: 16px; font-weight: bold; color: #0B2443; border-bottom: 1px solid #ccc; padding-bottom: 5px; }
            .info-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin: 15px 0; }
            .info-item { margin: 8px 0; }
            .label { font-weight: bold; color: #333; }
            .value { color: #666; }
            .notes { background: #f9f9f9; padding: 15px; border-left: 4px solid #0B2443; margin: 15px 0; }
            .footer { margin-top: 40px; padding-top: 20px; border-top: 1px solid #ccc; font-size: 12px; color: #666; }
          </style>
        </head>
        <body>
          <div class="header">
            <div class="hospital-name">Bayanno Hospital</div>
            <div class="hospital-info">
              123 Medical Street, Healthcare City, HC 12345<br>
              Phone: +1 (555) 123-4567 | Email: info@bayannohospital.com
            </div>
          </div>
          
          <div class="report-title">${activeTab.toUpperCase()} REPORT</div>
          
          <div class="section">
            <div class="section-title">Report Information</div>
            <div class="info-grid">
              <div>
                <div class="info-item"><span class="label">Report ID:</span> <span class="value">${report.reportId}</span></div>
                <div class="info-item"><span class="label">Date:</span> <span class="value">${report.date}</span></div>
                <div class="info-item"><span class="label">Time:</span> <span class="value">${report.time}</span></div>
                ${report.duration ? `<div class="info-item"><span class="label">Duration:</span> <span class="value">${report.duration}</span></div>` : ''}
              </div>
              <div>
                <div class="info-item"><span class="label">Description:</span> <span class="value">${report.description}</span></div>
                ${activeTab === 'Operation' ? `<div class="info-item"><span class="label">Outcome:</span> <span class="value">${report.outcome}</span></div>` : ''}
              </div>
            </div>
          </div>
          
          <div class="section">
            <div class="section-title">Medical Team</div>
            <div class="info-item"><span class="label">Doctor:</span> <span class="value">${report.doctor}</span></div>
            <div class="info-item"><span class="label">Department:</span> <span class="value">${report.department}</span></div>
          </div>
          
          ${activeTab === 'Birth' && report.babyWeight ? `
          <div class="section">
            <div class="section-title">Birth Details</div>
            <div class="info-item"><span class="label">Baby Weight:</span> <span class="value">${report.babyWeight}</span></div>
            <div class="info-item"><span class="label">Baby Gender:</span> <span class="value">${report.babyGender}</span></div>
          </div>
          ` : ''}
          
          ${activeTab === 'Death' && report.causeOfDeath ? `
          <div class="section">
            <div class="section-title">Death Certificate Details</div>
            <div class="info-item"><span class="label">Cause of Death:</span> <span class="value">${report.causeOfDeath}</span></div>
            <div class="info-item"><span class="label">Primary Diagnosis:</span> <span class="value">${report.primaryDiagnosis}</span></div>
            ${report.secondaryDiagnosis ? `<div class="info-item"><span class="label">Secondary Diagnosis:</span> <span class="value">${report.secondaryDiagnosis}</span></div>` : ''}
          </div>
          ` : ''}
          
          ${report.complications && report.complications !== 'None' ? `
          <div class="section">
            <div class="section-title">Complications</div>
            <div class="value">${report.complications}</div>
          </div>
          ` : ''}
          
          <div class="section">
            <div class="section-title">Medical Notes</div>
            <div class="notes">${report.notes}</div>
          </div>
          
          <div class="footer">
            <div>Report generated on: ${new Date().toLocaleString()}</div>
            <div>This is an official medical report from Bayanno Hospital.</div>
            <div>For any queries, please contact us at +1 (555) 123-4567</div>
          </div>
        </body>
        </html>
      `;
      
      // Create blob and download
      const blob = new Blob([htmlContent], { type: 'text/html' });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `${report.reportId}_${activeTab}_Report_${report.date.replace(/-/g, '')}.html`;
      
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
      
      alert(`Report ${report.reportId} downloaded successfully as HTML!`);
      
    } catch (error) {
      console.error('Error downloading PDF report:', error);
      alert('Error downloading report. Please try again.');
    } finally {
      setIsDownloading(false);
    }
  };
  const getTabIcon = (tab) => {
    switch (tab) {
      case 'Operation':
        return <FaFileMedical className="w-4 h-4" />;
      case 'Birth':
        return <FaHeartbeat className="w-4 h-4" />;
      case 'Death':
        return <FaSkull className="w-4 h-4" />;
      default:
        return null;
    }
  };

  const getTabColor = (tab) => {
    switch (tab) {
      case 'Operation':
        return activeTab === tab ? 'border-blue-950 text-blue-950 bg-blue-50' : 'text-gray-500 hover:text-gray-700';
      case 'Birth':
        return activeTab === tab ? 'border-green-950 text-blue-950 bg-green-50' : 'text-gray-500 hover:text-gray-700';
      case 'Death':
        return activeTab === tab ? 'border-red-950 text-blue-950 bg-red-50' : 'text-gray-500 hover:text-gray-700';
      default:
        return 'text-gray-500 hover:text-gray-700';
    }
  };

  const getStatusBadge = (outcome) => {
    if (outcome === 'Successful') {
      return <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">Successful</span>;
    }
    return <span className="px-2 py-1 text-xs font-medium rounded-full bg-yellow-100 text-yellow-800">{outcome}</span>;
  };

  const statData = [
    {
      icon: <FaFileMedical className="w-5 h-5 text-blue-700" />,
      stat: operationHistoryData.length,
      label: "Operation Reports"
    },
    {
      icon: <FaHeartbeat className="w-5 h-5 text-red-600" />,
      stat: birthHistoryData.length,
      label: "Birth Reports"
    },
    {
      icon: <FaSkull className="w-5 h-5 text-gray-800" />,
      stat: deathHistoryData.length,
      label: "Death Reports"
    }
  ];

  return (
    <div className="p-6" style={{ fontFamily: "'Gill Sans MT', 'Gill Sans', 'GillSans', 'Arial', 'sans-serif'" }}>
      {/* Header */}
      <div className="flex items-center mb-6">
        <span className="text-2xl mr-2">
          <FaFileMedical className="w-7 h-7 text-[#0B2443]" />
        </span>
        <h1 className="text-2xl font-bold text-gray-800">Medical Reports History</h1>
        <span className="ml-3 text-sm text-gray-600">Your medical reports and history</span>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {statData.map((stat, index) => (
          <StatCard icon={stat.icon} stat={stat.stat} label={stat.label} key={index} />
        ))}
      </div>

      {/* Tab Navigation */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden mb-6">
        <div className="flex border-b border-gray-200">
          {['Operation', 'Birth', 'Death'].map((tab) => (
            <button
              key={tab}
              className={`px-6 py-3 font-medium text-sm flex items-center gap-2 ${
                activeTab === tab 
                  ? `border-b-2 ${getTabColor(tab)}` 
                  : getTabColor(tab)
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {getTabIcon(tab)}
              {tab} Reports ({
                tab === 'Operation' ? operationHistoryData.length :
                tab === 'Birth' ? birthHistoryData.length :
                deathHistoryData.length
              })
            </button>
          ))}
        </div>

        {/* Table Content */}
        <div className="p-6">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Report ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date & Time</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Doctor</th>
                  {activeTab === 'Operation' && (
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Outcome</th>
                  )}
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredData.length === 0 ? (
                  <tr>
                    <td colSpan={activeTab === 'Operation' ? 6 : 5} className="px-6 py-8 text-center text-gray-500">
                      <FaFileMedical className="w-12 h-12 mx-auto text-gray-300 mb-2" />
                      <p>No {activeTab.toLowerCase()} reports found.</p>
                    </td>
                  </tr>
                ) : (
                  filteredData.map((report) => (
                    <tr key={report.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {report.reportId}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900">
                        <div className="max-w-xs truncate" title={report.description}>
                          {report.description}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <div>{report.date}</div>
                        <div className="text-xs text-gray-400">{report.time}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <div>{report.doctor}</div>
                        <div className="text-xs text-gray-400">{report.department}</div>
                      </td>
                      {activeTab === 'Operation' && (
                        <td className="px-6 py-4 whitespace-nowrap">
                          {getStatusBadge(report.outcome)}
                        </td>
                      )}
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <div className="flex space-x-2">
                          <button
                            onClick={() => handleViewReport(report)}
                            className="bg-[#0B2443] hover:bg-blue-950 text-white px-2 py-1 rounded text-xs flex items-center transition-colors"
                            title="View Report"
                          >
                            <FaEye className="w-3 h-3 mr-1" />
                            View
                          </button>
                          <button
                            onClick={() => handleDownloadPDFReport(report)}
                            disabled={isDownloading}
                            className="bg-gray-900 hover:bg-gray-800 text-white px-2 py-1 rounded text-xs flex items-center transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            title="Download Report as HTML"
                          >
                            <FaDownload className="w-3 h-3 mr-1" />
                            {isDownloading ? 'Downloading...' : 'Download'}
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
      {/* Report Details Modal */}
      {showModal && (
        <ReportDetailsModal getStatusBadge={getStatusBadge} selectedReport={selectedReport} handleCloseModal={handleCloseModal} activeTab={activeTab} />
      )}
    </div>
  );
}