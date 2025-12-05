import React from 'react'
import Info from '../../components/Logincomp/Info'
import SignupMain from '../../components/Logincomp/SignupMain'
import ColoredLine from '../../components/subComponents/ColoredLine'

export const metadata = {
  title: 'Signup - Hospital Management System',
  description: 'Create a new account to access the hospital system',
}

export default function SignupPage() {
  return (
    <div>
      <Info />
      <SignupMain />
      <ColoredLine />
    </div>
  )
}
