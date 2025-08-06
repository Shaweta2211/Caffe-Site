"use client";
import Image from "next/image";

export default function TeamMemberCard({ member, isActive }) {
  return (
    <div className="rounded-lg overflow-hidden bg-white shadow-md transform transition-transform hover:scale-105 mt-8">
      <div className="w-full h-72 relative">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <div className="py-4 border-t text-center">
        <h3 className="font-bold text-lg">{member.name}</h3>
        <p className="text-gray-500">{member.role}</p>
        <div
          className={`h-1 mt-3 w-20 mx-auto transition-all duration-300 ${
            isActive ? "bg-red-500" : "bg-black"
          }`}
        ></div>
      </div>
    </div>
  );
}
