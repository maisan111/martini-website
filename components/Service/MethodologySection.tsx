"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

// [E] Proper type instead of `as any[]`
interface MethodologyStep {
  t: string; // title
  d: string; // description
}

export default function MethodologySection() {
  const { t, i18n } = useTranslation("common");
  const isAr = i18n.language === "ar";

  // [D] Pre-computed for readability and to avoid inline ternary evaluation
  const xOffset = isAr ? -50 : 50;
  const fontBase = isAr
    ? "font-Camel"
    : "font-Sanseriffic tracking-widest";

  const steps = t("methodology.steps", {
    returnObjects: true,
  }) as MethodologyStep[];

  return (
    <section className="py-12 bg-[#231A15] relative">
      <div className="container mx-auto px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 items-center">

          {/* Image column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative aspect-[4/5] lg:aspect-square group"
          >
            <div
              className={`absolute -inset-4 border border-[#DDD3CB]/20 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-700 ${
                isAr ? "-translate-x-4" : "translate-x-4"
              }`}
            />
            {/*
             * BEFORE:
             *   <Image src="/images/living-room.webp" alt="Process" fill ... />
             *   — No sizes prop, alt is non-empty but redundant.
             *
             * AFTER: [A] sizes added, [B] loading explicit, [C] alt corrected.
             */}
            <Image
              src="/images/living-room.webp"
              alt=""
              fill
              className="object-cover grayscale contrast-125 opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000"
              sizes="(max-width: 1024px) 100vw, 50vw"
              loading="lazy"
            />
          </motion.div>

          {/* Text column */}
          <motion.div
            initial={{ opacity: 0, x: xOffset }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h2
              className={`text-[52px] font-bold mb-12 text-[#FFFFFF] ${fontBase}`}
            >
              {t("methodology.title")}{" "}
              <span className="text-[#DDD3CB] font-light">
                {t("methodology.accent")}
              </span>
            </h2>

            <div className={`space-y-12 ${fontBase}`}>
              {steps.map((step, i) => (
                <div key={i} className="group flex gap-8">
                  <div className="relative">
                    <span
                      className={`text-[#F2F2F2] font-light text-4xl opacity-20 group-hover:opacity-100 group-hover:text-[#e2dedb] transition-all ${fontBase}`}
                    >
                      0{i + 1}
                    </span>
                    <div className="absolute top-full left-1/2 w-[1px] h-12 bg-[#8F8F8F]/20 origin-top scale-y-0 group-hover:scale-y-100 transition-transform" />
                  </div>

                  <div className="pt-2">
                    <h4
                      className={`font-bold mb-3 text-[#FFFFFF] ${
                        isAr
                          ? "font-Camel text-[24px]"
                          : "font-Sanseriffic tracking-widest text-xl"
                      }`}
                    >
                      {step.t}
                    </h4>
                    <p
                      className={`text-[#CCCBD0] font-light leading-relaxed max-w-sm ${
                        isAr
                          ? "text-[20px] font-Camel"
                          : "text-[16px] font-Sanseriffic tracking-widest"
                      }`}
                    >
                      {step.d}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}