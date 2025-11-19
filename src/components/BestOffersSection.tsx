"use client";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function BestOffersSection() {
  const offers = [
    { bank: "МСП Банк", rating: 5, reviews: 237, rate: "от 26%", amount: "до 50 млн", term: "до 60 мес" },
    { bank: "Т Банк", rating: 5, reviews: 93, rate: "от 2,49% в мес", amount: "до 60 млн", term: "до 60 мес" },
    { bank: "ВТБ", rating: 5, reviews: 71, rate: "от 22%", amount: "до 30 млн", term: "до 60 мес" },
    { bank: "Альфа Банк", rating: 5, reviews: 170, rate: "от 27,5%", amount: "до 50 млн", term: "до 60 мес" },
    { bank: "АТБ", rating: 5, reviews: 65, rate: "от 20,1%", amount: "до 50 млн", term: "до 60 мес" },
    { bank: "Дом.РФ Банк", rating: 5, reviews: 83, rate: "от 23,75%", amount: "до 100 млн", term: "до 60 мес" },
  ];

  const Star = ({ filled }: { filled: boolean }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="14"
      height="14"
      fill={filled ? "var(--primary)" : "none"}
      stroke="var(--primary)"
      strokeWidth="1.5"
    >
      <path d="M12 17.3l-5.4 3 1-6.1-4.4-4.3 6.1-.9L12 3l2.7 5.9 6.1.9-4.4 4.3 1 6.1z" />
    </svg>
  );

  return (
    <section className="mx-auto w-full max-w-7xl px-6 py-10 md:py-16">
      <h2 className="mb-10 text-center text-3xl font-semibold text-foreground md:text-4xl">
        <span className="text-gradient">Лучшие предложения</span>
      </h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {offers.map((o, i) => (
          <div
            key={i}
            className="group h-full rounded-3xl p-[1px] bg-gradient-to-r from-indigo-400/30 via-sky-400/20 to-emerald-400/30 transition-transform hover:scale-[1.02]"
          >
            <Card className="h-full rounded-3xl border border-foreground/10 bg-background/90 shadow-md transition-all group-hover:shadow-xl">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-foreground/10 text-xs font-medium text-foreground/90">
                      {o.bank[0]}
                    </div>
                    <div className="text-base font-semibold text-foreground">
                      {o.bank}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    <div className="flex items-center gap-0.5 text-primary">
                      {Array.from({ length: 5 }).map((_, idx) => (
                        <Star key={idx} filled={idx < o.rating} />
                      ))}
                    </div>
                    <span className="text-foreground/60">{o.reviews} отзывов</span>
                    <span className="text-foreground/40">→</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-3 text-sm">
                  <div className="rounded-xl bg-foreground/10 p-3 text-center transition-colors group-hover:bg-foreground/15">
                    <div className="text-foreground/60">Ставка</div>
                    <div className="font-semibold text-foreground">{o.rate}</div>
                  </div>
                  <div className="rounded-xl bg-foreground/10 p-3 text-center transition-colors group-hover:bg-foreground/15">
                    <div className="text-foreground/60">Сумма</div>
                    <div className="font-semibold text-foreground">{o.amount}</div>
                  </div>
                  <div className="rounded-xl bg-foreground/10 p-3 text-center transition-colors group-hover:bg-foreground/15">
                    <div className="text-foreground/60">Срок</div>
                    <div className="font-semibold text-foreground">{o.term}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
}
