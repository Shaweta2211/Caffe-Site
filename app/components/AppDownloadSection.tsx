"use client";
import Image from "next/image";
import React from "react";

interface AppDownloadSectionProps {
  title: string;
  description: string;
  googlePlayLink: string;
  appStoreLink: string;
  phoneImage1: string;
  phoneImage2: string;
}

export default function AppDownloadSection({
  title,
  description,
  googlePlayLink,
  appStoreLink,
  phoneImage1,
  phoneImage2,
}: AppDownloadSectionProps) {
  return (
    <section className="py-16 px-4 bg-[#fff6f2]">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Text & buttons */}
        <div className="max-w-xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-gray-600 mb-6">{description}</p>
          <div className="flex gap-4">
            <a href={googlePlayLink} target="_blank" rel="noopener noreferrer">
              <Image src="/images/play-store.png" alt="Google Play" width={150} height={50} />
            </a>
            <a href={appStoreLink} target="_blank" rel="noopener noreferrer">
              <Image src="/images/apple.png" alt="App Store" width={150} height={50} />
            </a>
          </div>
        </div>

        {/* Phone mockup images */}
        <div className="flex gap-4">
          <Image
            src={phoneImage1}
            alt="Phone Mockup 1"
            width={200}
            height={400}
            className="rounded-xl shadow-xl"
          />
          <Image
            src={phoneImage2}
            alt="Phone Mockup 2"
            width={200}
            height={400}
            className="rounded-xl shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}
