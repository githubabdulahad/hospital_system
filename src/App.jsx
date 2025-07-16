
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { SearchProvider } from './Context/SearchContext';
import Home from './Pages/Home';
import About from './Pages/About';
import Specialties from './Pages/Specialities';
import Doctors from './Pages/Doctors';
import Appointment from './Pages/Appointment';
import Contact from './Pages/Contact';
import Insurance from './Pages/Insurance';
import Careers from './Pages/Careers';
import Login from './Pages/Login';

import AdminDashboard from './Pages/Admin/AdminDashboard';
import AdmDepartments from './Pages/Admin/AdmDepartments';
import AdmDoctors from './Pages/Admin/AdmDoctors';
import AdmPatients from './Pages/Admin/AdmPatients';
import AdmPharmacists from './Pages/Admin/AdmPharmacists';
import AdmAccountants from './Pages/Admin/AdmAccountants';
import AdmPayHistory from './Pages/Admin/AdmPayHistory';
import AdmBedallot from './Pages/Admin/AdmBedallot';
import AdmBloodBank from './Pages/Admin/AdmBloodBank';
import AdmBloodDonor from './Pages/Admin/AdmBloodDonor';
import AdmMedicine from './Pages/Admin/AdmMedicine';
import AdmOperation from './Pages/Admin/AdmOperation';
import AdmBirth from './Pages/Admin/AdmBirth';
import AdmDeath from './Pages/Admin/AdmDeath';
import AdmCreatePayroll from './Pages/Admin/AdmCreatePayroll'
import AdmPayrollList from './Pages/Admin/AdmPayrollList'
import AdminLayout from './Pages/Admin/AdminLayout';
import DoctorDashboard from './Pages/Doctor/DoctorDashboard';
import DoctorLayout from './Pages/Doctor/DoctorLayout';
import DocAppointmentList from './Pages/Doctor/DocAppointmentList';
import DocRequestedAppointments from './Pages/Doctor/DocRequestedAppointments';
import DocPatients from './Pages/Doctor/DocPatients';
import Docprescription from './Pages/Doctor/Docprescription';
import DocBedallotment from './Pages/Doctor/DocBedallotment';
import DocBloodbank from './Pages/Doctor/DocBloodbank';
import DocPayroll from './Pages/Doctor/DocPayroll';
import DocProfile from './Pages/Doctor/Docprofile';
import PatientDashboard from './Pages/Patient/PatientDashboard';
import PatientLayout from './Pages/Patient/PatientLayout';
import  PatientPrescriptions  from './Pages/Patient/PatientPrescriptions';
import PatientDoc from './Pages/Patient/PatientDoc';
import ProtectedRoute from './Components/compafterlogin/Common/ProtectedRoute';
import PatientAdmithistory from './Pages/Patient/PatientAdmithistory';
import PatientBloodbank from './Pages/Patient/PatientBloodbank';
import PatientOperationhistory from './Pages/Patient/PatientOperationhistory';
import PatientProfile from './Pages/Patient/PatientProfile';
import PatientAppointmentList from './Pages/Patient/PatientAppointmentList';
import PatientPendingAppointments from './Pages/Patient/PatientPendingAppointments';

import PatientAppointments from './Pages/Patient/PatientAppointments';
import AccountantLayout from './Pages/Accountant/AccountantLayout';
// Accountant pages (create these as needed)
import AccountantDashboard from './Pages/Accountant/AccountantDashboard';
import AccAddInvoice from './Pages/Accountant/AccAddInvoice';
import AccountantPayroll from './Pages/Accountant/Accountantpayroll';
import AccountantProfile from './Pages/Accountant/AccountantProfile';
import AccManageInvoice from './Pages/Accountant/AccManageInvoice';
// Pharmacist pages (create these as needed)
import { PharmacistDashboard } from './Pages/Pharmacist/PharmacistDashboard';
import { PharmacistLayout } from './Pages/Pharmacist/PharmacistLayout';
import { PharmaMedcategory } from './Pages/Pharmacist/PharmaMedcategory';
import { PharmaManageMedicine } from './Pages/Pharmacist/PharmaManageMedicine';
import { PharmaMedSales } from './Pages/Pharmacist/PharmaMedSales';
import { PharmaPayroll } from './Pages/Pharmacist/PharmaPayroll';
import  PharmaProfile from './Pages/Pharmacist/PharmaProfile';

function App() {
  return (
    <SearchProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/specialties" element={<Specialties />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/insurance" element={<Insurance />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/login" element={<Login />} />
        {/* User dashboards - protected by role, using layouts for user sections */}
        <Route
        path="/admin"
        element={
          <ProtectedRoute allowedRoles={["admin"]}>
            <AdminLayout />
          </ProtectedRoute>
        }
      >
        <Route path="dashboard" element={<AdminDashboard />} />
        <Route path='departments' element={<AdmDepartments />}/> 
        <Route path='doctors' element={<AdmDoctors />}/> 
        <Route path='patients' element={<AdmPatients />}/>
        <Route path='pharmacists' element={<AdmPharmacists />}/>
        <Route path='accountants' element={<AdmAccountants />}/>
        <Route path='payment-history' element={<AdmPayHistory />}/>
        <Route path='bed-allotment' element={<AdmBedallot/>}/>
        <Route path='blood-bank' element={<AdmBloodBank/>}/>
        <Route path='blood-donor' element={<AdmBloodDonor/>}/>
        <Route path='medicine' element={<AdmMedicine/>}/>
        <Route path='operation-report' element={<AdmOperation/>}/>
        <Route path='birth-report' element={<AdmBirth/>}/>
        <Route path='death-report' element={<AdmDeath/>}/>
        <Route path='create-payroll' element={<AdmCreatePayroll/>}/>
        <Route path='payroll-list' element={<AdmPayrollList/>}/>


        {/* Add more admin routes here, e.g. <Route path="departments" element={<Departments />} /> */}
      </Route>
      <Route
        path="/accountant"
        element={
          <ProtectedRoute allowedRoles={["accountant"]}>
            <AccountantLayout />
          </ProtectedRoute>
        }
      >
        <Route path="dashboard" element={<AccountantDashboard />} />
        <Route path="payroll" element={<AccountantPayroll />} />
        <Route path="profile" element={<AccountantProfile />} />
        <Route path="add-invoice" element={<AccAddInvoice />} />
        <Route path="manage-invoice" element={<AccManageInvoice />} />
        {/* Add more accountant routes here */}
      </Route>
      <Route
        path="/doctor"
        element={
          <ProtectedRoute allowedRoles={["doctor"]}>
            <DoctorLayout />
          </ProtectedRoute>
        }
      >
        <Route path="dashboard" element={<DoctorDashboard />} />
        <Route path="appointment-list" element={<DocAppointmentList />} />
        <Route path="requested-appointments" element={<DocRequestedAppointments />} />
        <Route path="patients" element={<DocPatients />} />
        <Route path="prescriptions" element={<Docprescription />} />
        <Route path="bed-allotment" element={<DocBedallotment />} />
        <Route path="blood-bank" element={<DocBloodbank />} />
        <Route path="payroll" element={<DocPayroll />} />
        <Route path="profile" element={<DocProfile />} />
        
        {/* Add more doctor routes here */}
      </Route>
      <Route
        path="/patient"
        element={
          <ProtectedRoute allowedRoles={["patient"]}>
            <PatientLayout />
          </ProtectedRoute>
        }
      >
        <Route path="dashboard" element={<PatientDashboard />} />
        <Route path="prescriptions" element={<PatientPrescriptions />} />
        <Route path="doctor" element={<PatientDoc />} />
        <Route path="admit-history" element={<PatientAdmithistory />} />
        <Route path="blood-bank" element={<PatientBloodbank />} />
        <Route path="operation-history" element={<PatientOperationhistory />} />
        <Route path="profile" element={<PatientProfile />} />
        <Route path="appointment-list" element={<PatientAppointmentList />} />
        <Route path="pending-appointments" element={<PatientPendingAppointments />} />
        <Route path="appointments" element={<PatientAppointments />} />

        {/* Add more patient routes here */}
      </Route>
      <Route
        path="/pharmacist"
        element={
          <ProtectedRoute allowedRoles={["pharmacist"]}>
            <PharmacistLayout />
          </ProtectedRoute>
        }
      >
        <Route path="dashboard" element={<PharmacistDashboard />} />
        <Route path="medicine-category" element={<PharmaMedcategory />} />
        <Route path="manage-medicine" element={<PharmaManageMedicine />} />
        <Route path="medicine-sales" element={<PharmaMedSales />} />
        <Route path="payroll" element={<PharmaPayroll />} />
        <Route path="profile" element={<PharmaProfile />} />

        {/* Add more pharmacist routes here as they are created */}
      </Route>
      </Routes>
    </SearchProvider>
  );
}

export default App;
