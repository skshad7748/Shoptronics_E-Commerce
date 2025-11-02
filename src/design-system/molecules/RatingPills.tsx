import { cn } from "@utils/cn";

export function RatingPills({
  onSelect,
  value,
}: {
  value?: number;
  onSelect?: (v: number) => void;
}) {
  const rows = [5, 4, 3, 2, 1];
  return (
    <div className="space-y-1">
      {rows.map((v) => (
        <button
          key={v}
          onClick={() => onSelect?.(v)}
          className={cn(
            "flex w-full items-center justify-between rounded-md px-2 py-1 text-left text-sm hover:bg-gray-50",
            value === v && "bg-gray-100"
          )}
        >
          <span>
            {"★".repeat(v)}
            {"☆".repeat(5 - v)}
          </span>
          <span className="text-xs text-gray-500">(&nbsp;{v}&nbsp;+)</span>
        </button>
      ))}
    </div>
  );
}
