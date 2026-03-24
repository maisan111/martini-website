



// "use client";

// import React from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { ArrowRightIcon } from "@heroicons/react/24/outline";

// // Swiper Imports
// import { Swiper, SwiperSlide } from "swiper/react";
// import { EffectCoverflow, Navigation, Pagination, Autoplay } from "swiper/modules";

// // Swiper Styles
// import "swiper/css";
// import "swiper/css/effect-coverflow";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// interface Project {
//   id: number;
//   image: string;
//   name: string;
//   category: string;
// }

// const PROJECT_DATA: Project[] = [
//   { id: 1, image: "/images/o6.png", name: "Creative Space", category: "Residential" },
//   { id: 2, image: "/images/o3.png", name: "Modern Office", category: "Commercial" },
//   { id: 3, image: "/images/o6.png", name: "Luxury Villa", category: "Residential" },
//   { id: 4, image: "/images/o3.png", name: "Urban Loft", category: "Interior" },
//   { id: 5, image: "/images/o6.png", name: "Minimalist Studio", category: "Interior" },
// ];

// function ProjectCard({ image, category, name }: Omit<Project, "id">) {
//   return (
//     <div className="group cursor-pointer w-full border border-[#6c9395] " role="group" aria-label={`Project: ${name}`}>
//       {/* Card Background updated to deep palette slate */}
//       <div className="h-[550px] bg-[#17201F] relative overflow-hidden  border border-[#4A6D6F]/20 shadow-2xl">
//         <Image
//           src={image}
//           alt={`${name} - ${category}`}
//           fill
//           className="object-cover transition duration-1000 group-hover:scale-110 opacity-70 group-hover:opacity-100"
//           sizes="(max-width: 768px) 320px, 500px"
//         />

//         {/* Info Overlay - Gradient using the palette's deepest tone */}
//         <div className="absolute inset-0 bg-gradient-to-t from-[#17201F] via-transparent to-transparent opacity-90 transition-opacity" />
        
//         <div className="absolute bottom-0 left-0 p-10 w-full z-10">
//           {/* Category updated to Light Teal (A5BABB) */}
//           <span className="text-[10px] font-bold text-[#A5BABB] uppercase tracking-[0.4em] font-Sanseriffic block mb-3">
//             {category}
//           </span>
//           <h3 className="text-2xl md:text-3xl font-bold text-white font-Sanseriffic tracking-widest">
//             {name}
//           </h3>
          
//           {/* Decorative Line updated to Teal (A5BABB) */}
//           <div className="w-0 group-hover:w-12 h-[1px] bg-[#A5BABB] mt-4 transition-all duration-500" />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default function FeaturedProjects() {
//   return (
//     <section 
//       // Background and Border synced with AboutSection
//       className="bg-gradient-to-tl from-[#17201F]/90 via-[#1a2727] to-[#B2B1B1]/60 text-white py-24 border-t border-[#4A6D6F]/30 overflow-hidden relative"
//     >
//       <div className="container mx-auto px-6 relative z-10">

//         {/* Header */}
//         <div className="flex flex-col md:flex-row justify-between mb-16 gap-6">
//           <header>
//             <span className="text-[#A5BABB] text-xs font-bold uppercase tracking-[0.5em] mb-4 block font-Sanseriffic">
//               Our Portfolio
//             </span>
//             <h2 className="text-4xl md:text-6xl  tracking-widest font-Sanseriffic">
//               Featured <span className="text-[#A5BABB] font-light">Projects</span>
//             </h2>
//           </header>

//           <Link
//             href="/projects"
//             className="flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-white/50 hover:text-[#A5BABB] transition-all group border-b border-[#4A6D6F]/30 hover:border-[#A5BABB] pb-2"
//           >
//             Explore Gallery
//             <ArrowRightIcon className="w-3 h-3 transition-transform group-hover:translate-x-2" />
//           </Link>
//         </div>

//         {/* Swiper Coverflow Slider */}
//         <div className="featured-projects-swiper w-full">
//           <Swiper
//             modules={[EffectCoverflow, Navigation, Pagination, Autoplay]}
//             effect={"coverflow"}
//             grabCursor={true}
//             centeredSlides={true}
//             loop={true}
//             slidesPerView={"auto"}
//             speed={1200}
//             autoplay={{
//               delay: 4500,
//               disableOnInteraction: false,
//             }}
//             coverflowEffect={{
//               rotate: 20,
//               stretch: -20,
//               depth: 200,
//               modifier: 1,
//               slideShadows: true,
//             }}
//             pagination={{ 
//                 clickable: true,
//             }}
//             className="!pb-24 !pt-10"
//           >
//             {PROJECT_DATA.map((project) => (
//               <SwiperSlide 
//                 key={project.id} 
//                 className="max-w-[365px] md:max-w-[500px]"
//               >
//                 <ProjectCard 
//                   image={project.image} 
//                   category={project.category} 
//                   name={project.name} 
//                 />
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>
//       </div>

//       {/* Global Swiper Theming Updated to Teal/Slate Palette */}
//       <style jsx global>{`
//         .featured-projects-swiper .swiper-pagination-bullet {
//           background: #4A6D6F !important;
//           opacity: 0.4;
//           width: 6px;
//           height: 6px;
//           transition: all 0.4s ease;
//           margin: 0 8px !important;
//         }
//         .featured-projects-swiper .swiper-pagination-bullet-active {
//           background: #A5BABB !important;
//           width: 30px;
//           border-radius: 4px;
//           opacity: 1;
//         }
//         .featured-projects-swiper .swiper-slide-shadow-left, 
//         .featured-projects-swiper .swiper-slide-shadow-right {
//           background-image: linear-gradient(to right, rgba(23, 32, 31, 1), rgba(23, 32, 31, 0)) !important;
//         }
//       `}</style>
//     </section>
//   );
// }



















// "use client";

// import React from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
// import { useTranslation } from "react-i18next";

// // Swiper Imports
// import { Swiper, SwiperSlide } from "swiper/react";
// import { EffectCoverflow, Navigation, Pagination, Autoplay } from "swiper/modules";

// // Swiper Styles
// import "swiper/css";
// import "swiper/css/effect-coverflow";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// function ProjectCard({ image, category, name, isAr }) {
//   return (
//     <div className={`group cursor-pointer w-full border border-[#6c9395] ${isAr ? 'text-right' : 'text-left'}`} role="group">
//       <div className="h-[550px] bg-[#17201F] relative overflow-hidden border border-[#4A6D6F]/20 shadow-2xl">
//         <Image
//           src={image}
//           alt={name}
//           fill
//           className="object-cover transition duration-1000 group-hover:scale-110 opacity-70 group-hover:opacity-100"
//           sizes="(max-width: 768px) 320px, 500px"
//         />

//         <div className="absolute inset-0 bg-gradient-to-t from-[#17201F] via-transparent to-transparent opacity-90 transition-opacity" />
        
//         <div className={`absolute bottom-0 p-10 w-full z-10 ${isAr ? 'right-0' : 'left-0'}`}>
//           <span className={`text-[14px] font-bold text-[#A5BABB] uppercase block mb-3 ${isAr ? 'tracking-normal font-Camel' : 'tracking-[0.4em] font-Sanseriffic'}`}>
//             {category}
//           </span>
//           <h3 className={`text-2xl md:text-3xl font-bold text-white ${isAr ? 'font-Camel' : 'font-Sanseriffic tracking-widest'}`}>
//             {name}
//           </h3>
          
//           <div className={`h-[1px] bg-[#A5BABB] mt-4 transition-all duration-500 w-0 group-hover:w-12 ${isAr ? 'mr-0' : 'ml-0'}`} />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default function FeaturedProjects() {
//   const { t, i18n } = useTranslation();
//   const isAr = i18n.language === "ar";

//   // جلب البيانات مع دمج الصور المحلية (لأن الصور غالباً لا تأتي من ملف الترجمة)
//   const projectsBase = t('projects_section.items', { returnObjects: true }) || [];
//   const projectImages = ["/images/o6.png", "/images/o3.png", "/images/o6.png", "/images/o3.png", "/images/o6.png"];
  
//   const projects = projectsBase.map((p, index) => ({
//     ...p,
//     image: projectImages[index] || "/images/o6.png"
//   }));

//   return (
//     <section 
//       dir={isAr ? "rtl" : "ltr"}
//       className={`bg-gradient-to-tl from-[#17201F]/90 via-[#1a2727] to-[#B2B1B1]/60 text-white py-24 border-t border-[#4A6D6F]/30 overflow-hidden relative ${isAr ? 'font-Camel' : 'font-Sanseriffic'}`}
//     >
//       <div className="container mx-auto px-6 relative z-10">

//         {/* Header - تم ضبط المحاذاة هنا */}
//         <div className={`flex flex-col md:flex-row justify-between mb-16 gap-6 ${isAr ? 'items-start md:items-end' : 'items-start md:items-end'}`}>
//           <header className={isAr ? 'text-right' : 'text-left'}>
//             <span className={`text-[#A5BABB] text-[16px] font-bold uppercase mb-4 block ${isAr ? 'tracking-normal' : 'tracking-[0.5em]'}`}>
//               {t('projects_section.badge')}
//             </span>
//             <h2 className={`text-5xl md:text-7xl ${isAr ? 'font-black leading-tight' : 'tracking-widest'}`}>
//               {t('projects_section.title_main')} <span className="text-[#A5BABB] font-light">{t('projects_section.title_highlight')}</span>
//             </h2>
//           </header>

//           <Link
//             href="/projects"
//             className={`flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-white/50 hover:text-[#A5BABB] transition-all group border-b border-[#4A6D6F]/30 hover:border-[#A5BABB] pb-2 ${isAr ? 'font-Camel flex-row-reverse' : ''}`}
//           >
//             {t('projects_section.explore')}
//             {isAr ? (
//               <ArrowLeftIcon className="w-3 h-3 transition-transform group-hover:-translate-x-2" />
//             ) : (
//               <ArrowRightIcon className="w-3 h-3 transition-transform group-hover:translate-x-2" />
//             )}
//           </Link>
//         </div>

//         {/* Swiper Slider */}
//         <div className="featured-projects-swiper w-full">
//           <Swiper
//             key={i18n.language} // مهم جداً لتحديث الاتجاه عند تغيير اللغة
//             dir={isAr ? "rtl" : "ltr"}
//             modules={[EffectCoverflow, Navigation, Pagination, Autoplay]}
//             effect={"coverflow"}
//             grabCursor={true}
//             centeredSlides={true}
//             loop={true}
//             slidesPerView={"auto"}
//             speed={1200}
//             autoplay={{ delay: 4500, disableOnInteraction: false }}
//             coverflowEffect={{
//               rotate: 20,
//               stretch: -20,
//               depth: 200,
//               modifier: 1,
//               slideShadows: true,
//             }}
//             pagination={{ clickable: true }}
//             className="!pb-24 !pt-10"
//           >
//             {projects.map((project) => (
//               <SwiperSlide 
//                 key={project.id} 
//                 className="max-w-[365px] md:max-w-[500px]"
//               >
//                 <ProjectCard 
//                   image={project.image} 
//                   category={project.category} 
//                   name={project.name} 
//                   isAr={isAr}
//                 />
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>
//       </div>

//       <style jsx global>{`
//         .featured-projects-swiper .swiper-pagination-bullet {
//           background: #4A6D6F !important;
//           opacity: 0.4;
//           width: 6px;
//           height: 6px;
//           transition: all 0.4s ease;
//           margin: 0 8px !important;
//         }
//         .featured-projects-swiper .swiper-pagination-bullet-active {
//           background: #A5BABB !important;
//           width: 30px;
//           border-radius: 4px;
//           opacity: 1;
//         }
//       `}</style>
//     </section>
//   );
// }









"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRightIcon, ArrowLeftIcon, ArrowsPointingOutIcon } from "@heroicons/react/24/outline";
import { useTranslation } from "react-i18next";

export default function FeaturedProjectShowcase() {
  const { t, i18n } = useTranslation("common");
  const isAr = i18n.language === "ar";

  // جلب بيانات المشروع الأول فقط
  const projectsBase = t('projects_section.items', { returnObjects: true }) || [];
  const mainProject = projectsBase[0] || {};

  // قائمة صور المشروع (يمكنك إضافة كل الصور التي تملكها هنا)
  const allProjectImages = [
    "/images/o6.png",
    "/images/o3.png",
    "/images/architecture.jpg",
    "/images/living-room.jpg",
    "/images/o6.png",
  ];

  return (
    <section 
      dir={isAr ? "rtl" : "ltr"}
      className={`bg-[#17201F] py-24 border-t border-[#4A6D6F]/30 overflow-hidden ${isAr ? 'font-Camel' : 'font-Sanseriffic'}`}
    >
      <div className="container mx-auto px-6">
        
        {/* 1. Project Identity - رأس القسم بنفس أسلوب خطوطك */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-3xl">
            <span className={`text-[#A5BABB] text-[16px] font-bold uppercase mb-4 block ${!isAr && 'tracking-[0.5em]'}`}>
              {t('projects_section.badge')}
            </span>
            <h2 className={`text-5xl md:text-7xl font-bold text-[#F2F2F2] mb-6 ${!isAr && 'tracking-widest'}`}>
              {mainProject.name} <span className="text-[#A5BABB] font-light">/ 01</span>
            </h2>
            <p className="text-[#CCCBD0] text-xl max-w-xl font-light leading-relaxed">
              {mainProject.description || "Exploration of space, light, and material in a singular architectural statement."}
            </p>
          </div>

          <Link
            href="/projects"
            className={`flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-[#A5BABB] border-b border-[#4A6D6F]/50 pb-2 hover:text-[#F2F2F2] transition-all group`}
          >
            {t('projects_section.explore')}
            {isAr ? <ArrowLeftIcon className="w-4 h-4 group-hover:-translate-x-2 transition-transform" /> : <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-2 transition-transform" />}
          </Link>
        </div>

        {/* 2. Professional Mosaic Gallery - عرض الصور الكثيرة بطريقة عالمية */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 h-auto md:h-[1000px]">
          
          {/* الصورة الرئيسية الكبيرة (Hero Image) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="md:col-span-8 relative overflow-hidden border border-[#6c9395] group h-[500px] md:h-full"
          >
            <Image 
              src={allProjectImages[0]} 
              alt="Main View" 
              fill 
              className="object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80 group-hover:opacity-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#17201F]/60 to-transparent" />
            <div className="absolute bottom-8 left-8">
               <span className="text-white/50 text-xs uppercase tracking-widest">Main Perspective</span>
            </div>
          </motion.div>

          {/* الصور الجانبية (Side Stack) */}
          <div className="md:col-span-4 grid grid-cols-1 gap-4 h-full">
            
            {/* الصورة الثانية */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="relative overflow-hidden border border-[#6c9395] group h-[300px] md:h-full"
            >
              <Image src={allProjectImages[1]} alt="Detail 1" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-700" />
            </motion.div>

            {/* الصورة الثالثة مع تأثير "Overlay" */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="relative overflow-hidden border border-[#6c9395] group h-[300px] md:h-full bg-[#273F3F]"
            >
              <Image src={allProjectImages[2]} alt="Detail 2" fill className="object-cover opacity-50 group-hover:opacity-100 transition-opacity" />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <ArrowsPointingOutIcon className="w-10 h-10 text-[#A5BABB] opacity-0 group-hover:opacity-100 transition-all transform scale-50 group-hover:scale-100" />
              </div>
            </motion.div>

          </div>
        </div>

        {/* 3. Horizontal Detail Ribbon - شريط الصور المتبقية */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
          {allProjectImages.slice(3, 7).map((img, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative h-48 md:h-64 overflow-hidden border border-[#6c9395] group"
            >
              <Image src={img} alt={`Detail ${index}`} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
            </motion.div>
          ))}
        </div>

        {/* 4. Project Footer Info - بيانات إضافية تحت الصور */}
        <div className="mt-12 flex flex-wrap gap-12 border-b border-[#4A6D6F]/20 pb-12">
           <div className="flex flex-col">
              <span className="text-[#A5BABB] text-[10px] uppercase tracking-widest mb-2">Category</span>
              <span className="text-[#F2F2F2] text-lg font-bold uppercase">{mainProject.category}</span>
           </div>
           <div className="flex flex-col">
              <span className="text-[#A5BABB] text-[10px] uppercase tracking-widest mb-2">Location</span>
              <span className="text-[#F2F2F2] text-lg font-bold uppercase">Modern District, 01</span>
           </div>
           <div className="flex flex-col">
              <span className="text-[#A5BABB] text-[10px] uppercase tracking-widest mb-2">Phase</span>
              <span className="text-[#F2F2F2] text-lg font-bold uppercase">Completed</span>
           </div>
        </div>

      </div>
    </section>
  );
}