import { IconChevronRight } from "@atoms/Icon";
import { cn } from "@utils/cn";
import { Link } from "react-router-dom";

export type Crumb = { label: string; to?: string };

export function Breadcrumbs({
  items,
  className,
}: {
  items: Crumb[];
  className?: string;
}) {
  return (
    <nav aria-label="Breadcrumb" className={cn("text-sm", className)}>
      <ol className="flex items-center gap-2 text-white/90">
        {items.map((c, i) => {
          const last = i === items.length - 1;
          return (
            <li key={i} className="inline-flex items-center gap-2">
              {c.to && !last ? (
                <Link to={c.to} className="hover:text-white">
                  {c.label}
                </Link>
              ) : (
                <span className={cn(last ? "text-white" : "")}>{c.label}</span>
              )}
              {!last && (
                <IconChevronRight size={14} className="text-white/70" />
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
