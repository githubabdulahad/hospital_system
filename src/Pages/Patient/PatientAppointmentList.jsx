
import React, { useContext } from 'react';
import { SearchContext } from '../../Context/SearchContext';
import CommonAddButton from '../../Components/compafterlogin/Common/CommonAddButton';

const appointmentData = [
  { date: '04 Jul, 2025 – 00:05', patient: 'Tanvir Hasan', doctor: 'Micheal Pew' },
  { date: '04 Jul, 2025 – 00:05', patient: 'Tanvir Hasan', doctor: 'Micheal Pew' },
  { date: '04 Jul, 2025 – 00:05', patient: 'Tanvir Hasan', doctor: 'Micheal Pew' },
  { date: '09 Jul, 2025 – 14:05', patient: 'Tanvir Hasan', doctor: 'Micheal Pew' },
  { date: '17 Nov, 2017 – 19:00', patient: 'Tanvir Hasan', doctor: 'Micheal Pew' },
  { date: '18 Nov, 2017 – 17:05', patient: 'Tanvir Hasan', doctor: 'Micheal Pew' },
  { date: '24 Nov, 2017 – 09:05', patient: 'Tanvir Hasan', doctor: 'Micheal Pew' },
];

const PatientAppointmentList = () => {
  const { search } = useContext(SearchContext);

  const filteredData = appointmentData.filter(
    (row) =>
      row.date.toLowerCase().includes(search.toLowerCase()) ||
      row.patient.toLowerCase().includes(search.toLowerCase()) ||
      row.doctor.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-6xl mx-auto mt-10 mb-8 text-[#0B2443]" style={{ fontFamily: "'Gill Sans MT', 'Gill Sans', 'GillSans', 'Arial', 'sans-serif'" }}>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-[#0B2443] flex items-center gap-2">
          <span className="text-2xl">&#8853;</span> Appointment
        </h2>
        <CommonAddButton label="Apply For Appointment" onClick={() => { /* handle open modal or navigation here */ }} />
      </div>
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
                <td colSpan={3} className="py-6 text-center text-gray-400">No appointments found.</td>
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
        <div className="text-gray-500 text-sm mt-4">
          Showing 1 to {filteredData.length} of {filteredData.length} entries
        </div>
      </div>
    </div>
  );
};

export default PatientAppointmentList;