
"use client";

import { useState } from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

// تعريف أنواع البيانات لتجنب أخطاء TypeScript
interface FormData {
  name: string;
  email: string;
  message: string;
  [key: string]: string; // للسماح بالوصول للمفاتيح عبر string
}

interface FocusedState {
  [key: string]: boolean;
}

export default function ContactForm() {
  const { t, i18n } = useTranslation();
  const isAr = i18n.language === "ar";
  
  const [formData, setFormData] = useState<FormData>({ name: "", email: "", message: "" });
  const [focused, setFocused] = useState<FocusedState>({});

  const handleFocus = (field: string) => setFocused(prev => ({ ...prev, [field]: true }));
  
  const handleBlur = (field: string) => {
    if (!formData[field]) {
      setFocused(prev => ({ ...prev, [field]: false }));
    }
  };

  return (
    <form 
      dir={isAr ? "rtl" : "ltr"} 
      className={`space-y-12 ${isAr ? 'font-Camel' : 'font-Sanseriffic tracking-widest'}`} 
      onSubmit={(e) => e.preventDefault()}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
        {[
          { id: "name", label: t('contact.form.name'), type: "text" },
          { id: "email", label: t('contact.form.email'), type: "email" }
        ].map((field) => (
          <div key={field.id} className="relative">
            <label
              htmlFor={field.id}
              className={`absolute ${isAr ? 'right-0' : 'left-0'} transition-all duration-300 pointer-events-none ${
                focused[field.id] || formData[field.id]
                  ? "text-[13px] text-[#AF937A] -top-6 uppercase font-bold"
                  : "text-base text-[#775F4B]/40 top-3 font-light"
              }`}
            >
              {field.label}
            </label>
            <input
              id={field.id}
              type={field.type}
              value={formData[field.id]}
              onChange={(e) => setFormData({ ...formData, [field.id]: e.target.value })}
              onFocus={() => handleFocus(field.id)}
              onBlur={() => handleBlur(field.id)}
              className="w-full bg-transparent border-b border-[#775F4B]/20 py-3 text-[#775F4B] focus:outline-none focus:border-[#AF937A] transition-colors duration-500 font-light text-start"
            />
          </div>
        ))}
      </div>

      <div className="relative">
        <label
          htmlFor="message"
          className={`absolute ${isAr ? 'right-0' : 'left-0'} transition-all duration-300 pointer-events-none ${
            focused.message || formData.message
              ? "text-[13px] text-[#AF937A] -top-6 uppercase font-bold"
              : "text-base text-[#775F4B]/40 top-3 font-light"
          }`}
        >
          {t('contact.form.vision')}
        </label>
        <textarea
          id="message"
          rows={3}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          onFocus={() => handleFocus("message")}
          onBlur={() => handleBlur("message")}
          className="w-full bg-transparent border-b border-[#775F4B]/20 py-3 text-[#775F4B] focus:outline-none focus:border-[#AF937A] transition-colors duration-500 resize-none font-light text-start"
        />
      </div>

      <motion.button
        type="submit"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full md:w-auto group relative overflow-hidden bg-[#775F4B] text-[#F7F4F1] px-12 py-5 text-[15px] font-bold uppercase transition-all shadow-xl hover:bg-[#AF937A]"
      >
        <span className="relative z-10 flex items-center justify-center gap-4">
          {t('contact.form.button')}
          {isAr ? <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-2" /> : <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />}
        </span>
      </motion.button>
    </form>
  );
}