"use client";
import { FaDownload, FaPrint } from 'react-icons/fa';

export default function ReportDetailsModal({getStatusBadge, handleCloseModal, selectedReport, activeTab }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto relative">
            {/* Close button */}
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 z-10 text-gray-400 hover:text-gray-600 text-2xl font-bold bg-white rounded-full w-8 h-8 flex items-center justify-center shadow-md hover:shadow-lg transition-all"
              aria-label="Close"
            >
              ×
            </button>
            
            <div className="p-8">
              {/* Modal Header */}
              <div className="flex items-center justify-between mb-6 pr-8">
                <div>
                  <h2 className="text-2xl font-bold text-[#0B2443]">{activeTab} Report Details</h2>
                  <p className="text-blue-800">Report ID: {selectedReport.reportId}</p>
                </div>
              </div>

              {/* Report Summary */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-blue-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-700 mb-3">Report Information</h3>
                  <div className="space-y-2 text-sm">
                    <div><span className="font-medium">Description:</span> {selectedReport.description}</div>
                    <div><span className="font-medium">Date:</span> {selectedReport.date}</div>
                    <div><span className="font-medium">Time:</span> {selectedReport.time}</div>
                    {selectedReport.duration && (
                      <div><span className="font-medium">Duration:</span> {selectedReport.duration}</div>
                    )}
                  </div>
                </div>

                <div className="bg-green-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-700 mb-3">Medical Team</h3>
                  <div className="space-y-2 text-sm">
                    <div><span className="font-medium">Doctor:</span> {selectedReport.doctor}</div>
                    <div><span className="font-medium">Department:</span> {selectedReport.department}</div>
                    {selectedReport.outcome && (
                      <div><span className="font-medium">Outcome:</span> {getStatusBadge(selectedReport.outcome)}</div>
                    )}
                  </div>
                </div>
              </div>

              {/* Specific Details based on report type */}
              {activeTab === 'Birth' && selectedReport.babyWeight && (
                <div className="mb-6">
                  <h3 className="font-semibold text-gray-700 mb-3">Birth Details</h3>
                  <div className="bg-pink-50 rounded-lg p-4">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div><span className="font-medium">Baby Weight:</span> {selectedReport.babyWeight}</div>
                      <div><span className="font-medium">Baby Gender:</span> {selectedReport.babyGender}</div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'Death' && selectedReport.causeOfDeath && (
                <div className="mb-6">
                  <h3 className="font-semibold text-gray-700 mb-3">Death Certificate Details</h3>
                  <div className="bg-red-50 rounded-lg p-4">
                    <div className="space-y-2 text-sm">
                      <div><span className="font-medium">Cause of Death:</span> {selectedReport.causeOfDeath}</div>
                      <div><span className="font-medium">Primary Diagnosis:</span> {selectedReport.primaryDiagnosis}</div>
                      {selectedReport.secondaryDiagnosis && (
                        <div><span className="font-medium">Secondary Diagnosis:</span> {selectedReport.secondaryDiagnosis}</div>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* Complications & Notes */}
              <div className="mb-6">
                <h3 className="font-semibold text-gray-700 mb-3">Additional Information</h3>
                <div className="space-y-4">
                  {selectedReport.complications && (
                    <div className="bg-yellow-50 rounded-lg px-4 py-1">
                      <p className="font-medium text-sm text-gray-700 mb-1">Complications:</p>
                      <p className="text-sm text-gray-600">{selectedReport.complications}</p>
                    </div>
                  )}
                  <div className="bg-gray-50 rounded-lg px-4 py-1">
                    <p className="font-medium text-sm text-gray-700 mb-1">Notes:</p>
                    <p className="text-sm text-gray-600">{selectedReport.notes}</p>
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="flex justify-end items-center pt-2 border-t border-gray-200">
                
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
  );
}