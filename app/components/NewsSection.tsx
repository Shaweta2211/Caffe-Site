
"use client";

import NewsCard from "./NewsCard";
import { newsdata } from "../data/newsdata";

export default function NewsSection() {
  return (
    <section className="py-12 px-4 md:px-10 bg-blue-50">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-red-600 font-semibold">News & Blog</p>
        <h2 className="text-3xl font-bold mt-1">Latest News</h2>
      </div>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {newsdata.map((item) => (
          <NewsCard
            key={item.id}
            title={item.title}
            date={item.date}
            image={item.image}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
}
