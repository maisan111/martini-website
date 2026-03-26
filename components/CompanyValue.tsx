

'use client';

import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

interface ValueItem {
    id: number;
    title: string;
    details: string;
}

const HexagonCard = ({ item, index, isAr }: { item: ValueItem; index: number; isAr: boolean }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: index * 0.1 }}
            whileHover={{ y: -10 }}
            className="relative w-[330px] h-[370px] md:w-[370px] md:h-[400px] group cursor-default"
        >
            {/* --- MAIN CARD SHAPE --- */}
            <div 
                className="absolute inset-0 w-full h-full transition-all duration-700 ease-out bg-[#F3EBE1]/40 backdrop-blur-sm
                            group-hover:bg-[#EADDCF]/60"
                style={{ 
                    clipPath: 'polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%)',
                    border: '1px solid rgba(211, 183, 156, 0.2)'
                }}
            >
                {/* --- INNER BORDER EFFECT --- */}
                <div 
                    className="absolute inset-0 border-[1px] border-[#D3B79C]/20 group-hover:border-[#D3B79C]/50 transition-colors duration-500"
                    style={{ clipPath: 'polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%)' }}
                />

                {/* --- CONTENT --- */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-8 z-10">
                    <span className={`text-[#8C827A] text-[13px] font-bold mb-4 opacity-60 group-hover:opacity-100 transition-opacity ${isAr ? 'tracking-normal' : 'tracking-[0.4em]'}`}>
                        0{item.id}
                    </span>
                    
                    <h3 className={`text-[#4A3F35] font-semibold uppercase mb-5 group-hover:text-[#4A3F35] transition-colors duration-500 
                        ${isAr ? 'font-Camel text-[24px]' : 'font-Sanseriffic tracking-[0.25em] text-[20px]'}`}>
                        {item.title}
                    </h3>
                    
                    <div className={`h-[1px] w-32 bg-gradient-to-r from-transparent via-[#D3B79C]/40 to-transparent mb-8`} />

                    <p className={`text-[#8C827A] px-2 max-w-70 leading-relaxed font-light group-hover:text-[#4A3F35] transition-colors duration-500 ${isAr ? 'font-Camel text-[21px]' : 'font-Sanseriffic tracking-widest text-[18px]'}`}>
                        {item.details}
                    </p>
                </div>

                {/* --- HOVER GLOW RADIAL --- */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[radial-gradient(circle_at_50%_50%,rgba(211,183,156,0.15),transparent_70%)]" />
            </div>

            {/* --- OUTER ARCHITECTURAL RIM --- */}
            <div 
                className="absolute -inset-[2px] -z-10 bg-gradient-to-b from-[#D3B79C]/30 to-transparent opacity-40 group-hover:opacity-80 transition-opacity duration-500"
                style={{ clipPath: 'polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%)' }}
            />
        </motion.div>
    );
};

const CompanyValues = () => {
    const { t, i18n } = useTranslation("common");
    const isAr = i18n.language === "ar";

    const values: ValueItem[] = [
        { id: 1, title: t('company_values.items.innovation.title'), details: t('company_values.items.innovation.details') },
        { id: 2, title: t('company_values.items.quality.title'), details: t('company_values.items.quality.details') },
        { id: 3, title: t('company_values.items.collaboration.title'), details: t('company_values.items.collaboration.details') },
        { id: 4, title: t('company_values.items.integrity.title'), details: t('company_values.items.integrity.details') },
        { id: 5, title: t('company_values.items.growth.title'), details: t('company_values.items.growth.details') },
    ];

    return (
        <section 
            dir={isAr ? "rtl" : "ltr"}
            className="w-full py-32 bg-[#FCF9F6] relative overflow-hidden"
        >
            {/* Architectural Grid Overlay - Updated to match the new palette */}
            <div 
                className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{ 
                    backgroundImage: `linear-gradient(#D3B79C 1px, transparent 1px), linear-gradient(90deg, #D3B79C 1px, transparent 1px)`, 
                    backgroundSize: '60px 60px',
                    maskImage: 'radial-gradient(circle at center, black, transparent 80%)'
                }} 
            />

            <div className="container mx-auto px-6 relative z-10">
                {/* Header Section */}
                <div className={`mb-24 flex flex-col ${isAr ? 'items-start text-right' : 'items-start text-left'}`}>
                    <motion.span 
                        initial={{ opacity: 0, letterSpacing: isAr ? "0" : "0.2em" }}
                        whileInView={{ opacity: 1, letterSpacing: isAr ? "0" : "0.5em" }}
                        className={`text-[#8C827A] text-[15px] font-bold uppercase block mb-6 ${isAr ? 'font-Camel' : 'font-Sanseriffic'}`}
                    >
                        {t('company_values.subtitle')}
                    </motion.span>
                    
                    <h2 className={`text-4xl md:text-6xl font-extralight text-[#4A3F35] mb-8 ${isAr ? 'font-Camel' : 'font-Sanseriffic tracking-widest'}`}>
                        {t('company_values.title_main')} <span className="font-bold text-[#8C827A]">{t('company_values.title_bold')}</span>
                    </h2>
                    
                    <div className={`h-[1px] w-32 bg-gradient-to-r from-transparent via-[#D3B79C]/40 to-transparent mb-8`} />
                    
                    <p className={`text-[#8C827A] max-w-3xl text-[18px] md:text-[23px] font-light leading-relaxed ${isAr ? 'font-Camel' : 'tracking-widest font-Sanseriffic'}`}>
                        {t('company_values.description')}
                    </p>
                </div>

                {/* Hexagon Grid Layout */}
                <div className="flex flex-wrap justify-center gap-x-4 gap-y-12 lg:gap-x-8 max-w-7xl mx-auto">
                    {/* Top Row */}
                    <div className="flex flex-wrap justify-center gap-6 lg:gap-8 w-full">
                        {values.slice(0, 3).map((item, idx) => (
                            <HexagonCard key={item.id} item={item} index={idx} isAr={isAr} />
                        ))}
                    </div>
                    
                    {/* Bottom Row - Offset for Honeycomb effect */}
                    <div className="flex flex-wrap justify-center gap-6 lg:gap-8 w-full lg:-mt-16">
                        {values.slice(3, 5).map((item, idx) => (
                            <HexagonCard key={item.id} item={item} index={idx + 3} isAr={isAr} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CompanyValues;