"use client";

import React from "react";
import Image from "next/image";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import {
  PaintBrushIcon,
  BuildingOffice2Icon,
  HomeModernIcon,
  BriefcaseIcon,
  ChatBubbleBottomCenterTextIcon,
  GlobeAltIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";

export default function ServicesPage() {
  const { t, i18n } = useTranslation("common");
  const isAr = i18n.language === "ar";

  const ANIMATIONS = {
    container: {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
    },
    item: {
      hidden: { opacity: 0, y: 40 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
      },
    },
  };

  const iconMapping: Record<string, React.ReactNode> = {
    design: <PaintBrushIcon className="w-8 h-8" />,
    urban: <GlobeAltIcon className="w-8 h-8" />,
    interior: <HomeModernIcon className="w-8 h-8" />,
    project: <BriefcaseIcon className="w-8 h-8" />,
    consulting: <ChatBubbleBottomCenterTextIcon className="w-8 h-8" />,
    sustainability: <BuildingOffice2Icon className="w-8 h-8" />,
  };

  const serviceKeys = [
    "design",
    "urban",
    "interior",
    "project",
    "consulting",
    "sustainability",
  ];
  const [activeService, setActiveService] = useState<number | null>(null);
  return (
    <main
      dir={isAr ? "rtl" : "ltr"}
      className={` min-h-screen  ${isAr ? "font-Camel" : "font-Sanseriffic"}`}
    >
      {/* 1. Page Header Section */}
      <section className="relative h-[100vh] overflow-hidden">
        <motion.div
          className="absolute inset-0 z-0 scale-110"
          initial={{ scale: 1.15 }}
          animate={{ scale: 1.05 }}
          transition={{ duration: 2.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src="/images/architecture.jpg"
            alt="bg"
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        <div className="absolute inset-0 z-[1] bg-gradient-to-r from-[#0D0905]/90 via-[#0D0905]/75 to-transparent" />
        <div className="absolute inset-0 z-[1] bg-gradient-to-t from-[#0D0905]/90 via-transparent to-[#0D0905]/30 backdrop-blur-sm" />

        <div
          className="pointer-events-none absolute inset-0 z-[2] opacity-[0.04]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundSize: "200px",
          }}
        />

        {/* Vertical rule — FIX: static classes بدل dynamic */}
        <motion.div
          className={`absolute top-0 bottom-0 z-[3] w-px bg-gradient-to-b from-transparent via-[#DDD3CB]/25 to-transparent ${
            isAr ? "right-[10%] md:right-[15%]" : "left-[10%] md:left-[15%]"
          }`}
          initial={{ scaleY: 0, opacity: 0 }}
          animate={{ scaleY: 1, opacity: 1 }}
          transition={{ duration: 1.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          style={{ transformOrigin: "top" }}
        />

        {/* Main Content — FIX: إزالة items-end/items-start من هون */}
        <div className="absolute inset-0 z-10 flex flex-col justify-center pb-20">
          <div className="container mx-auto px-8 md:px-16  mt-32">
            {/* Eyebrow — FIX: justify-start دائماً، الـ dir يتحكم بالاتجاه */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex items-center gap-4 mb-8"
            >
              <span className="w-8 h-px bg-[#DDD3CB]/65 shrink-0" />
              <span
                className={`text-[#DDD3CB]/70 uppercase ${isAr ? "font-Camel text-[13px] tracking-[0.2em]" : "font-Sanseriffic text-[11px] tracking-[0.6em]"}`}
              >
                {t("services_page_header.subtitle")}
              </span>
            </motion.div>

            {/* Headline */}
            <div className="overflow-hidden mb-8">
              <motion.h1
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 1.1,
                  delay: 0.55,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`leading-[0.95] text-white ${
                  isAr
                    ? "font-Camel text-[50px] lg:text-[105px] tracking-normal"
                    : "font-Sanseriffic text-[50px] lg:text-[85px] tracking-widest"
                }`}
              >
                {t("services_page_header.title_accent")}
                <br />
                <span className="text-[#DDD3CB] font-light">
                  {t("services_page_header.title_main")}
                </span>
              </motion.h1>
            </div>

            {/* Bottom row — FIX: flex-row عادي، الـ dir يعكس تلقائياً */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.85 }}
              className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8"
            >
              <p
                className={`text-[#DDD3CB]/95 font-light leading-relaxed max-w-lg ${
                  isAr
                    ? "font-Camel text-[24px] lg:text-[28px] tracking-normal"
                    : "font-Sanseriffic text-[20px] tracking-widest"
                }`}
              >
                {t("services_page_header.description")}
              </p>

              {/* Scroll indicator — FIX: إزالة flex-row-reverse، دائماً في نهاية الـ row */}
              <div className="flex items-center gap-3">
                <motion.div
                  animate={{ y: [0, 6, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 2,
                    ease: "easeInOut",
                  }}
                  className="flex flex-col items-center gap-1"
                >
                  <span className="w-px h-8 bg-gradient-to-b from-[#DDD3CB]/50 to-transparent" />
                  <span className="w-1 h-1 rounded-full bg-[#DDD3CB]/40" />
                </motion.div>
                <span
                  className={`text-[#DDD3CB]/35 uppercase ${
                    isAr
                      ? "font-Camel text-[12px]"
                      : "font-Sanseriffic text-[10px] tracking-[0.5em]"
                  }`}
                >
                  {isAr ? "تمرير" : "scroll"}
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
    2. SERVICES ACCORDION
═══════════════════════════════════════════ */}
      <section className="py-24 relative bg-[#E9DED9]">
        <div className="container mx-auto px-8">
          <div className="divide-y divide-[#231A15]/10">
            {serviceKeys.map((key, index) => {
              const isOpen = activeService === index;
              return (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.07,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {/* Trigger button — FIX: بدون flex-row-reverse، الـ dir يكفي */}
                  <button
                    onClick={() => setActiveService(isOpen ? null : index)}
                    className="w-full group flex items-center gap-6 py-7 hover:px-3 transition-all duration-500"
                  >
                    {/* Index */}
                    <span
                      className={`shrink-0 text-[16px] text-[#231A15]/25 w-7 tabular-nums ${
                        isAr ? "font-Camel" : "font-Sanseriffic"
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    {/* Icon */}
                    <span
                      className={`shrink-0 w-11 h-11 flex items-center justify-center border text-[#231A15] transition-all duration-500 ${
                        isOpen
                          ? "border-[#775F4B] bg-[#231A15] text-[#DDD3CB]"
                          : "border-[#231A15]/15 group-hover:border-[#775F4B]/50"
                      }`}
                    >
                      {iconMapping[key]}
                    </span>

                    {/* Title */}
                    <span
                      className={`flex-1 text-start transition-colors duration-500 text-[#231A15] group-hover:text-[#775F4B] ${
                        isOpen ? "text-[#775F4B]" : ""
                      } ${
                        isAr
                          ? "font-Camel text-[25px] lg:text-[27px]"
                          : "font-Sanseriffic tracking-widest text-[22px] lg:text-[25px]"
                      }`}
                    >
                      {t(`items.${key}.title`)}
                    </span>

                    {/* Feature pills */}
                    <div className="hidden lg:flex gap-2">
                      {(
                        t(`items.${key}.features`, {
                          returnObjects: true,
                        }) as string[]
                      )
                        .slice(0, 2)
                        .map((feat) => (
                          <span
                            key={feat}
                            className={`text-[13px] uppercase text-[#231A15]/40 border border-[#231A15]/20 px-3 py-1 ${
                              isAr
                                ? "font-Camel tracking-[0.1em]"
                                : "font-Sanseriffic tracking-widest"
                            }`}
                          >
                            {feat}
                          </span>
                        ))}
                    </div>

                    {/* Toggle */}
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="shrink-0 w-9 h-9 flex items-center justify-center border border-[#231A15]/20 text-[#231A15]/40 text-[25px] leading-none"
                    >
                      +
                    </motion.span>
                  </button>

                  {/* Expanded Body */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="body"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{
                          height: "auto",
                          opacity: 1,
                          transition: {
                            duration: 0.55,
                            ease: [0.22, 1, 0.36, 1],
                          },
                        }}
                        exit={{
                          height: 0,
                          opacity: 0,
                          transition: {
                            duration: 0.4,
                            ease: [0.22, 1, 0.36, 1],
                          },
                        }}
                        className="overflow-hidden"
                      >
                        {/* FIX: padding اتجاهي بـ style بدل Tailwind dynamic class */}
                        <div
                          className="grid md:grid-cols-2 gap-10 pb-10"
                          style={
                            isAr
                              ? { paddingRight: "6rem", paddingLeft: "2rem" }
                              : { paddingLeft: "6rem", paddingRight: "2rem" }
                          }
                        >
                          <p
                            className={`text-[#231A15]/60 leading-relaxed ${
                              isAr
                                ? "font-Camel text-[23px]"
                                : "font-Sanseriffic tracking-widest text-[18px]"
                            }`}
                          >
                            {t(`items.${key}.description`)}
                          </p>

                          <ul className="space-y-4">
                            {(
                              t(`items.${key}.features`, {
                                returnObjects: true,
                              }) as string[]
                            ).map((feat, fi) => (
                              <motion.li
                                key={feat}
                                initial={{ opacity: 0, x: isAr ? -16 : 16 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{
                                  delay: fi * 0.08 + 0.1,
                                  duration: 0.4,
                                }}
                                className={`flex items-center gap-4 uppercase text-[#231A15]/60 ${
                                  isAr
                                    ? "font-Camel text-[16px] tracking-[0.1em]"
                                    : "font-Sanseriffic text-[16px] tracking-widest"
                                }`}
                              >
                                <span className="w-2 h-px bg-[#775F4B]/50 shrink-0" />
                                {feat}
                              </motion.li>
                            ))}
                          </ul>
                        </div>

                        {/* FIX: origin بـ style مش Tailwind dynamic */}
                        <motion.div
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                          transition={{
                            duration: 0.7,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                          className="h-px bg-gradient-to-r from-transparent via-[#775F4B]/40 to-transparent mb-1"
                          style={{ transformOrigin: isAr ? "right" : "left" }}
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
      {/* 3. Methodology */}
      <section className="py-12 bg-[#231A15] relative">
        <div className="container mx-auto px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative aspect-[4/5] lg:aspect-square group"
            >
              <div
                className={`absolute -inset-4 border border-[#DDD3CB]/20 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-700 ${isAr ? "-translate-x-4" : "translate-x-4"}`}
              ></div>
              <Image
                src="/images/living-room.jpg"
                alt="Process"
                fill
                className="object-cover grayscale contrast-125 opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: isAr ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <h2
                className={`text-[52px] font-bold mb-12 text-[#FFFFFF] ${isAr ? "font-Camel tracking-normal" : "font-Sanseriffic tracking-widest"}`}
              >
                {t("methodology.title")}{" "}
                <span className="text-[#DDD3CB] font-light ">
                  {t("methodology.accent")}
                </span>
              </h2>
              <div
                className={`space-y-12 ${isAr ? "font-Camel tracking-normal" : "font-Sanseriffic tracking-widest"}`}
              >
                {(t("methodology.steps", { returnObjects: true }) as any[]).map(
                  (step, i) => (
                    <div key={i} className="group flex gap-8">
                      <div
                        className={`relative ${isAr ? "font-Camel tracking-normal" : "font-Sanseriffic tracking-widest"}`}
                      >
                        <span
                          className={`text-[#F2F2F2] font-light text-4xl opacity-20 group-hover:opacity-100 group-hover:text-[#e2dedb] transition-all ${isAr ? "font-Camel tracking-normal" : "font-Sanseriffic tracking-widest"}`}
                        >
                          0{i + 1}
                        </span>
                        <div className="absolute top-full left-1/2 w-[1px] h-12 bg-[#8F8F8F]/20 origin-top scale-y-0 group-hover:scale-y-100 transition-transform"></div>
                      </div>
                      <div className="pt-2">
                        <h4
                          className={` font-bold mb-3 text-[#FFFFFF] ${isAr ? "font-Camel tracking-normal text-[24px]" : "font-Sanseriffic tracking-widest text-xl"}`}
                        >
                          {step.t}
                        </h4>
                        <p
                          className={`text-[#CCCBD0]  font-light leading-relaxed max-w-sm ${isAr ? "text-[20px] font-Camel tracking-normal" : "text-[16px] font-Sanseriffic tracking-widest"}`}
                        >
                          {step.d}
                        </p>
                      </div>
                    </div>
                  ),
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. CTA Section */}
      <section className="py-28 text-center relative overflow-hidden bg-[#E9DED4]">
        <div className="container mx-auto px-8 relative z-10 mb-7">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto"
          >
            <h3
              className={`text-4xl md:text-6xl font-bold mb-12 text-[#231A15]/70 ${isAr ? "font-Camel tracking-widest" : "font-Sanseriffic tracking-widest"}`}
            >
              {t("cta.title")}
            </h3>

            <a
             href="tel:+963950505058" // ضع رقم الموبايل هنا مع رمز الدولة
              className={`group relative inline-block overflow-hidden px-12 py-4 bg-[#231A15]/80 text-[#F7F4F1] font-bold uppercase text-[15px] transition-all duration-500 shadow-[0_20px_40px_rgba(242,242,242,0.1)] hover:px-[60px] text-center ${
                isAr
                  ? "font-Camel tracking-[0.5em]"
                  : "font-Sanseriffic tracking-[0.3em]"
              }`}
            >
              <span className="relative z-10">{t("cta.button")}</span>

              {/* تأثير الخلفية عند الحوم (اختياري) */}
              
            </a>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-[12vw] font-bold text-[#8C827A]/15 tracking-widest whitespace-nowrap leading-none select-none uppercase">
          {t("cta.name")}
        </div>
      </section>
    </main>
  );
}
