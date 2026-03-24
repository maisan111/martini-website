


"use client";

import React from "react";
import Link from "next/link";
import { Linkedin, Instagram, Facebook, Twitter } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t, i18n } = useTranslation("common");
  const currentYear = new Date().getFullYear();
  const isAr = i18n.language === "ar";

  const socialLinks = [
    { icon: Linkedin, href: "https://www.linkedin.com/in/martinisolis", label: "LinkedIn" },
    { icon: Instagram, href: "https://www.instagram.com/martinisolis", label: "Instagram" },
    { icon: Facebook, href: "https://www.facebook.com/martinisolis", label: "Facebook" },
    { icon: Twitter, href: "https://www.twitter.com/martinisolis", label: "Twitter" },
  ];

  return (
    <footer 
      dir={isAr ? "rtl" : "ltr"} 
      className="relative z-20 bg-[#231A15] text-white overflow-hidden"
    >
{/* 
      <div className="absolute inset-0 opacity-[0.02] bg-center bg-cover bg-no-repeat" 
        style={{ backgroundImage: "url('/images/footer-2.jpg')" }}
      /> */}
      {/* Decorative grid */}
      {/* <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-[#cfdddd]/0 via-[#cfdddd]/20 to-[#cfdddd]/0" />
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-[#cfdddd]/0 via-[#cfdddd]/20 to-[#cfdddd]/0" />
      </div> */}

      <div className="container mx-auto px-7 lg:px-8 relative">
        <div className="py-14 lg:py-16">
          <div className="grid grid-cols-1 place-items-center gap-16 lg:gap-8 text-center">

            {/* Brand Section */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="w-fit mx-auto py-3"
              >
                <Link href="/">
                  <div className="w-fit h-12 md:h-[115px] flex items-center justify-center mx-auto pt-3">
                    <Image
                      src="/images/LOGO-1.png"
                      alt="Logo"
                      width={480}
                      height={100}
                      priority
                      className="w-[240px] md:w-[310px] h-auto object-contain object-center filter drop-shadow-[1px_2px_20px_rgba(255,255,255,0.6)]"
                    />
                  </div>
                </Link>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className={`text-white/50 text-[20px] leading-relaxed max-w-xl font-light pt-5 ${isAr ? "tracking-wide font-Camel" : "font-Sanseriffic tracking-widest"}`}
              >
                {t("footer.description")}
              </motion.p>
            </div>

            {/* Social */}
            <div className="">
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    className="group relative"
                  >
                    <div className="absolute inset-0 bg-[#cfdddd]/20 rounded-full scale-0 group-hover:scale-150 transition-transform duration-500 blur-xl" />
                    <div className="relative w-12 h-12 border border-white/20 rounded-full flex items-center justify-center group-hover:border-[#D8D7DC] group-hover:bg-[#D8D7DC]/10 transition-all duration-300">
                      <social.icon className="w-[18px] h-[18px] text-white/50 group-hover:text-[#D8D7DC] transition-colors duration-300" />
                    </div>
                  </motion.a>

                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 py-8">
          <p className={`text-[12px] text-white/30 uppercase text-center font-light ${isAr ? "tracking-normal font-Camel" : "tracking-[0.3em] font-Sanseriffic"}`}>
            {t("footer.rights", { year: 2025 })}
          </p>
    
        </div>
      </div>
    </footer>
  );
}