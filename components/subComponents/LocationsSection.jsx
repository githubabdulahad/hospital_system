"use client";

import React from 'react';
import Slider from 'react-slick';
import LocationCard from './LocationCard';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function LocationsSection() {
  const locations = [
    { image: '/images/Locationsectionimg1.png', title: 'Abu Dhabi' },
    { image: '/images/Locationsectionimg2.png', title: 'United Kingdom' },
    { image: '/images/Locationsectionimg3.png', title: 'Dubai' },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
  };

  return (
    <div className="bg-[#0B2443] p-6 rounded-xl text-white h-[596px] flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-6">Our Locations</h2>
      <div className="w-full h-[500px] px-4">
        <Slider {...settings}>
          {locations.map((loc, idx) => (
            <div key={idx}>
              <div className="h-[460px] flex justify-center">
                <LocationCard image={loc.image} title={loc.title} />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
