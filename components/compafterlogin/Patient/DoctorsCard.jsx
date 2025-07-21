"use client";
import { FaCalendarAlt, FaMapMarkerAlt, FaPhone, FaEye } from 'react-icons/fa';

export default function DoctorsCard({filteredDoctors, handleViewProfile,  getStatusBadge, renderStars}) {
    return(
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredDoctors.length === 0 ? (
                  <div className="col-span-full text-center py-12">
                    <div className="text-gray-400 text-6xl mb-4">👨‍⚕️</div>
                    <p className="text-gray-500 text-lg">No doctors found matching your criteria.</p>
                  </div>
                ) : (
                  filteredDoctors.map((doctor) => (
                    <div key={doctor.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
                      {/* Doctor Image Placeholder */}
                      <div className="h-48 bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center">
                        <svg className="w-24 h-24 text-blue-300" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14c-4.418 0-8 1.79-8 4v2h16v-2c0-2.21-3.582-4-8-4z" />
                        </svg>
                      </div>
        
                      <div className="p-6">
                        {/* Doctor Name & Status */}
                        <div className="mb-3">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="text-xl font-bold text-gray-800">{doctor.name}</h3>
                            {getStatusBadge(doctor.status)}
                          </div>
                          <p className="text-blue-600 font-medium">{doctor.department}</p>
                          <p className="text-sm text-gray-600">{doctor.specialization}</p>
                        </div>
        
                        {/* Treatment Info */}
                        <div className="mb-3 p-3 bg-gray-50 rounded-lg">
                          <p className="text-sm font-medium text-gray-700">Treating you for:</p>
                          <p className="text-sm text-gray-600">{doctor.treatmentFor}</p>
                        </div>
        
                        {/* Rating */}
                        <div className="flex items-center mb-3">
                          <div className="flex mr-2">
                            {renderStars(doctor.rating)}
                          </div>
                          <span className="text-sm text-gray-600">
                            {doctor.rating} ({doctor.totalReviews} reviews)
                          </span>
                        </div>
        
                        {/* Appointment Info */}
                        <div className="space-y-2 mb-4">
                          <div className="flex items-center text-sm text-gray-600">
                            <FaCalendarAlt className="w-3 h-3 mr-2 text-green-500" />
                            <span className="font-medium">Next:</span>
                            <span className="ml-1">{doctor.nextAppointment}</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-600">
                            <span className="w-3 h-3 mr-2 text-blue-500">📅</span>
                            <span className="font-medium">Last Visit:</span>
                            <span className="ml-1">{doctor.lastVisit}</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-600">
                            <FaMapMarkerAlt className="w-3 h-3 mr-2 text-gray-400" />
                            <span className="truncate">{doctor.address}</span>
                          </div>
                        </div>
        
                        {/* Action Buttons */}
                        <div className="flex space-x-2">
                          <button
                            onClick={() => handleViewProfile(doctor)}
                            className=" bg-[#0B2443] hover:bg-blue-950 text-white px-4 py-2 rounded-md mx-auto text-sm font-medium flex items-center justify-center transition-colors"
                          >
                            <FaEye className="w-3 h-3 mr-2" />
                            View Profile
                          </button>
                          
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
    )
}