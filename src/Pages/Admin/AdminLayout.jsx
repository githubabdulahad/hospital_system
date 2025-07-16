import Header from '../../Components/compafterlogin/Common/Header';
import AdminSidebar from './AdminSidebar';
import { Outlet } from 'react-router-dom';

const AdminLayout = () => (
  <>
    <Header />
    <div className="flex bg-[#f4f6fb]">
      <AdminSidebar />
      <main className="flex-1 p-6 overflow-y-auto" style={{ height: 'calc(100vh - 120px)' }}>
        <Outlet />
      </main>
    </div>
  </>
);

export default AdminLayout;
