import React from 'react'
import Contactoverlay from '../Components/Contactcomp/Contactoverlay'
import Navbar from '../Components/subComponents/Navbar'
import Footer from '../Components/subComponents/Footer'
import Contactform from '../Components/Contactcomp/Contactform'
import ContactPackage from '../Components/Contactcomp/ContactPackage'
import ContactHistory from '../Components/Contactcomp/ContactHistory'

const Contact = () => {
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

export default Contact
