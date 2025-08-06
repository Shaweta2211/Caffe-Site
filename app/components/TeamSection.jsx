"use client";
import { useState } from "react";
import TeamMemberCard from "./TeamMemberCard";

const teamMembers = [
  {
    id: 1,
    name: "Cathy Aenderson",
    role: "Chief Executive",
    image: "/images/1 (1).png",
  },
  {
    id: 2,
    name: "Mike Dooley",
    role: "Executive",
    image: "/images/2 (1).png",
  },
  {
    id: 3,
    name: "Alextina Jimiey",
    role: "Food Inspector",
    image: "/images/3 (1).png",
  },
];

export default function TeamSection() {
  const [activeId, setActiveId] = useState(2);

  return (
    <section className="py-12 bg-white text-center mt-10">
      <h4 className="text-red-500 mb-2">Our Team</h4>
      <h2 className="text-3xl font-bold mb-8">Meet Our Team</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        {teamMembers.map((member) => (
          <div
            key={member.id}
            onClick={() => setActiveId(member.id)}
            className="cursor-pointer"
          >
            <TeamMemberCard
              member={member}
              isActive={member.id === activeId}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
