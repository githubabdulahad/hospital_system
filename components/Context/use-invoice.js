"use client";
import { useContext } from "react";
import { InvoiceContext } from "./invoice-context";

export const useInvoice = () => {
  const context = useContext(InvoiceContext);
  if (!context) {
    throw new Error("useInvoice must be used within an InvoiceProvider");
  }
  return context;
};
