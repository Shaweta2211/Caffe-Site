"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination } from "swiper/modules";
import { FaQuoteLeft } from "react-icons/fa";

interface Testimonial {
  id: number;
  name: string;
  title: string;
  description: string;
  author: string;
  role: string;
  image: string;
}

// Testimonials data
const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "James Smith",
    title: "List Specifications 2023",
    description:
      "Organizations throughout the World to manage heir IT with our unique approach to technology agement and consultancy solutions. Provide users with priate view and access permissions.",
    author: "Reson Roy",
    role: "Regular Customer",
    image: "/images/1 (3).png",
  },
  {
    id: 2,
    name: "James Smith",
    title: "List Specifications 2023",
    description:
      "Organizations throughout the World to manage heir IT with our uniquee approach to technology agement and consultancy solutions. Provide users with priate view and access permissions.",
    author: "Jason Samona",
    role: "Customer",
    image: "/images/11.png",
  },
  {
    id: 3,
    name: "James Smith",
    title: "List Specifications 2023",
    description:
      "Organizations throughout the World to manage heir IT with our unique approach to technology agement and consultancy solutions. Provide users with priate view and access permissions.",
    author: "Clifford Main",
    role: "Customer",
    image: "/images/12.png",
  },
];

export default function TestimonialSlider() {
  return (
    <section className="py-16 bg-white text-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-center text-red-500 font-medium">Happy Customers</p>
        <h2 className="text-center text-3xl font-bold mb-10">Our Guestbook</h2>

        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          autoplay={{ delay: 4000 }}
          pagination={{ clickable: true }}
          modules={[Autoplay, Pagination]}
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="grid md:grid-cols-2 gap-10 items-center bg-white p-8 rounded-lg shadow-md">
                {/* Left Card */}
                <div className="space-y-6">
                  <FaQuoteLeft className="text-4xl text-red-500" />
                  <h3 className="text-2xl font-bold">
                    {item.name} <br /> {item.title}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                  <p className="font-semibold">
                    {item.author}{" "}
                    <span className="text-sm font-normal text-gray-500">
                      - {item.role}
                    </span>
                  </p>
                </div>

                {/* Right Image */}
                <div className="flex justify-center">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={300}
                    height={300}
                    className="rounded-lg object-cover"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
