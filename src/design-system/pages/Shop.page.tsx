import { ProductCard } from "@molecules/ProductCard";
import { FiltersSidebar } from "@organisms/FiltersSidebar";
import { PageHeroBar } from "@organisms/PageHeroBar";
import { Pagination } from "@organisms/Pagination";
import { ProductsToolbar } from "@organisms/ProductsToolbar";
import { HomeTemplate } from "@templates/Home.template";
import React from "react";

type Product = {
  id: string;
  image: string;
  title: string;
  price: number;
  oldPrice?: number;
  rating?: number;
  reviews?: number;
};

const PRODUCTS: Product[] = Array.from({ length: 9 })
  .map((_, i) => ({
    id: `s${i + 1}`,
    image: "/images/products/headphones-sm.png",
    title: "Smart Digital Watch",
    price: 29.99,
    oldPrice: 39.99,
    rating: 4,
    reviews: 96,
  }))
  .concat(
    Array.from({ length: 9 }).map((_, i) => ({
      id: `s${i + 10}`,
      image: "/images/products/headphones-sm.png",
      title: "Smart Digital Watch",
      price: 29.99,
      oldPrice: 39.99,
      rating: 4,
      reviews: 96,
    }))
  );

export default function ShopPage() {
  const [searchTerm, setSearchTerm] = React.useState<string>("");

  return (
    <HomeTemplate onSearch={setSearchTerm}>
      <PageHeroBar crumbs={[{ label: "Home", to: "/" }, { label: "Shop" }]} />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[280px_1fr]">
        {/* Sidebar */}
        <FiltersSidebar className="lg:sticky lg:top-20" />

        {/* Main */}
        <div className="space-y-4">
          <ProductsToolbar />

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {PRODUCTS.map((p, idx) => (
              <ProductCard
                key={p.id}
                image={p.image}
                title={p.title}
                price={p.price}
                oldPrice={p.oldPrice}
                rating={p.rating}
                reviews={p.reviews}
                slug="flexible-wireless-head-phone"
                onAddToCart={() => console.log("add to cart", p.id)}
                onQuickView={() => console.log("quick view", p.id)}
                onWishlist={() => console.log("wishlist", p.id)}
              />
            ))}
          </div>

          <div className="pt-4">
            <Pagination />
          </div>
        </div>
      </div>
    </HomeTemplate>
  );
}
