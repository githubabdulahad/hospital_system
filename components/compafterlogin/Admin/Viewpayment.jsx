"use client";

export default function Viewpayment({onclose , formatCurrency , getStatusBadge , selectedPayment , handleDownloadReceipt}) {
    if (!selectedPayment) {
        return null; // Don't render anything if selectedPayment is null
    }
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-gray-800">Payment Details</h3>
                <button
                  onClick={onclose}
                  className="text-gray-400 hover:text-gray-600 text-2xl"
                >
                  ×
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-2">Payment Information</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Bill Number:</span>
                        <span className="font-medium">{selectedPayment.billNumber}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Transaction ID:</span>
                        <span className="font-medium">{selectedPayment.transactionId}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Payment Date:</span>
                        <span className="font-medium">{new Date(selectedPayment.paymentDate).toLocaleDateString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Amount:</span>
                        <span className="font-medium text-[#0B2443] text-lg">{formatCurrency(selectedPayment.amount)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Payment Method:</span>
                        <span className="font-medium">{selectedPayment.paymentMethod}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Status:</span>
                        <span>{getStatusBadge(selectedPayment.status)}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-2">Patient & Service Information</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Patient Name:</span>
                        <span className="font-medium">{selectedPayment.patientName}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Patient ID:</span>
                        <span className="font-medium">{selectedPayment.patientId}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Service Type:</span>
                        <span className="font-medium">{selectedPayment.serviceType}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Department:</span>
                        <span className="font-medium">{selectedPayment.department}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Doctor:</span>
                        <span className="font-medium">{selectedPayment.doctorName}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6">
                <h4 className="font-semibold text-gray-700 mb-2">Description</h4>
                <p className="text-gray-600 bg-gray-50 p-3 rounded">{selectedPayment.description}</p>
              </div>
              
              <div className="flex justify-end gap-3 mt-6">
                <button
                  onClick={() => handleDownloadReceipt(selectedPayment)}
                  className="bg-[#0B2443] hover:bg-blue-900 text-white px-4 py-2 rounded flex items-center gap-2"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download Receipt
                </button>
                <button
                  onClick={onclose}
                  className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
    );
}