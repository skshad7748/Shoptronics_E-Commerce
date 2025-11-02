import { CategoryIcon } from "@atoms/CategoryIcon";
import { cn } from "@utils/cn";

export interface CategoryCardProps {
  label: string;
  iconSrc: string;
  selected?: boolean;
  onClick?: () => void;
}

export function CategoryCard({
  label,
  iconSrc,
  selected = false,
  onClick,
}: CategoryCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "card flex h-36 w-40 flex-col items-center justify-center gap-4 border transition-all",
        selected
          ? "border-transparent bg-blue-900 text-white shadow-md"
          : "border-gray-200 bg-white text-gray-800 hover:shadow-sm"
      )}
      aria-pressed={selected}
    >
      <CategoryIcon src={iconSrc} selected={selected} />
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
