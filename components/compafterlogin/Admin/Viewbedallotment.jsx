"use client";

export default function Viewbedallotment({oncloseViewModal , calDays , getbedbadge , getStatbadge, selectedAllotment,  formatCurrency}) {
    if(selectedAllotment == null) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-gray-800">
                  Bed Allotment Details
                </h3>
                <button
                  onClick={oncloseViewModal}
                  className="text-gray-400 hover:text-gray-600 text-2xl"
                >
                  ×
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-3">
                      Patient Information
                    </h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Patient Name:</span>
                        <span className="font-medium">
                          {selectedAllotment.patientName}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Patient ID:</span>
                        <span className="font-medium">
                          {selectedAllotment.patientId}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">
                          Emergency Contact:
                        </span>
                        <span className="font-medium">
                          {selectedAllotment.emergencyContact}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Admission Reason:</span>
                        <span className="font-medium">
                          {selectedAllotment.admissionReason}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-700 mb-3">
                      Medical Staff
                    </h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Doctor:</span>
                        <span className="font-medium">
                          {selectedAllotment.doctorName}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Nurse:</span>
                        <span className="font-medium">
                          {selectedAllotment.nurseName}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-3">
                      Bed Information
                    </h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Allotment ID:</span>
                        <span className="font-medium">
                          {selectedAllotment.allotmentId}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Bed Number:</span>
                        <span className="font-medium">
                          {selectedAllotment.bedNumber}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Ward:</span>
                        <span className="font-medium">
                          {selectedAllotment.wardName}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Bed Type:</span>
                        <span>
                          {getbedbadge(selectedAllotment.bedType)}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Status:</span>
                        <span>{getStatbadge(selectedAllotment.status)}</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-700 mb-3">
                      Dates & Duration
                    </h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Allotment Date:</span>
                        <span className="font-medium">
                          {selectedAllotment.allotmentDate}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Discharge Date:</span>
                        <span className="font-medium">
                          {selectedAllotment.dischargeDate || "Not discharged"}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Days Stayed:</span>
                        <span className="font-medium">
                          {calDays(
                            selectedAllotment.allotmentDate,
                            selectedAllotment.dischargeDate
                          )}{" "}
                          days
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <h4 className="font-semibold text-gray-700 mb-3">
                  Charges Summary
                </h4>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Daily Rate:</span>
                    <span className="font-medium">
                      {formatCurrency(selectedAllotment.dailyRate)}
                    </span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Days:</span>
                    <span className="font-medium">
                      {calDays(
                        selectedAllotment.allotmentDate,
                        selectedAllotment.dischargeDate
                      )}
                    </span>
                  </div>
                  <div className="flex justify-between text-lg font-bold text-green-600 border-t pt-2">
                    <span>Total Charges:</span>
                    <span>
                      {formatCurrency(selectedAllotment.totalCharges)}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <h4 className="font-semibold text-gray-700 mb-2">Notes</h4>
                <p className="text-gray-600 bg-gray-50 p-3 rounded">
                  {selectedAllotment.notes}
                </p>
              </div>

              <div className="flex justify-end gap-3 mt-6">
                <button
                  onClick={oncloseViewModal}
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