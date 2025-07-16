import React, { useState, useRef } from "react";
import ProfileIcon from "../Common/ProfileIcon";

const DoctorPatientTable = ({ patients, onAction }) => {
  const [openMenuIdx, setOpenMenuIdx] = useState(null);
  const menuRef = useRef();

  // Close menu on outside click
  React.useEffect(() => {
    const handleClick = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpenMenuIdx(null);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div className="bg-white rounded-xl shadow p-6 overflow-x-auto">
      <table className="min-w-full text-sm">
        <thead>
          <tr className="text-gray-500 text-left border-b">
            <th className="py-3 px-2 font-semibold">Avatar</th>
            <th className="py-3 px-2 font-semibold">Name</th>
            <th className="py-3 px-2 font-semibold">Email</th>
            <th className="py-3 px-2 font-semibold">Address</th>
            <th className="py-3 px-2 font-semibold">Phone</th>
            <th className="py-3 px-2 font-semibold">Gender</th>
            <th className="py-3 px-2 font-semibold">DOB</th>
            <th className="py-3 px-2 font-semibold">Age</th>
            <th className="py-3 px-2 font-semibold">Blood Group</th>
            <th className="py-3 px-2 font-semibold">Actions</th>
          </tr>
        </thead>
        <tbody>
          {patients.length === 0 ? (
            <tr>
              <td colSpan={10} className="py-6 px-2 text-center text-gray-400">
                No patients found
              </td>
            </tr>
          ) : (
            patients.map((patient, idx) => (
              <tr key={idx} className="border-b last:border-b-0">
                <td className="py-3 px-2"><ProfileIcon /></td>
                <td className="py-3 px-2">{patient.name}</td>
                <td className="py-3 px-2">{patient.email}</td>
                <td className="py-3 px-2">{patient.address}</td>
                <td className="py-3 px-2">{patient.phone}</td>
                <td className="py-3 px-2">{patient.gender}</td>
                <td className="py-3 px-2">{patient.dob}</td>
                <td className="py-3 px-2">{patient.age}</td>
                <td className="py-3 px-2">{patient.bloodGroup}</td>
                <td className="py-3 px-2 relative">
                  <button
                    className="bg-[#C0E6DA] hover:bg-[#b2d8c7] text-[#0B2443] font-semibold px-4 py-2 rounded flex items-center"
                    onClick={() => setOpenMenuIdx(openMenuIdx === idx ? null : idx)}
                  >
                    Action
                    <svg className="w-4 h-4 inline ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" /></svg>
                  </button>
                  {openMenuIdx === idx && (
                    <div ref={menuRef} className="absolute z-10 right-0 mt-2 w-56 bg-white border border-gray-200 rounded shadow-lg py-2">
                      <button className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => onAction("profile", patient)}>
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5.121 17.804A13.937 13.937 0 0112 15c2.5 0 4.847.655 6.879 1.804M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                        Profile
                      </button>
                      <button className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => onAction("medication", patient)}>
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        View Medication History
                      </button>
                      <button className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => onAction("edit", patient)}>
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M11 5h2m-1 0v14m-7-7h14" /></svg>
                        Edit
                      </button>
                      <button className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-red-100" onClick={() => onAction("delete", patient)}>
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12" /></svg>
                        Delete
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default DoctorPatientTable;
