import { IconStar } from "@atoms/Icon";
import { cn } from "@utils/cn";

export interface RatingProps {
  value: number; // 0..5
  reviews?: number;
  className?: string;
}

export function Rating({ value, reviews = 0, className }: RatingProps) {
  const stars = Array.from({ length: 5 }).map((_, i) => i < value);

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div className="flex items-center gap-1 text-yellow-400">
        {stars.map((filled, i) => (
          <IconStar
            key={i}
            size={16}
            className={filled ? "text-yellow-400" : "text-gray-300"}
          />
        ))}
      </div>
      <span className="text-xs text-gray-500">{reviews} Reviews</span>
    </div>
  );
}
