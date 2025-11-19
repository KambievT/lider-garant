"use client";
import { CheckCircle2, Phone, MessageSquareText } from "lucide-react";

export default function ManagerCTASection() {
  return (
    <section className="mx-auto w-full max-w-7xl px-6 py-14 md:py-20">
      <div
        className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl outline outline-1 outline-white/0"
      >
        {/* затемнение */}
        <div className="hidden" />

        {/* декоративное свечение */}
        <div className="pointer-events-none absolute -bottom-16 -right-16 h-56 w-56 rounded-full bg-primary/10 blur-[120px]" />
        <div className="pointer-events-none absolute -top-16 -left-10 h-48 w-48 rounded-full bg-indigo-500/10 blur-[120px]" />

        <div className="relative z-10 px-6 py-10 md:px-12 md:py-16">
          <div className="text-center">
            <h2 className="mb-8 text-2xl font-semibold leading-tight text-foreground md:text-3xl">
              Вам всегда поможет персональный менеджер
            </h2>

            {/* карточки */}
            <div className="mx-auto grid max-w-5xl gap-5 sm:grid-cols-2 md:grid-cols-3">
              {[
                {
                  icon: "check",
                  title: "Подайте заявку",
                  desc: "Перезвоним в течение 15 минут и подберём решение.",
                  link: "#application",
                  type: "btn",
                },
                {
                  icon: "phone",
                  title: "Позвоните нам",
                  desc: "Звонок бесплатный по России.",
                  link: "tel:+7 800 000 00 00",
                  type: "link",
                },
                {
                  icon: "message",
                  title: "Напишите нам",
                  desc: "Отвечаем на почту в рабочее время.",
                  link: "mailto:client@lider-garant.ru",
                  type: "link",
                },
              ].map((c, i) => (
                <div
                  key={i}
                  className="
                    group rounded-2xl border border-white/20 bg-white/5 
                    backdrop-blur-xl p-5 shadow 
                    transition-all duration-300 hover:shadow-md hover:-translate-y-0.5
                  "
                >
                  <div className="mb-3 flex items-center gap-3">
                    <span
                      className="
                        inline-flex h-9 w-9 items-center justify-center rounded-full 
                        bg-primary/10 text-primary text-base
                      "
                    >
                      {c.icon === "check" && <CheckCircle2 className="h-5 w-5" />}
                      {c.icon === "phone" && <Phone className="h-5 w-5" />}
                      {c.icon === "message" && <MessageSquareText className="h-5 w-5" />}
                    </span>
                    <div className="text-sm font-medium text-foreground">
                      {c.title}
                    </div>
                  </div>

                  <p className="mb-5 text-xs text-foreground/70">{c.desc}</p>

                  {c.type === "btn" ? (
                    <a
                      href={c.link}
                      className="
                        inline-flex h-10 items-center justify-center w-full rounded-full
                        border border-primary text-primary text-xs font-semibold
                        transition-all duration-300 
                        hover:-translate-y-0.5 hover:bg-primary/10
                      "
                    >
                      Отправить заявку
                    </a>
                  ) : (
                    <a
                      href={c.link}
                      className="
                        inline-flex h-10 items-center justify-center w-full rounded-full
                        border border-white/30 text-xs font-medium text-foreground 
                        transition-all duration-300 
                        hover:-translate-y-0.5 hover:bg-white/10 hover:border-white/50
                      "
                    >
                      {c.link.replace(/^(tel:|mailto:)/, "")}
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* правая колонка */}
          <div className="hidden lg:flex flex-col items-center justify-center text-center px-6">
            <div className="text-sm font-medium uppercase text-foreground/70 tracking-wide mb-3">
              Ваш персональный менеджер
            </div>
            <p className="max-w-xs text-xs text-foreground/70 leading-relaxed">
              Следит за сроками, помогает с документами и держит связь удобным
              для вас способом.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
