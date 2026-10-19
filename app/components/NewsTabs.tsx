"use client";

import { useState } from "react";

type NewsItem = {
  id: number;
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  content: string;
};

type NewsTabsProps = {
  news: NewsItem[];
  locale: string;
};

const categories = [
  "Industry News",
  "Company News",
  "Technical Information",
];

export default function NewsTabs({
  news,
  locale,
}: NewsTabsProps) {
  const [activeCategory, setActiveCategory] =
    useState("Industry News");

  const visibleNews = news
    .filter((item) => item.category === activeCategory)
    .slice(0, 3);

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1500px] px-6 py-16">
        {/* TITLE */}
        <div className="mb-8 text-center">
          <p className="text-sm font-bold uppercase tracking-wider text-orange-500">
            News & Information
          </p>

          <h2 className="mt-2 text-3xl font-black text-zinc-900">
            Latest Updates
          </h2>

          <p className="mt-3 text-zinc-500">
            Explore our latest industry news, company updates
            and technical information.
          </p>
        </div>

        {/* TABS */}
        <div className="mb-10 flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-6 py-3 text-sm font-bold transition ${
                activeCategory === category
                  ? "bg-orange-500 text-white shadow-md"
                  : "border border-zinc-200 bg-white text-zinc-600 hover:border-orange-500 hover:text-orange-500"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* NEWS CARDS */}
        <div className="grid gap-8 md:grid-cols-3">
          {visibleNews.map((item) => (
            <a
              key={item.id}
              href={`/${locale}/news/${item.slug}`}
              className="group flex min-h-[300px] flex-col rounded-2xl border border-zinc-200 bg-zinc-50 p-6 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-4 flex items-start justify-between gap-4">
                <span className="text-sm font-bold uppercase tracking-wider text-orange-500">
                  {item.category}
                </span>

                <span className="shrink-0 text-xs text-zinc-400">
                  {item.date}
                </span>
              </div>

              <h3 className="text-xl font-black leading-7 text-zinc-900 transition group-hover:text-orange-500">
                {item.title}
              </h3>

              <p className="mt-4 line-clamp-4 text-sm leading-6 text-zinc-600">
                {item.excerpt}
              </p>

              <div className="mt-auto pt-6 font-bold text-orange-500">
                Read More →
              </div>
            </a>
          ))}
        </div>

        {visibleNews.length === 0 && (
          <div className="py-12 text-center text-zinc-500">
            No articles available in this category.
          </div>
        )}
      </div>
    </section>
  );
}