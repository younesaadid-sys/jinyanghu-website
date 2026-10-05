"use client";

import { useState } from "react";
import Image from "next/image";

type GalleryImage = {
  src: string;
  alt: string;
};

type ProductGalleryProps = {
  images: GalleryImage[];
};

export default function ProductGallery({ images }: ProductGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [zoom, setZoom] = useState(false);
  const [position, setPosition] = useState({ x: 50, y: 50 });

  const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    setPosition({ x, y });
  };

  return (
    <div>
      {/* MAIN IMAGE */}
      <div
        className="relative aspect-square overflow-hidden rounded-3xl bg-white"
        onMouseEnter={() => setZoom(true)}
        onMouseLeave={() => setZoom(false)}
        onMouseMove={handleMouseMove}
      >
        <Image
          src={selectedImage.src}
          alt={selectedImage.alt}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-contain"
          priority
        />

        {/* AMAZON STYLE ZOOM */}
        {zoom && (
          <div
            className="pointer-events-none absolute inset-0 hidden bg-white bg-no-repeat lg:block"
            style={{
              backgroundImage: `url("${selectedImage.src}")`,
              backgroundPosition: `${position.x}% ${position.y}%`,
              backgroundSize: "200%",
            }}
          />
        )}
      </div>

      {/* THUMBNAILS */}
      <div className="mt-4 grid grid-cols-4 gap-3 sm:grid-cols-7">
        {images.map((image) => {
          const active = selectedImage.src === image.src;

          return (
            <button
              key={image.src}
              type="button"
              onClick={() => setSelectedImage(image)}
              onMouseEnter={() => setSelectedImage(image)}
              className={`overflow-hidden rounded-xl border-2 bg-white transition ${
                active
                  ? "border-orange-500"
                  : "border-zinc-800 hover:border-orange-400"
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={180}
                height={180}
                className="aspect-square h-full w-full object-cover"
              />
            </button>
          );
        })}
      </div>

      <p className="mt-3 hidden text-xs text-zinc-500 lg:block">
        Move your cursor over the image to zoom
      </p>
    </div>
  );
}