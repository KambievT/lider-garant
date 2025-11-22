"use client";

import FadeIn from "@/components/FadeIn";
import ManagerCTASection from "@/components/ManagerCTASection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

export default function DepositsPage() {
  const [query, setQuery] = useState("");
  const [bankFilter, setBankFilter] = useState("all"); // <-- default "all"
  const [termFilter, setTermFilter] = useState("all"); // <-- default "all"
  const [visible, setVisible] = useState(8);

  const banks = [
    "Реалист",
    "Банк Казани",
    "Абсолют",
    "МТС",
    "Зенит",
    "Альфа",
    "ПСБ",
    "Газпромбанк",
    "Уралсиб",
    "Металлинвестбанк",
    "Совкомбанк",
    "МКБ",
    "Банк Левобережный",
    "Руснарбанк",
    "СГБ",
    "МСП",
    "ТКБ",
    "Санкт-Петербург",
    "Тиньков",
    "Ингострахбанк",
    "СДМ Банк",
    "ЛокоБанк",
    "Ак Барс",
    "Алеф-Банк",
    "Евразийский Банк",
    "Росбанк",
    "Транстройбанк",
    "Урал ФД",
    "Банк Колуга",
    "Банк Солидарности",
    "Меткомбанк",
    "Солид Банк",
    "Промсоцбанк",
    "БСПБ",
    "Камкомбанк",
    "Озон Банк",
    "Дом РФ",
    "Кубань Кредит",
    "Газстрансбанк",
    "Сбербанк",
  ];

  const DEMO_OFFERS = banks.map((bank, i) => ({
    id: i + 1,
    bank,
    logo: `https://via.placeholder.com/160x48?text=${encodeURIComponent(bank)}`,
    amount: i % 2 === 0 ? "до 500 млн ₽" : "до 300 млн ₽",
    term: ["1 день", "от 30 до 365 дней", "от 60 до 360 дней"][i % 3],
    rate: ["28%", "24%", "18%", "12%"][i % 4],
    commission: ["до 23.5%", "От 22.49%", "до 4%"][i % 3],
    tags: i % 2 === 0 ? ["Пополнение", "Снятие"] : ["Без пополн."],
  }));

  const terms = ["1 день", "от 30 до 365 дней", "от 60 до 360 дней"];

  const filtered = DEMO_OFFERS.filter((o) => {
    if (bankFilter !== "all" && o.bank !== bankFilter) return false;
    if (termFilter !== "all" && o.term !== termFilter) return false;
    if (query && !o.bank.toLowerCase().includes(query.toLowerCase()))
      return false;
    return true;
  });

  return (
    <main className="min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4">
        <section className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 lg:p-12 grid grid-cols-1 lg:grid-cols-[1fr,360px] gap-8 shadow-[0_0_30px_rgb(34,211,238,0.15)]">
          <div className="flex flex-col gap-6">
            <span className="inline-block text-primary font-bold text-4xl lg:text-5xl tracking-tight">
              Депозит
            </span>
            <h1 className="text-3xl font-semibold text-[var(--foreground)] leading-snug">
              Сравнивайте и выбирайте лучшие условия по депозитам
            </h1>
            <p className="text-[var(--foreground-secondary)] text-sm">
              Подобрано{" "}
              <strong className="text-foreground">26 предложений</strong> от{" "}
              <strong className="text-foreground">14 банков</strong>.
              Максимальная ставка — до{" "}
              <strong className="text-foreground">28%</strong>.
            </p>

            <div className="flex flex-wrap gap-4 mt-4">
              <button
                className="px-6 py-3 rounded-2xl bg-primary text-white font-semibold shadow-[0_0_20px_var(--primary-glow)]
        hover:brightness-110 hover:-translate-y-0.5 transition-all"
              >
                Подать заявку
              </button>
            </div>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                ["Сумма", "до 500 млн ₽"],
                ["Срок", "от 8 до 365 дней"],
                ["Комиссия", "до 23,65%"],
              ].map(([label, val]) => (
                <div
                  key={label}
                  className="bg-white/5 border border-white/10 rounded-xl p-5 min-w-[160px] flex flex-col gap-1"
                >
                  <div className="text-xs text-[var(--foreground-secondary)]">
                    {label}
                  </div>
                  <div className="font-semibold text-[var(--foreground)]">
                    {val}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-[1fr,340px] gap-10">
          <section>
            <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
              <div className="flex gap-4 flex-wrap items-center">
                {/* Bank select (shadcn) */}
                <Select value={bankFilter} onValueChange={setBankFilter}>
                  <SelectTrigger className="min-w-[200px] rounded-xl bg-white/5 border border-white/10 text-[var(--foreground)]">
                    <SelectValue>
                      {bankFilter === "all" ? "Все банки" : bankFilter}
                    </SelectValue>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Все банки</SelectItem>
                    {banks.map((b) => (
                      <SelectItem key={b} value={b}>
                        {b}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                {/* Term select (shadcn) */}
                <Select value={termFilter} onValueChange={setTermFilter}>
                  <SelectTrigger className="min-w-[180px] rounded-xl bg-white/5 border border-white/10 text-[var(--foreground)]">
                    <SelectValue>
                      {termFilter === "all" ? "Все сроки" : termFilter}
                    </SelectValue>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Все сроки</SelectItem>
                    {terms.map((t) => (
                      <SelectItem key={t} value={t}>
                        {t}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Поиск по названию"
                  className="rounded-xl bg-white/5 border border-white/10 px-4 py-2 text-sm text-[var(--foreground)] min-w-[180px]"
                />
              </div>

              <div className="text-sm text-[var(--foreground-secondary)]">
                Найдено:{" "}
                <span className="text-white font-semibold">
                  {filtered.length}
                </span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.slice(0, visible).map((o) => (
                <article
                  key={o.id}
                  className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-5 
            hover:border-[var(--primary)]/30 hover:shadow-[0_0_25px_var(--primary-glow)]
            transition-all"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div>
                        <div className="text-primary font-semibold text-2xl">
                          {o.bank}
                        </div>
                        <div className="text-xs text-[var(--foreground-secondary)]">
                          {o.term}
                        </div>
                      </div>
                    </div>

                    <div
                      className="text-lg font-bold bg-gradient-to-r
                from-[var(--primary-light)] to-[var(--primary-dark)]
                bg-clip-text text-transparent drop-shadow-[0_0_10px_var(--primary-glow)]"
                    >
                      {o.rate}
                    </div>
                  </div>

                  <div className="mt-5 flex gap-3 flex-wrap">
                    <div className="bg-white/5 border border-white/10 rounded-xl p-3 min-w-[120px]">
                      <div className="text-xs text-[var(--foreground-secondary)]">
                        Сумма
                      </div>
                      <div className="font-semibold text-[var(--foreground)]">
                        {o.amount}
                      </div>
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-xl p-3 min-w-[120px]">
                      <div className="text-xs text-[var(--foreground-secondary)]">
                        Комиссия
                      </div>
                      <div className="font-semibold text-[var(--foreground)]">
                        {o.commission}
                      </div>
                    </div>
                  </div>

                  <div className="mt-3 flex gap-2 flex-wrap">
                    {o.tags.map((t) => (
                      <span
                        key={t}
                        className="text-xs text-[var(--foreground-secondary)] bg-white/5 border border-white/10 px-2 py-1 rounded-lg"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <button
                    className="w-full mt-5 py-3 rounded-xl bg-primary
              font-semibold shadow-[0_0_20px_var(--primary-glow)]
              text-white hover:brightness-110 hover:-translate-y-0.5 transition-all"
                  >
                    Подать заявку
                  </button>
                </article>
              ))}
            </div>

            {/* Show more */}
            <div className="mt-6 text-center">
              {visible < filtered.length ? (
                <button
                  onClick={() => setVisible(filtered.length)}
                  className="px-5 py-2 rounded-xl border border-dashed border-white/15 text-[var(--foreground-secondary)] hover:border-[var(--primary)]/50 hover:text-white transition-all"
                >
                  Показать еще
                </button>
              ) : (
                filtered.length > 8 && (
                  <button
                    onClick={() => setVisible(8)}
                    className="px-5 py-2 rounded-xl border border-dashed border-white/15 text-[var(--foreground-secondary)] hover:border-[var(--primary)]/50 hover:text-white transition-all"
                  >
                    Свернуть
                  </button>
                )
              )}
            </div>
          </section>

          <section className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-[0_0_20px_rgb(34,211,238,0.1)]">
            <h2 className="text-xl font-semibold mb-3 text-white">
              Подберем самое выгодное
            </h2>
            <p className="text-sm text-[var(--foreground-secondary)] mb-6">
              Выберите из предложений банков лучшее — мы поможем оформить.
            </p>

            <form className="space-y-4">
              <Input
                placeholder="ИНН"
                className="h-12 rounded-xl bg-[#062033]/60 border border-white/10 text-sm px-4"
              />
              <Input
                placeholder="Сумма"
                className="h-12 rounded-xl bg-[#062033]/60 border border-white/10 text-sm px-4"
              />
              <Input
                placeholder="Номер телефона"
                className="h-12 rounded-xl bg-[#062033]/60 border border-white/10 text-sm px-4"
              />
              <Button
                className="w-full h-12 rounded-xl bg-primary
                text-white font-semibold shadow-[0_0_20px_var(--primary-glow)]
                hover:brightness-110 hover:-translate-y-0.5 transition-all"
              >
                Отправить заявку
              </Button>
            </form>
          </section>
        </div>

        <FadeIn>
          <ManagerCTASection />
        </FadeIn>
      </div>
    </main>
  );
}
