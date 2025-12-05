"use client";
import { useState } from "react";
import Link from "next/link";

export default function SignupMain() {
  const [form, setForm] = useState({
    fullname: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
    role: "patient",
    acceptTerms: false,
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    setError("");
    setSuccess("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { fullname, email, username, password, confirmPassword, acceptTerms } = form;
    if (!fullname || !email || !username || !password || !confirmPassword) {
      setError("All fields are required.");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    if (!acceptTerms) {
      setError("You must accept the terms and conditions.");
      return;
    }
    // Since this is UI-only, show a success message
    setError("");
    setSuccess("Signup successful (UI only). You can now log in.");
  };

  return (
    <div
      className="relative md:min-h-screen flex flex-col md:flex-row "
      style={{
        fontFamily:
          "'Gill Sans MT', 'Gill Sans', 'GillSans', 'Arial', 'sans-serif'",
      }}
    >
      {/* Left Background Section (image/info) */}
      <div
        className="hidden md:block flex-1 relative items-center bg-cover bg-center h-[200px] sm:h-[250px] md:h-auto md:min-h-0"
        style={{ backgroundImage: `url(/images/loginimages/loginimg.png)` }}
      >
        <div className="absolute inset-0 bg-[#0B2443] opacity-50"></div>
        <div className="relative z-10 p-4 sm:p-6 md:p-12 flex flex-col justify-center h-full w-full max-w-xl">
          <h1 className="text-white text-lg sm:text-xl md:text-3xl font-bold mb-2 sm:mb-4 md:mb-10 leading-tight text-center md:text-left">
            JOIN KING'S HOSPITAL LONDON
          </h1>
          <p className="text-white text-xs sm:text-sm md:text-sm mb-4 md:mb-8 text-center md:text-left leading-relaxed">
            Create an account to manage appointments, prescriptions and medical records. This signup page is UI-only and does not persist data.
          </p>
        </div>
      </div>

      {/* Signup Form Section */}
      <div className="w-full md:w-[480px] lg:w-[430px] xl:w-[500px] mx-auto md:mx-0 flex items-center justify-center ">
        <div className="w-full max-w-md bg-white shadow-2xl rounded-xl flex flex-col items-center justify-center px-6 py-6 sm:py-8 md:py-0 md:my-10">
          <div className="hidden sm:block mb-4 sm:mb-6 md:mb-8">
            <img
              src="/images/loginimages/kingslogo.png"
              alt="King's College Hospital London"
              className="h-10 sm:h-11 md:h-12 mb-2 sm:mb-3 md:mb-4"
            />
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold  text-[#0B2443] mb-4 sm:mb-3 md:mb-2">
            SIGN UP
          </h2>
          <form className="w-full px-0 md:px-12" onSubmit={handleSubmit}>
            <div className="mb-3 sm:mb-4">
              <input
                type="text"
                name="fullname"
                value={form.fullname}
                onChange={handleChange}
                placeholder="Full Name"
                className="relative w-full px-3 py-2.5 sm:py-2 border border-[#0B2443] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900 text-sm md:text-base"
                autoComplete="name"
              />
            </div>
            <div className="mb-3 sm:mb-4">
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email"
                className="relative w-full px-3 py-2.5 sm:py-2 border border-[#0B2443] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900 text-sm md:text-base"
                autoComplete="email"
              />
            </div>
            <div className="mb-3 sm:mb-4">
              <input
                type="text"
                name="username"
                value={form.username}
                onChange={handleChange}
                placeholder="Username"
                className="relative w-full px-3 py-2.5 sm:py-2 border border-[#0B2443] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900 text-sm md:text-base"
                autoComplete="username"
              />
            </div>
            <div className="mb-2">
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Password"
                className="w-full px-3 py-2.5 sm:py-2 border border-[#0B2443] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900 text-sm md:text-base"
                autoComplete="new-password"
              />
            </div>
            <div className="mb-3 sm:mb-4">
              <input
                type="password"
                name="confirmPassword"
                value={form.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm Password"
                className="w-full px-3 py-2.5 sm:py-2 border border-[#0B2443] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900 text-sm md:text-base"
                autoComplete="new-password"
              />
            </div>
            <div className="mb-3 sm:mb-4">
              <select
                name="role"
                value={form.role}
                onChange={handleChange}
                className="w-full px-3 py-3 sm:py-3.5 mt-2 border border-[#0B2443] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900 text-sm md:text-base bg-white"
              >
                <option value="patient">Patient</option>
                <option value="doctor">Doctor</option>
                <option value="admin">Admin</option>
                <option value="accountant">Accountant</option>
                <option value="pharmacist">Pharmacist</option>
              </select>
            </div>

            <div className="flex items-center mb-3">
              <input
                id="terms"
                name="acceptTerms"
                type="checkbox"
                checked={form.acceptTerms}
                onChange={handleChange}
                className="h-4 w-4 text-blue-600 border border-gray-300 rounded"
              />
              <label htmlFor="terms" className="ml-2 text-sm text-gray-700">
                I accept the <a href="#" className="text-blue-900 underline">terms and conditions</a>
              </label>
            </div>

            {error && (
              <div className="mb-2 text-red-600 text-lg sm:text-xl font-bold text-center">
                {error}
              </div>
            )}
            {success && (
              <div className="mb-2 text-green-600 text-base font-semibold text-center">
                {success}
              </div>
            )}

            <div className="flex justify-center">
              <button
                type="submit"
                className="w-[180px] sm:w-[200px] bg-[#0B2443] text-white py-2 rounded-md font-semibold text-sm sm:text-base md:text-lg shadow-md hover:bg-blue-800 transition mb-4"
              >
                SIGN UP
              </button>
            </div>
          </form>

          <div className="mb-0 md:mb-8 text-center text-gray-700 text-xs md:text-sm">
            Already have an account?{' '}
            <Link href="/login" className="text-blue-900 font-semibold hover:underline">
              LOGIN
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
