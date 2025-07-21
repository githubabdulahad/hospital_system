import React from 'react'
import Navbar from '../../components/subComponents/Navbar'
import Abouttop from '../../components/About/Abouttop'
import Footer from '../../components/subComponents/Footer'
import AboutIntro from '../../components/About/AboutIntro'
import Aboutpackage from '../../components/About/Aboutpackage'
import Abouthistory from '../../components/About/Abouthistory'

export const metadata = {
  title: 'About Us - Hospital Management System',
  description: 'Learn more about our hospital and medical services',
}

export default function AboutPage() {
  return (
    <div >
      <Navbar />
      <Abouttop />
      <AboutIntro />
      <Aboutpackage/>
      <Abouthistory/>
      <Footer/>
    </div>
  )
}
