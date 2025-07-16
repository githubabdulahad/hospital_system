import React from 'react'
import Navbar from '../Components/subComponents/Navbar'
import Footer from '../Components/subComponents/Footer'
import Appointmentoverlay from '../Components/Appointmentcomps/Appointmentoverlay'
import Appointmentform from '../Components/Appointmentcomps/Appointmentform'
import ApptPackage from '../Components/Appointmentcomps/ApptPackage'
import Apptdoctors from '../Components/Appointmentcomps/Apptdoctors'
const Appointment = () => {
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

export default Appointment
