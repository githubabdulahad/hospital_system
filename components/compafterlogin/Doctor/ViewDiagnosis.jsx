import { useState } from "react";
import CommonTable from "../Common/CommonTable";

const diagnosisColumns = [
  { label: "Date", key: "date" },
  { label: "Report Type", key: "reportType" },
  { label: "Document Type", key: "documentType" },
  { label: "Description ", key: "description" },
];

const ViewDiagnosis = ({ open, onClose, diagnosis, onSave, onDelete }) => {
  const [form, setForm] = useState({
    date: "",
    time: "",
    reportType: "",
    documentType: "",
    description: "",
  });
  const [diagnosisList, setDiagnosisList] = useState(diagnosis || []);

  if (!open) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    if (Object.values(form).some(value => !value)) {
      alert("Please fill out all fields");
      return;
    }
    const updatedList = [...diagnosisList, form];
    setDiagnosisList(updatedList);
    if (onSave) onSave(updatedList);
    setForm({ date: "", time: "", reportType: "", documentType: "", description: "" });
  };

  const handleDelete = (idx) => {
    const updatedList = diagnosisList.filter((_, i) => i !== idx);
    setDiagnosisList(updatedList);
    if (onDelete) onDelete(updatedList);
  };

  const diagnosisActions = [
    {
      label: (
        <span className="flex items-center gap-1">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
            strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round"
              d="M4.5 12.75v6.75h15v-6.75M12 3v12m0 0l-4.5-4.5M12 15l4.5-4.5" />
          </svg>
        </span>
      ),
      className: "bg-blue-500 hover:bg-blue-600 text-white font-bold px-3 py-1 rounded",
      onClick: () => {},
    },
    {
      label: (
        <span className="flex items-center gap-1">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
            strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12" />
          </svg>
        </span>
      ),
      className: "bg-red-500 hover:bg-red-600 text-white font-normal px-3 py-1 rounded",
      onClick: (row, idx) => handleDelete(idx),
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-transparent bg-opacity-40 backdrop-blur-sm animate-fadeIn pt-12">
      <div className="bg-white rounded-2xl shadow-2xl p-10 w-full max-w-2xl relative animate-modalPop border-t-8 border-indigo-400">
        <button className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl font-bold transition-transform duration-200 hover:scale-125"
          onClick={onClose} aria-label="Close">
          &times;
        </button>
        <h2 className="text-2xl font-extrabold text-center mb-6 text-indigo-700 tracking-wide drop-shadow">
          Bayanno Hospital Management System
        </h2>
        <CommonTable columns={diagnosisColumns} data={diagnosisList} actions={diagnosisActions} />

        <h2 className="text-xl font-bold mt-4 mb-2 text-gray-700">Add Diagnosis Report</h2>
        <div className="flex flex-row items-center space-x-3 justify-between mb-3">
          <label className="mr-8">Date</label>
          <input name="date" type="date" value={form.date} onChange={handleChange}
            className="text-gray-400 px-10 border border-[#0B2443] rounded-md focus:ring-2 focus:ring-indigo-400 transition" />
          <label>Time</label>
          <input name="time" type="time" value={form.time} onChange={handleChange}
            className="text-gray-400 px-10 border border-[#0B2443] rounded-md focus:ring-2 focus:ring-indigo-400 transition" />
        </div>

        <div className="flex flex-row space-x-5 mb-2 items-center">
          <label className="mr-8">Report Type</label>
          <select name="reportType" value={form.reportType} onChange={handleChange}
            className="border border-[#0B2443] rounded-md px-3 py-2 w-1/2 text-gray-400 focus:ring-2 focus:ring-indigo-400 transition">
            <option value="">Choose an option</option>
            <option value="X-ray">X-ray</option>
            <option value="Blood Test">Blood Test</option>
          </select>
        </div>

        <div className="flex flex-row space-x-5 mb-4 items-center">
          <label className="mr-2">Document Type</label>
          <select name="documentType" value={form.documentType} onChange={handleChange}
            className="border border-[#0B2443] rounded-md px-3 py-2 w-1/2 text-gray-400 focus:ring-2 focus:ring-indigo-400 transition">
            <option value="">Choose an option</option>
            <option value="image">Image</option>
            <option value="doc">Doc</option>
            <option value="pdf">Pdf</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label className="block mb-1 font-medium">Description</label>
          <textarea name="description" rows="4" value={form.description} onChange={handleChange}
            placeholder="Enter report description..."
            className="w-full border border-[#0B2443] rounded-md px-3 py-2 mb-2 text-gray-500 focus:ring-2 focus:ring-indigo-400 transition" />
        </div>

        <div className="flex justify-end gap-4 mt-2">
          <button className="bg-teal-500 hover:bg-teal-600 text-white font-semibold px-5 py-2 rounded-full transition-transform duration-200 hover:scale-105 shadow"
            onClick={handleSave}>
            Save
          </button>
          <button className="bg-gray-400 hover:bg-gray-500 text-white font-semibold px-6 py-2 rounded-full transition-transform duration-200 hover:scale-105"
            onClick={onClose}>
            Close
          </button>
        </div>
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

export default ViewDiagnosis;
