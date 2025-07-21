import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';


const navItems = [
  { label: 'Dashboard', to: '/patient/dashboard', icon: (
    <svg className="w-5 h-5 inline-block mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8v-10h-8v10zm0-18v6h8V3h-8z" /></svg>
  ) },
  // Appointment dropdown will be handled separately
  { label: 'Prescription', to: '/patient/prescriptions', icon: (
    <svg className="w-5 h-5 inline-block mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 17v-6a2 2 0 012-2h2a2 2 0 012 2v6m-6 0h6" /></svg>
  ) },
  { label: 'Doctor', to: '/patient/doctor', icon: (
    <svg className="w-5 h-5 inline-block mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14c-4.418 0-8 1.79-8 4v2h16v-2c0-2.21-3.582-4-8-4z" /></svg>
  ) },
  { label: 'Admit History', to: '/patient/admit-history', icon: (
    <svg className="w-5 h-5 inline-block mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 17v-6a2 2 0 012-2h12a2 2 0 012 2v6" /></svg>
  ) },
  { label: 'Blood Bank', to: '/patient/blood-bank', icon: (
    <svg className="w-5 h-5 inline-block mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 2a10 10 0 100 20 10 10 0 000-20z" /></svg>
  ) },
  { label: 'Operation History', to: '/patient/operation-history', icon: (
    <svg className="w-5 h-5 inline-block mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 6h16M4 10h16M4 14h16M4 18h16" /></svg>
  ) },
  { label: 'Profile', to: '/patient/profile', icon: (
    <svg className="w-5 h-5 inline-block mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" /></svg>
  ) },
];


const appointmentDropdownItems = [
  { label: 'Appointment List', to: '/patient/appointment-list' },
  { label: 'Pending Appointments', to: '/patient/pending-appointments' },
];

const SidebarDropdown = ({ label, icon, children, to, open, setOpen }) => {
  const pathname = usePathname();
  
  // Fix: Check if current path is appointment-related
  const isActive = pathname === to || 
                   pathname.startsWith(to + '/') ||
                   pathname === '/patient/appointment-list' ||
                   pathname === '/patient/pending-appointments';

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


const PatientSidebar = () => {
  const pathname = usePathname();
  const [openDropdown, setOpenDropdown] = useState(null);

  const isActiveLink = (to) => {
    return pathname === to || pathname.startsWith(to + '/');
  };

  return (
    <aside 
      className="w-70 bg-[#232946] text-white flex flex-col shadow-lg sticky top-0 overflow-y-auto" 
      style={{ 
        fontFamily: "'Gill Sans MT', 'Gill Sans', 'GillSans', 'Arial', 'sans-serif'", 
        height: 'calc(100vh - 120px)' 
      }}
    >
      <div className="flex flex-col items-center py-8 border-b border-gray-700 px-3">
        <div className="w-[90px] h-[90px] rounded-full bg-white flex items-center justify-center shadow mb-4 border-4 border-[#C0E6DA]">
          {/* Patient profile icon SVG */}
          <svg xmlns="http://www.w3.org/2000/svg" fill="#C0E6DA" viewBox="0 0 48 48" className="w-16 h-16">
            <circle cx="24" cy="16" r="10" fill="#C0E6DA" />
            <ellipse cx="24" cy="36" rx="16" ry="10" fill="#C0E6DA" opacity="0.7" />
            <circle cx="24" cy="16" r="8" fill="#232946" />
            <ellipse cx="24" cy="36" rx="13" ry="8" fill="#232946" />
          </svg>
        </div>
        <div className="text-lg font-semibold">Welcome, Ali Muhammad</div>
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
          label="Appointment"
          icon={
            <svg className="w-5 h-5 inline-block mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          }
          to="/patient/appointments"
          open={openDropdown}
          setOpen={setOpenDropdown}
        >
          {appointmentDropdownItems.map(item => (
            <Link
              key={item.to}
              href={item.to}
              className={
                isActiveLink(item.to)
                  ? 'bg-[#C0E6DA] text-[#232946] rounded px-4 py-2 block font-normal'
                  : 'hover:bg-[#C0E6DA] hover:text-[#232946] rounded px-4 py-2 block'
              }
            >
              {item.label}
            </Link>
          ))}
        </SidebarDropdown>
      </nav>
    </aside>
  );
};

export default PatientSidebar;
