import React from "react";

const ViewPrescriptionModal = ({ open, onClose, prescription }) => {
  if (!open || !prescription) return null;

  const {
    patient = {},
    doctor = {},
    date = '',
    time = '',
    caseHistory = '',
    medication = '',
    note = '',
  } = prescription;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-transparent bg-opacity-40 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-2xl shadow-2xl p-10 w-full max-w-xl relative animate-modalPop border-t-8 border-gray-400">
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl font-bold transition-transform duration-200 hover:scale-125"
          onClick={onClose}
          aria-label="Close"
        >
          &times;
        </button>
        <h2 className="text-2xl font-extrabold text-center mb-6 text-gray-700 tracking-wide drop-shadow">Bayanno Hospital Management System</h2>
        <div className="flex justify-between mb-4 text-gray-700 text-sm">
          <div>
            <div><span className="font-semibold">Patient Name:</span> {patient.name || prescription.patient}</div>
            <div><span className="font-semibold">Age:</span> {patient.age || '27'}</div>
            <div><span className="font-semibold">Sex:</span> {patient.sex || 'male'}</div>
          </div>
          <div className="text-right">
            <div><span className="font-semibold">Doctor Name:</span> {doctor.name || prescription.doctor}</div>
            <div><span className="font-semibold">Date:</span> {date || '05 Jul, 2025'}</div>
            <div><span className="font-semibold">Time:</span> {time || '00:05'}</div>
          </div>
        </div>
        <div className="bg-gray-50 rounded-lg p-6 mb-6 shadow-inner animate-fadeIn">
          <div className="mb-4 border-b pb-2">
            <span className="font-semibold">Case History :</span>
            <span className="ml-2 text-gray-700">{caseHistory || 'ini apa'}</span>
          </div>
          <div className="mb-4 border-b pb-2">
            <span className="font-semibold">Medication :</span>
            <span className="ml-2 text-gray-700">{medication || 'medication'}</span>
          </div>
          <div>
            <span className="font-semibold">Note :</span>
            <span className="ml-2 text-gray-700">{note || 'catatan'}</span>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <button
            className="bg-teal-500 hover:bg-teal-600 text-white font-semibold px-5 py-2 rounded-full flex items-center transition-transform duration-200 hover:scale-105 shadow"
            onClick={() => window.print()} // Replace with actual print logic if needed
          >
            Print Prescription
          </button>
          <button
            className="bg-gray-400 hover:bg-gray-500 text-white font-semibold px-6 py-2 rounded-full transition-transform duration-200 hover:scale-105"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
      <style>{`
        .animate-fadeIn { animation: fadeIn 0.3s; }
        .animate-modalPop { animation: modalPop 0.3s; }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes modalPop { 0% { transform: scale(0.85); opacity: 0; } 100% { transform: scale(1); opacity: 1; } }
      `}</style>
    </div>
  );
};

export default ViewPrescriptionModal;
