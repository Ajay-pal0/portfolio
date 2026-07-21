import React from "react";
import { useMousePosition } from "../hooks";
import { FloatingParticles } from "./common";
import { skillsData, certificationsData } from "../data";
import { ExternalLink, Star, Zap, Trophy, CheckCircle2, ArrowUpRight, Code, Laptop, Server, Database, Cloud, Network, Settings, HelpCircle } from "lucide-react";

// Section Title Component
const SectionTitle = ({ title, subtitle }) => (
    <div className="text-center mb-16">
        <div className="inline-flex items-center justify-center p-2.5 bg-indigo-50 dark:bg-indigo-950/40 rounded-full mb-4 border border-indigo-100 dark:border-indigo-800/20">
            <Star className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
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

export const SkillsAndCertifications = () => {
    const mousePosition = useMousePosition('skills');

    // Category icon mapper
    const getCategoryIcon = (title) => {
        switch (title) {
            case 'Languages': return <Code className="w-5 h-5" />;
            case 'Frontend': return <Laptop className="w-5 h-5" />;
            case 'Backend': return <Server className="w-5 h-5" />;
            case 'Databases': return <Database className="w-5 h-5" />;
            case 'APIs & Protocols': return <Network className="w-5 h-5" />;
            case 'DevOps & Cloud': return <Cloud className="w-5 h-5" />;
            case 'Tools & Desktop': return <Settings className="w-5 h-5" />;
            default: return <HelpCircle className="w-5 h-5" />;
        }
    };

    // Issuer badge colours
    const getIssuerStyle = (issuer) => {
        switch (issuer) {
            case 'Microsoft':
                return { badge: 'bg-blue-50 dark:bg-blue-950/30 text-blue-600 dark:text-blue-400 border-blue-100 dark:border-blue-900/30', icon: 'from-blue-500 to-blue-600' };
            case 'HackerRank':
                return { badge: 'bg-emerald-50 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400 border-emerald-100 dark:border-emerald-900/30', icon: 'from-emerald-500 to-teal-500' };
            case 'TestDome':
                return { badge: 'bg-purple-50 dark:bg-purple-950/30 text-purple-600 dark:text-purple-400 border-purple-100 dark:border-purple-900/30', icon: 'from-purple-500 to-indigo-500' };
            default:
                return { badge: 'bg-indigo-50 dark:bg-indigo-950/30 text-indigo-600 dark:text-indigo-400 border-indigo-100 dark:border-indigo-900/30', icon: 'from-indigo-500 to-cyan-500' };
        }
    };

    return (
        <section
            id="skills"
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
                    title="Skills & Credentials"
                    subtitle="My technical stack, languages, database tools, and professional certifications."
                />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

                    {/* Left: Skills Category Grid */}
                    <div className="lg:col-span-6 space-y-6">
                        <div className="text-left mb-6">
                            <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white mb-2 flex items-center">
                                <Zap className="w-5 h-5 mr-2 text-indigo-500" />
                                Technical Toolbox
                            </h3>
                            <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">
                                Modern frameworks, database systems, APIs, and devops tools I use to build scalable products.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {skillsData.categories.map((category, index) => (
                                <div
                                    key={index}
                                    className="glass-panel p-5 rounded-2xl hover:scale-[1.01] transition-transform"
                                >
                                    <div className="flex items-center space-x-3 mb-4 text-slate-800 dark:text-slate-200">
                                        <div className="p-2.5 bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-100 dark:border-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-xl">
                                            {getCategoryIcon(category.title)}
                                        </div>
                                        <h4 className="font-extrabold text-sm sm:text-base">{category.title}</h4>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {category.skills.map((skill, sIdx) => (
                                            <span
                                                key={sIdx}
                                                className="px-3 py-1 text-xs font-semibold bg-slate-100/50 dark:bg-slate-900/50 border border-slate-200/10 dark:border-slate-800/40 text-slate-700 dark:text-slate-300 rounded-lg hover:border-slate-400 dark:hover:border-slate-700 transition-colors"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Certifications list */}
                    <div className="lg:col-span-6 space-y-6">
                        <div className="text-left mb-6">
                            <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white mb-2 flex items-center">
                                <Trophy className="w-5 h-5 mr-2 text-indigo-500" />
                                Professional Certifications
                            </h3>
                            <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">
                                Verified certifications validating programming skills, frameworks, databases, and APIs.
                            </p>
                        </div>

                        <div className="space-y-3 max-h-[520px] overflow-y-auto pr-1 custom-scrollbar">
                            {certificationsData.map((cert, index) => {
                                const style = getIssuerStyle(cert.issuer);
                                return (
                                    <div
                                        key={index}
                                        className="glass-panel p-4 rounded-2xl hover:scale-[1.01] transition-transform border border-slate-200/20 dark:border-slate-800/40"
                                    >
                                        <div className="flex items-start gap-3 text-left">
                                            {/* Issuer icon */}
                                            <div className={`p-2.5 bg-gradient-to-tr ${style.icon} rounded-xl text-white shrink-0 mt-0.5`}>
                                                <Trophy className="w-4 h-4" />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <h4 className="font-extrabold text-sm text-slate-800 dark:text-slate-100 leading-snug">
                                                    {cert.title}
                                                </h4>
                                                <div className="flex flex-wrap items-center gap-2 mt-1.5">
                                                    {/* Issuer badge */}
                                                    <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold border ${style.badge}`}>
                                                        {cert.issuer}
                                                    </span>
                                                    <span className="text-[10px] text-slate-400 dark:text-slate-500 font-semibold">{cert.date}</span>
                                                </div>
                                                {/* Credential ID */}
                                                {cert.credentialId && (
                                                    <p className="text-[9px] text-slate-400 dark:text-slate-600 mt-1 font-mono truncate">
                                                        ID: {cert.credentialId}
                                                    </p>
                                                )}
                                            </div>
                                            {/* Verify / Earned */}
                                            <div className="flex items-center gap-1.5 flex-shrink-0 mt-0.5">
                                                {cert.link ? (
                                                    <a
                                                        href={cert.link}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="flex items-center text-[10px] font-bold text-indigo-600 dark:text-indigo-400 hover:underline gap-0.5"
                                                    >
                                                        Verify <ExternalLink size={10} />
                                                    </a>
                                                ) : (
                                                    <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400">
                                                        Earned
                                                    </span>
                                                )}
                                                <CheckCircle2 size={14} className="text-emerald-500" />
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Professional CTA block */}
                        <div className="bg-gradient-to-r from-indigo-600 to-cyan-500 rounded-3xl p-6 shadow-xl text-white text-left relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 blur-xl rounded-full" />
                            <h4 className="text-lg font-bold mb-2">Need a tailored skill set?</h4>
                            <p className="text-xs text-indigo-100 leading-relaxed mb-4 font-semibold">
                                I am highly adaptable and enjoy diving into new tech ecosystems to resolve operational issues or design clean architectures.
                            </p>
                            <a
                                href="#contact"
                                className="inline-flex items-center px-5 py-2.5 bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-xl text-white text-xs font-bold transition-all hover:scale-105"
                            >
                                Let's get in touch
                                <ArrowUpRight className="ml-2 w-3.5 h-3.5" />
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};