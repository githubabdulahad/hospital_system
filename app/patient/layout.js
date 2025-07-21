"use client";
import Header from '../../components/compafterlogin/Common/Header';
import PatientSidebar from '../../components/compafterlogin/Patient/PatientSidebar';
import { usePathname } from 'next/navigation';

export default function PatientLayout({ children }) {
  const pathname = usePathname();

  return (
    <div>
      <Header />
      <main className="flex">
        <PatientSidebar activeRoute={pathname} />
        <div className="flex-1 p-4 overflow-y-auto" style={{ height: 'calc(100vh - 120px)' }}>
          {children}
        </div>
      </main>
    </div>
  );
}
