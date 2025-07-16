import image1 from '../../assets/images/Appointmentimages/drimg1.png'
import image2 from '../../assets/images/Appointmentimages/drimg2.png'
import image3 from '../../assets/images/Appointmentimages/drimg3.png'
import Commonbtn from '../subComponents/Commonbtn';
import DoctorCard from '../subComponents/DoctorCard'; // 👈 Import the new component

export default function Apptdoctors() {
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
    <section className="max-w-7xl mx-auto px-6 py-8 mb-22" style={{ fontFamily: "'Gill Sans MT', 'Gill Sans', 'GillSans', 'Arial', 'sans-serif'" }}>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
        <div className="max-w-md pl-8">
          <h4 className="font-semibold text-[#0B2443] mb-2 text-lg">Our Doctors</h4>
          <h2 className="font-normal text-3xl md:text-4xl text-[#0B2443] mb-2">
            <span className="font-bold">Meet</span> Our Medical
            <span className="font-bold"> Specialists</span>
          </h2>
          <p className="text-[#0B2443] mb-8">
            Our doctors, in both our Abu Dhabi and Dubai medical center, are ready to help with any issues you and your family may be experiencing. Please feel free to book an appointment to one of our doctor here.
          </p>
          <Commonbtn bgColor='bg-[#C0E6DA]' textColor='text-[#0B2443]'>More Teams</Commonbtn>
        </div>

        <div className="flex gap-8 flex-1 justify-center pr-4">
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
