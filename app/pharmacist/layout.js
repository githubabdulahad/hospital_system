"use client";
import Header from '../../components/compafterlogin/Common/Header';
import PharmSidebar from '../../components/compafterlogin/Pharmacist/PharmSidebar';

export default function PharmacistLayout({ children }) {
  return (
    <div>
      <Header />
      <main className="flex">
        <PharmSidebar />
        <div className="flex-1 p-4 overflow-y-auto" style={{ height: 'calc(100vh - 120px)' }}>
          {children}
        </div>
      </main>
    </div>
  );
}
