"use client";
import { FaClock, FaCalendarAlt, FaUserMd } from 'react-icons/fa';

export default function PendingAppointments({setShowModal, selectedAppointment, getUrgencyBadge}) {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
          <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              {/* Modal Header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                    <FaClock className="w-6 h-6 text-yellow-500" />
                    Pending Appointment Details
                  </h2>
                  <p className="text-gray-600">ID: {selectedAppointment.id}</p>
                </div>
                <button
                  onClick={() => setShowModal(false)}
                  className="text-gray-400 hover:text-gray-600 text-2xl font-bold"
                >
                  ×
                </button>
              </div>

              {/* Appointment Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-yellow-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-700 mb-3 flex items-center gap-2">
                    <FaCalendarAlt className="w-4 h-4 text-yellow-600" />
                    Appointment Information
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div><span className="font-medium">Date & Time:</span> {selectedAppointment.date}</div>
                    <div><span className="font-medium">Type:</span> {selectedAppointment.type}</div>
                    <div><span className="font-medium">Duration:</span> {selectedAppointment.estimatedDuration}</div>
                    <div><span className="font-medium">Urgency:</span> {getUrgencyBadge(selectedAppointment.urgency)}</div>
                    <div><span className="font-medium">Requested On:</span> {selectedAppointment.requestedOn}</div>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-700 mb-3 flex items-center gap-2">
                    <FaUserMd className="w-4 h-4 text-blue-600" />
                    Doctor Information
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div><span className="font-medium">Doctor:</span> {selectedAppointment.doctor}</div>
                    <div><span className="font-medium">Department:</span> {selectedAppointment.department}</div>
                    <div><span className="font-medium">Location:</span> {selectedAppointment.location}</div>
                    <div><span className="font-medium">Phone:</span> {selectedAppointment.phone}</div>
                  </div>
                </div>
              </div>

              {/* Reason */}
              <div className="mb-6">
                <h3 className="font-semibold text-gray-700 mb-3">Reason for Appointment</h3>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-gray-700">{selectedAppointment.reason}</p>
                </div>
              </div>

              {/* Status Alert */}
              <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 mb-6">
                <div className="flex">
                  <FaClock className="w-5 h-5 text-yellow-500 mr-2" />
                  <div>
                    <p className="text-sm text-yellow-700 font-medium">
                      Appointment Pending Confirmation
                    </p>
                    <p className="text-sm text-yellow-600">
                      Your appointment request is being reviewed. You will receive a confirmation email once it's approved.
                    </p>
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="flex justify-end items-center pt-6 border-t border-gray-200 space-x-3">
                <button
                  onClick={() => setShowModal(false)}
                  className="bg-gray-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-gray-600 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
    )
}