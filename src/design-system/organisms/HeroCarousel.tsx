/* eslint-disable @typescript-eslint/no-unused-expressions */
import { Badge } from "@atoms/Badge";
import { Button } from "@atoms/Button";
import React from "react";

type Slide = {
  id: string;
  title: string;
  subtitle?: string;
  price?: string;
  imageSrc: string;
};

export interface HeroCarouselProps {
  slides?: Slide[];
  autoPlayMs?: number;
}

const DEFAULT_SLIDES: Slide[] = [
  {
    id: "computer",
    title: "Intelectial Digital Computer",
    subtitle: "Hot Deal In This Week",
    price: "$97",
    imageSrc: "/images/hero/hero-composition.png",
  },
  {
    id: "watch",
    title: "Smart Digital Watch",
    subtitle: "Hot Deal In This Week",
    price: "$97",
    imageSrc: "/images/hero/watch.png",
  },
];

export function HeroCarousel({
  slides = DEFAULT_SLIDES,
  autoPlayMs = 6000,
}: HeroCarouselProps) {
  const [index, setIndex] = React.useState(0);
  const count = slides.length;
  const containerRef = React.useRef<HTMLDivElement>(null);
  const autoRef = React.useRef<number | null>(null);
  const hoveringRef = React.useRef(false);

  const goTo = (i: number) => setIndex((i + count) % count);
  const next = () => goTo(index + 1);
  const prev = () => goTo(index - 1);

  // autoplay
  React.useEffect(() => {
    if (autoRef.current) window.clearInterval(autoRef.current);
    autoRef.current = window.setInterval(() => {
      if (!hoveringRef.current) next();
    }, autoPlayMs);
    return () => {
      if (autoRef.current) window.clearInterval(autoRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, autoPlayMs, count]);

  // keyboard arrows
  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  // basic swipe
  React.useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    let startX = 0;
    let delta = 0;

    const onTouchStart = (e: TouchEvent) => {
      startX = e.touches[0].clientX;
      delta = 0;
    };
    const onTouchMove = (e: TouchEvent) => {
      delta = e.touches[0].clientX - startX;
    };
    const onTouchEnd = () => {
      if (Math.abs(delta) > 50) {
        delta < 0 ? next() : prev();
      }
    };

    el.addEventListener("touchstart", onTouchStart, { passive: true });
    el.addEventListener("touchmove", onTouchMove, { passive: true });
    el.addEventListener("touchend", onTouchEnd);
    return () => {
      el.removeEventListener("touchstart", onTouchStart);
      el.removeEventListener("touchmove", onTouchMove);
      el.removeEventListener("touchend", onTouchEnd);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  return (
    <section
      className="relative mx-auto max-w-6xl px-6"
      onMouseEnter={() => (hoveringRef.current = true)}
      onMouseLeave={() => (hoveringRef.current = false)}
    >
      <div
        ref={containerRef}
        className="relative overflow-hidden rounded-2xl bg-[#FBF7F4]"
      >
        {/* slider track */}
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {slides.map((s) => (
            <SlideItem key={s.id} slide={s} />
          ))}
        </div>

        {/* dots */}
        <div className="pointer-events-auto absolute bottom-4 left-1/2 -translate-x-1/2">
          <div className="flex items-center gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => goTo(i)}
                className={
                  i === index
                    ? "h-1.5 w-6 rounded-full bg-brand-600"
                    : "h-1.5 w-6 rounded-full bg-gray-300"
                }
              />
            ))}
          </div>
        </div>

        {/* (optional) arrows for desktop */}
        <div className="pointer-events-none absolute inset-0 hidden md:block">
          <div className="flex h-full items-center justify-between px-2">
            <button
              onClick={prev}
              className="pointer-events-auto hidden h-10 w-10 rounded-full bg-white/80 text-gray-800 shadow hover:bg-white md:inline-flex items-center justify-center"
              aria-label="Previous slide"
            >
              ‹
            </button>
            <button
              onClick={next}
              className="pointer-events-auto hidden h-10 w-10 rounded-full bg-white/80 text-gray-800 shadow hover:bg-white md:inline-flex items-center justify-center"
              aria-label="Next slide"
            >
              ›
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function SlideItem({ slide }: { slide: Slide }) {
  const { title, subtitle, price = "$97", imageSrc } = slide;
  return (
    <div className="grid min-w-full grid-cols-1 items-center gap-8 px-6 py-10 md:grid-cols-2 md:py-14">
      {/* left copy */}
      <div className="order-2 md:order-1">
        {subtitle && (
          <div className="mb-2">
            <Badge className="bg-transparent px-0 text-sm text-brand-600">
              {subtitle}
            </Badge>
          </div>
        )}
        <h1 className="mb-6 text-3xl font-extrabold leading-tight text-gray-900 md:text-5xl">
          {title}
        </h1>

        <div className="mb-8 flex items-center gap-6">
          <Button size="lg" className="btn-primary bg-white  shadow-2xl">
            Buy Now
          </Button>
          <span className="inline-flex items-center gap-2 text-sm text-gray-600">
            ⭐⭐⭐⭐⭐{" "}
            <span className="text-xs text-gray-500">100 Reviews</span>
          </span>
        </div>
      </div>

      {/* right image */}
      <div className="order-1 relative md:order-2">
        <img
          src={imageSrc}
          alt={title}
          className="mx-auto max-w-full drop-shadow-xl md:translate-x-6"
          loading="eager"
        />
        {/* price bubble */}
        <div className="absolute -right-2 top-6 hidden h-20 w-20 -translate-y-2 md:flex md:items-center md:justify-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#4F46E5] text-lg font-bold text-white shadow-lg">
            {price}
          </div>
        </div>
      </div>

      {/* background glow (per slide) */}
      <div className="pointer-events-none absolute right-10 top-12 hidden h-64 w-64 rounded-3xl bg-linear-to-br from-[#FFD7C2] to-transparent blur-2xl md:block" />
    </div>
  );
}
