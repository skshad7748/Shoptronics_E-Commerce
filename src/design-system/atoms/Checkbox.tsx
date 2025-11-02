import React from "react"
import { cn } from "@utils/cn"

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, className, ...props }, ref) => (
    <label className="flex cursor-pointer items-center gap-2 text-sm text-gray-700">
      <input
        ref={ref}
        type="checkbox"
        className={cn(
          "h-4 w-4 rounded border-gray-300 text-brand-600 focus:ring-brand-600",
          className
        )}
        {...props}
      />
      {label && <span>{label}</span>}
    </label>
  )
)
Checkbox.displayName = "Checkbox"
