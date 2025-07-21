"use client";

export default function AddEditPrescription({editingPrescription, setShowEditModal, handleFormSubmit , prescriptionForm, setPrescriptionForm , resetForm, addMedication, removeMedication, updateMedication}) {
  return(
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">
                {editingPrescription ? 'Edit Prescription' : 'Add New Prescription'}
              </h3>
              <button
                onClick={() => { setShowEditModal(false); resetForm(); }}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-700 border-b pb-2">Patient Information</h4>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Patient Name</label>
                  <input
                    type="text"
                    value={prescriptionForm.patientName}
                    onChange={(e) => setPrescriptionForm({...prescriptionForm, patientName: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Patient ID</label>
                  <input
                    type="text"
                    value={prescriptionForm.patientId}
                    onChange={(e) => setPrescriptionForm({...prescriptionForm, patientId: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Diagnosis Code</label>
                  <input
                    type="text"
                    value={prescriptionForm.diagnosisCode}
                    onChange={(e) => setPrescriptionForm({...prescriptionForm, diagnosisCode: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Follow-up Date</label>
                  <input
                    type="date"
                    value={prescriptionForm.followUpDate}
                    onChange={(e) => setPrescriptionForm({...prescriptionForm, followUpDate: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                  <select
                    value={prescriptionForm.status}
                    onChange={(e) => setPrescriptionForm({...prescriptionForm, status: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="Active">Active</option>
                    <option value="Completed">Completed</option>
                    <option value="Cancelled">Cancelled</option>
                    <option value="Pending">Pending</option>
                  </select>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h4 className="font-semibold text-gray-700 border-b pb-2">Medications</h4>
                  <button
                    type="button"
                    onClick={addMedication}
                    className="text-sm bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                  >
                    Add Medication
                  </button>
                </div>
                
                <div className="max-h-60 overflow-y-auto">
                  {prescriptionForm.medications.map((medication, index) => (
                    <div key={index} className="border border-gray-200 rounded p-3 mb-3">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium">Medication {index + 1}</span>
                        {prescriptionForm.medications.length > 1 && (
                          <button
                            type="button"
                            onClick={() => removeMedication(index)}
                            className="text-red-500 hover:text-red-700"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                              <path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                          </button>
                        )}
                      </div>
                      
                      <div className="grid grid-cols-2 gap-2">
                        <input
                          type="text"
                          placeholder="Medicine Name"
                          value={medication.name}
                          onChange={(e) => updateMedication(index, 'name', e.target.value)}
                          className="px-2 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                        />
                        <input
                          type="text"
                          placeholder="Dosage"
                          value={medication.dosage}
                          onChange={(e) => updateMedication(index, 'dosage', e.target.value)}
                          className="px-2 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                        />
                        <input
                          type="text"
                          placeholder="Frequency"
                          value={medication.frequency}
                          onChange={(e) => updateMedication(index, 'frequency', e.target.value)}
                          className="px-2 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                        />
                        <input
                          type="text"
                          placeholder="Duration"
                          value={medication.duration}
                          onChange={(e) => updateMedication(index, 'duration', e.target.value)}
                          className="px-2 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                        />
                      </div>
                    </div>
                  ))}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Instructions</label>
                  <textarea
                    value={prescriptionForm.instructions}
                    onChange={(e) => setPrescriptionForm({...prescriptionForm, instructions: e.target.value})}
                    rows="4"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Special instructions for the patient..."
                  />
                </div>
              </div>
            </div>
            
            <div className="mt-6 flex justify-end space-x-3">
              <button
                onClick={() => { setShowEditModal(false); resetForm(); }}
                className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={handleFormSubmit}
                className="px-4 py-2 bg-[#0B2443] text-white rounded-md hover:bg-blue-900"
              >
                {editingPrescription ? 'Update Prescription' : 'Create Prescription'}
              </button>
            </div>
          </div>
        </div>
  )
}