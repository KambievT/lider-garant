import Link from "next/link";
import { Button } from "@/components/ui/button";
import FadeIn from "@/components/FadeIn";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-7xl items-center justify-center px-6 py-20">
      <FadeIn>
        <div className="relative w-full max-w-2xl text-center">
          <div className="pointer-events-none absolute -left-32 -top-32 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
          <div className="pointer-events-none absolute -right-32 -bottom-32 h-64 w-64 rounded-full bg-emerald-500/20 blur-3xl" />

          <div className="relative rounded-[32px] border border-white/10 bg-[#0b0f2b] p-12 text-white shadow-[0_35px_80px_-40px_rgba(8,10,26,0.85)]">
            <h1 className="mb-4 text-8xl font-bold text-primary md:text-9xl">404</h1>
            <h2 className="mb-4 text-2xl font-semibold md:text-3xl">Страница не найдена</h2>
            <p className="mb-8 text-base text-white/70 md:text-lg">
              К сожалению, запрашиваемая страница не существует или была перемещена.
            </p>

            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button asChild size="lg" className="rounded-full px-8">
                <Link href="/">На главную</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full border-white/20 text-white px-8">
                <Link href="/contacts">Связаться с нами</Link>
              </Button>
            </div>
          </div>
        </div>
      </FadeIn>
    </main>
  );
}

