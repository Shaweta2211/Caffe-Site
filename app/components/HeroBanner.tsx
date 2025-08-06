"use client";
import Image from "next/image";
import Link from "next/link";

export default function HeroBanner() {
  return (
    <section className="relative h-[400px] w-full overflow-hidden flex items-center justify-center text-white text-center">
      
      {/* Background Image with Blur */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/pizza.jpg"
          alt="Pizza Banner"
          fill
          className="object-cover blur-[1px] scale-105"
          priority
        />
        {/* Optional overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Foreground Text Content */}
      <div className="relative z-10 max-w-3xl px-4">
        <p className="text-sm md:text-lg uppercase tracking-wide">
          Call To Action
        </p>
        <h1 className="text-3xl md:text-5xl font-bold mt-2">
          Hire Your Next Candidate On Discate
        </h1>
        <p className="mt-4 text-lg md:text-xl">
          Call Us: +99 698 569 565
        </p>
        <Link href="/menu">
        <button className="mt-6 px-6 py-3 bg-red-600 hover:bg-gray-700 text-white rounded-lg text-lg transition">
          Discover More
        </button>
        </Link>
      </div>
    </section>
  );
}
