import { NavLink, useLocation } from 'react-router-dom';
import { useState } from 'react';

const navItems = [
  { label: 'Dashboard', to: 'dashboard', icon: (
    <svg className="w-5 h-5 inline-block mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8v-10h-8v10zm0-18v6h8V3h-8z" /></svg>
  ) },
  {
    label: 'Invoice',
    icon: (
      <svg className="w-5 h-5 inline-block mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 17v-2a2 2 0 012-2h2a2 2 0 012 2v2m-6 4h6a2 2 0 002-2v-6a2 2 0 00-2-2h-6a2 2 0 00-2 2v6a2 2 0 002 2z" /></svg>
    ),
    dropdown: [
      {
        label: 'Add Invoice',
        to: 'add-invoice',
        icon: (
          <svg className="w-5 h-5 inline-block mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 4v16m8-8H4" /></svg>
        )
      },
      {
        label: 'Manage Invoice',
        to: 'manage-invoice',
        icon: (
          <svg className="w-5 h-5 inline-block mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 6h16M4 10h16M4 14h16M4 18h16" /></svg>
        )
      }
    ]
  },
  { label: 'Payroll', to: 'payroll', icon: (
    <svg className="w-5 h-5 inline-block mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 10c-4.418 0-8 1.79-8 4v2h16v-2c0-2.21-3.582-4-8-4z" /></svg>
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

const AccountantSidebar = () => {
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
        <div className="text-lg font-semibold">Welcome, Accountant</div>
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

export default AccountantSidebar;
