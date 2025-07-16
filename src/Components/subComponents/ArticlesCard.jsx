import image from "../../assets/images/Articlescardimg.png";

export default function ArticlesCard() {
  return (
    <div className="relative bg-white rounded-xl overflow-hidden">
      {/* Image Wrapper */}
      <div className="relative w-full h-auto">
        <img src={image} alt="Articles" className="w-full h-auto object-cover" />
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#D9D9D9]/50 z-10" />
      </div>

      {/* Text Box */}
      <div className="absolute top-4 left-4 bg-[#0B2443]/90 text-white p-6 rounded-xl w-[55%] h-[238px] flex flex-col justify-center z-20">
        <p className="italic text-sm" style={{ fontFamily: "'EB Garamond', Garamond, serif" }}>
          Doctors Corner
        </p>
        <h2 className="text-2xl font-bold mb-2">Articles & Documents of Doctors</h2>
        <p className="mb-4">
          Here you can find out useful articles, information and downloads on your appointment and on the hospital.
        </p>
        <button className="bg-[#C0E6DA] text-[#0B2443] px-4 py-2 rounded font-semibold w-fit">Read More</button>
      </div>
    </div>
  );
}
