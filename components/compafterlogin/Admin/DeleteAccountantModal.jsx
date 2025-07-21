"use client";
import { FaTrash, FaTimes } from "react-icons/fa";

export default function DeleteAccountantModal  ({ isOpen, accountant, onClose, onDelete }) {
  if (!isOpen || !accountant) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="bg-white rounded-xl shadow-2xl max-w-md w-full mx-4">
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
              <FaTrash className="w-5 h-5 text-red-500" />
              Delete Accountant
            </h3>
            <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
              <FaTimes className="w-5 h-5" />
            </button>
          </div>
          
          <p className="text-gray-600 mb-6">
            Are you sure you want to delete <strong>"{accountant.name}"</strong>? This action cannot be undone.
          </p>
          
          <div className="flex justify-end space-x-3">
            <button
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={() => {
                onDelete(accountant);
                onClose();
              }}
              className="px-4 py-2 bg-red-500 text-white hover:bg-red-600 rounded-lg transition-colors flex items-center gap-2"
            >
              <FaTrash className="w-4 h-4" />
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};