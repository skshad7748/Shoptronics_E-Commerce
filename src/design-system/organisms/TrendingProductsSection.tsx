import { ProductCard } from "@molecules/ProductCard";

type Product = {
  id: string;
  image: string;
  title: string;
  price: number;
  oldPrice?: number;
  rating?: number;
  reviews?: number;
};

const PRODUCTS: Product[] = [
  {
    id: "p1",
    image: "/images/products/headphones.png",
    title: "Smart Digital Watch",
    price: 29.99,
    oldPrice: 39.99,
    rating: 4,
    reviews: 96,
  },
  {
    id: "p2",
    image: "/images/products/laptop.png",
    title: "Smart Digital Watch",
    price: 29.99,
    oldPrice: 39.99,
    rating: 4,
    reviews: 96,
  },
  {
    id: "p3",
    image: "/images/products/watch.png",
    title: "Smart Digital Watch",
    price: 29.99,
    oldPrice: 39.99,
    rating: 4,
    reviews: 96,
  },
  {
    id: "p4",
    image: "/images/products/watch.png",
    title: "Smart Digital Watch",
    price: 29.99,
    oldPrice: 39.99,
    rating: 4,
    reviews: 96,
  },
  {
    id: "p5",
    image: "/images/products/watch.png",
    title: "Smart Digital Watch",
    price: 29.99,
    oldPrice: 39.99,
    rating: 4,
    reviews: 96,
  },
];

export interface TrendingProductsSectionProps {
  title?: string;
  subtitle?: string;
  products?: Product[];
}

export function TrendingProductsSection({
  title = "Trending",
  subtitle = "Categories",
  products = PRODUCTS,
}: TrendingProductsSectionProps) {
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

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {products.map((p) => (
          <ProductCard
            key={p.id}
            image={p.image}
            title={p.title}
            price={p.price}
            oldPrice={p.oldPrice}
            rating={p.rating}
            reviews={p.reviews}
            onAddToCart={() => console.log("add to cart", p.id)}
            onQuickView={() => console.log("quick view", p.id)}
            onWishlist={() => console.log("wishlist", p.id)}
          />
        ))}
      </div>
    </section>
  );
}
