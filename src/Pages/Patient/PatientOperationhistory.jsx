import React, { useContext } from 'react';
import { SearchContext } from '../../Context/SearchContext';


const operationHistoryData = [
  {
    description: 'Some report',
    date: '11/16/2017',
    doctor: 'Micheal Pew',
  },
];

const birthHistoryData = [];
const deathHistoryData = [];

const PatientOperationhistory = () => {
  const { search } = useContext(SearchContext);
  const [activeTab, setActiveTab] = React.useState('Operation');

  let data = [];
  if (activeTab === 'Operation') data = operationHistoryData;
  if (activeTab === 'Birth') data = birthHistoryData;
  if (activeTab === 'Death') data = deathHistoryData;

  const filteredData = data.filter(
    (row) =>
      (row.description?.toLowerCase().includes(search.toLowerCase()) || '') ||
      (row.date?.includes(search) || '') ||
      (row.doctor?.toLowerCase().includes(search.toLowerCase()) || '')
  );

  return (
    <div className="max-w-5xl mx-auto mt-10 mb-8 text-[#0B2443]" style={{ fontFamily: "'Gill Sans MT', 'Gill Sans', 'GillSans', 'Arial', 'sans-serif'" }}>
      <h2 className="text-3xl font-bold text-[#0B2443] mb-6 flex items-center gap-2">
        <span className="text-2xl">&#8853;</span> Operation History
      </h2>
      {/* Tabs */}
      <div className="flex gap-2 mb-4 shadow-2xl shadow-blue-300">
        {['Operation', 'Birth', 'Death'].map((tab) => (
          <button
            key={tab}
            className={`px-6 py-2 border-b-2 font-medium transition-all duration-150 ${activeTab === tab ? 'border-[#9ECFC2] text-[#599F90] bg-white' : 'border-transparent text-gray-400 bg-[#f8fafc]'}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="bg-white/80 rounded-2xl shadow-2xl shadow-blue-300 p-6 backdrop-blur-md border border-[#e0e7ef]">
        <table className="min-w-full text-sm text-left border-t border-[#e0e7ef]">
          <thead className="bg-[#f8fafc]">
            <tr>
              <th className="py-3 px-6 font-semibold text-[#0B2443]">Description</th>
              <th className="py-3 px-6 font-semibold text-[#0B2443]">Date</th>
              <th className="py-3 px-6 font-semibold text-[#0B2443]">Doctor</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.length === 0 ? (
              <tr>
                <td colSpan={3} className="py-6 text-center text-gray-400">No data available in table</td>
              </tr>
            ) : (
              filteredData.map((row, idx) => (
                <tr key={idx} className="border-b last:border-b-0 border-[#e0e7ef]">
                  <td className="py-3 px-6 text-[#6c757d] font-medium">{row.description}</td>
                  <td className="py-3 px-6 text-[#6c757d]">{row.date}</td>
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

export default PatientOperationhistory;