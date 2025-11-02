import { useCart } from "../../store/cart";

export function OrderSummary() {
  const { subtotal } = useCart();
  const shipping = subtotal > 0 ? 20 : 0;
  const total = subtotal + shipping;

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
      <h3 className="mb-3 text-center text-sm font-semibold">Order Summary</h3>
      <div className="space-y-2 text-sm">
        <div className="flex items-center justify-between text-gray-600">
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex items-center justify-between text-gray-600">
          <span>Shipping Fee</span>
          <span>${shipping.toFixed(2)}</span>
        </div>
        <div className="mt-2 flex items-center justify-between border-t pt-2 text-base font-semibold">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>
      <button className="mt-4 w-full rounded-md bg-[#4F46E5] py-2 text-white hover:bg-[#4338CA]">
        Checkout
      </button>
    </div>
  );
}
