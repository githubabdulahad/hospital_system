"use client";
import AccountantSidebar from '../../components/compafterlogin/Accountant/AccountantSidebar';
import Header from '../../components/compafterlogin/Common/Header'

export default function AccountantLayout({ children }) {
  return (
    <div>
      <Header />
      <main className="flex">
        <AccountantSidebar />
        <div className="flex-1 p-4 overflow-y-auto" style={{ height: 'calc(100vh - 120px)' }}>
          {children}
        </div>
      </main>
    </div>
  );
}
