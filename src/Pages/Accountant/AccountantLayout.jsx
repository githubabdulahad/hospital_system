import React from 'react';
import { Outlet } from 'react-router-dom';
import AccountantSidebar from '../../Components/compafterlogin/Accountant/AccountantSidebar';
import Header from '../../Components/compafterlogin/Common/Header';

export default function AccountantLayout() {
  return (
    < >
      <Header />
      <div className="flex bg-[#f4f6fb]">
        <AccountantSidebar />
        <main className="flex-1 p-6 overflow-y-auto" style={{ height: 'calc(100vh - 120px)' }}>
          <Outlet />
        </main>
      </div>
    </>
  );
}
