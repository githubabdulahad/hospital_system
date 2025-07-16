import React from 'react';
import CommonTable from '../../Components/compafterlogin/Common/CommonTable';

const payHistoryData = [
  {
    challan: 'CH-1001',
    payer: 'John Doe',
    patient: 'Alice Smith',
    date: '2025-07-01',
    amount: 'Rs. 5,000',
    discount: 'Rs. 500',
    vat: '5%',
    total: 'Rs. 4,750',
    status: 'Paid',
    remarks: 'N/A',
  },
  {
    challan: 'CH-1002',
    payer: 'Jane Roe',
    patient: 'Bob Johnson',
    date: '2025-07-02',
    amount: 'Rs. 3,000',
    discount: 'Rs. 0',
    vat: '5%',
    total: 'Rs. 3,150',
    status: 'Unpaid',
    remarks: 'Follow up',
  },
];

const payHistoryColumns = [
  { label: 'Challan No.', key: 'challan' },
  { label: 'Payer', key: 'payer' },
  { label: 'Patient', key: 'patient' },
  { label: 'Date', key: 'date' },
  { label: 'Amount', key: 'amount' },
  { label: 'Discount', key: 'discount' },
  { label: 'VAT %', key: 'vat' },
  { label: 'Total', key: 'total' },
  { label: 'Status', key: 'status' },
  { label: 'Remarks', key: 'remarks' },
];

const AdmPayHistory = () => {
  return (
    <div className="p-6" style={{ fontFamily: "'Gill Sans MT', 'Gill Sans', 'GillSans', 'Arial', 'sans-serif'" }}>
      <div className="flex items-center mb-6">
        <span className="text-2xl mr-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 text-gray-400">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118A7.5 7.5 0 0112 15.75a7.5 7.5 0 017.5 4.368M18 6.75a2.25 2.25 0 112.25 2.25" />
          </svg>
        </span>
        <h2 className="text-3xl font-semibold text-gray-500">Payment History</h2>
      </div>
      <CommonTable
        columns={payHistoryColumns}
        data={payHistoryData}
        actions={[]}
      />
      <div className="flex justify-between items-center mt-4 text-gray-500 text-xs">
        <span>Showing 1 to {payHistoryData.length} of {payHistoryData.length} entries</span>
        <div className="flex items-center gap-1">
          <button className="border rounded px-2 py-1" disabled>{'<'}</button>
          <span className="px-2">1</span>
          <button className="border rounded px-2 py-1" disabled>{'>'}</button>
        </div>
      </div>
    </div>
  );
}

export default AdmPayHistory;
