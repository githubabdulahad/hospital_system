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
      className="flex justify-center items-center py-4 sm:py-8 md:py-12 px-1 sm:px-2 md:px-8 bg-gray-100 min-h-screen"
      style={{
        fontFamily:
          "'Gill Sans MT', 'Gill Sans', 'GillSans', 'Arial', 'sans-serif'",
      }}
    >
      <div className="bg-[#E9E6E4] rounded-lg shadow-xl overflow-hidden flex flex-col lg:flex-row w-full max-w-xs sm:max-w-xl md:max-w-3xl lg:max-w-6xl mx-auto">
        {/* Left Section: Booking Form */}
        <div className="p-2 sm:p-4 md:p-6 lg:w-1/2 xl:w-[620px] text-[#0B2443] flex flex-col justify-center w-full">
          <h2 className="text-base sm:text-lg md:text-2xl font-bold mb-3 sm:mb-4">Book An Appointment</h2>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-1 sm:gap-4 mb-3 sm:mb-4">
            <p className="text-[#0B2443] text-xs sm:text-sm">
              If you are an existing patient, please log in to the patient portal.
            </p>
            <button className="bg-[#0B2443] text-white font-normal py-2 px-4 rounded-md text-xs sm:text-sm transition duration-300 ease-in-out whitespace-nowrap">
              Sign In
            </button>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="mb-3 sm:mb-4">
              <label
                htmlFor="consultationType"
                className="block text-[#0B2443] text-xs sm:text-sm font-semibold mb-2"
              >
                Consultation Type
              </label>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                <button
                  type="button"
                  onClick={() => setConsultationType("online")}
                  className={`py-2 px-3 sm:px-5 rounded-full text-xs sm:text-sm font-medium transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-gray-500
                    ${
                      consultationType === "online"
                        ? "bg-[#0B2443] text-white shadow"
                        : "bg-[#FFFFFF] text-[#0B2443] hover:bg-gray-300"
                    }`}
                >
                  <span className="mr-1">•</span> Online
                </button>
                <button
                  type="button"
                  onClick={() => setConsultationType("in-person")}
                  className={`py-2 px-3 sm:px-5 rounded-full text-xs sm:text-sm font-medium transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-gray-500
                    ${
                      consultationType === "in-person"
                        ? "bg-[#0B2443] text-white shadow"
                        : "bg-[#FFFFFF] text-[#0B2443] hover:bg-gray-300"
                    }`}
                >
                  <span className="mr-1">•</span> In-Person
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6">
              <div className="mb-2 sm:mb-3">
                <input
                  type="text"
                  className="appearance-none border border-[#0B2443] rounded-md w-full py-2 sm:py-3.5 px-3 sm:px-4 text-gray-400 leading-tight focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent text-xs sm:text-sm"
                  id="name"
                  placeholder="Enter Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="mb-2 sm:mb-3">
                <input
                  type="email"
                  className="appearance-none border border-[#0B2443] rounded-md w-full py-2 sm:py-3.5 px-3 sm:px-4 text-gray-400 leading-tight focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent text-xs sm:text-sm"
                  id="email"
                  placeholder="Enter Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-2 sm:mb-3">
                <input
                  type="tel"
                  className="appearance-none border border-[#0B2443] rounded-md w-full py-2 sm:py-3.5 px-3 sm:px-4 text-gray-400 leading-tight focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent text-xs sm:text-sm"
                  id="phone"
                  placeholder="Enter Phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>
              <div className="mb-2 sm:mb-3">
                <div className="relative">
                  <select
                    className="block appearance-none w-full bg-[#E9E6E4] border border-[#0B2443] rounded-md py-2 sm:py-3.5 px-3 sm:px-4 pr-8 leading-tight focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent text-gray-400 text-xs sm:text-sm"
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
            <div className="mb-2 sm:mb-3 mt-3 sm:mt-4">
              <textarea
                className="appearance-none border border-gray-700 rounded-md w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent text-xs sm:text-sm h-20 sm:h-28 resize-none"
                id="condition"
                placeholder="Please describe your condition (if known)"
                value={condition}
                onChange={(e) => setCondition(e.target.value)}
              ></textarea>
            </div>
            <div className="mb-4 sm:mb-6">
              <div className="relative">
                <select
                  className="block appearance-none w-full bg-[#E9E6E4] border border-gray-800 rounded-md px-3 py-2 pr-8 leading-tight focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent text-gray-400 text-xs sm:text-sm"
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
              className="mb-3 sm:mb-4 mt-2 w-full sm:w-auto"
            >
              Make Appointment
            </Commonbtn>
          </form>
        </div>

        {/* Right Section: Help Information */}
        <div className="bg-blue-50 text-[#FFFFFF] lg:w-1/2 flex flex-col justify-center w-full min-h-[220px] sm:min-h-[300px] md:min-h-[500px] lg:min-h-[656px]">
          <div
            className="relative bg-cover bg-center flex flex-col justify-center p-2 sm:p-6 md:p-8 h-full w-full"
            style={{ backgroundImage: `url(/images/Appointmentimages/image2.png)` }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-[#0B2443] opacity-70 z-0"></div>

            {/* Content */}
            <div className="relative z-10 px-2 sm:px-4 md:pl-14 w-full max-w-xs sm:max-w-[316px] mx-auto sm:mx-0">
              <h3 className="text-base sm:text-xl md:text-2xl font-semibold mb-3 sm:mb-4 md:-mt-20">
                HELP WITH YOUR BOOKING
              </h3>
              <p className="text-xs sm:text-sm mb-4 sm:mb-6 leading-relaxed">
                If you need any help with making your booking then please
                contact:
              </p>

              <div className="mb-2 sm:mb-4">
                <p className="font-semibold text-xs sm:text-sm md:text-md">Kings College Hospital</p>
              </div>
              <div className="flex items-center mb-4 sm:mb-6 mt-2">
                <img src="/images/Appointmentimages/iconimage1.png" alt="" className="h-5 w-5 sm:h-7 sm:w-7 mr-2 sm:mr-4"/>
                <p className="font-semibold text-base sm:text-xl">97148007777</p>
              </div>
              <div className="mt-4 sm:mt-8 md:mt-12">
                <p className="font-bold text-base sm:text-xl mb-1">For Emergency Cases</p>
                <p className="text-base sm:text-xl font-bold">24 Hours Available</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointmentform;