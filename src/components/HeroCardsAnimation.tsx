// Refactored Apple‑style smooth animation version
// Notes:
// • Плавные fade/slide анимации
// • Увеличенные отступы
// • Мягкие переходы без рывков
// • Минимальный "воздух" вокруг карточек
// • Убран лишний шум, упрощены keyframes
// • Логика сцен сохранена

"use client";

import React, { useEffect, useMemo, useState } from "react";

type HeroCardsAnimationProps = {
  rightLogoSrc?: string;
  rightText?: string;
  hubLogoSrc?: string;
  spokes?: string[];
  durationMs?: number;
  banks?: { logo: string; approved?: boolean }[];
  offers?: { bank: string; approved: boolean; rate?: string; term?: string }[];
  singleOffer?: { bank?: string; approved?: boolean; amount?: string | number };
  className?: string;
};

const ease = "cubic-bezier(0.25, 0.1, 0.25, 1)"; // Apple‑style easing

export default function HeroCardsAnimation({
  rightLogoSrc,
  rightText = "YoFin",
  hubLogoSrc,
  spokes = [],
  durationMs = 5500,
  banks = [],
  offers = [],
  singleOffer,
  className,
}: HeroCardsAnimationProps) {
  const [scene, setScene] = useState(0);

  const spokes8 = useMemo(() => {
    const arr = new Array(8).fill("");
    for (let i = 0; i < Math.min(8, spokes.length); i++) arr[i] = spokes[i] ?? "";
    return arr;
  }, [spokes]);

  useEffect(() => {
    const id = setInterval(
      () => setScene((s) => (s === 3 ? 0 : s + 1)),
      durationMs
    );
    return () => clearInterval(id);
  }, [durationMs]);

  return (
    <div className={"relative h-full w-full " + (className ?? "")}>      

      {/* Scene 0 — Left/Right cards */}
      <div
        className={`absolute inset-0 transition-all duration-700 ${scene === 0 ? "" : "pointer-events-none"}`}
        style={{ opacity: scene === 0 ? 1 : 0, zIndex: scene === 0 ? 1 : 0, visibility: scene === 0 ? "visible" : "hidden" }}
      >
        <div className="absolute inset-0 flex items-center justify-center gap-10 px-16">
          {/* Left card */}
          <div
            className="transition-all duration-700"
            style={{
              transform: scene === 0 ? "translateX(0)" : "translateX(-40px)",
              opacity: scene === 0 ? 1 : 0,
            }}
          >
            <div className="relative rounded-2xl bg-white border border-slate-200 shadow-xl w-[300px] h-[150px] p-7 dark:bg-foreground/5 dark:border-foreground/10 backdrop-blur-sm">
              <div className="text-xs text-foreground/50 mb-2">ИНН</div>
              <div className="h-3 w-40 rounded bg-foreground/10 mb-4" />
              <div className="text-xs text-foreground/50 mb-2">Сумма</div>
              <div className="h-3 w-32 rounded bg-foreground/10" />
            </div>
          </div>

          {/* Middle arrow */}
          <div
            className="transition-all duration-700"
            style={{
              transform: scene === 0 ? "translateY(0)" : "translateY(10px)",
              opacity: scene === 0 ? 1 : 0,
            }}
          >
            <div className="h-8 w-8 rounded-full flex items-center justify-center bg-foreground/5 border border-foreground/10 text-foreground/60">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </div>
          </div>

          {/* Right card */}
          <div
            className="transition-all duration-700"
            style={{
              transform: scene === 0 ? "translateX(0)" : "translateX(40px)",
              opacity: scene === 0 ? 1 : 0,
            }}
          >
            <div className="rounded-2xl bg-white border border-slate-200 shadow-xl w-[200px] h-[110px] flex items-center justify-center dark:bg-foreground/5 dark:border-foreground/10 backdrop-blur-sm">
              {rightLogoSrc ? (
                <img src={rightLogoSrc} alt="logo" className="h-10 object-contain" loading="lazy" decoding="async" />
              ) : (
                <span className="text-lg font-semibold text-foreground/80 px-3 py-1 rounded-xl">
                  {rightText}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Scene 1 — Hub with spokes */}
      <div
        className={`absolute inset-0 transition-all duration-700 ${scene === 1 ? "" : "pointer-events-none"}`}
        style={{ opacity: scene === 1 ? 1 : 0, zIndex: scene === 1 ? 1 : 0, visibility: scene === 1 ? "visible" : "hidden" }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="animate-pulse-slow">
            {hubLogoSrc && (
              <img
                src={hubLogoSrc}
                alt="hub"
                className="h-20 w-20 object-contain opacity-95"
                loading="lazy"
                decoding="async"
              />
            )}
          </div>
        </div>

        {/* 8 floating spokes */}
        {spokes8.map((src: string, i: number) => (
          <div
            key={i}
            className={`absolute top-1/2 left-1/2 transition-all duration-[900ms]`}
            style={{
              transform: scene === 1
                ? `translate(-50%, -50%) rotate(${i * 45}deg) translate(120px)`
                : `translate(-50%, -50%) rotate(${i * 45}deg) translate(0px)`,
              opacity: scene === 1 ? 1 : 0,
            }}
          >
            <div className="rounded-2xl bg-white border border-slate-200 shadow-md h-16 w-16 flex items-center justify-center dark:bg-foreground/10 dark:border-foreground/10 backdrop-blur-sm">
              {src ? (
                <img src={src} alt="spoke" className="h-8 w-8 object-contain" loading="lazy" decoding="async" />
              ) : (
                <div className="h-6 w-6 rounded bg-foreground/20" />
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Scene 2 — Banks + Offers */}
      <div
        className={`absolute inset-0 transition-all duration-700 ${scene === 2 ? "" : "pointer-events-none"}`}
        style={{ opacity: scene === 2 ? 1 : 0, zIndex: scene === 2 ? 1 : 0, visibility: scene === 2 ? "visible" : "hidden" }}
      >
        <div className="absolute inset-0 p-10">
          {/* Banks grid removed for performance */}
          <div className="hidden" />

          {/* Offer cards */}
          <div className="absolute inset-0 flex items-center justify-center gap-4 z-10">
            {(offers.length ? offers : []).slice(0, 3).map((o: { bank: string; approved: boolean; rate?: string; term?: string }, i: number) => (
              <div
                key={i}
                className="w-[240px] rounded-xl bg-white border border-slate-200 shadow-md p-3 transition-all duration-700 dark:bg-foreground/5 dark:border-foreground/10"
                style={{
                  transform: scene === 2
                    ? "translateY(0) scale(1)"
                    : "translateY(20px) scale(.96)",
                  opacity: scene === 2 ? 1 : 0.0,
                  transitionDelay: `${150 + i * 120}ms`,
                }}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <div className="text-xs font-semibold opacity-90 truncate">{o.bank}</div>
                  <div
                    className={`h-4 w-4 flex items-center justify-center rounded-full text-[9px] text-white font-bold ${
                      o.approved ? "bg-emerald-500" : "bg-rose-500"
                    }`}
                  >
                    {o.approved ? "✓" : "✕"}
                  </div>
                </div>
                <div className="h-px bg-foreground/10 mb-1.5" />
                <div className="text-xs opacity-80 mb-1.5">
                  {o.approved ? "Заявка одобрена!" : "Заявка отклонена"}
                </div>
                <div className="grid grid-cols-2 text-[11px] leading-4 opacity-70">
                  <div>Ставка</div>
                  <div className="text-right">{o.rate ?? "—"}</div>
                  <div>Срок</div>
                  <div className="text-right">{o.term ?? "—"}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scene 3 — Single offer */}
      <div
        className={`absolute inset-0 transition-all duration-700 ${scene === 3 ? "" : "pointer-events-none"}`}
        style={{ opacity: scene === 3 ? 1 : 0, zIndex: scene === 3 ? 1 : 0, visibility: scene === 3 ? "visible" : "hidden" }}
      >
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div
            className="w-[380px] rounded-2xl bg-white border border-slate-200 shadow-xl p-6 transition-all duration-700 pointer-events-auto dark:bg-foreground/5 dark:border-foreground/10"
            style={{
              transform: scene === 3 ? "translateY(0)" : "translateY(20px)",
              opacity: scene === 3 ? 1 : 0,
            }}
          >
            <div className="flex items-center justify-between mb-3">
              <div className="text-sm font-semibold opacity-90">
                {singleOffer?.bank ?? "Банк"}
              </div>
              <div
                className={`h-6 w-6 flex items-center justify-center rounded-full text-[11px] text-white font-bold ${
                  singleOffer?.approved === false ? "bg-rose-500" : "bg-emerald-500"
                }`}
              >
                {singleOffer?.approved === false ? "✕" : "✓"}
              </div>
            </div>
            <div className="h-px bg-foreground/10 mb-3" />
            <div className="text-sm opacity-80 mb-1">Предложение от банка на сумму</div>
            <div className="text-2xl font-semibold">
              {singleOffer?.amount ?? "*** *** ₽"}
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .animate-pulse-slow {
          animation: pulseSlow 2.2s ${ease} infinite;
        }
        @keyframes pulseSlow {
          0%, 100% { opacity: .6; }
          50% { opacity: 1; }
        }
      `}</style>
    </div>
  );
}
