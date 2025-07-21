"use client";

export default function AddbedModal({setShowAddBedModal, handleAddBedSubmit, newBedData, handleNewBedInputChange}) {
    return(
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-800">
                Add New Bed
              </h3>
              <button
                onClick={() => setShowAddBedModal(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleAddBedSubmit}>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Bed Number *
                  </label>
                  <input
                    type="text"
                    name="bedNumber"
                    value={newBedData.bedNumber}
                    onChange={handleNewBedInputChange}
                    placeholder="e.g., A101, B205"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Ward *
                  </label>
                  <input
                    type="text"
                    name="ward"
                    value={newBedData.ward}
                    onChange={handleNewBedInputChange}
                    placeholder="e.g., General Ward A, ICU"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Bed Type
                  </label>
                  <select
                    name="bedType"
                    value={newBedData.bedType}
                    onChange={handleNewBedInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                  >
                    <option value="Standard">Standard</option>
                    <option value="ICU Bed">ICU Bed</option>
                    <option value="Emergency Bed">Emergency Bed</option>
                    <option value="Private Room">Private Room</option>
                    <option value="Semi-Private">Semi-Private</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Daily Charges
                  </label>
                  <input
                    type="number"
                    name="charges"
                    value={newBedData.charges}
                    onChange={handleNewBedInputChange}
                    min="0"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div className="flex gap-3 mt-6">
                <button
                  type="button"
                  onClick={() => setShowAddBedModal(false)}
                  className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-2 bg-[#0B2443] text-white rounded-md hover:bg-blue-900"
                >
                  Add Bed
                </button>
              </div>
            </form>
          </div>
        </div>
    )
}