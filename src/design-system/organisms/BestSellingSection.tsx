import { PRODUCTS } from "@data/products";
import { ProductTile } from "@molecules/ProductTile";
import React from "react";
import { useCart } from "../../store/cart";

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

const DEFAULT_PRODUCTS: Product[] = PRODUCTS.slice(0, 3).map((product) => ({
  id: product.id,
  image: product.image,
  title: product.title,
  price: product.price,
  oldPrice: product.oldPrice,
  rating: product.rating,
  reviews: product.reviews,
  slug: product.slug,
}));

export interface BestSellingSectionProps {
  title?: string;
  subtitle?: string;
  products?: Product[];
}

export function BestSellingSection({
  title = "Best Selling",
  subtitle = "Nest",
  products = DEFAULT_PRODUCTS,
}: BestSellingSectionProps) {
  const headingId = React.useId();
  const { addItem } = useCart();

  const handleAdd = (product: Product) =>
    addItem(
      { id: product.id, title: product.title, price: product.price, image: product.image },
      1
    );

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

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        {products.map((p, idx) => (
          <ProductTile
            key={p.id}
            image={p.image}
            title={p.title}
            price={p.price}
            oldPrice={p.oldPrice}
            rating={p.rating}
            reviews={p.reviews}
            slug={p.slug}
            showCta={idx === products.length - 1}
            onAddToCart={() => handleAdd(p)}
          />
        ))}
      </div>
    </section>
  );
}
