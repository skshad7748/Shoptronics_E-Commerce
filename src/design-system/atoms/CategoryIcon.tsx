import { cn } from "@utils/cn";
import React from "react";

export interface CategoryIconProps
  extends React.ImgHTMLAttributes<HTMLImageElement> {
  selected?: boolean;
}

export function CategoryIcon({
  selected = false,
  className,
  ...props
}: CategoryIconProps) {
  // selected হলে কালো আইকনকে invert করে সাদা দেখাই
  return (
    <img
      {...props}
      className={cn(
        "h-12 w-12 object-contain",
        selected && "invert brightness-0",
        className
      )}
      alt={props.alt || "category icon"}
      loading="lazy"
    />
  );
}
