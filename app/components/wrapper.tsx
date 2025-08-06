"use client";
import React from "react";

interface WrapperProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
  placeholderText?: string;
  buttonIcon?: string;
}

export default function Wrapper({
  title,
  subtitle,
  backgroundImage,
  placeholderText = "Enter Your Email",
  buttonIcon = "fa-paper-plane",
}: WrapperProps) {
  return (
    <div className="relative w-full h-[300px] overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center blur-sm brightness-75 z-0"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>

      <div className="relative z-10 flex flex-col md:flex-row justify-around items-center h-full px-4 text-center md:text-left">
        <div>
          <h1 className="text-white text-4xl md:text-6xl font-extrabold mb-4">
            {title}
          </h1>
          <h3 className="text-white text-xl md:text-2xl">{subtitle}</h3>
        </div>

        <div className="flex mt-6 md:mt-0">
          <input
            type="text"
            placeholder={placeholderText}
            className="text-black bg-white font-extrabold px-5 py-3 border border-gray-300 rounded-l-md focus:outline-none"
          />
          <button className="text-white bg-red-600 px-5 py-3 border border-gray-300 border-l-0 rounded-r-md hover:bg-red-700">
            <i className={`fa-solid ${buttonIcon}`}></i>
          </button>
        </div>
      </div>
    </div>
  );
}
