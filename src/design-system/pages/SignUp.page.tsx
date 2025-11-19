import { TextInput } from "@atoms/TextInput";
import { HomeTemplate } from "@templates/Home.template";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SignUpPage() {
  const nav = useNavigate();
  const [form, setForm] = React.useState({ email: "", password: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: register call; on success:
    nav("/account");
  };

  return (
    <HomeTemplate>
      {/* Purple top strip */}
      <div className="mb-8 h-32 w-full rounded-b-2xl bg-[#3C1FF4] sm:mb-10 sm:h-40 md:h-48" />

      {/* Centered auth card */}
      <section className="mx-auto max-w-md px-6">
        <div className="rounded-2xl border border-gray-200 bg-white shadow-sm">
          <header className="border-amber-50 text-center px-6 py-3 text-sm font-medium text-gray-800">
            Sign up
          </header>

          <form onSubmit={submit} className="space-y-4 px-6 py-6">
            <TextInput
              label="User Name Or Email"
              value={form.email}
              onChange={(e) =>
                setForm((s) => ({ ...s, email: e.target.value }))
              }
            />
            <TextInput
              label="Password"
              type="password"
              value={form.password}
              onChange={(e) =>
                setForm((s) => ({ ...s, password: e.target.value }))
              }
            />

            <p className="text-[11px] leading-relaxed text-gray-500">
              Your personal data will be used to support your experience
              throughout this website, to manage access to your account, and for
              other purposes described in our{" "}
              <button type="button" className="underline">
                privacy policy
              </button>
              .
            </p>

            <button
              type="submit"
              className="w-full rounded-md bg-[#3C1FF4] py-2 text-sm font-medium text-white hover:bg-[#2c14d0]"
            >
              Sign Up
            </button>

            <Link
              to="/signin"
              className="mt-2 block w-full rounded-md border border-gray-300 py-2 text-center text-sm hover:bg-gray-50"
            >
              Back to Sign in
            </Link>
          </form>
        </div>
      </section>
    </HomeTemplate>
  );
}
