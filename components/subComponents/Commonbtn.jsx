import React from "react";

const Commonbtn = ({
  children,
  bgColor = "bg-[#0d2847]",
  textColor = "text-white",
  className = "",
  ...props
}) => (
  <button
    className={`px-6 sm:px-8 md:px-12 py-2 sm:py-2.5 md:py-3 rounded-lg rounded-tr-none font-semibold shadow text-sm sm:text-base ${bgColor} ${textColor} ${className}`}
    {...props}
  >
    {children}
  </button>
);

export default Commonbtn;
