import { cn } from "@utils/cn";
import React from "react";

export interface BadgeProps {
  children: React.ReactNode;
  variant?: "info" | "success" | "warning";
  className?: string;
}

export function Badge({ children, variant = "info", className }: BadgeProps) {
  const styles =
    variant === "info"
      ? "bg-brand-50 text-brand-700"
      : variant === "success"
      ? "bg-green-50 text-green-700"
      : "bg-yellow-50 text-yellow-700";

  return (
    <span
      className={cn(
        "inline-flex rounded-full px-3 py-1 text-xs font-medium",
        styles,
        className
      )}
    >
      {children}
    </span>
  );
}
