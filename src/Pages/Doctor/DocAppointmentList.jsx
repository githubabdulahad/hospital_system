import React from 'react';
import DoctorAppointmentTable from '../../Components/compafterlogin/Doctor/DoctorAppointmentTable';

const dummyAppointments = [
  { date: '2025-07-03', time: '10:00 AM', patient: 'Tanvir Hossain', status: 'Confirmed' },
  { date: '2025-07-03', time: '11:30 AM', patient: 'Ayesha Khan', status: 'Pending' },
  { date: '2025-07-03', time: '01:00 PM', patient: 'John Doe', status: 'Cancelled' },
];

const DocAppointmentList = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto" style={{ fontFamily: "'Gill Sans MT', 'Gill Sans', 'GillSans', 'Arial', 'sans-serif'" }}>
      <div className="bg-white rounded-xl shadow p-6 mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4 flex items-center">
          <svg className="w-7 h-7 text-gray-400 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
          Appointment List
        </h2>
        <DoctorAppointmentTable appointments={dummyAppointments} />
      </div>
    </div>
  );
};

export default DocAppointmentList;
