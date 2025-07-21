import React from 'react'
import Contactoverlay from '../../components/Contactcomp/Contactoverlay'
import Navbar from '../../components/subComponents/Navbar'
import Footer from '../../components/subComponents/Footer'
import Contactform from '../../components/Contactcomp/Contactform'
import ContactPackage from '../../components/Contactcomp/ContactPackage'
import ContactHistory from '../../components/Contactcomp/ContactHistory'

export const metadata = {
  title: 'Contact Us - Hospital Management System',
  description: 'Get in touch with our hospital for inquiries and support',
}

export default function ContactPage() {
  return (
    <div>
      <Navbar/>
      <Contactoverlay/>
      <Contactform/>
      <ContactPackage/>
      <ContactHistory/>
      <Footer/>
    </div>
  )
}
