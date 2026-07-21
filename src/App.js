import React, { Suspense, lazy } from "react";
import { Header } from "./components/Header";
import { Loading } from "./components/Loading";
import { Footer } from "./components/Footer";

const HeroSection = lazy(() => import("./components/HeroSection").then(m => ({ default: m.HeroSection })));
const AboutSection = lazy(() => import("./components/AboutSection").then(m => ({ default: m.AboutSection })));
const ContactSection = lazy(() => import("./components/ContactSection").then(m => ({ default: m.ContactSection })));
const ProjectsSection = lazy(() => import("./components/ProjectsSection").then(m => ({ default: m.ProjectsSection })));
const ExperienceSection = lazy(() => import("./components/ExperienceSection").then(m => ({ default: m.ExperienceSection })));
const SkillsAndCertifications = lazy(() => import("./components/SkillsAndCertifications").then(m => ({ default: m.SkillsAndCertifications })));
const TestimonialsSection = lazy(() => import("./components/TestimonialsSection").then(m => ({ default: m.TestimonialsSection })));

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <Suspense fallback={<Loading isVisible />}>
          <HeroSection />
          <AboutSection />
          <ExperienceSection />
          <SkillsAndCertifications />
          <ProjectsSection />
          <TestimonialsSection />
          <ContactSection />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}