// components/SwiperBanner.js
"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export const Banner = () => {
  const slides = [
    {
      title: "Spice Up",
      highlight: "Your Mood",
      subtitle: "Freshly Cooked",
      description: "Dive into flavor with our signature butter chicken, biryani, and garlic naan.",
      image: "/images/first-slider.png",
    },
    {
      title: "Light",
      highlight: "Lunch Bites",
      subtitle: "Midday Cravings",
      description: "Enjoy cheesy sandwiches, crispy fries, and refreshing salads to refuel your day.",
      image: "/images/baner.png",
    },
    {
      title: "Warm",
      highlight: "Comfort Food",
      subtitle: "Evening Indulgence",
      description: "Unwind with our hot soups, saucy pastas, and flaky stuffed parathas.",
      image: "/images/baner1.png",
    },
  ];

  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
      loop={true}
      slidesPerView={1}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="row align-items-center px-5" style={{ backgroundColor: "#fff2ec", minHeight: "700px" }}>
            <div className="col-md-6 text-start py-4">
              <p className="text-danger fw-bold mb-1">{slide.subtitle}</p>
              <h1 className="fw-bold display-5">
                {slide.title} <span className="text-danger text-decoration-underline">{slide.highlight}</span>
              </h1>
              <p className="text-muted my-3">{slide.description}</p>
              <div className="d-flex align-items-center gap-3 mt-3">
                <button className="btn btn-danger px-4 py-2">Order Now</button>
                <button className="btn btn-outline-danger d-flex align-items-center">
                  <i className="bi bi-play-circle-fill me-2 fs-5"></i> Watch Video
                </button>
              </div>
            </div>
            <div className="col-md-6 text-end py-4">
              <img
                src={slide.image}
                alt={slide.highlight}
                className="img-fluid"
                style={{ maxHeight: "500px", objectFit: "contain" }}
              />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

