import React, { useState } from "react";

const EditPrescriptionModal = ({ open, onClose, prescription, onSave }) => {
  const [form, setForm] = useState(prescription || {});

  // Sync form state with prescription prop when modal opens or prescription changes
  React.useEffect(() => {
    setForm(prescription || {});
  }, [prescription, open]);

  if (!open) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(form);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-transparent bg-opacity-40 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-2xl shadow-2xl p-10 w-full max-w-md relative animate-modalPop border-t-8 border-blue-400">
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl font-bold transition-transform duration-200 hover:scale-125"
          onClick={onClose}
          aria-label="Close"
        >
          &times;
        </button>
        <h3 className="text-xl font-extrabold mb-4 text-blue-700 text-center tracking-wide drop-shadow">Edit Prescription</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Date & Time</label>
            <input
              type="text"
              name="date"
              value={form.date || ''}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded px-2 py-1 focus:ring-2 focus:ring-blue-400 transition"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Patient Name</label>
            <input
              type="text"
              name="patient"
              value={form.patient || ''}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded px-2 py-1 focus:ring-2 focus:ring-blue-400 transition"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Doctor Name</label>
            <input
              type="text"
              name="doctor"
              value={form.doctor || ''}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded px-2 py-1 focus:ring-2 focus:ring-blue-400 transition"
              required
            />
          </div>
          <div className="flex justify-end gap-2 mt-4">
            <button type="button" onClick={onClose} className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300 transition-transform duration-200 hover:scale-105">Cancel</button>
            <button type="submit" className="px-3 py-1 rounded bg-blue-500 hover:bg-blue-600 text-white transition-transform duration-200 hover:scale-105">Save</button>
          </div>
        </form>
      </div>
      <style>{`
        .animate-fadeIn { animation: fadeIn 0.3s; }
        .animate-modalPop { animation: modalPop 0.3s; }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes modalPop { 0% { transform: scale(0.85); opacity: 0; } 100% { transform: scale(1); opacity: 1; } }
      `}</style>
    </div>
  );
};

export default EditPrescriptionModal;
