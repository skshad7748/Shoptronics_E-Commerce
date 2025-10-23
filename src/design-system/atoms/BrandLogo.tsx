import { cn } from "@utils/cn";
import React from "react";

export interface BrandLogoProps
  extends React.ImgHTMLAttributes<HTMLImageElement> {
  dimOnHover?: boolean;
}

export function BrandLogo({
  className,
  dimOnHover = false,
  ...props
}: BrandLogoProps) {
  return (
    <img
      {...props}
      className={cn(
        "max-h-8 w-auto object-contain",
        dimOnHover && "opacity-90 transition-opacity hover:opacity-100",
        className
      )}
      alt={props.alt || "brand"}
      loading="lazy"
      draggable={false}
    />
  );
}
