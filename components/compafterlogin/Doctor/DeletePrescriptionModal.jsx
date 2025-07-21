"use client";

export default function DeletePrescription({ selectedPrescription, setShowDeleteModal, handleConfirmDelete }) {
    return (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
            <div className="mb-4">
              <h3 className="text-lg font-semibold">Confirm Deletion</h3>
            </div>
            
            <div className="mb-4">
              <p className="text-gray-700 text-sm">
                Are you sure you want to delete the prescription for {selectedPrescription.patientName}? This action cannot be undone.
              </p>
            </div>
            
            <div className="mt-4 flex justify-end space-x-3">
              <button
                onClick={() => setShowDeleteModal(false)}
                className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmDelete}
                className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
              >
                Delete Prescription
              </button>
            </div>
          </div>
        </div>
    )
}