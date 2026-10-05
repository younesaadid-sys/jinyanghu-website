"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const banners = [
  "/banner-1.png",
  "/banner-2.jpg",
];

export default function HomeBanner() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-black">
      <div className="relative aspect-[2/1] w-full">
        {banners.map((banner, index) => (
          <Image
            key={banner}
            src={banner}
            alt={`Banner ${index + 1}`}
            fill
            priority={index === 0}
            sizes="100vw"
            className={`object-cover transition-opacity duration-1000 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 gap-2">
        {banners.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setCurrent(index)}
            aria-label={`Banner ${index + 1}`}
            className={`h-2.5 rounded-full transition-all ${
              index === current
                ? "w-8 bg-orange-500"
                : "w-2.5 bg-white/70"
            }`}
          />
        ))}
      </div>
    </section>
  );
}