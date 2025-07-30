import React from 'react'
import Info from '../../components/Logincomp/Info'
import Maincomp from '../../components/Logincomp/Maincomp'
import ColoredLine from '../../components/subComponents/ColoredLine'

export const metadata = {
  title: 'Login - Hospital Management System',
  description: 'Access your account to manage appointments and medical records',
}

export default function LoginPage() {
  return (
    <div>
      <Info/>
      <Maincomp />
      <ColoredLine />
    </div>
  )
}
