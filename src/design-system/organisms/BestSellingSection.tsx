import { ProductTile } from "@molecules/ProductTile";

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
    id: "b1",
    image: "/images/products/headphones-large.png",
    title: "Smart Digital Watch",
    price: 29.99,
    oldPrice: 29.99,
    rating: 4,
    reviews: 96,
  },
  {
    id: "b2",
    image: "/images/products/headphones-large.png",
    title: "Smart Digital Watch",
    price: 29.99,
    oldPrice: 29.99,
    rating: 4,
    reviews: 96,
  },
  {
    id: "b3",
    image: "/images/products/headphones-large.png",
    title: "Smart Digital Watch",
    price: 29.99,
    oldPrice: 29.99,
    rating: 4,
    reviews: 96,
  },
];

export interface BestSellingSectionProps {
  title?: string;
  subtitle?: string;
  products?: Product[];
}

export function BestSellingSection({
  title = "Best Selling",
  subtitle = "Nest",
  products = PRODUCTS,
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
            showCta={idx === products.length - 1} // only last tile shows Add to Cart (like mock)
            onAddToCart={() => console.log("add to cart", p.id)}
          />
        ))}
      </div>
    </section>
  );
}
