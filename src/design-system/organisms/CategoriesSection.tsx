import { CategoryCard } from "@molecules/CategoryCard";
import React from "react";

export interface CategoryItem {
  id: string;
  label: string;
  iconSrc: string;
}

const DEFAULT_ITEMS: CategoryItem[] = [
  {
    id: "mobile",
    label: "Mobile",
    iconSrc: "/public/images/categories/mobile.png",
  },
  {
    id: "computer",
    label: "Computer",
    iconSrc: "/public/images/categories/computer.png",
  },
  {
    id: "headphone",
    label: "Head Phone",
    iconSrc: "/public/images/categories/headphone.png",
  },
  {
    id: "speaker",
    label: "Speaker",
    iconSrc: "/public/images/categories/speaker.png",
  },
  {
    id: "camera",
    label: "Camera",
    iconSrc: "/public/images/categories/camera.png",
  },
];

export interface CategoriesSectionProps {
  title?: string;
  subtitle?: string;
  items?: CategoryItem[];
  defaultSelectedId?: string;
  onSelect?: (id: string) => void;
}

export function CategoriesSection({
  title = "Top Categories",
  subtitle = "Categories",
  items = DEFAULT_ITEMS,
  defaultSelectedId = "mobile",
  onSelect,
}: CategoriesSectionProps) {
  const [selected, setSelected] = React.useState<string>(defaultSelectedId);

  const handleSelect = (id: string) => {
    setSelected(id);
    onSelect?.(id);
  };

  return (
    <section className="mx-auto max-w-6xl px-6 py-10">
      <div className="mb-6">
        <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
          {subtitle}
        </p>
        <h2 className="mt-1 text-xl font-semibold text-gray-900">{title}</h2>
      </div>

      <div className="flex flex-wrap gap-4">
        {items.map((it) => (
          <CategoryCard
            key={it.id}
            label={it.label}
            iconSrc={it.iconSrc}
            selected={selected === it.id}
            onClick={() => handleSelect(it.id)}
          />
        ))}
      </div>
    </section>
  );
}
