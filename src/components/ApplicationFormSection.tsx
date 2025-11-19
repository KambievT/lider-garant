"use client";

import { useForm } from "react-hook-form";
import Image from "next/image";
import { toast } from "sonner";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

type FormValues = {
  product: string;
  inn: string;
  amount: string;
};

export default function ApplicationFormSection() {
  const form = useForm<FormValues>({
    defaultValues: { product: "Кредиты", inn: "", amount: "" },
    mode: "onChange",
  });

  const onSubmit = (values: FormValues) => {
    const isInnValid = /^\d{10}|\d{12}$/.test(values.inn);
    const amountNum = Number(values.amount.replace(/\s/g, ""));

    if (!isInnValid) {
      toast.error("ИНН должен содержать 10 или 12 цифр");
      return;
    }
    if (!amountNum || amountNum <= 0) {
      toast.error("Укажите сумму больше 0");
      return;
    }
    toast.success("Заявка отправлена", {
      description: `${values.product}: ${amountNum.toLocaleString("ru-RU")} ₽`,
    });
  };

  const products = ["Кредиты", "Банковская гарантия", "ВЭД", "Лизинг", "Страхование"];

  return (
    <section id="application" className="mx-auto mt-2 w-full max-w-7xl py-10 md:mt-4 md:py-16">
      <div className="relative overflow-hidden rounded-3xl border border-foreground/10 bg-foreground/5 p-6 md:p-10">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <h3 className="mb-5 text-3xl font-semibold text-foreground">Оставьте заявку</h3>
            <div className="mb-6 flex flex-wrap gap-3">
              {products.map((p) => (
                <button
                  key={p}
                  type="button"
                  onClick={() => form.setValue("product", p)}
                  className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors shadow-sm border ${
                    form.watch("product") === p
                      ? "bg-[var(--primary)] text-white border-[var(--primary)] shadow-md"
                      : "bg-background/40 text-foreground/80 border-foreground/10 hover:bg-[var(--primary)]/10 hover:text-[var(--primary)]"
                  }`}
                >
                  {p}
                </button>
              ))}
            </div>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid gap-3 md:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="inn"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground/90">ИНН</FormLabel>
                        <FormControl>
                          <Input
                            inputMode="numeric"
                            placeholder="ИНН"
                            maxLength={12}
                            {...field}
                            className="h-12 rounded-full bg-background/90 border border-foreground/10 px-4"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="amount"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground/90">Сумма</FormLabel>
                        <FormControl>
                          <Input
                            type="text"
                            placeholder="Сумма"
                            {...field}
                            className="h-12 rounded-full bg-background/90 border border-foreground/10 px-4"
                            onChange={(e) => {
                              const raw = e.target.value.replace(/[^\d]/g, "");
                              const formatted = raw.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
                              field.onChange(formatted);
                            }}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="flex flex-col items-start gap-3 md:flex-row md:items-center">
                  <Button
                    type="submit"
                    className="h-11 rounded-full px-6 font-semibold bg-[var(--primary)] text-white shadow-md hover:brightness-110 transition"
                  >
                    ОСТАВИТЬ ЗАЯВКУ
                  </Button>
                  <p className="text-xs text-foreground/70">
                    Находим только самые лучшие предложения, в которых сами уверены
                  </p>
                </div>
              </form>
            </Form>
          </div>

          <div className="relative hidden min-h-[220px] rounded-3xl border border-foreground/10 bg-background/40 lg:block overflow-hidden">
            <Image src="/zayavka.jpg" alt="Заявка" fill sizes="(min-width: 1024px) 50vw, 0" className="object-cover" loading="lazy" decoding="async" />
            <div className="absolute inset-0">
              <div className="absolute right-[-20%] top-[-20%] h-[280px] w-[280px] rounded-full bg-yellow-400/40 blur-3xl" />
              <div className="absolute right-[10%] bottom-[-10%] h-[220px] w-[220px] rounded-full bg-primary/30 blur-3xl" />
              <div className="absolute left-[-15%] top-[20%] h-[160px] w-[160px] rounded-full bg-secondary/30 blur-3xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}