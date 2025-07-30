"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState , useEffect, useCallback} from 'react';

const navItems = [
  { label: 'Dashboard', to: '/accountant/dashboard', icon: (
    <svg className="w-5 h-5 inline-block mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8v-10h-8v10zm0-18v6h8V3h-8z" /></svg>
  ) },
  { label: 'Payroll', to: '/accountant/payroll', icon: (
    <svg className="w-5 h-5 inline-block mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 10c-4.418 0-8 1.79-8 4v2h16v-2c0-2.21-3.582-4-8-4z" /></svg>
  ) },
  { label: 'Profile', to: '/accountant/profile', icon: (
    <svg className="w-5 h-5 inline-block mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="8" r="4" /><path d="M6 20v-2a4 4 0 014-4h0a4 4 0 014 4v2" /></svg>
  ) },
];

const invoiceDropdownItems = [
  { label: 'Add Invoice', to: '/accountant/add-invoice' },
  { label: 'Manage Invoice', to: '/accountant/manage-invoice' },
];

const SidebarDropdown = ({ label, icon, children, to, open, setOpen }) => {
  const pathname = usePathname();
  
  // Check if current path is invoice-related
  const isActive = pathname === to || 
                   pathname.startsWith(to + '/') ||
                   pathname === '/accountant/add-invoice' ||
                   pathname === '/accountant/manage-invoice';

  return (
    <div>
      <div className={`flex items-center w-full px-4 py-2 rounded ${
        isActive ? 'bg-[#C0E6DA] text-[#232946]' : 'hover:bg-[#C0E6DA] hover:text-[#232946]'
      }`}>
        <Link
          href={to}
          className="flex items-center flex-1"
        >
          {icon}
          <span className="text-left">{label}</span>
        </Link>
        <button
          onClick={() => setOpen(open === label ? null : label)}
          className="ml-2 focus:outline-none"
        >
          <svg 
            className={`w-4 h-4 transition-transform ${open === label ? 'rotate-90' : ''}`} 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            viewBox="0 0 24 24"
          >
            <path d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
      {open === label && (
        <div className="ml-6 mt-1 space-y-1">
          {children}
        </div>
      )}
    </div>
  );
};

const AccountantSidebar = ({ isOpen, onClose }) => {
  const pathname = usePathname();
  const [openDropdown, setOpenDropdown] = useState(null);

  const isActiveLink = (to) => {
    return pathname === to || pathname.startsWith(to + '/');
  };

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
    {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={handleClose}
        />
      )}
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
      <div className="flex flex-col items-center py-8 border-b border-gray-700 px-3">
        <div className="w-[110px] h-[110px] rounded-full bg-white flex items-center justify-center shadow mb-4 border-4 border-[#C0E6DA]">
          {/* Accountant profile icon SVG */}
          <svg xmlns="http://www.w3.org/2000/svg" fill="#C0E6DA" viewBox="0 0 48 48" className="w-20 h-20">
            <circle cx="24" cy="16" r="10" fill="#C0E6DA" />
            <ellipse cx="24" cy="36" rx="16" ry="10" fill="#C0E6DA" opacity="0.7" />
            <circle cx="24" cy="16" r="8" fill="#0B2443" />
            <ellipse cx="24" cy="36" rx="13" ry="8" fill="#0B2443" />
          </svg>
        </div>
        <div className="text-lg font-semibold">Welcome, Accountant</div>
      </div>
      
      <nav className="flex-1 py-6 px-2 space-y-1">
        {navItems.map(item => (
          <Link
            key={item.to}
            href={item.to}
            className={
              isActiveLink(item.to)
                ? 'bg-[#C0E6DA] text-[#232946] rounded px-4 py-2 block font-normal'
                : 'hover:bg-[#C0E6DA] hover:text-[#232946] rounded px-4 py-2 block'
            }
          >
            {item.icon}
            {item.label}
          </Link>
        ))}

        <SidebarDropdown
          label="Invoice"
          icon={
            <svg className="w-5 h-5 inline-block mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M9 17v-2a2 2 0 012-2h2a2 2 0 012 2v2m-6 4h6a2 2 0 002-2v-6a2 2 0 00-2-2h-6a2 2 0 00-2 2v6a2 2 0 002 2z" />
            </svg>
          }
          to="/accountant/add-invoice"
          open={openDropdown}
          setOpen={setOpenDropdown}
        >
          {invoiceDropdownItems.map((item) => (
            <Link
              key={item.to}
              href={item.to}
              className={
                isActiveLink(item.to)
                  ? "bg-[#C0E6DA] text-[#232946] rounded px-4 py-2 block font-normal"
                  : "hover:bg-[#C0E6DA] hover:text-[#232946] rounded px-4 py-2 block"
              }
            >
              {item.label}
            </Link>
          ))}
        </SidebarDropdown>
      </nav>
    </aside>
    </>
  );
};

export default AccountantSidebar;
