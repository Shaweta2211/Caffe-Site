"use client";
import { useState } from "react";
import FoodCard from "./FoodCard";
import galleryData from "../data/galerydata";

const categories = ["All", "Italian", "Chinese", "Indian", "Snacks", "Fast Food", "Drinks"];

export default function FoodGallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showAll, setShowAll] = useState(false);

  // Filtered items by category
  const filteredItems =
    selectedCategory === "All"
      ? galleryData
      : galleryData.filter((item) => item.category === selectedCategory);

  // Limit displayed items unless showAll is true
  const itemsToShow = showAll ? filteredItems : filteredItems.slice(0, 6);

  return (
    <section className="py-12 px-6 bg-[#fdf8f4]">
      <div className="max-w-7xl mx-auto text-center mb-8">
        <p className="text-red-500 font-medium">Our Gallery</p>
        <h2 className="text-3xl font-bold">Organize Food Gallery</h2>

        {/* Category Filter Buttons */}
        <div className="mt-4 flex flex-wrap justify-center gap-4 text-gray-700 font-medium">
          {categories.map((cat) => (
            <span
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                setShowAll(false); // reset on filter
              }}
              className={`cursor-pointer pb-1 ${
                selectedCategory === cat
                  ? "text-red-600 border-b-2 border-red-600"
                  : "hover:text-red-600"
              }`}
            >
              {cat}
            </span>
          ))}
        </div>
      </div>

      {/* Food Items Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {itemsToShow.map((item) => (
          <FoodCard
            key={item.id}
            title={item.title}
            category={item.category}
            image={item.image}
          />
        ))}
      </div>

      {/* Show More / Less Button */}
      {filteredItems.length > 6 && (
        <div className="mt-10 text-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition"
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
        </div>
      )}
    </section>
  );
}
