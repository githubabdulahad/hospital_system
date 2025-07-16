import React, { useState } from "react";

const initialDonors = [
  {
    name: "Mishelle Obama",
    age: 30,
    sex: "female",
    bloodGroup: "A+",
    lastDonationDate: "11/17/2017",
  },
];

const initialStatus = [
  { bloodGroup: "A+", status: "10 bags" },
  { bloodGroup: "A-", status: "0 bags" },
  { bloodGroup: "AB+", status: "0 bags" },
  { bloodGroup: "AB-", status: "0 bags" },
  { bloodGroup: "B+", status: "0 bags" },
  { bloodGroup: "B-", status: "0 bags" },
  { bloodGroup: "O+", status: "0 bags" },
  { bloodGroup: "O-", status: "0 bags" },
];

const DocBloodbank = () => {
  const [donors] = useState(initialDonors);
  const [tab, setTab] = useState("donor");
  const [status] = useState(initialStatus);

  return (
    <div className="p-6 max-w-6xl mx-auto" style={{ fontFamily: "'Gill Sans MT', 'Gill Sans', 'GillSans', 'Arial', 'sans-serif'" }}>
      <h2 className="text-3xl font-semibold text-gray-700 flex items-center mb-6">
        <svg className="w-7 h-7 text-gray-400 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 8V4m0 0a4 4 0 014 4v4m-4-8a4 4 0 00-4 4v4m8 0H4m16 0h-4m-4 0v8m0 0a4 4 0 004-4v-4m-4 8a4 4 0 01-4-4v-4" /></svg>
        Blood Bank
      </h2>
      <div className="bg-white rounded-xl shadow p-6">
        <div className="flex gap-4 mb-4 border-b">
          <button
            className={`px-4 py-2 font-semibold ${tab === 'donor' ? 'border-b-2 border-teal-500 text-teal-600' : 'text-gray-500'}`}
            onClick={() => setTab('donor')}
          >
            Blood Donor List
          </button>
          <button
            className={`px-4 py-2 font-semibold ${tab === 'status' ? 'border-b-2 border-teal-500 text-teal-600' : 'text-gray-500'}`}
            onClick={() => setTab('status')}
          >
            Blood Bank Status
          </button>
        </div>
        {tab === 'donor' && (
          <div>
            
            <table className="min-w-full text-sm">
              <thead>
                <tr className="text-gray-500 text-left border-b">
                  <th className="py-3 px-2 font-semibold">Name</th>
                  <th className="py-3 px-2 font-semibold">Age</th>
                  <th className="py-3 px-2 font-semibold">Sex</th>
                  <th className="py-3 px-2 font-semibold">Blood Group</th>
                  <th className="py-3 px-2 font-semibold">Last Donation Date</th>
                </tr>
              </thead>
              <tbody>
                {donors.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="py-6 px-2 text-center text-gray-400">
                      No donors found
                    </td>
                  </tr>
                ) : (
                  donors.map((donor, idx) => (
                    <tr key={idx} className="border-b last:border-b-0">
                      <td className="py-3 px-2">{donor.name}</td>
                      <td className="py-3 px-2">{donor.age}</td>
                      <td className="py-3 px-2">{donor.sex}</td>
                      <td className="py-3 px-2">{donor.bloodGroup}</td>
                      <td className="py-3 px-2">{donor.lastDonationDate}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
            <div className="flex justify-between items-center mt-4">
              <span className="text-gray-500">Showing 1 to {donors.length} of {donors.length} entries</span>
              <div>
                <button className="border px-3 py-1 rounded">&lt;</button>
                <button className="border px-3 py-1 rounded ml-2">1</button>
                <button className="border px-3 py-1 rounded ml-2">&gt;</button>
              </div>
            </div>
          </div>
        )}
        {tab === 'status' && (
          <div>
            
            <table className="min-w-full text-sm">
              <thead>
                <tr className="text-gray-500 text-left border-b">
                  <th className="py-3 px-2 font-semibold">Blood Group</th>
                  <th className="py-3 px-2 font-semibold">Status</th>
                </tr>
              </thead>
              <tbody>
                {status.length === 0 ? (
                  <tr>
                    <td colSpan={2} className="py-6 px-2 text-center text-gray-400">
                      No status found
                    </td>
                  </tr>
                ) : (
                  status.map((row, idx) => (
                    <tr key={idx} className="border-b last:border-b-0">
                      <td className="py-3 px-2">{row.bloodGroup}</td>
                      <td className="py-3 px-2">{row.status}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
            <div className="flex justify-between items-center mt-4">
              <span className="text-gray-500">Showing 1 to {status.length} of {status.length} entries</span>
              <div>
                <button className="border px-3 py-1 rounded">&lt;</button>
                <button className="border px-3 py-1 rounded ml-2">1</button>
                <button className="border px-3 py-1 rounded ml-2">&gt;</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DocBloodbank;
