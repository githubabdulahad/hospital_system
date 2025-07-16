import React, { useState } from "react";

const initialPayrolls = [
  {
    id: "57775da",
    doctor: "Micheal Pewd",
    summary: {
      basic: 0,
      allowance: 0,
      deduction: 0,
      net: 0,
    },
    date: "January, 2018",
    status: "Paid",
  },
  {
    id: "c44c3ab",
    doctor: "Micheal Pewd",
    summary: {
      basic: 750,
      allowance: 150,
      deduction: 30,
      net: 870,
    },
    date: "March, 2017",
    status: "Unpaid",
  },
];

const DocPayroll = () => {
  const [payrolls] = useState(initialPayrolls);

  return (
    <div className="p-6 max-w-6xl mx-auto" style={{ fontFamily: "'Gill Sans MT', 'Gill Sans', 'GillSans', 'Arial', 'sans-serif'" }}>
      <h2 className="text-3xl font-semibold text-gray-700 flex items-center mb-6">
        <svg className="w-7 h-7 text-gray-400 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 8V4m0 0a4 4 0 014 4v4m-4-8a4 4 0 00-4 4v4m8 0H4m16 0h-4m-4 0v8m0 0a4 4 0 004-4v-4m-4 8a4 4 0 01-4-4v-4" /></svg>
        Payroll List
      </h2>
      <div className="bg-white rounded-xl shadow p-6">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="text-gray-500 text-left border-b">
              <th className="py-3 px-2 font-semibold">#</th>
              <th className="py-3 px-2 font-semibold">ID</th>
              <th className="py-3 px-2 font-semibold">Doctor</th>
              <th className="py-3 px-2 font-semibold">Summary</th>
              <th className="py-3 px-2 font-semibold">Date</th>
              <th className="py-3 px-2 font-semibold">Status</th>
              <th className="py-3 px-2 font-semibold">Options</th>
            </tr>
          </thead>
          <tbody>
            {payrolls.length === 0 ? (
              <tr>
                <td colSpan={7} className="py-6 px-2 text-center text-gray-400">
                  No payrolls found
                </td>
              </tr>
            ) : (
              payrolls.map((row, idx) => (
                <tr key={row.id} className="border-b last:border-b-0">
                  <td className="py-3 px-2">{idx + 1}</td>
                  <td className="py-3 px-2">{row.id}</td>
                  <td className="py-3 px-2">{row.doctor}</td>
                  <td className="py-3 px-2 whitespace-pre-line">
                    Basic Salary   : {row.summary.basic} <br />
                    Total Allowance: {row.summary.allowance}<br/>
                    Total Deduction: {row.summary.deduction}<br/>
                    Net Salary     : {row.summary.net}
                  </td>
                  <td className="py-3 px-2">{row.date}</td>
                  <td className="py-3 px-2">
                    <span className={`px-3 py-1 rounded text-xs font-semibold ${row.status === 'Paid' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>{row.status}</span>
                  </td>
                  <td className="py-3 px-2">
                    <div className="relative inline-block ">
                      <button className="bg-teal-500 hover:bg-teal-600 text-white font-normal px-8 py-1 rounded-full flex items-center gap-1">
                        Action
                        <span className="ml-1 text-lg leading-none">&#9662;</span>
                      </button>
                      {/* Dropdown actions can be implemented here */}
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DocPayroll;
