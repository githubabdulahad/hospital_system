"use client";
import Header from '../../components/compafterlogin/Common/Header';
// import { usePathname } from 'next/navigation';
import DoctorSidebar from '../../components/compafterlogin/Doctor/DoctorSidebar';

export default function DoctorLayout({ children }) {

  return (
    <div>
      <Header />
      <main className="flex">
        <DoctorSidebar />
        <div className="flex-1 p-4 overflow-y-auto" style={{ height: 'calc(100vh - 120px)' }}>
          {children}
        </div>
      </main>
    </div>
  );
}
