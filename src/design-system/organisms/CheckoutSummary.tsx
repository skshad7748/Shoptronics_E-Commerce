// src/design-system/organisms/CheckoutSummary.tsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../store/cart";

export function CheckoutSummary() {
  const { items, subtotal } = useCart();
  const [shipping, setShipping] = React.useState<0 | 20>(0);
  const [payment, setPayment] = React.useState<"bkash" | "stripe">("bkash");
  const total = subtotal + shipping;
  const { clear } = useCart();
  const nav = useNavigate();

  const placeOrder = () => {
    const orderNo = Math.floor(1000 + Math.random() * 9000); // e.g., 1979
    const payload = {
      orderNumber: orderNo,
      dateISO: new Date().toISOString(),
      total,
      email: "mol@gmail.com", // ← optionally read from your billing form/store
      paymentMethod: payment === "stripe" ? "Stripe" : "Bkash",
    };
    clear();
    nav("/order-success", { state: payload, replace: true });
  };

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
      <h3 className="mb-3 text-center text-sm font-semibold">Your order</h3>

      {/* item preview */}
      <div className="space-y-3">
        {items.map((i) => (
          <div
            key={i.id}
            className="grid grid-cols-[56px_1fr,auto] items-center gap-3"
          >
            <img
              src={i.image}
              alt={i.title}
              className="h-12 w-12 object-contain"
            />
            <div className="text-sm">
              <div className="line-clamp-2">{i.title}</div>
              <div className="text-xs text-[#4F46E5]">
                ${i.price.toFixed(2)} × {i.qty}
              </div>
            </div>
            <div className="text-sm font-medium">
              ${(i.price * i.qty).toFixed(2)}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-3 border-t pt-3 text-sm">
        <div className="flex items-center justify-between text-gray-600">
          <span>Subtotal ({items.reduce((n, i) => n + i.qty, 0)} items)</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
      </div>

      {/* Shipping */}
      <div className="mt-4 border-t pt-3">
        <div className="mb-2 text-center text-sm font-semibold">Shipping</div>
        <div className="space-y-2 text-sm">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="ship"
              checked={shipping === 0}
              onChange={() => setShipping(0)}
            />
            <span>Shipping Free</span>
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="ship"
              checked={shipping === 20}
              onChange={() => setShipping(20)}
            />
            <span>Shipping Fee $20</span>
          </label>
        </div>
      </div>

      {/* Total */}
      <div className="mt-3 flex items-center justify-between border-t pt-3 text-base font-semibold">
        <span>Total</span>
        <span>${total.toFixed(2)}</span>
      </div>

      {/* Payment */}
      <div className="mt-4 border-t pt-3">
        <div className="mb-2 text-center text-sm font-semibold">Payment</div>
        <div className="space-y-2 text-sm">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="pay"
              checked={payment === "bkash"}
              onChange={() => setPayment("bkash")}
            />
            <span>Bkash</span>
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="pay"
              checked={payment === "stripe"}
              onChange={() => setPayment("stripe")}
            />
            <span>Stripe</span>
          </label>
        </div>
      </div>

      <button
        className="mt-4 w-full rounded-md bg-[#4F46E5] py-2 text-white hover:bg-[#4338CA]"
        onClick={placeOrder}
      >
        Place Order
      </button>
    </div>
  );
}
