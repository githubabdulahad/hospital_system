import React, { useContext } from 'react';
import { SearchContext } from '../../Context/SearchContext';

const admitHistoryData = [
  {
    bedNumber: '10',
    bedType: 'icu',
    allotmentTime: '07/04/2025',
    dischargeTime: '07/05/2025',
  },
  {
    bedNumber: '10',
    bedType: 'icu',
    allotmentTime: '07/06/2025',
    dischargeTime: '07/08/2025',
  },
  {
    bedNumber: '10',
    bedType: 'icu',
    allotmentTime: '07/06/2025',
    dischargeTime: '07/08/2025',
  },
];

const PatientAdmithistory = () => {
  const { search } = useContext(SearchContext);

  const filteredData = admitHistoryData.filter(
    (row) =>
      row.bedNumber.toLowerCase().includes(search.toLowerCase()) ||
      row.bedType.toLowerCase().includes(search.toLowerCase()) ||
      row.allotmentTime.includes(search) ||
      row.dischargeTime.includes(search)
  );

  return (
    <div className="max-w-5xl mx-auto mt-10 mb-8 text-[#0B2443]" style={{ fontFamily: "'Gill Sans MT', 'Gill Sans', 'GillSans', 'Arial', 'sans-serif'" }}>
      <h2 className="text-3xl font-bold text-[#0B2443] mb-6 flex items-center gap-2">
        <span className="text-2xl">&#8853;</span> Admit History
      </h2>
      <div className="bg-white/80 rounded-2xl shadow-2xl shadow-blue-300 p-6 backdrop-blur-md border border-[#e0e7ef]">
        <table className="min-w-full text-sm text-left border-t border-[#e0e7ef]">
          <thead className="bg-[#f8fafc]">
            <tr>
              <th className="py-3 px-15 font-semibold text-[#0B2443]">Bed Number</th>
              <th className="py-3 px-15 font-semibold text-[#0B2443]">Bed Type</th>
              <th className="py-3 px-15 font-semibold text-[#0B2443]">Allotment Time</th>
              <th className="py-3 px-15 font-semibold text-[#0B2443]">Discharge Time</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.length === 0 ? (
              <tr>
                <td colSpan={4} className="py-6 text-center text-gray-400">No entries found.</td>
              </tr>
            ) : (
              filteredData.map((row, idx) => (
                <tr key={idx} className="border-b last:border-b-0 border-[#e0e7ef]">
                  <td className="py-3 px-15 text-[#6c757d] font-medium">{row.bedNumber}</td>
                  <td className="py-3 px-15 text-[#6c757d]">{row.bedType}</td>
                  <td className="py-3 px-15 text-[#6c757d]">{row.allotmentTime}</td>
                  <td className="py-3 px-15 text-[#6c757d]">{row.dischargeTime}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PatientAdmithistory;