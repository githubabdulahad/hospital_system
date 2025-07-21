import React from 'react'
import Navbar from '../../components/subComponents/Navbar'
import Footer from '../../components/subComponents/Footer'
import Specialityoverlay from '../../components/specialitiescomp/Specialityovelay'
import Ourspecialities from '../../components/specialitiescomp/OurSpecialities'
import SpecialityArticle from '../../components/specialitiescomp/SpecialityArticle'

export const metadata = {
  title: 'Medical Specialties - Hospital Management System',
  description: 'Explore our comprehensive range of medical specialties and services',
}

export default function SpecialtiesPage() {
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
