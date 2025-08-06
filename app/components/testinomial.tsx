"use client";

import React, { useState } from "react";
import Image from "next/image";

const testimonialData = [
  {
    id: 1,
    name: "100% Swiss Quality",
    message:
      "Lorem ipsum dolor consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore dolore magna aliqua",
    image: "/images/1.png",
  },
  {
    id: 2,
    name: "Organic Production",
    message:
      "Lorem ipsum dolor consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore dolore magna aliqua",
    image: "/images/2.png",
  },
  {
    id: 3,
    name: "Food Law Certified",
    message:
      "Lorem ipsum dolor consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore dolore magna aliqua",
    image: "/images/3.png",
  },
  {
    id: 4,
    name: "Food Production",
    message:
      "Lorem ipsum dolor consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore dolore magna aliqua",
    image: "/images/4.png",
  },
];

export default function Testinomial() {
  const [selectedCard, setSelectedCard] = useState<number | null>(null);

  return (
    <div className="max-w-7xl mx-auto py-10 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {testimonialData.map((item) => {
          const isSelected = selectedCard === item.id;

          return (
            <div
              key={item.id}
              onClick={() => setSelectedCard(item.id)}
              className={`rounded-xl text-center px-6 py-8 cursor-pointer transition-all duration-300 group 
                ${isSelected
                  ? "shadow-[0_0_20px_rgba(0,0,0,0.9)] bg-white"
                  : "shadow-md hover:shadow-xl bg-white"}
              `}
            >
              <div className="flex justify-center mb-4">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>

              <h5
                className={`text-lg font-semibold mb-3 transition-colors duration-300 ${
                  isSelected
                    ? "text-red-600"
                    : "text-gray-900 group-hover:text-red-500"
                }`}
              >
                {item.name}
              </h5>

              <p className="text-gray-500 text-sm mb-4">{item.message}</p>

              <span
                className={`text-sm font-medium transition-colors duration-300 ${
                  isSelected
                    ? "text-red-600"
                    : "text-gray-700 group-hover:text-red-500"
                }`}
              >
                ♦ Discover More ♦
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
