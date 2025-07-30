"use client";

export default function StatCard({ icon, stat, label }) {
  return (
    <div className="backdrop-blur-sm rounded-xl shadow-xl border border-white/20 p-4 md:p-5 text-center hover:scale-105 transition-transform cursor-pointer">
      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center mx-auto mb-2 md:mb-3">
        {icon}
      </div>
      <p className="text-xl md:text-2xl font-bold text-[#0B2443] mb-1">{stat}</p>
      <p className="text-xs md:text-sm text-gray-600">{label}</p>
    </div>
  );
}