import React, { useState } from 'react';
import CommonTable from '../../Components/compafterlogin/Common/CommonTable';


const payrollListColumns = [
  { label: 'Employee', key: 'employee' },
  { label: 'Role', key: 'role' },
  { label: 'Month', key: 'month' },
  { label: 'Year', key: 'year' },
  { label: 'Net Salary', key: 'net' },
  { label: 'Status', key: 'status' },
];

const AdmPayrollList = () => {
  const [data, setData] = useState(() => {
    const local = localStorage.getItem('payrollList');
    if (local) {
      try {
        const parsed = JSON.parse(local);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      } catch {}
    }
    return [];
  });
  return (
    <div className="p-6 max-w-4xl mx-auto" style={{ fontFamily: "'Gill Sans MT', 'Gill Sans', 'GillSans', 'Arial', 'sans-serif'" }}>
      <div className="bg-white rounded-xl shadow p-6 mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Payroll List</h2>
        <CommonTable columns={payrollListColumns} data={data} actions={[]} />
        <div className="flex justify-between items-center mt-4 text-gray-500 text-xs">
          <span>
            {data.length === 0
              ? 'No payroll records found.'
              : `Showing 1 to ${data.length} of ${data.length} entries`}
          </span>
          <div className="flex items-center gap-1">
            <button className="border rounded px-2 py-1" disabled>{'<'}</button>
            <span className="px-2">1</span>
            <button className="border rounded px-2 py-1" disabled>{'>'}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdmPayrollList;
