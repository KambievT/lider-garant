"use client";
import BankLogosSlider from "@/components/BankLogosSlider";
import FadeIn from "@/components/FadeIn";
import ManagerCTASection from "@/components/ManagerCTASection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { useState } from "react";

export default function Page() {
  const related = [
    {
      title: "Банковские гарантии",
      desc: "44-ФЗ, 223-ФЗ, 185-ФЗ (615 ПП), коммерческие закупки, налоговые гарантии.",
      btn: "Узнать лимит",
      href: "/bank-guarantee",
    },
    {
      title: "Льготное кредитование бизнеса",
      desc: "Кредитование для осуществления текущих операционных и иных расходов.",
      btn: "Подобрать условия",
      href: "/business-credit",
    },
    {
      title: "Финансирование контракта",
      desc: "Онлайн-заявка за минуту, бесплатное сравнение ставок, лучшие условия получения кредита.",
      btn: "Подобрать кредит",
      href: "/credits",
    },
    {
      title: "Лизинг",
      desc: "Финансируем новое и с пробегом с авансом 0%.",
      btn: "Узнать больше",
      href: "/leasing",
    },
    {
      title: "Тендерное сопровождение",
      desc: "Каждый 3-й тендер — победа! Штат специалистов по цене одного. Спецсчёт, ЕРУЗ, закрытые секции.",
      btn: "Подробнее",
      href: "/tender",
    },
    {
      title: "Проверка контрагентов",
      desc: "Все: от реквизитов и отчётности до контактов и кадровых рисков.",
      btn: "Подробнее",
      href: "/check",
    },
  ];
  const TOTAL_OFFERS = 25;
  const [visibleOffers, setVisibleOffers] = useState(8);

  return (
    <main className="mx-auto w-full max-w-7xl px-6 py-10 md:py-16">
      <FadeIn>
        <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-500/10 via-sky-500/10 to-emerald-500/10 p-8 md:p-12">
          <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
          <div className="pointer-events-none absolute -right-24 -bottom-24 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />

          <div className="relative grid items-center gap-8 md:grid-cols-2">
            <div className="space-y-5">
              <h1 className="text-3xl font-semibold tracking-tight text-foreground md:text-5xl">
                Факторинг
              </h1>
              <p className="max-w-2xl text-base text-foreground/80 md:text-lg">
                Предлагаем выбрать вам лучшие условия по факторингу гарантии для
                бизнеса!
              </p>
              <div className="flex items-center gap-3">
                <Button className="h-11 rounded-xl px-6 text-sm font-medium text-white shadow-lg transition-all duration-300 bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500">
                  Подать заявку
                </Button>
              </div>
            </div>

            <div className="relative hidden h-[360px] w-full overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl md:flex items-center justify-center">
              <Image
                src="/finance-products/calculator-hand.png"
                alt=""
                width={500}
                height={500}
                className="h-72 w-auto object-contain"
              />
            </div>
          </div>
        </section>
      </FadeIn>

      <FadeIn>
        <BankLogosSlider />
      </FadeIn>
      <FadeIn>
        <section className="mx-auto w-full max-w-7xl py-6">
          <div className="mb-6 flex items-center justify-between">
            <h3 className="text-xl font-semibold text-foreground">
              Подобрано 8 предложений
            </h3>
            <span className="text-sm text-foreground/60">
              Показываем только самые лучшие предложения
            </span>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {Array.from({ length: TOTAL_OFFERS })
              .slice(0, visibleOffers)
              .map((_, i) => (
                <div
                  key={i}
                  className="relative flex items-center gap-4 rounded-2xl border border-foreground/10 bg-white/5 p-5"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-foreground/10 bg-background">
                    <Image
                      src={`/logos/${(i % 8) + 1}.png`}
                      alt="Логотип банка"
                      width={40}
                      height={40}
                      className="h-8 w-8 object-contain"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="mb-1 text-sm font-semibold text-foreground">
                      Банк № {2340 + i}
                    </div>
                    <div className="text-xs text-foreground/70">
                      Сумма: до 500 млн ₽ · Срок: до 2600 дн · Комиссия: от 1.8%
                    </div>
                  </div>
                  <Button className="shrink-0 rounded-xl px-4 py-2 text-xs font-semibold shadow-sm transition-transform hover:-translate-y-0.5 hover:shadow-md bg-primary text-primary-foreground">
                    Подать заявку
                  </Button>
                </div>
              ))}
          </div>
          {visibleOffers < TOTAL_OFFERS && (
            <div className="mt-6 flex justify-center">
              <Button
                variant="outline"
                onClick={() =>
                  setVisibleOffers((v) => Math.min(v + 6, TOTAL_OFFERS))
                }
                className="rounded-full px-6 py-2 text-sm text-foreground/80 transition-transform hover:-translate-y-0.5 hover:shadow-sm"
              >
                Показать еще
              </Button>
            </div>
          )}
        </section>
      </FadeIn>
      <FadeIn>
        <section className="mx-auto mt-2 w-full max-w-7xl py-12">
          <div className="grid items-stretch gap-10 md:grid-cols-2">
            <div>
              <h2 className="mb-4 text-2xl font-semibold text-foreground">
                Подберем самые выгодные предложения
              </h2>
              <p className="mb-6 text-sm text-foreground/70">
                Заполните форму, выберите среди предложений банков лучшее,
                получите гарантию и заключайте контракт с заказчиком.
              </p>
              <form className="space-y-4" action="#" method="post">
                <div className="grid gap-4">
                  <Input
                    type="text"
                    name="inn"
                    placeholder="ИНН"
                    inputMode="numeric"
                    pattern="^(\\d{10}|\\d{12})$"
                    title="ИНН должен содержать 10 или 12 цифр"
                    required
                    maxLength={12}
                    className="h-12 w-full rounded-full border border-foreground/15 bg-background/90 px-4 text-sm"
                  />
                  <Input
                    type="number"
                    name="amount"
                    placeholder="Сумма"
                    inputMode="numeric"
                    min={1}
                    step={1000}
                    title="Укажите сумму больше 0"
                    required
                    className="h-12 w-full rounded-full border border-foreground/15 bg-background/90 px-4 text-sm"
                  />
                  <Input
                    type="tel"
                    name="phone"
                    placeholder="Номер телефона"
                    inputMode="tel"
                    pattern="^(?:\\+?7|8)?\\d{10}$"
                    title="Формат: +7XXXXXXXXXX или 8XXXXXXXXXX"
                    required
                    className="h-12 w-full rounded-full border border-foreground/15 bg-background/90 px-4 text-sm"
                  />
                </div>
                <label className="flex items-start gap-3 text-xs text-foreground/70">
                  <input
                    type="checkbox"
                    required
                    className="mt-0.5 h-4 w-4 rounded border-foreground/30"
                  />
                  <span>
                    Ставя галочку, я соглашаюсь на обработку персональных
                    данных, в соответствии с
                    <a
                      href="/docs/agreement.pdf"
                      target="_blank"
                      className="mx-1 underline"
                    >
                      Соглашением
                    </a>
                    и
                    <a
                      href="/docs/privacy.pdf"
                      target="_blank"
                      className="ml-1 underline"
                    >
                      Политикой конфиденциальности
                    </a>
                    .
                  </span>
                </label>
                <Button
                  type="submit"
                  className="h-11 rounded-xl px-6 text-sm font-semibold text-white shadow-lg transition-transform duration-200 hover:-translate-y-0.5 hover:brightness-105 hover:shadow-xl active:translate-y-0 bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500"
                >
                  Отправить заявку
                </Button>
              </form>
            </div>

            <div className="relative h-[320px] md:h-auto w-full rounded-3xl overflow-hidden border border-white/10">
              <Image
                src="/good-deal.jpg"
                alt="good deal"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </section>
      </FadeIn>
      <FadeIn>
        <section className="mx-auto w-full max-w-7xl py-12 md:py-16">
          <h2 className="mb-8 text-2xl font-bold text-primary md:text-3xl">
            Смотрите также
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {related.map((item) => (
              <div
                key={item.title}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl transition-all hover:-translate-y-0.5"
              >
                <div className="mb-2 text-lg font-semibold text-foreground">
                  {item.title}
                </div>
                <p className="mb-5 text-sm text-foreground/70">{item.desc}</p>
                <Button
                  asChild
                  variant="outline"
                  className="rounded-xl px-4 py-2 text-sm"
                >
                  <a href={item.href}>Подробнее</a>
                </Button>
              </div>
            ))}
          </div>
        </section>
      </FadeIn>
      <FadeIn>
        <ManagerCTASection />
      </FadeIn>
    </main>
  );
}
