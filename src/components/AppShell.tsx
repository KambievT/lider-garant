"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Header from "@/components/Header";
import SiteFooter from "@/components/SiteFooter";
import { ArrowLeft } from "lucide-react";

export default function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const hideChrome =
    pathname?.startsWith("/login") || pathname?.startsWith("/register");

  if (hideChrome) {
    return (
      <div className="min-h-dvh flex flex-col bg-background">
        <div className="mx-auto w-full max-w-7xl px-6 py-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-foreground/80 hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>На главную</span>
          </Link>
        </div>
        <div className="flex-1">{children}</div>
      </div>
    );
  }

  return (
    <>
      <Header />
      {children}
      <SiteFooter />
    </>
  );
}
