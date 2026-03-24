

"use client";

import React, { useEffect, useState, use } from "react"; 
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import ProjectHero from "../../../../../components/Projects/ProjectHero";
import ProjectOverview from "../../../../../components/Projects/ProjectOverview";
import ProjectGallery from "../../../../../components/Projects/ProjectGallery";
import { ProjectData } from "../../../../../types/project";

export default function ProjectDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = use(params); 
  const id = resolvedParams.id;

  const { t, i18n } = useTranslation("common");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isAr = i18n.language === "ar";

  const rawProjects = t("projects", { returnObjects: true });
  const projects = Array.isArray(rawProjects) ? (rawProjects as ProjectData[]) : [];
  
  const project = projects.find((p) => String(p.id) === String(id));

  if (!mounted) {
    return <div className="h-screen bg-[#231A15]" />;
  }

  if (!project) {
    return (
      <div className="h-screen flex flex-col items-center justify-center bg-[#231A15] text-[#F7F4F1] font-Sanseriffic">
        <h1 className="text-4xl font-light mb-4">Project Not Found</h1>
        <p className="text-[#DDD3CB]/60">ID: {id}</p>
      </div>
    );
  }

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      dir={isAr ? "rtl" : "ltr"}
      className={`bg-[#231A15] text-[#F7F4F1] overflow-hidden selection:bg-[#AF937A] selection:text-[#231A15] ${
        isAr ? "font-Camel" : "font-Sanseriffic"
      }`}
    >
      <ProjectHero
        title={project.title}
        category={t(`categories.${project.category}`)}
        location={project.location}
        videoSrc={project.heroVideo}
        isAr={isAr}
        t={t}
      />

      <ProjectOverview project={project} isAr={isAr} t={t} />
      <ProjectGallery images={project.images} isAr={isAr} />
    </motion.main>
  );
}