"use client";


import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function CtaClient() {
  const { t, i18n } = useTranslation("common");
  const isAr = i18n.language === "ar";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      <h3
        className={`text-4xl md:text-6xl font-bold mb-12 text-[#231A15]/70 ${
          isAr ? "font-Camel" : "font-Sanseriffic tracking-widest"
        }`}
      >
        {t("cta.title")}
      </h3>

      <a
        href="tel:+963950505058"
        className={`group relative inline-block overflow-hidden px-12 py-4 bg-[#231A15]/80 text-[#F7F4F1] font-bold uppercase text-[15px] transition-all duration-500 shadow-[0_20px_40px_rgba(242,242,242,0.1)] hover:px-[60px] text-center ${
          isAr ? "font-Camel" : "font-Sanseriffic tracking-[0.3em]"
        }`}
      >
        <span className="relative z-10">{t("cta.button")}</span>
      </a>
    </motion.div>
  );
}