"use client";
import React from "react";
import Image from "next/image";
import { MenuItem } from "../menu/type";
import { Heart, ShoppingCart, Eye, Star } from "lucide-react"; // ✅ Import Star

interface MenuItemCardProps {
  item: MenuItem;
  isLiked: boolean;
  onAddToCart: (item: MenuItem) => void;
  onLike: (item: MenuItem) => void;
  onSee: (item: MenuItem) => void;
}

export default function MenuItemCard({
  item,
  isLiked,
  onAddToCart,
  onLike,
  onSee,
}: MenuItemCardProps) {
  return (
    <div className="bg-white shadow-lg rounded p-4">
      <img
        src={item.image}
        alt={item.title}
        className="w-full h-40 object-cover rounded cursor-pointer"
        onClick={() => onSee(item)} // <-- opens modal
      />

      <h3 className="text-lg font-semibold mt-2">{item.title}</h3>

      {/* ⭐️ Star Rating Display Below Title */}
      <div className="flex items-center space-x-1 mt-1">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star
            key={index}
            className={`w-4 h-4 ${
              item.rating && item.rating >= index + 1
                ? "text-yellow-400"
                : "text-gray-300"
            }`}
            fill={
              item.rating && item.rating >= index + 1 ? "#facc15" : "none"
            }
          />
        ))}
        <span className="text-sm text-gray-600 ml-1">
          ({item.rating ?? "N/A"})
        </span>
      </div>

      <p className="text-sm text-gray-600">{item.description}</p>
      <p className="text-md font-bold mt-2">₹{item.price}</p>

      <div className="flex justify-between mt-4">
        <button
          onClick={() => onAddToCart(item)}
          className="bg-black text-white px-3 py-1 rounded"
        >
          Add to Cart
        </button>
        <button onClick={() => onLike(item)}>
          {isLiked ? "❤️" : "🤍"}
        </button>
      </div>
    </div>
  );
}
