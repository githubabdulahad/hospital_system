import React, { useState } from "react";

const AddPrescriptionModal = ({ open, onClose, onSave, patients = [] }) => {
  const [form, setForm] = useState({
    date: "",
    time: "",
    patient: "",
    caseHistory: "",
    medication: "",
  });

  React.useEffect(() => {
    if (open) {
      setForm({ date: "", time: "", patient: "", caseHistory: "", medication: "" });
    }
  }, [open]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    if (!form.date || !form.time || !form.patient) {
      alert("Please fill all required fields");
      return;
    }
    onSave(form);
    onClose();
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-transparent bg-opacity-40 backdrop-blur-sm animate-fadeIn ">
    <div className="mt-16  ">
      <div className="bg-white rounded-2xl shadow-2xl p-10 w-full max-w-2xl relative animate-modalPop border-t-8 border-teal-400">
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl font-bold transition-transform duration-200 hover:scale-125"
          onClick={onClose}
          aria-label="Close"
        >
          &times;
        </button>
        <h2 className="text-2xl font-extrabold text-center mb-2 text-teal-700 tracking-wide drop-shadow">Bayanno Hospital Management System</h2>
        <div className="bg-white rounded-xl p-8">
          <h3 className="text-2xl font-bold mb-6 text-center text-gray-700">Add Prescription</h3>
          <div className="grid grid-cols-3 gap-6 mb-3 items-center">
            <label className="col-span-1 text-gray-500 font-semibold">Date</label>
            <input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              className="col-span-1 border rounded px-3 py-2 focus:ring-2 focus:ring-teal-400 transition"
            />
            <input
              type="time"
              name="time"
              value={form.time}
              onChange={handleChange}
              className="col-span-1 border rounded px-3 py-2 focus:ring-2 focus:ring-teal-400 transition"
            />
          </div>
          <div className="grid grid-cols-3 gap-6 mb-6 items-center">
            <label className="col-span-1 text-gray-500 font-semibold">Patient</label>
            <select
              name="patient"
              value={form.patient}
              onChange={handleChange}
              className="col-span-2 border rounded px-3 py-2 focus:ring-2 focus:ring-teal-400 transition"
            >
              <option value="">Select Patient</option>
              {patients.map((p, idx) => (
                <option key={idx} value={p.name || p}>{p.name || p}</option>
              ))}
            </select>
          </div>
          <div className="mb-6">
            <label className="block text-gray-500 font-semibold mb-2">Case History</label>
            <textarea
              name="caseHistory"
              value={form.caseHistory}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2 min-h-[100px] focus:ring-2 focus:ring-teal-400 transition"
              placeholder="Enter case history..."
            />
          </div>
          <div className="mb-8">
            <label className="block text-gray-500 font-semibold mb-2">Medication</label>
            <textarea
              name="medication"
              value={form.medication}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2 min-h-[60px] focus:ring-2 focus:ring-teal-400 transition"
              placeholder="Enter medication..."
            />
          </div>
          <div className="flex justify-end gap-4">
            <button
              className="bg-gray-400 hover:bg-gray-500 text-white font-semibold px-6 py-2 rounded-full transition-transform duration-200 hover:scale-105"
              onClick={onClose}
            >
              Close
            </button>
            <button
              className="ml-2 bg-teal-500 hover:bg-teal-600 text-white font-semibold px-6 py-2 rounded-full shadow-lg transition-transform duration-200 hover:scale-105"
              onClick={handleSave}
            >
              Save
            </button>
          </div>
        </div>
      </div>
      <style>{`
        .animate-fadeIn { animation: fadeIn 0.3s; }
        .animate-modalPop { animation: modalPop 0.3s; }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes modalPop { 0% { transform: scale(0.85); opacity: 0; } 100% { transform: scale(1); opacity: 1; } }
      `}</style>
    </div>
    </div>
  );
};

export default AddPrescriptionModal;
