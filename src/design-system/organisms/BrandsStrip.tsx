import { BrandCell } from "@molecules/BrandCell";

type BrandItem = { id: string; src: string; alt: string };

const DEFAULT_BRANDS: BrandItem[] = [
  { id: "basicsel", src: "/images/brands/BasicSel.png", alt: "BasicSel" },
  { id: "meta", src: "/images/brands/Meta.png", alt: "Meta" },
  { id: "iconfic", src: "/images/brands/IconFic.png", alt: "IconFic" },
  { id: "leyak", src: "/images/brands/LeyaK.png", alt: "LeyuK" },
];

export interface BrandsStripProps {
  items?: BrandItem[];
}

export function BrandsStrip({ items = DEFAULT_BRANDS }: BrandsStripProps) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-10">
      {/* outer border like your mock */}
      <div className="overflow-hidden rounded-lg border border-gray-300">
        {/* vertical dividers between cells */}
        <div className="grid grid-cols-2 divide-y divide-gray-300 sm:grid-cols-4 sm:divide-y-0 sm:divide-x">
          {items.map((b) => (
            <BrandCell key={b.id} src={b.src} alt={b.alt} />
          ))}
        </div>
      </div>
    </section>
  );
}
