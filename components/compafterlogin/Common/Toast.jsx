"use client";
import React from "react";
import { FaTimes } from "react-icons/fa";

export default function Toast  ({ message, isVisible, type, onClose })  {
  React.useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  return (
    <div className="fixed top-4 right-4 z-50">
      <div className={`p-4 rounded-lg shadow-lg ${type === 'success' ? 'bg-green-500' : 'bg-red-500'} text-white flex items-center gap-2`}>
        <span>{message}</span>
        <button onClick={onClose} className="ml-2">
          <FaTimes className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};