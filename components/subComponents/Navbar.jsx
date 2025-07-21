"use client";
import { useState } from "react";
import Link from "next/link";
import ColoredLine from "./ColoredLine";

const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="mb-1 sticky top-0 z-50 bg-white overflow-hidden">
     <ColoredLine />
      {/* Info and Social Icons */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center text-gray-400 text-xs md:text-sm px-2 py-1 ">
        {/* Info Section */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center flex-wrap gap-y-1">
          {/* location icon */}
          <div className="flex items-center ml-0 sm:ml-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400 inline-block"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 22s7-7.58 7-12A7 7 0 0 0 5 10c0 4.42 7 12 7 12z"
              />
              <circle
                cx="12"
                cy="10"
                r="3"
                stroke="currentColor"
                strokeWidth={2}
              />
            </svg>
            <p className="ml-1">
              Kings college hospital 2022 clinics & medical centre
            </p>
          </div>
          {/* timings icon */}
          <div className="flex items-center ml-0 sm:ml-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400 inline-block"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <circle
                cx="12"
                cy="12"
                r="9"
                stroke="currentColor"
                strokeWidth={2}
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 7v5l3 3"
              />
            </svg>
            <p className="ml-1">Monday - Sunday 8.00 - 20.00.</p>
          </div>
          {/* telephone icon */}
          <div className="flex items-center ml-0 sm:ml-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400 inline-block"
              fill="currentColor"
              viewBox="0 0 512 512"
            >
              <path d="M391.1 351.1c-27.6 0-54.5-4.3-80.2-12.7-12.1-3.8-25.2-.8-34.2 7.9l-49.9 37.5c-52.8-27.9-95.7-70.8-123.6-123.6l37.5-49.9c8.7-9 11.7-22.1 7.9-34.2C164.2 175.4 160 148.5 160 120.9 160 108.8 151.2 100 139.1 100H72c-13.3 0-24 10.7-24 24C48 338.1 173.9 464 368 464c13.3 0 24-10.7 24-24v-67.1c0-12.1-8.8-20.9-20.9-20.9z" />
            </svg>
            <p className="ml-1">+971 1 800 7777</p>
          </div>
        </div>
        {/* Social Media Icons */}
        <div className="flex items-center space-x-2 md:space-x-3 mt-2 md:mt-0 mr-4">
          {/* Twitter */}
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              className="h-5 w-5 text-gray-400 hover:text-[#1DA1F2] transition-colors duration-200"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0022.4.36a9.09 9.09 0 01-2.88 1.1A4.52 4.52 0 0016.11 0c-2.5 0-4.52 2.02-4.52 4.52 0 .35.04.7.11 1.03C7.69 5.4 4.07 3.7 1.64 1.15c-.38.65-.6 1.4-.6 2.2 0 1.52.77 2.86 1.95 3.65A4.48 4.48 0 01.96 6v.06c0 2.13 1.52 3.91 3.54 4.31-.37.1-.76.16-1.16.16-.28 0-.56-.03-.83-.08.56 1.75 2.19 3.02 4.13 3.06A9.06 9.06 0 010 19.54a12.8 12.8 0 006.92 2.03c8.3 0 12.84-6.88 12.84-12.84 0-.2 0-.41-.02-.61A9.22 9.22 0 0023 3z" />
            </svg>
          </a>
          {/* Facebook */}
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              className="h-5 w-5 text-gray-400 hover:text-[#1877F3] transition-colors duration-200"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0" />
            </svg>
          </a>
          {/* YouTube */}
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              className="h-5 w-5 text-gray-400 hover:text-[#FF0000] transition-colors duration-200"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M23.498 6.186a2.994 2.994 0 00-2.108-2.117C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.39.569A2.994 2.994 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a2.994 2.994 0 002.108 2.117C4.5 20.5 12 20.5 12 20.5s7.5 0 9.39-.569a2.994 2.994 0 002.108-2.117C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
          </a>
          {/* Instagram */}
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              className="h-6 w-6 text-gray-400 hover:text-[#C13584] transition-colors duration-200"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="40" height="40" rx="12" fill="currentColor" />
              <g>
                <rect x="10" y="10" width="20" height="20" rx="6" fill="#fff" />
                <circle
                  cx="20"
                  cy="20"
                  r="5.5"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <circle cx="25.5" cy="14.5" r="1.5" fill="currentColor" />
              </g>
            </svg>
          </a>
        </div>
      </div>
      {/* Main Navbar */}
      <div className="w-full flex justify-center py-2 bg-[#f1f4f8]">
        <div className="flex items-center max-w-7xl w-full  md:px-6 relative">
          {/* Colored background section */}
          <div className="flex items-center flex-1 rounded-full rounded-r-full shadow-sm border border-gray-200 bg-[#B1B9C233] py-2 pl-4 pr-12 relative">
            {/* Logo */}
            <img
              src="/images/kingsCollege.png"
              alt="King's College Hospital London"
              style={{ minWidth: 48 }}
            />
            {/* Hamburger for mobile */}
            <button
              className="md:hidden ml-4 p-2 focus:outline-none"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-label="Toggle navigation menu"
            >
              <svg className="h-6 w-6 text-[#1a2c48]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            {/* Nav Links */}
            <nav className="hidden md:flex flex-1 justify-center items-center space-x-4 lg:space-x-6 text-[#1a2c48] font-semibold text-xs md:text-sm">
              <Link href="/about" className="hover:text-[#4C60AB]">
                ABOUT
              </Link>
              <Link href="/specialties" className="hover:text-[#4C60AB]">
                SPECIALTIES
              </Link>
              <Link href="/doctors" className="hover:text-[#4C60AB]">
                DOCTORS
              </Link>
              <Link href="/appointment" className="hover:text-[#4C60AB]">
                APPOINTMENT
              </Link>
              <Link href="/contact" className="hover:text-[#4C60AB]">
                CONTACT
              </Link>
              <Link href="/insurance" className="hover:text-[#4C60AB]">
                INSURANCE
              </Link>
              <Link href="/careers" className="hover:text-[#4C60AB]">
                CAREERS
              </Link>
            </nav>
            {/* Mobile Nav Links */}
            {mobileMenuOpen && (
              <nav className="absolute top-12 left-0 w-full bg-white border-t border-gray-200 flex flex-col items-center space-y-2 py-4 shadow-lg md:hidden z-50">
                <Link href="/about" className="hover:text-[#4C60AB] w-full text-center py-2" onClick={() => setMobileMenuOpen(false)}>
                  ABOUT
                </Link>
                <Link href="/specialties" className="hover:text-[#4C60AB] w-full text-center py-2" onClick={() => setMobileMenuOpen(false)}>
                  SPECIALTIES
                </Link>
                <Link href="/doctors" className="hover:text-[#4C60AB] w-full text-center py-2" onClick={() => setMobileMenuOpen(false)}>
                  DOCTORS
                </Link>
                <Link href="/appointment" className="hover:text-[#4C60AB] w-full text-center py-2" onClick={() => setMobileMenuOpen(false)}>
                  APPOINTMENT
                </Link>
                <Link href="/contact" className="hover:text-[#4C60AB] w-full text-center py-2" onClick={() => setMobileMenuOpen(false)}>
                  CONTACT
                </Link>
                <Link href="/insurance" className="hover:text-[#4C60AB] w-full text-center py-2" onClick={() => setMobileMenuOpen(false)}>
                  INSURANCE
                </Link>
                <Link href="/careers" className="hover:text-[#4C60AB] w-full text-center py-2" onClick={() => setMobileMenuOpen(false)}>
                  CAREERS
                </Link>
              </nav>
            )}
            {/* Search */}
            <div
              className={`flex items-center bg-white rounded-full shadow transition-all duration-300 border border-gray-300 ${
                showSearch ? "w-56 px-2" : "w-10 px-0"
              } ml-2`}
              onMouseEnter={() => setShowSearch(true)}
              onMouseLeave={() => setShowSearch(false)}
              style={{ minHeight: 40 }}
            >
              <svg
                className="h-5 w-5 text-[#1a2c48] mx-2 "
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <circle cx="11" cy="11" r="7" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <input
                type="text"
                placeholder="Search…"
                className={`bg-transparent outline-none transition-all duration-300 ${
                  showSearch ? "w-40 opacity-100 ml-2" : "w-0 opacity-0 ml-0"
                }`}
                onBlur={() => setShowSearch(false)}
              />
            </div>
          </div>
          {/* Login button, overlapping the colored background */}
          <Link
            href="/login"
            className="bg-[#1a2c48] text-white rounded-lg  py-2 font-semibold shadow hover:bg-[#223a5f] transition -ml-10 z-10 min-w-[80px] text-center px-2 sm:px-4"
            style={{ minWidth: 100, textAlign: "center" }}
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
