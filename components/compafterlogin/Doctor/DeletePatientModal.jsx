"use client";

export default function DeletePatientModal({selectedPatient , setShowDeleteModal , handleConfirmDelete}) {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-gray-800">Confirm Deletion</h3>
              <p className="text-sm text-gray-600 mt-2">
                Are you sure you want to delete patient{" "}
                <span className="font-medium text-gray-800">{selectedPatient.name}</span>? This action cannot be undone.
              </p>
            </div>
            
            <div className="flex justify-end space-x-3">
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
                Delete Patient
              </button>
            </div>
          </div>
        </div>
    )
}