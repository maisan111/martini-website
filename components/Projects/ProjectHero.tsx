

"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";

interface ProjectHeroProps {
  title: string;
  category: string;
  location: string;
  videoSrc: string;
  isAr: boolean;
  t: any;
}

export default function ProjectHero({
  title,
  category,
  location,
  videoSrc,
  isAr,
  t,
}: ProjectHeroProps) {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 400]);
  const opacity = useTransform(scrollY, [0, 800], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden bg-[#231A15]"
    >
      {/* Back Button */}
      <div className={`absolute bottom-12 ${isAr ? "right-24" : "left-24"} z-50`}>
        <Link href={`/${isAr ? "ar" : "en"}/projects`}>
          <motion.button
            initial={{ opacity: 0, x: isAr ? 20 : -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className={`flex items-center gap-3 text-[#DDD3CB]/80 hover:text-[#F7F4F1] transition-colors uppercase text-sm ${
              isAr ? "font-Camel tracking-normal" : "font-Sanseriffic tracking-widest"
            }`}
          >
            {isAr ? <ArrowRight className="w-4 h-4" /> : <ArrowLeft className="w-4 h-4" />}
            {t("common.back_to_projects")}
          </motion.button>
        </Link>
      </div>

      {/* Parallax Video Background */}
      <motion.div style={{ y, opacity }} className="absolute inset-0 w-full h-full origin-top">
        <video
          src={videoSrc}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover grayscale-[30%] opacity-80"
        />
        {/* <div
          className={`absolute inset-0 bg-gradient-to-r ${
            isAr
              ? "from-transparent via-[#231A15]/80 to-[#231A15]"
              : "from-[#231A15] via-[#231A15]/80 to-transparent"
          } z-10`}
        /> */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#231A15] via-[#9C8F84]/20 to-transparent z-10" />
      </motion.div>

      {/* Content */}
      <div className="absolute inset-0 z-20 flex items-end pb-32">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-6 mb-6">
              <span
                className={`text-[#DDD3CB] text-[14px] uppercase ${
                  isAr ? "font-Camel" : "font-Sanseriffic tracking-widest"
                }`}
              >
                {category}
              </span>
              <div className="h-[1px] w-12 bg-[#DDD3CB]" />
              <span
                className={`text-[#DDD3CB] text-[14px] uppercase ${
                  isAr ? "font-Camel" : "font-Sanseriffic tracking-widest"
                }`}
              >
                {location}
              </span>
            </div>

            <h1
              className={`text-6xl md:text-8xl lg:text-9xl font-light text-[#F7F4F1] leading-none ${
                isAr ? "font-Camel" : "font-Sanseriffic tracking-widest"
              }`}
            >
              {title}
            </h1>
          </motion.div>
        </div>
      </div>
    </section>
  );
}