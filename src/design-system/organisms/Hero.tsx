import { Badge } from "@atoms/Badge";
import { Button } from "@atoms/Button";

export interface HeroProps {
  title?: string;
  subtitle?: string;
  price?: string;
  imageSrc?: string;
  onBuy?: () => void;
}

export function Hero({
  title = "Intelectial Digital Computer",
  subtitle = "Hot Deal In This Week",
  price = "$97",
  imageSrc = "/images/hero/hero-composition.png",
  onBuy,
}: HeroProps) {
  return (
    <section className="relative overflow-hidden rounded-2xl bg-[#FBF7F4]">
      {/* content container */}
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-8 px-6 py-12 md:grid-cols-2 md:py-16">
        {/* Left copy */}
        <div className="order-2 md:order-1">
          <div className="mb-4">
            <Badge className="bg-transparent px-0 text-sm text-brand-600">
              {subtitle}
            </Badge>
          </div>
          <h1 className="mb-6 text-3xl font-extrabold leading-tight text-gray-900 md:text-5xl">
            {title}
          </h1>

          <div className="mb-8">
            <Button size="lg" onClick={onBuy} className="btn-primary">
              Buy Now
            </Button>
          </div>

          {/* rating + dots */}
          <div className="flex items-center gap-6">
            {/* simple 5 stars + text (keep it inline to avoid extra file) */}
            <span className="inline-flex items-center gap-2 text-sm text-gray-600">
              ⭐⭐⭐⭐⭐{" "}
              <span className="text-xs text-gray-500">100 Reviews</span>
            </span>

            {/* slider dots */}
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-6 rounded-full bg-gray-300"></span>
              <span className="h-1.5 w-6 rounded-full bg-brand-600"></span>
            </div>
          </div>
        </div>

        {/* Right image */}
        <div className="order-1 relative md:order-2">
          <img
            src={imageSrc}
            alt="Product composition"
            className="mx-auto max-w-full drop-shadow-xl md:translate-x-6"
            loading="eager"
          />

          {/* price bubble */}
          <div className="absolute -right-2 top-6 hidden h-24 w-24 -translate-y-2 md:flex md:items-center md:justify-center">
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-[#4F46E5] text-xl font-bold text-white shadow-lg">
              {price}
            </div>
          </div>
        </div>
      </div>

      {/* subtle background shapes (optional) */}
      <div className="pointer-events-none absolute -right-20 top-16 hidden h-72 w-72 rounded-full bg-linear-to-br from-[#FFD7C2] to-transparent blur-2xl md:block" />
    </section>
  );
}
