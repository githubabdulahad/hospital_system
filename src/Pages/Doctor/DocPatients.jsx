
import React, { useState, useContext } from 'react';
import { SearchContext } from '../../Context/SearchContext';
import DoctorPatientTable from '../../Components/compafterlogin/Doctor/DoctorPatientTable';

const dummyPatients = [
  {
    name: 'Tanvir Hasan',
    email: 'patient@example.com',
    address: 'Some address',
    phone: '1234567',
    gender: 'male',
    dob: '09/10/1990',
    age: 27,
    bloodGroup: 'B+',
  },
  {
    name: 'Tanvir Hasan',
    email: 'patient@example.com',
    address: 'Some address',
    phone: '1234567',
    gender: 'male',
    dob: '09/10/1990',
    age: 27,
    bloodGroup: 'B+',
  },
  {
    name: 'Mahmud reja',
    email: 'mahdihasan@gmail.com',
    address: 'Nagarkanda, Faridpur',
    phone: '01790905350',
    gender: 'male',
    dob: '03/07/2025',
    age: 1,
    bloodGroup: 'A+',
  },
];


const DocPatients = () => {
  const [patients, setPatients] = useState(dummyPatients);
  const { search } = useContext(SearchContext);

  const handleAction = (action, patient) => {
    if (action === 'delete') {
      setPatients(prev => prev.filter(p => p !== patient));
    } else {
      alert(`${action} clicked for ${patient.name}`);
    }
  };

  const filteredPatients = patients.filter(patient =>
    patient.name.toLowerCase().includes(search.toLowerCase()) ||
    patient.email.toLowerCase().includes(search.toLowerCase()) ||
    patient.address.toLowerCase().includes(search.toLowerCase()) ||
    patient.phone.toLowerCase().includes(search.toLowerCase()) ||
    patient.gender.toLowerCase().includes(search.toLowerCase()) ||
    patient.dob.toLowerCase().includes(search.toLowerCase()) ||
    String(patient.age).includes(search) ||
    (patient.bloodGroup && patient.bloodGroup.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="p-6 max-w-6xl mx-auto" style={{ fontFamily: "'Gill Sans MT', 'Gill Sans', 'GillSans', 'Arial', 'sans-serif'" }}>
      <div className="bg-white rounded-xl shadow p-6 mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4 flex items-center">
          <svg className="w-7 h-7 text-gray-400 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14c-4.418 0-8 1.79-8 4v2h16v-2c0-2.21-3.582-4-8-4z" /></svg>
          Patients
        </h2>
        <DoctorPatientTable patients={filteredPatients} onAction={handleAction} />
      </div>
    </div>
  );
};

export default DocPatients;
