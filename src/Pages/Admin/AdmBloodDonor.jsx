import React from 'react';
import CommonTable from '../../Components/compafterlogin/Common/CommonTable';

const donorData = [
  { name: 'John Doe', age: 28, gender: 'Male', group: 'A+', lastDonation: '2025-06-15' },
  { name: 'Jane Smith', age: 32, gender: 'Female', group: 'O-', lastDonation: '2025-05-20' },
  { name: 'Ali Ahmed', age: 24, gender: 'Male', group: 'B+', lastDonation: '-' },
  { name: 'Sara Khan', age: 29, gender: 'Female', group: 'AB+', lastDonation: '2025-04-10' },
];

const donorColumns = [
  { label: 'Name', key: 'name' },
  { label: 'Age', key: 'age' },
  { label: 'Gender', key: 'gender' },
  { label: 'Blood Group', key: 'group' },
  { label: 'Last Donation', key: 'lastDonation' },
];

const AdmBloodDonor = () => {
  return (
    <div className="p-6" style={{ fontFamily: "'Gill Sans MT', 'Gill Sans', 'GillSans', 'Arial', 'sans-serif'" }}>
      <div className="flex items-center mb-6">
        <span className="text-2xl mr-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 text-gray-400">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118A7.5 7.5 0 0112 15.75a7.5 7.5 0 017.5 4.368M18 6.75a2.25 2.25 0 112.25 2.25" />
          </svg>
        </span>
        <h2 className="text-3xl font-semibold text-gray-500">Blood Donors</h2>
      </div>
      <CommonTable
        columns={donorColumns}
        data={donorData}
        actions={[]}
      />
      <div className="flex justify-between items-center mt-4 text-gray-500 text-xs">
        <span>Showing 1 to {donorData.length} of {donorData.length} entries</span>
        <div className="flex items-center gap-1">
          <button className="border rounded px-2 py-1" disabled>{'<'}</button>
          <span className="px-2">1</span>
          <button className="border rounded px-2 py-1" disabled>{'>'}</button>
        </div>
      </div>
    </div>
  );
}

export default AdmBloodDonor;
