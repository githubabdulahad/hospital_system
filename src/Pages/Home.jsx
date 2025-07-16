import React from 'react'
import Navbar from '../Components/subComponents/Navbar'
import Footer from '../Components/subComponents/Footer'
import SliderComp from '../Components/Home/SliderComp'
import Introduction from '../Components/Home/Introduction'
import Expertise from '../Components/Home/Expertise'
import SpecialitiesComp from '../Components/Home/Specialitiescomp'
import Packages from '../Components/Home/Packages'
import DoctorsSection from '../Components/Home/Doctorscomp'
import Infocomp from '../Components/Home/Infocomp'


const Home = () => {
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

export default Home
