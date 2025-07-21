import React from 'react'
import Navbar from '../../components/subComponents/Navbar'
import Footer from '../../components/subComponents/Footer'

export const metadata = {
  title: 'Careers - Hospital Management System',
  description: 'Join our team of healthcare professionals',
}

export default function CareersPage() {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-4xl font-bold text-gray-800">Careers Page</h1>
      </div>
      <Footer />
    </div>
  )
}
