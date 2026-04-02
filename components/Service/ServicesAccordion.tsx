"use client";


import { useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import {
  PaintBrushIcon,
  BuildingOffice2Icon,
  HomeModernIcon,
  BriefcaseIcon,
  ChatBubbleBottomCenterTextIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/outline";

// ─── [A] Module-scope constants ───────────────────────────────────────────────

const SERVICE_KEYS = [
  "design",
  "urban",
  "interior",
  "project",
  "consulting",
  "sustainability",
] as const;

type ServiceKey = (typeof SERVICE_KEYS)[number];

// BEFORE: `const iconMapping: Record<string, React.ReactNode> = { ... }` was
//         declared INSIDE the component — re-allocated on every render.
// AFTER:  module-level constant.
const ICON_MAP: Record<ServiceKey, React.ReactNode> = {
  design:         <PaintBrushIcon className="w-8 h-8" />,
  urban:          <GlobeAltIcon className="w-8 h-8" />,
  interior:       <HomeModernIcon className="w-8 h-8" />,
  project:        <BriefcaseIcon className="w-8 h-8" />,
  consulting:     <ChatBubbleBottomCenterTextIcon className="w-8 h-8" />,
  sustainability: <BuildingOffice2Icon className="w-8 h-8" />,
};

// BEFORE: `const ANIMATIONS = { ... }` inside ServicesPage.
// AFTER:  stable module-level constant; custom() handles per-index delay.
const ITEM_VARIANTS = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.07,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

// ─── Shared body animation configs (module scope = stable references) ─────────
const EXPAND_ANIMATE = {
  height: "auto" as const,
  opacity: 1,
  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
};
const COLLAPSE_EXIT = {
  height: 0,
  opacity: 0,
  transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
};
const BODY_INITIAL = { height: 0, opacity: 0 };

// ─── [C] Extracted AccordionItem ──────────────────────────────────────────────

interface AccordionItemProps {
  serviceKey: ServiceKey;
  index: number;
  isOpen: boolean;
  onToggle: (i: number) => void;
  isAr: boolean;
}

function AccordionItem({
  serviceKey,
  index,
  isOpen,
  onToggle,
  isAr,
}: AccordionItemProps) {
  const { t } = useTranslation("common");

  // [D] Resolve translation ONCE — used in both the pill row and the list.
  // BEFORE: t(`items.${key}.features`, { returnObjects: true }) was called twice.
  const features = t(`items.${serviceKey}.features`, {
    returnObjects: true,
  }) as string[];

  // [E] Pre-compute font classes instead of repeating the ternary 6+ times.
  const monoFont = isAr ? "font-Camel" : "font-Sanseriffic tracking-widest";
  const pillFont = isAr ? "font-Camel" : "font-Sanseriffic tracking-widest";

  return (
    <motion.div
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}
      variants={ITEM_VARIANTS}
    >
      {/* Trigger */}
      <button
        onClick={() => onToggle(index)}
        // [F] aria-expanded communicates state to assistive technology.
        aria-expanded={isOpen}
        className="w-full group flex items-center gap-6 py-7 hover:px-3 transition-all duration-500"
      >
        {/* Index */}
        <span className={`shrink-0 text-[16px] text-[#231A15]/25 w-7 tabular-nums ${monoFont}`}>
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
          {ICON_MAP[serviceKey]}
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
          {t(`items.${serviceKey}.title`)}
        </span>

        {/* Feature pills — first 2 only, desktop */}
        <div className="hidden lg:flex gap-2">
          {features.slice(0, 2).map((feat) => (
            <span
              key={feat}
              className={`text-[13px] uppercase text-[#231A15]/40 border border-[#231A15]/20 px-3 py-1 ${pillFont}`}
            >
              {feat}
            </span>
          ))}
        </div>

        {/* Toggle icon */}
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="shrink-0 w-9 h-9 flex items-center justify-center border border-[#231A15]/20 text-[#231A15]/40 text-[25px] leading-none"
        >
          +
        </motion.span>
      </button>

      {/* Expanded body */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="body"
            initial={BODY_INITIAL}
            animate={EXPAND_ANIMATE}
            exit={COLLAPSE_EXIT}
            className="overflow-hidden"
          >
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
                {t(`items.${serviceKey}.description`)}
              </p>

              <ul className="space-y-4">
                {features.map((feat, fi) => (
                  <motion.li
                    key={feat}
                    initial={{ opacity: 0, x: isAr ? -16 : 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: fi * 0.08 + 0.1, duration: 0.4 }}
                    className={`flex items-center gap-4 uppercase text-[#231A15]/60 ${
                      isAr
                        ? "font-Camel text-[16px]"
                        : "font-Sanseriffic text-[16px] tracking-widest"
                    }`}
                  >
                    <span className="w-2 h-px bg-[#775F4B]/50 shrink-0" />
                    {feat}
                  </motion.li>
                ))}
              </ul>
            </div>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="h-px bg-gradient-to-r from-transparent via-[#775F4B]/40 to-transparent mb-1"
              style={{ transformOrigin: isAr ? "right" : "left" }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// ─── Main accordion shell ─────────────────────────────────────────────────────

export default function ServicesAccordion() {
  const { i18n } = useTranslation("common");
  const isAr = i18n.language === "ar";

  const [activeService, setActiveService] = useState<number | null>(null);

 
  const handleToggle = useCallback((index: number) => {
    setActiveService((prev) => (prev === index ? null : index));
  }, []);

  return (
    <section className="py-24 relative bg-[#E9DED9]">
      <div className="container mx-auto px-8">
        <div className="divide-y divide-[#231A15]/10">
          {SERVICE_KEYS.map((key, index) => (
            <AccordionItem
              key={key}
              serviceKey={key}
              index={index}
              isOpen={activeService === index}
              onToggle={handleToggle}
              isAr={isAr}
            />
          ))}
        </div>
      </div>
    </section>
  );
}