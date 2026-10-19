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

  return (
    <div>
      {/* MAIN IMAGE */}
      <div className="relative aspect-square overflow-hidden rounded-3xl bg-white">
        <Image
  src={selectedImage.src}
  alt={selectedImage.alt}
  fill
  priority
  unoptimized
  className="object-contain"
/>
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
    </div>
  );
}