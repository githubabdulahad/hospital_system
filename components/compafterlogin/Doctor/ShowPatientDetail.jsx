"use client";

export default function ShowPatientDetail({setShowPatientModal, selectedPatient,  getBloodGroupBadge, getStatusBadge}) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Patient Details</h3>
              <button
                onClick={() => setShowPatientModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-700 border-b pb-2">Personal Information</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-600">Patient ID</label>
                    <p className="text-gray-900">{selectedPatient.patientId}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600">Name</label>
                    <p className="text-gray-900">{selectedPatient.name}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600">Age</label>
                    <p className="text-gray-900">{selectedPatient.age} years</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600">Gender</label>
                    <p className="text-gray-900">{selectedPatient.gender}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600">Blood Group</label>
                    <div>{getBloodGroupBadge(selectedPatient.bloodGroup)}</div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600">Status</label>
                    <div>{getStatusBadge(selectedPatient.status)}</div>
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-gray-600">Address</label>
                  <p className="text-gray-900">{selectedPatient.address}</p>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-gray-600">Emergency Contact</label>
                  <p className="text-gray-900">{selectedPatient.emergencyContact}</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-700 border-b pb-2">Medical Information</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-600">Room Number</label>
                    <p className="text-gray-900">{selectedPatient.room}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600">Admission Date</label>
                    <p className="text-gray-900">{selectedPatient.admissionDate}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600">Last Visit</label>
                    <p className="text-gray-900">{selectedPatient.lastVisit}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600">Next Appointment</label>
                    <p className="text-gray-900">{selectedPatient.nextAppointment}</p>
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-gray-600">Current Diagnosis</label>
                  <p className="text-gray-900">{selectedPatient.diagnosis}</p>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-600">Phone</label>
                    <p className="text-gray-900">{selectedPatient.phone}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600">Email</label>
                    <p className="text-gray-900">{selectedPatient.email}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-6 flex justify-end space-x-3">
              <button
                onClick={() => setShowPatientModal(false)}
                className="px-4 py-2 border bg-[#0B2443] border-gray-300 rounded-md text-white hover:bg-blue-900"
              >
                Close
              </button>
            </div>
          </div>
        </div>
  );
}