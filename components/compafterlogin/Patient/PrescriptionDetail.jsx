"use client";
import { FaEye, FaPrint } from "react-icons/fa";

export default function PrescriptionDetail({ selectedPrescription, handleClosePrescription, handlePrint }) {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto relative">
            {/* Close button - moved to top for better visibility */}
            <button
              className="absolute top-7 right-4 z-10 text-gray-400 hover:text-gray-600 text-2xl font-bold bg-white rounded-full w-8 h-8 flex items-center justify-center shadow-md hover:shadow-lg transition-all"
              onClick={handleClosePrescription}
              aria-label="Close"
            >
              ×
            </button>

            <div className="p-8">
              {/* Modal Header */}
              <div className="flex items-center justify-between mb-6 pr-8">
                <div className="flex items-center gap-3">
                  <div className="bg-[#0B2443] rounded-full p-3">
                    <FaEye className="text-white text-2xl" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800">Bayanno Hospital</h2>
                    <div className="text-sm text-[#0B2443] font-semibold">Medical Prescription</div>
                  </div>
                </div>
                <div className="text-right text-sm text-gray-500">
                  <div>Date: {selectedPrescription.date}</div>
                  <div>Time: {selectedPrescription.time}</div>
                  <div>ID: {selectedPrescription.prescriptionId}</div>
                </div>
              </div>

              {/* Patient & Doctor Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 border-b border-gray-200 pb-6">
                <div>
                  <h3 className="font-semibold text-gray-700 mb-3">Patient Information</h3>
                  <div className="space-y-2 text-sm">
                    <div><span className="font-medium">Name:</span> {selectedPrescription.patientName}</div>
                    <div><span className="font-medium">Age:</span> {selectedPrescription.age} years</div>
                    <div><span className="font-medium">Gender:</span> {selectedPrescription.sex}</div>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-700 mb-3">Doctor Information</h3>
                  <div className="space-y-2 text-sm">
                    <div><span className="font-medium">Doctor:</span> {selectedPrescription.doctorName}</div>
                    <div><span className="font-medium">Reg. No:</span> {selectedPrescription.regNo}</div>
                    <div><span className="font-medium">Department:</span> {selectedPrescription.department}</div>
                  </div>
                </div>
              </div>

              {/* Diagnosis */}
              <div className="mb-6">
                <h3 className="font-semibold text-gray-700 mb-3">Diagnosis</h3>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="text-sm">
                    <span className="font-medium">Code:</span> {selectedPrescription.diagnosisCode}
                  </div>
                  <div className="text-sm mt-1">
                    <span className="font-medium">Description:</span> {selectedPrescription.diagnosis}
                  </div>
                </div>
              </div>

              {/* Medications */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl font-bold text-blue-900">℞</span>
                  <span className="font-semibold text-gray-700">Prescribed Medications</span>
                </div>
                <div className="space-y-3">
                  {selectedPrescription.medications.map((medication, index) => (
                    <div key={index} className="border rounded-lg p-4 bg-gray-50">
                      <div className="font-medium text-gray-800 mb-2">{medication.name} {medication.dosage}</div>
                      <div className="text-sm text-gray-600 space-y-1">
                        <div><span className="font-medium">Frequency:</span> {medication.frequency}</div>
                        <div><span className="font-medium">Duration:</span> {medication.duration}</div>
                        <div><span className="font-medium">Instructions:</span> {medication.instructions}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* General Instructions */}
              <div className="mb-6">
                <h3 className="font-semibold text-gray-700 mb-3">General Instructions</h3>
                <div className="bg-blue-50 rounded-lg p-4">
                  <p className="text-gray-700">{selectedPrescription.instructions}</p>
                </div>
              </div>

              {/* Follow-up */}
              <div className="mb-6">
                <h3 className="font-semibold text-gray-700 mb-3">Follow-up Information</h3>
                <div className="text-sm">
                  <span className="font-medium">Next Visit:</span> {selectedPrescription.followUpDate}
                </div>
              </div>

              {/* Modal Footer */}
              <div className="flex justify-between items-center pt-6 border-t border-gray-200">
                <button 
                  onClick={handlePrint}
                  className="bg-[#0B2443] text-white px-6 py-2 rounded-lg font-medium flex items-center gap-2 hover:bg-blue-600 transition"
                >
                  <FaPrint className="w-4 h-4" />
                  Print
                </button>
                <button 
                  onClick={handleClosePrescription}
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