"use client";
import Image from "next/image";
import { useState } from "react";

const openingHours = [
  { day: "Sunday to Tuesday", time: "09:00 - 06:00" },
  { day: "Friday to Sunday", time: "06:00 - 09:00" },
  { day: "Sunday to Tuesday", time: "09:00 - 06:00" },
  { day: "Monday to Friday", time: "06:00 - 09:00" },
  { day: "Monday to Saturday", time: "06:00 - 09:00" },
];

export default function OpeningTimesSection() {
  return (
    <section className="relative h-[500px] w-full overflow-visible">
      {/* Background image */}
      <Image
        src="/images/dinner.jpg"
        alt="Background"
        layout="fill"
        objectFit="cover"
        className="brightness-50"
      />

      {/* Overlay content */}
      <div className="absolute top-0 left-0 w-full h-full flex flex-col lg:flex-row justify-between items-center px-6 lg:px-24 py-12">
        {/* Left text */}
        <div className="text-white max-w-xl z-10">
          <div className="flex items-center mb-4">
            <div className="w-4 h-4 bg-red-500 rounded-full mr-2"></div>
            <span className="uppercase tracking-wide text-sm text-red-300">Discover</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            We Have Excellent Of Quality <br /> Japanese Food
          </h2>
          <p className="mt-4 text-sm md:text-base text-gray-200">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          </p>
        </div>
      </div>

      {/* Calendar floating card - half inside, half outside bottom */}
      <div className="absolute bottom-[-120px] right-24 z-20 group">
        <div className="relative bg-white shadow-2xl rounded-xl p-8 w-[340px] transition-all duration-500 group-hover:bg-red-100 group-hover:scale-105">
          {/* Hover text overlay */}
          <div className="absolute inset-0 bg-red-500 bg-opacity-80 text-white flex items-center justify-center text-lg font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl z-10">
            Book Your Table Now
          </div>

          {/* Actual calendar content */}
          <div className="relative z-0">
            <p className="text-red-500 font-medium text-center">Opening Times</p>
            <h3 className="text-2xl font-bold text-center mb-4">Check Availability</h3>
            <div className="divide-y">
              {openingHours.map((item, index) => (
                <div key={index} className="flex justify-between py-2 text-sm text-gray-700">
                  <span>{item.day}</span>
                  <span>{item.time}</span>
                </div>
              ))}
            </div>
            <div className="text-center mt-6">
              <p className="font-semibold">Call Us Now</p>
              <p className="text-lg font-bold">+993240-765230</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
