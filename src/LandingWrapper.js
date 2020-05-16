import React from "react";
import BriefIntro from "./components/BriefIntro";
import AboutMe from "./components/AboutMe";
import SkillsSection from "./components/skills/SkillsSection";
import ProjectsSection from "./components/project/ProjectsSection";
import Footer from "./components/Footer";
function LandingWrapper() {
  return (
    <div>
      <BriefIntro />
      <AboutMe />
      <SkillsSection />
      <ProjectsSection />
      <Footer />
    </div>
  );
}

export default LandingWrapper;
