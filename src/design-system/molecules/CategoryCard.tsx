import { CategoryIcon } from "@atoms/CategoryIcon";
import { cn } from "@utils/cn";

export interface CategoryCardProps {
  label: string;
  iconSrc: string;
  iconAlt?: string;
  selected?: boolean;
  onClick?: () => void;
}

export function CategoryCard({
  label,
  iconSrc,
  iconAlt,
  selected = false,
  onClick,
}: CategoryCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "card group flex h-32 w-full flex-col items-center justify-center gap-3 rounded-2xl border text-center transition-all sm:h-36",
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500",
        selected
          ? "border-transparent bg-blue-900 text-white shadow-md"
          : "border-gray-200 bg-white text-gray-800 hover:-translate-y-0.5 hover:shadow-md"
      )}
      aria-pressed={selected}
      aria-label={label}
    >
      <CategoryIcon src={iconSrc} selected={selected} alt={iconAlt || label} />
      <span
        className={cn(
          "text-sm font-medium",
          selected ? "text-white" : "text-gray-700"
        )}
      >
        {label}
      </span>
    </button>
  );
}
