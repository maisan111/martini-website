

'use client'; 
 
import Image from "next/image"; 
import { motion } from "framer-motion"; 
import { CheckCircleIcon, TrophyIcon } from "@heroicons/react/24/outline"; 
import { useTranslation } from "react-i18next"; 
 
export default function AboutSection() { 
    const { t, i18n } = useTranslation(); 
    const isAr = i18n.language === "ar"; 
 
    // جلب مصفوفة المميزات من ملف الترجمة 
    const featuresList = t('about.features', { returnObjects: true }) || []; 
 
    return ( 
        <section  
            dir={isAr ? "rtl" : "ltr"} 
            className="z-20 text-[#1a1a1a] py-12 relative overflow-hidden " 
        > 
        
 
            <div className="container mx-auto px-6 relative z-10"> 
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center"> 
 
                    {/* Left Column: Visuals */} 
                    <motion.div 
                        className="relative" 
                        initial={{ opacity: 0, x: isAr ? 30 : -30 }} 
                        whileInView={{ opacity: 1, x: 0 }} 
                        transition={{ duration: 0.8 }} 
                        viewport={{ once: true }} 
                    > 
                        <div className="relative z-10 h-[320px] sm:h-[420px] md:h-[500px] lg:h-[520px] w-full bg-gradient-to-br from-[#1e2c2b] to-[#16201f] border border-[#94734a]/20 shadow-2xl overflow-hidden"> 
                            <Image 
                                src="/images/t-8.webp" 
                                alt="About Martini Solis" 
                                fill 
                                className="object-cover opacity-90 hover:scale-105 transition-transform duration-[3s]" 
                            /> 
                            <div className="absolute inset-0 bg-[#273F3F]/20 mix-blend-multiply" /> 
                        </div> 
 
                        {/* Decorative Frames */} 
                        <div className={`absolute -top-4 ${isAr ? '-right-4' : '-left-4'} w-1/2 h-1/2 border-${isAr ? 'r' : 'l'} border-t border-[#273F3F]/40 z-0`} /> 
                        <div className={`absolute -bottom-4 ${isAr ? '-left-4' : '-right-4'} w-1/2 h-1/2 border-${isAr ? 'l' : 'r'} border-b border-[#273F3F]/40 z-0`} /> 
 
                        {/* Badge */} 
                         
                    </motion.div> 
 
                    {/* Right Column: Content */} 
                    <motion.div 
                        initial={{ opacity: 0, x: isAr ? -30 : 30 }} 
                        whileInView={{ opacity: 1, x: 0 }} 
                        transition={{ duration: 0.8 }} 
                        viewport={{ once: false }} 
                        className={isAr ? "lg:pr-6" : "lg:pl-6"} 
                    > 
                        <motion.header 
                            initial={{ opacity: 0, y: 20 }} 
                            whileInView={{ opacity: 1, y: 0 }} 
                            transition={{ duration: 0.6, delay: 0.2 }} 
                            viewport={{ once: false }} 
                        > 
                            <span className={`block text-[#273f3f] text-[17px] font-bold mb-4 ${isAr ? 'font-Camel' : 'tracking-[0.4em] uppercase font-Sanseriffic'}`}> 
                                {t('about.who_we_are')} 
                            </span> 
                            <h3 className={`text-[#231A15]/60 mb-8 leading-tight ${isAr ? 'text-4xl md:text-5xl font-black font-Camel' : 'text-4xl md:text-[45px] font-bold tracking-widest font-Sanseriffic '}`}> 
                            {t('about.title_main')} <span className={`text-[#231A15]/80 font-light ${isAr ? 'text-[35px] md:text-[50px]  font-computerist ' : 'text-[40px] md:text-[58px] font-computerist tracking-widest'}`}> 
                                    MARTINI<span className="text-[34px] md:text-[37px] lg:text-[50px]"> S<span className="font-Raleway font-[550]">O</span>LIS</span> 
                                </span> 
                            </h3> 
                        </motion.header> 
 
                        <motion.p 
                            initial={{ opacity: 0, y: 20 }} 
                            whileInView={{ opacity: 1, y: 0 }} 
                            transition={{ duration: 0.6, delay: 0.4 }} 
                            viewport={{ once: false }} 
                            className={`text-[#353535] mb-10 ${isAr ? 'text-[22px] leading-loose font-Camel' : 'text-[20px] leading-relaxed font-light tracking-widest font-Sanseriffic'}`} 
                        > 
                            {t('about.description')} 
                        </motion.p> 
 
                        <div className="grid grid-cols-2 gap-y-6 gap-x-4"> 
                           {(featuresList as any[]).map((feature, idx) => ( 
                                <motion.div  
                                    key={idx}  
                                    className="flex items-center gap-4 group cursor-default" 
                                    initial={{ opacity: 0, y: 15 }} 
                                    whileInView={{ opacity: 1, y: 0 }} 
                                    transition={{ duration: 0.4, delay: 0.6 + (idx * 0.1) }} 
                                    viewport={{ once: true }} 
                                > 
                                    <CheckCircleIcon className="w-5 h-5 text-[#4A6D6F] flex-shrink-0" /> 
                                    <span className={`text-[#1a1a1a] font-medium text-[18px] ${isAr ? 'font-Camel' : 'tracking-widest uppercase font-Sanseriffic'}`}> 
                                        {feature} 
                                    </span> 
                                </motion.div> 
                            ))} 
                        </div> 
                    </motion.div> 
                </div> 
            </div> 
        </section> 
    ); 
}