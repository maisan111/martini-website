

"use client";

import React from "react";
import { motion } from "framer-motion";
import { ProjectData } from "@/types/project";

interface ProjectOverviewProps {
  project: ProjectData;
  isAr: boolean;
  t: any;
}

export default function ProjectOverview({ project, isAr, t }: ProjectOverviewProps) {
  const details = [
    { label: t("project.client"), value: project.client },
    { label: t("project.location"), value: project.location },
    { label: t("project.area"), value: project.area },
    { label: t("project.year"), value: project.year },
  ];

  return (
    <section className="py-20 bg-[#9C8F84] relative z-20">
      <div className="container mx-auto px-6">
        <div className="">
          {/* Left: Description */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="pb-16"
          >
            <h2
              className={`text-3xl text-[#231A15] mb-8 ${isAr ? "font-Camel" : "font-Sanseriffic tracking-widest"}`}
            >
              {t("project.concept")}
            </h2>
            <p
              className={`text-[#231A15] text-lg md:text-xl leading-relaxed max-w-3xl ${
                isAr
                  ? "font-Camel border-r border-[#231A15] pr-8"
                  : "font-Sanseriffic border-l border-[#231A15] pl-8 tracking-widest"
              }`}
            >
              {project.description}
            </p>
          </motion.div>

          {/* Right: Metadata Grid */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className=""
          >
            <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
              {details.map((detail, idx) => (
                <div key={idx} className="lg:mb-10">
                  <span
                    className={`block text-[#231A15] text-[12px] uppercase mb-2 ${
                      isAr ? "font-Camel" : "font-Sanseriffic tracking-widest"
                    }`}
                  >
                    {detail.label}
                  </span>
                  <span
                    className={`block text-[#231A15] text-lg ${
                      isAr ? "font-Camel" : "font-Sanseriffic tracking-widest"
                    }`}
                  >
                    {detail.value}
                  </span>
                  <div className="h-[1px] w-full bg-[#5E5248]/40 mt-4" />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}