// src/design-system/pages/OrderSuccess.page.tsx
import { HomeTemplate } from "@templates/Home.template";
import React from "react";
import { Link, useLocation } from "react-router-dom";

type SuccessState = {
  orderNumber?: number;
  dateISO?: string;
  total?: number;
  email?: string;
  paymentMethod?: string;
};

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-md bg-[#F4F2FF] px-3 py-2 text-center text-xs text-gray-700">
      {children}
    </div>
  );
}

export default function OrderSuccessPage() {
  const { state } = useLocation() as { state: SuccessState };
  const date = state?.dateISO ? new Date(state.dateISO) : new Date();

  return (
    <HomeTemplate>
      {/* purple strip */}
      <div className="mb-6 h-14 w-full rounded-b-2xl bg-[#3C1FF4]" />

      <section className="mx-auto max-w-5xl px-6">
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm md:p-10">
          <h1 className="mb-8 text-center text-lg font-semibold text-gray-900">
            Thank you. Your order has been received.
          </h1>

          <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
            <Pill>Order number: {state?.orderNumber ?? "—"}</Pill>
            <Pill>
              Date:{" "}
              {date
                .toLocaleDateString(undefined, {
                  month: "short",
                  day: "2-digit",
                  year: "2-digit",
                })
                .replace(",", "")}
            </Pill>
            <Pill>Total: ${Number(state?.total ?? 0).toFixed(2)}</Pill>
          </div>

          <div className="mt-3 grid grid-cols-1 gap-3 md:grid-cols-2">
            <Pill>Email: {state?.email ?? "—"}</Pill>
            <Pill>Payment method: {state?.paymentMethod ?? "—"}</Pill>
          </div>

          <div className="mt-8 flex justify-center">
            <Link
              to="/shop"
              className="rounded-md bg-[#4F46E5] px-5 py-2 text-sm text-white hover:bg-[#4338CA]"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </section>
    </HomeTemplate>
  );
}
