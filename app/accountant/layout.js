"use client";
import  { useState } from 'react';
import AccountantSidebar from '../../components/compafterlogin/Accountant/AccountantSidebar';
import Header from '../../components/compafterlogin/Common/Header'

export default function AccountantLayout({ children }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }
  return (
    <div>
      <Header  onMobileMenuToggle={toggleMobileMenu} />
      <main className="flex">
        <AccountantSidebar isOpen={isMobileMenuOpen} />
        <div className="flex-1 p-4 overflow-y-auto" style={{ height: 'calc(100vh - 120px)' }}>
          {children}
        </div>
      </main>
    </div>
  );
}
