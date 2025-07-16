import React from 'react';
import CommonTable from '../../Components/compafterlogin/Common/CommonTable';

const birthData = [
  {
    baby: 'Emma Doe',
    gender: 'Female',
    mother: 'Jane Doe',
    father: 'John Doe',
    date: '2025-06-10',
    doctor: 'Dr. Smith',
    remarks: 'Healthy',
  },
  {
    baby: 'Ali Khan',
    gender: 'Male',
    mother: 'Sara Khan',
    father: 'Ahmed Khan',
    date: '2025-06-12',
    doctor: 'Dr. Ahmed',
    remarks: 'Normal delivery',
  },
];

const birthColumns = [
  { label: 'Baby Name', key: 'baby' },
  { label: 'Gender', key: 'gender' },
  { label: 'Mother', key: 'mother' },
  { label: 'Father', key: 'father' },
  { label: 'Date', key: 'date' },
  { label: 'Doctor', key: 'doctor' },
  { label: 'Remarks', key: 'remarks' },
];

const AdmBirth = () => {
  return (
    <div className="p-6" style={{ fontFamily: "'Gill Sans MT', 'Gill Sans', 'GillSans', 'Arial', 'sans-serif'" }}>
      <div className="flex items-center mb-6">
        <span className="text-2xl mr-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 text-gray-400">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118A7.5 7.5 0 0112 15.75a7.5 7.5 0 017.5 4.368M18 6.75a2.25 2.25 0 112.25 2.25" />
          </svg>
        </span>
        <h2 className="text-3xl font-semibold text-gray-500">Birth Reports</h2>
      </div>
      <CommonTable
        columns={birthColumns}
        data={birthData}
        actions={[]}
      />
      <div className="flex justify-between items-center mt-4 text-gray-500 text-xs">
        <span>Showing 1 to {birthData.length} of {birthData.length} entries</span>
        <div className="flex items-center gap-1">
          <button className="border rounded px-2 py-1" disabled>{'<'}</button>
          <span className="px-2">1</span>
          <button className="border rounded px-2 py-1" disabled>{'>'}</button>
        </div>
      </div>
    </div>
  );
}

export default AdmBirth;
