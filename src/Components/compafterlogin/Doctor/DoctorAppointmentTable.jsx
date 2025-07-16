import React from "react";

const DoctorAppointmentTable = ({ appointments }) => (
  <div className="bg-white rounded-xl shadow p-6 overflow-x-auto">
    <table className="min-w-full text-sm">
      <thead>
        <tr className="text-gray-500 text-left border-b">
          <th className="py-3 px-2 font-semibold">Date</th>
          <th className="py-3 px-2 font-semibold">Time</th>
          <th className="py-3 px-2 font-semibold">Patient</th>
          <th className="py-3 px-2 font-semibold">Status</th>
          <th className="py-3 px-2 font-semibold">Actions</th>
        </tr>
      </thead>
      <tbody>
        {appointments.length === 0 ? (
          <tr>
            <td colSpan={5} className="py-6 px-2 text-center text-gray-400">
              No appointments found
            </td>
          </tr>
        ) : (
          appointments.map((appt, idx) => (
            <tr key={idx} className="border-b last:border-b-0">
              <td className="py-3 px-2">{appt.date}</td>
              <td className="py-3 px-2">{appt.time}</td>
              <td className="py-3 px-2">{appt.patient}</td>
              <td className="py-3 px-2">
                <span className={`px-2 py-1 rounded text-xs font-semibold ${appt.status === 'Confirmed' ? 'bg-green-100 text-green-700' : appt.status === 'Pending' ? 'bg-yellow-100 text-yellow-700' : 'bg-red-100 text-red-700'}`}>{appt.status}</span>
              </td>
              <td className="py-3 px-2">
                <button className="bg-[#C0E6DA] hover:bg-[#b2d8c7] text-[#0B2443] font-semibold px-3 py-1 rounded mr-2">View</button>
                <button className="bg-red-100 hover:bg-red-200 text-red-700 font-semibold px-3 py-1 rounded">Cancel</button>
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  </div>
);

export default DoctorAppointmentTable;
