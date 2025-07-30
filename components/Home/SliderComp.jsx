"use client";

import React, { useState, useEffect } from "react";
import { FaRobot, FaStethoscope, FaXRay, FaUserMd } from "react-icons/fa";
import Link from "next/link";
import Commonbtn from "../subComponents/Commonbtn";

const slides = ["/images/Sliderimage.png", "/images/Sliderimage2.jpg", "/images/Sliderimage3.jpg"];

const features = [
    {
        icon: <FaRobot size={24} className="bg-blue-950 p-1 mr-2 rounded"/>,
        title: "Advance Robotic Surgery",
    },
    {
        icon: <FaStethoscope size={24} className="bg-blue-950 p-1 mr-2 rounded"/>,
        title: "World-Class Services",
    },
    {
        icon: <FaXRay size={24} className="bg-blue-950 p-1 mr-2 rounded"/>,
        title: "Advanced Technologies",
    },
    {
        icon: <FaUserMd size={24} className="bg-blue-950 p-1 mr-2 rounded"/>,
        title: "Family Medicine",
    },
];

const SliderComp = () => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 4000); // Change slide every 4 seconds
        return () => clearInterval(interval);
    }, []);

    const getObjectPosition = () => {
        if (slides[current] === "/images/Sliderimage.png") return "center 0%";
        if (slides[current] === "/images/Sliderimage2.jpg") return "center 0%";
        if (slides[current] === "/images/Sliderimage3.jpg") return "center 30%";
        return "center";
    };

    return (
        <div className="relative h-[300px] sm:h-[400px] md:h-[520px] overflow-hidden rounded-none mb-8">
            {/* Slide */}
            <div className="h-full overflow-hidden relative">
                {slides.map((slide, idx) => (
                    <img
                        key={idx}
                        src={slide}
                        alt={`Slide ${idx}`}
                        style={{
                            objectPosition: getObjectPosition(),
                        }}
                        className={`
        w-full h-full object-cover absolute top-0 left-0 transition-transform duration-700 ease-in-out
        ${idx === current ? "translate-x-0 z-10 opacity-100" : "translate-x-full z-0 opacity-0"}
      `}
                    />
                ))}
            </div>

            {/* Mobile Overlayed Content */}
            <div className="absolute inset-0 flex flex-col  justify-center place-items-start text-center -mt-28 px-5 z-10  md:hidden">
                <div
                    className="text-[#0B2443] text-sm font-light italic drop-shadow-lg"
                    style={{ fontFamily: "'EB Garamond', Garamond, serif" }}
                >
                    Welcome to Kings College Hospital London
                </div>
                <div
                    className="text-[#0B2443] text-xl font-bold leading-tight mb-2 drop-shadow-lg"
                    style={{ fontFamily: "'Gill Sans MT', 'Gill Sans', 'GillSans', 'Arial', 'sans-serif'" }}
                >
                    We Take Care Our <br /> Patient Health
                </div>
                <div className="ml-4" style={{ fontFamily: "'Gill Sans MT', 'Gill Sans', 'GillSans', 'Arial', 'sans-serif'" }}>
                    <Link href="/appointment">
                        <Commonbtn bgColor="bg-[#0d2847]" textColor="text-white" className="border-2 border-[#0d2847] px-4 py-2 text-sm">
                            Appointment
                        </Commonbtn>
                     </Link>
                    {/*<Commonbtn
                        bgColor="bg-[#c0e6da]"
                        textColor="text-[#0d2847]"
                        className="border-2 border-[#c0e6da] px-4 py-2 text-sm"
                    >
                        My Chart
                    </Commonbtn> */}
                </div>
            </div>

            {/* Desktop Overlayed Content */}
            <div className="absolute -top-10 left-12 h-full flex-col justify-center pl-16 z-10 hidden md:flex">
                <div
                    className="text-[#2e6fae] text-lg mb-2 font-light italic"
                    style={{ fontFamily: "'EB Garamond', Garamond, serif" }}
                >
                    Welcome to Kings College Hospital London
                </div>
                <div
                    className="text-[#0d2847] sm:text-2xl md:text-4xl font-bold leading-tight mb-6"
                    style={{ fontFamily: "'Gill Sans MT', 'Gill Sans', 'GillSans', 'Arial', 'sans-serif'" }}
                >
                    We Take Care Our <br /> Patient Health
                </div>
                <div className="flex gap-4 mb-8 sm:flex-col md:flex-row" style={{ fontFamily: "'Gill Sans MT', 'Gill Sans', 'GillSans', 'Arial', 'sans-serif'" }}>
                    <Link href="/appointment">
                        <Commonbtn bgColor="bg-[#0d2847]" textColor="text-white" className="border-2 border-[#0d2847]">
                            Appointment
                        </Commonbtn>
                    </Link>
                    <Commonbtn
                        bgColor=""
                        textColor="text-[#0d2847]"
                        className="border-2 border-[#0d2847] px-2 text-sm sm:px-4 sm:text-base md:px-8 lg:px-12"
                    >
                        My Chart
                    </Commonbtn>
                </div>
            </div>

            {/* Mobile Feature Bar */}
            <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 w-[95%] bg-[#2E4A75]/90 rounded-lg px-2 py-2 z-10 shadow-lg md:hidden">
                <div className="grid grid-cols-2 gap-3">
                    {features.map((feature, idx) => (
                        <div key={idx} className="flex flex-row items-center text-left text-white">
                            <div className="">{feature.icon}</div>
                            <div className="text-xs  text-center leading-tight">{feature.title}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Desktop Feature Bar */}
            <div
                className="absolute left-1/2 bottom-10 transform -translate-x-1/2 w-[95vw] max-w-2xl sm:max-w-3xl md:max-w-4xl lg:max-w-5xl bg-[#2E4A75]/80 rounded-lg flex-wrap justify-between items-center px-4 sm:px-7 py-4 sm:py-6 z-10 shadow-lg hidden md:flex"
                style={{ fontFamily: "'Gill Sans MT', 'Gill Sans', 'GillSans', 'Arial', 'sans-serif'" }}
            >
                {features.map((feature, idx) => (
                    <div key={idx} className="flex flex-row items-center text-white flex-1 min-w-[120px] justify-center mb-2 sm:mb-0">
                        <div className="mr-2">
                            <FaRobot size={36} className="bg-blue-950 p-2 rounded" style={{ display: idx === 0 ? 'block' : 'none' }} />
                            <FaStethoscope size={36} className="bg-blue-950 p-2 rounded" style={{ display: idx === 1 ? 'block' : 'none' }} />
                            <FaXRay size={36} className="bg-blue-950 p-2 rounded" style={{ display: idx === 2 ? 'block' : 'none' }} />
                            <FaUserMd size={36} className="bg-blue-950 p-2 rounded" style={{ display: idx === 3 ? 'block' : 'none' }} />
                        </div>
                        <div className="text-xs sm:text-sm font-semibold text-center">{feature.title}</div>
                    </div>
                ))}
            </div>

            {/* Desktop Dots */}
            <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2  space-x-2.5 z-20 hidden md:flex">
                {slides.map((_, index) => (
                    <div
                        key={index}
                        onClick={() => setCurrent(index)}
                        className={`w-3 h-3 rounded-full cursor-pointer ${
                            index === current ? "bg-blue-900" : "bg-white"
                        }`}
                    ></div>
                ))}
            </div>

            {/* Mobile Dots */}
            <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 flex space-x-1 z-20 md:hidden">
                {slides.map((_, index) => (
                    <div
                        key={index}
                        onClick={() => setCurrent(index)}
                        className={`w-3 h-3 rounded-full cursor-pointer ${
                            index === current ? "bg-blue-900" : "bg-white"
                        }`}
                    ></div>
                ))}
            </div>
        </div>
    );
};

export default SliderComp;
