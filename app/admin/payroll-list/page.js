"use client";
import { useContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { SearchContext } from "../../../components/Context/SearchContext";
import CommonAddButton from "../../../components/compafterlogin/Common/CommonAddButton";
import CommonTable from "../../../components/compafterlogin/Common/CommonTable";
import Toast from "../../../components/compafterlogin/Common/Toast";
import { FaTimes, FaTrash } from 'react-icons/fa';
import StatCard from "../../../components/compafterlogin/Common/StatCard";

// Delete Payroll Modal Component
const DeletePayrollModal = ({ isOpen, payroll, onClose, onDelete }) => {
  if (!isOpen || !payroll) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="bg-white rounded-xl shadow-2xl max-w-md w-full mx-4">
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
              <FaTrash className="w-5 h-5 text-red-500" />
              Delete Payroll
            </h3>
            <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
              <FaTimes className="w-5 h-5" />
            </button>
          </div>
          
          <div className="mb-6">
            <p className="text-gray-600 mb-4">
              Are you sure you want to delete payroll <strong>"{payroll.payrollId}"</strong>? This action cannot be undone.
            </p>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="text-sm text-gray-700 space-y-2">
                <div><strong>Period:</strong> {payroll.month} {payroll.year}</div>
                <div><strong>Employees:</strong> {payroll.employeeCount}</div>
                <div><strong>Status:</strong> {payroll.status}</div>
                <div><strong>Net Pay:</strong> {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(payroll.totalNetPay)}</div>
              </div>
            </div>
            
            {payroll.status === "Completed" && (
              <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-800 text-sm font-medium">
                  ⚠️ Warning: This is a completed payroll. Deletion is not recommended.
                </p>
              </div>
            )}
          </div>
          
          <div className="flex justify-end space-x-3">
            <button
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={() => {
                onDelete(payroll);
                onClose();
              }}
              className="px-4 py-2 bg-red-500 text-white hover:bg-red-600 rounded-lg transition-colors flex items-center gap-2"
            >
              <FaTrash className="w-4 h-4" />
              Delete Payroll
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const PayrollList = () => {
  const router = useRouter();
  const { search } = useContext(SearchContext);
  const [payrolls, setPayrolls] = useState([
    {
      id: 1,
      payrollId: "PR001",
      payrollPeriod: "Monthly",
      month: "January",
      year: 2024,
      employeeCount: 25,
      totalGrossPay: 125000.00,
      totalDeductions: 25000.00,
      totalNetPay: 100000.00,
      status: "Completed",
      createdDate: "2024-01-31",
      createdBy: "Admin User",
      processedDate: "2024-02-01",
      notes: "Regular monthly payroll processing",
    },
    {
      id: 2,
      payrollId: "PR002",
      payrollPeriod: "Monthly", 
      month: "February",
      year: 2024,
      employeeCount: 27,
      totalGrossPay: 135000.00,
      totalDeductions: 27000.00,
      totalNetPay: 108000.00,
      status: "Completed",
      createdDate: "2024-02-29",
      createdBy: "Admin User",
      processedDate: "2024-03-01",
      notes: "Included overtime pay for emergency staff",
    },
    {
      id: 3,
      payrollId: "PR003",
      payrollPeriod: "Monthly",
      month: "March",
      year: 2024,
      employeeCount: 26,
      totalGrossPay: 130000.00,
      totalDeductions: 26000.00,
      totalNetPay: 104000.00,
      status: "Processing",
      createdDate: "2024-03-31",
      createdBy: "Admin User",
      processedDate: "",
      notes: "Currently processing March payroll",
    },
    {
      id: 4,
      payrollId: "PR004",
      payrollPeriod: "Bi-weekly",
      month: "April",
      year: 2024,
      employeeCount: 15,
      totalGrossPay: 60000.00,
      totalDeductions: 12000.00,
      totalNetPay: 48000.00,
      status: "Draft",
      createdDate: "2024-04-15",
      createdBy: "HR Manager",
      processedDate: "",
      notes: "Bi-weekly payroll for hourly employees",
    },
    {
      id: 5,
      payrollId: "PR005",
      payrollPeriod: "Monthly",
      month: "April",
      year: 2024,
      employeeCount: 28,
      totalGrossPay: 140000.00,
      totalDeductions: 28000.00,
      totalNetPay: 112000.00,
      status: "Pending Approval",
      createdDate: "2024-04-30",
      createdBy: "Admin User",
      processedDate: "",
      notes: "Awaiting management approval",
    },
    {
      id: 6,
      payrollId: "PR006",
      payrollPeriod: "Weekly",
      month: "May",
      year: 2024,
      employeeCount: 12,
      totalGrossPay: 24000.00,
      totalDeductions: 4800.00,
      totalNetPay: 19200.00,
      status: "Cancelled",
      createdDate: "2024-05-07",
      createdBy: "HR Manager",
      processedDate: "",
      notes: "Cancelled due to payroll errors",
    },
  ]);

  // Modal states
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedPayroll, setSelectedPayroll] = useState(null);

  // Load generated payrolls from localStorage on component mount
  useEffect(() => {
    const generatedPayrolls = JSON.parse(localStorage.getItem('generatedPayrolls') || '[]');
    if (generatedPayrolls.length > 0) {
      setPayrolls(prevPayrolls => {
        // Merge generated payrolls with existing ones, avoiding duplicates
        const existingIds = prevPayrolls.map(p => p.payrollId);
        const newPayrolls = generatedPayrolls.filter(p => !existingIds.includes(p.payrollId));
        return [...newPayrolls, ...prevPayrolls];
      });
    }
  }, []);

  const [toast, setToast] = useState({ show: false, message: "", type: "success" });
  const [filterStatus, setFilterStatus] = useState("All");
  const [filterPeriod, setFilterPeriod] = useState("All");
  const [filterYear, setFilterYear] = useState("All");

  const filteredPayrolls = payrolls.filter((payroll) => {
    const matchesSearch = 
      payroll.payrollId.toLowerCase().includes(search.toLowerCase()) ||
      payroll.month.toLowerCase().includes(search.toLowerCase()) ||
      payroll.createdBy.toLowerCase().includes(search.toLowerCase()) ||
      payroll.notes.toLowerCase().includes(search.toLowerCase());
    
    const matchesStatus = filterStatus === "All" || payroll.status === filterStatus;
    const matchesPeriod = filterPeriod === "All" || payroll.payrollPeriod === filterPeriod;
    const matchesYear = filterYear === "All" || payroll.year.toString() === filterYear;
    
    return matchesSearch && matchesStatus && matchesPeriod && matchesYear;
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
      Processing: "bg-blue-100 text-blue-800",
      "Pending Approval": "bg-yellow-100 text-yellow-800",
      Draft: "bg-gray-100 text-gray-800",
      Cancelled: "bg-red-100 text-red-800",
    };
    
    return (
      <span className={`px-2 py-1 text-xs font-medium rounded-full ${statusStyles[status] || 'bg-gray-100 text-gray-800'}`}>
        {status}
      </span>
    );
  };

  const getPeriodBadge = (period) => {
    const periodStyles = {
      Weekly: "bg-purple-100 text-purple-800",
      "Bi-weekly": "bg-indigo-100 text-indigo-800",
      Monthly: "bg-blue-100 text-blue-800",
      Quarterly: "bg-teal-100 text-teal-800",
    };
    
    return (
      <span className={`px-2 py-1 text-xs font-medium rounded ${periodStyles[period] || 'bg-gray-100 text-gray-800'}`}>
        {period}
      </span>
    );
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount);
  };

  // Delete Payroll Modal Functions
  const openDeleteModal = (payroll) => {
    setSelectedPayroll(payroll);
    setShowDeleteModal(true);
  };

  const closeDeleteModal = () => {
    setShowDeleteModal(false);
    setSelectedPayroll(null);
  };

  // Delete Payroll Functionality
  const handleDeletePayroll = (payroll) => {
    if (payroll.status === "Completed") {
      showToast("Warning: Deleting completed payroll", "error");
    }
    
    setPayrolls(prevPayrolls => 
      prevPayrolls.filter(p => p.id !== payroll.id)
    );
    
    // Update localStorage if it's a generated payroll
    const generatedPayrolls = JSON.parse(localStorage.getItem('generatedPayrolls') || '[]');
    const updatedGenerated = generatedPayrolls.filter(p => p.payrollId !== payroll.payrollId);
    localStorage.setItem('generatedPayrolls', JSON.stringify(updatedGenerated));
    
    showToast(`Payroll ${payroll.payrollId} deleted successfully`, "success");
  };

  // Download Payroll Report Functionality
  const handleDownloadPayroll = (payroll) => {
    // Create and download detailed payroll report
    const reportContent = `
<!DOCTYPE html>
<html>
<head>
    <title>Payroll Report - ${payroll.payrollId}</title>
    <style>
        body { 
            font-family: Arial, sans-serif; 
            margin: 20px; 
            line-height: 1.6;
        }
        .header {
            text-align: center;
            margin-bottom: 30px;
            border-bottom: 2px solid #333;
            padding-bottom: 20px;
        }
        .company-name {
            font-size: 24px;
            font-weight: bold;
            color: #333;
        }
        .report-title {
            font-size: 18px;
            color: #666;
            margin: 10px 0;
        }
        .info-section {
            margin: 20px 0;
            background: #f5f5f5;
            padding: 15px;
            border-radius: 5px;
        }
        .info-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
        }
        .info-item {
            margin: 10px 0;
        }
        .label {
            font-weight: bold;
            color: #333;
        }
        .value {
            color: #666;
        }
        .summary-section {
            margin: 30px 0;
            padding: 20px;
            background: #e8f5e8;
            border-radius: 5px;
        }
        .amount {
            font-size: 18px;
            font-weight: bold;
        }
        .gross-pay { color: #1976d2; }
        .deductions { color: #f57c00; }
        .net-pay { color: #388e3c; }
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
    <div class="header">
        <div class="company-name">Hospital Management System</div>
        <div class="report-title">Payroll Report</div>
        <div>Report Generated: ${new Date().toLocaleDateString()}</div>
    </div>
    
    <div class="info-section">
        <h3>Payroll Information</h3>
        <div class="info-grid">
            <div>
                <div class="info-item">
                    <span class="label">Payroll ID:</span>
                    <span class="value">${payroll.payrollId}</span>
                </div>
                <div class="info-item">
                    <span class="label">Period:</span>
                    <span class="value">${payroll.payrollPeriod}</span>
                </div>
                <div class="info-item">
                    <span class="label">Month/Year:</span>
                    <span class="value">${payroll.month} ${payroll.year}</span>
                </div>
                <div class="info-item">
                    <span class="label">Employee Count:</span>
                    <span class="value">${payroll.employeeCount}</span>
                </div>
            </div>
            <div>
                <div class="info-item">
                    <span class="label">Status:</span>
                    <span class="value">${payroll.status}</span>
                </div>
                <div class="info-item">
                    <span class="label">Created Date:</span>
                    <span class="value">${payroll.createdDate}</span>
                </div>
                <div class="info-item">
                    <span class="label">Created By:</span>
                    <span class="value">${payroll.createdBy}</span>
                </div>
                <div class="info-item">
                    <span class="label">Processed Date:</span>
                    <span class="value">${payroll.processedDate || 'Not processed'}</span>
                </div>
            </div>
        </div>
    </div>
    
    <div class="summary-section">
        <h3>Financial Summary</h3>
        <div class="info-grid">
            <div class="info-item">
                <span class="label">Total Gross Pay:</span>
                <span class="value amount gross-pay">${formatCurrency(payroll.totalGrossPay)}</span>
            </div>
            <div class="info-item">
                <span class="label">Total Deductions:</span>
                <span class="value amount deductions">${formatCurrency(payroll.totalDeductions)}</span>
            </div>
        </div>
        <div class="info-item" style="margin-top: 20px; text-align: center;">
            <span class="label">Total Net Pay:</span>
            <span class="value amount net-pay" style="font-size: 24px;">${formatCurrency(payroll.totalNetPay)}</span>
        </div>
    </div>
    
    <div class="info-section">
        <h3>Notes</h3>
        <p>${payroll.notes}</p>
    </div>
    
    <div class="footer">
        <p>This is an official payroll report generated by Hospital Management System.</p>
        <p>Generated on: ${new Date().toLocaleString()}</p>
    </div>
</body>
</html>`;

    // Create blob and download
    const blob = new Blob([reportContent], { type: 'text/html' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Payroll_Report_${payroll.payrollId}_${new Date().toISOString().split('T')[0]}.html`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
    
    showToast(`Payroll report for ${payroll.payrollId} downloaded successfully`, "success");
  };

  // Approve Payroll Functionality
  const handleApprovePayroll = (payroll) => {
    if (payroll.status !== "Pending Approval") {
      showToast("Only pending payrolls can be approved", "error");
      return;
    }
    
    if (confirm(`Are you sure you want to approve payroll ${payroll.payrollId}?`)) {
      setPayrolls(prevPayrolls => 
        prevPayrolls.map(p => 
          p.id === payroll.id 
            ? { 
                ...p, 
                status: "Completed",
                processedDate: new Date().toISOString().split('T')[0]
              }
            : p
        )
      );
      
      // Update localStorage if it's a generated payroll
      const generatedPayrolls = JSON.parse(localStorage.getItem('generatedPayrolls') || '[]');
      const updatedGenerated = generatedPayrolls.map(p => 
        p.payrollId === payroll.payrollId 
          ? { 
              ...p, 
              status: "Completed",
              processedDate: new Date().toISOString().split('T')[0]
            }
          : p
      );
      localStorage.setItem('generatedPayrolls', JSON.stringify(updatedGenerated));
      
      showToast(`Payroll ${payroll.payrollId} approved and completed successfully`, "success");
    }
  };

  // Statistics
  const totalPayrolls = payrolls.length;
  const completedPayrolls = payrolls.filter(p => p.status === "Completed").length;
  const pendingPayrolls = payrolls.filter(p => p.status === "Pending Approval").length;
  const totalEmployees = payrolls.reduce((sum, payroll) => sum + payroll.employeeCount, 0);

   const statData = [
    {
      icon:<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-blue-500">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h18M3 12l6-6m0 0l6 6m-6-6v18m0-18l-6 6m18 0l-6 6m0-6v18m0-18l6 6" />
      </svg>,
      stat: totalPayrolls,
      label: "Total Payrolls"
    },
    {
      icon:<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-green-500">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>,
      stat: completedPayrolls,
      label: "Completed Payrolls"
    },
    {
      icon:<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-yellow-500">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>,
      stat: pendingPayrolls,
      label: "Pending Payrolls"
    },
    {
      icon:<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-purple-500">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10-5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>,
      stat: totalEmployees,
      label: "Total Employees"
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
            className="w-7 h-7 text-blue-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
        </span>
        <h2 className="text-3xl font-semibold text-[#0b2443]">Payroll List</h2>
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
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="All">All Status</option>
            <option value="Completed">Completed</option>
            <option value="Processing">Processing</option>
            <option value="Pending Approval">Pending Approval</option>
            <option value="Draft">Draft</option>
            <option value="Cancelled">Cancelled</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Period</label>
          <select
            value={filterPeriod}
            onChange={(e) => setFilterPeriod(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="All">All Periods</option>
            <option value="Weekly">Weekly</option>
            <option value="Bi-weekly">Bi-weekly</option>
            <option value="Monthly">Monthly</option>
            <option value="Quarterly">Quarterly</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Year</label>
          <select
            value={filterYear}
            onChange={(e) => setFilterYear(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="All">All Years</option>
            <option value="2024">2024</option>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
          </select>
        </div>

        <div className="flex items-end">
          <CommonAddButton 
            label="Create Payroll" 
            onClick={() => router.push("/admin/create-payroll")} 
          />
        </div>
      </div>

      <CommonTable
        columns={[
          { 
            label: "Payroll ID", 
            key: "payrollId",
            render: (payroll) => (
              <div className="flex items-center gap-2">
                <span>{payroll.payrollId}</span>
                {/* Show "NEW" badge for payrolls created today */}
                {payroll.createdDate === new Date().toISOString().split('T')[0] && (
                  <span className="px-2 py-1 text-xs font-medium rounded-full bg-red-100 text-red-800">
                    NEW
                  </span>
                )}
              </div>
            )
          },
          { 
            label: "Period", 
            key: "payrollPeriod", 
            render: (payroll) => getPeriodBadge(payroll.payrollPeriod)
          },
          { label: "Month/Year", key: "month", render: (payroll) => `${payroll.month} ${payroll.year}` },
          { label: "Employees", key: "employeeCount" },
          { 
            label: "Gross Pay", 
            key: "totalGrossPay", 
            render: (payroll) => (
              <span className="font-semibold text-blue-600">
                {formatCurrency(payroll.totalGrossPay)}
              </span>
            )
          },
          { 
            label: "Net Pay", 
            key: "totalNetPay", 
            render: (payroll) => (
              <span className="font-semibold text-green-600">
                {formatCurrency(payroll.totalNetPay)}
              </span>
            )
          },
          { label: "Created Date", key: "createdDate" },
          { 
            label: "Status", 
            key: "status", 
            render: (payroll) => getStatusBadge(payroll.status)
          },
        ]}
        data={filteredPayrolls}
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
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </>
            ),
            onClick: (payroll) => handleApprovePayroll(payroll),
            className: "bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded text-xs flex items-center transition-colors",
            title: "Approve Payroll"
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
                  <path d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </>
            ),
            onClick: (payroll) => handleDownloadPayroll(payroll),
            className: "bg-purple-500 hover:bg-purple-600 text-white px-3 py-1 rounded text-xs flex items-center transition-colors",
            title: "Download Report"
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
                  <path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </>
            ),
            onClick: (payroll) => openDeleteModal(payroll),
            className: "bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-xs flex items-center transition-colors",
            title: "Delete Payroll"
          },
        ]}
      />

      {/* Delete Modal */}
      <DeletePayrollModal
        isOpen={showDeleteModal}
        payroll={selectedPayroll}
        onClose={closeDeleteModal}
        onDelete={handleDeletePayroll}
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

export default PayrollList;
