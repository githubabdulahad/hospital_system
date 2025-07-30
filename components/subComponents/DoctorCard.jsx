"use client";
// DoctorCard.jsx

export default function DoctorCard({ image, name, specialty }) {
  return (
    <div
      className="relative bg-white rounded-2xl w-full max-w-64 mx-3 sm:mx-auto flex flex-col items-center mt-3"
      style={{ minHeight: "320px" }}
    >
      <img
        src={image}
        alt={name}
        className="w-full h-72 sm:h-72 object-cover rounded-2xl"
        draggable="false"
      />
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-10 sm:bottom-14 translate-y-1/2 bg-[#0B2443] w-11/12 rounded-xl px-4 sm:px-6 py-4 sm:py-5 flex flex-col items-center text-white shadow-lg">
        <span 
          className="italic text-sm sm:text-base mb-1 text-[#c0e6da] text-center" 
          style={{ fontFamily: "'EB Garamond', Garamond, serif" }}
        >
          {specialty}
        </span>
        <span className="font-bold text-base sm:text-lg mb-2 text-center">{name}</span>
        <button className="underline underline-offset-4 hover:text-[#C0E6DA] transition text-lg sm:text-xl">
          Book Now
        </button>
      </div>
    </div>
  );
}