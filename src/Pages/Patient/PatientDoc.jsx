import React, { useContext, useState } from 'react'
import { SearchContext } from '../../Context/SearchContext';
import { FaEye } from 'react-icons/fa';
import PatientDoctorProfileModal from '../../Components/compafterlogin/Patient/PatientDoctorProfileModal';

const doctors = [
  {
    id: 1,
    name: 'Micheal Pew',
    department: 'Cardiology',
    address: 'Tempor distinctio At non iusto nulla nostrud',
    phone: '+984-46-9388638',
    profile: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
  },
  {
    id: 2,
    name: 'Erich Mcbride',
    department: 'Anesthetics',
    address: 'Somewhere, City, Country',
    phone: '+123-45-6789012',
    profile: 'Experienced anesthetist with a passion for patient care and safety.'
  },
];


const PatientDoc = () => {
  const { search } = useContext(SearchContext);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const filteredDoctors = doctors.filter(
    (doc) =>
      doc.name.toLowerCase().includes(search.toLowerCase()) ||
      doc.department.toLowerCase().includes(search.toLowerCase())
  );

  const handleViewProfile = (doc) => {
    setSelectedDoctor(doc);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedDoctor(null);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="max-w-5xl mx-auto mt-10 mb-8 text-[#0B2443]" style={{ fontFamily: "'Gill Sans MT', 'Gill Sans', 'GillSans', 'Arial', 'sans-serif'" }}>
      <h2 className="text-3xl font-bold text-[#0B2443] mb-6 flex items-center gap-2">
        <span className="text-2xl">&#8853;</span> Doctors
      </h2>
      <div className="bg-white/80 rounded-2xl shadow-2xl shadow-blue-300 p-6 backdrop-blur-md border border-[#e0e7ef]">
        <table className="min-w-full text-sm text-left border-t border-[#e0e7ef] ml-10">
          <thead className="bg-[#f8fafc] ">
            <tr>
              <th className="py-3 px-16 font-semibold text-[#0B2443]">Image</th>
              <th className="py-3 px-16 font-semibold text-[#0B2443]">Name</th>
              <th className="py-3 px-16 font-semibold text-[#0B2443]">Department</th>
              <th className="py-3 px-16 font-semibold text-[#0B2443]">Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredDoctors.length === 0 ? (
              <tr>
                <td colSpan={4} className="py-6 text-center text-gray-400">No doctors found.</td>
              </tr>
            ) : (
              filteredDoctors.map((doc) => (
                <tr key={doc.id} className="border-b last:border-b-0 border-[#e0e7ef]">
                  <td className=" rounded-xl shadow p-6 mb-6 pl-16">
                    <svg className="w-7 h-7 text-blue-900" fill="#0B2443" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14c-4.418 0-8 1.79-8 4v2h16v-2c0-2.21-3.582-4-8-4z" /></svg>
                  </td>
                  <td className="py-3 px-16 text-[#6c757d] font-medium">{doc.name}</td>
                  <td className="py-3 px-16 text-[#6c757d]">{doc.department}</td>
                  <td className="py-3 px-16">
                    <button
                      className="bg-[#C0E6DA] text-[#0B2443] rounded-full px-6 py-2 flex items-center gap-2 font-semibold shadow hover:bg-[#91b4cb] transition"
                      onClick={() => handleViewProfile(doc)}
                    >
                      <FaEye /> View Profile
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Modal as reusable component */}
      <PatientDoctorProfileModal
        doctor={selectedDoctor}
        show={showModal}
        onClose={handleCloseModal}
        onPrint={handlePrint}
      />
    </div>
  );
};

export default PatientDoc