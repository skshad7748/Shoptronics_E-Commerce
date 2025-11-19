import { Header } from "@organisms/Header";
import { SiteFooter } from "@organisms/SiteFooter";
import React from "react";

export interface HomeTemplateProps {
  children?: React.ReactNode;
  onSearch?: (q: string) => void;
}

const MAIN_WRAPPER = "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8";

export function HomeTemplate({ children, onSearch }: HomeTemplateProps) {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50 text-gray-900">
      <Header onSearch={onSearch} />
      <main role="main" className="flex-1 py-8 sm:py-10 lg:py-12">
        <div className={`${MAIN_WRAPPER} flex flex-col gap-10`}>{children}</div>
      </main>
      <SiteFooter />
    </div>
  );
}
