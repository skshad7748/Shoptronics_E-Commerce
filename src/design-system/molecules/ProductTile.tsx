import { IconCart } from "@atoms/Icon";
import { Rating } from "@molecules/Rating";
import { cn } from "@utils/cn";
import { Link } from "react-router-dom";

export interface ProductTileProps {
  image: string;
  category?: string;
  title: string;
  price: number;
  oldPrice?: number;
  rating?: number;
  reviews?: number;
  showCta?: boolean;
  onAddToCart?: () => void;
  slug?: string;
}

export function ProductTile({
  image,
  category = "Head Phone",
  title,
  price,
  oldPrice = 29.99,
  rating = 4,
  reviews = 96,
  showCta = false,
  onAddToCart,
  slug,
}: ProductTileProps) {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white">
      {/* image area (light gray like mock) */}
      <div className="flex h-72 items-center justify-center bg-gray-50">
        {slug ? (
          <Link
            to={`/product/${slug}`}
            className="flex h-full w-full items-center justify-center"
          >
            <img
              src={image}
              alt={title}
              className="max-h-[80%] w-auto object-contain"
              loading="lazy"
            />
          </Link>
        ) : (
          <img
            src={image}
            alt={title}
            className="max-h-[80%] w-auto object-contain"
            loading="lazy"
          />
        )}
      </div>

      {/* info */}
      <div className="px-5 py-4">
        <p className="text-xs text-gray-400">{category}</p>
        {slug ? (
          <Link to={`/product/${slug}`} className="block">
            <h3 className="mt-0.5 text-sm font-medium text-gray-900 hover:text-brand-600">
              {title}
            </h3>
          </Link>
        ) : (
          <h3 className="mt-0.5 text-sm font-medium text-gray-900">{title}</h3>
        )}

        <div className="mt-2 flex items-center gap-2">
          <span className="text-sm font-semibold text-gray-900">
            ${price.toFixed(2)}
          </span>
          {typeof oldPrice === "number" && (
            <span className="text-sm text-gray-400 line-through">
              ${oldPrice.toFixed(2)}
            </span>
          )}
        </div>

        <div className="mt-2 flex items-center gap-2">
          <Rating value={rating} reviews={reviews} />
          <span className="text-xs text-gray-400">({reviews})</span>
        </div>

        {/* full-width CTA like the mock (only on the last tile, controlled by showCta) */}
        {showCta && (
          <button
            onClick={onAddToCart}
            className={cn(
              "mt-4 flex w-full items-center justify-center gap-2 rounded-md bg-[#4F46E5] py-2 text-sm font-medium text-white",
              "hover:bg-[#4338CA] transition-colors"
            )}
          >
            <IconCart />
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
}
