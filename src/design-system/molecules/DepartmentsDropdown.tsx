import { IconChevronDown, IconMenu } from "@atoms/Icon";
import { cn } from "@utils/cn";
import React from "react";

export type DeptItem = {
  id: string;
  label: string;
  href?: string;
  imageSrc: string;
};

export interface DepartmentsDropdownProps {
  items: DeptItem[];
  buttonClassName?: string;
}

export function DepartmentsDropdown({
  items,
  buttonClassName,
}: DepartmentsDropdownProps) {
  const [open, setOpen] = React.useState(false);
  const panelRef = React.useRef<HTMLDivElement | null>(null);
  const btnRef = React.useRef<HTMLButtonElement | null>(null);

  // close on outside click
  React.useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (!open) return;
      const t = e.target as Node;
      if (panelRef.current?.contains(t) || btnRef.current?.contains(t)) return;
      setOpen(false);
    }
    function onEsc(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onDocClick);
    document.addEventListener("keydown", onEsc);
    return () => {
      document.removeEventListener("mousedown", onDocClick);
      document.removeEventListener("keydown", onEsc);
    };
  }, [open]);

  return (
    <div className="relative">
      <button
        ref={btnRef}
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="true"
        aria-expanded={open}
        className={cn(
          "inline-flex items-center gap-2 rounded-lg px-2 py-1.5 hover:bg-gray-100",
          buttonClassName
        )}
      >
        <IconMenu size={18} />
        <span>Departments</span>
        <IconChevronDown size={16} />
      </button>

      {/* Dropdown panel */}
      <div
        ref={panelRef}
        className={cn(
          "absolute left-0 top-full z-40 mt-2 w-[min(960px,calc(100vw-2rem))] rounded-2xl border border-gray-200 bg-white p-4 shadow-xl transition-opacity",
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        )}
      >
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <a
              key={it.id}
              href={it.href || "#"}
              className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white p-4 hover:border-brand-600 hover:shadow-sm"
              onClick={() => setOpen(false)}
            >
              <img
                src={it.imageSrc}
                alt={it.label}
                className="h-16 w-16 flex-none object-contain"
                loading="lazy"
              />
              <span className="text-sm font-medium text-gray-800">
                {it.label}
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
