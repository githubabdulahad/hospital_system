import React from "react";
import { FaSearch } from "react-icons/fa";

const Drform = () => {
  return (
    <div
      className="mx-4 md:mx-10 mb-14"
      style={{
        fontFamily:
          "'Gill Sans MT', 'Gill Sans', 'GillSans', 'Arial', 'sans-serif'",
      }}
    >
      <div className="bg-[#E9E6E4] px-4 md:px-4 py-6 md:py-10 rounded-2xl">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-base md:text-lg lg:text-xl font-medium mb-4 md:mb-6 text-[#0B2443]">
            Find a healthcare provider at KING's hospital
          </h2>

          {/* Search input */}
          <div className="mb-4 md:mb-6 text-left text-[#0B2443CC]">
            <label className="font-semibold text-[#0B2443CC] text-sm md:text-base">SEARCH BY:</label>
            <div className="relative mt-2">
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search by Specialty, Condition or Doctor"
                className="w-full border border-gray-300 text-gray-500 rounded-md pl-11 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              />
            </div>
          </div>

          {/* Labels - Responsive */}
          <div className="flex flex-row justify-between mb-2 md:mb-2.5 text-[#0B2443CC] gap-2 md:gap-0">
            <label className="font-semibold text-sm md:text-base text-left">SPECIALITY:</label>
            <label className="font-semibold text-sm md:text-base text-left mr-20 md:mr-80">LOCATION:</label>
          </div>

          {/* Dropdowns */}
          <div className="flex flex-row gap-4 justify-between mb-6">
            {/* Specialty Dropdown */}
            <select className="w-1/2 border border-gray-300 text-gray-400 rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="">Search by specialty</option>
              <option value="cardiology">Cardiology</option>
              <option value="orthopedics">Orthopedics</option>
              {/* Add more options as needed */}
            </select>

            {/* Location Dropdown */}
            <select className="w-1/2 border border-gray-300 rounded-md text-gray-400 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="">Search by Location</option>
              <option value="dubai">Dubai</option>
              <option value="abu-dhabi">Abu Dhabi</option>
              {/* Add more options as needed */}
            </select>
          </div>

          {/* Search Button - Responsive */}
          <button className="bg-[#0B2443] text-white py-3 md:py-4 font-bold px-8 md:px-48 rounded-md hover:bg-[#091a33] transition w-full md:w-auto text-sm md:text-base">
            SEARCH
          </button>
        </div>
      </div>
    </div>
  );
};

export default Drform;