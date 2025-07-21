import React from 'react'
import Navbar from '../../components/subComponents/Navbar'
import Footer from '../../components/subComponents/Footer'

export const metadata = {
  title: 'Insurance - Hospital Management System',
  description: 'Learn about our insurance coverage and payment options',
}

export default function InsurancePage() {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-4xl font-bold text-gray-800">Insurance Page</h1>
      </div>
      <Footer />
    </div>
  )
}
