"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { AboutFeatures } from "../data/aboutdata";

export default function AboutSection() {
  return (
    <section className="py-12 px-4 md:px-10 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-stretch gap-8">
        {/* Left images - Single Column */}
        <div className="w-full lg:w-1/2 h-[550px]">
          <Image
            src="/images/exparience.png"
            alt="Family"
            width={600}
            height={400}
            className="rounded-lg w-full h-full object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="w-full lg:w-1/2 h-[400px] flex flex-col justify-between">
          <div>
            <p className="text-red-600 font-semibold mb-2 mt-6">About Us</p>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why We Are The Best</h2>
            <p className="text-gray-600 mb-6">
              Quis autem vel eum iure reprehenderit qui in voluptate velit esse
              quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat
              quo voluptas nulla pariatur.
            </p>

            {/* Features */}
            {AboutFeatures.slice(0, 2).map((feature) => (
              <div key={feature.id} className="flex items-start gap-4 mb-5">
                <div className="bg-red-100 p-3 rounded">
                  <Image src={feature.icon} alt={feature.title} width={32} height={32} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">{feature.title}</h4>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
            <Link href="/about">
          <button className="mt-4 bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition self-start">
            About Us
          </button>
            </Link>
        </div>
      </div>
    </section>
  );
}
