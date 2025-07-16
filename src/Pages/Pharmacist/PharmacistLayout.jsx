import React from 'react'
import Header from '../../Components/compafterlogin/Common/Header'
import PharmSidebar from '../../Components/compafterlogin/Pharmacist/PharmSidebar'
import { Outlet } from 'react-router-dom'

export const PharmacistLayout = () => {
  return (
    <><Header />
      <div className="flex bg-[#f4f6fb]">
        <PharmSidebar />
        <main className="flex-1 p-6 overflow-y-auto" style={{ height: 'calc(100vh - 120px)' }}>
          <Outlet />
        </main>
      </div></>
  )
}
