"use client";
    import { FaUser } from 'react-icons/fa';

export default function DonorDetailModal({selectedDonor, handleCloseModal , getBloodGroupColor}) {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              {/* Modal Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-50 to-red-100 rounded-full flex items-center justify-center">
                    <FaUser className="w-8 h-8 text-red-500" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800">{selectedDonor.name}</h2>
                    <p className="text-gray-600">Blood Donor</p>
                  </div>
                </div>
                <button
                  onClick={handleCloseModal}
                  className="text-gray-400 hover:text-gray-600 text-2xl font-bold"
                >
                  ×
                </button>
              </div>

              {/* Donor Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-700 mb-3">Personal Information</h3>
                  <div className="space-y-3 text-sm">
                    <div><span className="font-medium">Age:</span> <span className="ml-2">{selectedDonor.age} years</span></div>
                    <div><span className="font-medium">Sex:</span> <span className="ml-2">{selectedDonor.sex}</span></div>
                    <div><span className="font-medium">Phone:</span> <span className="ml-2">{selectedDonor.phone}</span></div>
                    <div><span className="font-medium">Email:</span> <span className="ml-2">{selectedDonor.email}</span></div>
                    <div><span className="font-medium">Address:</span> <span className="ml-2">{selectedDonor.address}</span></div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-700 mb-3">Donation Information</h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="font-medium">Blood Group:</span>
                      <span className={`ml-2 px-2 py-1 text-xs font-medium rounded-full ${getBloodGroupColor(selectedDonor.bloodGroup)}`}>
                        {selectedDonor.bloodGroup}
                      </span>
                    </div>
                    <div><span className="font-medium">Total Donations:</span> <span className="ml-2">{selectedDonor.donationCount} times</span></div>
                    <div><span className="font-medium">Last Donation:</span> <span className="ml-2">{selectedDonor.lastDonationDate}</span></div>
                    <div><span className="font-medium">Next Eligible:</span> <span className="ml-2">{selectedDonor.eligibleForNext}</span></div>
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="flex justify-end items-center pt-6 border-t border-gray-200 mt-6">
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
    )
}