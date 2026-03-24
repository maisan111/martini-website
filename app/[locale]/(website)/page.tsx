
"use client";
import ContactSection1 from "@/components/ContactSection1";
import AboutSection from "@/components/AboutSection";
import FeaturedProjects from "@/components/Projects/FeaturedProjects";
import ServicesSection from "@/components/ServicesSection";
import LuxuryHero from "@/components/Hero";
export default function HomePage() {
  return (
    <div className="font-sans">
     
     


    

<LuxuryHero />


      <section>
        <AboutSection />
      </section>

      <ServicesSection />

      {/* <FeaturedProjects /> */}
      <section>
        <ContactSection1 />
      </section>


 
    </div>
  );
}