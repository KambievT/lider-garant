"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const news = [
  {
    title: "Обновление условий банковских гарантий",
    date: "15.11.2025",
    excerpt: "Снижение ставок и упрощённый скоринг для малого бизнеса.",
    image: "/news-fon.jpg",
  },
  {
    title: "Новый партнёр по лизингу",
    date: "10.11.2025",
    excerpt: "Запущены программы с авансом от 0% и ускоренным одобрением.",
    image: "/news-fon.jpg",
  },
  {
    title: "ВЭД: прямые коррсчета",
    date: "05.11.2025",
    excerpt: "Подключили ещё два иностранных банка для удобных платежей.",
    image: "/news-fon.jpg",
  },
  {
    title: "Страхование контрактов",
    date: "01.11.2025",
    excerpt: "Экспресс-полисы для контрактов свыше 30 млн руб.",
    image: "/news-fon.jpg",
  },
  {
    title: "Тендерное сопровождение",
    date: "28.10.2025",
    excerpt: "Каждый третий тендер — победа. Расширили экспертизу.",
    image: "/news-fon.jpg",
  },
  {
    title: "Расширение продуктовой линейки",
    date: "25.10.2025",
    excerpt: "Добавлены новые финансовые инструменты для бизнеса.",
    image: "/news-fon.jpg",
  },
  {
    title: "Партнёрство с ведущими банками",
    date: "20.10.2025",
    excerpt: "Подписали соглашения с топ-5 банками страны.",
    image: "/news-fon.jpg",
  },
  {
    title: "Обновление платформы",
    date: "15.10.2025",
    excerpt: "Запущена новая версия личного кабинета с улучшенным UX.",
    image: "/news-fon.jpg",
  },
];

export default function NewsRibbon() {
  return (
    <section className="relative mx-auto w-full max-w-7xl px-6 py-10 md:py-16 overflow-hidden">
      <div className="relative overflow-hidden rounded-[32px] border border-foreground/10 p-8 md:p-12 shadow-[0_35px_80px_-40px_rgba(8,10,26,0.85)]">
        <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 -bottom-24 h-80 w-80 rounded-full bg-emerald-500/20 blur-3xl" />

        <div className="relative">
          <h2 className="mb-10 text-center text-3xl font-semibold text-primary md:text-4xl">
            Новости компании
          </h2>

          <Swiper
            modules={[Navigation, Autoplay]}
            slidesPerView={1}
            spaceBetween={20}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 24 },
              1280: { slidesPerView: 4, spaceBetween: 24 },
            }}
            navigation={{
              nextEl: ".news-swiper-button-next",
              prevEl: ".news-swiper-button-prev",
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            loop
            className="news-swiper"
          >
            {news.map((item, i) => (
              <SwiperSlide key={i}>
                <article className="group relative h-full overflow-hidden rounded-3xl border border-foreground/10 bg-foreground/5 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.15)] transition-all duration-500 hover:shadow-[0_15px_50px_rgba(0,0,0,0.25)] hover:border-foreground/20">
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-5">
                    <time className="mb-2 block text-xs text-foreground/60">
                      {item.date}
                    </time>
                    <h3 className="mb-3 text-base font-semibold text-foreground line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="mb-4 text-sm leading-relaxed text-foreground/70 line-clamp-2">
                      {item.excerpt}
                    </p>
                    <Button
                      asChild
                      size="sm"
                      className="h-9 rounded-full px-4 text-xs font-medium"
                    >
                      <a href="#">Читать полностью →</a>
                    </Button>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              className="news-swiper-button-prev flex h-10 w-10 items-center justify-center rounded-full border border-foreground/20 bg-foreground/5 text-foreground transition-all hover:bg-foreground/10 hover:border-foreground/30"
              aria-label="Предыдущая новость"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              className="news-swiper-button-next flex h-10 w-10 items-center justify-center rounded-full border border-foreground/20 bg-foreground/5 text-foreground transition-all hover:bg-foreground/10 hover:border-foreground/30"
              aria-label="Следующая новость"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
