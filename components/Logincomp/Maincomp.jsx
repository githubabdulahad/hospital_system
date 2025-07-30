"use client";
import Commonbtn from "../subComponents/Commonbtn";
import Link from "next/link";
import { useContext, useState } from "react";
import { useRouter } from "next/navigation";
import { UserContext } from "../Context/UserContext";

export default function Maincomp() {
  const router = useRouter();
  const { login } = useContext(UserContext);
  const [form, setForm] = useState({
    username: "",
    password: "",
    role: "patient",
  });
  const [error, setError] = useState("");

  // Dummy users for validation
  const users = [
    { username: "admin", password: "admin123", role: "admin" },
    { username: "doctor", password: "doctor123", role: "doctor" },
    { username: "patient", password: "patient123", role: "patient" },
    { username: "pharmacist", password: "abc123", role: "pharmacist" },
    { username: "accountant", password: "acc123", role: "accountant" },
  ];

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.username || !form.password || !form.role) {
      setError("All fields are required.");
      return;
    }
    // Validate against dummy users
    const found = users.find(
      (u) =>
        u.username === form.username &&
        u.password === form.password &&
        u.role === form.role
    );
    if (!found) {
      setError("Invalid credentials or role.");
      return;
    }
    setError("");
    login(form.username, form.role);
    // Redirect based on role
    if (form.role === "admin") router.push("/admin/dashboard");
    else if (form.role === "doctor") router.push("/doctor/dashboard");
    else if (form.role === "pharmacist") router.push("/pharmacist/dashboard");
    else if (form.role === "accountant") router.push("/accountant/dashboard");
    else router.push("/patient/dashboard");
  };

  return (
    <div
      className="relative md:min-h-screen flex flex-col md:flex-row "
      style={{
        fontFamily:
          "'Gill Sans MT', 'Gill Sans', 'GillSans', 'Arial', 'sans-serif'",
      }}
    >
      {/* Mobile top Image */}
      <div
        className="block md:hidden relative bg-cover bg-center h-[200px] w-full"
        style={{ backgroundImage: `url(/images/loginimages/loginimg.png)` }}
      >
        <div className="absolute inset-0 bg-[#0B2443] opacity-50"></div>
        <div className="relative z-10 p-4 w-full">
          <h1 className="text-white text-xs font-bold mb-2 leading-tight text-center">
            WELCOME TO KING'S HOSPITAL LONDON
          </h1>
          <p className="text-white text-xs sm:text-sm md:text-sm mb-4 md:mb-8 text-left md:text-left leading-relaxed">
            King's College Hospital London uses Cerner Health to provide a
            secure username and password used to access your patient record
            information. Use this account to sign in whenever you see the Cerner
            Health logo. If you don't own or control the computer you're using,
            turn on "private browsing" to protect your personal health
            information.
          </p>
          <Link href='/' className="flex justify-center md:justify-start">
            <Commonbtn
              bgColor="bg-[#C0E6DA]"
              textColor="text-[#000000]"
              className="w-auto md:w-[230px]"
            >
              Back To Home
            </Commonbtn>
          </Link>
        </div>
      </div>

      {/* Left Background Section */}
      <div
        className="hidden md:block flex-1 relative items-center bg-cover bg-center h-[200px] sm:h-[250px] md:h-auto md:min-h-0"
        style={{ backgroundImage: `url(/images/loginimages/loginimg.png)` }}
      >
        <div className="absolute inset-0 bg-[#0B2443] opacity-50"></div>
        <div className="relative z-10 p-4 sm:p-6 md:p-12 flex flex-col justify-center h-full w-full max-w-xl">
          <h1 className="text-white text-lg sm:text-xl md:text-3xl font-bold mb-2 sm:mb-4 md:mb-10 leading-tight text-center md:text-left">
            WELCOME TO KING'S HOSPITAL LONDON
          </h1>
          <div
            className="block sm:block md:block italic text-sm sm:text-base md:text-lg text-white mb-2 text-center md:text-left"
            style={{ fontFamily: "'EB Garamond', Garamond, serif" }}
          >
            Secure health identity provided by:
          </div>
          <div className="flex justify-center md:justify-start items-center mb-2">
            <img
              src="/images/loginimages/logo.svg"
              alt="CernerHealth"
              className="h-4 sm:h-5 md:h-6 mr-0 md:mr-2 rounded bg-[#0B2443] opacity-50"
            />
          </div>
          <p className="text-white text-xs sm:text-sm md:text-sm mb-4 md:mb-8 text-center md:text-left leading-relaxed">
            King's College Hospital London uses Cerner Health to provide a
            secure username and password used to access your patient record
            information. Use this account to sign in whenever you see the Cerner
            Health logo. If you don't own or control the computer you're using,
            turn on "private browsing" to protect your personal health
            information.
          </p>
          <Link href='/' className="flex justify-center md:justify-start">
            <Commonbtn
              bgColor="bg-[#C0E6DA]"
              textColor="text-[#000000]"
              className="w-auto md:w-[230px]"
            >
              Back To Home
            </Commonbtn>
          </Link>
        </div>
      </div>

      {/* Login Form Section */}
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
            LOGIN
          </h2>
          <form className="w-full px-0 md:px-12" onSubmit={handleSubmit}>
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
                autoComplete="current-password"
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
            <div className="mb-3 sm:mb-4 text-center">
              <a
                href="#"
                className="text-[#0B2443] text-xs md:text-sm hover:underline font-medium"
              >
                Forget Password?
              </a>
            </div>
            {error && (
              <div className="mb-2 text-red-600 text-lg sm:text-xl font-bold text-center">
                {error}
              </div>
            )}
            <button
              type="submit"
              className="w-[180px] sm:w-[200px] ml-24 sm:ml-20 md:ml-12 bg-[#0B2443] text-white py-2 rounded-md font-semibold text-sm sm:text-base md:text-lg shadow-md hover:bg-blue-800 transition mb-4"
            >
              LOGIN
            </button>
          </form>
          <div className="mb-0 md:mb-8 text-center text-gray-700 text-xs md:text-sm">
            Don't have an account?{" "}
            <Link
              href="/"
              className="text-blue-900 font-semibold hover:underline"
            >
              SIGN UP
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}