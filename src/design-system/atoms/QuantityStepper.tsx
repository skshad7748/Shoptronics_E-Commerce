import { cn } from "@utils/cn";
import React from "react";

export interface QuantityStepperProps {
  value?: number;
  min?: number;
  max?: number;
  onChange?: (v: number) => void;
  className?: string;
}

export function QuantityStepper({
  value = 1,
  min = 1,
  max = 99,
  onChange,
  className,
}: QuantityStepperProps) {
  const [v, setV] = React.useState(value);
  const set = (n: number) => {
    const clamped = Math.max(min, Math.min(max, n));
    setV(clamped);
    onChange?.(clamped);
  };
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-md border border-gray-300",
        className
      )}
    >
      <button
        type="button"
        onClick={() => set(v - 1)}
        className="h-9 w-9 select-none text-lg leading-none text-gray-700 hover:bg-gray-100"
        aria-label="Decrease"
      >
        −
      </button>
      <input
        value={v}
        onChange={(e) => set(Number(e.target.value) || min)}
        inputMode="numeric"
        className="h-9 w-12 border-x border-gray-300 text-center text-sm outline-none"
      />
      <button
        type="button"
        onClick={() => set(v + 1)}
        className="h-9 w-9 select-none text-lg leading-none text-gray-700 hover:bg-gray-100"
        aria-label="Increase"
      >
        +
      </button>
    </div>
  );
}
