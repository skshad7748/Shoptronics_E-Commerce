export type ProductData = {
  id: string;
  slug: string;
  title: string;
  category: string;
  brand: string;
  price: number;
  oldPrice?: number;
  rating: number;
  reviews: number;
  sku: string;
  availability: string;
  image: string;
  hero?: string;
  gallery: string[];
};

export const PRODUCTS: ProductData[] = [
  {
    id: "p-flex-headphones",
    slug: "flexible-wireless-head-phone",
    title: "Flexible Wireless Head Phone",
    category: "Head Phone",
    brand: "Roco",
    price: 29.99,
    oldPrice: 39.99,
    rating: 4.5,
    reviews: 96,
    sku: "HP-001",
    availability: "In Stock",
    image: "/images/products/headphones.png",
    hero: "/images/product-detail/hero.png",
    gallery: [
      "/images/product-detail/thumb-1.png",
      "/images/product-detail/thumb-2.png",
      "/images/product-detail/thumb-3.png",
      "/images/product-detail/thumb-4.png",
    ],
  },
  {
    id: "p-smart-watch",
    slug: "smart-digital-watch",
    title: "Smart Digital Watch",
    category: "Wearables",
    brand: "Krono",
    price: 199.99,
    oldPrice: 249.99,
    rating: 4.2,
    reviews: 54,
    sku: "WT-201",
    availability: "In Stock",
    image: "/images/products/watch.png",
    gallery: [
      "/images/products/watch.png",
      "/images/products/watch.png",
      "/images/products/watch.png",
    ],
  },
  {
    id: "p-studio-headphones",
    slug: "ultra-noise-cancelling-headphones",
    title: "Ultra Noise Cancelling Headphones",
    category: "Audio",
    brand: "Pulse",
    price: 349.99,
    oldPrice: 399.99,
    rating: 4.8,
    reviews: 122,
    sku: "HP-305",
    availability: "Pre-order",
    image: "/images/products/headphones-large.png",
    gallery: [
      "/images/products/headphones-large.png",
      "/images/products/headphones.png",
      "/images/products/headphones-sm.png",
    ],
  },
  {
    id: "p-gaming-laptop",
    slug: "sleek-gaming-laptop",
    title: "Sleek Gaming Laptop",
    category: "Computers",
    brand: "Volt",
    price: 1299.99,
    oldPrice: 1499.99,
    rating: 4.6,
    reviews: 210,
    sku: "LP-884",
    availability: "In Stock",
    image: "/images/products/laptop.png",
    gallery: [
      "/images/products/laptop.png",
      "/images/products/laptop.png",
      "/images/products/laptop.png",
    ],
  },
  {
    id: "p-sport-earbuds",
    slug: "sport-wireless-earbuds",
    title: "Sport Wireless Earbuds",
    category: "Audio",
    brand: "Pulse",
    price: 129.99,
    oldPrice: 159.99,
    rating: 4.1,
    reviews: 88,
    sku: "EB-220",
    availability: "In Stock",
    image: "/images/products/headphones-sm.png",
    gallery: [
      "/images/products/headphones-sm.png",
      "/images/products/headphones.png",
      "/images/products/headphones-sm.png",
    ],
  },
  {
    id: "p-classic-headphones",
    slug: "classic-over-ear-headphones",
    title: "Classic Over Ear Headphones",
    category: "Audio",
    brand: "RetroSound",
    price: 89.99,
    rating: 4.0,
    reviews: 42,
    sku: "HP-110",
    availability: "Backorder",
    image: "/images/products/headphones-sm.png",
    gallery: [
      "/images/products/headphones-sm.png",
      "/images/products/headphones.png",
      "/images/products/headphones-sm.png",
    ],
  },
];

export function getProductBySlug(slug: string): ProductData | undefined {
  return PRODUCTS.find((product) => product.slug === slug);
}

export function getRelatedProducts(
  slug: string,
  count = 4
): ProductData[] {
  return PRODUCTS.filter((product) => product.slug !== slug).slice(0, count);
}
