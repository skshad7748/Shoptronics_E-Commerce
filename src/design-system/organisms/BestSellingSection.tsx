import { PRODUCTS } from "@data/products";
import { ProductTile } from "@molecules/ProductTile";

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
  return (
    <section className="mx-auto max-w-6xl px-6 py-10">
      <div className="mb-6">
        <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
          {subtitle}
        </p>
        <h2 className="mt-1 text-2xl font-semibold">
          <span className="text-gray-900">{title}</span>{" "}
          <span className="text-gray-500">Products</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
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
            showCta={idx === products.length - 1} // only last tile shows Add to Cart (like mock)
            onAddToCart={() => console.log("add to cart", p.id)}
          />
        ))}
      </div>
    </section>
  );
}
