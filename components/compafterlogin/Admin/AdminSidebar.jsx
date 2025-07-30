"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect, useCallback } from 'react';

const navItems = [
  { label: 'Dashboard', to: '/admin/dashboard', icon: (
    <svg className="w-5 h-4 inline-block mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8v-10h-8v10zm0-18v6h8V3h-8z" /></svg>
  ) },
  { label: 'Department', to: '/admin/departments', icon: (
    <svg className="w-5 h-4 inline-block mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M16 11V7a4 4 0 10-8 0v4M5 19h14a2 2 0 002-2v-5a2 2 0 00-2-2H5a2 2 0 00-2 2v5a2 2 0 002 2z" /></svg>
  ) },
  { label: 'Doctor', to: '/admin/doctors', icon: (
    <svg className="w-5 h-4 inline-block mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" /></svg>
  ) },
  { label: 'Patient', to: '/admin/patients', icon: (
    <svg className="w-5 h-4 inline-block mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14c-4.418 0-8 1.79-8 4v2h16v-2c0-2.21-3.582-4-8-4z" /></svg>
  ) },
  { label: 'Accountant', to: '/admin/accountants', icon: (
    <svg className="w-5 h-4 inline-block mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M17 9V7a5 5 0 00-10 0v2a2 2 0 00-2 2v7a2 2 0 002 2h10a2 2 0 002-2v-7a2 2 0 00-2-2z" /></svg>
  ) },
  { label: 'Pharmacist', to: '/admin/pharmacists', icon: (
    <svg className="w-5 h-4 inline-block mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M19 11H5m7-7v14" /></svg>
  ) }
];

const monitorHospitalItems = [
  { label: 'Payment History', to: '/admin/payment-history', icon: (
    <svg className="w-5 h-4 inline-block mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 17v-6a2 2 0 012-2h12a2 2 0 012 2v6" /></svg>
  ) },
  { label: 'Bed Allotment', to: '/admin/bed-allotment', icon: (
    <svg className="w-5 h-4 inline-block mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 17v-6a2 2 0 012-2h12a2 2 0 012 2v6" /></svg>
  ) },
  { label: 'Blood bank', to: '/admin/blood-bank', icon: (
    <svg className="w-5 h-4 inline-block mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 17v-6a2 2 0 012-2h12a2 2 0 012 2v6" /></svg>
  ) },
  { label: 'Blood Donor', to: '/admin/blood-donor', icon: (
    <svg className="w-5 h-4 inline-block mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 17v-6a2 2 0 012-2h12a2 2 0 012 2v6" /></svg>
  ) },
  { label: 'Medicine', to: '/admin/medicine', icon: (
    <svg className="w-5 h-4 inline-block mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 17v-6a2 2 0 012-2h12a2 2 0 012 2v6" /></svg>
  ) },
  { label: 'Operation Report', to: '/admin/operation-report', icon: (
    <svg className="w-5 h-4 inline-block mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 17v-6a2 2 0 012-2h12a2 2 0 012 2v6" /></svg>
  ) },
  { label: 'Birth Report', to: '/admin/birth-report', icon: (
    <svg className="w-5 h-4 inline-block mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 17v-6a2 2 0 012-2h12a2 2 0 012 2v6" /></svg>
  ) },
  { label: 'Death Report', to: '/admin/death-report', icon: (
    <svg className="w-5 h-4 inline-block mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 17v-6a2 2 0 012-2h12a2 2 0 012 2v6" /></svg>
  ) }
];

const payrollItems = [
  { label: 'Create Payroll', to: '/admin/create-payroll', icon: (
    <svg className="w-5 h-4 inline-block mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 4v16m8-8H4" /></svg>
  ) },
  { label: 'Payroll List', to: '/admin/payroll-list', icon: (
    <svg className="w-5 h-4 inline-block mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 6h16M4 10h16M4 14h16M4 18h16" /></svg>
  ) }
];

const SidebarDropdown = ({ label, icon, children, open, setOpen }) => (
  <div>
    <button
      className="flex items-center w-full px-4 py-1 rounded hover:bg-[#C0E6DA] hover:text-[#232946] focus:outline-none"
      onClick={() => setOpen(open === label ? null : label)}
    >
      {icon}
      <span className="flex-1 text-left">{label}</span>
      <svg className={`w-4 h-4 ml-auto transition-transform ${open === label ? 'rotate-90' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" /></svg>
    </button>
    {open === label && (
      <div className="ml-6 mt-1 space-y-1">
        {children}
      </div>
    )}
  </div>
);

const AdminSidebar = ({ isOpen, onClose }) => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const pathname = usePathname();

  // Memoize onClose to prevent unnecessary re-renders
  const handleClose = useCallback(() => {
    if (onClose) {
      onClose();
    }
  }, [onClose]);

  // Close sidebar when clicking outside on mobile
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (isOpen && !event.target.closest('aside') && !event.target.closest('button[aria-label="Toggle menu"]')) {
        handleClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isOpen, handleClose]);

  // Close sidebar when route changes on mobile (only on mobile)
  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    if (isOpen && isMobile) {
      handleClose();
    }
  }, [pathname, isOpen, handleClose]);

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={handleClose}
        />
      )}

      {/* Sidebar */}
      <aside 
        className={`
          fixed md:sticky top-0 left-0 z-50 md:z-auto
          md:w-64 w-48 bg-[#0B2443] text-white flex flex-col shadow-lg overflow-y-auto
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
        `}
        style={{ 
          fontFamily: "'Gill Sans MT', 'Gill Sans', 'GillSans', 'Arial', 'sans-serif'", 
          height: 'calc(110vh - 155px)',
          top: '84px'
        }}
      >
        <div className="flex flex-col items-center py-8 border-b border-gray-700">
          <div className="md:w-[110px] md:h-[110px] w-[80px] h-[80px] rounded-full bg-white flex items-center justify-center shadow mb-4 border-4 border-[#C0E6DA]">
            {/* Admin profile icon SVG */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="#C0E6DA" viewBox="0 0 48 48" className="w-20 h-20">
              <circle cx="24" cy="16" r="10" fill="#C0E6DA" />
              <ellipse cx="24" cy="36" rx="16" ry="10" fill="#C0E6DA" opacity="0.7" />
              <circle cx="24" cy="16" r="8" fill="#0B2443" />
              <ellipse cx="24" cy="36" rx="13" ry="8" fill="#0B2443" />
            </svg>
          </div>
          <div className="md:text-lg font-semibold">Welcome, Mr. Admin</div>
        </div>

        <nav className="flex-1 py-4 px-2 space-y-1">
          {navItems.map(item => (
            <Link
              key={item.to}
              href={item.to}
              className={
                pathname === item.to || pathname.includes(item.to.split('/').pop())
                  ? 'bg-[#C0E6DA] text-[#232946] rounded px-4 py-1 block md:font-semibold'
                  : 'hover:bg-[#C0E6DA] hover:text-[#232946] rounded px-4  py-1 block'
              }
            >
              {item.icon}
              {item.label}
            </Link>
          ))}

          <SidebarDropdown label="Monitor Hospital" icon={
            <svg className="w-5 h-5 inline-block mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 14.93V17h-2v-2.07A8.001 8.001 0 014 12h2a6 6 0 0012 0h2a8.001 8.001 0 01-7 6.93z" /></svg>
          } open={openDropdown} setOpen={setOpenDropdown}>
            {monitorHospitalItems.map(item => (
              <Link
                key={item.to}
                href={item.to}
                className={
                  pathname === item.to
                    ? 'bg-[#C0E6DA] text-[#232946] rounded px-4 py-2 block  md:font-mono'
                    : 'hover:bg-[#C0E6DA] hover:text-[#232946] rounded  px-4 py-2 block'
                }
              >
                {item.icon}
                {item.label}
              </Link>
            ))}
          </SidebarDropdown>

          <SidebarDropdown label="Payroll" icon={
            <svg className="w-5 h-5 inline-block mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14c-4.418 0-8 1.79-8 4v2h16v-2c0-2.21-3.582-4-8-4z" /></svg>
          } open={openDropdown} setOpen={setOpenDropdown}>
            {payrollItems.map(item => (
              <Link
                key={item.to}
                href={item.to}
                className={
                  pathname === item.to
                    ? 'bg-[#C0E6DA] text-[#232946] rounded px-4 py-2 block md:font-mono'
                    : 'hover:bg-[#C0E6DA] hover:text-[#232946] rounded px-4 py-2 block'
                }
              >
                {item.icon}
                {item.label}
              </Link>
            ))}
          </SidebarDropdown>
        </nav>
      </aside>
    </>
  );
};

export default AdminSidebar;
