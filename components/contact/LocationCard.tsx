"use client";

import { MapPin, Phone, Mail, ExternalLink, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import React from "react";

export default function LocationCard() {
  const { t, i18n } = useTranslation();
  const isAr = i18n.language === "ar";

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      viewport={{ once: true }}
      dir={isAr ? "rtl" : "ltr"}
      className={`w-[300px] mx-auto md:w-[420px] backdrop-blur-xl bg-[#F7F4F1]/90 border border-[#AF937A]/30 shadow-2xl ${isAr ? "font-Camel" : "font-Sanseriffic tracking-widest"}`}
    >
      <div className="p-6 md:p-8 border-b border-[#775F4B]/10">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 text-start">
            <div className="w-10 h-10 bg-[#AF937A]/10 flex items-center justify-center border border-[#AF937A]/20 shrink-0">
              <MapPin className="w-5 h-5 text-[#AF937A]" />
            </div>
            <div>
              <p className="text-[10px] text-[#AF937A] uppercase mb-1 font-bold">
                {t("location.title")}
              </p>
              <h4 className="text-[17px] font-semibold text-[#775F4B]">
                {t("location.hq")}
              </h4>
            </div>
          </div>
          <a
            href="https://maps.app.goo.gl/FrtXrhMd5q3yWMZNA"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 border border-[#775F4B]/10 text-[#775F4B]/40 hover:text-[#AF937A] transition-all ms-4"
          >
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>

      <div className="p-6 md:p-8 space-y-8">
        <div className="flex gap-4 text-start">
          <div className="w-[1px] bg-gradient-to-b from-[#AF937A] to-transparent shrink-0" />
          <p className="text-[15px] text-[#775F4B]/80 font-light leading-relaxed whitespace-pre-line">
            {t("location.address")}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <ContactItem
            label={t("location.phone")}
            // أضفنا dir="ltr" لضمان بقاء الرقم والزائد في مكانهما
            value={
              <span dir="ltr" className="inline-block font-sans">
                +963 950 505 058
              </span>
            }
            icon={<Phone />}
            href="tel:+963950505058"
          />
          <ContactItem
            label={t("location.email")}
            // الإيميلات يفضل أيضاً أن تكون LTR دائماً لتجنب المشاكل مع النقطة والـ @
            value={
              <span dir="ltr" className="inline-block">
                studio@martinisolis.co
              </span>
            }
            icon={<Mail />}
            href="mailto:studio@martinisolis.com"
          />
        </div>

        <div className="pt-6 border-t border-[#775F4B]/5 flex items-center gap-3">
          <Clock className="w-4 h-4 text-[#AF937A] shrink-0" />
          <p className="text-[12px] text-[#775F4B]/70 uppercase font-medium">
            {t("location.hours")}
          </p>
        </div>
      </div>
    </motion.div>
  );
}






function ContactItem({ label, value, icon, href }: any) {
  return (
    <a href={href} className="group block text-start">
      <p className="text-[10px] text-[#AF937A] uppercase mb-2 font-bold">
        {label}
      </p>
      <div className="flex items-center gap-2">
        <span className="text-[#AF937A]/60 group-hover:text-[#AF937A] transition-colors shrink-0">
          {React.cloneElement(icon, { size: 15 })}
        </span>
        <span className="text-[13px] text-[#775F4B] group-hover:text-[#AF937A] transition-colors truncate">
          {value}
        </span>
      </div>
    </a>
  );
}
