import { ProductCard } from "@molecules/ProductCard";
import { ProductGallery } from "@molecules/ProductGallery";
import { PageHeroBar } from "@organisms/PageHeroBar";
import { ProductDetailsSection } from "@organisms/ProductDetailsSection";
import { HomeTemplate } from "@templates/Home.template";

const IMAGES = [
  "/images/product-detail/thumb-1.png",
  "/images/product-detail/thumb-2.png",
  "/images/product-detail/thumb-3.png",
  "/images/product-detail/thumb-4.png",
];

const HERO = "/images/product-detail/hero.png";

export default function ProductDetailPage() {
  return (
    <HomeTemplate>
      {/* top purple strip with breadcrumb and product name */}
      <PageHeroBar
        crumbs={[
          { label: "Home", to: "/" },
          { label: "Shop", to: "/shop" },
          { label: "Flexible Wireless Head Phone" },
        ]}
        height="h-20"
      />

      {/* Product card (gallery + details) */}
      <section className="mx-auto max-w-6xl px-6">
        <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm md:p-6">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[520px_1fr]">
            {/* Gallery: show main hero first, then thumbs */}
            <ProductGallery
              images={[HERO, ...IMAGES]}
              alt="Flexible Wireless Head Phone"
            />

            <ProductDetailsSection
              title="Flexible Wireless Head Phone"
              price={29.99}
              oldPrice={39.99}
              rating={4}
              reviews={96}
              onAddToCart={(qty) => console.log("Add to cart - qty:", qty)}
            />
          </div>
        </div>
      </section>

      {/* Related products */}
      <section className="mx-auto max-w-6xl px-6 py-10">
        <h2 className="mb-4 text-xl font-semibold">
          <span className="text-gray-500">Products</span>{" "}
          <span className="text-gray-900">Related Products</span>
        </h2>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <ProductCard
              key={i}
              image="/images/product-detail/thumb-1.png"
              title="Smart Digital Watch"
              price={29.99}
              oldPrice={39.99}
              rating={4}
              reviews={96}
              slug="flexible-wireless-head-phone"
              onAddToCart={() => console.log("add to cart related", i)}
              onQuickView={() => console.log("quick view related", i)}
              onWishlist={() => console.log("wishlist related", i)}
            />
          ))}
        </div>
      </section>
    </HomeTemplate>
  );
}
