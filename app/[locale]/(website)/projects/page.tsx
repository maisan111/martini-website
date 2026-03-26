

"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useTranslation } from "react-i18next";

const CATEGORY_KEYS = ["all", "residential", "commercial", "interior"];

export default function PortfolioPage() {
  const { t, i18n } = useTranslation("common");
  const isAr = i18n.language === "ar";
  const [filterKey, setFilterKey] = useState("all");

  const rawProjects = t("projects", { returnObjects: true });
  const projects = Array.isArray(rawProjects) ? rawProjects : [];
  const filteredProjects = projects.filter(
    (p: any) => filterKey === "all" || p.category === filterKey
  );

  return (
    <main
      dir={isAr ? "rtl" : "ltr"}
      className={`min-h-screen ${isAr ? "font-Camel" : "font-Sanseriffic"}`}
    >
      <section className="relative h-[100vh] overflow-hidden">
        <motion.div
          className="absolute inset-0 z-0"
          initial={{ scale: 1.15 }}
          animate={{ scale: 1.05 }}
          transition={{ duration: 2.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src="/images/studio/4.webp"
            alt="Portfolio Background"
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        <div className="absolute inset-0 z-[1] bg-gradient-to-r from-[#0D0905]/90 via-[#0D0905]/50 to-transparent" />
        <div className="absolute inset-0 z-[1] bg-gradient-to-t from-[#0D0905]/80 via-transparent to-[#0D0905]/20" />

        <div
          className="pointer-events-none absolute inset-0 z-[2] opacity-[0.04]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundSize: "200px",
          }}
        />

        <motion.div
          className={`absolute top-0 bottom-0 z-[3] w-px bg-gradient-to-b from-transparent via-[#DDD3CB]/25 to-transparent ${
            isAr ? "right-[10%] md:right-[15%]" : "left-[10%] md:left-[15%]"
          }`}
          initial={{ scaleY: 0, opacity: 0 }}
          animate={{ scaleY: 1, opacity: 1 }}
          transition={{ duration: 1.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          style={{ transformOrigin: "top" }}
        />

        <div className="absolute inset-0 z-10 flex flex-col justify-center pb-20 mt-28">
          <div className="container mx-auto px-8 md:px-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex items-center gap-4 mb-8"
            >
              <span
                className={`text-[#DDD3CB]/70 uppercase ${
                  isAr
                    ? "font-Camel text-[13px]"
                    : "font-Sanseriffic text-[12px] tracking-[0.6em]"
                }`}
              >
                {t("hero_project.established")}
              </span>
            </motion.div>

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
                    ? "font-Camel text-[50px] lg:text-[105px]"
                    : "font-Sanseriffic text-[50px] lg:text-[85px] tracking-widest"
                }`}
              >
                {t("hero_project.title_main")}
                <br />
                <span className="text-[#DDD3CB] font-light">
                  {t("hero_project.title_accent")}
                </span>
              </motion.h1>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.85 }}
              className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8"
            >
              <p
                className={`text-[#DDD3CB]/95 font-light leading-relaxed max-w-lg ${
                  isAr
                    ? "font-Camel text-[24px]"
                    : "font-Sanseriffic text-[22px] tracking-widest"
                }`}
              >
                {t("hero_project.description")}
              </p>

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
                  {t("hero_project.scroll")}
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 relative bg-[#E9DED4]">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #231A15 1px, transparent 1px),
              linear-gradient(to bottom, #231A15 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />

        <div className="container mx-auto px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-4 mb-12"
          >
            <span
              className={`text-[#231A15]/50 uppercase ${
                isAr
                  ? "font-Camel text-[14px]"
                  : "font-Sanseriffic text-[12px] tracking-[0.6em]"
              }`}
            >
              {t("hero_project.established")}
            </span>
          </motion.div>

          <div className="flex flex-wrap gap-2 mb-6">
            {CATEGORY_KEYS.map((key, i) => {
              const isActive = filterKey === key;
              return (
                <motion.button
                  key={key}
                  onClick={() => setFilterKey(key)}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.07 }}
                  className={`relative px-6 py-2.5 uppercase text-[14px] border transition-all duration-400 ${
                    isAr
                      ? "font-Camel"
                      : "font-Sanseriffic tracking-widest"
                  } ${
                    isActive
                      ? "bg-[#231A15] text-[#DDD3CB] border-[#231A15]"
                      : "bg-transparent text-[#231A15]/60 border-[#231A15]/20 hover:border-[#775F4B]/50 hover:text-[#775F4B]"
                  }`}
                >
                  {t(`categories.${key}`)}
                </motion.button>
              );
            })}
          </div>

          <div className="w-full h-px bg-[#231A15]/10 mb-16" />

          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 "
          >
            <AnimatePresence>
              {filteredProjects.map((project: any, index: number) => (
                <Link
                  // href={`/${i18n.language}/projects/${project.id}`}
                  href="#"
                  key={project.id}
                  className={`group relative overflow-hidden bg-[#E9DED9] cursor-pointer ${
                    project.size === "large" ? "md:col-span-2" : ""
                  }`}
                >
                  <motion.article
                    layout
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.97 }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.06,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <div className="relative h-[360px] overflow-hidden">
                      <motion.div
                        whileHover={{ scale: 1.06 }}
                        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                        className="absolute inset-0"
                      >
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover  group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000"
                        />
                      </motion.div>

                      <div className="absolute inset-0 bg-gradient-to-t from-[#231A15]/60 via-transparent to-transparent" />

                      <div
                        className={`absolute top-5 z-10 ${isAr ? "right-5" : "left-5"}`}
                      >
                        <span
                          className={`text-[11px] uppercase bg-[#E9DED9]/85 text-[#231A15]/60 px-3 py-1 ${
                            isAr
                              ? "font-Camel"
                              : "font-Sanseriffic tracking-widest"
                          }`}
                        >
                          {t(`categories.${project.category}`)}
                        </span>
                      </div>

                      <div
                        className={`absolute top-5 z-10 w-9 h-9 flex items-center justify-center bg-[#775F4B] text-[#F7F4F1] opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500 ${
                          isAr ? "left-5" : "right-5"
                        }`}
                      >
                        <ArrowUpRight
                          className={`w-4 h-4 ${isAr ? "-scale-x-100" : ""}`}
                        />
                      </div>
                    </div>

                    <div className="px-6 py-5 flex items-end justify-between gap-4 border-t border-[#231A15]/10 group-hover:border-[#775F4B]/25 transition-colors duration-500">
                      <div className="flex-1 min-w-0">
                        <span
                          className={`text-[12px] text-[#231A15]/25 tabular-nums mb-1 block ${
                            isAr ? "font-Camel" : "font-Sanseriffic"
                          }`}
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <h3
                          className={`text-[#231A15] truncate group-hover:text-[#775F4B] transition-colors duration-500 ${
                            isAr
                              ? "font-Camel text-[22px]"
                              : "font-Sanseriffic text-[18px] tracking-widest"
                          }`}
                        >
                          {project.title}
                        </h3>

                        <div
                          className="h-px mt-2 bg-gradient-to-r from-[#775F4B] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700"
                          style={{ transformOrigin: isAr ? "right" : "left" }}
                        />
                      </div>

                      {project.year && (
                        <span
                          className={`shrink-0 text-[12px] text-[#231A15]/30 uppercase border border-[#231A15]/15 px-2.5 py-1 ${
                            isAr
                              ? "font-Camel"
                              : "font-Sanseriffic tracking-widest"
                          }`}
                        >
                          {project.year}
                        </span>
                      )}
                    </div>
                  </motion.article>
                </Link>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
