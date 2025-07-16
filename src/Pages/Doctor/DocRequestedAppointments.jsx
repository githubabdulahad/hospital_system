import React, { useState } from 'react';
import DoctorRequestedAppointmentTable from '../../Components/compafterlogin/Doctor/DoctorRequestedAppointmentTable';

const dummyRequests = [
  { date: '18 Nov, 2017 – 17:05', patient: 'Tanvir Hasan', doctor: 'Micheal Pewd' },
  { date: '22 Nov, 2017 – 00:00', patient: 'Tanvir Hasan', doctor: 'Micheal Pewd' },
  { date: '22 Nov, 2017 – 01:00', patient: 'Tanvir Hasan', doctor: 'Micheal Pewd' },
];

const DocRequestedAppointments = () => {
  const [requests, setRequests] = useState(dummyRequests);

  const handleApprove = (idx) => {
    // In real app, call API here
    setRequests(prev => prev.filter((_, i) => i !== idx));
    // Optionally show a toast/notification
  };

  const handleDelete = (idx) => {
    // In real app, call API here
    setRequests(prev => prev.filter((_, i) => i !== idx));
    // Optionally show a toast/notification
  };

  return (
    <div className="p-6 max-w-4xl mx-auto" style={{ fontFamily: "'Gill Sans MT', 'Gill Sans', 'GillSans', 'Arial', 'sans-serif'" }}>
      <div className="bg-white rounded-xl shadow p-6 mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4 flex items-center">
          <svg className="w-7 h-7 text-gray-400 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
          Requested Appointments
        </h2>
        <DoctorRequestedAppointmentTable requests={requests} onApprove={handleApprove} onDelete={handleDelete} />
      </div>
    </div>
  );
};

export default DocRequestedAppointments;
