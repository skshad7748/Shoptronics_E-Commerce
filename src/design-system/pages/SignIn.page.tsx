import { TextInput } from "@atoms/TextInput";
import { HomeTemplate } from "@templates/Home.template";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SignInPage() {
  const nav = useNavigate();
  const [form, setForm] = React.useState({
    email: "",
    password: "",
    remember: false,
  });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: auth call; on success:
    nav("/account");
  };

  return (
    <HomeTemplate>
      {/* Blue top header strip - responsive height */}
      <div className="mb-8 h-32 w-full rounded-b-2xl bg-[#3C1FF4] sm:mb-10 sm:h-40 md:h-48" />

      {/* Centered auth card - mobile responsive */}
      <section className="mx-auto w-full max-w-md px-4 sm:px-6">
        <div className="rounded-2xl border border-gray-200 bg-white shadow-sm">
          {/* Sign in header */}
          <header className="border-b border-gray-100 px-6 py-4 text-center">
            <h1 className="text-lg font-semibold text-gray-900 sm:text-xl">
              Sign in
            </h1>
          </header>

          <form onSubmit={submit} className="space-y-5 px-6 py-6">
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

            {/* Remember Me and Forgotten password */}
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <label className="inline-flex items-center gap-2 text-xs text-gray-600 sm:text-sm">
                <input
                  type="checkbox"
                  checked={form.remember}
                  onChange={(e) =>
                    setForm((s) => ({ ...s, remember: e.target.checked }))
                  }
                  className="h-4 w-4 rounded border-gray-300 text-[#3C1FF4] focus:ring-2 focus:ring-[#3C1FF4]"
                />
                <span>Remember Me</span>
              </label>
              <button
                type="button"
                className="text-left text-xs text-gray-600 hover:text-gray-900 sm:text-right sm:text-sm"
              >
                Forgotten password?
              </button>
            </div>

            {/* Sign In button */}
            <button
              type="submit"
              className="w-full rounded-md bg-[#3C1FF4] py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#2c14d0] focus:outline-none focus:ring-2 focus:ring-[#3C1FF4] focus:ring-offset-2 sm:py-3"
            >
              Sign In
            </button>

            {/* Don't have an account text */}
            <div className="pt-2 text-center text-xs text-gray-600 sm:text-sm">
              Don't have an account?
            </div>

            {/* Sign up button */}
            <Link
              to="/signup"
              className="block w-full rounded-md border border-gray-300 bg-white py-2.5 text-center text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 sm:py-3"
            >
              Sign up
            </Link>
          </form>
        </div>
      </section>
    </HomeTemplate>
  );
}
