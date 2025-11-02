import { QuantityStepper } from "@atoms/QuantityStepper";
import { useCart } from "../../store/cart";

export function CartTable() {
  const { items, setQty, removeItem } = useCart();

  if (items.length === 0) {
    return <p className="text-sm text-gray-600">Your cart is empty.</p>;
  }

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
      {items.map((i) => (
        <div
          key={i.id}
          className="grid grid-cols-[72px_1fr,140px] items-center gap-4 border-b last:border-none py-3"
        >
          <img
            src={i.image}
            alt={i.title}
            className="h-16 w-16 object-contain"
          />
          <div>
            <div className="font-medium text-gray-900">{i.title}</div>
            <div className="text-sm text-gray-500">${i.price.toFixed(2)}</div>
            <button
              onClick={() => removeItem(i.id)}
              className="mt-1 text-xs text-red-500"
            >
              Remove
            </button>
          </div>
          <div className="ml-auto">
            <QuantityStepper value={i.qty} onChange={(v) => setQty(i.id, v)} />
          </div>
        </div>
      ))}
    </div>
  );
}
