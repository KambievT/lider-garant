"use client";

import FadeIn from "@/components/FadeIn";

const services = [
  "Банковские гарантии",
  "Кредитование",
  "Открытие счетов и РКО",
  "Факторинг",
  "Лизинг",
  "ВЭД и сопровождение контрактов",
  "Тендерное сопровождение",
  "Проверка клиента и контрагента",
];

const modules = [
  {
    title: "Портал клиентов",
    description:
      "Регистрация, вход, выбор партнёра и создание заявки, обмен документами, заключение договора, оплата услуги и получение финансового продукта.",
  },
  {
    title: "Портал агентов",
    description:
      "Регистрация, заключение агентского договора, ввод данных, заполнение форм, выбор партнёра и создание заявки, сопровождение клиента.",
  },
  {
    title: "Кабинеты администраторов",
    description:
      "Управление площадкой, банками-партнёрами и агентами, настройка витрины услуг, мониторинг сделок и SLA.",
  },
];

const integrations = [
  "ЕГРЮЛ, Росстат, ФНС, ФССП, МВД, ФНС и Росфинмониторинг",
  "Портал закупок, ФНС, сервисы госорганов",
  "Банки: ПСБ, Альфа-Банк, Уралсиб, Реалист и другие",
];

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-7xl px-6 py-10 md:py-16 space-y-12">
      <FadeIn>
        <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-linear-to-br from-indigo-500/10 via-sky-500/10 to-emerald-500/10 p-8 md:p-12">
          <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          <div className="pointer-events-none absolute -right-24 -bottom-24 h-72 w-72 rounded-full bg-primary/15 blur-3xl" />
          <div className="relative space-y-4">
            <p className="text-sm uppercase tracking-[0.3em] text-primary/70">
              Цифровая интернет-площадка финансовых услуг
            </p>
            <h1 className="text-3xl font-semibold tracking-tight text-foreground md:text-5xl">
              lider-garant.ru — экосистема для бизнеса и банков
            </h1>
            <p className="max-w-2xl text-base text-foreground/75 md:text-lg">
              Платформа обеспечивает онлайн-взаимодействие юридических лиц с
              банками, микрокредитными и факторинговыми компаниями, а также с
              другими участниками финансового рынка по всей России.
            </p>
          </div>
        </section>
      </FadeIn>

      <FadeIn>
        <section className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-foreground/10 bg-white/5 p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-foreground">
              Автоматизация процесса
            </h2>
            <p className="mt-3 text-sm text-foreground/75">
              От подачи заявки до принятия решений и подписания документов в
              электронном виде посредством электронной подписи. Каждое действие
              отслеживается и фиксируется.
            </p>
          </div>
          <div className="rounded-3xl border border-foreground/10 bg-white/5 p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-foreground">
              Архитектура
            </h2>
            <p className="mt-3 text-sm text-foreground/75">
              Сайт состоит из страниц услуг, личного кабинета клиентов и
              агентов, а также административных кабинетов площадки и
              банков-партнёров.
            </p>
          </div>
        </section>
      </FadeIn>

      <FadeIn>
        <section className="rounded-3xl border border-foreground/10 bg-white/5 p-6 md:p-8">
          <h2 className="text-2xl font-semibold text-primary md:text-3xl">
            Основные услуги платформы
          </h2>
          <p className="mt-3 text-sm text-foreground/70">
            Все сервисы доступны через единый интерфейс и интегрированы с
            банковскими продуктами.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {services.map((service) => (
              <div
                key={service}
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-foreground"
              >
                {service}
              </div>
            ))}
          </div>
        </section>
      </FadeIn>

      <FadeIn>
        <section className="rounded-3xl border border-foreground/10 bg-white/5 p-6 md:p-8">
          <h2 className="text-2xl font-semibold text-primary md:text-3xl">
            Структура и роли
          </h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {modules.map((module) => (
              <div
                key={module.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-5 text-sm text-foreground/80"
              >
                <p className="text-base font-semibold text-foreground">
                  {module.title}
                </p>
                <p className="mt-3">{module.description}</p>
              </div>
            ))}
          </div>
        </section>
      </FadeIn>

      <FadeIn>
        <section className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-foreground/10 bg-white/5 p-6">
            <h3 className="text-xl font-semibold text-foreground">
              Работа клиента на портале
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-foreground/70">
              <li>• Регистрация и вход в систему</li>
              <li>• Выбор партнёра, создание заявки и загрузка документов</li>
              <li>
                • Ответы банка, заключение договоров и оплата услуги на
                расчётный счёт банка
              </li>
              <li>• Получение финансового продукта и документов</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-foreground/10 bg-white/5 p-6">
            <h3 className="text-xl font-semibold text-foreground">
              Работа агента на портале
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-foreground/70">
              <li>• Регистрация, вход и заключение агентского договора</li>
              <li>• Ввод данных и заполнение форм клиента</li>
              <li>
                • Выбор партнёра, создание заявки и получение ответа банка
              </li>
              <li>
                • Оплата услуги, получение финансового продукта, отчёт по заявке
              </li>
            </ul>
          </div>
        </section>
      </FadeIn>

      <FadeIn>
        <section className="rounded-3xl border border-foreground/10 bg-white/5 p-6 md:p-8">
          <h2 className="text-2xl font-semibold text-primary md:text-3xl">
            Интеграции
          </h2>
          <p className="mt-3 text-sm text-foreground/70">
            Портал интегрирован с банковскими API и государственными системами
            для проверки данных и автоматизации решений.
          </p>
          <ul className="mt-5 space-y-3 text-sm text-foreground/75">
            {integrations.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>
      </FadeIn>
    </main>
  );
}
