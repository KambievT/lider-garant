"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import Image from "next/image";

const banks = Array.from({ length: 16 }, (_, i) => `/logos/${i + 1}.png`);

export default function BankLogosSlider() {
  const items = [...banks, ...banks, ...banks];
  return (
    <section className="mx-auto w-full max-w-7xl px-6 py-14">
      <div className="relative overflow-hidden rounded-[32px] border border-foreground/10">
        <div className="relative px-6 py-10 md:px-12">
          <div className="mb-6 text-sm font-semibold uppercase tracking-[0.3em] text-foreground/70">
            Наши партнёры
          </div>
          <Swiper
            modules={[Autoplay, FreeMode]}
            slidesPerView={2}
            spaceBetween={12}
            breakpoints={{
              480: { slidesPerView: 3, spaceBetween: 16 },
              768: { slidesPerView: 5, spaceBetween: 18 },
              1024: { slidesPerView: 6, spaceBetween: 20 },
            }}
            loop
            freeMode={{ enabled: true, momentum: false }}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            speed={2000}
            className="select-none"
          >
            {items.map((src, i) => (
              <SwiperSlide key={i}>
                <div className="flex h-16 items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-6 backdrop-blur-lg transition-all duration-300 hover:border-cyan-300/50">
                  <Image
                    src={src}
                    alt={`Логотип банка ${i + 1}`}
                    width={120}
                    height={40}
                    sizes="(max-width: 768px) 80px, 120px"
                    className="h-10 w-auto object-contain"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
