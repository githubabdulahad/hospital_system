"use client";
import ColoredLine from "./ColoredLine";

const Footer = () => {
  return (
    <div className="-mt-2">
    <footer className="bg-[#0d2847] text-[#b6d6e2] pt-8 pb-4 border-t-2 border-[#2e6fae] relative">
      {/* mobile */}
      <div className="block md:hidden px-4 text-center">
          <div className="flex flex-col items-center gap-4">
            <img src="/images/Whitekingscollege.png" alt="King's" className="h-10" />
            
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="#b6d6e2" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0-1.243 1.007-2.25 2.25-2.25h2.086c.966 0 1.797.68 2.01 1.624l.518 2.217a2.25 2.25 0 01-.516 2.09l-1.12 1.12a16.017 16.017 0 006.364 6.364l1.12-1.12a2.25 2.25 0 012.09-.516l2.217.518a2.25 2.25 0 011.624 2.01v2.086a2.25 2.25 0 01-2.25 2.25c-9.389 0-17-7.611-17-17z"/>
                </svg>
                <span className="text-sm">+971 800 7777</span>
              </div>
              
              <div className="flex items-center justify-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="#b6d6e2" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5H4.5a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-.876 1.797l-7.125 5.7a2.25 2.25 0 01-2.748 0l-7.125-5.7A2.25 2.25 0 012.25 6.993V6.75"/>
                </svg>
                <span className="text-sm">kings123@gmail.com</span>
              </div>
            </div>
            
            <div className="flex gap-3 justify-center">
              <img src="/images/facebook.png" alt="facebook" className="w-6 h-6" />
              <img src="/images/twitter.png" alt="twitter" className="w-6 h-6" />
              <img src="/images/Linkedin.png" alt="linkedin" className="w-6 h-6" />
              <img src="/images/insta.png" alt="instagram" className="w-6 h-6" />
            </div>
            
            <div className="text-xs text-center mt-2">
              © 2024 Kings College Hospital. All rights reserved.
            </div>
          </div>
        </div>


      {/* Desktop */}
      <div className="hidden md:block max-w-7xl mx-auto px-4">
      <div className="max-w-7xl px-4 flex flex-col md:flex-row justify-between gap-8 mt-8 mb-3">
        {/* Logo & App Links */}
        <div className="flex flex-col items-center gap-3 ml-16 space-y-2">
          <div className="flex items-center gap-2">
            <img src="/images/Whitekingscollege.png" alt="King's" className="h-12" />
          </div>
          <div className="text-xs mt-2">
            Download the app by clicking the link below :
          </div>
          <div className="flex gap-2 mt-2">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Google Play"
              className="h-10"
            />
            <img
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              alt="App Store"
              className="h-10"
            />
          </div>
        </div>
        {/* Pages */}
          <div className="flex flex-col">
            <div className="text-white font-semibold mb-6">Pages</div>
            <ul className="space-y-5">
              <li>About</li>
              <li>Specialties</li>
              <li>Doctors</li>
              <li>Insurance</li>
              <li>Careers</li>
            </ul>
          </div>
        <div className=" flex flex-col space-y-4 mt-12  ">
            <ul className="space-y-5">
              <li>Appointment</li>
              <li>Contact</li>
            </ul>
          </div>
        {/* Contact */}
        <div className=" ">
          <div className="text-white font-semibold mb-6">Contact</div>
          <div className="flex flex-col gap-5 ">
            <div className=" flex ">
              {/* Phone - Heroicons */}
              <svg className="w-5 h-5" fill="none" stroke="#b6d6e2" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0-1.243 1.007-2.25 2.25-2.25h2.086c.966 0 1.797.68 2.01 1.624l.518 2.217a2.25 2.25 0 01-.516 2.09l-1.12 1.12a16.017 16.017 0 006.364 6.364l1.12-1.12a2.25 2.25 0 012.09-.516l2.217.518a2.25 2.25 0 011.624 2.01v2.086a2.25 2.25 0 01-2.25 2.25c-9.389 0-17-7.611-17-17z"/>
              </svg>
              <span>+971 800 7777</span>
            </div>
            <div className="flex items-center gap-2 mb-1 ">
              {/* Email - Heroicons */}
              <svg className="w-5 h-5" fill="none" stroke="#b6d6e2" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5H4.5a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-.876 1.797l-7.125 5.7a2.25 2.25 0 01-2.748 0l-7.125-5.7A2.25 2.25 0 012.25 6.993V6.75"/>
              </svg>
              <span>kings123@gmail.com</span>
            </div>
            <div className="flex items-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mt-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#b6d6e2"
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
              <div className="ml-2 leading-snug">
                <div>Kings college hospital</div>
                <div className="mt-1">2022 clinics & medical centre</div>
              </div>
            </div>
          </div>
        </div>
        {/* Social */}
        <div className="flex flex-col items-center md:items-start md:w-1/6">
          <div className="text-white font-semibold mb-6">Social media</div>
          <div className="flex gap-4">
            <img src="/images/facebook.png" alt="facebook" />
            <img src="/images/twitter.png" alt="twitter" />
            <img src="/images/Linkedin.png" alt="linkedin" />
            <img src="/images/insta.png" alt="instagram" />
          </div>
        </div>
      </div>
      </div>
      </footer>
      <ColoredLine />
      </div>

  );
};

export default Footer;
