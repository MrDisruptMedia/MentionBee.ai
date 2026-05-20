"use client";

import { usePathname } from "next/navigation";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";

const FULL_BLEED_PATHS = new Set(["/weltbienentag"]);

export function ConditionalChrome({ children }: Readonly<{ children: React.ReactNode }>) {
  const pathname = usePathname();
  const hideSiteChrome = pathname != null && FULL_BLEED_PATHS.has(pathname);

  if (hideSiteChrome) {
    return <>{children}</>;
  }

  return (
    <>
      <Header />
      <main className="flex flex-1 flex-col">{children}</main>
      <Footer />
    </>
  );
}
