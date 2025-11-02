import { cn } from "@utils/cn";
import React from "react";
import type { Size, Variant } from "../../types//common";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: Size;
  variant?: Variant;
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
}

const sizeMap: Record<Size, string> = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2 text-sm",
  lg: "px-5 py-3 text-base",
};

const variantMap: Record<Variant, string> = {
  primary: "btn-primary",
  ghost: "btn-ghost",
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      size = "md",
      variant = "primary",
      className,
      leadingIcon,
      trailingIcon,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={cn(variantMap[variant], sizeMap[size], className)}
        {...props}
      >
        {leadingIcon && <span className="mr-2 inline-flex">{leadingIcon}</span>}
        <span>{children}</span>
        {trailingIcon && (
          <span className="ml-2 inline-flex">{trailingIcon}</span>
        )}
      </button>
    );
  }
);
Button.displayName = "Button";
