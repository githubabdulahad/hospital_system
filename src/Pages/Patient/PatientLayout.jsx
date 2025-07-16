
import Header from '../../Components/compafterlogin/Common/Header';
import PatientSidebar from '../../Components/compafterlogin/Patient/PatientSidebar';
import { Outlet, useLocation } from 'react-router-dom';


const PatientLayout = () => {
  const location = useLocation();
  // Optionally, set activeRoute based on location.pathname
  return (
    <div >
        <Header />
      <main className="flex">
      <PatientSidebar activeRoute={location.pathname} />
        <div className="flex-1 p-4 overflow-y-auto" style={{ height: 'calc(100vh - 120px)' }}>
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default PatientLayout;
