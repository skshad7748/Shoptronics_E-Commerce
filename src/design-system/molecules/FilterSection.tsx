import React from "react"

export function FilterSection({
  title,
  children,
}: { title: string; children: React.ReactNode }) {
  return (
    <div className="border-b border-gray-200 pb-4">
      <h4 className="mb-3 text-sm font-semibold text-gray-800">{title}</h4>
      <div className="space-y-2">{children}</div>
    </div>
  )
}
