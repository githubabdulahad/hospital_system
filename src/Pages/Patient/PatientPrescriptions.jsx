
import React, { useContext, useState } from 'react';
import { SearchContext } from '../../Context/SearchContext';
import { FaEye } from 'react-icons/fa';

const prescriptions = [
  {
    date: '16 Nov, 2017 – 11:10',
    patient: 'Tanvir Hasan',
    doctor: 'Micheal Pew',
    id: 1,
  },
  {
    date: '16 Nov, 2017 – 11:10',
    patient: 'ali Hasan',
    doctor: 'Micheal Pew',
    id: 1,
  },
];

const diagnosisReports = [
  {
    date: '16 Nov, 2017 – 14:05',
    reportType: 'blood_test',
    documentType: 'pdf',
    description: 'Some description',
    id: 1,
  },
  {
    date: '16 Nov, 2017 – 14:05',
    reportType: 'blood_test',
    documentType: 'pdf',
    description: 'Some description',
    id: 2,
  },
  {
    date: '18 Dec, 2017 – 14:05',
    reportType: 'blood_test',
    documentType: 'image',
    description: 'Some description',
    id: 3,
  },
];

export default function PatientPrescriptions() {
  const { search } = useContext(SearchContext);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPrescription, setSelectedPrescription] = useState(null);
  const [diagnosisModalOpen, setDiagnosisModalOpen] = useState(false);
  const [selectedDiagnosis, setSelectedDiagnosis] = useState(null);
  // Filter prescriptions based on search from header
  const filtered = prescriptions.filter(
    (p) =>
      p.patient.toLowerCase().includes(search.toLowerCase()) ||
      p.doctor.toLowerCase().includes(search.toLowerCase()) ||
      p.date.toLowerCase().includes(search.toLowerCase())
  );
  const handleView = (prescription) => {
    setSelectedPrescription(prescription);
    setModalOpen(true);
  };
  const handleClose = () => {
    setModalOpen(false);
    setSelectedPrescription(null);
  };
  // Diagnosis modal handlers
  const handleViewDiagnosis = (diagnosis) => {
    setSelectedDiagnosis(diagnosis);
    setDiagnosisModalOpen(true);
  };
  const handleDiagnosisClose = () => {
    setDiagnosisModalOpen(false);
    setSelectedDiagnosis(null);
  };
  return (
    <div className="max-w-5xl mx-auto mt-10 mb-8" style={{ fontFamily: "'Gill Sans MT', 'Gill Sans', 'GillSans', 'Arial', 'sans-serif'" }}>
      <h2 className="text-3xl font-bold text-[#0B2443] mb-6 flex items-center gap-2">
        <span className="text-2xl">&#8853;</span> Prescription
      </h2>
      <div className="bg-white/80 rounded-2xl shadow-2xl shadow-blue-300 p-6 ml-10 backdrop-blur-md border border-[#e0e7ef]">
        <div className="overflow-x-auto rounded-xl">
          <table className="min-w-full text-sm text-left border-t border-[#e0e7ef]">
            <thead className="bg-[#f8fafc]">
              <tr>
                <th className="py-3 px-4 font-semibold text-[#0B2443]">Date</th>
                <th className="py-3 px-4 font-semibold text-[#0B2443]">Patient</th>
                <th className="py-3 px-4 font-semibold text-[#0B2443]">Doctor</th>
                <th className="py-3 px-4 font-semibold text-[#0B2443]">Options</th>
              </tr>
            </thead>
            <tbody>
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan={4} className="py-6 text-center text-gray-400">No prescriptions found.</td>
                </tr>
              ) : (
                filtered.map((p) => (
                  <tr key={p.id} className="border-b last:border-b-0 border-[#e0e7ef] ">
                    <td className="py-3 px-4">{p.date}</td>
                    <td className="py-3 px-4">{p.patient}</td>
                    <td className="py-3 px-4">{p.doctor}</td>
                    <td className="py-3 px-4 flex">
                      <button
                        className="bg-gray-600 text-white rounded-full px-5 py-2 mr-2 flex items-center gap-2 hover:bg-[#C0E6DA] hover:text-[#0B2443] transition"
                        onClick={() => handleView(p)}
                      >
                        <FaEye /> View Prescription
                      </button>
                      <button
                        className="bg-gray-600 text-white rounded-full px-5 py-2 flex items-center gap-2 hover:bg-[#C0E6DA] hover:text-[#0B2443] transition"
                        onClick={() => handleViewDiagnosis(p)}
                      >
                        <FaEye /> View Diagnosis Report
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
      {/* Modal for View Prescription */}
      {modalOpen && selectedPrescription && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full mx-4 animate-fadeIn relative border border-[#1ecab8]">
            <button
              className="absolute top-4 right-4 text-2xl text-gray-400 hover:text-[#1ecab8] focus:outline-none"
              onClick={handleClose}
              aria-label="Close"
            >
              &times;
            </button>
            <div className="p-8">
              {/* Header: Clinic/Logo and Title */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="bg-[#1ecab8] rounded-full p-3">
                    <FaEye className="text-white text-2xl" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-[#0B2443]">Bayanno Hospital</h2>
                    <div className="text-xs text-[#1ecab8] font-semibold">Prescription</div>
                  </div>
                </div>
                <div className="text-right text-xs text-gray-500">
                  <div>Date: {selectedPrescription.date}</div>
                  <div>Time: 11:10</div>
                </div>
              </div>
              {/* Patient & Doctor Info */}
              <div className="flex flex-col md:flex-row md:justify-between mb-6 text-base text-[#0B2443] border-b border-[#e0e7ef] pb-4">
                <div>
                  <div className="mb-1"><span className="font-semibold">Patient Name:</span> {selectedPrescription.patient}</div>
                  <div className="mb-1"><span className="font-semibold">Age:</span> 27</div>
                  <div><span className="font-semibold">Sex:</span> Male</div>
                </div>
                <div className="text-right mt-4 md:mt-0">
                  <div className="mb-1"><span className="font-semibold">Doctor:</span> {selectedPrescription.doctor}</div>
                  <div className="mb-1"><span className="font-semibold">Reg. No:</span> 123456</div>
                  <div><span className="font-semibold">Dept:</span> General Medicine</div>
                </div>
              </div>
              {/* Rx Section */}
              <div className="flex items-center gap-2 mb-2 mt-4">
                <span className="text-2xl font-bold text-[#1ecab8]">&#8478;x</span>
                <span className="text-[#0B2443] font-semibold">Prescription</span>
              </div>
              <div className="bg-[#f8fafc] rounded-xl p-6 shadow mb-6 border border-[#e0e7ef]">
                <ul className="ml-4 text-gray-700 list-disc text-base space-y-1">
                  <li>Paracetamol 500mg — 1 tablet twice daily after meals</li>
                  <li>Amoxicillin 250mg — 1 capsule every 8 hours</li>
                  <li>Ibuprofen 200mg — as needed for pain</li>
                </ul>
              </div>
              {/* Advice/Notes */}
              <div className="mb-6">
                <span className="font-semibold text-[#1ecab8]">Doctor's Advice:</span>
                <div className="ml-2 text-gray-600 mt-1">Drink plenty of water. Complete the course. Return for follow-up in 7 days.</div>
              </div>
              {/* Footer: Signature and Print */}
              <div className="flex justify-between items-center mt-8 border-t pt-4 border-[#e0e7ef]">
                <button className="bg-[#1ecab8] text-white px-6 py-2 rounded-full font-semibold flex items-center gap-2 hover:bg-[#159e8c] transition shadow">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /></svg>
                  Print
                </button>
                <button className="bg-gray-400 text-white px-6 py-2 rounded-full font-semibold hover:bg-gray-600 transition" onClick={handleClose}>Close</button>

              </div>
            </div>
          </div>
        </div>
      )}
      {/* Modal for View Diagnosis Report */}
      {diagnosisModalOpen && selectedDiagnosis && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full mx-4 animate-fadeIn relative">
            <button
              className="absolute top-4 right-4 text-2xl text-gray-400 hover:text-gray-700 focus:outline-none"
              onClick={handleDiagnosisClose}
              aria-label="Close"
            >
              &times;
            </button>
            <div className="p-8">
              <h2 className="text-2xl font-bold text-center mb-6 text-[#0B2443]">Bayanno Hospital Management System</h2>
              <div className="bg-[#f8fafc] rounded-xl p-6 shadow mb-6">
                <table className="min-w-full text-sm text-left">
                  <thead>
                    <tr>
                      <th className="py-3 px-4 font-semibold text-[#0B2443]">Date</th>
                      <th className="py-3 px-4 font-semibold text-[#0B2443]">Report Type</th>
                      <th className="py-3 px-4 font-semibold text-[#0B2443]">Document Type</th>
                      <th className="py-3 px-4 font-semibold text-[#0B2443]">Description</th>
                      <th className="py-3 px-4 font-semibold text-[#0B2443]">Download</th>
                    </tr>
                  </thead>
                  <tbody>
                    {diagnosisReports
                      .map((item, idx) => (
                        <tr key={idx}>
                          <td className="py-3 px-4">{item.date}</td>
                          <td className="py-3 px-4">{item.reportType}</td>
                          <td className="py-3 px-4">{item.documentType}</td>
                          <td className="py-3 px-4">{item.description}</td>
                          <td className="py-3 px-4">
                            <a
                              href="#"
                              className="bg-[#3DB6F9] text-white px-5 py-2 rounded-full font-semibold hover:bg-[#1a8edb] transition"
                              download
                            >
                              Download
                            </a>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
              <div className="flex justify-end items-center">
                <button className="bg-gray-400 text-white px-6 py-2 rounded-full font-semibold hover:bg-gray-600 transition" onClick={handleDiagnosisClose}>Close</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
