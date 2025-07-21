import React from 'react'
import Navbar from '../../components/subComponents/Navbar'
import Footer from '../../components/subComponents/Footer'
import Doctorsoverlay from '../../components/Doctorscomponents.jsx/Doctorsoverlay'
import Drform from '../../components/Doctorscomponents.jsx/Drform'
import AllDoctors from '../../components/Doctorscomponents.jsx/AllDoctors'

export const metadata = {
  title: 'Our Doctors - Hospital Management System',
  description: 'Meet our experienced team of medical professionals',
}

export default function DoctorsPage() {
  return (
    <div>
      <Navbar />
      <Doctorsoverlay/>
      <Drform/>
      <AllDoctors/>
      <Footer />
    </div>
  )
}
