import React from 'react';

const PatientDoctorProfileModal = ({ doctor, show, onClose, onPrint }) => {
  if (!show || !doctor) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl max-w-xl w-full p-0 relative animate-fadeInUp">
        <div className="flex justify-between items-center px-8 pt-8 pb-2 border-b border-gray-100">
          <h3 className="text-xl font-semibold text-[#0B2443]">Bayanno Hospital Management System</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-700 text-2xl font-bold focus:outline-none">&times;</button>
        </div>
        <div className="px-8 py-6">
          <div className="bg-[#f8fafc] rounded-xl shadow p-6 mb-6">
            <div className="mb-2"><span className="font-semibold">Name :</span> <span className="ml-2">{doctor.name}</span></div>
            <div className="mb-2"><span className="font-semibold">Address :</span> <span className="ml-2">{doctor.address}</span></div>
            <div className="mb-2"><span className="font-semibold">Department :</span> <span className="ml-2">{doctor.department}</span></div>
            <div className="mb-2"><span className="font-semibold">Phone :</span> <span className="ml-2">{doctor.phone}</span></div>
            <div className="mb-2"><span className="font-semibold">Profile :</span> <span className="ml-2">{doctor.profile}</span></div>
          </div>
          <div className="flex justify-between items-center mt-4">
            <button
              className="bg-[#1ecab8] text-white px-6 py-2 rounded-full font-semibold flex items-center gap-2 shadow hover:bg-[#159e8c] transition"
              onClick={onPrint}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 9V2h12v7" /><rect width="16" height="13" x="4" y="9" rx="2" /><path strokeLinecap="round" strokeLinejoin="round" d="M6 18h12" /></svg>
              Print
            </button>
            <button
              className="bg-gray-400 text-white px-6 py-2 rounded-full font-semibold shadow hover:bg-gray-600 transition"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientDoctorProfileModal;
