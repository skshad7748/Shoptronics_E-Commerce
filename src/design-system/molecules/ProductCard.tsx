import { Button } from "@atoms/Button";
import { IconEye, IconHeart } from "@atoms/Icon";
import { Rating } from "@molecules/Rating";
import { cn } from "@utils/cn";
import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../store/cart";

export interface ProductCardProps {
  image: string;
  title: string;
  price: number;
  oldPrice?: number;
  rating?: number;
  reviews?: number;
  slug?: string;
  onAddToCart?: () => void;
  onQuickView?: () => void;
  onWishlist?: () => void;
}

export function ProductCard({
  image,
  title,
  price,
  oldPrice,
  rating = 4,
  reviews = 96,
  slug = "",
  onQuickView,
  onWishlist,
}: ProductCardProps) {
  const [hovered, setHovered] = React.useState(false);
  const { addItem } = useCart();

  const handleAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    addItem({ id: slug || title, title, price, image }, 1);
  };

  const handleQuick = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    onQuickView?.();
  };

  const handleWish = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    onWishlist?.();
  };

  const CardLink = slug ? Link : (props: any) => <a {...props} />;

  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-gray-200 bg-white transition-shadow",
        hovered ? "shadow-md" : "shadow-sm"
      )}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* image area */}
      <div className="relative flex h-56 items-center justify-center bg-white p-6">
        {/* Only the image is a link */}
        <CardLink to={slug ? `/product/${slug}` : undefined} className="block">
          <img
            src={image}
            alt={title}
            className="max-h-full max-w-full object-contain"
            loading="lazy"
          />
        </CardLink>

        {/* hover toolbar (OUTSIDE the Link) */}
        <div
          className={cn(
            "pointer-events-none absolute inset-x-0 bottom-3 flex items-center justify-center gap-2 opacity-0 transition-opacity",
            "group-hover:pointer-events-auto group-hover:opacity-100"
          )}
        >
          <button
            aria-label="Quick view"
            className="rounded-lg bg-white/90 p-2 shadow hover:bg-white"
            onClick={handleQuick}
          >
            <IconEye />
          </button>

          <Button
            onClick={handleAdd}
            className="rounded-lg bg-[#4F46E5] px-3 py-2 text-white hover:bg-[#4338CA]"
            size="sm"
          >
            Add to Cart
          </Button>

          <button
            aria-label="Wishlist"
            className="rounded-lg bg-white/90 p-2 shadow hover:bg-white"
            onClick={handleWish}
          >
            <IconHeart />
          </button>
        </div>
      </div>

      {/* info area */}
      <div className="space-y-1 px-4 pb-4 pt-3">
        <Rating value={rating} reviews={reviews} />
        <CardLink to={slug ? `/product/${slug}` : undefined}>
          <h3 className="truncate text-sm text-gray-800 hover:text-brand-600">
            {title}
          </h3>
        </CardLink>
        <div className="flex items-center gap-2">
          <span className="text-sm font-semibold text-gray-900">
            ${price.toFixed(2)}
          </span>
          {typeof oldPrice === "number" && (
            <span className="text-sm text-gray-400 line-through">
              ${oldPrice.toFixed(2)}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
