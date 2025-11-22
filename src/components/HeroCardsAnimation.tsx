"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const sources = [
  "EGRUL",
  "FNS",
  "MVD",
  "Rosstat",
  "FSSP",
  "Rosfinmonitoring",
  "GovProc",
];
const bankOffers = [
  { bank: "Банк 1", rate: "22%", term: "12 мес", status: "Одобрено" },
  { bank: "Банк 2", rate: "25%", term: "24 мес", status: "Отклонено" },
  { bank: "Банк 3", rate: "20%", term: "18 мес", status: "Одобрено" },
];

export const FullAnimation = () => {
  const [step, setStep] = useState(0);
  const [selectedBank, setSelectedBank] = useState<number | null>(null);

  useEffect(() => {
    const timers = [3000, 3000];
    if (step < 2) {
      const timer = setTimeout(() => setStep(step + 1), timers[step]);
      return () => clearTimeout(timer);
    }
  }, [step]);

  return (
    <div className="relative flex h-96 w-full items-center justify-center bg-white/5 rounded-2xl overflow-hidden">
      <AnimatePresence mode="wait">
        {/* Step 1: Large Title */}
        {step === 0 && (
          <motion.h1
            key="title"
            className="text-4xl md:text-5xl font-bold text-gray-900"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            Lider Garant
          </motion.h1>
        )}

        {/* Step 2: Sources around center */}
        {step === 1 && (
          <motion.div
            key="sources"
            className="relative flex h-full w-full items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.h1
              className="absolute text-4xl md:text-5xl font-bold text-gray-900"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              Lider Garant
            </motion.h1>

            {sources.map((src, i) => {
              const angle = (i / sources.length) * 2 * Math.PI;
              const radius = 90;
              const top = 50 + ((radius * Math.sin(angle)) / 100) * 100;
              const left = 50 + ((radius * Math.cos(angle)) / 100) * 100;

              return (
                <motion.div
                  key={src}
                  className="absolute w-20 h-20 flex items-center justify-center rounded-full bg-blue-200 text-gray-900 font-semibold shadow-lg"
                  style={{
                    top: `${top}%`,
                    left: `${left}%`,
                    translateX: "-50%",
                    translateY: "-50%",
                  }}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: i * 0.2, duration: 0.8 }}
                >
                  {src}
                </motion.div>
              );
            })}

            {/* Lines from center */}
            {sources.map((_, i) => {
              const angle = (i / sources.length) * 2 * Math.PI;
              const x = 50 + 0.9 * 50 * Math.cos(angle);
              const y = 50 + 0.9 * 50 * Math.sin(angle);
              return (
                <motion.div
                  key={`line-${i}`}
                  className="absolute bg-gray-300"
                  style={{
                    top: "50%",
                    left: "50%",
                    width: "2px",
                    height: "calc(90px)",
                    transformOrigin: "top",
                    rotate: `${(i / sources.length) * 360}deg`,
                  }}
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                />
              );
            })}
          </motion.div>
        )}

        {/* Step 3: Bank offers */}
        {step === 2 && (
          <motion.div
            key="banks"
            className="flex flex-col items-center justify-center gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.h1
              className="text-4xl md:text-5xl font-bold text-gray-900"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              Lider Garant
            </motion.h1>

            <div className="flex flex-wrap justify-center gap-4 mt-6">
              {bankOffers.map((b, i) => (
                <motion.div
                  key={i}
                  className={`w-56 p-4 rounded-2xl border text-center cursor-pointer transition-transform ${
                    selectedBank === i
                      ? "border-green-500 bg-green-50 scale-105"
                      : "border-gray-200 bg-white hover:scale-105 hover:shadow-md"
                  }`}
                  onClick={() => setSelectedBank(i)}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: i * 0.2, duration: 0.5 }}
                >
                  <h3 className="text-lg font-semibold">{b.bank}</h3>
                  <p>Ставка: {b.rate}</p>
                  <p>Срок: {b.term}</p>
                  <p
                    className={`font-bold ${
                      b.status === "Одобрено"
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {b.status}
                  </p>
                </motion.div>
              ))}
            </div>

            {selectedBank !== null && (
              <motion.div
                className="mt-4 h-10 w-64 bg-green-200 rounded-full flex items-center justify-center font-semibold text-green-800 shadow-inner"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1 }}
              >
                Деньги переведены на счёт!
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
