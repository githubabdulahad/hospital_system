import React from 'react'
import Navbar from '../Components/subComponents/Navbar'
import Footer from '../Components/subComponents/Footer'
import Specialityoverlay from '../Components/specialitiescomp/Specialityovelay'
import Ourspecialities from '../Components/specialitiescomp/OurSpecialities'
import SpecialityArticle from '../Components/specialitiescomp/SpecialityArticle'

const Specialities = () => {
  return (
    <div>
      <Navbar/>
      <Specialityoverlay/>
      <Ourspecialities/>
      <SpecialityArticle />
      <Footer/>
    </div>
  )
}

export default Specialities
