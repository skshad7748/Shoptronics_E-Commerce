import { Button } from "@atoms/Button";
import React from "react";
import { IconSearch } from "../atoms/Icon";

export interface SearchBarProps {
  placeholder?: string;
  onSearch?: (query: string) => void;
}

export function SearchBar({
  placeholder = "Search for Products",
  onSearch,
}: SearchBarProps) {
  const [q, setQ] = React.useState("");
  const submit = () => onSearch?.(q);

  return (
    <div className="flex w-full">
      <div className="relative flex-1">
        <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
          <IconSearch size={18} />
        </span>
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && submit()}
          placeholder={placeholder}
          aria-label="Search query"
          className="h-11 w-full rounded-l-lg border border-gray-300 bg-white pl-9 pr-3 text-sm shadow-sm placeholder:text-gray-400 focus:border-brand-600 focus:outline-none focus:ring-1 focus:ring-brand-600"
        />
      </div>
      <Button
        onClick={submit}
        className="h-11 rounded-l-none rounded-r-lg bg-[#4F46E5] px-6 text-white hover:bg-[#4338CA]"
      >
        Search
      </Button>
    </div>
  );
}
