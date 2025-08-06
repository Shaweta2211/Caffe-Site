"use client";

import React, { useState } from "react";
import MenuItemCard from "./MenuItemCard";
import menuData from "../data/menudata";
import Modal from "./Modal";
import { MenuItem } from "../menu/type";

const categories = [
  "All Categories",
  "Indian",
  "Chinese",
  "Italian",
  "Fast Food",
  "Snacks",
];


export default function MenuGrid() {
  const [showAll, setShowAll] = useState(false);
  const [likedItems, setLikedItems] = useState<number[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null); // for Modal

  const filteredItems =
    selectedCategory === "All Categories"
      ? menuData
      : menuData.filter((item) => item.category === selectedCategory);

  const visibleItems = showAll ? filteredItems : filteredItems.slice(0, 6);

  const handleAddToCart = (item: MenuItem) => {
    console.log("Add to cart:", item);
  };

  const handleLike = (item: MenuItem) => {
    setLikedItems((prev) =>
      prev.includes(item.id)
        ? prev.filter((id) => id !== item.id)
        : [...prev, item.id]
    );
  };

  const handleSee = (item: MenuItem) => {
    setSelectedItem(item); // Open modal
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header Section */}
      <div className="text-center mb-8">
        <p className="text-red-500 font-medium text-lg">Special Menu</p>
        <h2 className="text-4xl font-bold text-gray-900 mt-1">
          Our Specials Menu
        </h2>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-16">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`text-lg font-medium pb-1 border-b-2 transition ${
              selectedCategory === category
                ? "text-red-500 border-red-500"
                : "text-gray-600 border-transparent hover:text-red-500"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {visibleItems.map((item) => (
          <MenuItemCard
            key={item.id}
            item={item}
            isLiked={likedItems.includes(item.id)}
            onAddToCart={handleAddToCart}
            onLike={handleLike}
            onSee={handleSee} // This opens the modal
          />
        ))}
      </div>

      {/* Show More Button */}
      {filteredItems.length > 6 && (
        <div className="flex justify-center mt-10">
          <button
            onClick={() => setShowAll((prev) => !prev)}
            className="px-6 py-2 text-white bg-black hover:bg-gray-800 transition rounded"
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
        </div>
      )}

      {/* Modal */}
      {selectedItem && (
        <Modal item={selectedItem} onClose={() => setSelectedItem(null)} />
      )}
    </div>
  );
}
