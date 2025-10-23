import { Header } from "@organisms/Header";
import { SiteFooter } from "@organisms/SiteFooter";
import React from "react";

export interface HomeTemplateProps {
  children?: React.ReactNode;
  onSearch?: (q: string) => void;
}

export function HomeTemplate({ children, onSearch }: HomeTemplateProps) {
  return (
    <div className="min-h-full">
      <Header onSearch={onSearch} />
      <main className="mx-auto max-w-6xl px-6 py-10">{children}</main>
      <SiteFooter />
    </div>
  );
}
