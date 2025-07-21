"use client";
import { FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const PatientDoctorProfileModal = ({selectedDoctor , renderStars , handleCloseModal , getStatusBadge}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              {/* Modal Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-50 to-blue-100 rounded-full flex items-center justify-center">
                    <svg className="w-12 h-12 text-blue-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14c-4.418 0-8 1.79-8 4v2h16v-2c0-2.21-3.582-4-8-4z" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800">{selectedDoctor.name}</h2>
                    <p className="text-[#0B2443] font-medium">{selectedDoctor.department}</p>
                    <p className="text-sm text-gray-600">{selectedDoctor.specialization}</p>
                    <div className="mt-2">{getStatusBadge(selectedDoctor.status)}</div>
                  </div>
                </div>
                <button
                  onClick={handleCloseModal}
                  className="text-gray-400 hover:text-gray-600 text-2xl font-bold"
                >
                  ×
                </button>
              </div>

              {/* Treatment Summary */}
              <div className="bg-blue-50 rounded-lg p-4 mb-6">
                <h3 className="font-semibold text-gray-700 mb-2">Your Treatment</h3>
                <p className="text-gray-700 mb-2"><strong>Condition:</strong> {selectedDoctor.treatmentFor}</p>
                <p className="text-gray-700 mb-2"><strong>Last Visit:</strong> {selectedDoctor.lastVisit}</p>
                <p className="text-gray-700"><strong>Next Appointment:</strong> {selectedDoctor.nextAppointment}</p>
              </div>

              {/* Rating & Reviews */}
              <div className="flex items-center mb-6">
                <div className="flex mr-3">
                  {renderStars(selectedDoctor.rating)}
                </div>
                <span className="text-lg font-medium text-gray-800 mr-2">{selectedDoctor.rating}</span>
                <span className="text-gray-600">({selectedDoctor.totalReviews} reviews)</span>
              </div>

              {/* Doctor Details Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="font-semibold text-gray-700 mb-3">Contact Information</h3>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <FaPhone className="w-4 h-4 mr-3 text-gray-400" />
                      <span className="text-gray-700">{selectedDoctor.phone}</span>
                    </div>
                    <div className="flex items-center">
                      <svg className="w-4 h-4 mr-3 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span className="text-gray-700">{selectedDoctor.email}</span>
                    </div>
                    <div className="flex items-start">
                      <FaMapMarkerAlt className="w-4 h-4 mr-3 text-gray-400 mt-1" />
                      <span className="text-gray-700">{selectedDoctor.address}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-700 mb-3">Professional Details</h3>
                  <div className="space-y-3">
                    <div>
                      <span className="font-medium text-gray-600">Experience:</span>
                      <span className="text-gray-700 ml-2">{selectedDoctor.experience}</span>
                    </div>
                    <div>
                      <span className="font-medium text-gray-600">Education:</span>
                      <span className="text-gray-700 ml-2">{selectedDoctor.education}</span>
                    </div>
                    <div>
                      <span className="font-medium text-gray-600">Consultation Fee:</span>
                      <span className="text-gray-700 ml-2">{selectedDoctor.consultationFee}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* About Doctor */}
              <div className="mb-6">
                <h3 className="font-semibold text-gray-700 mb-3">About Your Doctor</h3>
                <p className="text-gray-700 leading-relaxed">{selectedDoctor.profile}</p>
              </div>

              {/* Modal Footer */}
              <div className="flex justify-end items-center pt-6 border-t border-gray-200">
                <button
                  onClick={handleCloseModal}
                  className="bg-gray-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-gray-600 transition"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
  );
};

export default PatientDoctorProfileModal;
