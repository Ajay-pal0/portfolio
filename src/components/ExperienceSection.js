import React, { useState } from "react";
import { useMousePosition } from "../hooks";
import { FloatingParticles } from "./common";
import { experienceData } from "../data";
import { Briefcase, MapPin, Calendar, Award, TrendingUp, Code, ArrowRight } from "lucide-react";

// Section Title Component
const SectionTitle = ({ title, subtitle }) => (
    <div className="text-center mb-16">
        <div className="inline-flex items-center justify-center p-2.5 bg-indigo-50 dark:bg-indigo-950/40 rounded-full mb-4 border border-indigo-100 dark:border-indigo-800/20">
            <Briefcase className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
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

export const ExperienceSection = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const mousePosition = useMousePosition('experience');

    const getTypeColor = (type) => {
        switch (type) {
            case 'Full-time': 
                return 'text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/30 border-emerald-100 dark:border-emerald-900/30';
            case 'Contract / Learning': 
            case 'Learning': 
                return 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/30 border-blue-100 dark:border-blue-900/30';
            default: 
                return 'text-slate-600 dark:text-slate-400 bg-slate-50 dark:bg-slate-900 border-slate-100 dark:border-slate-800';
        }
    };

    return (
        <section
            id="experience"
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
                    title="Work Experience" 
                    subtitle="A walkthrough of my career milestones, projects engineered, and roles assumed in the industry."
                />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    
                    {/* Left: Tab selectors list */}
                    <div className="lg:col-span-4">
                        <div className="glass-panel p-5 rounded-3xl">
                            <h3 className="text-md font-bold text-slate-800 dark:text-slate-200 mb-4 uppercase tracking-wider flex items-center">
                                <TrendingUp className="w-4 h-4 mr-2 text-indigo-500" />
                                Career Journey
                            </h3>
                            <div className="space-y-3">
                                {experienceData.map((exp, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setActiveIndex(index)}
                                        className={`w-full text-left p-4 rounded-2xl border transition-all duration-300 flex flex-col gap-1.5 ${
                                            activeIndex === index
                                                ? 'bg-gradient-to-r from-indigo-600 to-cyan-500 border-transparent text-white shadow-lg'
                                                : 'bg-slate-100/50 dark:bg-slate-900/30 border-slate-200/20 dark:border-slate-800/40 text-slate-700 dark:text-slate-300 hover:bg-slate-200/50 dark:hover:bg-slate-800/50 hover:border-slate-350 dark:hover:border-slate-700'
                                        }`}
                                    >
                                        <div className="flex items-center justify-between w-full">
                                            <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${
                                                activeIndex === index 
                                                    ? 'text-white border-white/30 bg-white/10'
                                                    : getTypeColor(exp.type)
                                            }`}>
                                                {exp.type}
                                            </span>
                                            <span className={`text-xs font-semibold ${activeIndex === index ? 'text-indigo-100' : 'text-slate-400 dark:text-slate-500'}`}>
                                                {exp.period}
                                            </span>
                                        </div>
                                        <h4 className="font-extrabold text-sm sm:text-base leading-snug">{exp.role}</h4>
                                        <p className={`text-xs ${activeIndex === index ? 'text-indigo-50' : 'text-slate-500 dark:text-slate-400'}`}>{exp.company}</p>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right: Active Card details */}
                    <div className="lg:col-span-8">
                        <div className="glass-panel p-8 sm:p-10 rounded-3xl relative overflow-hidden min-h-[480px]">
                            {/* Decorative background glow */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-indigo-500/5 to-cyan-500/5 blur-3xl pointer-events-none rounded-full" />

                            {experienceData[activeIndex] && (
                                <div className="space-y-6 relative z-10 text-left">
                                    {/* Header */}
                                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200/50 dark:border-slate-800/40">
                                        <div>
                                            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mb-2">
                                                {experienceData[activeIndex].role}
                                            </h3>
                                            <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs sm:text-sm font-semibold text-slate-500 dark:text-slate-400">
                                                <div className="flex items-center">
                                                    <Briefcase className="w-4 h-4 mr-1.5 text-indigo-500" />
                                                    {experienceData[activeIndex].company}
                                                </div>
                                                <div className="flex items-center">
                                                    <MapPin className="w-4 h-4 mr-1.5 text-indigo-500" />
                                                    {experienceData[activeIndex].location}
                                                </div>
                                                <div className="flex items-center">
                                                    <Calendar className="w-4 h-4 mr-1.5 text-indigo-500" />
                                                    {experienceData[activeIndex].period}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Brief summary */}
                                    <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed font-semibold">
                                        {experienceData[activeIndex].description}
                                    </p>

                                    {/* Key Systems/Projects */}
                                    {experienceData[activeIndex].projects && (
                                        <div className="space-y-3">
                                            <h4 className="text-sm font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider flex items-center">
                                                <Briefcase className="w-4 h-4 mr-2 text-indigo-500" />
                                                Key Systems Engineered
                                            </h4>
                                            <div className="flex flex-wrap gap-2">
                                                {experienceData[activeIndex].projects.map((proj, index) => (
                                                    <span
                                                        key={index}
                                                        className="px-4 py-1.5 bg-gradient-to-r from-indigo-500/10 to-cyan-500/10 dark:from-indigo-950/40 dark:to-cyan-950/40 border border-indigo-500/20 dark:border-indigo-800/30 text-indigo-700 dark:text-indigo-300 rounded-xl text-xs font-bold"
                                                    >
                                                        {proj}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {/* Core highlights */}
                                    <div>
                                         <h4 className="text-sm font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider mb-4 flex items-center">
                                             <Award className="w-4 h-4 mr-2 text-indigo-500" />
                                             Core Highlights
                                         </h4>
                                         <ul className="space-y-3">
                                             {experienceData[activeIndex].highlights.map((highlight, index) => (
                                                 <li key={index} className="flex items-start">
                                                     <ArrowRight className="w-4 h-4 text-cyan-500 mr-3 mt-1 flex-shrink-0" />
                                                     <span className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                                                        {highlight}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Stack used */}
                                    <div>
                                        <h4 className="text-sm font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider mb-3 flex items-center">
                                            <Code className="w-4 h-4 mr-2 text-indigo-500" />
                                            Technologies Employed
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {experienceData[activeIndex].technologies.map((tech, index) => (
                                                <span
                                                    key={index}
                                                    className="px-4 py-1.5 bg-slate-100/70 dark:bg-slate-900 border border-slate-200/20 dark:border-slate-800/40 text-slate-700 dark:text-slate-300 rounded-xl text-xs font-bold"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                </div>
                            )}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};