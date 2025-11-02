import { cn } from "@utils/cn";
import React from "react";

export interface ProductGalleryProps {
  images: string[];
  alt?: string;
}

export function ProductGallery({
  images,
  alt = "Product image",
}: ProductGalleryProps) {
  const [idx, setIdx] = React.useState(0);
  const current = images[idx] || images[0];

  return (
    <div className="grid grid-cols-[64px_1fr] gap-4 md:grid-cols-[88px_1fr]">
      {/* Thumbnails */}
      <div className="flex max-h-[420px] flex-col gap-3 overflow-auto">
        {images.map((src, i) => (
          <button
            key={i}
            onClick={() => setIdx(i)}
            className={cn(
              "flex items-center justify-center rounded-xl border p-1",
              i === idx
                ? "border-brand-600"
                : "border-gray-200 hover:border-gray-300"
            )}
            aria-current={i === idx}
          >
            <img
              src={src}
              alt={`${alt} ${i + 1}`}
              className="h-16 w-16 object-contain md:h-20 md:w-20"
            />
          </button>
        ))}
      </div>

      {/* Main image */}
      <div className="flex items-center justify-center rounded-2xl bg-gray-50 p-4 md:p-8">
        <img
          src={current}
          alt={alt}
          className="max-h-[420px] w-auto object-contain"
        />
      </div>
    </div>
  );
}
