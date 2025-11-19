"use client";

import Image from "next/image";

const news = [
  { title: "Обновление условий банковских гарантий", date: "15.11.2025", excerpt: "Снижение ставок и упрощённый скоринг для малого бизнеса." },
  { title: "Новый партнёр по лизингу", date: "10.11.2025", excerpt: "Запущены программы с авансом от 0% и ускоренным одобрением." },
  { title: "ВЭД: прямые коррсчета", date: "05.11.2025", excerpt: "Подключили ещё два иностранных банка для удобных платежей." },
  { title: "Страхование контрактов", date: "01.11.2025", excerpt: "Экспресс-полисы для контрактов свыше 30 млн руб." },
  { title: "Тендерное сопровождение", date: "28.10.2025", excerpt: "Каждый третий тендер — победа. Расширили экспертизу." },
];

export default function NewsRibbon() {
  return (
    <section className="relative mx-auto w-full max-w-7xl px-6 py-10 md:py-16 overflow-hidden">
      <h2 className="mb-12 text-center text-3xl font-semibold text-foreground md:mb-14 md:text-4xl">
        <span className="text-primary">
          Новости компании
        </span>
      </h2>

      <div className="grid gap-8 md:grid-cols-3">
        <article className="md:col-span-2 relative overflow-hidden rounded-3xl border border-foreground/10 bg-background/70 shadow-[0_10px_40px_rgba(0,0,0,0.15)] transition hover:shadow-xl">
          <div className="relative h-56 w-full overflow-hidden md:h-64">
            <Image
              src="/news-fon.jpg"
              alt="Главная новость"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
              className="object-cover transition-transform duration-500 hover:scale-105"
              priority={false}
            />
          </div>
          <div className="p-6 md:p-7">
            <h3 className="mb-2 text-lg font-semibold text-foreground md:text-xl">
              {news[0]?.title}
            </h3>
            <p className="mb-4 text-sm leading-relaxed text-foreground/80">
              {news[0]?.excerpt}
            </p>
            <a href="#" className="inline-flex h-10 items-center rounded-full bg-primary px-5 text-sm font-medium text-white shadow transition-all duration-200 hover:brightness-110">
              Читать полностью →
            </a>
          </div>
        </article>

        <aside className="relative rounded-3xl border border-foreground/10 bg-background/60 p-5 shadow-md">
          <div className="mb-4 text-sm font-medium text-foreground/80">Лента событий</div>
          <ul className="divide-y divide-foreground/10">
            {news.slice(1).map((n, i) => (
              <li key={i} className="py-3 first:pt-0 last:pb-0">
                <a href="#" className="block transition hover:bg-white/5 rounded-md p-2">
                  <div className="mb-1 text-sm font-semibold text-foreground hover:underline">
                    {n.title}
                  </div>
                  <time className="text-xs text-foreground/60">{n.date}</time>
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-4">
            <a href="#" className="text-sm font-medium text-primary transition hover:underline">
              Смотреть все новости →
            </a>
          </div>
        </aside>
      </div>
    </section>
  );
}