import { cn } from "@utils/cn";
import React from "react";

export interface FooterColumnProps {
  title?: string;
  children?: React.ReactNode;
  className?: string;
}

export function FooterColumn({
  title,
  children,
  className,
}: FooterColumnProps) {
  return (
    <div className={cn("space-y-3", className)}>
      {title && (
        <h4 className="text-sm font-semibold text-gray-800">{title}</h4>
      )}
      <div className="space-y-2 text-sm text-gray-600">{children}</div>
    </div>
  );
}
