import React from "react";

const Commonbtn = ({
  children,
  bgColor = "bg-[#0d2847]",
  textColor = "text-white",
  className = "",
  ...props
}) => (
  <button
    className={`px-12 py-3 rounded-lg rounded-tr-none font-semibold shadow ${bgColor} ${textColor} ${className}`}
    {...props}
  >
    {children}
  </button>
);

export default Commonbtn;
