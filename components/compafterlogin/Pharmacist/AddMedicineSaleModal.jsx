'use client';
import { FaPlus, FaTimes, FaSave } from 'react-icons/fa';

export default function AddMedicineSaleModal({ onClose, handleSubmit, form, setForm }) {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-md mx-4">
            <div className="flex items-center justify-between px-6 py-3 border-b border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                <FaPlus className="w-5 h-5 text-[#0B2443]" />
                Add Medicine Sale
              </h3>
              <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <FaTimes className="w-5 h-5 text-gray-600" />
              </button>
            </div>
            
            <form onSubmit={handleSubmit} className="p-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Medicine Name *</label>
                  <input
                    type="text"
                    value={form.medicine}
                    onChange={(e) => setForm({ ...form, medicine: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter medicine name"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Patient Name *</label>
                  <input
                    type="text"
                    value={form.patient}
                    onChange={(e) => setForm({ ...form, patient: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter patient name"
                    required
                  />
                </div>
    
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Quantity *</label>
                  <input
                    type="number"
                    value={form.quantity}
                    onChange={(e) => setForm({ ...form, quantity: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter quantity"
                    min="1"
                    required
                  />
                </div>
    
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Unit Price *</label>
                  <input
                    type="number"
                    value={form.unitPrice}
                    onChange={(e) => setForm({ ...form, unitPrice: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter unit price"
                    min="0"
                    step="0.01"
                    required
                  />
                </div>
    
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Sale Date</label>
                  <input
                    type="date"
                    value={form.date}
                    onChange={(e) => setForm({ ...form, date: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
    
                {form.quantity && form.unitPrice && (
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <p className="text-sm text-blue-700">
                      Total Price: <span className="font-bold">${(parseFloat(form.quantity || 0) * parseFloat(form.unitPrice || 0)).toFixed(2)}</span>
                    </p>
                  </div>
                )}
              </div>
              
              <div className="flex justify-end space-x-3 mt-6">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 border border-gray-300 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#0B2443] text-white hover:bg-blue-900 rounded-lg transition-colors flex items-center gap-2"
                >
                  <FaSave className="w-4 h-4" />
                  Add Sale
                </button>
              </div>
            </form>
          </div>
        </div>
      );
}