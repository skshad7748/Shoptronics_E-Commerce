import { Select } from "@atoms/Select";

export function ProductsToolbar() {
  return (
    <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-gray-200 bg-white p-3">
      <div className="text-sm text-gray-600">1 – 9 of 48</div>
      <div className="flex items-center gap-3">
        <Select label="Sort" defaultValue="pop">
          <option value="pop">Popularity</option>
          <option value="new">Newest</option>
          <option value="low">Price: Low to High</option>
          <option value="high">Price: High to Low</option>
        </Select>
        <Select label="Show" defaultValue="9">
          <option value="9">9</option>
          <option value="12">12</option>
          <option value="15">15</option>
        </Select>
      </div>
    </div>
  );
}
