import image1 from "../../assets/images/Aboutintroimg1.png";
import image2 from "../../assets/images/Aboutintroimg2.png";
import image3 from "../../assets/images/Aboutintroimg3.png";
import image4 from "../../assets/images/Aboutintroimg4.png";
import image5 from "../../assets/images/Aboutintroimg5.png";
import image6 from "../../assets/images/Aboutintroimg6.png";
import Aboutintrospecialities from "../subComponents/Aboutintrospecialities";

const AboutIntro = () => {
  const Subspecialties = [
    "Surgical Subspecialities",
    "Medical Subspecialties",
    "Rehabilitation Centre",
    "Emergency Medicine",
    "Men’s Health",
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
      className="max-w-7xl mx-auto py-16 flex flex-col md:flex-row items-start mb-24 text-[#0B2443]"
      style={{
        fontFamily:
          "'Gill Sans MT', 'Gill Sans', 'GillSans', 'Arial', 'sans-serif'",
      }}
    >
      {/* Left Content */}
      <div className="flex-1 text-left md:max-w-[600px]">
        <div className="text-[#0d2847] font-semibold mb-2 pl-3">
          Introduction
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 pl-6 text-[#0B2443]">
          A great <span className="font-normal">Place Of</span> Medical <br />
          Hospital Center
        </h2>
        <p className="text-[#0B2443] text-base mb-5 leading-relaxed pl-6">
          King’s College Hospital Jeddah will be a unique and unparalleled
          extension of UK based King’s College Hospital London’s model of care,
          specifically designed to address a range of complex and critical care
          requirements unique to the residents and communities of the Kingdom of
          Saudi Arabia. King’s College Hospital Jeddah will have four Centres of
          Excellence in the following Institutes:
        </p>
        <div className="ml-6">
          {/* Women's health */}
          <div className="flex gap-2 items-center mb-3">
            <div className="flex gap-2 items-center">
              <img src={image1} alt="women's health" />
              <p className="font-bold text-[#0B2443]">Women's Health</p>
            </div>
            <div className="flex gap-2 items-center ml-12">
              <img src={image2} alt="women's health" />
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
          <div className="flex gap-2 items-center ml-1 mt-2">
            <img src={image3} alt="women's health" />
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
        <p className="ml-8 mt-4">
          Other Clinical Services include Surgical Subspecialties:
        </p>
        <div className="flex flex-wrap gap-2 ml-8 mt-2 w-[635px]">
          {Subspecialties.map((sub, index) => (
            <Aboutintrospecialities key={index}>{sub}</Aboutintrospecialities>
          ))}
        </div>
        <p className="ml-8 mt-4 mb-4 sm:w-[640px]">
          In all, more than 40 medical and surgical specialties will be
          represented at King’s College Hospital Jeddah. We are very excited to
          be able to build on the success of our existing healthcare network,
          which has been strongly positioned throughout Dubai since 2017.
        </p>

        <span className="font-bold text-xl ml-8 ">Our Facilities</span>

        <p className="ml-8 mt-6 md:w-[1150px] sm:w-[640px]">
          The facilities at King’s College Hospital Jeddah will combine
          state-of-the-art amenities alongside world-class service standards.
          The hospital will be a 150 (expandable to 250) bed facility,
          comprising of six specialized clinical floors. King’s College Hospital
          Jeddah will ensure patients in the region have direct access to the
          world’s best healthcare providers along with King’s College Hospital
          London’s unique model of care, reducing their need to travel abroad
          for treatment.
        </p>

        <p className="ml-8 mt-6 md:w-[1150px] sm:w-[640px]">
          Our parent institution in London is a 950 bedded tertiary hospital
          holding a 178-year legacy, and boasts advanced capabilities including
          several clinical Centres of Excellence which are among the best in the
          world.
        </p>

        <div className="mt-3 text-xl font-bold text-[#0d2847] ml-8 w-[950px]">
          20 years of experience, certified doctors & using modern technologies.
        </div>
      </div>
      {/* Right Image Area */}
      <div className="grid grid-cols-2 ml-22">
      <p
        className="text-xl italic text-[#0B2443] ml-16 mt-10 relative"
        style={{ fontFamily: "'EB Garamond', Garamond, serif" }}
      >
        Connect with <br />
        King’s healthcare
      </p>
      <div className=" w-[250px] h-[245px]">
        <img
          src={image4}
          className=" object-cover scale-x-[-1] ml-10 overflow-hidden  rounded-2xl"
          alt="Intro Main"
        />
      </div>
      <div className=" w-[180px] h-[160px] -mt-36">
        <img
          src={image5}
          className=" object-cover ml-16 top-0 overflow-hidden  rounded-2xl"
          alt="Intro Main"
        />
      </div>
      <div className="col-span-2 w-[500px] h-[500px] mt-24 ">
        <img src={image6} alt="Intro main"  className="object-cover ml-10 overflow-hidden rounded-2xl"/>
      </div>
      </div>
      {/* <div className="flex-1 flex flex-col items-end gap-4 relative min-w-[350px] pr-48">
        <img
          src={image1}
          className="w-[430px] h-[460px] object-cover rounded-lg shadow-lg"
          alt="Intro Main"
        />
        <img
          src={image2}
          className="absolute right-2 top-[310px] w-[320px] h-[320px]  object-cover rounded-lg shadow-lg "
          alt="Intro Doctor"
        />
      </div> */}
    </section>
  );
};

export default AboutIntro;
