import { PRODUCTS } from "@data/products";
import { ProductCard } from "@molecules/ProductCard";
import { FiltersSidebar } from "@organisms/FiltersSidebar";
import { PageHeroBar } from "@organisms/PageHeroBar";
import { Pagination } from "@organisms/Pagination";
import { ProductsToolbar } from "@organisms/ProductsToolbar";
import { HomeTemplate } from "@templates/Home.template";
import React from "react";

export default function ShopPage() {
  const [searchTerm, setSearchTerm] = React.useState<string>("");

  const filteredProducts = React.useMemo(() => {
    const normalized = searchTerm.trim().toLowerCase();
    if (!normalized) {
      return PRODUCTS;
    }

    return PRODUCTS.filter((product) =>
      product.title.toLowerCase().includes(normalized)
    );
  }, [searchTerm]);

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
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                image={product.image}
                title={product.title}
                price={product.price}
                oldPrice={product.oldPrice}
                rating={product.rating}
                reviews={product.reviews}
                slug={product.slug}
                onAddToCart={() => console.log("add to cart", product.id)}
                onQuickView={() => console.log("quick view", product.id)}
                onWishlist={() => console.log("wishlist", product.id)}
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
