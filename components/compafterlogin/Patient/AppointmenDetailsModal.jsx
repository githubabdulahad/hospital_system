"use client";

export default function AppointmentDetailsModal({handleCloseModal, selectedAppointment , getStatusBadge}) {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              {/* Modal Header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-[#0B2443]">Appointment Details</h2>
                  <p className="text-gray-600">ID: {selectedAppointment.id}</p>
                </div>
                <button
                  onClick={handleCloseModal}
                  className="text-gray-400 hover:text-gray-600 text-2xl font-bold"
                >
                  ×
                </button>
              </div>

              {/* Appointment Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-blue-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-700 mb-3">Appointment Information</h3>
                  <div className="space-y-2 text-sm">
                    <div><span className="font-medium">Date:</span> {new Date(selectedAppointment.date).toLocaleDateString()}</div>
                    <div><span className="font-medium">Time:</span> {selectedAppointment.time}</div>
                    <div><span className="font-medium">Duration:</span> {selectedAppointment.duration}</div>
                    <div><span className="font-medium">Type:</span> {selectedAppointment.type}</div>
                    <div><span className="font-medium">Status:</span> {getStatusBadge(selectedAppointment.status)}</div>
                  </div>
                </div>

                <div className="bg-green-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-700 mb-3">Doctor Information</h3>
                  <div className="space-y-2 text-sm">
                    <div><span className="font-medium">Doctor:</span> {selectedAppointment.doctor}</div>
                    <div><span className="font-medium">Department:</span> {selectedAppointment.department}</div>
                    <div><span className="font-medium">Location:</span> {selectedAppointment.location}</div>
                    <div><span className="font-medium">Phone:</span> {selectedAppointment.phone}</div>
                  </div>
                </div>
              </div>

              {/* Notes */}
              <div className="mb-6">
                <h3 className="font-semibold text-gray-700 mb-3">Notes</h3>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-gray-700">{selectedAppointment.notes}</p>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="flex justify-end items-center pt-6 border-t border-gray-200">
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