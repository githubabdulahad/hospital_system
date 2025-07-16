import React from 'react'
import Navbar from '../Components/subComponents/Navbar'
import Abouttop from '../Components/About/Abouttop'
import Footer from '../Components/subComponents/Footer'
import AboutIntro from '../Components/About/AboutIntro'
import Aboutpackage from '../Components/About/Aboutpackage'
import Abouthistory from '../Components/About/Abouthistory'

const About = () => {
  return (
    <div>
      <Navbar />
      <Abouttop />
      <AboutIntro />
      <Aboutpackage/>
      <Abouthistory/>
      <Footer/>
    </div>
  )
}

export default About
