"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type GalleryImage = {
  src: string;
  alt: string;
};

type ProductGalleryProps = {
  images: GalleryImage[];
  hideThumbnails?: boolean;
};

export default function ProductGallery({
  images,
  hideThumbnails = false,
}: ProductGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(
    images[0] ?? null
  );

  // Sync selected image whenever the product/gallery changes
  useEffect(() => {
    setSelectedImage(images[0] ?? null);
  }, [images]);

  if (!selectedImage) {
    return (
      <div className="relative aspect-square overflow-hidden rounded-3xl bg-white" />
    );
  }

  return (
    <div>
      {/* MAIN IMAGE */}
      <div className="relative aspect-square overflow-hidden rounded-3xl bg-white">
        <img
    src={selectedImage.src}
    alt={selectedImage.alt}
    className="absolute inset-0 h-full w-full object-contain"
  />
</div>

      {/* THUMBNAILS */}
      {!hideThumbnails && images.length > 1 && (
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
                  unoptimized
                  className="aspect-square h-full w-full object-contain"
                />
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}