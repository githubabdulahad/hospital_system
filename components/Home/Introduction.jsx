import Commonbtn from "..//subComponents/Commonbtn";

const Introduction = () => {
  return (
    <section className="max-w-full sm:max-w-2xl md:max-w-7xl mx-auto py-6 sm:py-12 md:py-16 flex flex-col md:flex-row items-start mb-16 md:mb-12  sm:px-4 md:px-0">
      {/* Left Content */}
      <div
        className="flex-1 text-center md:text-left md:max-w-[600px] w-full"
        style={{ fontFamily: "'Gill Sans MT', 'Gill Sans', 'GillSans', 'Arial', 'sans-serif'" }}
      >
        <div className="text-[#0d2847] font-semibold mb-2 ml-4 sm:ml-0  sm:pl-3 text-sm sm:text-base">Introduction</div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 pl-4 sm:pl-6 text-[#0B2443]">
          A great <span className="font-normal">Place Of</span>{" "}
          Medical <br />
          Hospital Center
        </h2>
        <p className="text-[#222] text-sm sm:text-base mb-4 sm:mb-5 leading-relaxed text-left pl-4 sm:pl-6">
          King's College Hospital Jeddah will be a unique and unparalleled
          extension of UK based King's College Hospital London's model of care,
          specifically designed to address a range of complex and critical care
          requirements unique to the residents and communities of the Kingdom of
          Saudi Arabia. King's College Hospital Jeddah will have four Centers of
          Excellence in the following Institute: Women's Health, Metabolic
          Diseases & Bariatric Surgery, Orthopaedics and Heart & Vascular. Other
          Clinical Services include Surgical Subspecialties, Medical
          Subspecialties, Rehabilitation Centre, Emergency Medicine, Men's Health,
          Critical Care, Pathology & Laboratory Medicine, Stem Cell Centre,
          Medical Oncology, Neurological Sciences, Respiratory, Dialysis and a Spa
          & Wellness Centre. In all, more than 40 medical and surgical
          specialties will be represented at King's College Hospital Jeddah. We
          are very excited to be able to build on the success of our existing
          healthcare network, which has been strongly positioned throughout Dubai
          since 2017.
        </p>
        
        {/* Mobile-only centered button container */}
        <div className="md:hidden flex justify-center w-full px-4">
          <Commonbtn
            bgColor="bg-[#C0E6DA]"
            textColor="text-[#0d2847]"
            className="px-5 sm:px-7 shadow-md"
          >
            Read More
          </Commonbtn>
        </div>
        
        {/* Desktop button (original position) */}
        <div className="hidden md:block pl-4 sm:pl-6">
          <Commonbtn
            bgColor="bg-[#C0E6DA]"
            textColor="text-[#0d2847]"
            className="px-5 sm:px-7 shadow-md"
          >
            Read More
          </Commonbtn>
        </div>
        
        <div className="mt-2 sm:mt-3 text-lg sm:text-xl font-bold text-[#0d2847] pl-4 sm:pl-6">
          20 years of experience, certified doctors & using <br className="hidden sm:block" />
          modern technologies.
        </div>
      </div>
      
      {/* Right Image Area */}
      <div className="flex-1 px-2 flex flex-col items-end gap-2 mb-6 sm:mb-20 sm:items-center sm:gap-4 relative md:min-w-[150px] sm:min-w-[350px] pr-0 md:pr-48 mt-8 md:mt-0">
        <img
          src='/images/Introimage1.png'
          className="w-60 h-62 sm:w-[350px] sm:h-[370px] md:w-[430px] md:h-[460px] object-cover rounded-lg shadow-lg"
          alt="Intro Main"
        />
        <img
          src='/images/Introimage2.png'
          className="absolute -right-28 top-[190px] sm:right-2  md:top-[210px]  w-44 h-42 sm:w-[200px] sm:h-[200px] md:w-[320px] md:h-[320px] object-cover rounded-lg shadow-lg"
          alt="Intro Doctor"
        />
      </div>
    </section>
  );
};

export default Introduction;