import React from "react";
import { FaUser } from "react-icons/fa";

export default function GenericCard({
  data,
  hospitalFields = [],
  personalFields = [],
  actions,
}) {
  // Initials for profile icon
  // const initials =
  //   data?.name && typeof data.name === "string"
  //     ? data.name
  //         .split(" ")
  //         .map((n) => n[0])
  //         .join("")
  //         .slice(0, 2)
  //         .toUpperCase()
  //     : null;

  return (
    <div className="bg-[#e2e6ec] rounded-b-2xl shadow-xl border border-[#d6ece7] w-full max-w-full mb-4 overflow-hidden transition-transform duration-200 active:scale-[0.98] animate-fade-in">
      {/* Name/Title */}
      <div className="flex flex-col items-center pt-5 pb-2 px-4 bg-[#C0E6DA] ">
        <div className="w-14 h-14 rounded-full bg-[#C0E6DA]  flex items-center justify-center shadow-md border-2 border-[#0b2443] mb-2">        
          <FaUser className="text-xl text-[#0B2443]" />
        </div>
        <span className="font-semibold text-[#0B2443] text-center truncate w-full" title={data?.name || data?.title}>
          {data?.name || data?.title || "Profile"}
        </span>
      </div>

      <div className="bg-[#e2e6ec]">
      {/* Hospital Info */}
      {hospitalFields.length > 0 && (
        <div className="px-5 py-3 flex flex-col gap-3 w-full">
          {hospitalFields.map((field, idx) => (
            <div
              key={idx}
              className="flex flex-row items-center gap-2 text-[#0b2443] text-[13px] font-semibold w-full"
            >
              {field.icon && <span className="text-[#6e7678]">{field.icon}</span>}
              {/* <span>{field.label}</span> */}
              <span
                className="text-[#0B2443] font-medium truncate max-w-[140px] sm:max-w-[200px]"
                title={data[field.key]}
              >
                {data[field.key] || <span className="text-gray-400">Not specified</span>}
              </span>
            </div>
          ))}
        </div>
      )}

      {/* Divider */}
      <div className="">
        <div className="h-0.5 w-[130px] ml-3 mb-2 bg-[#0b2443]" />
      </div>

      {/* Personal Info */}
      {personalFields.length > 0 && (
        <div className="px-5 pb-2 flex flex-col gap-3 w-full">
          {personalFields.map((field, idx) => (
            <div
              key={idx}
              className="flex flex-row items-center gap-2 text-[#0b2443] text-[13px] font-semibold w-full"
            >
              {field.icon && <span className="text-[#6e7678]">{field.icon}</span>}
              {/* <span>{field.label}</span> */}
              <span
                className="text-[#0B2443] font-medium truncate max-w-[140px] sm:max-w-[200px]"
                title={data[field.key]}
              >
                {data[field.key] || <span className="text-gray-400">Not specified</span>}
              </span>
            </div>
          ))}
        </div>
      )}

      {/* Actions */}
      {actions && actions.length > 0 && (
        <div className="border-t border-[#e0e7ef] bg-[#e2e6ec] px-4 py-3 flex flex-row gap-2 w-full justify-center">
          {actions.map((action, idx) => (
            <button
              key={idx}
              onClick={() => action.onClick(data)}
              className={`flex items-center justify-center rounded-xl text-base font-medium
                ${action.variant === 'outlined'
                  ? `border ${action.color || "border-[#198172] text-[#198172] bg-white"}`
                  : action.color || "text-white bg-[#198172]"}
                p-2 min-w-[44px] min-h-[44px] flex-shrink-0
                active:bg-[#c0e6da] active:scale-95 transition
              `}
              title={action.label}
              type="button"
            >
              {action.icon}
            </button>
          ))}
        </div>
      )}
      </div>
      {/* Fade-in animation keyframes */}
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(16px);}
          to { opacity: 1; transform: translateY(0);}
        }
      `}</style>
    </div>
  );
}