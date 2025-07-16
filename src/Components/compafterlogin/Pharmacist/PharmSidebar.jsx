import { NavLink, useLocation } from 'react-router-dom';
import { useState } from 'react';

const navItems = [
  { label: 'Dashboard', to: 'dashboard', icon: (
    <svg className="w-5 h-5 inline-block mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8v-10h-8v10zm0-18v6h8V3h-8z" /></svg>
  ) },
  { label: 'Medical Category', to: 'medicine-category', icon: (
    <svg className="w-5 h-5 inline-block mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
  ) },
  {
    label: 'Medicines',
    icon: (
      <svg className="w-5 h-5 inline-block mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
    ),
    dropdown: [
      {
        label: 'Manage Medicines',
        to: 'manage-medicine',
        icon: (
          <svg className="w-5 h-5 inline-block mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
        )
      },
      {
        label: 'Medicine Sales',
        to: 'medicine-sales',
        icon: (
          <svg className="w-5 h-5 inline-block mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 4v16m8-8H4" /></svg>
        )
      }
    ]
  },
  { label: 'Payroll', to: 'payroll', icon: (
    <svg className="w-5 h-5 inline-block mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
  ) },
  { label: 'Profile', to: 'profile', icon: (
    <svg className="w-5 h-5 inline-block mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="8" r="4" /><path d="M6 20v-2a4 4 0 014-4h0a4 4 0 014 4v2" /></svg>
  ) },
];

const SidebarDropdown = ({ label, icon, children, open, setOpen }) => (
  <div>
    <button
      className="flex items-center w-full px-4 py-2 rounded hover:bg-[#C0E6DA] hover:text-[#232946] focus:outline-none"
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

const PharmSidebar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const location = useLocation();
  
  return (
    <aside className="w-64 bg-[#0B2443] text-white flex flex-col shadow-lg sticky top-0 overflow-y-auto" style={{ fontFamily: "'Gill Sans MT', 'Gill Sans', 'GillSans', 'Arial', 'sans-serif'", height: 'calc(100vh - 120px)' }}>
      <div className="flex flex-col items-center py-8 border-b border-gray-700">
        <div className="w-[110px] h-[110px] rounded-full bg-white flex items-center justify-center shadow mb-4 border-4 border-[#C0E6DA]">
          {/* Accountant profile icon SVG */}
          <svg xmlns="http://www.w3.org/2000/svg" fill="#C0E6DA" viewBox="0 0 48 48" className="w-20 h-20">
            <circle cx="24" cy="16" r="10" fill="#C0E6DA" />
            <ellipse cx="24" cy="36" rx="16" ry="10" fill="#C0E6DA" opacity="0.7" />
            <circle cx="24" cy="16" r="8" fill="#0B2443" />
            <ellipse cx="24" cy="36" rx="13" ry="8" fill="#0B2443" />
          </svg>
        </div>
        <div className="text-lg font-semibold">Welcome, Pharmacist</div>
      </div>
      <nav className="flex-1 py-6 px-2 space-y-1">
        {navItems.map(item => (
          item.dropdown ? (
            <SidebarDropdown
              key={item.label}
              label={item.label}
              icon={item.icon}
              open={openDropdown}
              setOpen={setOpenDropdown}
            >
              {item.dropdown.map(sub => (
                <NavLink
                  key={sub.to}
                  to={sub.to}
                  className={({ isActive }) =>
                    (isActive || location.pathname.includes(sub.to))
                      ? 'bg-[#C0E6DA] text-[#232946] rounded px-4 py-2 block font-semibold'
                      : 'hover:bg-[#C0E6DA] hover:text-[#232946] rounded px-4 py-2 block'
                  }
                >
                  {sub.icon}
                  {sub.label}
                </NavLink>
              ))}
            </SidebarDropdown>
          ) : (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                (isActive || location.pathname.includes(item.to))
                  ? 'bg-[#C0E6DA] text-[#232946] rounded px-4 py-2 block font-semibold'
                  : 'hover:bg-[#C0E6DA] hover:text-[#232946] rounded px-4 py-2 block'
              }
            >
              {item.icon}
              {item.label}
            </NavLink>
          )
        ))}
      </nav>
    </aside>
  );
};

export default PharmSidebar;
