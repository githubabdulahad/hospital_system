import React, { useContext } from 'react';
import { SearchContext } from '../../Context/SearchContext';

const pendingAppointments = [
  { date: '10 Jul, 2025 – 10:00', patient: 'Tanvir Hasan', doctor: 'Micheal Pew' },
  { date: '12 Jul, 2025 – 11:30', patient: 'Tanvir Hasan', doctor: 'Erich Mcbride' },
  { date: '15 Jul, 2025 – 09:15', patient: 'Tanvir Hasan', doctor: 'Micheal Pew' },
];

const PatientPendingAppointments = () => {
  const { search } = useContext(SearchContext);

  const filteredData = pendingAppointments.filter(
    (row) =>
      row.date.toLowerCase().includes(search.toLowerCase()) ||
      row.patient.toLowerCase().includes(search.toLowerCase()) ||
      row.doctor.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-6xl mx-auto mt-10 mb-8 text-[#0B2443]" style={{ fontFamily: "'Gill Sans MT', 'Gill Sans', 'GillSans', 'Arial', 'sans-serif'" }}>
      <h2 className="text-3xl font-bold text-[#0B2443] mb-6 flex items-center gap-2">
        <span className="text-2xl">&#8853;</span> Pending Appointment
      </h2>
      <div className="bg-white/80 rounded-2xl shadow-2xl shadow-blue-300 p-6 backdrop-blur-md border border-[#e0e7ef]">
        <table className="min-w-full text-sm text-left border-t border-[#e0e7ef]">
          <thead className="bg-[#f8fafc]">
            <tr>
              <th className="py-3 px-6 font-semibold text-[#0B2443]">Date</th>
              <th className="py-3 px-6 font-semibold text-[#0B2443]">Patient</th>
              <th className="py-3 px-6 font-semibold text-[#0B2443]">Doctor</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.length === 0 ? (
              <tr>
                <td colSpan={3} className="py-6 text-center text-gray-400">No pending appointments found.</td>
              </tr>
            ) : (
              filteredData.map((row, idx) => (
                <tr key={idx} className="border-b last:border-b-0 border-[#e0e7ef]">
                  <td className="py-3 px-6 text-[#6c757d] font-medium">{row.date}</td>
                  <td className="py-3 px-6 text-[#6c757d]">{row.patient}</td>
                  <td className="py-3 px-6 text-[#6c757d]">{row.doctor}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PatientPendingAppointments;