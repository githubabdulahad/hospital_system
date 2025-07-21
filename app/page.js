import React from 'react'
import Navbar from '../components/subComponents/Navbar'
import Footer from '../components/subComponents/Footer'
import SliderComp from '../components/Home/SliderComp'
import Introduction from '../components/Home/Introduction'
import Expertise from '../components/Home/Expertise'
import SpecialitiesComp from '../components/Home/Specialitiescomp'
import Packages from '../components/Home/Packages'
import DoctorsSection from '../components/Home/Doctorscomp'
import Infocomp from '../components/Home/Infocomp'

export default function HomePage() {
  return (
    <div className=''>
       <Navbar />
       <SliderComp />
       <Introduction  />
       <Expertise/>
       <SpecialitiesComp/>
       <Packages/>
       <DoctorsSection/>
       <Infocomp/>
        <Footer />
    </div>
  )
}