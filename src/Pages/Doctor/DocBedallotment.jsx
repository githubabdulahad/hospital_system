import React, { useState } from "react";
import Commonbtn from "../../Components/subComponents/Commonbtn";
import CommonAddButton from "../../Components/compafterlogin/Common/CommonAddButton";

const initialBedAllotments = [
  {
    bedNumber: "10",
    bedType: "icu",
    patient: "Tanvir Hasan",
    allotmentTime: "07/04/2025",
    dischargeTime: "07/05/2025",
  },
  {
    bedNumber: "10",
    bedType: "icu",
    patient: "Tanvir Hasan",
    allotmentTime: "07/06/2025",
    dischargeTime: "07/08/2025",
  },
  {
    bedNumber: "10",
    bedType: "icu",
    patient: "giorgi giorgadze",
    allotmentTime: "07/03/2025",
    dischargeTime: "07/23/2025",
  },
];

const AddBedAllotmentModal = ({ open, onClose, onSave, patients = [] }) => {
  const [form, setForm] = useState({
    bedNumber: "",
    bedType: "",
    patient: "",
    allotmentTime: "",
    dischargeTime: "",
  });

  React.useEffect(() => {
    if (open) {
      setForm({ bedNumber: "", bedType: "", patient: "", allotmentTime: "", dischargeTime: "" });
    }
  }, [open]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    if (!form.bedNumber || !form.bedType || !form.patient || !form.allotmentTime || !form.dischargeTime) {
      alert("Please fill all required fields");
      return;
    }
    onSave(form);
    onClose();
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-transparent bg-opacity-40 backdrop-blur-sm animate-fadeIn">
    <div className="mt-6" >
      <div className="bg-white rounded-2xl shadow-2xl p-10 w-full max-w-2xl relative animate-modalPop border-t-8 border-blue-400">
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl font-bold"
          onClick={onClose}
          aria-label="Close"
        >
          &times;
        </button>
        <h2 className="text-2xl font-semibold text-center mb-3">Bayanno Hospital Management System</h2>
        <div className="bg-white rounded-xl p-4">
          <h3 className="text-2xl font-semibold mb-2 text-center">Add Bed Allotment</h3>
          <div className="mb-2">
            <label className="block text-gray-500 font-semibold mb-1">Bed Number</label>
            <input
              type="text"
              name="bedNumber"
              value={form.bedNumber}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
              placeholder="Enter bed number"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-500 font-semibold mb-1">Bed Type</label>
            <select
              name="bedType"
              value={form.bedType}
              onChange={handleChange}
              className="w-full border rounded px-3 py-1"
            >
              <option value="">Select Bed Type</option>
              <option value="icu">ICU</option>
              <option value="general">General</option>
              <option value="vip">VIP</option>
            </select>
          </div>
          <div className="mb-2">
            <label className="block text-gray-500 font-semibold mb-2">Patient</label>
            <input
              type="text"
              name="patient"
              value={form.patient}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
              placeholder="Enter patient name"
            />
          </div>
          <div className="mb-3">
            <label className="block text-gray-500 font-semibold mb-2">Allotment Time</label>
            <input
              type="date"
              name="allotmentTime"
              value={form.allotmentTime}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-500 font-semibold mb-2">Discharge Time</label>
            <input
              type="date"
              name="dischargeTime"
              value={form.dischargeTime}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
            />
          </div>
          <div className="flex justify-end">
            <button
              className="bg-gray-400 hover:bg-gray-500 text-white font-semibold px-6 py-2 rounded-full"
              onClick={onClose}
            >
              Close
            </button>
            <button
              className="ml-4 bg-teal-500 hover:bg-teal-600 text-white font-semibold px-6 py-2 rounded-full"
              onClick={handleSave}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

const DocBedallotment = () => {
  const [bedAllotments, setBedAllotments] = useState(initialBedAllotments);
  const [addModalOpen, setAddModalOpen] = useState(false);

  const handleDelete = (idx) => {
    setBedAllotments((prev) => prev.filter((_, i) => i !== idx));
  };

  const handleAddBedAllotment = (newAllotment) => {
    setBedAllotments((prev) => [...prev, newAllotment]);
    setAddModalOpen(false);
  };

  return (
    <div className="p-6 max-w-6xl mx-auto" style={{ fontFamily: "'Gill Sans MT', 'Gill Sans', 'GillSans', 'Arial', 'sans-serif'" }}>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-semibold text-gray-700 flex items-center">
          <svg className="w-7 h-7 text-gray-400 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 8V4m0 0a4 4 0 014 4v4m-4-8a4 4 0 00-4 4v4m8 0H4m16 0h-4m-4 0v8m0 0a4 4 0 004-4v-4m-4 8a4 4 0 01-4-4v-4" /></svg>
          Bed Allotment
        </h2>
        <CommonAddButton label="Add Bed Allotment" onClick={() => setAddModalOpen(true)} />
      </div>
      <AddBedAllotmentModal
        open={addModalOpen}
        onClose={() => setAddModalOpen(false)}
        onSave={handleAddBedAllotment}
      />
      <div className="bg-white rounded-xl shadow p-6">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="text-gray-500 text-left border-b">
              <th className="py-3 px-2 font-semibold">Bed Number</th>
              <th className="py-3 px-2 font-semibold">Bed Type</th>
              <th className="py-3 px-2 font-semibold">Patient</th>
              <th className="py-3 px-2 font-semibold">Allotment Time</th>
              <th className="py-3 px-2 font-semibold">Discharge Time</th>
              <th className="py-3 px-2 font-semibold">Options</th>
            </tr>
          </thead>
          <tbody>
            {bedAllotments.length === 0 ? (
              <tr>
                <td colSpan={6} className="py-6 px-2 text-center text-gray-400">
                  No bed allotments found
                </td>
              </tr>
            ) : (
              bedAllotments.map((bed, idx) => (
                <tr key={idx} className="border-b last:border-b-0">
                  <td className="py-3 px-2">{bed.bedNumber}</td>
                  <td className="py-3 px-2">{bed.bedType}</td>
                  <td className="py-3 px-2">{bed.patient}</td>
                  <td className="py-3 px-2">{bed.allotmentTime}</td>
                  <td className="py-3 px-2">{bed.dischargeTime}</td>
                  <td className="py-3 px-2 flex gap-2">
                    <button className="bg-gray-500 hover:bg-gray-600 text-white font-semibold px-4 py-1 rounded flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M15.232 5.232l3.536 3.536M9 11l6 6M3 21h18" /></svg>
                      Edit
                    </button>
                    <button className="bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-1 rounded flex items-center" onClick={() => handleDelete(idx)}>
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12" /></svg>
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
        <div className="flex justify-between items-center mt-4">
          <span className="text-gray-500">Showing 1 to {bedAllotments.length} of {bedAllotments.length} entries</span>
          <div>
            <button className="border px-3 py-1 rounded">&lt;</button>
            <button className="border px-3 py-1 rounded ml-2">1</button>
            <button className="border px-3 py-1 rounded ml-2">&gt;</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocBedallotment;
