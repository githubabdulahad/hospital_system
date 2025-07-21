"use client";

export default function StatCard({icon , stat , label}) {
    return (
          <div className=" backdrop-blur-sm rounded-xl shadow-lg border border-white/20 p-6 text-center hover:scale-105 transition-transform cursor-pointer">
            <div className="w-12 h-12  rounded-full flex items-center justify-center mx-auto mb-3">
              {icon}
            </div>
            <p className="text-2xl font-bold text-[#0B2443] mb-1">{stat}</p>
            <p className="text-sm text-gray-600">{label}</p>
          </div>
    );
}