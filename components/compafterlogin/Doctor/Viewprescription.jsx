"use client";

export default function ViewPrescription({setShowPrescriptionModal, selectedPrescription , getStatusBadge}) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Prescription Details</h3>
              <button
                onClick={() => setShowPrescriptionModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-600">Prescription ID</label>
                  <p className="text-gray-900">{selectedPrescription.prescriptionId}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-600">Patient Name</label>
                  <p className="text-gray-900">{selectedPrescription.patientName}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-600">Diagnosis Code</label>
                  <p className="text-gray-900">{selectedPrescription.diagnosisCode}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-600">Status</label>
                  <div>{getStatusBadge(selectedPrescription.status)}</div>
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium text-gray-600">Diagnosis</label>
                <p className="text-gray-900">{selectedPrescription.diagnosis}</p>
              </div>
              
              <div>
                <label className="text-sm font-medium text-gray-600">Medications</label>
                <div className="space-y-2">
                  {selectedPrescription.medications.map((med, index) => (
                    <div key={index} className="border rounded-lg p-3 bg-gray-50">
                      <div className="font-medium">{med.name}</div>
                      <div className="text-sm text-gray-600">
                        <span className="mr-4">Dosage: {med.dosage}</span>
                        <span className="mr-4">Frequency: {med.frequency}</span>
                        <span>Duration: {med.duration}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium text-gray-600">Instructions</label>
                <p className="text-gray-900">{selectedPrescription.instructions}</p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-600">Prescribed Date</label>
                  <p className="text-gray-900">{selectedPrescription.prescribedDate}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-600">Follow-up Date</label>
                  <p className="text-gray-900">{selectedPrescription.followUpDate}</p>
                </div>
              </div>
            </div>
            
            <div className="mt-6 flex justify-end space-x-3">
              <button
                onClick={() => setShowPrescriptionModal(false)}
                className="px-4 py-2 border bg-gray-500 border-gray-300 rounded-md text-white hover:bg-gray-50"
              >
                Close
              </button>
            </div>
          </div>
        </div>
  )
}