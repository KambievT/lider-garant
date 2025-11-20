"use client";

import FadeIn from "@/components/FadeIn";

const entrepreneurs = [
  "Быстро подберем лучшие условия по банковским гарантиям, кредитам, лизингу, страхованию.",
  "Предоставим тендерное сопровождение и поможем с РКО и ВЭД.",
  "решим даже сложные вопросы с оформлением банковских продуктов.",
];

const specialists = [
  "Закрепляем заявки",
  "Если заявка заведена через — мы закрепляем её за вами. Другой агент не может завести эту заявку даже через сторонний сервис.",
  "Верификация",
  "Вручную проверяем заявки перед отправкой в банк. Это снижает риск ошибки и отклонения.",
  "Анализируем отклонённые заявки",
  "Если банк отклонил заявку — разбираемся почему так произошло. Часто получается убедить банк, что отказ ошибочный и выпустить гарантию.",
  "Экономьте время на проверке документов и заполнении заявок - в нашей системе все автоматизировано.",
  "Помогаем заводить заявки",
  "Нам можно прислать данные для заявки и операторы Лидер-Гарант заполнят документы за вас.",
  "Получайте честные и своевременные выплаты когда вам удобно.",
];

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-7xl px-6 py-10 md:py-16 space-y-10">
      <FadeIn>
        <section className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-sm">
          <h1 className="text-3xl font-semibold text-foreground">
            Предпринимателям и компаниям
          </h1>
          <div className="mt-6 space-y-4 text-sm leading-relaxed text-foreground/80">
            {entrepreneurs.map((text) => (
              <p key={text}>{text}</p>
            ))}
          </div>
        </section>
      </FadeIn>

      <FadeIn>
        <section className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-foreground">
            Тендерным специалистам и агентам
          </h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {specialists.map((text, index) => (
              <div
                key={`${text}-${index}`}
                className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm leading-relaxed text-foreground/80"
              >
                {text}
              </div>
            ))}
          </div>
        </section>
      </FadeIn>
    </main>
  );
}
