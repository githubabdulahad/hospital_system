"use client";
import { FaUserMd } from 'react-icons/fa';

export default function Viewhistorymodal({ selectedAdmission, handleCloseModal ,calculateTotalDays, getStatusBadge}) {
    return(
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              {/* Modal Header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-[#0B2443]">Admission Details</h2>
                  <p className="text-blue-900">ID: {selectedAdmission.admissionId}</p>
                </div>
                <button
                  onClick={handleCloseModal}
                  className="text-gray-400 hover:text-gray-600 text-2xl font-bold"
                >
                  ×
                </button>
              </div>

              {/* Admission Summary */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-blue-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-700 mb-3">Admission Information</h3>
                  <div className="space-y-2 text-sm">
                    <div><span className="font-medium">Date:</span> {selectedAdmission.admissionDate} at {selectedAdmission.admissionTime}</div>
                    <div><span className="font-medium">Discharge:</span> {selectedAdmission.dischargeDate} at {selectedAdmission.dischargeTime}</div>
                    <div><span className="font-medium">Duration:</span> {calculateTotalDays(selectedAdmission.totalDays)}</div>
                    <div><span className="font-medium">Reason:</span> {selectedAdmission.reasonForAdmission}</div>
                  </div>
                </div>

                <div className="bg-green-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-700 mb-3">Accommodation Details</h3>
                  <div className="space-y-2 text-sm">
                    <div><span className="font-medium">Bed Number:</span> {selectedAdmission.bedNumber}</div>
                    <div><span className="font-medium">Bed Type:</span> {selectedAdmission.bedType}</div>
                    <div><span className="font-medium">Ward:</span> {selectedAdmission.ward}</div>
                    <div><span className="font-medium">Status:</span> {getStatusBadge(selectedAdmission.status)}</div>
                  </div>
                </div>
              </div>

              {/* Medical Team */}
              <div className="mb-6">
                <h3 className="font-semibold text-gray-700 mb-3">Medical Team</h3>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center">
                    <FaUserMd className="w-5 h-5 text-blue-500 mr-3" />
                    <div>
                      <div className="font-medium">{selectedAdmission.attendingDoctor}</div>
                      <div className="text-sm text-gray-600">{selectedAdmission.department}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Billing Information */}
              <div className="mb-6">
                <h3 className="font-semibold text-gray-700 mb-3">Billing Summary</h3>
                <div className="bg-yellow-50 rounded-lg p-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-medium">Room Charges:</span>
                      <span className="ml-2">{selectedAdmission.roomCharges}</span>
                    </div>
                    <div>
                      <span className="font-medium">Treatment Charges:</span>
                      <span className="ml-2">{selectedAdmission.treatmentCharges}</span>
                    </div>
                    <div>
                      <span className="font-medium">Total Bill:</span>
                      <span className="ml-2 font-bold">{selectedAdmission.totalBill}</span>
                    </div>
                    <div>
                      <span className="font-medium">Insurance:</span>
                      <span className="ml-2 font-semibold">{selectedAdmission.insurance}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Medical Notes */}
              <div className="mb-6">
                <h3 className="font-semibold text-gray-700 mb-3">Medical Notes</h3>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-gray-700">{selectedAdmission.notes}</p>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="flex justify-end items-center border-t border-gray-200">
                <button
                  onClick={handleCloseModal}
                  className="bg-gray-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-gray-600 transition"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
    )
}