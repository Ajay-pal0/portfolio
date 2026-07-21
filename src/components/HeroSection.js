import React, { useState } from "react";
import { FloatingParticles } from "./common";
import { personalData } from "../data";
import { useTypingAnimation, useMousePosition, useScrollToSection } from "../hooks";
import { Code, Linkedin, Github, ChevronDown, Sparkles, ArrowRight, Eye } from "lucide-react";
import { ResumeModal } from "./ResumeModal";

// Typing animation component
const TypedText = () => {
    const { text } = useTypingAnimation();
    return (
        <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500 dark:from-indigo-400 dark:via-purple-400 dark:to-cyan-400 bg-clip-text text-transparent">
            {text}
            <span className="animate-pulse">|</span>
        </span>
    );
};

export const HeroSection = () => {
    const mousePosition = useMousePosition("home");
    const { scrollToSection } = useScrollToSection();
    const [isResumeOpen, setIsResumeOpen] = useState(false);

    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center overflow-hidden pt-16"
            style={{
                background: `
                radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(99, 102, 241, 0.08) 0%, transparent 60%)
              `
            }}
        >
            {/* Animated background blobs */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -top-32 -right-32 w-[400px] h-[400px] rounded-full opacity-20 dark:opacity-30 blur-3xl animate-pulse bg-gradient-to-tr from-indigo-500 via-cyan-400 to-purple-500" style={{ animationDuration: '10s' }} />
                <div className="absolute bottom-0 -left-32 w-[350px] h-[350px] rounded-full opacity-15 dark:opacity-20 blur-3xl animate-pulse bg-gradient-to-tr from-purple-500 via-pink-400 to-cyan-500" style={{ animationDuration: '14s', animationDelay: '2s' }} />
            </div>

            <FloatingParticles />

            {/* Main content */}
            <div className="container mx-auto px-6 lg:px-8 relative z-10 py-12 lg:py-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

                    {/* Left Section */}
                    <div className="space-y-8 order-2 lg:order-1 lg:col-span-7 text-left">
                        {/* Badge */}
                        <div className="inline-flex items-center px-4 py-2 bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200/50 dark:border-indigo-800/40 rounded-full text-xs font-bold text-indigo-600 dark:text-indigo-400 backdrop-blur-sm">
                            <Sparkles className="w-4 h-4 mr-2" />
                            {personalData.badgeText}
                        </div>

                        {/* Heading */}
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.1] text-slate-900 dark:text-white">
                            <TypedText />
                        </h1>

                        {/* Description */}
                        <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-350 leading-relaxed max-w-2xl">
                            {personalData.heroDescription}
                        </p>

                        {/* Tech Stack Pills (Excerpted from top items) */}
                        <div className="flex flex-wrap gap-2">
                            {["Python", "Django", "FastAPI", "React.js", "Next.js", "Tauri"].map((tech) => (
                                <span
                                    key={tech}
                                    className="px-4 py-1.5 text-xs font-semibold bg-white/70 dark:bg-slate-900/60 backdrop-blur-md border border-slate-200/50 dark:border-slate-800/50 rounded-full text-slate-700 dark:text-slate-300 shadow-sm"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-2">
                            <button
                                onClick={() => scrollToSection("contact")}
                                className="group relative px-8 py-4 bg-gradient-to-r from-indigo-600 to-cyan-500 text-white font-bold rounded-2xl shadow-lg hover:shadow-xl hover:shadow-indigo-500/20 hover:scale-105 transition-all duration-300"
                            >
                                <span className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></span>
                                <span className="relative flex items-center justify-center">
                                    Get In Touch
                                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </span>
                            </button>

                            <button
                                onClick={() => scrollToSection("projects")}
                                className="group px-8 py-4 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-slate-250 dark:border-slate-800 text-slate-800 dark:text-slate-200 font-bold rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800 hover:scale-105 transition-all duration-300 shadow-md"
                            >
                                <span className="relative flex items-center justify-center">
                                    View Projects
                                    <Code className="ml-2 w-4 h-4 group-hover:rotate-12 transition-transform text-indigo-500" />
                                </span>
                            </button>
                        </div>

                        {/* Dynamic Stats Grid */}
                        <div className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-200/60 dark:border-slate-800/40">
                            {personalData.stats.map((stat, index) => (
                                <div key={index} className="text-left">
                                    <div className="text-3xl font-black bg-gradient-to-r from-indigo-600 to-cyan-500 dark:from-indigo-400 dark:to-cyan-400 bg-clip-text text-transparent">{stat.value}</div>
                                    <div className="text-xs sm:text-sm font-semibold text-slate-500 dark:text-slate-400 mt-1">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Profile Card (Interactive 3D Effect) */}
                    <div className="flex justify-center lg:justify-end lg:col-span-5 order-1 lg:order-2">
                        <div className="relative group">
                            {/* Gradient glow rings behind card */}
                            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-indigo-500 via-purple-500 to-cyan-500 blur-2xl opacity-25 group-hover:opacity-40 transition-all duration-700 animate-pulse" />

                            {/* Glassmorphic Profile Card */}
                            <div className="relative w-80 sm:w-96 p-8 rounded-3xl bg-white/80 dark:bg-[#0e1424]/85 backdrop-blur-xl border border-white/50 dark:border-white/5 shadow-2xl flex flex-col items-center text-center transition-all duration-500 group-hover:scale-[1.02] group-hover:-rotate-1">
                                {/* Profile Image Ring */}
                                <div className="relative w-40 h-40 rounded-full p-1 bg-gradient-to-tr from-indigo-500 to-cyan-400 shadow-xl group-hover:scale-105 transition-transform duration-500">
                                    <img
                                        src={process.env.PUBLIC_URL + personalData.profileImage}
                                        alt={personalData.name}
                                        className="w-full h-full object-cover rounded-full bg-white dark:bg-slate-950"
                                    />
                                    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-transparent to-white/10" />
                                </div>

                                {/* Name & Title */}
                                <h2 className="mt-6 text-3xl font-black text-slate-800 dark:text-white transition-colors duration-300">
                                    {personalData.name}
                                </h2>
                                <p className="text-slate-500 dark:text-slate-400 text-sm font-semibold mt-1 tracking-wide">{personalData.title}</p>

                                {/* Status Indicator */}
                                <div className="flex items-center mt-4 px-4 py-1.5 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 text-xs font-bold rounded-full border border-emerald-250/20">
                                    <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full mr-2 animate-pulse" />
                                    {personalData.status}
                                </div>

                                {/* Social Links */}
                                <div className="mt-8 flex space-x-4">
                                    <a
                                        href={personalData.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="LinkedIn"
                                        className="p-3 bg-slate-100/80 dark:bg-slate-900/60 text-indigo-600 dark:text-indigo-400 rounded-2xl hover:bg-gradient-to-r hover:from-indigo-600 hover:to-cyan-500 hover:text-white dark:hover:text-white shadow-md border border-slate-200/20 dark:border-slate-800/50 transition-all duration-300 hover:scale-115 hover:-translate-y-1"
                                    >
                                        <Linkedin size={18} />
                                    </a>
                                    <a
                                        href={personalData.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="GitHub"
                                        className="p-3 bg-slate-100/80 dark:bg-slate-900/60 text-slate-700 dark:text-slate-300 rounded-2xl hover:bg-slate-900 dark:hover:bg-white hover:text-white dark:hover:text-slate-950 shadow-md border border-slate-200/20 dark:border-slate-800/50 transition-all duration-300 hover:scale-115 hover:-translate-y-1"
                                    >
                                        <Github size={18} />
                                    </a>
                                </div>

                                {/* Quick Download CV button in Hero Card */}
                                <button
                                    onClick={() => setIsResumeOpen(true)}
                                    className="mt-6 text-xs text-indigo-600 dark:text-indigo-400 font-bold flex items-center hover:underline group/link bg-transparent border-0 cursor-pointer"
                                >
                                    <Eye size={14} className="mr-1.5 group-hover/link:scale-110 transition-transform" />
                                    View Resume
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Scroll indicator */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce opacity-50 dark:opacity-30 hidden lg:block">
                    <ChevronDown className="w-6 h-6 text-slate-400" />
                </div>
            </div>

            {/* Resume / CV Modal */}
            <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
        </section>
    );
};
