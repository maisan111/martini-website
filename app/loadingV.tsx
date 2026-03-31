


// "use client";

// import Image from "next/image";
// import { useEffect, useState } from "react";
// import {
//   motion,
//   useMotionValue,
//   useSpring,
//   useTransform,
//   animate,
// } from "framer-motion";

// export default function Loading({ onComplete }: { onComplete: () => void }) {
//   const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
//   const [isExiting, setIsExiting] = useState(false);

//   const progressValue = useMotionValue(0);
//   const smoothProgress = useSpring(progressValue, {
//     damping: 28,
//     stiffness: 40,
//     restDelta: 0.001,
//   });

//   const scanY = useTransform(smoothProgress, [0, 100], ["-2%", "102%"]);

//   useEffect(() => {
//     // تتبع حركة الماوس
//     const handleMouseMove = (e: MouseEvent) => {
//       setMousePos({
//         x: e.clientX / window.innerWidth,
//         y: e.clientY / window.innerHeight,
//       });
//     };
//     window.addEventListener("mousemove", handleMouseMove);

//     // بدء أنيميشن التحميل
//     const controls = animate(progressValue, 100, {
//       duration: 3.8,
//       ease: [0.16, 1, 0.3, 1],
//       onComplete: () => {
//         const checkFinish = setInterval(() => {
//           if (Math.round(smoothProgress.get()) >= 100) {
//             clearInterval(checkFinish);
//             setIsExiting(true);
            
//             // استدعاء دالة الإتمام بعد انتهاء أنيميشن الخروج
//             setTimeout(() => {
//               onComplete();
//             }, 900);
//           }
//         }, 50);
//       },
//     });

//     return () => {
//       controls.stop();
//       window.removeEventListener("mousemove", handleMouseMove);
//     };
//   }, [progressValue, smoothProgress, onComplete]);

//   const panels = [
//     { src: "/images/t-8.webp", delay: 0, origin: "bottom" },
//     { src: "/images/t-5.webp", delay: 0.18, origin: "top" },
//     { src: "/images/t-1.webp", delay: 0.36, origin: "bottom" },
//     { src: "/images/t-4.webp", delay: 0.54, origin: "top" },
//   ]; 

//   return (
//     <motion.div
//       initial={{ opacity: 1 }}
//       animate={isExiting ? { opacity: 0 } : { opacity: 1 }}
//       transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
//       className="fixed inset-0 z-[9999] overflow-hidden font-Sanseriffic bg-[#0C0906]"
//     >
//       {/* الصور الخلفية المتحركة */}
//       <div className="absolute inset-0 z-0 grid grid-cols-2 md:grid-cols-4">
//         {panels.map((panel, i) => (
//           <motion.div
//             key={i}
//             className="relative overflow-hidden"
//             initial={{ scaleY: 0, transformOrigin: panel.origin }}
//             animate={{ scaleY: 1 }}
//             transition={{ duration: 1.4, delay: panel.delay, ease: [0.76, 0, 0.24, 1] }}
//           >
//             <motion.div
//               className="absolute inset-0"
//               style={{
//                 x: (mousePos.x - 0.5) * (14 + i * 5),
//                 y: (mousePos.y - 0.5) * (9 + i * 3),
//                 scale: 1.1,
//               }}
//               transition={{ type: "spring", damping: 40, stiffness: 60 }}
//             >
//               <Image src={panel.src} alt={`BG ${i}`} fill className="object-cover" priority />
//             </motion.div>
//             {i < panels.length - 1 && (
//               <motion.div
//                 className="absolute top-0 right-0 bottom-0 z-[2] w-px"
//                 style={{ background: "linear-gradient(180deg, transparent 0%, #7A5A1E 25%, #D4A84B 50%, #7A5A1E 75%, transparent 100%)" }}
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 0.45 }}
//                 transition={{ delay: 1.6, duration: 0.8 }}
//               />
//             )}
//           </motion.div>
//         ))}
//       </div>

//       {/* طبقة التغبيش */}
//       <motion.div
//         className="absolute inset-0 z-[5] pointer-events-none bg-black/75 backdrop-blur-lg"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 1.95, duration: 1.0, ease: [0.23, 1, 0.32, 1] }}
//       />

//       {/* خط السكانر */}
//       <motion.div
//         className="absolute left-0 right-0 z-[3] pointer-events-none"
//         style={{ top: scanY, height: "1px", background: "rgba(212,168,75,0.35)", boxShadow: "0 0 20px 4px rgba(212,168,75,0.15)" }}
//       />

//       {/* الشعار والنص */}
//       <div className="absolute inset-0 z-[20] flex flex-col items-center justify-center text-center px-6">
//         <motion.div
//           initial={{ opacity: 0, y: 28 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1.0, delay: 2.4, ease: [0.23, 1, 0.32, 1] }}
//         >
//           <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px]">
//             <Image src="/images/Logo-2.png" alt="Logo" fill className="object-contain grayscale contrast-150" priority />
//           </div>
//         </motion.div>
//         <motion.p
//           className="text-white/65 text-[13px] md:text-[25px] tracking-[0.3em] uppercase font-bold"
//           initial={{ opacity: 0, y: 14 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 2.9, ease: [0.23, 1, 0.32, 1] }}
//         >
//           Architectural Excellence and Real Estate Development
//         </motion.p>
//       </div>
//     </motion.div>
//   );
// }



"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform, animate } from "framer-motion";

export default function Loading({ onComplete }: { onComplete: () => void }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isExiting, setIsExiting] = useState(false);

  const progressValue = useMotionValue(0);
  const smoothProgress = useSpring(progressValue, {
    damping: 30,
    stiffness: 50,
    restDelta: 0.001,
  });

  const scanY = useTransform(smoothProgress, [0, 100], ["-3%", "103%"]);

  useEffect(() => {
    // تتبع حركة الماوس للـ parallax
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);

    // بدء أنيميشن التحميل
    const controls = animate(progressValue, 100, {
      duration: 3.5,
      ease: [0.16, 1, 0.3, 1],
      onComplete: () => {
        const checkFinish = setInterval(() => {
          if (Math.round(smoothProgress.get()) >= 100) {
            clearInterval(checkFinish);
            setIsExiting(true);
            setTimeout(() => onComplete(), 900);
          }
        }, 50);
      },
    });

    return () => {
      controls.stop();
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [progressValue, smoothProgress, onComplete]);

  const panels = [
    { src: "/images/t-8.webp", delay: 0, origin: "bottom" },
    { src: "/images/t-5.webp", delay: 0.2, origin: "top" },
    { src: "/images/t-1.webp", delay: 0.4, origin: "bottom" },
    { src: "/images/t-4.webp", delay: 0.6, origin: "top" },
  ];

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={isExiting ? { opacity: 0 } : { opacity: 1 }}
      transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-[9999] overflow-hidden font-Sanseriffic bg-[#0C0906]"
    >
      {/* صور خلفية مع parallax أملس */}
      <div className="absolute inset-0 z-0 grid grid-cols-2 md:grid-cols-4">
        {panels.map((panel, i) => (
          <motion.div
            key={i}
            className="relative overflow-hidden"
            initial={{ scaleY: 0, transformOrigin: panel.origin }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 1.5, delay: panel.delay, ease: [0.76, 0, 0.24, 1] }}
          >
            <motion.div
              className="absolute inset-0"
              style={{
                x: (mousePos.x - 0.5) * (12 + i * 4),
                y: (mousePos.y - 0.5) * (8 + i * 2),
                scale: 1.05,
              }}
              transition={{ type: "spring", damping: 40, stiffness: 55 }}
            >
              <Image src={panel.src} alt={`BG ${i}`} fill className="object-cover" priority />
            </motion.div>
            {i < panels.length - 1 && (
              <motion.div
                className="absolute top-0 right-0 bottom-0 z-[2] w-px"
                style={{ background: "linear-gradient(180deg, transparent 0%, #7A5A1E 25%, #D4A84B 50%, #7A5A1E 75%, transparent 100%)" }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.4 }}
                transition={{ delay: 1.6, duration: 0.8 }}
              />
            )}
          </motion.div>
        ))}
      </div>

      {/* overlay شبه احترافي */}
      <motion.div
        className="absolute inset-0 z-[5] pointer-events-none bg-black/70 backdrop-blur-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.95, duration: 1.0, ease: [0.23, 1, 0.32, 1] }}
      />

      {/* خط سكانر خفيف glow */}
      <motion.div
        className="absolute left-0 right-0 z-[3] pointer-events-none"
        style={{
          top: scanY,
          height: "2px",
          background: "rgba(212,168,75,0.25)",
          boxShadow: "0 0 30px 6px rgba(212,168,75,0.18)",
        }}
      />

      {/* الشعار والنص */}
      <div className="absolute inset-0 z-[20] flex flex-col items-center justify-center text-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.85, rotate: -2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.0, delay: 2.4, ease: [0.23, 1, 0.32, 1] }}
        >
          <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px]">
            <Image
              src="/images/Logo-2.png"
              alt="Logo"
              fill
              className="object-contain grayscale contrast-125"
              priority
            />
          </div>
        </motion.div>
        <motion.p
          className="text-white/70 text-[15px] md:text-[24px] tracking-[0.35em] uppercase font-bold mt-4"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.9, ease: [0.23, 1, 0.32, 1] }}
        >
          Architectural Excellence & Real Estate Innovation
        </motion.p>
      </div>
    </motion.div>
  );
}