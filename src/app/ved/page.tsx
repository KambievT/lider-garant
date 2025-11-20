"use client";

import FadeIn from "@/components/FadeIn";
import BankLogosSlider from "@/components/BankLogosSlider";
import ManagerCTASection from "@/components/ManagerCTASection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";

export default function Page() {
  const offers = [
    {
      country: "Индонезия",
      rate: "Курс — Инвестбанк",
      term: "Срок 3–7 дней",
      fee: "Комиссия 2,5%",
    },
    {
      country: "Гонконг",
      rate: "Курс — ЦБ",
      term: "Срок 2–4 дня",
      fee: "Комиссия 2,3%",
    },
    {
      country: "ОАЭ",
      rate: "Курс — ЦБ",
      term: "Срок 2–7 дней",
      fee: "Комиссия 2,3%",
    },
    {
      country: "Турция",
      rate: "Курс — ЦБ",
      term: "Срок 2–7 дней",
      fee: "Комиссия 2,5%",
    },
    {
      country: "Эстония",
      rate: "Курс — ЦБ",
      term: "Срок 2–7 дней",
      fee: "Комиссия 2,9%",
    },
    {
      country: "Сингапур",
      rate: "Курс — Инвестбанк",
      term: "Срок 3–7 дней",
      fee: "Комиссия 2,4%",
    },
  ];

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

          <div className="relative grid items-center gap-8 md:grid-cols-2">
            <div className="space-y-5">
              <h1 className="text-3xl font-semibold tracking-tight text-foreground md:text-5xl">
                Внешнеэкономическая деятельность
              </h1>
              <p className="max-w-2xl text-base text-foreground/80 md:text-lg">
                Комплексные решения для импортеров и экспортеров. Поможем
                перевести деньги, получить оплату из‑за рубежа и сопровождать
                сделки.
              </p>
              <Button
                asChild
                className="h-11 rounded-xl px-6 text-sm font-medium text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl hover:brightness-110 active:translate-y-0 bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500"
              >
                <a href="#ved-form">Подать заявку</a>
              </Button>
            </div>

            <div className="relative hidden h-[320px] w-full overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl md:block">
              <Image
                src="/economic-activity.jpg"
                alt="ВЭД"
                fill
                className="object-cover rounded-3xl"
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
        <section className="mx-auto mt-4 w-full max-w-7xl py-8">
          <h2 className="mb-6 text-2xl font-bold tracking-tight text-primary md:text-3xl">
            Перевод в различных валютах
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-sm text-foreground/85 backdrop-blur-md">
              <p className="mb-3">
                С низкой комиссией и без потерь на конверсии.
              </p>
              <ul className="space-y-1 list-disc pl-5 text-foreground/80">
                <li>США, Европа, Азия, Ближний Восток и другие направления.</li>
                <li>Работаем с основными мировыми валютами.</li>
              </ul>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-sm text-foreground/85 backdrop-blur-md">
              <p className="mb-2 font-medium">
                Начинающим международного рынка и опытным участникам
              </p>
              <p className="mb-2">
                Индивидуальные тарифы и поддержка экспертов по ВЭД.
              </p>
              <p className="text-foreground/70">
                Комплексное сопровождение контрактов: берём на себя валютный
                контроль, мониторинг зачислений и декларации на товар.
              </p>
            </div>
          </div>
        </section>
      </FadeIn>

      <FadeIn>
        <section className="mx-auto mt-2 w-full max-w-7xl py-8">
          <h2 className="mb-4 text-2xl font-bold tracking-tight text-primary md:text-3xl">
            Полное сопровождение сделки с персональным менеджером
          </h2>
          <p className="mb-4 max-w-3xl text-sm text-foreground/75">
            Предоставим комплексное решение для импортеров и экспортеров,
            поможем с документами и операциями, подробно ответим на ваши
            вопросы.
          </p>
          <Button
            asChild
            variant="outline"
            className="rounded-xl px-5 py-2.5 text-sm"
          >
            <a href="#ved-form">Оставить заявку</a>
          </Button>
        </section>
      </FadeIn>

      <FadeIn>
        <section className="mx-auto mt-2 w-full max-w-7xl py-10">
          <h2 className="mb-4 text-2xl font-bold tracking-tight text-primary md:text-3xl">
            Рассчитайте международный перевод
          </h2>
          <p className="mb-6 max-w-2xl text-sm text-foreground/70">
            Введите сумму, валюту, страну и номер телефона. Мы подберём только
            самые выгодные предложения в банках, в которых уверены.
          </p>
          <form className="grid gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl md:grid-cols-2">
            <div className="space-y-4">
              <Input
                type="number"
                name="amount"
                placeholder="Сумма"
                className="h-11 rounded-full border border-foreground/15 bg-background/90 px-4 text-sm"
              />
              <Input
                type="text"
                name="currency"
                placeholder="Валюта (USD, EUR, CNY, AED и др.)"
                className="h-11 rounded-full border border-foreground/15 bg-background/90 px-4 text-sm"
              />
              <Input
                type="tel"
                name="phone"
                placeholder="Номер телефона"
                className="h-11 rounded-full border border-foreground/15 bg-background/90 px-4 text-sm"
              />
              <Input
                type="text"
                name="country"
                placeholder="Страна получателя"
                className="h-11 rounded-full border border-foreground/15 bg-background/90 px-4 text-sm"
              />
            </div>
            <div className="flex flex-col justify-between gap-4 text-sm text-foreground/75">
              <p>
                Нажмите кнопку и получите расчет. Мы найдем только самые лучшие
                предложения по комисси и курсу.
              </p>
              <Button
                type="submit"
                className="h-11 w-full rounded-xl bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500 px-6 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl"
              >
                Получить расчет
              </Button>
              <p className="text-xs text-foreground/60">
                В ближайшее время с вами свяжется наш менеджер.
              </p>
            </div>
          </form>
        </section>
      </FadeIn>

      <FadeIn>
        <section className="mx-auto mt-2 w-full max-w-7xl py-10">
          <h2 className="mb-6 text-2xl font-bold tracking-tight text-primary md:text-3xl">
            Предложения под ваши параметры
          </h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {offers.map((o) => (
              <div
                key={o.country}
                className="rounded-3xl border border-white/10 bg-white/5 p-5 text-sm text-foreground/85 backdrop-blur-md"
              >
                <div className="mb-2 text-base font-semibold text-foreground">
                  {o.country}
                </div>
                <div className="mb-1 text-foreground/80">{o.rate}</div>
                <div className="mb-1 text-foreground/80">{o.term}</div>
                <div className="mb-4 text-foreground/80">{o.fee}</div>
                <Button
                  className="h-9 w-full rounded-xl text-xs font-semibold"
                  variant="outline"
                >
                  Подать заявку
                </Button>
              </div>
            ))}
          </div>
        </section>
      </FadeIn>

      <FadeIn>
        <section className="mx-auto mt-2 w-full max-w-7xl py-10">
          <h2 className="mb-4 text-2xl font-bold tracking-tight text-primary md:text-3xl">
            Свободно оплачивайте закупки и получайте валютные платежи
          </h2>
          <div className="grid gap-6 md:grid-cols-2 text-sm text-foreground/80">
            <div className="space-y-2">
              <p>1) Мы находим агента, и вы заключаете договор.</p>
              <p>
                Помогаем заключить договор с агентом так, чтобы он провел
                платежи за вас.
              </p>
              <p>
                2) Деньги вы перечисляете агенту в рублях, мы фиксируем курс
                валюты и проводим закупки.
              </p>
            </div>
            <div className="space-y-2">
              <p>
                3) Поставщик отправляет валюту контрагенту, обычно это
                происходит в течение 1–3 рабочих дней. Вы оплачиваете комиссию
                агенту — процент от суммы перевода.
              </p>
              <p>
                4) Ваш контрагент получает платеж, а вы — отчёт и документы,
                подтверждающие исполнение обязательств.
              </p>
            </div>
          </div>
          <div className="text-sm text-foreground/75">
            <h3 className="mb-3 text-base font-semibold">
              Отправляете деньги в другую страну
            </h3>
            <p className="mb-1">Комиссия за платеж — от 0,2% до 4%.</p>
            <p className="mb-3">
              Минимальная сумма валютного платежа — 10 000 $ или эквивалент.
            </p>
            <h3 className="mb-3 text-base font-semibold">
              Получаете деньги от иностранной компании
            </h3>
            <p className="mb-1">Комиссия за платеж — от 0,5%.</p>
            <p>
              Минимальная сумма валютного платежа — 10 000 $ или эквивалент в
              другой валюте.
            </p>
          </div>
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
