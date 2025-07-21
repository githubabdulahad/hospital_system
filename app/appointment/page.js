
import Navbar from '../../components/subComponents/Navbar'
import Footer from '../../components/subComponents/Footer'
import Appointmentoverlay from '../../components/Appointmentcomps/Appointmentoverlay'
import Appointmentform from '../../components/Appointmentcomps/Appointmentform'
import ApptPackage from '../../components/Appointmentcomps/ApptPackage'
import Apptdoctors from '../../components/Appointmentcomps/Apptdoctors'

export const metadata = {
  title: 'Book Appointment - Hospital Management System',
  description: 'Schedule your appointment with our medical professionals',
}

export default function AppointmentPage() {
  return (
    <div>
      <Navbar />
      <Appointmentoverlay />
      <Appointmentform/>
      <ApptPackage />
      <Apptdoctors/>
      <Footer />
    </div>
  )
}
