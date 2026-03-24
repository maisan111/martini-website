


"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowUpLeft } from "lucide-react"; 
import { useTranslation } from "react-i18next";

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

const ServiceCard = ({ id, title, description, isAr }) => {
  // تحويل الرقم إلى صيغة 01, 02, 03
  const formattedId = String(id).padStart(2, '0');

  return (
    <motion.div
      variants={itemVariants}
      className={`group relative border-t border-[#D3B79C]/40 pt-8 pb-12 px-3 transition-all duration-500 hover:bg-[#9C8982]/20 ${isAr ? 'text-right' : 'text-left'}`}
    >
      <div className={`flex flex-col h-full ${isAr ? 'items-start' : 'items-start'}`}>
        
        {/* Background Number (01, 02, 03) */}
        <div className={`absolute top-12 ${isAr ? 'right-0' : 'left-0'} text-[120px] md:text-[140px] font-bold text-[#d0c6bd] opacity-20 leading-none -z-10 select-none transition-transform duration-500 group-hover:scale-105`}>
          {formattedId}
        </div>

        {/* Index and Icon (Original Layout) */}
        <div className={`flex justify-between items-start mb-6 w-full ${isAr ? 'flex-row-reverse' : 'flex-row'}`}>
          <span className={`text-[13px] font-medium text-[#8C827A] uppercase ${isAr ? 'tracking-normal font-Camel' : 'tracking-[0.3em] font-Sanseriffic'}`}>
            {isAr ? `الخدمة ${id}` : `Service ${id}`}
          </span>
          <motion.div 
            className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            whileHover={{ rotate: isAr ? -45 : 45 }}
          >
            {isAr ? <ArrowUpLeft className="w-5 h-5 text-[#4A3F35]" /> : <ArrowUpRight className="w-5 h-5 text-[#4A3F35]" />}
          </motion.div>
        </div>

        {/* Title (Original Font Sizes) */}
        <h3 className={`text-3xl md:text-[34px] text-[#4A3F35] mb-4 transition-transform duration-500 w-full z-10
          ${isAr 
            ? 'font-Camel font-bold group-hover:-translate-x-2' 
            : 'font-Sanseriffic font-light tracking-widest group-hover:translate-x-2'}`}>
          {title}
        </h3>
        
        {/* Description (Original Font Sizes) */}
        <p className={`text-[#8C827A] text-[22px] md:text-[22px] leading-relaxed max-w-md group-hover:text-[#6C625A] transition-colors duration-500 w-full z-10
          ${isAr ? 'font-Camel font-light' : 'font-Sanseriffic tracking-widest'}`}>
          {description}
        </p>

      </div>
    </motion.div>
  );
};

export default function ServicesSection() {
  const { t, i18n } = useTranslation();
  const isAr = i18n.language === "ar";
  
  const services = t('services.items', { returnObjects: true }) || [];

  return (
    <section 
      dir={isAr ? "rtl" : "ltr"}
      className={`bg-[#FCF9F6] py-20 md:py-24 relative overflow-hidden ${isAr ? 'font-Camel' : 'font-Sanseriffic'}`}
    >

      <div className="absolute inset-0 opacity-[0.04] bg-center bg-cover bg-no-repeat" 
     style={{ backgroundImage: "url('/images/back.jpg')" }}
      
      />

      
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header Section (Original Alignment and Sizes) */}
        <div className={`flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8 ${isAr ? 'md:flex-row' : ''}`}>
          <div className={`max-w-[800px] ${isAr ? 'text-right' : 'text-left'}`}>
            <motion.span 
              initial={{ opacity: 0, x: isAr ? 20 : -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className={`inline-block text-[#8C827A] text-md font-bold uppercase mb-6 ${isAr ? 'tracking-normal font-Camel' : 'tracking-[0.5em] font-Sanseriffic'}`}
            >
              {t('services.badge')}
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className={`text-5xl md:text-7xl text-[#4A3F35] ${isAr ? 'font-black font-Camel leading-[1.2]' : 'font-Sanseriffic tracking-widest leading-tight'}`}
            >
              {t('services.title_part1')} <n/>
              <span className={`text-[#8C827A]  mt-7 ${isAr ? 'font-light font-Camel' : 'font-Sanseriffic'}`}>
                {t('services.title_part2')}
              </span>
            </motion.h2>
          </div>
          
          {/* <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className={`text-[#8C827A] max-w-xs text-[16px] leading-relaxed mb-2 ${isAr ? 'text-right font-Camel' : 'text-left font-Sanseriffic tracking-widest'}`}
          >
            {t('services.description')}
          </motion.p> */}
        </div>

        {/* Services Grid (Original structure with Dashed Line behind) */}
        <div className="relative">


          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-100px" }}
            variants={{
              visible: { transition: { staggerChildren: 0.1 } }
            }}
          >
            {services.map((service) => (
              <ServiceCard 
                key={service.id} 
                id={service.id}
                title={service.title}
                description={service.desc}
                isAr={isAr}
              />
            ))}
          </motion.div>
        </div>


      </div>
    </section>
  );
}