"use client";
import { useState } from "react";
import CommonTable from "../../../components/compafterlogin/Common/CommonTable";
import Toast from "../../../components/compafterlogin/Common/Toast";
import StatCard from "../../../components/compafterlogin/Common/StatCard";
import ShowPayrollModal from "../../../components/compafterlogin/Doctor/ShowPayrollModal";

const Payroll = () => {
  const [payrollRecords, setPayrollRecords] = useState([
    {
      id: 1,
      employeeId: "EMP001",
      employeeName: "Dr. John Smith",
      department: "Cardiology",
      position: "Senior Doctor",
      payPeriod: "July 2024",
      basicSalary: 8000,
      allowances: 1200,
      overtime: 450,
      bonuses: 500,
      deductions: 800,
      netSalary: 9350,
      payDate: "2024-07-31",
      status: "Paid",
    },
    {
      id: 2,
      employeeId: "EMP001",
      employeeName: "Dr. John Smith",
      department: "Cardiology",
      position: "Senior Doctor",
      payPeriod: "June 2024",
      basicSalary: 8000,
      allowances: 1000,
      overtime: 300,
      bonuses: 300,
      deductions: 800,
      netSalary: 8800,
      payDate: "2024-06-30",
      status: "Paid",
    },
    {
      id: 3,
      employeeId: "EMP001",
      employeeName: "Dr. John Smith",
      department: "Cardiology",
      position: "Senior Doctor",
      payPeriod: "May 2024",
      basicSalary: 8000,
      allowances: 800,
      overtime: 600,
      bonuses: 200,
      deductions: 800,
      netSalary: 8800,
      payDate: "2024-05-31",
      status: "Paid",
    },
    {
      id: 4,
      employeeId: "EMP001",
      employeeName: "Dr. John Smith",
      department: "Cardiology",
      position: "Senior Doctor",
      payPeriod: "April 2024",
      basicSalary: 8000,
      allowances: 1100,
      overtime: 200,
      bonuses: 400,
      deductions: 800,
      netSalary: 8900,
      payDate: "2024-04-30",
      status: "Paid",
    },
    {
      id: 5,
      employeeId: "EMP001",
      employeeName: "Dr. John Smith",
      department: "Cardiology",
      position: "Senior Doctor",
      payPeriod: "March 2024",
      basicSalary: 8000,
      allowances: 900,
      overtime: 150,
      bonuses: 0,
      deductions: 800,
      netSalary: 8250,
      payDate: "2024-03-31",
      status: "Paid",
    },
  ]);

  const [toast, setToast] = useState({ show: false, message: "", type: "success" });
  const [showPayrollModal, setShowPayrollModal] = useState(false);
  const [selectedPayroll, setSelectedPayroll] = useState(null);
  const [filterStatus, setFilterStatus] = useState("All");

  const hideToast = () => {
    setToast({ show: false, message: "", type: "success" });
  };

  const getStatusBadge = (status) => {
    const statusStyles = {
      Paid: "bg-green-100 text-green-800",
      Processing: "bg-yellow-100 text-yellow-800",
      Pending: "bg-red-100 text-red-800",
    };
    
    return (
      <span className={`px-2 py-1 text-xs font-medium rounded-full ${statusStyles[status] || 'bg-gray-100 text-gray-800'}`}>
        {status}
      </span>
    );
  };

  const handleViewPayroll = (payroll) => {
    setSelectedPayroll(payroll);
    setShowPayrollModal(true);
  };

  // Statistics
  const totalPayrolls = payrollRecords.length;
  const totalEarned = payrollRecords.reduce((sum, record) => sum + record.netSalary, 0);
  const paidPayrolls = payrollRecords.filter(r => r.status === "Paid").length;
  const averageSalary = totalEarned / totalPayrolls;

  const filteredRecords = payrollRecords.filter((record) => {
    const matchesStatus = filterStatus === "All" || record.status === filterStatus;
    return matchesStatus;
  });

  const statData = [
    {
      icon : <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>,
      stat: totalPayrolls,
      label: "Total Payrolls"
    },
    {
      icon: <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>,
      stat: totalEarned.toLocaleString(),
      label: "Total Earned"
    },
    {
      icon: <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>,
      stat: averageSalary.toLocaleString(),
      label: "Average Salary"
    },
    {
      icon: <svg className="w-5 h-5 text-yellow-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>,
      stat: paidPayrolls,
      label: "Paid Payrolls"
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
            className="w-7 h-7 text-green-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </span>
        <h2 className="text-3xl font-semibold text-[#0B2443]">My Payroll History</h2>
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
          <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <option value="All">All Status</option>
            <option value="Paid">Paid</option>
            <option value="Processing">Processing</option>
            <option value="Pending">Pending</option>
          </select>
        </div>
      </div>

      <CommonTable
        columns={[
          { label: "Pay Period", key: "payPeriod" },
          { label: "Basic Salary", key: "basicSalary", render: (record) => `$${record.basicSalary.toLocaleString()}` },
          { label: "Allowances", key: "allowances", render: (record) => `$${record.allowances.toLocaleString()}` },
          { label: "Overtime", key: "overtime", render: (record) => `$${record.overtime.toLocaleString()}` },
          { label: "Bonuses", key: "bonuses", render: (record) => `$${record.bonuses.toLocaleString()}` },
          { label: "Deductions", key: "deductions", render: (record) => `$${record.deductions.toLocaleString()}` },
          { label: "Net Salary", key: "netSalary", render: (record) => (
            <span className="font-semibold text-green-600">${record.netSalary.toLocaleString()}</span>
          )},
          { label: "Pay Date", key: "payDate" },
          { 
            label: "Status", 
            key: "status", 
            render: (record) => getStatusBadge(record.status)
          },
        ]}
        data={filteredRecords}
        actions={[
          {
            label: (
              <>
                <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                View
              </>
            ),
            onClick: (record) => handleViewPayroll(record),
            className: "bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-xs flex items-center transition-colors",
            title: "View Payroll Details"
          },
        ]}
      />

      {/* Payroll Detail Modal */}
      {showPayrollModal && (
        <ShowPayrollModal getStatusBadge={getStatusBadge} selectedPayroll={selectedPayroll} setShowPayrollModal={setShowPayrollModal} />
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

export default Payroll;
