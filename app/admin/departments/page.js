"use client";
import { useContext, useState } from 'react';
import CommonAddButton from '../../../components/compafterlogin/Common/CommonAddButton';
import { SearchContext } from '../../../components/Context/SearchContext';
import AddDepartmentModal from '../../../components/compafterlogin/Admin/AddDepartmentModal';
import EditDepartmentModal from '../../../components/compafterlogin/Admin/EditDepartmentModal';
import DeleteConfirmationModal from '../../../components/compafterlogin/Admin/DeleteConfirmationModal';
import Toast from '../../../components/compafterlogin/Common/Toast';
import StatCard from '../../../components/compafterlogin/Common/StatCard';


const AdmDepartments = () => {
  const { search } = useContext(SearchContext);
  const [departments, setDepartments] = useState([
    {
      id: 1,
      name: 'Cardiology',
      description: 'Comprehensive heart care including diagnosis, treatment, and prevention of cardiovascular diseases. Our expert cardiologists use state-of-the-art technology for cardiac procedures.',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop&crop=center',
      doctorCount: 8,
      facilities: ['ECG', 'Echo', 'Cardiac Catheterization', 'Pacemaker'],
      established: '2018',
      headOfDepartment: 'Dr. John Smith'
    },
    {
      id: 2,
      name: 'Anesthetics',
      description: 'Expert anesthesia services for surgical procedures ensuring patient safety and comfort. We provide various anesthesia techniques tailored to individual patient needs.',
      image: 'https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=400&h=300&fit=crop&crop=center',
      doctorCount: 6,
      facilities: ['General Anesthesia', 'Regional Anesthesia', 'Sedation', 'Pain Management'],
      established: '2017',
      headOfDepartment: 'Dr. Sarah Wilson'
    },
    {
      id: 3,
      name: 'Gastroenterology',
      description: 'Specialized care for digestive system disorders including stomach, intestines, liver, and pancreas. Advanced endoscopic procedures and treatments available.',
      image: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=400&h=300&fit=crop&crop=center',
      doctorCount: 5,
      facilities: ['Endoscopy', 'Colonoscopy', 'Liver Biopsy', 'ERCP'],
      established: '2019',
      headOfDepartment: 'Dr. Michael Brown'
    },
    {
      id: 4,
      name: 'Neurology',
      description: 'Comprehensive neurological care for brain, spine, and nervous system disorders. Advanced diagnostic imaging and treatment for neurological conditions.',
      image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=300&fit=crop&crop=center',
      doctorCount: 7,
      facilities: ['MRI', 'CT Scan', 'EEG', 'Nerve Conduction Studies'],
      established: '2018',
      headOfDepartment: 'Dr. Emily Davis'
    },
    {
      id: 5,
      name: 'Orthopedics',
      description: 'Expert care for bone, joint, and musculoskeletal conditions. Surgical and non-surgical treatments for fractures, sports injuries, and joint replacements.',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=300&fit=crop&crop=center',
      doctorCount: 10,
      facilities: ['X-Ray', 'Arthroscopy', 'Joint Replacement', 'Sports Medicine'],
      established: '2016',
      headOfDepartment: 'Dr. James Miller'
    },
    {
      id: 6,
      name: 'Pediatrics',
      description: 'Specialized medical care for infants, children, and adolescents. Comprehensive health services from preventive care to complex medical conditions.',
      image: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=400&h=300&fit=crop&crop=center',
      doctorCount: 12,
      facilities: ['Vaccination', 'Growth Monitoring', 'Pediatric ICU', 'Child Development'],
      established: '2015',
      headOfDepartment: 'Dr. Lisa Anderson'
    },
    {
      id: 7,
      name: 'Radiology',
      description: 'Advanced medical imaging services including X-rays, CT scans, MRI, and ultrasound. Expert radiologists provide accurate diagnosis and image-guided procedures.',
      image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?w=400&h=300&fit=crop&crop=center',
      doctorCount: 4,
      facilities: ['CT Scan', 'MRI', 'Ultrasound', 'Mammography'],
      established: '2017',
      headOfDepartment: 'Dr. Robert Taylor'
    },
    {
      id: 8,
      name: 'Emergency Medicine',
      description: '24/7 emergency care for critical and urgent medical conditions. Rapid response team with advanced life support capabilities and trauma care.',
      image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=300&fit=crop&crop=center',
      doctorCount: 15,
      facilities: ['Trauma Unit', 'ICU', 'Emergency Surgery', 'Ambulance Services'],
      established: '2014',
      headOfDepartment: 'Dr. Mark Johnson'
    }
  ]);

  
const statData = [{
  icon:<svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>,
  stat: departments.length,
  label:'Total Departments',
},
{
  icon:<svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>,
  stat:departments.reduce((sum, dept) => sum + dept.doctorCount, 0),
  label:'Total doctors',
},
{
  icon:<svg className="w-6 h-6 text-[#198172]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
            </svg>,
  stat:departments.reduce((sum, dept) => sum + dept.facilities.length, 0),
  label:'Total facilities',
},
{
  icon:<svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>,
  stat:'24/7',
  label:'Emergency Care',
}
];
  
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedDepartment, setSelectedDepartment] = useState(null);
  const [toast, setToast] = useState({ isVisible: false, message: '', type: 'success' });

  const handleAddDepartment = (newDepartment) => {
    setDepartments(prev => [...prev, newDepartment]);
    setToast({
      isVisible: true,
      message: `${newDepartment.name} department has been added successfully!`,
      type: 'success'
    });
  };

  const handleEditDepartment = (updatedDepartment) => {
    setDepartments(prev => 
      prev.map(dept => dept.id === updatedDepartment.id ? updatedDepartment : dept)
    );
    setToast({
      isVisible: true,
      message: `${updatedDepartment.name} department has been updated successfully!`,
      type: 'success'
    });
  };

  const handleDeleteDepartment = (departmentId) => {
    const departmentToDelete = departments.find(dept => dept.id === departmentId);
    setDepartments(prev => prev.filter(dept => dept.id !== departmentId));
    setToast({
      isVisible: true,
      message: `${departmentToDelete?.name} department has been deleted successfully!`,
      type: 'success'
    });
  };

  const openEditModal = (department) => {
    setSelectedDepartment(department);
    setIsEditModalOpen(true);
  };

  const openDeleteModal = (department) => {
    setSelectedDepartment(department);
    setIsDeleteModalOpen(true);
  };

  const filteredDepartments = departments.filter(dept =>
    dept.name.toLowerCase().includes(search.toLowerCase()) ||
    dept.description.toLowerCase().includes(search.toLowerCase()) ||
    dept.headOfDepartment.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#C0E6DA]/30 via-white to-[#198172]/10 p-6" style={{ fontFamily: "'Gill Sans MT', 'Gill Sans', 'GillSans', 'Arial', 'sans-serif'" }}>
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center">
          <span className="text-2xl mr-3">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-[#198172]">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m2.25-18v18m13.5-18v18m2.25-18v18M6.75 9h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.75m-.75 3h.75m-.75 3h.75m-3.75-16.5h.75m-.75 3h.75m-.75 3h.75m-3.75-7.5h.75" />
            </svg>
          </span>
          <div>
            <h1 className="text-3xl font-bold text-[#0B2443]">Hospital Departments</h1>
            <p className="text-gray-600 mt-1">Manage and view all medical departments</p>
          </div>
        </div>
        <CommonAddButton 
          label="Add New Department" 
          onClick={() => setIsAddModalOpen(true)}
        />
      </div>

      {/* Statistics Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        {statData.map((stat, index) => (
          <StatCard icon={stat.icon} stat={stat.stat} label={stat.label} key={index} />
        ))}
      </div>

      {/* Department Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredDepartments.map((department) => (
          <div key={department.id} className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105">
            {/* Department Image */}
            <div className="relative h-48 overflow-hidden">
              <img 
                src={department.image} 
                alt={department.name}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
              />
              <div className="absolute top-4 right-4">
                <span className="bg-[#198172] text-white px-3 py-1 rounded-full text-xs font-medium">
                  {department.doctorCount} Doctors
                </span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                <h3 className="text-xl font-bold text-white mb-1">{department.name}</h3>
                <p className="text-white/90 text-sm">Est. {department.established}</p>
              </div>
            </div>

            {/* Department Content */}
            <div className="p-6">
              <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                {department.description}
              </p>

              {/* Head of Department */}
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-[#198172] to-[#0B2443] rounded-full flex items-center justify-center mr-3">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Head of Department</p>
                  <p className="text-sm font-semibold text-[#0B2443]">{department.headOfDepartment}</p>
                </div>
              </div>

              {/* Key Facilities */}
              <div className="mb-4">
                <p className="text-xs text-gray-500 mb-2">Key Facilities</p>
                <div className="flex flex-wrap gap-1">
                  {department.facilities.slice(0, 3).map((facility, index) => (
                    <span key={index} className="bg-[#C0E6DA]/30 text-[#198172] px-2 py-1 rounded-md text-xs font-medium">
                      {facility}
                    </span>
                  ))}
                  {department.facilities.length > 3 && (
                    <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-md text-xs font-medium">
                      +{department.facilities.length - 3} more
                    </span>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <button className="flex items-center space-x-1 text-[#198172] hover:text-[#0B2443] transition-colors text-sm font-medium">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  <span>View Details</span>
                </button>
                
                <div className="flex items-center space-x-2">
                  <button 
                    className="p-2 text-[#198172] hover:bg-[#C0E6DA]/20 rounded-lg transition-colors" 
                    title="Edit Department"
                    onClick={() => openEditModal(department)}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                  </button>
                  
                  <button 
                    className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors" 
                    title="Delete Department"
                    onClick={() => openDeleteModal(department)}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1-1v3M4 7h16" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* No Results Message */}
      {filteredDepartments.length === 0 && (
        <div className="text-center py-12">
          <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
          <h3 className="text-lg font-semibold text-gray-500 mb-2">No departments found</h3>
          <p className="text-gray-400">Try adjusting your search criteria</p>
        </div>
      )}
      {/* Add Department Modal */}
      <AddDepartmentModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAdd={handleAddDepartment}
      />

      {/* Edit Department Modal */}
      <EditDepartmentModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        onEdit={handleEditDepartment}
        department={selectedDepartment}
      />

      {/* Delete Confirmation Modal */}
      <DeleteConfirmationModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={handleDeleteDepartment}
        department={selectedDepartment}
      />

      {/* Toast Notification */}
      <Toast
        message={toast.message}
        isVisible={toast.isVisible}
        type={toast.type}
        onClose={() => setToast(prev => ({ ...prev, isVisible: false }))}
      />
    </div>
  );
};

export default AdmDepartments;
