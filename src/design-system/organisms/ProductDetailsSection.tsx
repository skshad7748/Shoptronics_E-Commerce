import { Badge } from "@atoms/Badge";
import { Button } from "@atoms/Button";
import { QuantityStepper } from "@atoms/QuantityStepper";
import { Rating } from "@molecules/Rating";
import React from "react";

export interface ProductDetailsSectionProps {
  title: string;
  brand?: string;
  sku?: string;
  availability?: string;
  price: number;
  oldPrice?: number;
  rating?: number;
  reviews?: number;
  onAddToCart?: (qty: number) => void;
}

export function ProductDetailsSection({
  title,
  brand = "Roco",
  sku = "MP3-12345",
  availability = "In Stock",
  price,
  oldPrice,
  rating = 4,
  reviews = 96,
  onAddToCart,
}: ProductDetailsSectionProps) {
  const [qty, setQty] = React.useState(1);

  return (
    <div className="space-y-4">
      {/* Title + small meta line */}
      <div className="flex items-center justify-between">
        <Badge className="bg-transparent px-0 text-xs text-gray-500">
          Category: Head Phone
        </Badge>
        <div className="text-xs text-gray-400">SKU: {sku}</div>
      </div>

      <h1 className="text-2xl font-semibold text-gray-900 md:text-3xl">
        {title}
      </h1>

      <div className="flex items-center gap-3">
        <Rating value={rating} reviews={reviews} />
        <span className="text-xs text-gray-500">({reviews})</span>
      </div>

      {/* bullets */}
      <ul className="list-inside list-disc space-y-1 text-sm text-gray-600">
        <li>
          Product by: <span className="font-medium text-gray-800">{brand}</span>
        </li>
        <li>
          Availability: <span className="text-green-600">{availability}</span>
        </li>
        <li>24-Months warranty included</li>
        <li>Free delivery on orders over $50</li>
      </ul>

      {/* price row */}
      <div className="flex items-end gap-3">
        <div className="text-2xl font-semibold text-gray-900">
          ${price.toFixed(2)}
        </div>
        {typeof oldPrice === "number" && (
          <div className="pb-1 text-lg text-gray-400 line-through">
            ${oldPrice.toFixed(2)}
          </div>
        )}
      </div>

      {/* actions */}
      <div className="flex flex-wrap items-center gap-3 py-2">
        <QuantityStepper value={qty} onChange={setQty} />
        <Button
          className="bg-[#4F46E5] px-6 text-white hover:bg-[#4338CA]"
          onClick={() => onAddToCart?.(qty)}
        >
          Add to Cart
        </Button>
      </div>

      {/* note */}
      <p className="text-xs text-gray-500">
        N.B: Image is for visual demonstration only; accessories are sold
        separately.
      </p>
    </div>
  );
}
