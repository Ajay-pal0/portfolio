import React, { useState } from "react";
import { FloatingParticles } from "./common";
import { personalData, achievementsData } from "../data";
import { useMousePosition, useAnimatedCounter } from "../hooks";
import { Download, User, Mail, MapPin, Phone, Award, Sparkles, Zap, Cpu, BarChart, Layers, Eye } from "lucide-react";
import { ResumeModal } from "./ResumeModal";

// Section Title Component
const SectionTitle = ({ title, subtitle }) => (
  <div className="text-center mb-16">
    <div className="inline-flex items-center justify-center p-2.5 bg-indigo-50 dark:bg-indigo-950/40 rounded-full mb-4 border border-indigo-100 dark:border-indigo-800/20">
      <User className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
    </div>
    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">
      {title}
    </h2>
    <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-semibold">
      {subtitle}
    </p>
    <div className="mt-5 w-20 h-1.5 bg-gradient-to-r from-indigo-600 to-cyan-500 rounded-full mx-auto"></div>
  </div>
);

// Counter Animation Component
const AnimatedCounter = ({ end, label }) => {
  const { count, elementRef } = useAnimatedCounter(end);

  return (
    <div className="text-center" ref={elementRef}>
      <div className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500 dark:from-indigo-500 dark:to-cyan-400 bg-clip-text text-transparent mb-1">
        {count}
      </div>
      <div className="text-xs font-bold text-slate-500 dark:text-slate-450 uppercase tracking-wide">
        {label}
      </div>
    </div>
  );
};

export const AboutSection = () => {
  const mousePosition = useMousePosition('about');
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const iconMap = {
    Name: <User className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />,
    Email: <Mail className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />,
    Location: <MapPin className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />,
    Phone: <Phone className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
  };

  const achievementIconMap = {
    Zap: <Zap className="w-6 h-6 text-amber-500" />,
    Cpu: <Cpu className="w-6 h-6 text-indigo-500" />,
    BarChart: <BarChart className="w-6 h-6 text-emerald-500" />,
    Layers: <Layers className="w-6 h-6 text-purple-500" />
  };

  const personalInfoItems = [
    { label: "Name", value: personalData.name },
    { label: "Email", value: personalData.email },
    { label: "Location", value: personalData.location },
    { label: "Phone", value: personalData.phone }
  ];

  // We can fetch frontend/backend skills list to highlight
  const favoriteSkills = ["Python", "Django", "FastAPI", "React.js", "Next.js", "Tailwind CSS", "Tauri", "PostgreSQL", "Docker"];

  return (
    <section
      id="about"
      className="relative py-20 sm:py-28 overflow-hidden bg-slate-50 dark:bg-[#080b11] transition-colors"
      style={{
        background: `
          radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(99, 102, 241, 0.04) 0%, transparent 60%)
        `
      }}
    >
      <FloatingParticles />

      <div className="container mx-auto px-6 sm:px-8 relative z-10">
        <SectionTitle
          title="About Me"
          subtitle="A briefing on my background, professional metrics, and what fuels my passion for full-stack engineering."
        />

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-10 lg:gap-12 items-start">

          {/* Left Column: Personal info & resume links */}
          <div className="xl:col-span-4 space-y-6">
            <div className="glass-panel p-8 rounded-3xl relative overflow-hidden group">
              <div className="flex items-center space-x-3 mb-6 relative z-10">
                <div className="p-2.5 bg-gradient-to-br from-indigo-500 to-cyan-500 rounded-xl text-white">
                  <User className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 dark:text-white">
                  Bio Sheet
                </h3>
              </div>

              <div className="space-y-4 relative z-10">
                {personalInfoItems.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col p-3 rounded-2xl bg-slate-100/50 dark:bg-slate-900/40 border border-slate-200/20 dark:border-slate-800/40 hover:bg-white dark:hover:bg-slate-850 hover:shadow-sm transition-all duration-300"
                  >
                    <div className="flex items-center space-x-2 mb-1">
                      {iconMap[item.label]}
                      <span className="text-xs font-bold text-slate-500 dark:text-slate-400">
                        {item.label}
                      </span>
                    </div>
                    <span
                      className="text-sm font-semibold text-slate-700 dark:text-slate-200 truncate select-all cursor-pointer"
                      title="Click to select text"
                    >
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Download Resume Button */}
              <div className="mt-8 flex flex-col gap-3 relative z-10">
                <button
                  onClick={() => setIsResumeOpen(true)}
                  className="group/btn w-full inline-flex items-center justify-center px-6 py-3.5 bg-gradient-to-r from-indigo-600 to-cyan-500 text-white font-bold rounded-2xl shadow-md hover:shadow-lg hover:shadow-indigo-500/15 hover:scale-[1.02] transition-all duration-300 cursor-pointer border-0"
                >
                  <Eye className="mr-2 w-5 h-5 group-hover/btn:scale-105 transition-transform" />
                  View Interactive CV
                </button>
                <div className="flex gap-2.5">
                  <a
                    href={process.env.PUBLIC_URL + personalData.resumePdf}
                    download
                    className="group/btn flex-1 inline-flex items-center justify-center px-3 py-2.5 bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-205 text-xs font-bold rounded-xl border border-slate-200/50 dark:border-slate-800/80 hover:bg-slate-50 dark:hover:bg-slate-800 hover:scale-[1.02] transition-all duration-300"
                  >
                    <Download className="mr-1.5 w-3.5 h-3.5" />
                    PDF
                  </a>
                  <a
                    href={process.env.PUBLIC_URL + personalData.resumeDocx}
                    download
                    className="group/btn flex-1 inline-flex items-center justify-center px-3 py-2.5 bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-205 text-xs font-bold rounded-xl border border-slate-200/50 dark:border-slate-800/80 hover:bg-slate-50 dark:hover:bg-slate-800 hover:scale-[1.02] transition-all duration-300"
                  >
                    <Download className="mr-1.5 w-3.5 h-3.5" />
                    Word
                  </a>
                </div>
              </div>
            </div>

            {/* Achievements Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-1 gap-4">
              {achievementsData.slice(0, 2).map((achievement, index) => (
                <div key={index} className="glass-panel p-5 rounded-2xl hover:scale-[1.01] transition-transform">
                  <div className="flex items-center space-x-3 mb-2.5">
                    <div className="p-2 bg-slate-100 dark:bg-slate-900 rounded-xl">
                      {achievementIconMap[achievement.icon] || <Award className="w-6 h-6 text-indigo-500" />}
                    </div>
                    <div className="font-bold text-slate-800 dark:text-white text-sm">{achievement.title}</div>
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 font-medium leading-relaxed">{achievement.description}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Bio story & technical highlights */}
          <div className="xl:col-span-8 space-y-6">
            <div className="glass-panel p-8 lg:p-10 rounded-3xl">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2.5 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl text-white">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 dark:text-white">My Story</h3>
              </div>

              <div className="text-base sm:text-lg text-slate-650 dark:text-slate-300 leading-relaxed space-y-5">
                <p>{personalData.bio.story}</p>
                <p>{personalData.bio.journey}</p>
                <p>{personalData.bio.interests}</p>

                {/* Tech stack highlight */}
                <div className="pt-6 border-t border-slate-200/50 dark:border-slate-800/40">
                  <h4 className="font-bold text-slate-800 dark:text-slate-200 mb-4 flex items-center text-sm uppercase tracking-wider">
                    Core Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {favoriteSkills.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-2 bg-slate-100 dark:bg-slate-900 border border-slate-200/30 dark:border-slate-800/50 text-indigo-700 dark:text-indigo-400 rounded-xl text-xs font-bold"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Remaining Achievements + Dynamic Stats Counters */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {achievementsData.slice(2).map((achievement, index) => (
                <div key={index} className="glass-panel p-5 rounded-2xl hover:scale-[1.01] transition-transform">
                  <div className="flex items-center space-x-3 mb-2.5">
                    <div className="p-2 bg-slate-100 dark:bg-slate-900 rounded-xl">
                      {achievementIconMap[achievement.icon] || <Award className="w-6 h-6 text-indigo-500" />}
                    </div>
                    <div className="font-bold text-slate-800 dark:text-white text-sm">{achievement.title}</div>
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 font-medium leading-relaxed">{achievement.description}</div>
                </div>
              ))}
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4">
              {personalData.stats.map((stat, idx) => (
                <div key={idx} className="glass-panel p-5 rounded-2xl">
                  <AnimatedCounter end={stat.value} label={stat.label} />
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </section>
  );
};