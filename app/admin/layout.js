"use client";
import Header from '../../components/compafterlogin/Common/Header';
import AdminSidebar from '../../components/compafterlogin/Admin/AdminSidebar';

export default function AdminLayout({ children }) {
  return (
    <div>
      <Header />
      <main className="flex">
        <AdminSidebar />
        <div className="flex-1 p-4 overflow-y-auto" style={{ height: 'calc(100vh - 120px)' }}>
          {children}
        </div>
      </main>
    </div>
  );
}
