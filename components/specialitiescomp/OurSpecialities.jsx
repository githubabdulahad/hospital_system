import { FaHeadphones, FaTooth, FaRibbon, FaHeartbeat } from "react-icons/fa";
import Commonbtn from "../subComponents/Commonbtn";
import  Link  from "next/link";

const specialities = [
  {
    icon: <FaHeadphones className="text-3xl text-blue-900" />,
    title: "Dietetics",
    desc: "A complete listing of services offered by the hospital including specialties",
    bg: "bg-[#ACD9E8]",
  },
  {
    icon: <FaTooth className="text-3xl text-blue-900" />,
    title: "Dentistry",
    desc: "A complete listing of consultancy offered by the hospital including specialties",
    bg: "bg-[#C6C1DA]",
  },
  {
    icon: <FaRibbon className="text-3xl text-blue-900" />,
    title: "Cancer",
    desc: "We are a large, local provider of treatment services for common cancers",
    bg: "bg-[#C0E6DA]",
  },
  {
    icon: <FaHeartbeat className="text-3xl text-blue-900" />,
    title: "Cardiology",
    desc: "A complete listing of cardio offered by the hospital including specialties",
    bg: "bg-[#E9E6E4]",
  },
  {
    icon: <FaHeartbeat className="text-3xl text-blue-900" />,
    title: "Ortho",
    desc: "A complete listing of cardio offered by the hospital including specialties",
    bg: "bg-[#ACD9E8]",
  },
  {
    icon: <FaRibbon className="text-3xl text-blue-900" />,
    title: "ENT",
    desc: "A complete listing of consultancy offered by the hospital including specialties",
    bg: "bg-[#C6C1DA]",
  },
  {
    icon: <FaTooth className="text-3xl text-blue-900" />,
    title: "Rehabilitation Centre",
    desc: "We are a large, local provider of treatment services for common cancers",
    bg: "bg-[#C0E6DA]",
  },
  {
    icon: <FaHeadphones className="text-3xl text-blue-900" />,
    title: "Surgery",
    desc: "A complete listing of cardio offered by the hospital including specialties",
    bg: "bg-[#E9E6E4]",
  },
  {
    icon: <FaHeadphones className="text-3xl text-blue-900" />,
    title: "General Surgery",
    desc: "A complete listing of services offered by the hospital including specialties",
    bg: "bg-[#ACD9E8]",
  },
  {
    icon: <FaHeartbeat className="text-3xl text-blue-900" />,
    title: "Dermatology",
    desc: "A complete listing of consultancy offered by the hospital including specialties",
    bg: "bg-[#C6C1DA]",
  },
  {
    icon: <FaRibbon className="text-3xl text-blue-900" />,
    title: "Diabetes Clinic",
    desc: "We are a large, local provider of treatment services for common cancers",
    bg: "bg-[#C0E6DA]",
  },
  {
    icon: <FaTooth className="text-3xl text-blue-900" />,
    title: "Breast Care Centre",
    desc: "A complete listing of cardio offered by the hospital including specialties",
    bg: "bg-[#E9E6E4]",
  },
];

export default function OurSpecialities() {
  return (
    <section className="max-w-6xl mx-auto py-10 px-4 mb-12">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-8 gap-6" style={{ fontFamily: "'Gill Sans MT', 'Gill Sans', 'GillSans', 'Arial', 'sans-serif'" }}>
        <div>
          <h4 className="text-base text-[#0B2443] mb-1 font-semibold">Need Professional Help?</h4>
          <h2 className="text-3xl font-bold mb-2">Our Specialties</h2>
        </div>
        <div className="flex items-center gap-4">
          <button className="group relative font-bold text-[#0B2443] mr-3 flex items-center focus:outline-none">
      
      <span
        className="absolute left-0 -bottom-1 w-full h-1 border-b-2 border-[#0B2443] transition-all duration-200 group-hover:w-full"
      />
    </button>
          <Link href="/appointment" style={{ fontFamily: "'Poppins', sans-serif" }}>
          <Commonbtn bgColor="bg-[#C0E6DA]" textColor="text-[#0B2443]" >Book Appointment</Commonbtn>
          </Link>
        
        </div>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-4 mb-4" style={{ fontFamily: "'Gill Sans MT', 'Gill Sans', 'GillSans', 'Arial', 'sans-serif'" }}>
        {specialities.map((spec, idx) => (
          <div
            key={spec.title}
            className={`${spec.bg} rounded-xl p-6 flex flex-col items-center shadow-md transition-transform hover:-translate-y-1`}
          >
            <div className="mb-4">{spec.icon}</div>
            <h3 className="text-lg font-semibold mb-2">{spec.title}</h3>
            <p className="text-gray-600 text-center mb-4">{spec.desc}</p>
            <Commonbtn bgColor="" textColor="text-[#0B2443]" className="border-[2px] border-[#0B2443]">Detail</Commonbtn>
          </div>
        ))}
      </div>
    </section>
  );
}