import image from "../../assets/images/Expertisecardimg.png";
export default function ExpertiseCard() {
  return (
    <div className="bg-[#E9E6E4] p-8 rounded-xl flex flex-col md:flex-row items-center gap-6">
      <div className="flex-1">
        <h2 className="text-[#0B2443] font-bold text-2xl mb-2">Our Expertise</h2>
        <p className="text-[#0B2443] mb-4">
          Our priority is patient care, and we offer the same high quality trusted healthcare, modern techniques and
          evidence-based procedures at our clinics in both Abu Dhabi and Jumeirah as we provide at our International
          renowned hospital in the UK.
        </p>
        <button className="bg-[#C0E6DA] text-[#0B2443] px-4 py-2 rounded font-semibold">Read More</button>
      </div>
      <img src={image} alt="Expertise" className="rounded-xl w-52 h-auto" />
    </div>
  );
}
