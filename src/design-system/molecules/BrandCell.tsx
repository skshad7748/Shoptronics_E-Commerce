import { BrandLogo } from "@atoms/BrandLogo";
import { cn } from "@utils/cn";

export interface BrandCellProps {
  src: string;
  alt: string;
  className?: string;
}

export function BrandCell({ src, alt, className }: BrandCellProps) {
  return (
    <div
      className={cn(
        "flex h-28 items-center justify-center bg-white",
        className
      )}
    >
      <BrandLogo src={src} alt={alt} />
    </div>
  );
}
