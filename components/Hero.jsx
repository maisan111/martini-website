"use client";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade } from "swiper/modules";
import { motion, useMotionValue, useTransform } from "framer-motion";
import Link from "next/link";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ArrowDownIcon,
} from "@heroicons/react/24/outline";
import { useTranslation } from "react-i18next";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

export default function LuxuryHero() {
  const { t, i18n } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  const isAr = i18n.language === "ar";
  const direction = isAr ? "rtl" : "ltr";
  const projects = t("hero.projects", { returnObjects: true }) || [];
  const scrollText = t("hero.scroll");
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const bgX = useTransform(mouseX, [-0.5, 0.5], ["-2%", "2%"]);
  const bgY = useTransform(mouseY, [-0.5, 0.5], ["-2%", "2%"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left - rect.width / 2) / rect.width);
    mouseY.set((e.clientY - rect.top - rect.height / 2) / rect.height);
  };

  useEffect(() => setMounted(true), []);
  if (!mounted) return <div className="h-screen w-full bg-[#D4BCA3]" />;

  const images = ["/images/t-4.webp", "/images/t-5.webp", "/images/t-1.webp"];

  const images_ar = [
    "/images/t-4-a.webp",
    "/images/t-5-a.webp",
    "/images/t-1-a.webp",
  ];

  return (
    <section
      dir={direction}
      onMouseMove={handleMouseMove}
      className={`relative h-screen w-full overflow-hidden bg-[#D4BCA3] ${
        isAr ? "font-Camel" : "font-Sanseriffic"
      }`}
    >
      <Swiper
        key={i18n.language}
        dir={direction}
        modules={[Navigation, Autoplay, EffectFade]}
        effect="fade"
        speed={1800}
        loop
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        navigation={{ nextEl: ".hero-next", prevEl: ".hero-prev" }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="h-full w-full"
      >
        {Array.isArray(projects) &&
          projects.map((project, index) => {
            const isActive = activeIndex === index;
            return (
              <SwiperSlide key={index}>
                <motion.div
                  className="absolute inset-0"
                  style={{ x: bgX, y: bgY, willChange: "transform" }}
                >
                  <motion.div
                    className="absolute inset-[-4%] bg-cover bg-center object-contain"
                    dir={direction}
                    animate={isActive ? { scale: 1.04 } : { scale: 1.12 }}
                    transition={{ duration: 8, ease: "easeOut" }}
                    style={{
                      // Check if the direction is right-to-left to use the Arabic array
                      backgroundImage: `url(${direction === "rtl" ? images_ar[index] : images[index]})`,
                      willChange: "transform",
                    }}
                  />
                </motion.div>
                <div className="absolute inset-0 bg-black/60" />
                <div className="absolute inset-0 z-[2] flex">
                  <div
                    className={`w-full md:w-[50%] h-full bg-gradient-to-t md:bg-gradient-to-${isAr ? "r" : "l"} from-[#9F8C84] via-[#9F8C84]/90 to-transparent ${isAr ? "mr-auto" : "ml-auto"}`}
                  />
                </div>

                <div className="relative z-20 flex h-full items-center px-4 sm:px-14">
                  <div
                    className={`w-full md:w-1/2 flex flex-col items-start px-10 ${isAr ? "mr-auto text-right" : "ml-auto text-left"} mt-20`}
                  >
                    <div className="overflow-hidden">
                      <motion.h1
                        initial={{ y: "110%" }}
                        animate={isActive ? { y: "0%" } : { y: "110%" }}
                        transition={{
                          duration: 0.9,
                          delay: 0.3,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                        className={`
                          font-bold leading-tight text-white mb-2 
                          ${isAr ? "text-[36px] sm:text-6xl  font-Camel" : "text-[36px] sm:text-6xl  tracking-[0.1em]  font-Sanseriffic"}
                        `}
                      >
                        {project.title}
                      </motion.h1>
                    </div>

                    <div className="overflow-hidden mb-6 pb-2 block">
                      <motion.span
                        initial={{ y: "110%" }}
                        animate={isActive ? { y: "0%" } : { y: "110%" }}
                        transition={{
                          duration: 0.9,
                          delay: 0.45,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                        className={`
                          block font-bold text-white 
                          ${isAr ? "text-[35px] sm:text-5xl lg:text-6xl font-Camel" : "text-[35px] sm:text-5xl lg:text-[65px] tracking-[0.1em] font-Sanseriffic"}
                        `}
                      >
                        {project.highlight}
                      </motion.span>
                    </div>

                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={isActive ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ duration: 1, delay: 0.65 }}
                      className="mb-10"
                    >
                      <p
                        className={`max-w-3xl text-white/90 ${isAr ? "text-[24px] font-Camel" : "text-[17px] leading-loose tracking-widest font-light"}`}
                      >
                        {project.subtitle}
                      </p>
                    </motion.div>

                    {/* <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={
                        isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                      }
                      transition={{ duration: 0.7, delay: 0.8 }}
                      className="flex flex-wrap gap-4 w-full"
                    >
                      <Link
                        href="/projects"
                        className={`bg-white hover:bg-gray-100 text-[#231A15] font-bold uppercase transition-colors duration-300 mb-4 ${isAr ? "px-8 py-3 text-[17px] font-Camel" : "px-8 py-3 text-[15px] tracking-[0.2em]"}`}
                      >
                        {t("hero.view_project", "GET STARTED")}
                      </Link>
                    </motion.div> */}
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
      </Swiper>

      <div className="absolute bottom-3 left-0 right-0 z-40 flex justify-between items-end">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[145px] h-[135px] bg-white rounded-t-full flex items-end justify-center pb-4 z-50">
          <div className="relative flex items-center justify-center w-[108px] h-[108px]">
            {/* تم إضافة حركة الدوران هنا باستخدام motion */}
            <motion.svg
              key={i18n.language}
              className="absolute w-full h-full font-Audiowide"
              viewBox="0 0 100 100"
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            >
              <defs>
                {/* تعريف المسار مرة واحدة ليستخدمه النص */}
                <path
                  id="circlePath"
                  d="M 50, 50 m -40, 0 a 40, 40 0 1, 1 80, 0 a 40, 40 0 1, 1 -80, 0"
                />
              </defs>

              <text
                className="fill-[#C4A484]"
                style={{
                  fontSize: isAr ? "14.5px" : "14.5px",
                  fontFamily: "Audiowide",
                  // letterSpacing: isAr ? "0em" : "0.1em",
                  fontWeight: "300",
                  padding: "10px",
                  // نترك المتصفح يقرر الاتجاه دون تدخل يدوي في الـ unicodeBidi
                  direction: isAr ? "rtl" : "ltr",
                }}
              >
                <textPath 
                className="p-2"
                  href="#circlePath"
                  startOffset="50%"
                  textAnchor="middle"
                  // لضمان ظهور النص العربي من اليمين لليسار على المسار
                  side={isAr ? "right" : "left"}
                >
                  {t("hero.scroll")}
                </textPath>
              </text>
            </motion.svg>
            <ArrowDownIcon className="w-5 h-5 text-[#b88858] animate-bounce" />
          </div>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-4 z-40 pointer-events-auto bg-red-900">
          <button className="hero-prev w-10 h-px bg-white hover:bg-white/50 transition-all cursor-pointer"></button>
          <button className="hero-next w-10 h-px bg-white/40 hover:bg-white transition-all cursor-pointer"></button>
        </div>

        <div className="absolute -bottom-3 left-0 w-full h-16 bg-white z-30"></div>
      </div>
    </section>
  );
}
