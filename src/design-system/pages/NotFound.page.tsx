import { HomeTemplate } from "@templates/Home.template";
import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <HomeTemplate>
      <section className="flex w-full flex-col items-center justify-center rounded-3xl border border-gray-100 bg-white/90 px-6 py-16 text-center shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-600">
          404
        </p>
        <h1 className="mt-4 text-3xl font-bold text-gray-900">Page not found</h1>
        <p className="mt-3 max-w-2xl text-sm text-gray-500">
          We couldn’t find the page you’re looking for. Please check the URL, go
          back, or head to the shop to discover our best-selling products.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md border border-transparent bg-gray-900 px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-gray-800"
          >
            Back to home
          </Link>
          <Link
            to="/shop"
            className="inline-flex items-center justify-center rounded-md border border-gray-200 px-5 py-2 text-sm font-semibold text-gray-900 transition-colors hover:border-gray-300 hover:bg-gray-50"
          >
            Browse products
          </Link>
        </div>
      </section>
    </HomeTemplate>
  );
}
