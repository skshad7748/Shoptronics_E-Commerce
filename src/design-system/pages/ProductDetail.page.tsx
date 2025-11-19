import { getProductBySlug, getRelatedProducts } from "@data/products";
import { ProductCard } from "@molecules/ProductCard";
import { ProductGallery } from "@molecules/ProductGallery";
import { PageHeroBar } from "@organisms/PageHeroBar";
import { ProductDetailsSection } from "@organisms/ProductDetailsSection";
import { HomeTemplate } from "@templates/Home.template";
import { Link, useParams } from "react-router-dom";
import { useCart } from "../../store/cart";

export default function ProductDetailPage() {
  const { slug = "" } = useParams();
  const product = slug ? getProductBySlug(slug) : undefined;
  const { addItem } = useCart();

  if (!product) {
    return (
      <HomeTemplate>
        <PageHeroBar
          crumbs={[
            { label: "Home", to: "/" },
            { label: "Shop", to: "/shop" },
            { label: "Product Not Found" },
          ]}
        />

        <section className="mx-auto max-w-4xl px-6 py-12">
          <div className="rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-sm">
            <h1 className="text-2xl font-semibold text-gray-900">
              Product unavailable
            </h1>
            <p className="mt-2 text-sm text-gray-500">
              We couldn’t find the product you were looking for. It may have been
              moved or is no longer available.
            </p>
            <Link
              to="/shop"
              className="mt-6 inline-flex rounded-md bg-[#4F46E5] px-6 py-2 text-sm font-medium text-white hover:bg-[#4338CA]"
            >
              Back to shop
            </Link>
          </div>
        </section>
      </HomeTemplate>
    );
  }

  const galleryImages = product.hero
    ? [product.hero, ...product.gallery]
    : product.gallery;
  const relatedProducts = getRelatedProducts(product.slug);

  return (
    <HomeTemplate>
      {/* top purple strip with breadcrumb and product name */}
      <PageHeroBar
        crumbs={[
          { label: "Home", to: "/" },
          { label: "Shop", to: "/shop" },
          { label: product.title },
        ]}
        height="h-20"
      />

      {/* Product card (gallery + details) */}
      <section className="mx-auto max-w-6xl px-6">
        <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm md:p-6">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[520px_1fr]">
            {/* Gallery: show main hero first, then thumbs */}
            <ProductGallery images={galleryImages} alt={product.title} />

            <ProductDetailsSection
              title={product.title}
              price={product.price}
              oldPrice={product.oldPrice}
              rating={product.rating}
              reviews={product.reviews}
              brand={product.brand}
              category={product.category}
              sku={product.sku}
              availability={product.availability}
              onAddToCart={(qty) =>
                addItem(
                  {
                    id: product.id,
                    title: product.title,
                    price: product.price,
                    image: product.image,
                  },
                  qty
                )
              }
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
          {relatedProducts.map((related) => (
            <ProductCard
              key={related.id}
              image={related.image}
              title={related.title}
              price={related.price}
              oldPrice={related.oldPrice}
              rating={related.rating}
              reviews={related.reviews}
              slug={related.slug}
              onAddToCart={() =>
                addItem(
                  {
                    id: related.id,
                    title: related.title,
                    price: related.price,
                    image: related.image,
                  },
                  1
                )
              }
              onQuickView={() => console.log("quick view", related.id)}
              onWishlist={() => console.log("wishlist", related.id)}
            />
          ))}
        </div>
      </section>
    </HomeTemplate>
  );
}
