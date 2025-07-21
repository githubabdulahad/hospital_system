"use client";
import React, { useState, useContext } from "react";
import { SearchContext } from "../../../components/Context/SearchContext";
import { useInvoice } from "../../../components/Context/use-invoice";
import { FaFileInvoiceDollar, FaEye, FaEdit, FaTrash, FaPlus, FaTimes, FaSearch, FaCalendarAlt, FaUser, FaDollarSign } from 'react-icons/fa';
import Link from 'next/link';
import StatCard from "../../../components/compafterlogin/Common/StatCard";
import ViewInvoiceModal from "../../../components/compafterlogin/Accountant/ViewInvoiceModal";
import EditInvoiceModal from "../../../components/compafterlogin/Accountant/EditInvoiceModal";
import DeleteInvoiceModal from "../../../components/compafterlogin/Accountant/DeleteInvoiceModal";

export default function AccManageInvoice() {
  const { search } = useContext(SearchContext);
  const { invoices, updateInvoice, deleteInvoice } = useInvoice();
  const [editingInvoice, setEditingInvoice] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showViewModal, setShowViewModal] = useState(false);
  const [invoiceToDelete, setInvoiceToDelete] = useState(null);
  const [selectedInvoice, setSelectedInvoice] = useState(null);

  // Filter invoices based on search
  const filteredInvoices = invoices.filter(invoice =>
    invoice.title.toLowerCase().includes(search.toLowerCase()) ||
    invoice.patient.toLowerCase().includes(search.toLowerCase()) ||
    invoice.number.toString().includes(search.toLowerCase()) ||
    invoice.status.toLowerCase().includes(search.toLowerCase())
  );

  // Edit functionality
  const handleEdit = (invoice) => {
    setEditingInvoice({ ...invoice });
  };

  const handleSaveEdit = () => {
    updateInvoice(editingInvoice.number, editingInvoice);
    setEditingInvoice(null);
    alert('Invoice updated successfully!');
  };

  const handleCancelEdit = () => {
    setEditingInvoice(null);
  };

  // View functionality
  const handleView = (invoice) => {
    setSelectedInvoice(invoice);
    setShowViewModal(true);
  };

  // Delete functionality
  const handleDelete = (invoice) => {
    setInvoiceToDelete(invoice);
    setShowDeleteModal(true);
  };

  const confirmDelete = () => {
    deleteInvoice(invoiceToDelete.number);
    setShowDeleteModal(false);
    setInvoiceToDelete(null);
    alert('Invoice deleted successfully!');
  };

  const cancelDelete = () => {
    setShowDeleteModal(false);
    setInvoiceToDelete(null);
  };

  const getStatusBadge = (status) => {
    const statusStyles = {
      Paid: "bg-green-100 text-green-800",
      Pending: "bg-yellow-100 text-yellow-800",
      Overdue: "bg-red-100 text-red-800",
      Cancelled: "bg-gray-100 text-gray-800"
    };
    
    return (
      <span className={`px-2 py-1 text-xs font-medium rounded-full ${statusStyles[status] || 'bg-gray-100 text-gray-800'}`}>
        {status}
      </span>
    );
  };

  // Calculate totals
  const totalRevenue = filteredInvoices.reduce((sum, invoice) => sum + (invoice.total || 0), 0);
  const paidInvoices = filteredInvoices.filter(inv => inv.status === 'Paid').length;
  const pendingInvoices = filteredInvoices.filter(inv => inv.status === 'Pending').length;

  const statData = [
    {
      icon: <FaFileInvoiceDollar className="w-5 h-5 text-blue-600" />,  
      stat: filteredInvoices.length,
      label: 'Total Invoices'
    },
    {
      icon: <FaDollarSign className="w-5 h-5 text-green-600" />,
      stat: `$${totalRevenue.toFixed(2)}`,
      label: 'Total Revenue'
    },
    {
      icon: <FaFileInvoiceDollar className="w-5 h-5 text-green-600" />,
      stat: paidInvoices,
      label: 'Paid Invoices'
    },
    {
      icon: <FaFileInvoiceDollar className="w-5 h-5 text-yellow-600" />,
      stat: pendingInvoices,
      label: 'Pending Invoices'
    }
  ]

  return (
    <div className="p-4" style={{ fontFamily: "'Gill Sans MT', 'Gill Sans', 'GillSans', 'Arial', 'sans-serif'" }}>
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center">
          <FaFileInvoiceDollar className="w-7 h-7 text-[#0B2443] mr-3" />
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Invoice Management</h1>
            <p className="text-gray-600 mt-1">Manage and track all patient invoices</p>
          </div>
        </div>
        <Link
          href="/accountant/add-invoice"
          className="bg-[#0B2443] hover:bg-blue-900 text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2 transition-colors shadow-lg"
        >
          <FaPlus className="w-4 h-4" />
          Add Invoice
        </Link>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        {statData.map((stat, index) => (
                  <StatCard icon={stat.icon} stat={stat.stat} label={stat.label} key={index} />
                ))}
      </div>

      {/* Invoices Table */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="py-6 px-4">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Invoice #</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Patient</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredInvoices.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="px-6 py-8 text-center text-gray-500">
                      <FaFileInvoiceDollar className="w-12 h-12 mx-auto text-gray-300 mb-2" />
                      <p>No invoices found.</p>
                    </td>
                  </tr>
                ) : (
                  filteredInvoices.map((invoice) => (
                    <tr key={invoice.number} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">#{invoice.number}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{invoice.title}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <FaUser className="w-4 h-4 text-gray-400 mr-2" />
                          <div className="text-sm text-gray-900">{invoice.patient}</div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <FaCalendarAlt className="w-4 h-4 text-gray-400 mr-2" />
                          <div>
                            <div className="text-sm text-gray-900">{invoice.creationDate}</div>
                            <div className="text-xs text-gray-500">Due: {invoice.dueDate}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">${invoice.total?.toFixed(2) || '0.00'}</div>
                        <div className="text-xs text-gray-500">VAT: {invoice.vat}% | Disc: ${invoice.discount}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {getStatusBadge(invoice.status)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <div className="flex space-x-2">
                          <button
                            onClick={() => handleView(invoice)}
                            className="text-blue-600 hover:text-blue-900 bg-blue-50 hover:bg-blue-100 px-2 py-1 rounded transition-colors"
                            title="View Details"
                          >
                            <FaEye className="w-3 h-3" />
                          </button>
                          <button
                            onClick={() => handleEdit(invoice)}
                            className="text-green-600 hover:text-green-900 bg-green-50 hover:bg-green-100 px-2 py-1 rounded transition-colors"
                            title="Edit"
                          >
                            <FaEdit className="w-3 h-3" />
                          </button>
                          <button
                            onClick={() => handleDelete(invoice)}
                            className="text-red-600 hover:text-red-900 bg-red-50 hover:bg-red-100 px-2 py-1 rounded transition-colors"
                            title="Delete"
                          >
                            <FaTrash className="w-3 h-3" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* View Invoice Modal */}
      {showViewModal && (
        <ViewInvoiceModal getStatusBadge={getStatusBadge} setShowViewModal={setShowViewModal} selectedInvoice={selectedInvoice} />
      )}

      {/* Edit Modal */}
      {editingInvoice && (
        <EditInvoiceModal setEditingInvoice={setEditingInvoice} handleSaveEdit={handleSaveEdit} handleCancelEdit={handleCancelEdit} editingInvoice={editingInvoice} />
      )}

      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <DeleteInvoiceModal cancelDelete={cancelDelete} confirmDelete={confirmDelete} invoiceToDelete={invoiceToDelete} />
      )}
    </div>
  );
}