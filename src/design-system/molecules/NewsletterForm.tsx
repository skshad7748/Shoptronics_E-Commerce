import { Button } from "@atoms/Button";
import { TextInput } from "@atoms/TextInput";
import React from "react";

export interface NewsletterFormProps {
  onSubmit?: (email: string) => void;
}

export function NewsletterForm({ onSubmit }: NewsletterFormProps) {
  const [email, setEmail] = React.useState("");
  const submit = (e?: React.FormEvent) => {
    e?.preventDefault();
    onSubmit?.(email);
  };

  return (
    <form onSubmit={submit} className="space-y-3">
      <p className="text-sm text-gray-600">
        Get on the list and get 10% off your first order!
      </p>
      <TextInput
        type="email"
        placeholder="Your Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="max-w-xs"
        required
      />
      <Button
        type="submit"
        className="bg-[#4F46E5] px-4 text-white hover:bg-[#4338CA]"
      >
        Subscribe Now
      </Button>
    </form>
  );
}
