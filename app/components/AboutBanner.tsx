"use client";
import Image from "next/image";
import Link from "next/link";

export default function AboutBanner() {
  return (
    <div className="relative h-96 w-full overflow-hidden flex items-center justify-center">
      {/* Background image with blur */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/aboutbanner.jpg"
          alt="Menu Background"
          fill
          className="object-cover blur-[1.5px] scale-105"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Centered heading */}
      <div className="relative z-10 text-center">
        <h1 className="text-white text-5xl md:text-6xl font-bold">About</h1>
      </div>

      {/* Bottom breadcrumb */}
      <div className="absolute bottom-35 z-10 flex gap-2 text-white text-lg">
        <Link href="/" className="hover:underline text-white text-decoration-none">
          Home
        </Link>
        <span>/</span>
        <Link href="/about" className="hover:underline text-white text-decoration-none">
          About
        </Link>
      </div>
    </div>
  );
}
