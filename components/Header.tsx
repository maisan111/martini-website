"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { Phone, MessageCircle } from "lucide-react";
import { useTranslation } from "react-i18next";
import i18nConfig from "@/app/i18nConfig";

const NAV_LINKS = [
  { key: "nav.home", href: "/" },
  { key: "nav.about", href: "/about" },

  { key: "nav.portfolio", href: "/projects" },
  { key: "nav.services", href: "/service" },
];

const LANGUAGES = ["EN", "AR"];

export default function Header() {
  const { t, i18n } = useTranslation("common");
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const currentLang = (i18n?.language || "en").toUpperCase();
  const isAr = currentLang === "AR";

  // track scroll state for the header blur
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // set initial value
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "unset";
  }, [menuOpen]);

  const changeLanguage = async (lang) => {
    const newLocale = lang.toLowerCase();
    try {
      await fetch("/api/locale", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ locale: newLocale }),
      });
    } catch (e) {
      console.warn("Failed to set locale cookie on server", e);
    }

    if (
      i18n.language === i18nConfig.defaultLocale &&
      !i18nConfig.prefixDefault
    ) {
      router.push("/" + newLocale + pathname);
    } else {
      const newPath = pathname.replace(`/${i18n.language}`, `/${newLocale}`);
      router.push(newPath);
    }
    setLangOpen(false);
  };

  const getLinkClass = (path, isMenu = false) => {
    const fontStyle = isAr
      ? "font-Camel text-[25px]"
      : "font-Sanseriffic text-[27px] tracking-[0.2em] uppercase";

    // Styling for Sidebar Menu links
    if (isMenu) {
      return `block py-3 text-[#C4A484] hover:text-[#8b6f53] transition-colors flex justify-between items-center ${fontStyle}`;
    }

    return `relative transition-all duration-300 ${fontStyle} text-white hover:text-white/70`;
  };

  return (
    <>
      <header
        dir={isAr ? "rtl" : "ltr"}
        className={`fixed top-0 w-full z-50 transition-all duration-300 border-b border-white/10 ${
          isScrolled
            ? "backdrop-blur-lg bg-[#9A887F]/90 py-3"
            : "bg-transparent py-5 lg:py-8"
        }`}
      >
        <div className="container mx-auto  flex justify-between items-center">
          {/* Logo */}
          <Link
            href="/"
            className="relative z-50 flex items-center transition-transform hover:scale-[1.02] active:scale-95 "
          >
            <div className="w-44 md:w-48 lg:w-60">
              <Image
                src="/images/Logo-2.png"
                alt="Logo"
                width={480}
                height={100}
                priority
                className="w-full h-auto object-contain grayscale brightness-0 invert"
              />
            </div>
          </Link>

          {/* Right Controls */}
          <div className="flex items-center gap-6 lg:gap-12 px-4">
            {/* Menu Button */}
            <button
              onClick={() => setMenuOpen(true)}
              className="group flex items-center gap-4 text-white hover:text-white/80 transition-all uppercase text-[10px] md:text-xs tracking-[0.3em] font-medium "
            >
              <span className="hidden sm:block">Menu</span>
              <div className="w-8 h-5 flex flex-col justify-center items-end gap-1.5">
                <span className="w-full h-[1.2px] bg-current transition-all group-hover:w-full"></span>
                <span className="w-2/3 h-[1.2px] bg-current transition-all group-hover:w-full"></span>
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* ── Sidebar Menu (White Overlay as per image) ── */}
      {/* Overlay Background */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-[998] transition-opacity duration-500 ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={() => setMenuOpen(false)}
      />

      {/* Slide-out White Panel */}
      <div
        dir={isAr ? "rtl" : "ltr"}
        className={`fixed top-0 ${isAr ? "left-0" : "right-0"} h-full w-full sm:w-[450px] bg-white shadow-2xl z-[999] transform transition-transform duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] flex flex-col
          ${menuOpen ? "translate-x-0" : isAr ? "-translate-x-full" : "translate-x-full"}`}
      >
        <div
          className="absolute inset-0 bg-center bg-cover bg-no-repeat opacity-[0.07] z-10"
          style={{ backgroundImage: "url('/images/header.webp')" }}
        />
        <div className="relative p-8 lg:p-12 flex flex-col h-full z-[1000]">
          {/* Close Button */}
          <button
            onClick={() => setMenuOpen(false)}
            className="self-end text-gray-400 hover:text-gray-800 transition-colors mb-12"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path
                d="M18 6L6 18M6 6l12 12"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {/* Links */}
          <nav className="flex flex-col flex-grow gap-2 mt-4 ">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={getLinkClass(link.href, true)}
                onClick={() => setMenuOpen(false)}
              >
                {t(link.key)}
              </Link>
            ))}
          </nav>

          {/* Bottom Actions (Language & Contacts) */}
          <div className="mt-auto border-t border-gray-100 pt-8">
            <div className="flex justify-between items-center mb-6">
              <div className="flex gap-4">
                <a
                  href="https://wa.me/963950505058"
                  className="text-gray-400 hover:text-[#C4A484] transition"
                >
                  <MessageCircle size={30} strokeWidth={1.5} />
                </a>
                <a
                  href="tel:+963950505058"
                  className="text-gray-400 hover:text-[#C4A484] transition"
                >
                  <Phone size={30} strokeWidth={1.5} />
                </a>
              </div>
            </div>

            <div className="flex gap-6 justify-start">
              {LANGUAGES.map((lang) => (
                <button
                  key={lang}
                  onClick={() => changeLanguage(lang)}
                  className={`text-lg tracking-widest font-Sanseriffic transition-colors ${
                    currentLang === lang
                      ? "text-[#C4A484] font-extrabold"
                      : "text-gray-400 hover:text-gray-500"
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
