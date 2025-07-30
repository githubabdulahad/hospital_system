"use client";
import React, { useState } from "react";
import Commonbtn from "../subComponents//Commonbtn";

const Contactform = () => {
  // State for form inputs (optional, but good for controlled components)
  const [consultationType] = useState("online"); // 'online' or 'in-person'
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [condition, setCondition] = useState("");
  const [hearAboutUs, setHearAboutUs] = useState("");

  // Handle form submission (you'll typically send this data to a backend)
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      consultationType,
      name,
      email,
      phone,
      location,
      condition,
      hearAboutUs,
    });
    // Add your logic here to send data to an API, show a success message, etc.
    alert("Appointment request submitted! (Check console for data)");
  };

  return (
    <div
      className="flex justify-center items-center min-h-[550px] bg-gray-100 p-2 sm:p-4 mb-12 sm:mb-22 mt-12 sm:mt-48"
      style={{
        fontFamily:
          "'Gill Sans MT', 'Gill Sans', 'GillSans', 'Arial', 'sans-serif'",
      }}
    >
      <div className="bg-[#E9E6E4] rounded-lg shadow-xl overflow-hidden flex flex-col md:flex-row w-full max-w-sm sm:max-w-2xl md:max-w-none md:mx-28">
        {/* Left Section: Booking Form */}
        <div className="p-4 sm:p-6 w-full md:w-[620px] text-[#0B2443]">
          <h2 className="text-xl sm:text-2xl font-bold mb-4 text-center md:text-left">We are here to help you</h2>
          <div className="flex flex-col sm:flex-row items-center mb-8 sm:mb-20">
            <p className="text-[#0B2443] text-sm mb-3 sm:mb-0 sm:mr-4 text-center sm:text-left">
              If you are an existing patient, please log in to the patient portal.
            </p>
            <button className="bg-[#0B2443] text-white font-normal py-2 px-4 rounded-md text-sm transition duration-300 ease-in-out w-auto">
              Sign In
            </button>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4">
              <div className="mb-1">
                <input
                  type="text"
                  className="appearance-none border border-[#0B2443] rounded-md w-full py-2 sm:py-3.5 px-4 text-gray-400 leading-tight focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent text-sm"
                  id="name"
                  placeholder="Enter Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="mb-2">
                <input
                  type="email"
                  className="appearance-none border border-[#0B2443] rounded-md w-full py-2 sm:py-3.5 px-4 text-gray-400 leading-tight focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent text-sm"
                  id="email"
                  placeholder="Enter Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-2">
                <input
                  type="tel"
                  className="appearance-none border border-[#0B2443] rounded-md w-full py-2 sm:py-3.5 px-4 text-gray-400 leading-tight focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent text-sm"
                  id="phone"
                  placeholder="Enter Phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>
              <div className="mb-2">
                <div className="relative">
                  <select
                    className="block appearance-none w-full bg-[#E9E6E4] border border-[#0B2443] rounded-md py-2 sm:py-3.5 px-4 pr-8 leading-tight focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent text-gray-400 text-sm"
                    id="location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    required
                  >
                    <option value="" disabled className="text-gray-400">
                      Select Location
                    </option>
                    <option value="Islamabad">Islamabad</option>
                    <option value="Karachi">Karachi</option>
                    <option value="Lahore">Lahore</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-1 mt-4">
              <textarea
                className="appearance-none border border-gray-700 rounded-md mb-6 w-full py-2.5 px-3 text-gray-400 leading-tight focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent text-sm h-20 sm:h-28 resize-none"
                id="condition"
                placeholder="Please describe your condition (if known)"
                value={condition}
                onChange={(e) => setCondition(e.target.value)}
              ></textarea>
            </div>
            <div className="mb-2">
              <div className="relative">
                <select
                  className="block appearance-none w-full bg-[#E9E6E4] border border-gray-800 rounded-md px-3 py-2.5 pr-8 leading-tight focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent text-gray-400 text-sm"
                  id="hearAboutUs"
                  value={hearAboutUs}
                  onChange={(e) => setHearAboutUs(e.target.value)}
                  required
                >
                  <option value="" disabled className="text-gray-400">
                    Where did you hear about us?
                  </option>
                  <option value="Google">Google</option>
                  <option value="Social Media">Social Media</option>
                  <option value="Friend/Family">Friend/Family</option>
                  <option value="Other">Other</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>

            <Commonbtn
              bgColor="bg-[#0B2443]"
              textColor="text-[#FFFFFF]"
              className="mb-4 mt-2 w-auto"
            >
              Contact Us
            </Commonbtn>
          </form>
        </div>

        {/* Right Section: Help Information */}
        <div className="bg-blue-50 text-[#FFFFFF] w-full md:w-1/2 flex flex-col justify-center">
          <div
            className="relative bg-cover bg-center flex flex-col justify-center p-4 sm:p-6 min-h-[300px] sm:min-h-[400px] md:h-[656px] w-full"
            style={{ backgroundImage: `url(/images/Appointmentimages/image2.png)` }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-[#0B2443] opacity-70 z-0"></div>

            {/* Content */}
            <div className="relative z-10 text-center md:text-left px-4 sm:px-6 md:pl-14 w-full max-w-sm mx-auto md:max-w-none md:w-[316px] md:mx-0">
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 md:-mt-20">
                If you need any help Contact Us
              </h3>
              <p className="text-sm mb-6 leading-relaxed">
                If you need any help with making your booking then please contact:
              </p>

              <div className="mb-4">
                <p className="font-semibold text-sm sm:text-base md:text-md">Kings College Hospital</p>
              </div>
              <div className="flex items-center justify-center md:justify-start mb-6 mt-2">
                <img src="/images/Appointmentimages/iconimage1.png" alt="" className="h-6 w-6 sm:h-7 sm:w-7 mr-3 sm:mr-4" />
                <p className="font-semibold text-lg sm:text-xl">97148007777</p>
              </div>
              <div className="mt-8 sm:mt-12">
                <p className="font-bold text-lg sm:text-xl mb-1">For Emergency Cases</p>
                <p className="text-lg sm:text-xl font-bold">24 Hours Available</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactform;