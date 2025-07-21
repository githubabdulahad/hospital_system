"use client";
import { useContext, useState } from "react";
import { SearchContext } from "../../../components/Context/SearchContext";
import CommonTable from "../../../components/compafterlogin/Common/CommonTable";
import Toast from "../../../components/compafterlogin/Common/Toast";
import StatCard from "../../../components/compafterlogin/Common/StatCard";
import Viewpayment from "../../../components/compafterlogin/Admin/Viewpayment";


const PaymentHistory = () => {
  const { search } = useContext(SearchContext);
  // eslint-disable-next-line no-unused-vars
  const [payments, setPayments] = useState([
    {
      id: 1,
      patientName: "Alice Smith",
      patientId: "PAT001",
      billNumber: "BILL001",
      paymentDate: "2024-01-15",
      amount: 1250.0,
      paymentMethod: "Credit Card",
      status: "Completed",
      serviceType: "Consultation",
      doctorName: "Dr. John Doe",
      department: "Cardiology",
      transactionId: "TXN001234567",
      description: "Cardiology consultation and ECG test",
    },
    {
      id: 2,
      patientName: "Bob Johnson",
      patientId: "PAT002",
      billNumber: "BILL002",
      paymentDate: "2024-01-14",
      amount: 3500.0,
      paymentMethod: "Insurance",
      status: "Completed",
      serviceType: "Surgery",
      doctorName: "Dr. Sarah Wilson",
      department: "General Surgery",
      transactionId: "TXN001234568",
      description: "Appendectomy surgery and post-op care",
    },
    {
      id: 3,
      patientName: "Jane Doe",
      patientId: "PAT003",
      billNumber: "BILL003",
      paymentDate: "2024-01-13",
      amount: 750.0,
      paymentMethod: "Cash",
      status: "Completed",
      serviceType: "Laboratory",
      doctorName: "Dr. Michael Brown",
      department: "Pathology",
      transactionId: "TXN001234569",
      description: "Blood work and diagnostic tests",
    },
    {
      id: 4,
      patientName: "Robert Davis",
      patientId: "PAT004",
      billNumber: "BILL004",
      paymentDate: "2024-01-12",
      amount: 2200.0,
      paymentMethod: "Debit Card",
      status: "Pending",
      serviceType: "Emergency",
      doctorName: "Dr. Emily Davis",
      department: "Emergency",
      transactionId: "TXN001234570",
      description: "Emergency room treatment and X-ray",
    },
    {
      id: 5,
      patientName: "Lisa Anderson",
      patientId: "PAT005",
      billNumber: "BILL005",
      paymentDate: "2024-01-11",
      amount: 1800.0,
      paymentMethod: "Insurance",
      status: "Failed",
      serviceType: "Radiology",
      doctorName: "Dr. James Miller",
      department: "Radiology",
      transactionId: "TXN001234571",
      description: "MRI scan and radiological consultation",
    },
  ]);

  const [toast, setToast] = useState({ show: false, message: "", type: "success" });
  const [filterStatus, setFilterStatus] = useState("All");
  const [filterPaymentMethod, setFilterPaymentMethod] = useState("All");
  
  // New state for modals
  const [showViewModal, setShowViewModal] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState(null);

  const filteredPayments = payments.filter((payment) => {
    const matchesSearch = 
      payment.patientName.toLowerCase().includes(search.toLowerCase()) ||
      payment.billNumber.toLowerCase().includes(search.toLowerCase()) ||
      payment.doctorName.toLowerCase().includes(search.toLowerCase()) ||
      payment.department.toLowerCase().includes(search.toLowerCase()) ||
      payment.transactionId.toLowerCase().includes(search.toLowerCase());
    
    const matchesStatus = filterStatus === "All" || payment.status === filterStatus;
    const matchesPaymentMethod = filterPaymentMethod === "All" || payment.paymentMethod === filterPaymentMethod;
    
    return matchesSearch && matchesStatus && matchesPaymentMethod;
  });

  const onclose = () => {
    setShowViewModal(false);
    setSelectedPayment(null);
  }

  const showToast = (message, type = "success") => {
    setToast({ show: true, message, type });
  };

  const hideToast = () => {
    setToast({ show: false, message: "", type: "success" });
  };

  const getStatusBadge = (status) => {
    const statusStyles = {
      Completed: "bg-green-100 text-green-800",
      Pending: "bg-yellow-100 text-yellow-800",
      Failed: "bg-red-100 text-red-800",
      Refunded: "bg-blue-100 text-blue-800",
    };
    
    return (
      <span className={`px-2 py-1 text-xs font-medium rounded-full ${statusStyles[status] || 'bg-gray-100 text-gray-800'}`}>
        {status}
      </span>
    );
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount);
  };

  // Updated handleViewDetails function
  const handleViewDetails = (payment) => {
    setSelectedPayment(payment);
    setShowViewModal(true);
  };

  // Updated handleDownloadReceipt function
  const handleDownloadReceipt = (payment) => {
    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Payment Receipt - ${payment.billNumber}</title>
          <style>
            body { 
              font-family: Arial, sans-serif; 
              margin: 0; 
              padding: 20px; 
              background: white;
            }
            .receipt-container {
              max-width: 600px;
              margin: 0 auto;
              background: white;
              border: 1px solid #ddd;
              border-radius: 8px;
              overflow: hidden;
            }
            .header {
              background: #232946;
              color: white;
              padding: 20px;
              text-align: center;
            }
            .header h1 {
              margin: 0;
              font-size: 24px;
            }
            .header p {
              margin: 5px 0 0 0;
              opacity: 0.9;
            }
            .receipt-info {
              padding: 20px;
              background: #f8f9fa;
              border-bottom: 1px solid #eee;
            }
            .receipt-info h2 {
              margin: 0 0 10px 0;
              color: #232946;
              font-size: 18px;
            }
            .info-grid {
              display: grid;
              grid-template-columns: 1fr 1fr;
              gap: 10px;
              margin-top: 15px;
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
            .amount-section {
              padding: 20px;
              text-align: center;
              background: #f0f8f0;
            }
            .amount-section h3 {
              margin: 0;
              color: #28a745;
              font-size: 24px;
            }
            .footer {
              padding: 20px;
              text-align: center;
              background: #232946;
              color: white;
              font-size: 12px;
            }
            .status-badge {
              display: inline-block;
              padding: 4px 12px;
              border-radius: 20px;
              font-size: 12px;
              font-weight: bold;
            }
            .status-completed { background: #d4edda; color: #155724; }
            .status-pending { background: #fff3cd; color: #856404; }
            .status-failed { background: #f8d7da; color: #721c24; }
            @media print {
              body { margin: 0; }
              .receipt-container { border: none; }
            }
          </style>
        </head>
        <body>
          <div class="receipt-container">
            <div class="header">
              <h1>Hospital Management System</h1>
              <p>Payment Receipt</p>
            </div>
            
            <div class="receipt-info">
              <h2>Receipt #${payment.billNumber}</h2>
              <p><strong>Transaction ID:</strong> ${payment.transactionId}</p>
              <p><strong>Date:</strong> ${new Date(payment.paymentDate).toLocaleDateString()}</p>
              
              <div class="info-grid">
                <div>
                  <div class="info-item">
                    <span class="info-label">Patient Name:</span>
                    <span class="info-value">${payment.patientName}</span>
                  </div>
                  <div class="info-item">
                    <span class="info-label">Patient ID:</span>
                    <span class="info-value">${payment.patientId}</span>
                  </div>
                  <div class="info-item">
                    <span class="info-label">Service Type:</span>
                    <span class="info-value">${payment.serviceType}</span>
                  </div>
                  <div class="info-item">
                    <span class="info-label">Department:</span>
                    <span class="info-value">${payment.department}</span>
                  </div>
                </div>
                <div>
                  <div class="info-item">
                    <span class="info-label">Doctor:</span>
                    <span class="info-value">${payment.doctorName}</span>
                  </div>
                  <div class="info-item">
                    <span class="info-label">Payment Method:</span>
                    <span class="info-value">${payment.paymentMethod}</span>
                  </div>
                  <div class="info-item">
                    <span class="info-label">Status:</span>
                    <span class="info-value">
                      <span class="status-badge status-${payment.status.toLowerCase()}">${payment.status}</span>
                    </span>
                  </div>
                </div>
              </div>
              
              <div class="info-item" style="margin-top: 15px; grid-column: 1 / -1;">
                <span class="info-label">Description:</span>
                <span class="info-value">${payment.description}</span>
              </div>
            </div>
            
            <div class="amount-section">
              <h3>Total Amount: ${formatCurrency(payment.amount)}</h3>
            </div>
            
            <div class="footer">
              <p>Thank you for choosing our hospital services!</p>
              <p>Generated on: ${new Date().toLocaleString()}</p>
            </div>
          </div>
        </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
    showToast(`Receipt for ${payment.billNumber} downloaded successfully`, "success");
  };

  const totalRevenue = filteredPayments
    .filter(p => p.status === "Completed")
    .reduce((sum, payment) => sum + payment.amount, 0);

  const pendingAmount = filteredPayments
    .filter(p => p.status === "Pending")
    .reduce((sum, payment) => sum + payment.amount, 0);

  const statData = [
    { 
      icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-green-600"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" /></svg>,
      stat: formatCurrency(totalRevenue),
      label: "Total Revenue"
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-yellow-600"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
      stat: formatCurrency(pendingAmount),
      label: "Pending Payments"
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-blue-600"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>,
      stat: filteredPayments.length,
      label: "Total Transactions"
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
      <div className="flex items-center mb-6">
        <span className="text-2xl mr-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-7 h-7 text-gray-400"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"
            />
          </svg>
        </span>
        <h2 className="text-3xl font-semibold text-[#0B2443]">Payment History</h2>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
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
            <option value="Pending">Pending</option>
            <option value="Failed">Failed</option>
            <option value="Refunded">Refunded</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Payment Method</label>
          <select
            value={filterPaymentMethod}
            onChange={(e) => setFilterPaymentMethod(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="All">All Methods</option>
            <option value="Cash">Cash</option>
            <option value="Credit Card">Credit Card</option>
            <option value="Debit Card">Debit Card</option>
            <option value="Insurance">Insurance</option>
            <option value="Bank Transfer">Bank Transfer</option>
          </select>
        </div>
      </div>

      <CommonTable
        columns={[
          { label: "Bill #", key: "billNumber" },
          { label: "Patient", key: "patientName" },
          { label: "Date", key: "paymentDate" },
          { 
            label: "Amount", 
            key: "amount", 
            render: (payment) => (
              <span className="font-semibold text-green-600">
                {formatCurrency(payment.amount)}
              </span>
            )
          },
          { label: "Method", key: "paymentMethod" },
          { 
            label: "Status", 
            key: "status", 
            render: (payment) => getStatusBadge(payment.status)
          },
          { label: "Service", key: "serviceType" },
          { label: "Department", key: "department" },
        ]}
        data={filteredPayments}
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
                  <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </>
            ),
            onClick: (payment) => handleViewDetails(payment),
            className: "bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-xs flex items-center transition-colors",
            title: "View Details"
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
            onClick: (payment) => handleDownloadReceipt(payment),
            className: "bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded text-xs flex items-center transition-colors",
            title: "Download Receipt"
          },
        ]}
      />
      {/* View Details Modal */}
      <Viewpayment onclose={onclose} formatCurrency={formatCurrency} getStatusBadge={getStatusBadge} selectedPayment={selectedPayment} handleDownloadReceipt={handleDownloadReceipt} showViewModal={showViewModal} />
      <Toast
        message={toast.message}
        isVisible={toast.show}
        type={toast.type}
        onClose={hideToast}
      />
    </div>
  );
};

export default PaymentHistory;
