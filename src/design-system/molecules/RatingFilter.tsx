import { IconStarHalf, IconStarSolid } from "@atoms/Icon";
import { cn } from "@utils/cn";

export interface RatingFilterProps {
  value?: number; // e.g. 4.5
  onSelect?: (minRating: number) => void;
  className?: string;
}

const ROWS: number[] = [5, 4.5, 4, 3.5, 3];

function StarsRow({ rating }: { rating: number }) {
  const full = Math.floor(rating);
  const half = rating % 1 !== 0;
  const empties = 5 - full - (half ? 1 : 0);
  return (
    <div className="flex items-center">
      {[...Array(full)].map((_, i) => (
        <IconStarSolid key={`f${i}`} className="text-yellow-400" size={16} />
      ))}
      {half && <IconStarHalf className="text-yellow-400" size={16} />}
      {[...Array(empties)].map((_, i) => (
        <IconStarSolid key={`e${i}`} className="text-gray-300" size={16} />
      ))}
    </div>
  );
}

export function RatingFilter({
  value,
  onSelect,
  className,
}: RatingFilterProps) {
  return (
    <div
      className={cn("space-y-1", className)}
      role="group"
      aria-label="Filter by rating"
    >
      {ROWS.map((r) => (
        <button
          key={r}
          onClick={() => onSelect?.(r)}
          className={cn(
            "flex w-full items-center justify-between rounded-md px-2 py-1 text-left hover:bg-gray-50",
            value === r && "bg-gray-100"
          )}
          aria-pressed={value === r}
        >
          <StarsRow rating={r} />
          <span className="text-xs text-gray-500">And Up</span>
        </button>
      ))}
    </div>
  );
}
