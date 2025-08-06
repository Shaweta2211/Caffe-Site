"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full" >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/images/logo.png" alt="Logo" width={120} height={50} />
        </Link>

        {/* Hamburger (mobile) */}
        <button
          className="md:hidden text-2xl text-black"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <i className="fas fa-bars"></i>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 items-center">
          <Link href="/" className="text-black no-underline">
            Home
          </Link>
          <Link href="/about" className="text-black no-underline">
            About Us
          </Link>
          <Link href="/menu" className="text-black no-underline">
            Menu
          </Link>
          <Link href="/blog" className="text-black no-underline">
            Blog
          </Link>
          <Link href="/contact" className="text-black no-underline">
            Contact
          </Link>

          <input
            type="search"
            placeholder="Search"
            className="border border-gray-300 rounded px-3 py-1 focus:outline-none"
          />

          <a
            href="tel:+910000000000"
            className="text-black no-underline flex items-center gap-1 px-3"
          >
            <i className="fas fa-phone"></i>
            +91 00-000-000-00
          </a>
        </nav>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-3">
          <Link href="/" className="block text-black no-underline text-5xl">
            Home
          </Link>
          <Link href="/about" className="block text-black no-underline">
            About Us
          </Link>
          <Link href="/menu" className="block text-black no-underline">
            Menu
          </Link>
          <Link href="/blog" className="block text-black no-underline">
            Blog
          </Link>
          <Link href="/contact" className="block text-black no-underline">
            Contact
          </Link>

          <input
            type="search"
            placeholder="Search"
            className="w-full border border-gray-300 rounded px-3 py-1 focus:outline-none"
          />

          <a
            href="tel:+910000000000"
            className="text-black no-underline flex items-center gap-1"
          >
            <i className="fas fa-phone"></i>
            +91 00-000-000-00
          </a>
        </div>
      )}
    </header>
  );
}
