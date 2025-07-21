"use client";

export default function DeleteBedAllotment({allotmentToDelete, cancelDelete, confirmDelete}) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-md w-full">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mr-3">
                  <svg
                    className="w-6 h-6 text-red-600"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.502 0L4.268 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-800">
                  Confirm Delete
                </h3>
              </div>

              <p className="text-gray-600 mb-6">
                Are you sure you want to delete bed allotment{" "}
                <strong>{allotmentToDelete.allotmentId}</strong> for patient{" "}
                <strong>{allotmentToDelete.patientName}</strong>? This action
                cannot be undone.
              </p>

              <div className="flex justify-end gap-3">
                <button
                  onClick={cancelDelete}
                  className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded"
                >
                  Cancel
                </button>
                <button
                  onClick={confirmDelete}
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
  );
}