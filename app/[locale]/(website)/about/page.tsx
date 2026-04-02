


// 'use client';

// import CompanyValues from "@/components/CompanyValue";
// import Image from "next/image";
// import { useTranslation } from "react-i18next";

// export default function AboutPage() {
//     const { t, i18n } = useTranslation("common");
//     const isAr = i18n.language === "ar";

//     const missionVisionData = [
//         {
//             title: t("about_page.mission.title"),
//             text: t("about_page.mission.text")
//         },
//         {
//             title: t("about_page.vision.title"),
//             text: t("about_page.vision.text")
//         }
//     ];

//     return (
//         <main 
//             dir={isAr ? "rtl" : "ltr"} 
//             className={`bg-[#DDD3CB] min-h-screen text-white ${isAr ? "font-Camel" : "font-Sanseriffic"}`}
//         >
//             {/* 1. Hero Section */}
//             <div className="relative min-h-screen w-full flex flex-col overflow-hidden">
//                 {/* Background Media */}
//                 <div className="absolute inset-0 z-0">
//                     <Image
//                         src="/images/abouthero.webp"
//                         alt="About Us"
//                         fill
//                         className="object-cover grayscale-[40%]"
//                         priority
//                     />
//                     <video
//                         className="absolute inset-0 w-full h-full object-cover opacity-55 mix-blend-overlay"
//                         autoPlay
//                         muted
//                         loop
//                         playsInline
//                     >
//                         <source src="/images/hero-s.mp4" type="video/mp4" />
//                     </video>
//                     <div className="absolute inset-0 bg-black/40" />
//                 </div>

//                 {/* Content Container */}
//                 <div className="relative z-30 container mx-auto px-6 pt-40 pb-20 flex-grow flex flex-col justify-center">
//                     {/* Main Title */}
//                     <div className={`mb-16 md:mb-24 pt-14 ${isAr ? "text-right pr-4 lg:pr-10" : "text-left"}`}>
//                         <h1 className={`text-white text-5xl md:text-6xl lg:text-7xl font-bold leading-tight  ${isAr ? "font-Camel" : "font-Sanseriffic tracking-widest"}`}>
//                             {t("about_page.title_part1")} {t("about_page.title_part2") ? <span className="text-white font-bold">{t("about_page.title_part2")}</span> : null} <br />
//                             <span className={`text-[#cfdddd] font-computerist stroke-text block mt-6 font-medium text-5xl md:text-6xl lg:text-[75px] ${!isAr && "tracking-widest"}`}>
//                                 MARTINI<span className="text-[40px] md:text-[43px] lg:text-[55px]"> S<span className="font-Hind_Guntur font-[550]">O</span>LIS</span>
//                             </span>
//                         </h1>
//                     </div>

//                     {/* Mission & Vision Grid */}
//                     <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl  ${isAr ? "font-Camel px-2" : "font-Sanseriffic tracking-widest"}`}>
//                         {missionVisionData.map((box, i) => (
//                             <div key={i} className="bg-[#9F8C84]/30 backdrop-blur-md p-8 md:p-10 border border-[#94734a]/20 hover:border-[#cfb186]/40 transition-colors duration-500">
//                                 <h2 className={`text-white text-[25px] font-extrabold mb-4 uppercase ${isAr ? "font-Camel" : "font-Sanseriffic tracking-widest"}`}>
//                                     {box.title}
//                                 </h2>
//                                 <p className={`text-white/95 ${isAr ? "font-Camel leading-loose text-[18px] md:text-[21px] " : "font-Sanseriffic tracking-widest leading-relaxed text-[16px] md:text-[18px] "}`}>
//                                     {box.text}
//                                 </p>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>

//             <CompanyValues />
//         </main>
//     );
// }




// page.tsx — Server Component shell (no 'use client')

import AboutPageClient from "@/components/AboutPageClient";



export default function AboutPage() {
    return <AboutPageClient/>;
}