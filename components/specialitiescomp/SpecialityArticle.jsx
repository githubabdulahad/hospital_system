export default function SpecialityArticle() {
  return (
    <div className="relative bg-white rounded-xl overflow-hidden mb-10">
      {/* Image Wrapper */}
      <div className="relative w-full h-auto">
        <img src="/images/Articlescardimg.png" alt="Articles" className="w-full h-auto object-cover" />
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#D9D9D9]/50 z-10" />
      </div>
      
      {/* Text Box - Desktop */}
      <div className="hidden md:block absolute top-20 left-28 bg-[#0B2443]/90 text-white p-6 rounded-xl w-[55%] h-[238px] flex-col justify-center z-20">
        <p className="italic text-sm" style={{ fontFamily: "'EB Garamond', Garamond, serif" }}>
          Doctors Corner
        </p>
        <div className="flex flex-row gap-40 my-2">
          <h2 className="text-2xl font-bold mb-2">Articles & Documents of Doctors</h2>
          <button className="bg-[#C0E6DA] text-[#0B2443] px-4 py-2 rounded font-semibold w-fit">Read More</button>
        </div>
        <p className="mb-4">
          Here you can find out useful articles, information and downloads on your appointment and on the hospital.
        </p>
      </div>

      {/* Text Box - Mobile (Similar to home page article style) */}
      <div className="block md:hidden">
        <div className="bg-[#0B2443] p-6 mx-4 -mt-8 relative z-20 rounded-xl shadow-lg">
          <p className="italic text-sm text-white mb-2" style={{ fontFamily: "'EB Garamond', Garamond, serif" }}>
            Doctors Corner
          </p>
          <h2 className="text-xl font-bold text-white mb-3">Articles & Documents of Doctors</h2>
          <p className="text-white text-sm mb-4 leading-relaxed">
            Here you can find out useful articles, information and downloads on your appointment and on the hospital.
          </p>
          <button className="bg-[#c0e6da] text-[#0b2443] px-6 py-2 rounded-lg font-semibold text-sm hover:bg-[#0B2443]/90 transition-colors">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
}