import { Checkbox } from "@atoms/Checkbox";
import { FilterSection } from "@molecules/FilterSection";
import { RatingFilter } from "@molecules/RatingFilter";
import React from "react";

export interface FiltersSidebarProps {
  className?: string;
}

export function FiltersSidebar({ className }: FiltersSidebarProps) {
  const [minRating, setMinRating] = React.useState<number | undefined>(
    undefined
  );
  return (
    <aside className={className}>
      <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
        <div className="space-y-5">
          <FilterSection title="Categories">
            {[
              "Smart Watch",
              "Head Phone",
              "Laptop",
              "Mobile",
              "Camera",
              "Speaker",
            ].map((x) => (
              <Checkbox key={x} label={x} />
            ))}
          </FilterSection>

          <FilterSection title="Price">
            <div className="flex items-center gap-2 text-sm">
              <input
                type="number"
                placeholder="Min"
                className="w-20 rounded-md border border-gray-300 px-2 py-1 focus:border-brand-600 focus:outline-none focus:ring-1 focus:ring-brand-600"
              />
              <span>—</span>
              <input
                type="number"
                placeholder="Max"
                className="w-20 rounded-md border border-gray-300 px-2 py-1 focus:border-brand-600 focus:outline-none focus:ring-1 focus:ring-brand-600"
              />
            </div>
          </FilterSection>

          <FilterSection title="Size">
            {["XS", "S", "M", "L", "XL"].map((x) => (
              <Checkbox key={x} label={x} />
            ))}
          </FilterSection>

          <FilterSection title="Brand">
            {["Roco", "Acme", "Zento", "Mono"].map((x) => (
              <Checkbox key={x} label={x} />
            ))}
          </FilterSection>

          <FilterSection title="Rating">
            <RatingFilter value={minRating} onSelect={setMinRating} />
          </FilterSection>

          <FilterSection title="Color Family">
            {["Black", "White", "Gray", "Blue"].map((x) => (
              <Checkbox key={x} label={x} />
            ))}
          </FilterSection>
        </div>
      </div>
    </aside>
  );
}
