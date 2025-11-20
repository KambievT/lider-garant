"use client";
import FadeIn from "@/components/FadeIn";
import BankLogosSlider from "@/components/BankLogosSlider";
import ManagerCTASection from "@/components/ManagerCTASection";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Page() {
  const TOTAL_OFFERS = 17;
  const [visibleOffers, setVisibleOffers] = useState(6);

  const related = [
    {
      title: "Кредитирование бизнеса",
      desc: "Кредитование для осуществления текущих операционных и иных расходов.",
      href: "/credits",
    },
    {
      title: "ВЭД",
      desc: "Прямые корреспондентские счета в иностранных банках и гарантийные снижение комиссии на конвертацию.",
      href: "/ved",
    },
    {
      title: "Страхование",
      desc: "Экспресс страхование крупных контрактов свыше 1млрд рублей.",
      href: "/insurance",
    },
    {
      title: "Лизинг",
      desc: "Финансируем новое и с пробегом с авансом от 0%.",
      href: "/leasing",
    },
    {
      title: "Проверка контрагентов",
      desc: "Все от реквизитов и отчетности,до контактов и кадровых рисков.",
      href: "/checking",
    },
    {
      title: "Тендерное сопровождение",
      desc: "Каждый 3‑й тендер — победа! Штат опытных специалистов по цене одного сотрудника.Специальный счет, ЕРУЗ, аккредитация на закрытые секции.",
      href: "/tender-support",
    },
  ];

  return (
    <main className="mx-auto w-full max-w-7xl px-6 py-10 md:py-16">
      <FadeIn>
        <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-500/10 via-sky-500/10 to-emerald-500/10 p-8 md:p-12">
          <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
          <div className="pointer-events-none absolute -right-24 -bottom-24 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />

          <div className="relative grid items-center gap-6 md:grid-cols-2">
            <div className="space-y-5">
              <h1 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                Лизинг для бизнеса
              </h1>
              <p className="max-w-2xl text-foreground/80">
                Предложим самые выгодные предложения по лизингу для бизнеса.
                Финансируем с авансом от 0%. Работаем со сложным оборудованием.
                Подберем выгодное решение.
              </p>
              <Button
                asChild
                className="h-11 rounded-xl px-6 text-sm font-medium text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl hover:brightness-110 active:translate-y-0 bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500"
              >
                <a href="#leasing-form">Подать заявку</a>
              </Button>
            </div>

            <div className="relative hidden md:block aspect-[4/3] w-full overflow-hidden rounded-2xl">
              <Image
                src="/leasing.jpg"
                alt="Лизинг для бизнеса"
                fill
                className="object-cover object-center"
                priority
              />
            </div>
          </div>
        </section>
      </FadeIn>

      <FadeIn>
        <div className="mt-8">
          <BankLogosSlider />
        </div>
      </FadeIn>

      <FadeIn>
        <section className="mx-auto mt-8 w-full max-w-7xl py-8">
          <h2 className="mb-6 text-2xl font-bold tracking-tight text-primary md:text-3xl">
            Подобрано {TOTAL_OFFERS} предложений
          </h2>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-5 md:p-6 backdrop-blur-xl shadow-[0_0_30px_-15px_rgba(0,0,0,0.25)]">
            <div className="grid gap-6 md:grid-cols-2">
              {Array.from({ length: TOTAL_OFFERS })
                .slice(0, visibleOffers)
                .map((_, i) => (
                  <div
                    key={i}
                    className="relative flex items-center gap-4 rounded-2xl border border-white/10 bg-background/60 p-5 backdrop-blur-md transition-all hover:-translate-y-0.5 hover:shadow-md"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-background">
                      <Image
                        src={`/logos/${(i % 8) + 1}.png`}
                        alt="Логотип лизинговой компании"
                        width={40}
                        height={40}
                        className="h-8 w-8 object-contain"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="mb-1 text-sm font-semibold text-foreground">
                        Лизинговая компания № {120 + i}
                      </div>
                      <div className="text-xs text-foreground/70">
                        Сумма лизинга: до 80 млн ₽ · Срок: до 2600 дн ·
                        Удорожание в год: от 16,4%
                      </div>
                    </div>
                    <Button className="shrink-0 rounded-xl px-4 py-2 text-xs font-semibold shadow-sm transition-transform hover:-translate-y-0.5 hover:shadow-md bg-primary text-primary-foreground">
                      Подать заявку
                    </Button>
                  </div>
                ))}
            </div>
          </div>
          {visibleOffers < TOTAL_OFFERS && (
            <div className="mt-6 flex justify-center">
              <Button
                variant="outline"
                onClick={() =>
                  setVisibleOffers((v) => Math.min(v + 6, TOTAL_OFFERS))
                }
                className="rounded-full px-6 py-2 text-sm text-foreground/80 backdrop-blur-md transition-all hover:-translate-y-0.5 hover:shadow-md"
              >
                Показать еще
              </Button>
            </div>
          )}
        </section>
      </FadeIn>

      <FadeIn>
        <section className="mx-auto mt-2 w-full max-w-7xl py-10">
          <h2 className="mb-6 text-2xl font-bold tracking-tight text-primary md:text-3xl">
            Получите персональное предложение
          </h2>
          <div className="mb-6 grid gap-3 md:grid-cols-4">
            {[
              "Аванс от 0%",
              "Экспресс рассмотрение",
              "Экономия на налогах",
              "Работаем с спец предложениями и скидки",
            ].map((t) => (
              <div
                key={t}
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-foreground/85 backdrop-blur-md"
              >
                {t}
              </div>
            ))}
          </div>

          <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
            {[
              "Автотранспорт",
              "Спецтехника",
              "Оборудование",
              "Строительная",
              "Дорожная",
              "Компьютерное и мобильное",
              "Легковой коммерческий транспорт",
              "Промышленное",
              "Грузовой транспорт",
              "Самоходная",
              "Сельскохозяйственная",
              "Пищевое",
            ].map((t) => (
              <div
                key={t}
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-foreground/85 backdrop-blur-md"
              >
                {t}
              </div>
            ))}
          </div>
        </section>
      </FadeIn>

      <FadeIn>
        <section
          id="leasing-form"
          className="mx-auto mt-2 w-full max-w-7xl py-12"
        >
          <div className="grid items-stretch gap-10 md:grid-cols-2">
            <div>
              <h2 className="mb-4 text-2xl font-semibold text-foreground">
                Подберем самые выгодные предложения
              </h2>
              <p className="mb-6 text-sm text-foreground/70">
                Заполните форму, выберите среди предложений лучшее, получите
                финансирование и заключайте контракт.
              </p>
              <form
                className="space-y-4 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl shadow-[0_0_30px_-15px_rgba(0,0,0,0.25)]"
                action="#"
                method="post"
              >
                <div className="grid gap-4">
                  <Input
                    type="text"
                    name="inn"
                    placeholder="ИНН"
                    inputMode="numeric"
                    pattern="^(\\d{10}|\\d{12})$"
                    title="ИНН должен содержать 10 или 12 цифр"
                    required
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
                  className="h-11 rounded-xl px-6 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110 hover:shadow-2xl active:translate-y-0 bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500"
                >
                  Отправить заявку
                </Button>
              </form>
            </div>
            <div className="relative hidden min-h-[280px] overflow-hidden rounded-3xl border border-foreground/10 md:block">
              <Image
                src="/good-deal.jpg"
                alt="s"
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
