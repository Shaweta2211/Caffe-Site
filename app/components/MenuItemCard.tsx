"use client";

import React from "react";
import { MenuItem } from "../menu/type";
import Image from "next/image";
import { Heart, ShoppingCart, Eye } from "lucide-react";
import { toast } from "react-hot-toast";

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
  const handleAddToCart = async () => {
    try {
      onAddToCart(item);
      toast.success("✅ Added to cart!");
    } catch (error) {
      toast.error("❌ Failed to add to cart.");
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300">
      {/* ✅ Full-width image with fill */}
      <div className="relative w-full h-48">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover w-full h-full"
        />
      </div>

      {/* ✅ Text and actions */}
      <div className="p-4">
        <h3 className="text-lg font-bold">{item.title}</h3>
        <p className="text-gray-600 text-sm mt-1">{item.description}</p>
        <div className="flex items-center justify-between mt-4">
          <span className="text-lg font-semibold text-red-500">
            ₹{item.price}
          </span>
          <div className="flex items-center gap-2">
            <button onClick={() => onLike(item)}>
              <Heart color={isLiked ? "red" : "gray"}
                fill={isLiked ? "red" : "none"}        
                className="cursor-pointer" />
            </button>
            <button onClick={() => onSee(item)}>
              <Eye />
            </button>
            <button onClick={handleAddToCart}>
              <ShoppingCart />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
