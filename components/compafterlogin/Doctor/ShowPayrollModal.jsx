"use client";

export default function ShowPayrollModadl({ selectedPayroll, setShowPayrollModal , getStatusBadge }) {
    return(
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-4xl w-full mx-4 max-h-[95vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Payroll Details - {selectedPayroll.payPeriod}</h3>
              <button
                onClick={() => setShowPayrollModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-700 border-b pb-2">Employee Information</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-600">Employee ID</label>
                    <p className="text-gray-900">{selectedPayroll.employeeId}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600">Employee Name</label>
                    <p className="text-gray-900">{selectedPayroll.employeeName}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600">Department</label>
                    <p className="text-gray-900">{selectedPayroll.department}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600">Position</label>
                    <p className="text-gray-900">{selectedPayroll.position}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600">Pay Period</label>
                    <p className="text-gray-900">{selectedPayroll.payPeriod}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600">Status</label>
                    <div>{getStatusBadge(selectedPayroll.status)}</div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-700 border-b pb-2">Salary Breakdown</h4>
                <div className="space-y-3">
                  <div className="flex justify-between border-b pb-2">
                    <span className="text-sm font-medium text-gray-600">Basic Salary</span>
                    <span className="text-gray-900">${selectedPayroll.basicSalary.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="text-sm font-medium text-gray-600">Allowances</span>
                    <span className="text-green-600">+${selectedPayroll.allowances.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="text-sm font-medium text-gray-600">Overtime</span>
                    <span className="text-green-600">+${selectedPayroll.overtime.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="text-sm font-medium text-gray-600">Bonuses</span>
                    <span className="text-green-600">+${selectedPayroll.bonuses.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="text-sm font-medium text-gray-600">Deductions</span>
                    <span className="text-red-600">-${selectedPayroll.deductions.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between font-bold text-lg pt-2 border-t-2">
                    <span className="text-gray-800">Net Salary</span>
                    <span className="text-green-600">${selectedPayroll.netSalary.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-6 bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-700 mb-2">Payment Information</h4>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-600">Pay Date</label>
                  <p className="text-gray-900">{selectedPayroll.payDate}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-600">Payment Status</label>
                  <div>{getStatusBadge(selectedPayroll.status)}</div>
                </div>
              </div>
            </div>
            
            <div className="mt-6 flex justify-end space-x-3">
              <button
                onClick={() => setShowPayrollModal(false)}
                className="px-4 py-2 border border-gray-300 rounded-md text-white bg-[#0B2443] hover:bg-blue-900"
              >
                Close
              </button>
            </div>
          </div>
        </div>
    )
}