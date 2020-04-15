import React from "react";
import BriefIntro from "./components/BriefIntro";
import AboutMe from "./components/AboutMe";
import SkillsSection from "./components/SkillsSection";
import Footer from "./components/Footer";
function LandingWrapper() {
  return (
    <div>
      <BriefIntro />
      <AboutMe />
      <SkillsSection />
      <Footer />
    </div>
  );
}

export default LandingWrapper;
