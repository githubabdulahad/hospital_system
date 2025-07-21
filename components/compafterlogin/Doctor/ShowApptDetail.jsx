"use client";

export default function ShowApptDetail({setShowAppointmentModal, selectedAppointment ,getStatusBadge , getTypeBadge}) {
    return(
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-3xl w-full mx-4 max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Appointment Details</h3>
              <button
                onClick={() => setShowAppointmentModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-700 border-b pb-2">Appointment Information</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-600">Appointment ID</label>
                    <p className="text-gray-900">{selectedAppointment.appointmentId}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600">Patient Name</label>
                    <p className="text-gray-900">{selectedAppointment.patientName}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600">Date</label>
                    <p className="text-gray-900">{selectedAppointment.appointmentDate}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600">Time</label>
                    <p className="text-gray-900">{selectedAppointment.appointmentTime}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600">Duration</label>
                    <p className="text-gray-900">{selectedAppointment.duration}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600">Room</label>
                    <p className="text-gray-900">{selectedAppointment.room}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600">Type</label>
                    <div>{getTypeBadge(selectedAppointment.type)}</div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600">Status</label>
                    <div>{getStatusBadge(selectedAppointment.status)}</div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-700 border-b pb-2">Medical Information</h4>
                <div>
                  <label className="text-sm font-medium text-gray-600">Reason for Visit</label>
                  <p className="text-gray-900">{selectedAppointment.reason}</p>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-gray-600">Notes</label>
                  <p className="text-gray-900">{selectedAppointment.notes}</p>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-gray-600">Created Date</label>
                  <p className="text-gray-900">{selectedAppointment.createdDate}</p>
                </div>
              </div>
            </div>
            
            <div className="mt-6 flex justify-end space-x-3">
              <button
                onClick={() => setShowAppointmentModal(false)}
                className="px-4 py-2 border border-gray-300 rounded-md text-white bg-[#0B2443] hover:bg-blue-900"
              >
                Close
              </button>
            </div>
          </div>
        </div>
    )
}