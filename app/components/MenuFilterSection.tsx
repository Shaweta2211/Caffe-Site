"use client";

import React from "react";

const categories = ["All Categories", "Perch Fish", "Lobster", "Shrimps", "Red Crab"];

// Define the props type
interface MenuFilterSectionProps {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

export default function MenuFilterSection({
  selectedCategory,
  setSelectedCategory,
}: MenuFilterSectionProps) {
  return (
    <div className="text-center py-10 bg-[#fff9f5]">
      {/* Small Heading */}
      <p className="text-red-600 text-xl font-semibold mb-2">Special Menu</p>

      {/* Main Heading */}
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
        Our Specials Menu
      </h2>

      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-6">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`text-lg font-medium pb-2 transition-all duration-300 border-b-2 ${
              selectedCategory === category
                ? "text-red-600 border-red-600"
                : "text-gray-600 border-transparent hover:text-red-600"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}
