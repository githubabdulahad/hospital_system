import image1 from '../../assets/images/drimg1.png'
import image2 from '../../assets/images/drimg2.png'
import image3 from '../../assets/images/drimg3.png'
import Commonbtn from '..//subComponents/Commonbtn';
import DoctorCard from '../subComponents/DoctorCard'; // 👈 Import the new component

export default function DoctorsSection() {
  const doctors = [
    {
      specialty: "Cardiology",
      name: "Dr. Ryley Mueller",
      image: image1,
    },
    {
      specialty: "Dentist",
      name: "Dr. Elisa Hodges",
      image: image2,
    },
    {
      specialty: "Dermatology",
      name: "Dr. Ryley Mueller",
      image: image3,
    },
  ];

  return (
    <section className="max-w-xs sm:max-w-2xl md:max-w-7xl mx-auto px-2 sm:px-6 py-6 sm:py-8 mb-10 md:mb-22 w-full" style={{ fontFamily: "'Gill Sans MT', 'Gill Sans', 'GillSans', 'Arial', 'sans-serif'" }}>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 sm:gap-8 ">
        <div className="max-w-xs sm:max-w-md pl-2 sm:pl-8 sm:text-center">
          <h4 className="font-semibold text-[#0B2443] mb-2 text-base sm:text-lg">Our Doctors</h4>
          <h2 className="font-normal text-xl sm:text-3xl md:text-4xl text-[#0B2443] mb-2">
            <span className="font-bold">Meet</span> Our Medical
            <span className="font-bold"> Specialists</span>
          </h2>
          <p className="text-[#0B2443] mb-4 sm:mb-8 text-sm sm:text-base">
            Our doctors, in both our Abu Dhabi and Dubai medical center, are ready to help with any issues you and your family may be experiencing. Please feel free to book an appointment to one of our doctor here.
          </p>
          <Commonbtn bgColor='bg-[#C0E6DA]' textColor='text-[#0B2443]'>More Teams</Commonbtn>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 flex-1 justify-center pr-0 sm:pr-4">
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
    </section>
  );
}
