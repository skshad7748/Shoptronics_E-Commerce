import { Badge } from "@atoms/Badge";
import { Button } from "@atoms/Button";

export interface PromoBannerProps {
  subtitle?: string;
  title?: string;
  ctaText?: string;
  onCtaClick?: () => void;
  imageSrc?: string;
}

export function PromoBanner({
  subtitle = "Enhance Your Music Experience",
  title = "Enhance Your Music\nExperience",
  ctaText = "Check it Out!",
  onCtaClick,
  imageSrc = "/images/promo/headphones.png",
}: PromoBannerProps) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-8">
      <div className="grid grid-cols-1 items-center gap-6 rounded-2xl bg-[#F7F0EC] px-8 py-12 md:grid-cols-2 md:gap-10">
        {/* Left copy */}
        <div className="order-2 md:order-1">
          <Badge className="bg-transparent px-0 text-xs text-gray-500">
            {subtitle}
          </Badge>

          <h2 className="mt-2 whitespace-pre-line text-3xl font-extrabold leading-tight text-gray-900 md:text-5xl">
            {title}
          </h2>

          <div className="mt-6">
            <Button
              size="md"
              className="bg-[#4F46E5] text-white hover:bg-[#4338CA]"
              onClick={onCtaClick}
            >
              {ctaText}
            </Button>
          </div>
        </div>

        {/* Right image */}
        <div className="order-1 flex items-center justify-center md:order-2">
          <img
            src={imageSrc}
            alt="Premium headphones"
            className="max-h-80 w-auto select-none object-contain drop-shadow-md md:max-h-88"
            draggable={false}
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
