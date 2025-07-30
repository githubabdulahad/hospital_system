"use client";
import Aboutintrospecialities from "../subComponents/Aboutintrospecialities";

const AboutIntro = () => {
  const Subspecialties = [
    "Surgical Subspecialities",
    "Medical Subspecialties",
    "Rehabilitation Centre",
    "Emergency Medicine",
    "Men's Health",
    "Critical Care",
    "Pathology & Laboratory ",
    "Respiratory",
    "Neurological Sciences",
    "Medical Oncology",
    "Spa & Wellness Centre",
    "Dialysis",
  ];
  return (
    <section
      className="max-w-7xl mx-auto py-8 md:py-16 flex flex-col md:flex-row items-start mb-12 md:mb-24 text-[#0B2443] px-4 md:px-0"
      style={{
        fontFamily:
          "'Gill Sans MT', 'Gill Sans', 'GillSans', 'Arial', 'sans-serif'",
      }}
    >
      {/* Left Content */}
      <div className="flex-1 text-center md:text-left md:max-w-[600px]">
        <div className="text-[#0d2847] font-semibold mb-2 pl-0 md:pl-3">
          Introduction
        </div>
        <h2 className="text-2xl md:text-3xl font-bold mb-4 pl-0 md:pl-6 text-[#0B2443]">
          A great <span className="font-normal">Place Of</span> Medical <br />
          Hospital Center
        </h2>
        <p className="text-[#0B2443] text-sm md:text-base text-left mb-5 leading-relaxed pl-0 md:pl-6">
          King's College Hospital Jeddah will be a unique and unparalleled
          extension of UK based King's College Hospital London's model of care,
          specifically designed to address a range of complex and critical care
          requirements unique to the residents and communities of the Kingdom of
          Saudi Arabia. King's College Hospital Jeddah will have four Centres of
          Excellence in the following Institutes:
        </p>
        <div className="ml-0 md:ml-6">
          {/* Women's health */}
          <div className="flex flex-col gap-2 items-start md:flex-row md:gap-2 md:items-center mb-3">
            <div className="flex gap-2">
              <img src="/images/Aboutintroimg1.png" alt="women's health" />
              <p className="font-bold text-[#0B2443]">Women's Health</p>
            </div>
            <div className="flex gap-2 items-center ml-0 md:ml-12">
              <img src="/images/Aboutintroimg2.png" alt="women's health" />
              <p
                className="font-bold text-[#0B2443]"
                style={{
                  fontFamily:
                    "'Gill Sans MT', 'Gill Sans', 'GillSans', 'Arial', 'sans-serif'",
                }}
              >
                Orthopaedics and Heart & Vascular
              </p>
            </div>
          </div>
          <div className="flex gap-2 items-center justify-start ml-0 md:ml-1 mt-2">
            <img src="/images/Aboutintroimg3.png" alt="women's health" />
            <p
              className="font-bold text-[#0B2443]"
              style={{
                fontFamily:
                  "'Gill Sans MT', 'Gill Sans', 'GillSans', 'Arial', 'sans-serif'",
              }}
            >
              Metabolic Diseases & Bariatric Surgery
            </p>
          </div>
        </div>
        <p className="ml-0 md:ml-8 mt-4 text-left">
          Other Clinical Services include Surgical Subspecialties:
        </p>
        <div className="flex flex-wrap gap-1 justify-start ml-0 md:ml-8 mt-2 w-full md:w-[635px]">
          {Subspecialties.map((sub, index) => (
            <Aboutintrospecialities key={index}>{sub}</Aboutintrospecialities>
          ))}
        </div>
        <p className="ml-0 md:ml-8 mt-4 mb-4 w-full md:w-[640px] text-left">
          In all, more than 40 medical and surgical specialties will be
          represented at King's College Hospital Jeddah. We are very excited to
          be able to build on the success of our existing healthcare network,
          which has been strongly positioned throughout Dubai since 2017.
        </p>

        <span className="font-bold text-lg md:text-xl ml-0 md:ml-8 block text-left">Our Facilities</span>

        <p className="ml-0 md:ml-8 mt-6 w-full md:w-[1150px] text-left">
          The facilities at King's College Hospital Jeddah will combine
          state-of-the-art amenities alongside world-class service standards.
          The hospital will be a 150 (expandable to 250) bed facility,
          comprising of six specialized clinical floors. King's College Hospital
          Jeddah will ensure patients in the region have direct access to the
          world's best healthcare providers along with King's College Hospital
          London's unique model of care, reducing their need to travel abroad
          for treatment.
        </p>

        <p className="ml-0 md:ml-8 mt-6 w-full md:w-[1150px] text-left">
          Our parent institution in London is a 950 bedded tertiary hospital
          holding a 178-year legacy, and boasts advanced capabilities including
          several clinical Centres of Excellence which are among the best in the
          world.
        </p>

        <div className="mt-3 text-lg md:text-xl font-bold text-[#0d2847] ml-0 md:ml-8 w-full md:w-[950px] text-left">
          20 years of experience, certified doctors & using modern technologies.
        </div>
      </div>

      {/* Right Image Area */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 ml-0 md:ml-20 mt-8 md:mt-0">
        {/* Mobile Layout */}
        <div className="block md:hidden w-full">
          {/* Top row - Text over first image and second image side by side */}
          <div className="flex gap-3 mb-4">
            {/* First image with text overlay */}
            <div className="relative w-[240px] h-[210px]">
              <img
                src="/images/Aboutintroimg4.png"
                className="object-cover scale-x-[-1] overflow-hidden rounded-2xl w-full h-full"
                alt="Intro Main"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 rounded-2xl"></div>
              <p
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-sm italic text-white text-center px-2"
                style={{ fontFamily: "'EB Garamond', Garamond, serif" }}
              >
                Connect with <br />
                King's healthcare
              </p>
            </div>
            {/* Second image */}
            <div className="w-[120px] h-[150px]">
              <img
                src="/images/Aboutintroimg5.png"
                className="object-cover overflow-hidden rounded-2xl w-full h-full"
                alt="Intro Secondary"
              />
            </div>
          </div>
          {/* Third image - full width */}
          <div className="w-full h-[180px]">
            <img 
              src="/images/Aboutintroimg6.png" 
              alt="Intro main"  
              className="object-cover overflow-hidden rounded-2xl w-full h-full"
            />
          </div>
        </div>

        {/* Desktop Layout - Keep original */}
        <div className="hidden sm:block md:contents">
          <p
            className="text-xl italic text-[#0B2443] ml-16 mt-10 relative text-left"
            style={{ fontFamily: "'EB Garamond', Garamond, serif" }}
          >
            Connect with <br />
            King's healthcare
          </p>
          <div className="w-[250px] h-[250px]">
            <img
              src="/images/Aboutintroimg4.png"
              className="object-cover scale-x-[-1] ml-10 mt-6 overflow-hidden rounded-2xl w-full h-full"
              alt="Intro Main"
            />
          </div>
          <div className="w-[180px] h-[160px] -mt-36">
            <img
              src="/images/Aboutintroimg5.png"
              className="object-cover ml-16 top-0 overflow-hidden rounded-2xl w-full h-full"
              alt="Intro Main"
            />
          </div>
          <div className="col-span-2 w-[480px] h-auto mt-16">
            <img src="/images/Aboutintroimg6.png" alt="Intro main" className="object-cover ml-10 overflow-hidden rounded-2xl w-full h-full"/>
          </div>
        </div>
      </div>

    </section>
  );
};

export default AboutIntro;