import React, { Suspense, lazy } from "react";
import { Header } from "./components/Header";
import { Loading } from "./components/Loading";

const HeroSection = lazy(() => import("./components/HeroSection").then(m => ({ default: m.HeroSection })));
const AboutSection = lazy(() => import("./components/AboutSection").then(m => ({ default: m.AboutSection })));
const ContactSection = lazy(() => import("./components/ContactSection").then(m => ({ default: m.ContactSection })));
const ProjectsSection = lazy(() => import("./components/ProjectsSection").then(m => ({ default: m.ProjectsSection })));
const ExperienceSection = lazy(() => import("./components/ExperienceSection").then(m => ({ default: m.ExperienceSection })));
const SkillsAndCertifications = lazy(() => import("./components/SkillsAndCertifications").then(m => ({ default: m.SkillsAndCertifications })));

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
          <ContactSection />
        </Suspense>
      </main>
      <footer className="py-4 bg-gray-100 dark:bg-gray-800 text-center text-gray-600 dark:text-gray-400">
        <div className="container mx-auto px-4">
          <p>© {new Date().getFullYear()} Ajay Pal. All rights reserved.</p>
          <p className="mt-2 text-sm">Built with React and Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
}