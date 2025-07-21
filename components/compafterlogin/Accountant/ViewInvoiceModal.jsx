'use client';
import { FaFileInvoiceDollar, FaTimes } from 'react-icons/fa';

export default function ViewInvoiceModal({ selectedInvoice, setShowViewModal , getStatusBadge }) {
    return(
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
                  <div className="bg-white rounded-xl shadow-2xl max-w-3xl w-full mx-4 max-h-[90vh] overflow-y-auto">
                    <div className="p-8">
                      <div className="flex items-center justify-between mb-4">
                        <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                          <FaFileInvoiceDollar className="w-6 h-6 text-blue-500" />
                          Invoice Details
                        </h2>
                        <button
                          onClick={() => setShowViewModal(false)}
                          className="text-gray-400 hover:text-gray-600"
                        >
                          <FaTimes className="w-6 h-6" />
                        </button>
                      </div>
        
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div className="bg-blue-50 rounded-lg p-4">
                          <h3 className="font-semibold text-gray-700 mb-3">Invoice Information</h3>
                          <div className="space-y-2 text-sm">
                            <div><span className="font-medium">Number:</span> #{selectedInvoice.number}</div>
                            <div><span className="font-medium">Title:</span> {selectedInvoice.title}</div>
                            <div><span className="font-medium">Patient:</span> {selectedInvoice.patient}</div>
                            <div><span className="font-medium">Status:</span> {getStatusBadge(selectedInvoice.status)}</div>
                          </div>
                        </div>
        
                        <div className="bg-green-50 rounded-lg p-4">
                          <h3 className="font-semibold text-gray-700 mb-3">Payment Details</h3>
                          <div className="space-y-2 text-sm">
                            <div><span className="font-medium">Created:</span> {selectedInvoice.creationDate}</div>
                            <div><span className="font-medium">Due:</span> {selectedInvoice.dueDate}</div>
                            <div><span className="font-medium">VAT:</span> {selectedInvoice.vat}%</div>
                            <div><span className="font-medium">Discount:</span> ${selectedInvoice.discount}</div>
                            <div className="pt-2 border-t">
                              <span className="font-bold text-lg">Total: ${selectedInvoice.total?.toFixed(2)}</span>
                            </div>
                          </div>
                        </div>
                      </div>
        
                      {selectedInvoice.entries && (
                        <div className="mb-4">
                          <h3 className="font-semibold text-gray-700 mb-3">Services</h3>
                          <div className="bg-gray-50 rounded-lg overflow-hidden">
                            <table className="w-full">
                              <thead className="bg-gray-100">
                                <tr>
                                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-500">Service</th>
                                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-500">Description</th>
                                  <th className="px-4 py-2 text-right text-xs font-medium text-gray-500">Amount</th>
                                </tr>
                              </thead>
                              <tbody>
                                {selectedInvoice.entries.map((entry, index) => (
                                  <tr key={index} className="border-t">
                                    <td className="px-4 py-2 text-sm">{entry.service}</td>
                                    <td className="px-4 py-2 text-sm">{entry.description}</td>
                                    <td className="px-4 py-2 text-sm text-right">${entry.amount}</td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      )}
        
                      {selectedInvoice.notes && (
                        <div className="mb-1">
                          <h3 className="font-semibold text-gray-700 mb-3">Notes</h3>
                          <div className="bg-gray-50 rounded-lg p-4">
                            <p className="text-gray-700">{selectedInvoice.notes}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
    )
}