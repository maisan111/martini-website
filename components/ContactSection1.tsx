


"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from "react-i18next";
import ContactForm from './contact/ContactForm'; 
import LocationCard from './contact/LocationCard'; 

export default function ContactSection1() {
    const { t, i18n } = useTranslation();
    const isAr = i18n.language === "ar";

    return (
        <section 
            dir={isAr ? "rtl" : "ltr"}
            className={`relative min-h-[70%] bg-[#EFE8E2] overflow-hidden flex flex-col ${isAr ? 'font-Camel' : 'font-Sanseriffic'}`}
        >
            {/* شبكة الخلفية بلون بني فاتح جداً */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute inset-0" style={{
                    backgroundImage: `linear-gradient(to right, #AF937A 1px, transparent 1px), linear-gradient(to bottom, #AF937A 1px, transparent 1px)`,
                    backgroundSize: '100px 100px'
                }} />
            </div>

            <div className="flex flex-col lg:flex-row flex-grow w-full">
                
                {/* الجانب الأيسر: النموذج */}
                <div className="w-full lg:w-[65%] relative z-10 px-6 sm:px-12 md:px-16 lg:px-24 py-20 flex flex-col justify-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="mb-12 md:mb-16 text-start"
                    >
                        <div className="flex items-center gap-4 mb-6 md:mb-8">
                            <span className={`text-[10px] md:text-[14px] font-bold text-[#AF937A] uppercase ${isAr ? 'font-Camel' : 'font-Sanseriffic tracking-[0.4em]'}`}>
                                {t('contact.badge')}
                            </span>
                        </div>

                        <h2 className={`text-4xl md:text-5xl lg:text-7xl font-light text-[#775F4B] leading-[1.1] mb-8 ${isAr ? 'font-black font-Camel' : 'tracking-widest font-Sanseriffic'}`}>
                            {t('contact.title_part1')} <span className="text-[#AF937A]">{t('contact.title_part2')}</span>
                            <br />
                            <span className="text-[#775F4B] block mt-6">{t('contact.title_part3')}</span>
                        </h2>

                        <p className={`text-[#775F4B]/70 text-base md:text-lg max-w-md leading-relaxed font-light text-start ${isAr ? 'font-black font-Camel' : 'tracking-widest font-Sanseriffic'}`}>
                            {t('contact.description')}
                        </p>
                    </motion.div>

                    <div className="max-w-xl">
                        <ContactForm />
                    </div>
                </div>

                {/* الجانب الأيمن: الخريطة - تم اختيار اللون البني الداكن جداً للخلفية */}
                <div className="w-full lg:w-[46%] relative min-h-[500px] lg:min-h-full bg-[#3D3127]">
                    <div className="absolute inset-0 z-10 bg-[#775F4B]/10 pointer-events-none"></div>
                    <div className="absolute inset-0 opacity-40 grayscale contrast-125">
                        <iframe
                           src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13303.415064501487!2d36.284414!3d33.531165!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1518e0d421394247%3A0x933020684f88427d!2z2KfZhNix2YjYttip2Iwg2K_Zhdi02YI!5e0!3m2!1sar!2s!4v1700000000000" 
                            className="w-full h-full border-0"
                            loading="lazy"
                            title="Office Location"
                        />
                    </div>

                    <div className={`absolute inset-x-4 bottom-8 lg:inset-auto lg:bottom-16 ${isAr ? 'lg:right-[-120px] lg:left-auto' : 'lg:left-[-120px] lg:right-auto'} z-20`}>
                        <LocationCard />
                    </div>
                </div>  
            </div>
        </section>
    );
}