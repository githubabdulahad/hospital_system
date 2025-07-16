import React from "react";

const DoctorRequestedAppointmentTable = ({ requests, onApprove, onDelete }) => (
  <div className="bg-white rounded-xl shadow p-6 overflow-x-auto">
    <table className="min-w-full text-sm">
      <thead>
        <tr className="text-gray-500 text-left border-b">
          <th className="py-3 px-2 font-semibold">Date</th>
          <th className="py-3 px-2 font-semibold">Patient</th>
          <th className="py-3 px-2 font-semibold">Doctor</th>
          <th className="py-3 px-2 font-semibold">Actions</th>
        </tr>
      </thead>
      <tbody>
        {requests.length === 0 ? (
          <tr>
            <td colSpan={4} className="py-6 px-2 text-center text-gray-400">
              No requested appointments found
            </td>
          </tr>
        ) : (
          requests.map((req, idx) => (
            <tr key={idx} className="border-b last:border-b-0">
              <td className="py-3 px-2">{req.date}</td>
              <td className="py-3 px-2">{req.patient}</td>
              <td className="py-3 px-2">{req.doctor}</td>
              <td className="py-3 px-2">
                <div className="flex gap-2">
                <button
                  className="bg-[#C0E6DA]   hover:bg-[#13b188] text-[#0B2443] font-semibold px-4 py-1 rounded mr-2 flex items-center"
                  onClick={() => onApprove(idx)}
                >
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" /></svg>
                  Approve
                </button>
                <button
                  className="bg-red-400 hover:bg-red-500 text-white font-semibold px-4 py-1 rounded flex items-center"
                  onClick={() => onDelete(idx)}
                >
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12" /></svg>
                  Delete
                </button>
                </div>
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  </div>
);

export default DoctorRequestedAppointmentTable;
