"use client";
import React, { useContext, useState } from 'react';
import { SearchContext } from '../../../components/Context/SearchContext';
import { FaEye, FaBed, FaCalendarAlt, FaHospital, FaUserMd } from 'react-icons/fa';
import StatCard from '../../../components/compafterlogin/Common/StatCard';
import Viewhistorymodal from '../../../components/compafterlogin/Patient/Viewhistorymodal';

const admitHistoryData = [
  {
    id: 1,
    admissionId: 'ADM001',
    bedNumber: '204',
    bedType: 'ICU',
    ward: 'Cardiac Care Unit',
    admissionDate: '2024-07-15',
    admissionTime: '14:30',
    dischargeDate: '2024-07-18',
    dischargeTime: '10:15',
    reasonForAdmission: 'Acute Myocardial Infarction',
    attendingDoctor: 'Dr. Micheal Pew',
    department: 'Cardiology',
    status: 'Discharged',
    totalDays: 3,
    roomCharges: '$450',
    treatmentCharges: '$2,850',
    totalBill: '$3,300',
    insurance: 'Covered (80%)',
    notes: 'Patient responded well to treatment. Follow-up required in 2 weeks.'
  },
  {
    id: 2,
    admissionId: 'ADM002',
    bedNumber: '108',
    bedType: 'General Ward',
    ward: 'Internal Medicine',
    admissionDate: '2024-06-28',
    admissionTime: '09:45',
    dischargeDate: '2024-07-02',
    dischargeTime: '16:20',
    reasonForAdmission: 'Diabetes Management & Complications',
    attendingDoctor: 'Dr. Sarah Johnson',
    department: 'Internal Medicine',
    status: 'Discharged',
    totalDays: 4,
    roomCharges: '$200',
    treatmentCharges: '$1,500',
    totalBill: '$1,700',
    insurance: 'Covered (90%)',
    notes: 'Blood sugar levels stabilized. Medication adjusted.'
  },
  {
    id: 3,
    admissionId: 'ADM003',
    bedNumber: '301',
    bedType: 'Private Room',
    ward: 'Neurology Wing',
    admissionDate: '2024-05-12',
    admissionTime: '11:20',
    dischargeDate: '2024-05-14',
    dischargeTime: '08:30',
    reasonForAdmission: 'Severe Migraine Episodes',
    attendingDoctor: 'Dr. Ahmed Rahman',
    department: 'Neurology',
    status: 'Discharged',
    totalDays: 2,
    roomCharges: '$300',
    treatmentCharges: '$800',
    totalBill: '$1,100',
    insurance: 'Covered (75%)',
    notes: 'Migraine triggers identified. Preventive medication prescribed.'
  },
  {
    id: 4,
    admissionId: 'ADM004',
    bedNumber: '156',
    bedType: 'General Ward',
    ward: 'Emergency Department',
    admissionDate: '2024-03-25',
    admissionTime: '22:15',
    dischargeDate: '2024-03-26',
    dischargeTime: '12:45',
    reasonForAdmission: 'Food Poisoning',
    attendingDoctor: 'Dr. Emily Chen',
    department: 'Emergency Medicine',
    status: 'Discharged',
    totalDays: 1,
    roomCharges: '$120',
    treatmentCharges: '$450',
    totalBill: '$570',
    insurance: 'Covered (100%)',
    notes: 'Quick recovery with IV fluids and medication.'
  }
];

export default function PatientAdmitHistory() {
  const { search } = useContext(SearchContext);
  const [selectedAdmission, setSelectedAdmission] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [filterStatus, setFilterStatus] = useState("All");
  const [filterYear, setFilterYear] = useState("All");

  const years = ["All", ...new Set(admitHistoryData.map(item => item.admissionDate.split('-')[0]))];
  const statuses = ["All", ...new Set(admitHistoryData.map(item => item.status))];

  const filteredData = admitHistoryData.filter((admission) => {
    const matchesSearch = 
      admission.admissionId.toLowerCase().includes(search.toLowerCase()) ||
      admission.bedNumber.toLowerCase().includes(search.toLowerCase()) ||
      admission.bedType.toLowerCase().includes(search.toLowerCase()) ||
      admission.ward.toLowerCase().includes(search.toLowerCase()) ||
      admission.reasonForAdmission.toLowerCase().includes(search.toLowerCase()) ||
      admission.attendingDoctor.toLowerCase().includes(search.toLowerCase());
    
    const matchesStatus = filterStatus === "All" || admission.status === filterStatus;
    const matchesYear = filterYear === "All" || admission.admissionDate.startsWith(filterYear);
    
    return matchesSearch && matchesStatus && matchesYear;
  });

  const handleViewDetails = (admission) => {
    setSelectedAdmission(admission);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedAdmission(null);
  };

  const getStatusBadge = (status) => {
    const statusStyles = {
      Discharged: "bg-green-100 text-green-800",
      "In Progress": "bg-blue-100 text-blue-800",
      Cancelled: "bg-red-100 text-red-800"
    };
    
    return (
      <span className={`px-2 py-1 text-xs font-medium rounded-full ${statusStyles[status] || 'bg-gray-100 text-gray-800'}`}>
        {status}
      </span>
    );
  };

  const getBedTypeIcon = (bedType) => {
    switch (bedType.toLowerCase()) {
      case 'icu':
        return <span className="text-red-500">🏥</span>;
      case 'private room':
        return <span className="text-purple-500">🛏️</span>;
      case 'general ward':
        return <span className="text-blue-500">🏥</span>;
      default:
        return <FaBed className="text-gray-500" />;
    }
  };

  const calculateTotalDays = (totalDays) => {
    return totalDays === 1 ? '1 day' : `${totalDays} days`;
  };

  const statData = [
    {
      icon: <FaHospital className="w-5 h-5 text-blue-600" />,
      stat: admitHistoryData.length,
      label: 'Total Admissions'
    },
    {
      icon: <FaCalendarAlt className="w-5 h-5 text-green-600" />,
      stat: admitHistoryData.reduce((sum, item) => sum + item.totalDays, 0),
      label: 'Total Days'
    },
    {
      icon: <FaBed className="w-5 h-5 text-purple-600" />,
      stat: new Set(admitHistoryData.map(item => item.ward)).size,
      label: 'Wards Used'
    },
    {
      icon: <span className="text-yellow-600 font-bold text-2xl">$</span>,
      stat: admitHistoryData.reduce((sum, item) => sum + parseFloat(item.totalBill.replace('$', '').replace(',', '')), 0).toLocaleString(),
      label: 'Total Bills'
    }
  ]

  return (
    <div className="p-6" style={{ fontFamily: "'Gill Sans MT', 'Gill Sans', 'GillSans', 'Arial', 'sans-serif'" }}>
      {/* Header */}
      <div className="flex items-center mb-6">
        <span className="text-2xl mr-2">
          <FaHospital className="w-7 h-7 text-blue-500" />
        </span>
        <h1 className="text-2xl font-bold text-gray-800">My Admission History</h1>
        <span className="ml-3 text-sm text-gray-600">Your hospital stay records</span>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        {statData.map((stat, index) => (
                  <StatCard icon={stat.icon} stat={stat.stat} label={stat.label} key={index} />
                ))}
      </div>

      {/* Filters */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Filter by Status</label>
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
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Filter by Year</label>
            <select
              value={filterYear}
              onChange={(e) => setFilterYear(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {years.map(year => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Admissions Table */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Admission ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Bed & Ward</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Duration</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Doctor</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredData.length === 0 ? (
                <tr>
                  <td colSpan={7} className="px-6 py-4 whitespace-nowrap text-center text-gray-500">
                    No admission records found matching your criteria.
                  </td>
                </tr>
              ) : (
                filteredData.map((admission) => (
                  <tr key={admission.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {admission.admissionId}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <div>{admission.admissionDate}</div>
                      <div className="text-xs text-gray-400">{admission.admissionTime}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <div className="flex items-center">
                        {getBedTypeIcon(admission.bedType)}
                        <div className="ml-2">
                          <div>Bed {admission.bedNumber}</div>
                          <div className="text-xs text-gray-400">{admission.bedType}</div>
                          <div className="text-xs text-blue-600">{admission.ward}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <div>{calculateTotalDays(admission.totalDays)}</div>
                      <div className="text-xs text-gray-400">
                        {admission.dischargeDate}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <div>{admission.attendingDoctor}</div>
                      <div className="text-xs text-gray-400">{admission.department}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {getStatusBadge(admission.status)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <button
                        onClick={() => handleViewDetails(admission)}
                        className="bg-[#0B2443] hover:bg-blue-900 text-white px-3 py-1 ml-2 rounded text-xs flex items-center transition-colors"
                        title="View Details"
                      >
                        <FaEye className="w-3 h-3 mr-1" />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
      {/* Admission Details Modal */}
      {showModal && selectedAdmission && (
        <Viewhistorymodal getStatusBadge={getStatusBadge} selectedAdmission={selectedAdmission} handleCloseModal={handleCloseModal} calculateTotalDays={calculateTotalDays} />
      )}
    </div>
  );
}