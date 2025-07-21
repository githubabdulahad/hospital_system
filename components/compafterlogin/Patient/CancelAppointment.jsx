"use client";
import { FaExclamationTriangle, FaTimes } from 'react-icons/fa';

export default function CancelAppointment({setShowCancelModal, selectedAppointment, confirmCancel , cancelReason, setCancelReason}) {
    return (
         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
          <div className="bg-white rounded-xl shadow-2xl max-w-md w-full mx-4">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                  <FaExclamationTriangle className="w-5 h-5 text-red-500" />
                  Cancel Appointment
                </h3>
                <button
                  onClick={() => setShowCancelModal(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <FaTimes className="w-5 h-5" />
                </button>
              </div>
              
              <div className="mb-4">
                <p className="text-gray-600 mb-2">
                  Are you sure you want to cancel your appointment with <strong>{selectedAppointment.doctor}</strong> on <strong>{selectedAppointment.date}</strong>?
                </p>
                
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Reason for cancellation <span className="text-red-500">*</span>
                </label>
                <textarea
                  value={cancelReason}
                  onChange={(e) => setCancelReason(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  rows={3}
                  placeholder="Please provide a reason for cancelling this appointment..."
                />
              </div>
              
              <div className="flex justify-end space-x-3">
                <button
                  onClick={() => setShowCancelModal(false)}
                  className="px-4 py-2 border border-gray-300 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  Keep Appointment
                </button>
                <button
                  onClick={confirmCancel}
                  className="px-4 py-2 bg-red-500 text-white hover:bg-red-600 rounded-lg transition-colors flex items-center gap-2"
                >
                  <FaTimes className="w-4 h-4" />
                  Cancel Appointment
                </button>
              </div>
            </div>
          </div>
        </div>
    )
}