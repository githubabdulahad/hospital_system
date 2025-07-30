"use client";
import { useState } from "react";
import Header from "../../components/compafterlogin/Common/Header";
import PatientSidebar from "../../components/compafterlogin/Patient/PatientSidebar";

export default function PatientLayout({ children }) {
const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

const toggleMobileMenu = () => {
  setIsMobileMenuOpen(!isMobileMenuOpen);
};

  // Pass toggle function to Header
  return (
    <div>
      <Header onMobileMenuToggle={toggleMobileMenu} />{" "}
      <main className="relative md:flex">
  <PatientSidebar
    isOpen={isMobileMenuOpen}
  />
  <div
    className="flex-1 p-4 overflow-y-auto"
    style={{ height: "calc(100vh - 120px)" }}
  >
    {children}
  </div>
</main>

    </div>
  );
}
