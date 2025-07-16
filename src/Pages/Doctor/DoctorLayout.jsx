import Header from '../../Components/compafterlogin/Common/Header';
import { Outlet } from 'react-router-dom';


import DoctorSidebar from './DoctorSidebar';

const DoctorLayout = () => (
  <>
    <Header />
    <div className="flex">
      <DoctorSidebar />
      <div className="flex-1 p-4 overflow-y-auto" style={{ height: 'calc(100vh - 120px)' }}>
        <Outlet />
      </div>
    </div>
  </>
);

export default DoctorLayout;
