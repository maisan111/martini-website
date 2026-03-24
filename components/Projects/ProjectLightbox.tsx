


// "use client";

// import React, { useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Image from "next/image";
// import { X, ChevronLeft, ChevronRight } from "lucide-react";

// interface LightboxProps {
//   images: string[];
//   currentIndex: number;
//   isOpen: boolean;
//   onClose: () => void;
//   onNext: () => void;
//   onPrev: () => void;
//   isAr: boolean;
// }

// export default function ProjectLightbox({
//   images,
//   currentIndex,
//   isOpen,
//   onClose,
//   onNext,
//   onPrev,
//   isAr,
// }: LightboxProps) {
//   useEffect(() => {
//     const handleKeyDown = (e: KeyboardEvent) => {
//       if (!isOpen) return;
//       if (e.key === "Escape") onClose();
//       // تبديل الاتجاهات في الكيبورد للعربي
//       if (e.key === "ArrowRight") isAr ? onPrev() : onNext();
//       if (e.key === "ArrowLeft") isAr ? onNext() : onPrev();
//     };
//     window.addEventListener("keydown", handleKeyDown);
//     return () => window.removeEventListener("keydown", handleKeyDown);
//   }, [isOpen, onNext, onPrev, onClose, isAr]);

//   useEffect(() => {
//     if (isOpen) document.body.style.overflow = "hidden";
//     else document.body.style.overflow = "unset";
//     return () => {
//       document.body.style.overflow = "unset";
//     };
//   }, [isOpen]);

//   return (
//     <AnimatePresence>
//       {isOpen && (
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           className="fixed inset-0 z-[100] flex items-center justify-center bg-[#17201F]/95 backdrop-blur-md"
//         >
//           <button
//             onClick={onClose}
//             className="absolute top-8 right-8 z-50 text-white/50 hover:text-white transition-colors"
//           >
//             <X className="w-10 h-10" />
//           </button>

//           {/* زر السابق */}
//           <button
//             onClick={onPrev}
//             className="absolute left-8 z-50 text-white/50 hover:text-white p-4"
//           >
//             <ChevronLeft className="w-12 h-12" />
//           </button>

//           {/* زر التالي */}
//           <button
//             onClick={onNext}
//             className="absolute right-8 z-50 text-white/50 hover:text-white p-4"
//           >
//             <ChevronRight className="w-12 h-12" />
//           </button>

//           <motion.div
//             key={currentIndex}
//             initial={{ opacity: 0, scale: 0.95 }}
//             animate={{ opacity: 1, scale: 1 }}
//             exit={{ opacity: 0, scale: 0.95 }}
//             transition={{ duration: 0.4 }}
//             className="relative w-[85vw] h-[85vh]"
//           >
//             <Image
//               src={images[currentIndex]}
//               alt="Gallery"
//               fill
//               className="object-contain"
//               priority
//             />
//           </motion.div>

//           <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#A5BABB] tracking-widest font-Sanseriffic text-sm">
//             {currentIndex + 1} / {images.length}
//           </div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// }



"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface LightboxProps {
  images: string[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  isAr: boolean;
}

export default function ProjectLightbox({
  images,
  currentIndex,
  isOpen,
  onClose,
  onNext,
  onPrev,
  isAr,
}: LightboxProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") isAr ? onPrev() : onNext();
      if (e.key === "ArrowLeft") isAr ? onNext() : onPrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onNext, onPrev, onClose, isAr]);

  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#231A15]/95 backdrop-blur-md"
        >
          <button
            onClick={onClose}
            className="absolute top-8 right-8 z-50 text-[#DDD3CB]/60 hover:text-[#F7F4F1] transition-colors"
          >
            <X className="w-10 h-10" />
          </button>

          {/* زر السابق */}
          <button
            onClick={onPrev}
            className="absolute left-8 z-50 text-[#DDD3CB]/60 hover:text-[#F7F4F1] p-4"
          >
            <ChevronLeft className="w-12 h-12" />
          </button>

          {/* زر التالي */}
          <button
            onClick={onNext}
            className="absolute right-8 z-50 text-[#DDD3CB]/60 hover:text-[#F7F4F1] p-4"
          >
            <ChevronRight className="w-12 h-12" />
          </button>

          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4 }}
            className="relative w-[85vw] h-[85vh]"
          >
            <Image
              src={images[currentIndex]}
              alt="Gallery"
              fill
              className="object-contain"
              priority
            />
          </motion.div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#AF937A] tracking-widest font-Sanseriffic text-sm">
            {currentIndex + 1} / {images.length}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}