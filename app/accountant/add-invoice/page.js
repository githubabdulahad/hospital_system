"use client";
import React, { useState } from 'react';
import { useInvoice } from '../../../components/Context/InvoiceContext';
import { FaFileInvoiceDollar, FaUser, FaCalendarAlt, FaPlus, FaTrash, FaSave, FaTimes, FaCalculator } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

const patients = [
  { id: 1, name: 'John Doe', email: 'john.doe@email.com' },
  { id: 2, name: 'Jane Smith', email: 'jane.smith@email.com' },
  { id: 3, name: 'Michael Brown', email: 'michael.brown@email.com' },
  { id: 4, name: 'Emily White', email: 'emily.white@email.com' },
];

const statuses = ['Paid', 'Pending', 'Cancelled'];

const services = [
  'General Consultation',
  'Laboratory Tests',
  'X-Ray',
  'MRI Scan',
  'CT Scan',
  'Ultrasound',
  'Blood Test',
  'Surgery',
  'Emergency Care',
  'Medication'
];

export default function AccAddInvoice() {
  const { addInvoice } = useInvoice();
  const router = useRouter();
  
  const [form, setForm] = useState({
    title: '',
    number: Math.floor(10000 + Math.random() * 90000),
    patient: '',
    creationDate: new Date().toISOString().slice(0, 10),
    dueDate: '',
    vat: 15,
    discount: 0,
    status: 'Pending',
    entries: [{ description: '', amount: '', service: '' }],
    notes: ''
  });
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

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
    setForm({ ...form, entries: [...form.entries, { description: '', amount: '', service: '' }] });
  };

  const removeEntry = (idx) => {
    if (form.entries.length > 1) {
      setForm({ ...form, entries: form.entries.filter((_, i) => i !== idx) });
    }
  };

  const calculateSubtotal = () => {
    return form.entries.reduce((sum, entry) => sum + (parseFloat(entry.amount) || 0), 0);
  };

  const calculateVat = () => {
    return (calculateSubtotal() * (parseFloat(form.vat) || 0)) / 100;
  };

  const calculateTotal = () => {
    return calculateSubtotal() + calculateVat() - (parseFloat(form.discount) || 0);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    // Validation
    if (!form.title || !form.patient || !form.creationDate || !form.status) {
      setError('Please fill all required fields.');
      setIsSubmitting(false);
      return;
    }

    // Validate entries
    const hasEmptyEntries = form.entries.some(entry => !entry.description || !entry.amount);
    if (hasEmptyEntries) {
      setError('Please fill all invoice entries.');
      setIsSubmitting(false);
      return;
    }

    // Create invoice object
    const invoice = {
      ...form,
      number: form.number,
      subtotal: calculateSubtotal(),
      total: calculateTotal(),
      entries: form.entries.map(entry => ({
        ...entry,
        amount: parseFloat(entry.amount)
      }))
    };

    // Add to context
    addInvoice(invoice);
    
    alert('Invoice created successfully!');
    setIsSubmitting(false);
    
    // Navigate to manage invoices
    router.push('/accountant/manage-invoice');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-gray-50 py-8" style={{ fontFamily: "'Gill Sans MT', 'Gill Sans', 'GillSans', 'Arial', 'sans-serif'" }}>
      <div className="max-w-5xl mx-auto px-4">
        {/* Header */}
        <div className="bg-white/90 backdrop-blur-sm border border-gray-200 rounded-xl shadow-lg p-6 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
              <FaFileInvoiceDollar className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-800">Create New Invoice</h1>
              <p className="text-gray-600 mt-1">Generate invoices for patient services and treatments</p>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
          <div className="p-8">
            {/* Basic Information */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
                <FaFileInvoiceDollar className="w-5 h-5 text-blue-500" />
                Invoice Information
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Invoice Title <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="title"
                    value={form.title}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter invoice title"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Invoice Number
                  </label>
                  <input
                    type="text"
                    name="number"
                    value={form.number}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-100 cursor-not-allowed"
                    readOnly
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Patient <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="patient"
                    value={form.patient}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  >
                    <option value="">Select a patient</option>
                    {patients.map((p) => (
                      <option key={p.id} value={p.name}>{p.name} - {p.email}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Payment Status <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="status"
                    value={form.status}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  >
                    {statuses.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Creation Date <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    name="creationDate"
                    value={form.creationDate}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Due Date
                  </label>
                  <input
                    type="date"
                    name="dueDate"
                    value={form.dueDate}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            {/* Invoice Entries */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
                  <FaCalculator className="w-5 h-5 text-green-500" />
                  Invoice Entries
                </h2>
                <button
                  type="button"
                  onClick={addEntry}
                  className="bg-[#0B2443] hover:bg-[#0B2443] text-white px-4 py-2 rounded-lg font-medium flex items-center gap-2 transition-colors"
                >
                  <FaPlus className="w-4 h-4" />
                  Add Entry
                </button>
              </div>

              <div className="space-y-4">
                {form.entries.map((entry, idx) => (
                  <div key={idx} className="bg-gray-50 rounded-lg p-4">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Service Type
                        </label>
                        <select
                          name="service"
                          value={entry.service}
                          onChange={(e) => handleEntryChange(idx, e)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                          <option value="">Select service</option>
                          {services.map((service) => (
                            <option key={service} value={service}>{service}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Description <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="description"
                          value={entry.description}
                          onChange={(e) => handleEntryChange(idx, e)}
                          placeholder="Enter description"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Amount ($) <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="number"
                          name="amount"
                          value={entry.amount}
                          onChange={(e) => handleEntryChange(idx, e)}
                          placeholder="0.00"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          min="0"
                          step="0.01"
                          required
                        />
                      </div>

                      <div className="flex justify-end">
                        {form.entries.length > 1 && (
                          <button
                            type="button"
                            onClick={() => removeEntry(idx)}
                            className="bg-red-500 hover:bg-red-600 text-white rounded-lg w-10 h-10 flex items-center justify-center transition-colors"
                            title="Remove entry"
                          >
                            <FaTrash className="w-4 h-4" />
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Financial Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Financial Details</h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      VAT Percentage (%)
                    </label>
                    <input
                      type="number"
                      name="vat"
                      value={form.vat}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      min="0"
                      max="100"
                      step="0.01"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Discount Amount ($)
                    </label>
                    <input
                      type="number"
                      name="discount"
                      value={form.discount}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      min="0"
                      step="0.01"
                    />
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Invoice Summary</h3>
                
                <div className="bg-gray-50 rounded-lg p-6 space-y-3">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-600">Subtotal:</span>
                    <span className="font-medium">${calculateSubtotal().toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-600">VAT ({form.vat}%):</span>
                    <span className="font-medium">${calculateVat().toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-600">Discount:</span>
                    <span className="font-medium">-${(parseFloat(form.discount) || 0).toFixed(2)}</span>
                  </div>
                  <hr className="border-gray-300" />
                  <div className="flex justify-between items-center text-lg font-bold">
                    <span className="text-gray-800">Total:</span>
                    <span className="text-blue-600">${calculateTotal().toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Notes */}
            <div className="mb-8">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Additional Notes
              </label>
              <textarea
                name="notes"
                value={form.notes}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Add any additional notes or terms..."
              />
            </div>

            {/* Error Message */}
            {error && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                <div className="flex items-center">
                  <FaTimes className="w-5 h-5 text-red-500 mr-2" />
                  <span className="text-red-700 font-medium">{error}</span>
                </div>
              </div>
            )}

            {/* Submit Button */}
            <div className="flex justify-end space-x-4">
              <button
                type="button"
                onClick={() => window.history.back()}
                className="px-6 py-3 border border-gray-300 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors font-medium flex items-center gap-2"
              >
                <FaTimes className="w-4 h-4" />
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`px-6 py-3 rounded-lg transition-colors font-medium flex items-center gap-2 ${
                  isSubmitting 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-[#0B2443] hover:bg-[#0B2443]'
                } text-white`}
              >
                <FaSave className="w-4 h-4" />
                {isSubmitting ? 'Creating...' : 'Create Invoice'}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}