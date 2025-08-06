"use client";
import Image from "next/image";

interface FoodCardProps {
  title: string;
  category: string;
  image: string;
}

export default function FoodCard({ title, category, image }: FoodCardProps) {
  return (
    <div className="relative group overflow-hidden rounded-md shadow-md h-64 w-full">
      {/* Image */}
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-110"
      />

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="text-white text-center px-4">
          <h3 className="text-lg font-bold">{title}</h3>
          <p className="text-sm">{category}</p>
        </div>
      </div>
    </div>
  );
}
