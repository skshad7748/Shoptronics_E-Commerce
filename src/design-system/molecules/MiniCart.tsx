import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../../store/cart";

export function MiniCart({ open }: { open: boolean }) {
  const { items, subtotal, removeItem } = useCart();
  const nav = useNavigate();
  return (
    <div
      className={[
        "absolute right-0 top-full z-50 mt-2 w-80 rounded-xl border border-gray-200 bg-white shadow-xl",
        open
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none",
      ].join(" ")}
    >
      <div className="max-h-80 overflow-auto p-3">
        {items.length === 0 && (
          <p className="p-2 text-sm text-gray-500">Your cart is empty.</p>
        )}
        {items.map((i) => (
          <div
            key={i.id}
            className="grid grid-cols-[48px_1fr,auto] items-center gap-2 p-2"
          >
            <img
              src={i.image}
              alt={i.title}
              className="h-12 w-12 object-contain"
            />
            <div className="text-sm">
              <div className="line-clamp-2">{i.title}</div>
              <div className="text-xs text-gray-500">
                ${i.price.toFixed(2)} × {i.qty}
              </div>
            </div>
            <button
              onClick={() => removeItem(i.id)}
              className="text-xs text-red-500"
            >
              ×
            </button>
          </div>
        ))}
      </div>

      <div className="border-t p-3 text-sm">
        <div className="flex items-center justify-between">
          <span className="text-gray-600">Subtotal:</span>
          <span className="font-medium">${subtotal.toFixed(2)}</span>
        </div>
        <div className="mt-2 flex items-center gap-2">
          <Link
            to="/cart"
            className="flex-1 rounded-md border border-gray-300 px-3 py-2 text-center text-sm"
          >
            Expand Cart
          </Link>
          <button
            className="flex-1 rounded-md bg-[#4F46E5] px-3 py-2 text-white hover:bg-[#4338CA]"
            onClick={() => nav("/checkout")}
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
