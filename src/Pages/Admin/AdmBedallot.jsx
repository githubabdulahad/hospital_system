import React from 'react';
import CommonTable from '../../Components/compafterlogin/Common/CommonTable';

const bedAllotmentsData = [
  {
    bedNo: 'B-101',
    type: 'General',
    patient: 'Alice Smith',
    allotDate: '2025-07-01',
    dischargeDate: '2025-07-05',
    charges: '₨ 8,000',
    status: 'Occupied',
    remarks: 'N/A',
  },
  {
    bedNo: 'B-102',
    type: 'ICU',
    patient: 'Bob Johnson',
    allotDate: '2025-07-02',
    dischargeDate: '-',
    charges: '₨ 15,000',
    status: 'Available',
    remarks: 'Ready for next patient',
  },
];

const bedAllotmentsColumns = [
  { label: 'Bed No.', key: 'bedNo' },
  { label: 'Type', key: 'type' },
  { label: 'Patient', key: 'patient' },
  { label: 'Allotment Date', key: 'allotDate' },
  { label: 'Discharge Date', key: 'dischargeDate' },
  { label: 'Charges (PKR)', key: 'charges' },
  { label: 'Status', key: 'status' },
  { label: 'Remarks', key: 'remarks' },
];

const AdmBedallot = () => {
  return (
    <div className="p-6" style={{ fontFamily: "'Gill Sans MT', 'Gill Sans', 'GillSans', 'Arial', 'sans-serif'" }}>
      <div className="flex items-center mb-6">
        <span className="text-2xl mr-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 text-gray-400">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118A7.5 7.5 0 0112 15.75a7.5 7.5 0 017.5 4.368M18 6.75a2.25 2.25 0 112.25 2.25" />
          </svg>
        </span>
        <h2 className="text-3xl font-semibold text-gray-500">Bed Allotments</h2>
      </div>
      <CommonTable
        columns={bedAllotmentsColumns}
        data={bedAllotmentsData}
        actions={[]}
      />
      <div className="flex justify-between items-center mt-4 text-gray-500 text-xs">
        <span>Showing 1 to {bedAllotmentsData.length} of {bedAllotmentsData.length} entries</span>
        <div className="flex items-center gap-1">
          <button className="border rounded px-2 py-1" disabled>{'<'}</button>
          <span className="px-2">1</span>
          <button className="border rounded px-2 py-1" disabled>{'>'}</button>
        </div>
      </div>
    </div>
  );
}

export default AdmBedallot;
