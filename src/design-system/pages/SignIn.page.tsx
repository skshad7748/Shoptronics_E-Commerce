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
      {/* Purple top strip */}
      <div className="mb-10 h-16 w-full rounded-b-2xl bg-[#3C1FF4]" />

      {/* Centered auth card */}
      <section className="mx-auto max-w-md px-6">
        <div className="rounded-2xl border border-gray-200 bg-white shadow-sm">
          <header className="border-b px-6 py-3 text-center text-sm font-medium text-gray-800">
            Sign in
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

            <div className="flex items-center justify-between text-xs text-gray-500">
              <label className="inline-flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={form.remember}
                  onChange={(e) =>
                    setForm((s) => ({ ...s, remember: e.target.checked }))
                  }
                />
                <span>Remember Me</span>
              </label>
              <button type="button" className="hover:text-gray-700">
                Forgotten password?
              </button>
            </div>

            <button
              type="submit"
              className="w-full rounded-md bg-[#3C1FF4] py-2 text-sm font-medium text-white hover:bg-[#2c14d0]"
            >
              Sign In
            </button>

            <div className="text-center text-xs text-gray-500">
              Don’t have an account?
            </div>

            <Link
              to="/signup"
              className="block w-full rounded-md border border-gray-300 py-2 text-center text-sm hover:bg-gray-50"
            >
              Sign up
            </Link>
          </form>
        </div>
      </section>
    </HomeTemplate>
  );
}
