import React from 'react';

const DeleteMedicineSaleModal = ({ isOpen, onClose, onConfirm, sale }) => {
  if (!isOpen) return null;

  const handleConfirm = () => {
    onConfirm(sale);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50 animate-fadeIn">
      <div className="bg-white/95 backdrop-blur-md rounded-xl shadow-2xl p-6 w-full max-w-md mx-4 transform transition-all duration-300 ease-out animate-slideUp border border-white/20">
        <div className="flex justify-between items-center mb-4">
          <div></div>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full p-1 transition-colors"
            title="Close"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 bg-red-100 rounded-full">
          <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.464 0L4.35 16.5c-.77.833.192 2.5 1.732 2.5z" />
          </svg>
        </div>

        <div className="text-center">
          <h3 className="text-lg font-bold text-[#0B2443] mb-2">
            Delete Medicine Sale
          </h3>
          <p className="text-gray-600 mb-6">
            Are you sure you want to delete this medicine sale record? This action cannot be undone.
          </p>
        </div>

        {sale && (
          <div className="bg-gray-50 rounded-lg p-3 mb-6">
            <div className="text-sm text-gray-600 space-y-1">
              <div><span className="font-medium">Medicine:</span> {sale.medicine}</div>
              <div><span className="font-medium">Patient:</span> {sale.patient}</div>
              <div><span className="font-medium">Quantity:</span> {sale.quantity}</div>
              <div><span className="font-medium">Total Price:</span> {sale.totalPrice}</div>
              <div><span className="font-medium">Date:</span> {new Date(sale.date).toLocaleDateString()}</div>
            </div>
          </div>
        )}

        <div className="flex justify-end space-x-3">
          <button
            onClick={onClose}
            className="px-4 py-2 text-gray-600 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleConfirm}
            className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
          >
            Delete Sale
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteMedicineSaleModal;
