import React, { useState } from 'react';

const patients = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Smith' },
  { id: 3, name: 'Michael Brown' },
  { id: 4, name: 'Emily White' },
];

const statuses = ['Paid', 'Pending', 'Cancelled'];

export default function AccAddInvoice() {
  const [form, setForm] = useState({
    title: '',
    number: Math.floor(10000 + Math.random() * 90000),
    patient: '',
    creationDate: new Date().toISOString().slice(0, 10),
    dueDate: '',
    vat: '',
    discount: '',
    status: '',
    entries: [{ description: '', amount: '' }],
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleEntryChange = (idx, e) => {
    const newEntries = form.entries.map((entry, i) =>
      i === idx ? { ...entry, [e.target.name]: e.target.value } : entry
    );
    setForm({ ...form, entries: newEntries });
  };

  const addEntry = () => {
    setForm({ ...form, entries: [...form.entries, { description: '', amount: '' }] });
  };

  const removeEntry = (idx) => {
    setForm({ ...form, entries: form.entries.filter((_, i) => i !== idx) });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation
    if (!form.title || !form.patient || !form.creationDate || !form.status) {
      setError('Please fill all required fields.');
      return;
    }
    setError('');
    // Submit logic here
    alert('Invoice created!');
  };

  return (
    <div style={{ fontFamily: "'Gill Sans MT', 'Gill Sans', 'GillSans', 'Arial', 'sans-serif'" }} className="w-full min-h-screen flex justify-center items-start bg-[#f8fafc] py-8 animate-fadeIn">
      <form onSubmit={handleSubmit} className="w-full max-w-3xl bg-white rounded-2xl shadow-xl p-8 flex flex-col gap-6">
        <h1 className="text-2xl md:text-3xl font-bold text-[#0B2443] mb-2 tracking-wide">Create New Invoice</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-3">
            <label className="font-semibold text-[#23253A]">Invoice Title</label>
            <input
              type="text"
              name="title"
              value={form.title}
              onChange={handleChange}
              className="border border-[#C0E6DA] rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#198172]"
              required
            />
            <label className="font-semibold text-[#23253A]">Invoice Number</label>
            <input
              type="text"
              name="number"
              value={form.number}
              className="border border-[#C0E6DA] rounded px-4 py-2 bg-gray-100 cursor-not-allowed"
              readOnly
            />
            <label className="font-semibold text-[#23253A]">Patient</label>
            <select
              name="patient"
              value={form.patient}
              onChange={handleChange}
              className="border border-[#C0E6DA] rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#198172]"
              required
            >
              <option value="">Select A Patient</option>
              {patients.map((p) => (
                <option key={p.id} value={p.name}>{p.name}</option>
              ))}
            </select>
            <label className="font-semibold text-[#23253A]">Creation Date</label>
            <input
              type="date"
              name="creationDate"
              value={form.creationDate}
              onChange={handleChange}
              className="border border-[#C0E6DA] rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#198172]"
              required
            />
            <label className="font-semibold text-[#23253A]">Due Date</label>
            <input
              type="date"
              name="dueDate"
              value={form.dueDate}
              onChange={handleChange}
              className="border border-[#C0E6DA] rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#198172]"
            />
          </div>
          <div className="flex flex-col gap-3">
            <label className="font-semibold text-[#23253A]">Vat Percentage</label>
            <input
              type="number"
              name="vat"
              value={form.vat}
              onChange={handleChange}
              className="border border-[#C0E6DA] rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#198172]"
              min="0"
              max="100"
              placeholder="%"
            />
            <label className="font-semibold text-[#23253A]">Discount Amount</label>
            <input
              type="number"
              name="discount"
              value={form.discount}
              onChange={handleChange}
              className="border border-[#C0E6DA] rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#198172]"
              min="0"
              placeholder="$"
            />
            <label className="font-semibold text-[#23253A]">Payment Status</label>
            <select
              name="status"
              value={form.status}
              onChange={handleChange}
              className="border border-[#C0E6DA] rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#198172]"
              required
            >
              <option value="">Select A Status</option>
              {statuses.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>
        </div>
        <hr className="my-4 border-[#C0E6DA]" />
        <div>
          <label className="font-semibold text-[#23253A] mb-2 block">Invoice Entry</label>
          {form.entries.map((entry, idx) => (
            <div key={idx} className="flex gap-2 mb-2 items-center">
              <input
                type="text"
                name="description"
                value={entry.description}
                onChange={(e) => handleEntryChange(idx, e)}
                placeholder="Description"
                className="border border-[#C0E6DA] rounded px-4 py-2 flex-1 focus:outline-none focus:ring-2 focus:ring-[#198172]"
                required
              />
              <input
                type="number"
                name="amount"
                value={entry.amount}
                onChange={(e) => handleEntryChange(idx, e)}
                placeholder="Amount"
                className="border border-[#C0E6DA] rounded px-4 py-2 w-32 focus:outline-none focus:ring-2 focus:ring-[#198172]"
                required
              />
              {form.entries.length > 1 && (
                <button type="button" onClick={() => removeEntry(idx)} className="bg-red-500 hover:bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg shadow">
                  <span>&#128465;</span>
                </button>
              )}
            </div>
          ))}
          <button type="button" onClick={addEntry} className="mt-2 px-4 py-2 bg-[#C0E6DA] text-[#0B2443] rounded-lg font-semibold shadow hover:bg-[#198172] transition flex items-center gap-2">
            <span className="text-xl">+</span> Add Invoice Entry
          </button>
        </div>
        {error && <div className="text-red-600 font-semibold text-center">{error}</div>}
        <button type="submit" className="w-full mt-4 bg-[#198172] text-white py-3 rounded-md font-semibold text-lg shadow-md hover:bg-[#145c4a] transition">
          Create New Invoice
        </button>
      </form>
    </div>
  );
}