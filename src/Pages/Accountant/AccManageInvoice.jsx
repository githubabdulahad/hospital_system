import React, { useState } from "react";

const demoInvoices = [
  // Example data
  {
    number: 79599,
    title: "Consultation Fee",
    patient: "John Doe",
    creationDate: "2025-07-09",
    dueDate: "2025-07-15",
    vat: 5,
    discount: 50,
    status: "Paid",
    options: ""
  },
  {
    number: 79598,
    title: "Lab Test",
    patient: "Jane Smith",
    creationDate: "2025-07-08",
    dueDate: "2025-07-14",
    vat: 10,
    discount: 0,
    status: "Pending",
    options: ""
  }
];

export default function AccManageInvoice() {
  // Removed search and perPage functionality
  const [page, setPage] = useState(1);
  const [invoices, setInvoices] = useState(demoInvoices);
  const [editingInvoice, setEditingInvoice] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [invoiceToDelete, setInvoiceToDelete] = useState(null);
  const paginated = invoices;
  const totalPages = 1;

  // Edit functionality
  const handleEdit = (invoice) => {
    setEditingInvoice({ ...invoice });
  };

  const handleSaveEdit = () => {
    setInvoices(invoices.map(inv => 
      inv.number === editingInvoice.number ? editingInvoice : inv
    ));
    setEditingInvoice(null);
  };

  const handleCancelEdit = () => {
    setEditingInvoice(null);
  };

  // Delete functionality
  const handleDelete = (invoice) => {
    setInvoiceToDelete(invoice);
    setShowDeleteModal(true);
  };

  const confirmDelete = () => {
    setInvoices(invoices.filter(inv => inv.number !== invoiceToDelete.number));
    setShowDeleteModal(false);
    setInvoiceToDelete(null);
  };

  const cancelDelete = () => {
    setShowDeleteModal(false);
    setInvoiceToDelete(null);
  };

  return (
    <div style={{ fontFamily: "'Gill Sans MT', 'Gill Sans', 'GillSans', 'Arial', 'sans-serif'" }} className="w-full min-h-screen flex flex-col items-center bg-[#f8fafc] py-8 animate-fadeIn">
      <div className="w-full max-w-6xl bg-white rounded-2xl shadow-xl p-5">
        <h1 className="text-2xl md:text-3xl font-bold text-[#0B2443] mb-6 tracking-wide">Invoices</h1>
        <div className="flex flex-wrap gap-4 items-center mb-4">
          <div className="flex-1"></div>
        </div>
        <div className="overflow-x-auto rounded-lg border border-[#C0E6DA]">
          <table className="min-w-full text-left text-sm md:text-base">
            <thead>
              <tr className="bg-[#C0E6DA] text-[#0b2443]">
                <th className="py-2 px-4">Invoice Number</th>
                <th className="py-2 px-4">Title</th>
                <th className="py-2 px-4">Patient</th>
                <th className="py-2 px-4">Creation Date</th>
                <th className="py-2 px-4">Due Date</th>
                <th className="py-2 px-4">Vat Percentage</th>
                <th className="py-2 px-4">Discount Amount</th>
                <th className="py-2 px-4">Status</th>
                <th className="py-2 px-4">Options</th>
              </tr>
            </thead>
            <tbody>
              {paginated.length === 0 ? (
                <tr>
                  <td colSpan={9} className="text-center py-8 text-gray-400">No data available in table</td>
                </tr>
              ) : (
                paginated.map((inv) => (
                  <tr key={inv.number} className="border-b last:border-b-0 hover:bg-[#C0E6DA]/20">
                    <td className="py-2 px-4 font-semibold">{inv.number}</td>
                    <td className="py-2 px-4">{inv.title}</td>
                    <td className="py-2 px-4">{inv.patient}</td>
                    <td className="py-2 px-4">{inv.creationDate}</td>
                    <td className="py-2 px-4">{inv.dueDate}</td>
                    <td className="py-2 px-4">{inv.vat}%</td>
                    <td className="py-2 px-4">${inv.discount}</td>
                    <td className={`py-2 px-4 font-bold ${inv.status === 'Paid' ? 'text-[#0B2443]' : 'text-red-700'}`}>{inv.status}</td>
                    <td  className="py-2 px-4 flex ">
                      <button 
                        className="text-[#000000] bg-[#C0E6DA] rounded-md p-2 hover:bg-[#A5D6CC] mr-2" 
                        title="Edit"
                        onClick={() => handleEdit(inv)}
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                      </button>
                      <button 
                        className="text-red-600 bg-[#C0E6DA] rounded-md p-2 hover:bg-[#A5D6CC]" 
                        title="Delete"
                        onClick={() => handleDelete(inv)}
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
        <div className="flex items-center justify-between mt-4">
          <span className="text-sm text-gray-500">
            Showing {invoices.length === 0 ? 0 : 1} to {invoices.length} of {invoices.length} entries
          </span>
          <div className="flex gap-2">
            <button
              className="px-3 py-1 rounded border border-[#C0E6DA] bg-white disabled:opacity-50"
              onClick={() => setPage(p => Math.max(1, p-1))}
              disabled={page === 1}
            >
              &lt;
            </button>
            <button
              className="px-3 py-1 rounded border border-[#C0E6DA] bg-white disabled:opacity-50"
              onClick={() => setPage(p => Math.min(totalPages, p+1))}
              disabled={page === totalPages}
            >
              &gt;
            </button>
          </div>
        </div>
      </div>

      {/* Edit Modal */}
      {editingInvoice && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50 animate-fadeIn">
          <div className="bg-white/95 backdrop-blur-md rounded-xl shadow-2xl p-6 w-full max-w-md mx-4 transform transition-all duration-300 ease-out animate-slideUp border border-white/20">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-[#0B2443]">Edit Invoice</h2>
              <button
                onClick={handleCancelEdit}
                className="text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full p-1 transition-colors"
                title="Close"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                <input
                  type="text"
                  value={editingInvoice.title}
                  onChange={(e) => setEditingInvoice({...editingInvoice, title: e.target.value})}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#198172]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Patient</label>
                <input
                  type="text"
                  value={editingInvoice.patient}
                  onChange={(e) => setEditingInvoice({...editingInvoice, patient: e.target.value})}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#198172]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Due Date</label>
                <input
                  type="date"
                  value={editingInvoice.dueDate}
                  onChange={(e) => setEditingInvoice({...editingInvoice, dueDate: e.target.value})}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#198172]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">VAT Percentage</label>
                <input
                  type="number"
                  value={editingInvoice.vat}
                  onChange={(e) => setEditingInvoice({...editingInvoice, vat: parseInt(e.target.value)})}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#198172]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Discount Amount</label>
                <input
                  type="number"
                  value={editingInvoice.discount}
                  onChange={(e) => setEditingInvoice({...editingInvoice, discount: parseInt(e.target.value)})}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#198172]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                <select
                  value={editingInvoice.status}
                  onChange={(e) => setEditingInvoice({...editingInvoice, status: e.target.value})}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#198172]"
                >
                  <option value="Paid">Paid</option>
                  <option value="Pending">Pending</option>
                  <option value="Overdue">Overdue</option>
                </select>
              </div>
            </div>
            <div className="flex gap-3 mt-6">
              <button
                onClick={handleSaveEdit}
                className="flex-1 bg-[#198172] text-white py-2 px-4 rounded-md hover:bg-[#156B5D] transition-colors"
              >
                Save Changes
              </button>
              <button
                onClick={handleCancelEdit}
                className="flex-1 bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600 transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50 animate-fadeIn">
          <div className="bg-white/95 backdrop-blur-md rounded-xl shadow-2xl p-6 w-full max-w-md mx-4 transform transition-all duration-300 ease-out animate-slideUp border border-white/20">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-red-600">Confirm Delete</h2>
              <button
                onClick={cancelDelete}
                className="text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full p-1 transition-colors"
                title="Close"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <p className="text-gray-700 mb-6">
              Are you sure you want to delete invoice #{invoiceToDelete?.number}? This action cannot be undone.
            </p>
            <div className="flex gap-3">
              <button
                onClick={confirmDelete}
                className="flex-1 bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition-colors"
              >
                Delete
              </button>
              <button
                onClick={cancelDelete}
                className="flex-1 bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600 transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}