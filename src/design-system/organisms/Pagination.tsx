export function Pagination() {
  const pages = [1, 2, 3, 4, 5];
  const current = 3;
  return (
    <div className="flex items-center justify-center gap-4">
      <button className="text-sm text-gray-600 hover:text-gray-900">
        Prev
      </button>
      <div className="flex items-center gap-1">
        {pages.map((p) => (
          <button
            key={p}
            className={
              p === current
                ? "h-8 w-8 rounded-md bg-brand-600 text-sm font-medium text-white"
                : "h-8 w-8 rounded-md text-sm text-gray-700 hover:bg-gray-100"
            }
          >
            {p}
          </button>
        ))}
      </div>
      <button className="text-sm text-gray-600 hover:text-gray-900">
        Next
      </button>
    </div>
  );
}
