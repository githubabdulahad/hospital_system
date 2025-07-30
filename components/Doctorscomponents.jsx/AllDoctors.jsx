'use client';
import React , {useState , useEffect} from "react";
import DoctorCard from "../subComponents/DoctorCard";

const doctorsData = [
  {
    name: "Dr. Ryley Mueller",
    specialty: "Cardiology",
    image:"/images/doctorimage/drimg3.png",
  },
  {
    name: "Dr. Elisa Hodges",
    specialty: "Dentist",
    image:"/images/doctorimage/drimg2.png",
  },
  {
    name: "Dr. Ryley Mueller",
    specialty: "Dermatology",
    image:"/images/doctorimage/drimg3.png",
  },
  {
    name: "Dr. Ryley Mueller",
    specialty: "Dermatology",
    image:"/images/doctorimage/drimg3.png",
  },
  {
    name: "Dr. Ryley Mueller",
    specialty: "Cardiology",
    image:"/images/doctorimage/drimg3.png",
  },
  {
    name: "Dr. Elisa Hodges",
    specialty: "Dentist",
    image:"/images/doctorimage/drimg2.png",
  },
  {
    name: "Dr. Ryley Mueller",
    specialty: "Dermatology",
    image:"/images/doctorimage/drimg3.png",
  },
  {
    name: "Dr. Ryley Mueller",
    specialty: "Dermatology",
    image:"/images/doctorimage/drimg3.png",
  },
];

const AllDoctors = () => {
  const [isMobile, setIsMobile] = useState(false);
    const [mounted, setMounted] = useState(false);
  
    useEffect(() => {
      setMounted(true);
      const checkScreenSize = () => {
        setIsMobile(window.innerWidth < 768);
      };
  
      checkScreenSize();
      window.addEventListener('resize', checkScreenSize);
  
      return () => window.removeEventListener('resize', checkScreenSize);
    }, []);
  
    // Prevent hydration mismatch
    if (!mounted) {
      return null;
    }
  
    // Show only first 4 cards on mobile, all cards on desktop
    const displayedDoctors = isMobile ? doctorsData.slice(0, 4) : doctorsData;
  
  return (
    <div className="py-10 px-6 md:px-10 bg-white mb-14">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 justify-items-center">
        {displayedDoctors.map((doctor, index) => (
          <DoctorCard
            key={index}
            name={doctor.name}
            specialty={doctor.specialty}
            image={doctor.image}
          />
        ))}
      </div>
    </div>
  );
};

export default AllDoctors;
