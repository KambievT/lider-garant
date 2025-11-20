"use client";

import { Button } from "@/components/ui/button";
import { CheckCircle2, MessageSquareText, Phone } from "lucide-react";

const cards = [
  {
    icon: CheckCircle2,
    title: "Подайте заявку",
    desc: "Перезвоним в течение 15 минут и подберём решение.",
    link: "#application",
    cta: "Отправить заявку",
    variant: "default" as const,
  },
  {
    icon: Phone,
    title: "Позвоните нам",
    desc: "Звонок бесплатный по России.",
    link: "tel:+7 800 000 00 00",
    cta: "+7 800 000 00 00",
    variant: "outline" as const,
  },
  {
    icon: MessageSquareText,
    title: "Напишите нам",
    desc: "Отвечаем на почту в рабочее время.",
    link: "mailto:client@lider-garant.ru",
    cta: "client@lider-garant.ru",
    variant: "ghost" as const,
  },
];

export default function ManagerCTASection() {
  return (
    <section className="mx-auto w-full max-w-7xl px-6 py-16 md:py-24">
      <div className="relative overflow-hidden rounded-[32px] border border-foreground/15">
        <div className="relative grid gap-10 px-8 py-12 md:px-14 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-foreground/70">
              Всегда на связи
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-primary md:text-[40px] md:leading-tight">
              Вам всегда поможет персональный менеджер
            </h2>
            <p className="mt-4 max-w-xl text-sm text-foreground/70 md:text-base">
              Мы берём на себя организацию коммуникации: менеджер подключается в
              любом канале, следит за сроками и держит вас в курсе на каждом
              шаге.
            </p>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {cards.map(({ icon: Icon, title, desc, link, cta, variant }) => (
                <div
                  key={title}
                  className="group rounded-2xl border border-white/10 bg-white/5/60 p-5 shadow-[0_20px_45px_-35px_rgba(15,23,42,0.9)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-white/25 hover:shadow-[0_35px_70px_-40px_rgba(6,182,212,0.9)]"
                >
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-foreground/15 text-foreground">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div className="text-sm font-semibold">{title}</div>
                  </div>
                  <p className="mt-3 text-xs text-foreground/70">{desc}</p>
                  <Button
                    asChild
                    variant={variant}
                    size="lg"
                    className="mt-5 w-full justify-center rounded-2xl text-xs font-semibold uppercase tracking-wide"
                  >
                    <a href={link}>{cta}</a>
                  </Button>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-foreground/10 bg-foreground/5 p-6 text-center text-foreground/80 backdrop-blur-2xl">
            <div className="text-sm font-semibold uppercase tracking-[0.3em] text-foreground/60">
              Ваш менеджер
            </div>
            <p className="mt-4 text-3xl font-semibold text-primary">
              Лидер&nbsp;Гарант
            </p>
            <p className="mt-4 text-sm leading-relaxed text-foreground/75">
              Следит за сроками, помогает с документами и держит связь удобным
              для вас способом. Решаем вопросы даже вне рабочего времени, если
              ситуация требует оперативности.
            </p>
            <div className="mt-6 flex flex-col items-center gap-3 text-sm">
              <div className="rounded-2xl border border-foreground/10 bg-foreground/10 px-4 py-2 text-foreground">
                График: 07:00 — 23:00 (МСК)
              </div>
              <div className="rounded-2xl border border-foreground/10 bg-foreground/10 px-4 py-2 text-foreground">
                Каналы: телефон, почта, мессенджеры
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
