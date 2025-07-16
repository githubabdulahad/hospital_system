import React from 'react';
import CommonTable from '../../Components/compafterlogin/Common/CommonTable';

const operationData = [
  {
    patient: 'John Doe',
    operation: 'Appendectomy',
    doctor: 'Dr. Smith',
    date: '2025-06-20',
    status: 'Successful',
    remarks: 'No complications',
  },
  {
    patient: 'Jane Roe',
    operation: 'Gallbladder Removal',
    doctor: 'Dr. Ahmed',
    date: '2025-06-18',
    status: 'Successful',
    remarks: 'Quick recovery',
  },
];

const operationColumns = [
  { label: 'Patient', key: 'patient' },
  { label: 'Operation', key: 'operation' },
  { label: 'Doctor', key: 'doctor' },
  { label: 'Date', key: 'date' },
  { label: 'Status', key: 'status' },
  { label: 'Remarks', key: 'remarks' },
];

const AdmOperation = () => {
  return (
    <div className="p-6" style={{ fontFamily: "'Gill Sans MT', 'Gill Sans', 'GillSans', 'Arial', 'sans-serif'" }}>
      <div className="flex items-center mb-6">
        <span className="text-2xl mr-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 text-gray-400">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118A7.5 7.5 0 0112 15.75a7.5 7.5 0 017.5 4.368M18 6.75a2.25 2.25 0 112.25 2.25" />
          </svg>
        </span>
        <h2 className="text-3xl font-semibold text-gray-500">Operation Reports</h2>
      </div>
      <CommonTable
        columns={operationColumns}
        data={operationData}
        actions={[]}
      />
      <div className="flex justify-between items-center mt-4 text-gray-500 text-xs">
        <span>Showing 1 to {operationData.length} of {operationData.length} entries</span>
        <div className="flex items-center gap-1">
          <button className="border rounded px-2 py-1" disabled>{'<'}</button>
          <span className="px-2">1</span>
          <button className="border rounded px-2 py-1" disabled>{'>'}</button>
        </div>
      </div>
    </div>
  );
}

export default AdmOperation;
