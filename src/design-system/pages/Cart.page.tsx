import { CartTable } from "@organisms/CartTable";
import { OrderSummary } from "@organisms/OrderSummary";
import { PageHeroBar } from "@organisms/PageHeroBar";
import { HomeTemplate } from "@templates/Home.template";

export default function CartPage() {
  return (
    <HomeTemplate>
      <PageHeroBar
        crumbs={[{ label: "Home", to: "/" }, { label: "Cart" }]}
        height="h-16"
      />

      <section className="mx-auto max-w-6xl px-6">
        <div className="mb-3">
          <div className="inline-block rounded bg-brand-600 px-3 py-1 text-xs font-medium text-white">
            Shopping
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_340px]">
          <CartTable />
          <OrderSummary />
        </div>
      </section>
    </HomeTemplate>
  );
}
