

"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import LoadingV from "@/app/loadingV";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [showLoader, setShowLoader] = useState(true);

  return (
    <div className="relative min-h-screen">
      {/* 1. المحتوى يظهر فوراً ويتم تحميله في الخلفية تحت اللودينج */}
      <main>
        {children}
      </main>

      {/* 2. اللودينج كطبقة فوقية (Fixed Overlay) */}
      <AnimatePresence>
        {showLoader && (
          <motion.div
            key="global-loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-[10000] pointer-events-auto"
          >
            <LoadingV onComplete={() => setShowLoader(false)} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}