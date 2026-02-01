import BackToTopButton from "@/components/common/backto-top-button";
import ScrollProgress from "@/components/common/scroll-progress";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import AboutSection from "@/components/sections/about-section";
import ContactSection from "@/components/sections/contact-section";
import EducationSection from "@/components/sections/education-section";
import HeroSection from "@/components/sections/hero-section";
import ProjectSection from "@/components/sections/project-section";
import SkillsSection from "@/components/sections/skills-section";

const Home = () => {
  return (
    <>
      <ScrollProgress />
      <Header />
      <HeroSection />
      <AboutSection />
      <EducationSection />
      <SkillsSection />
      <ProjectSection />
      {/* <AwardSection /> */}
      {/* <ExperienceSection /> */}
      <ContactSection />
      <Footer />
      <BackToTopButton />
    </>
  );
};

export default Home;
