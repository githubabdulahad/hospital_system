"use client";
import  { useState } from 'react';
import Header from '../../components/compafterlogin/Common/Header';
import PharmSidebar from '../../components/compafterlogin/Pharmacist/PharmSidebar';

export default function PharmacistLayout({ children }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    
    const toggleMobileMenu = () => {
      setIsMobileMenuOpen(!isMobileMenuOpen);
    }
  return (
    <div>
      <Header  onMobileMenuToggle={toggleMobileMenu}/>
      <main className="flex">
        <PharmSidebar isOpen={isMobileMenuOpen} />
        <div className="flex-1 p-4 overflow-y-auto" style={{ height: 'calc(100vh - 120px)' }}>
          {children}
        </div>
      </main>
    </div>
  );
}
