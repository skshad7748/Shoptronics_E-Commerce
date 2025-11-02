// src/design-system/molecules/CheckoutForm.tsx
import { TextInput } from "@atoms/TextInput";

export type BillingFormValues = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  address: string;
  note?: string;
};

export function CheckoutForm({
  value,
  onChange,
}: {
  value: BillingFormValues;
  onChange: (v: BillingFormValues) => void;
}) {
  const set = (k: keyof BillingFormValues, v: string) =>
    onChange({ ...value, [k]: v });

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
      <h3 className="mb-4 text-sm font-semibold text-gray-900">
        Billing details
      </h3>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <TextInput
          label="First name"
          value={value.firstName}
          onChange={(e) => set("firstName", e.target.value)}
        />
        <TextInput
          label="Last Name"
          value={value.lastName}
          onChange={(e) => set("lastName", e.target.value)}
        />
      </div>

      <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
        <TextInput
          label="Phone"
          value={value.phone}
          onChange={(e) => set("phone", e.target.value)}
        />
        <TextInput
          label="Email"
          type="email"
          value={value.email}
          onChange={(e) => set("email", e.target.value)}
        />
      </div>

      <div className="mt-4">
        <TextInput
          label="Street address"
          value={value.address}
          onChange={(e) => set("address", e.target.value)}
        />
      </div>

      <div className="mt-4">
        <TextInput
          label="Note"
          value={value.note || ""}
          onChange={(e) => set("note", e.target.value)}
        />
      </div>
    </div>
  );
}
