'use client';
import Commonbtn from '../subComponents/Commonbtn';
import DoctorCard from '../subComponents/DoctorCard';

export default function Apptdoctors() {
  const doctors = [
    {
      specialty: "Cardiology",
      name: "Dr. Ryley Mueller",
      image: "/images/Appointmentimages/drimg1.png",
    },
    {
      specialty: "Dentist",
      name: "Dr. Elisa Hodges",
      image: "/images/Appointmentimages/drimg2.png",
    },
    {
      specialty: "Dermatology",
      name: "Dr. Ryley Mueller",
      image: "/images/Appointmentimages/drimg3.png",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-8 mb-12 sm:mb-24" style={{ fontFamily: "'Gill Sans MT', 'Gill Sans', 'GillSans', 'Arial', 'sans-serif'" }}>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
        {/* Text Section */}
        <div className="max-w-md pl-2 sm:pl-4 md:pl-8 text-center md:text-left">
          <h4 className="font-semibold text-[#0B2443] mb-2 text-base sm:text-lg">Our Doctors</h4>
          <h2 className="font-normal text-2xl sm:text-3xl md:text-4xl text-[#0B2443] mb-4">
            <span className="font-bold">Meet</span> Our Medical
            <span className="font-bold"> Specialists</span>
          </h2>
          <p className="text-[#0B2443] mb-6 sm:mb-8 text-left text-sm sm:text-base leading-relaxed">
            Our doctors, in both our Abu Dhabi and Dubai medical center, are ready to help with any issues you and your family may be experiencing. Please feel free to book an appointment to one of our doctor here.
          </p>
          <div className="flex justify-center md:justify-start">
            <Commonbtn bgColor='bg-[#C0E6DA]' textColor='text-[#0B2443]'>More Teams</Commonbtn>
          </div>
        </div>

        {/* Doctors Section */}
        <div className="flex-1">
          {/* Mobile: Horizontal scroll */}
          <div className="flex flex-col md:hidden gap-4 overflow-x-auto pb-4 px-2 scrollbar-hide items-center">
            {doctors.map((doc) => (
              <div key={doc.name + doc.specialty} className="flex-shrink-0">
                <DoctorCard
                  image={doc.image}
                  name={doc.name}
                  specialty={doc.specialty}
                />
              </div>
            ))}
          </div>

          {/* Desktop: Original layout */}
          <div className="hidden md:flex gap-8 justify-center pr-4">
            {doctors.map((doc) => (
              <DoctorCard
                key={doc.name + doc.specialty}
                image={doc.image}
                name={doc.name}
                specialty={doc.specialty}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Add custom scrollbar styles */}
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}