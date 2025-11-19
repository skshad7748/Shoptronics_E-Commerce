import { PRODUCTS } from "@data/products";
import { ProductCard } from "@molecules/ProductCard";
import React from "react";

type Product = {
  id: string;
  image: string;
  title: string;
  price: number;
  oldPrice?: number;
  rating?: number;
  reviews?: number;
  slug?: string;
};

const DEFAULT_PRODUCTS: Product[] = PRODUCTS.slice(0, 5).map((product) => ({
  id: product.id,
  image: product.image,
  title: product.title,
  price: product.price,
  oldPrice: product.oldPrice,
  rating: product.rating,
  reviews: product.reviews,
  slug: product.slug,
}));

const GRID_CLASSES =
  "grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5";

export interface TrendingProductsSectionProps {
  title?: string;
  subtitle?: string;
  products?: Product[];
}

export function TrendingProductsSection({
  title = "Trending",
  subtitle = "Categories",
  products = DEFAULT_PRODUCTS,
}: TrendingProductsSectionProps) {
  const headingId = React.useId();

  return (
    <section className="w-full space-y-6" aria-labelledby={headingId}>
      <div className="text-center sm:text-left">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-600">
          {subtitle}
        </p>
        <h2 id={headingId} className="mt-2 text-2xl font-semibold text-gray-900">
          {title} <span className="text-gray-500">Products</span>
        </h2>
      </div>

      <div className={GRID_CLASSES}>
        {products.map((p) => (
          <ProductCard
            key={p.id}
            image={p.image}
            title={p.title}
            price={p.price}
            oldPrice={p.oldPrice}
            rating={p.rating}
            reviews={p.reviews}
            slug={p.slug}
          />
        ))}
      </div>
    </section>
  );
}
