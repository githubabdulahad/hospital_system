"use client";
import React, { createContext, useState } from "react";

export const InvoiceContext = createContext();

const demoInvoices = [
  {
    number: 79599,
    title: "Consultation Fee",
    patient: "John Doe",
    creationDate: "2025-07-09",
    dueDate: "2025-07-15",
    vat: 5,
    discount: 50,
    status: "Paid",
    entries: [
      { description: "General Consultation", amount: 150, service: "General Consultation" }
    ],
    notes: "Initial consultation for chest pain",
    subtotal: 150,
    total: 157.5
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
    entries: [
      { description: "Blood Test", amount: 75, service: "Laboratory Tests" },
      { description: "Urine Analysis", amount: 50, service: "Laboratory Tests" }
    ],
    notes: "Routine health checkup",
    subtotal: 125,
    total: 137.5
  }
];

export const InvoiceProvider = ({ children }) => {
  const [invoices, setInvoices] = useState(demoInvoices);

  const addInvoice = (invoice) => {
    setInvoices((prev) => [invoice, ...prev]);
  };

  const updateInvoice = (invoiceNumber, updatedInvoice) => {
    setInvoices((prev) =>
      prev.map((inv) =>
        inv.number === invoiceNumber ? { ...inv, ...updatedInvoice } : inv
      )
    );
  };

  const deleteInvoice = (invoiceNumber) => {
    setInvoices((prev) => prev.filter((inv) => inv.number !== invoiceNumber));
  };

  const getInvoiceByNumber = (invoiceNumber) => {
    return invoices.find((inv) => inv.number === invoiceNumber);
  };

  return (
    <InvoiceContext.Provider
      value={{
        invoices,
        addInvoice,
        updateInvoice,
        deleteInvoice,
        getInvoiceByNumber,
      }}
    >
      {children}
    </InvoiceContext.Provider>
  );
};
