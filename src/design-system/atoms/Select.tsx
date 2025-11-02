import React from "react"
import { cn } from "@utils/cn"

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string
}

export function Select({ label, className, children, ...props }: SelectProps) {
  return (
    <label className="flex items-center gap-2 text-sm">
      {label && <span className="text-gray-600">{label}</span>}
      <select
        className={cn(
          "rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:border-brand-600 focus:outline-none focus:ring-1 focus:ring-brand-600",
          className
        )}
        {...props}
      >
        {children}
      </select>
    </label>
  )
}
