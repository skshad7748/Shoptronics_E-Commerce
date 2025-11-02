// src/design-system/pages/Checkout.page.tsx
import { BillingFormValues, CheckoutForm } from "@molecules/CheckoutForm";
import { CheckoutSummary } from "@organisms/CheckoutSummary";
import { HomeTemplate } from "@templates/Home.template";
import React from "react";

function CheckoutPage() {
  const [form, setForm] = React.useState<BillingFormValues>({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    address: "",
    note: "",
  });

  return (
    <HomeTemplate>
      <div className="mb-6 rounded-2xl bg-[#3C1FF4]">
        <div className="mx-auto max-w-6xl px-6 py-3">
          <p className="text-sm text-white/90">Checkout</p>
        </div>
        <div className="flex justify-center pb-3">
          <span className="rounded bg-white px-4 py-1 text-xs font-medium text-gray-800">
            Shopping
          </span>
        </div>
      </div>

      <section className="mx-auto max-w-6xl grid grid-cols-1 gap-6 px-6 lg:grid-cols-[1fr_360px]">
        <CheckoutForm value={form} onChange={setForm} />
        <CheckoutSummary />
      </section>
    </HomeTemplate>
  );
}

export default CheckoutPage;
