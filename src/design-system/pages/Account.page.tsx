import { HomeTemplate } from "@templates/Home.template";
import React from "react";
import { Link } from "react-router-dom";

type TabKey = "dashboard" | "orders" | "tracking";

function StatusPill({
  children,
  color = "bg-green-500",
}: {
  children: React.ReactNode;
  color?: string;
}) {
  return (
    <span
      className={`inline-flex items-center rounded px-2 py-0.5 text-xs font-medium text-white ${color}`}
    >
      {children}
    </span>
  );
}

function Sidebar({
  active,
  setActive,
}: {
  active: TabKey;
  setActive: (t: TabKey) => void;
}) {
  const Item = ({ id, label }: { id: TabKey; label: string }) => (
    <button
      onClick={() => setActive(id)}
      className={`w-full border-b px-3 py-3 text-left text-sm ${
        active === id
          ? "bg-[#3C1FF4] text-white"
          : "bg-white text-gray-800 hover:bg-gray-50"
      }`}
    >
      {label}
    </button>
  );

  return (
    <aside className="w-full max-w-[220px] overflow-hidden rounded-md border border-gray-200">
      {/* profile header */}
      <div className="flex items-center gap-3 border-b bg-white px-3 py-3">
        <img
          src="https://i.pravatar.cc/80"
          alt="avatar"
          className="h-8 w-8 rounded-full object-cover"
        />
        <div className="leading-tight">
          <div className="text-sm font-medium text-gray-900">Jhon Smith</div>
          <div className="text-xs text-gray-500">smith@gmail.com</div>
        </div>
      </div>

      <Item id="dashboard" label="Dashboard" />
      <Item id="orders" label="Order History" />
      <Item id="tracking" label="Order Tracking" />
    </aside>
  );
}

function OrdersTable() {
  const rows = [
    {
      id: "#2144",
      date: "Oct 10, 22",
      status: "Completed",
      total: "$152.00 for 1 item",
    },
  ];
  return (
    <div className="w-full overflow-hidden rounded-md border border-gray-200 bg-white">
      <table className="w-full text-left text-sm">
        <thead className="bg-gray-50 text-xs text-gray-600">
          <tr>
            <th className="px-4 py-2">Order</th>
            <th className="px-4 py-2">Date</th>
            <th className="px-4 py-2">Status</th>
            <th className="px-4 py-2">Total</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.id} className="border-t">
              <td className="px-4 py-3">{r.id}</td>
              <td className="px-4 py-3">{r.date}</td>
              <td className="px-4 py-3">
                <StatusPill>Completed</StatusPill>
              </td>
              <td className="px-4 py-3">{r.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function AccountPage() {
  const [tab, setTab] = React.useState<TabKey>("orders");

  return (
    <HomeTemplate>
      {/* top purple strip with breadcrumb */}
      <div className="mb-6 rounded-b-2xl bg-[#3C1FF4]">
        <div className="mx-auto max-w-6xl px-6 py-3 text-sm text-white/90">
          <Link to="/" className="hover:text-white">
            Home
          </Link>{" "}
          <span>›</span> <span>Account</span>
        </div>
      </div>

      <section className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-6 lg:grid-cols-[240px_1fr]">
        <Sidebar active={tab} setActive={setTab} />

        <div className="space-y-4">
          {tab === "dashboard" && (
            <div className="rounded-md border border-gray-200 bg-white p-4 text-sm text-gray-700">
              Welcome back, <b>Jhon</b> — this is your dashboard.
            </div>
          )}

          {tab === "orders" && <OrdersTable />}

          {tab === "tracking" && (
            <div className="rounded-md border border-gray-200 bg-white p-4 text-sm">
              Enter your order number to track your package.
            </div>
          )}
        </div>
      </section>
    </HomeTemplate>
  );
}
