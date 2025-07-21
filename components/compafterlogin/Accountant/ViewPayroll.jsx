"use client";
import { FaMoneyBillWave, FaUsers, FaTimes } from 'react-icons/fa';

export default function ViewPayroll({setShowModal, selectedPayroll, getStatusBadge}) {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
                  <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
                    <div className="p-8">
                      <div className="flex items-center justify-between mb-6">
                        <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                          <FaMoneyBillWave className="w-6 h-6 text-blue-700" />
                          Payroll Details
                        </h2>
                        <button
                          onClick={() => setShowModal(false)}
                          className="text-gray-400 hover:text-gray-600"
                        >
                          <FaTimes className="w-6 h-6" />
                        </button>
                      </div>
        
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-blue-50 rounded-lg p-4">
                          <h3 className="font-semibold text-gray-700 mb-3 flex items-center gap-2">
                            <FaUsers className="w-4 h-4 text-blue-600" />
                            Employee Information
                          </h3>
                          <div className="space-y-2 text-sm">
                            <div><span className="font-medium">Name:</span> {selectedPayroll.employee}</div>
                            <div><span className="font-medium">Role:</span> {selectedPayroll.role}</div>
                            <div><span className="font-medium">Department:</span> {selectedPayroll.department}</div>
                            <div><span className="font-medium">ID:</span> {selectedPayroll.id}</div>
                          </div>
                        </div>
        
                        <div className="bg-green-50 rounded-lg p-4">
                          <h3 className="font-semibold text-gray-700 mb-3 flex items-center gap-2">
                            <FaMoneyBillWave className="w-4 h-4 text-blue-600" />
                            Payment Information
                          </h3>
                          <div className="space-y-2 text-sm">
                            <div><span className="font-medium">Month:</span> {selectedPayroll.month}</div>
                            <div><span className="font-medium">Base Salary:</span> ${selectedPayroll.baseSalary?.toLocaleString()}</div>
                            <div><span className="font-medium">Bonus:</span> ${selectedPayroll.bonus?.toLocaleString()}</div>
                            <div><span className="font-medium">Deductions:</span> ${selectedPayroll.deductions?.toLocaleString()}</div>
                            <div className="pt-2 border-t">
                              <span className="font-bold text-lg">Total: {selectedPayroll.amount}</span>
                            </div>
                          </div>
                        </div>
                      </div>
        
                      <div className="mt-6 bg-gray-50 rounded-lg p-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <span className="font-medium">Status: </span>
                            {getStatusBadge(selectedPayroll.status)}
                          </div>
                          <div className="text-sm text-gray-600">
                            Processed: {selectedPayroll.date}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
    );
}