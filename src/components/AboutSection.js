import React from "react";
import { FloatingParticles } from "./common";
import { aboutData, profileData } from "../constants/data";
import { useMousePosition, useAnimatedCounter } from "../hooks";
import { Download, User, Mail, MapPin, Phone, Award, Calendar, Code, Coffee, Star, Sparkles, ArrowRight, ExternalLink } from "lucide-react";

// Enhanced Section Title Component
const SectionTitle = ({ title }) => (
  <div className="text-center mb-16">
    <div className="inline-flex items-center justify-center p-2 bg-indigo-100 rounded-full mb-4">
      <User className="w-6 h-6 text-indigo-600" />
    </div>
    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-4">
      {title}
    </h2>
    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
      Get to know more about my background, skills, and what drives my passion for development
    </p>
    <div className="mt-6 w-24 h-1 bg-gradient-to-r from-indigo-600 to-cyan-500 mx-auto rounded-full"></div>
  </div>
);

// Counter Animation Component
const AnimatedCounter = ({ end, label }) => {
  const { count, elementRef } = useAnimatedCounter(end);

  return (
    <div className="stat-counter" ref={elementRef}>
      <div className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent mb-2">
        {count}
      </div>
      <div className="text-sm text-gray-600 uppercase tracking-wide font-medium">
        {label}
      </div>
    </div>
  );
};

export const AboutSection = () => {
  const mousePosition = useMousePosition('about');

  const iconMap = {
    Name: <User className="w-5 h-5 text-indigo-500" />,
    Email: <Mail className="w-5 h-5 text-indigo-500" />,
    Location: <MapPin className="w-5 h-5 text-indigo-500" />,
    Phone: <Phone className="w-5 h-5 text-indigo-500" />,
  };

  return (
    <section
      id="about"
      className="relative py-20 sm:py-32 overflow-hidden"
      style={{
        background: `
                radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(99, 102, 241, 0.08) 0%, transparent 50%),
                linear-gradient(135deg, #f8fafc 0%, #f1f5f9 25%, #e2e8f0 50%, #f1f5f9 75%, #f8fafc 100%)
              `
      }}
    >
      {/* Enhanced animated background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Primary gradient blob */}
        <div
          className="absolute top-20 left-10 w-96 h-96 rounded-full opacity-20 blur-3xl animate-pulse"
          style={{
            background: 'linear-gradient(45deg, #6366f1, #06b6d4, #8b5cf6)',
            animationDuration: '12s'
          }}
        />

        {/* Secondary gradient blob */}
        <div
          className="absolute bottom-20 right-10 w-80 h-80 rounded-full opacity-15 blur-2xl animate-pulse"
          style={{
            background: 'linear-gradient(45deg, #8b5cf6, #ec4899, #06b6d4)',
            animationDuration: '16s',
            animationDelay: '2s'
          }}
        />

        {/* Accent shapes */}
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-gradient-to-br from-indigo-400 to-cyan-400 rounded-full opacity-10 blur-xl animate-pulse" style={{ animationDuration: '20s' }} />
        <div className="absolute top-1/4 right-1/4 w-24 h-24 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-15 blur-lg animate-pulse" style={{ animationDuration: '14s' }} />
      </div>

      <FloatingParticles />

      <div className="container mx-auto px-6 sm:px-8 relative z-10">
        <SectionTitle title="About Me" />

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-12 lg:gap-16 items-start">

          {/* Enhanced Personal Info Card */}
          <div className="xl:col-span-1 space-y-8">
            <div className="group relative bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-white/50 hover:border-indigo-200 transition-all duration-500 hover:shadow-indigo-500/20 transform hover:scale-[1.02]">
              {/* Card header */}
              <div className="flex items-center space-x-3 mb-8">
                <div className="p-3 bg-gradient-to-br from-indigo-500 to-cyan-500 rounded-xl text-white">
                  <User className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Personal Info
                </h3>
              </div>

              <div className="space-y-6">
                {aboutData.personalInfo.map((item, idx) => (
                  <div
                    key={idx}
                    className="group/item flex items-center justify-between p-4 rounded-2xl  bg-gray-50/80 hover:bg-white hover:shadow-md  transition-all duration-300 border border-transparent  hover:border-indigo-200 relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-50 to-cyan-50 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

                    <div className="flex items-center space-x-4 relative z-10">
                      <div className="p-2 bg-white rounded-lg shadow-sm group-hover/item:shadow-md group-hover/item:scale-110 group-hover/item:bg-gradient-to-br group-hover/item:from-indigo-100 group-hover/item:to-cyan-100 transition-all duration-300">
                        {iconMap[item.label]}
                      </div>

                      <span className="font-semibold text-gray-700">
                        {item.label}
                      </span>
                    </div>

                    <span
                      className="pl-2 text-gray-600 font-medium text-right truncate hover:text-indigo-600 cursor-pointer transition-colors relative z-10"
                      title="Click to copy"
                      onClick={() => navigator.clipboard.writeText(item.value)}
                    >
                      {item.value}
                    </span>
                  </div>
                ))}

              </div>

              {/* Enhanced Download CV Button */}
              <a
                href={profileData.resumeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn mt-8 w-full inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-indigo-600 to-cyan-500 text-white font-bold rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-indigo-500/25 transition-all duration-300 transform hover:scale-105 relative overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-cyan-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></span>
                <span className="relative flex items-center">
                  <Download className="mr-3 w-5 h-5 group-hover/btn:rotate-12 transition-transform duration-300" />
                  Download CV
                  <ExternalLink className="ml-3 w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </span>
              </a>

              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-indigo-400 to-cyan-400 rounded-full opacity-10 blur-xl group-hover:opacity-20 transition-opacity duration-500"></div>
            </div>

            {/* Achievement badges */}
            <div className="grid grid-cols-2 gap-4">
              {aboutData.achievements.map((achievement, index) => (
                <div key={index} className="bg-white/80 backdrop-blur-md rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50 hover:border-green-200 text-center">
                  <Award className="w-8 h-8 text-green-500 mx-auto mb-2" />
                  <div className="font-bold text-green-600">{achievement.title}</div>
                  <div className="text-sm text-gray-600">{achievement.subtitle}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced Bio & Stats */}
          <div className="xl:col-span-2 space-y-12">
            {/* Enhanced Bio Section */}
            <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl p-8 lg:p-10 border border-white/50 hover:border-indigo-200 transition-all duration-500">
              <div className="flex items-center space-x-3 mb-8">
                <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl text-white">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">My Story</h3>
              </div>

              <div className="prose prose-lg text-gray-600 leading-relaxed space-y-6">
                <p>
                  {aboutData.bio.story}
                </p>

                <p>
                  {aboutData.bio.journey}
                </p>

                {/* Tech stack highlight */}
                <div className="mt-8">
                  <h4 className="font-bold text-gray-800 mb-4 flex items-center">
                    <Code className="w-5 h-5 mr-2 text-indigo-500" />
                    Technologies I Love
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {aboutData.bio.lovedTechs.map((tech, index) => (
                      <span
                        key={tech}
                        className="px-4 py-2 bg-gradient-to-r from-indigo-100 to-cyan-100 text-indigo-700 rounded-full text-sm font-semibold border border-indigo-200 hover:from-indigo-200 hover:to-cyan-200 transition-colors cursor-default"
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {aboutData.stats.map((stat, index) => (
                <div
                  key={index}
                  className="group relative bg-white/90 backdrop-blur-xl rounded-3xl shadow-xl p-6 lg:p-8 text-center hover:shadow-2xl hover:shadow-indigo-500/20 transition-all duration-500 transform hover:scale-105 hover:-rotate-1 border border-white/50 hover:border-indigo-200"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Background decoration */}
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-cyan-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Star decoration */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:rotate-12">
                    <Star className="w-4 h-4 text-indigo-400" />
                  </div>

                  <div className="relative">
                    <AnimatedCounter end={stat.number} label={stat.label} />

                    {/* Progress bar */}
                    <div className="mt-4 w-full bg-gray-200 rounded-full h-1 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full transition-all duration-2000 ease-out"
                        style={{
                          width: `${Math.min(100, parseInt(stat.number.replace(/\D/g, '')) || 75)}%`,
                          animationDelay: `${index * 200}ms`
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
              @keyframes float {
                0%, 100% { transform: translateY(0px) rotate(0deg); }
                25% { transform: translateY(-10px) rotate(90deg); }
                50% { transform: translateY(-20px) rotate(180deg); }
                75% { transform: translateY(-10px) rotate(270deg); }
              }
              .animate-float {
                animation: float 8s ease-in-out infinite;
              }
              
              @keyframes slideInFromLeft {
                0% { transform: translateX(-100px); opacity: 0; }
                100% { transform: translateX(0); opacity: 1; }
              }
              
              .prose p {
                margin-bottom: 1.5rem;
                font-size: 1.1rem;
                line-height: 1.8;
              }
            `}</style>
    </section>
  );
};