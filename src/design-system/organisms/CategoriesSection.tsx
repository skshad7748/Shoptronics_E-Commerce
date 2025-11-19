import { CategoryCard } from "@molecules/CategoryCard";
import React from "react";

export interface CategoryItem {
  id: string;
  label: string;
  iconSrc: string;
  iconAlt?: string;
}

const icon = (fileName: string) => `/images/categories/${fileName}`;

const DEFAULT_ITEMS: CategoryItem[] = [
  {
    id: "mobile",
    label: "Mobile",
    iconSrc: icon("mobile.png"),
    iconAlt: "Smartphone category",
  },
  {
    id: "computer",
    label: "Computer",
    iconSrc: icon("computer.png"),
    iconAlt: "Computer category",
  },
  {
    id: "headphone",
    label: "Head Phone",
    iconSrc: icon("headphone.png"),
    iconAlt: "Headphones category",
  },
  {
    id: "speaker",
    label: "Speaker",
    iconSrc: icon("speaker.png"),
    iconAlt: "Speaker category",
  },
  {
    id: "camera",
    label: "Camera",
    iconSrc: icon("camera.png"),
    iconAlt: "Camera category",
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
  const sectionId = React.useId();
  const titleId = `${sectionId}-title`;
  const subtitleId = `${sectionId}-subtitle`;

  const handleSelect = (id: string) => {
    setSelected(id);
    onSelect?.(id);
  };

  return (
    <section
      className="w-full rounded-3xl border border-gray-100 bg-white/80 px-4 py-8 shadow-sm backdrop-blur-sm sm:px-6"
      aria-labelledby={titleId}
      aria-describedby={subtitleId}
    >
      <div className="flex flex-col gap-1 text-center sm:text-left">
        <p
          id={subtitleId}
          className="text-xs font-medium uppercase tracking-wide text-gray-400"
        >
          {subtitle}
        </p>
        <h2 id={titleId} className="text-2xl font-semibold text-gray-900">
          {title}
        </h2>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5">
        {items.map((it) => (
          <CategoryCard
            key={it.id}
            label={it.label}
            iconSrc={it.iconSrc}
            iconAlt={it.iconAlt}
            selected={selected === it.id}
            onClick={() => handleSelect(it.id)}
          />
        ))}
      </div>
    </section>
  );
}
