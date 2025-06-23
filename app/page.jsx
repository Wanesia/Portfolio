import React from "react";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
const Home = () => {
  return (
    <>
      <HeroSection />
      <div className="container">
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </div>
    </>
  );
};

export default Home;
