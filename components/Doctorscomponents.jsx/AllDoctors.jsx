import React from "react";
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
  return (
    <div className="py-10 px-6 md:px-10 bg-white mb-14">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 justify-items-center">
        {doctorsData.map((doctor, index) => (
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
