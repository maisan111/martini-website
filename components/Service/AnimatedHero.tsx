'use client';
import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

// [E] Module-scope → never re-allocated
const HERO_TRANSITION = {
  duration: 2.5,
  ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
};

export default function AnimatedHero() {
  const { t, i18n } = useTranslation("common");
  const isAr = i18n.language === "ar";

  // Computed once per render (language rarely changes)
  const fontBase = isAr ? "font-Camel" : "font-Sanseriffic";
  const eyebrowCls = isAr
    ? "font-Camel text-[13px]"
    : "font-Sanseriffic text-[11px] tracking-[0.6em]";
  const h1Cls = isAr
    ? "font-Camel text-[50px] lg:text-[105px]"
    : "font-Sanseriffic text-[50px] lg:text-[85px] tracking-widest";
  const descCls = isAr
    ? "font-Camel text-[24px] lg:text-[28px]"
    : "font-Sanseriffic text-[20px] tracking-widest";
  const scrollLabelCls = isAr
    ? "font-Camel text-[12px]"
    : "font-Sanseriffic text-[10px] tracking-[0.5em]";

  return (
    <section className="relative h-[100vh] overflow-hidden">
      {/* ── Background image ────────────────────────────────────────────── */}

      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1.15 }}
        animate={{ scale: 1.05 }}
        transition={HERO_TRANSITION}
      >
        <Image
          src="/images/architecture.webp"
          alt=""
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </motion.div>

      {/* ── Gradient overlays ───────────────────────────────────────────── */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-[#0D0905]/90 via-[#0D0905]/75 to-transparent" />
      <div className="absolute inset-0 z-[1] bg-gradient-to-t from-[#0D0905]/90 via-transparent to-[#0D0905]/30 backdrop-blur-sm" />

      {/* ── Noise texture ───────────────────────────────────────────────── */}

      <div
        className="pointer-events-none absolute inset-0 z-[2]"
        style={{
          opacity: 0.04,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "200px",
        }}
        aria-hidden="true"
      />

      {/* ── Vertical rule ───────────────────────────────────────────────── */}
      <motion.div
        className={`absolute top-0 bottom-0 z-[3] w-px bg-gradient-to-b from-transparent via-[#DDD3CB]/25 to-transparent ${
          isAr ? "right-[10%] md:right-[15%]" : "left-[10%] md:left-[15%]"
        }`}
        initial={{ scaleY: 0, opacity: 0 }}
        animate={{ scaleY: 1, opacity: 1 }}
        transition={{ duration: 1.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        style={{ transformOrigin: "top" }}
      />

      {/* ── Main content ────────────────────────────────────────────────── */}
      <div
        dir={isAr ? "rtl" : "ltr"}
        className={`absolute inset-0 z-10 flex flex-col justify-center pb-20 ${fontBase}`}
      >
        <div className="container mx-auto px-8 md:px-16 mt-32">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex items-center gap-4 mb-8"
          >
            <span className="w-8 h-px bg-[#DDD3CB]/65 shrink-0" />
            <span className={`text-[#DDD3CB]/70 uppercase ${eyebrowCls}`}>
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
              className={`leading-[0.95] text-white ${h1Cls}`}
            >
              {t("services_page_header.title_accent")}
              <br />
              <span className="text-[#DDD3CB] font-light">
                {t("services_page_header.title_main")}
              </span>
            </motion.h1>
          </div>

          {/* Bottom row */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.85 }}
            className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8"
          >
            <p
              className={`text-[#DDD3CB]/95 font-light leading-relaxed max-w-lg ${descCls}`}
            >
              {t("services_page_header.description")}
            </p>

            {/* Scroll indicator */}
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
              <span className={`text-[#DDD3CB]/35 uppercase ${scrollLabelCls}`}>
                {isAr ? "تمرير" : "scroll"}
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
