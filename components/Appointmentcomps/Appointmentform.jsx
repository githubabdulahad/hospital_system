"use client";
import React, { useState } from "react";
import Commonbtn from "../subComponents//Commonbtn";

const Appointmentform = () => {
  // State for form inputs
  const [consultationType, setConsultationType] = useState("online");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [condition, setCondition] = useState("");
  const [hearAboutUs, setHearAboutUs] = useState("");

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
    alert("Appointment request submitted! (Check console for data)");
  };

  return (
    <div
      className="flex justify-center items-center py-4 sm:py-8 md:py-12 px-2 sm:px-4 md:px-8 bg-gray-100 min-h-screen"
      style={{
        fontFamily:
          "'Gill Sans MT', 'Gill Sans', 'GillSans', 'Arial', 'sans-serif'",
      }}
    >
      <div className="bg-[#E9E6E4] rounded-lg shadow-xl overflow-hidden flex flex-col lg:flex-row w-full max-w-sm sm:max-w-2xl md:max-w-4xl lg:max-w-6xl mx-auto">
        {/* Left Section: Booking Form */}
        <div className="p-4 sm:p-6 md:p-8 lg:w-1/2 xl:w-[620px] text-[#0B2443] flex flex-col justify-center w-full">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-center lg:text-left">
            Book An Appointment
          </h2>
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
            <p className="text-[#0B2443] text-sm sm:text-base text-center sm:text-left">
              If you are an existing patient, please log in to the patient portal.
            </p>
            <button className="bg-[#0B2443] text-white font-medium py-2 px-6 rounded-md text-sm transition duration-300 ease-in-out whitespace-nowrap w-auto">
              Sign In
            </button>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="mb-4 sm:mb-6">
              <label
                htmlFor="consultationType"
                className="block text-[#0B2443] text-sm sm:text-base font-semibold mb-3"
              >
                Consultation Type
              </label>
              <div className="flex flex-row gap-3">
                <button
                  type="button"
                  onClick={() => setConsultationType("online")}
                  className={`py-1 px-2 sm:py-3 sm:px-6 rounded-full text-sm font-medium transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-gray-500 w-auto
                    ${
                      consultationType === "online"
                        ? "bg-[#0B2443] text-white shadow"
                        : "bg-[#FFFFFF] text-[#0B2443] hover:bg-gray-300"
                    }`}
                >
                  <span className="mr-0.5">•</span> Online
                </button>
                <button
                  type="button"
                  onClick={() => setConsultationType("in-person")}
                  className={`py-1 px-2 sm:py-3 sm:px-6 rounded-full text-sm font-medium transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-gray-500 w-auto
                    ${  
                      consultationType === "in-person"
                        ? "bg-[#0B2443] text-white shadow"
                        : "bg-[#FFFFFF] text-[#0B2443] hover:bg-gray-300"
                    }`}
                >
                  <span className="mr-0.5">•</span> In-Person
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-6">
              <div className="mb-2 sm:mb-4">
                <input
                  type="text"
                  className="appearance-none border border-[#0B2443] rounded-md w-full py-2 sm:py-4 px-4 text-gray-600 leading-tight focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent text-sm"
                  id="name"
                  placeholder="Enter Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="mb-2 sm:mb-4">
                <input
                  type="email"
                  className="appearance-none border border-[#0B2443] rounded-md w-full py-2 sm:py-4 px-4 text-gray-600 leading-tight focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent text-sm"
                  id="email"
                  placeholder="Enter Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-2 sm:mb-4">
                <input
                  type="tel"
                  className="appearance-none border border-[#0B2443] rounded-md w-full py-2 sm:py-4 px-4 text-gray-600 leading-tight focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent text-sm"
                  id="phone"
                  placeholder="Enter Phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>
              <div className="mb-2 sm:mb-4">
                <div className="relative">
                  <select
                    className="block appearance-none w-full bg-[#E9E6E4] border border-[#0B2443] rounded-md py-2 sm:py-4 px-4 pr-10 leading-tight focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent text-gray-600 text-sm"
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
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-700">
                    <svg
                      className="fill-current h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-4 sm:mb-6">
              <textarea
                className="appearance-none border border-gray-700 rounded-md w-full py-3 px-4 text-gray-600 leading-tight focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent text-sm h-24 sm:h-32 resize-none"
                id="condition"
                placeholder="Please describe your condition (if known)"
                value={condition}
                onChange={(e) => setCondition(e.target.value)}
              ></textarea>
            </div>

            <div className="mb-6 sm:mb-8">
              <div className="relative">
                <select
                  className="block appearance-none w-full bg-[#E9E6E4] border border-gray-800 rounded-md px-4 py-3 pr-10 leading-tight focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent text-gray-600 text-sm"
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
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500">
                  <svg
                    className="fill-current h-5 w-5"
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
              className="mb-4 sm:mb-6 w-1/2 ml-20 sm:ml-0"
            >
              Make Appointment
            </Commonbtn>
          </form>
        </div>

        {/* Right Section: Help Information */}
        <div className="bg-blue-50 text-[#FFFFFF] lg:w-1/2 flex flex-col justify-center w-full min-h-[300px] sm:min-h-[400px] lg:min-h-[656px]">
          <div
            className="relative bg-cover bg-center flex flex-col justify-center p-6 sm:p-8 md:p-12 h-full w-full"
            style={{ backgroundImage: `url(/images/Appointmentimages/image2.png)` }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-[#0B2443] opacity-70 z-0"></div>

            {/* Content */}
            <div className="relative z-10 px-4 sm:px-6 md:px-8 lg:pl-14 w-full max-w-md mx-auto lg:mx-0">
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-4 sm:mb-6 text-center lg:text-left">
                HELP WITH YOUR BOOKING
              </h3>
              <p className="text-sm sm:text-base mb-6 sm:mb-8 leading-relaxed text-center lg:text-left">
                If you need any help with making your booking then please
                contact:
              </p>

              <div className="mb-4 sm:mb-6 text-center lg:text-left">
                <p className="font-semibold text-sm sm:text-base md:text-lg">Kings College Hospital</p>
              </div>
              
              <div className="flex items-center justify-center lg:justify-start mb-6 sm:mb-8">
                <img src="/images/Appointmentimages/iconimage1.png" alt="" className="h-6 w-6 sm:h-8 sm:w-8 mr-3 sm:mr-4"/>
                <p className="font-semibold text-lg sm:text-xl md:text-2xl">97148007777</p>
              </div>
              
              <div className="text-center lg:text-left">
                <p className="font-bold text-base sm:text-lg md:text-xl mb-2">For Emergency Cases</p>
                <p className="text-base sm:text-lg md:text-xl font-bold">24 Hours Available</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointmentform;