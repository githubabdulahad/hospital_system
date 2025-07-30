"use client";

export default function ArticlesCard() {
  return (
    <div className="relative bg-white rounded-xl overflow-hidden">
      {/* Image Wrapper */}
      <div className="relative w-full h-auto">
        <img src="/images/Articlescardimg.png" alt="Articles" className="w-full h-auto object-cover" />
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#D9D9D9]/50 z-10" />
      </div>

      {/* Text Box */}
      <div className="absolute top-2 left-2 sm:top-4 sm:left-4 bg-[#0B2443]/90 text-white p-3 sm:p-6 rounded-xl w-[85%] sm:w-[55%] h-auto sm:h-[238px] flex flex-col justify-center z-20">
        <p className="italic text-xs sm:text-sm mb-1 sm:mb-0" style={{ fontFamily: "'EB Garamond', Garamond, serif" }}>
          Doctors Corner
        </p>
        <h2 className="text-lg sm:text-2xl font-bold mb-1 sm:mb-2">Articles & Documents of Doctors</h2>
        <p className="mb-2 sm:mb-4 text-xs sm:text-base">
          Here you can find out useful articles, information and downloads on your appointment and on the hospital.
        </p>
        <button className="bg-[#C0E6DA] text-[#0B2443] px-3 py-1.5 sm:px-4 sm:py-2 rounded font-semibold w-fit text-xs sm:text-base">Read More</button>
      </div>
    </div>
  );
}