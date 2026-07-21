import React, { useState } from "react";
import { FloatingParticles } from "./common";
import { useProjectFilter, useMousePosition } from "../hooks";
import { ExternalLink, Github, ArrowUpRight, Sparkles, Code2, Eye, Star, FolderOpen, X, ArrowRight, Calendar, Briefcase, User } from "lucide-react";

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

// Project Card Component
const ProjectCard = ({ project, index, onViewDetails }) => {
    const [isHovered, setIsHovered] = useState(false);

    const getStatusColor = (status) => {
        switch (status) {
            case 'Live': return 'text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/30 border-emerald-100 dark:border-emerald-900/30';
            case 'Development': return 'text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/30 border-amber-100 dark:border-amber-900/30';
            case 'Completed': return 'text-blue-650 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/30 border-blue-105 dark:border-blue-900/30';
            default: return 'text-slate-600 dark:text-slate-400 bg-slate-50 dark:bg-slate-900/50 border-slate-100 dark:border-slate-800';
        }
    };

    return (
        <div
            className="group relative bg-white/70 dark:bg-[#0e1424]/75 backdrop-blur-xl border border-white/40 dark:border-white/5 shadow-lg rounded-3xl overflow-hidden hover:scale-[1.02] hover:-translate-y-1 transition-all duration-350 flex flex-col justify-between"
            style={{ animationDelay: `${index * 100}ms` }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Top gradient glow overlay */}
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 opacity-80" />

            <div className="p-7 flex-1 flex flex-col justify-between">
                <div>
                    {/* Card Header */}
                    <div className="flex items-start justify-between mb-5">
                        <div className="flex items-center space-x-3.5 text-left">
                            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center text-2xl shadow-md text-white select-none">
                                {project.icon || '🚀'}
                            </div>
                            <div>
                                <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors leading-tight">
                                    {project.title}
                                </h3>
                                <span className={`mt-1.5 inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold border ${getStatusColor(project.status)}`}>
                                    {project.status}
                                </span>
                            </div>
                        </div>

                        {/* Top Action Icons */}
                        <div className="flex gap-1.5">
                            {project.demo && (
                                <a
                                    href={project.demo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 bg-slate-100 dark:bg-slate-900 border border-slate-200/20 dark:border-slate-800 text-slate-700 dark:text-slate-350 rounded-xl hover:bg-indigo-600 dark:hover:bg-indigo-500 hover:text-white dark:hover:text-white transition-all transform hover:scale-110 shadow-sm"
                                >
                                    <ExternalLink size={14} />
                                </a>
                            )}
                            {project.code && (
                                <a
                                    href={project.code}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 bg-slate-100 dark:bg-slate-900 border border-slate-200/20 dark:border-slate-800 text-slate-700 dark:text-slate-350 rounded-xl hover:bg-slate-905 dark:hover:bg-white hover:text-white dark:hover:text-slate-900 transition-all transform hover:scale-110 shadow-sm"
                                >
                                    <Github size={14} />
                                </a>
                            )}
                        </div>
                    </div>

                    {/* Brief description */}
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-5 text-left font-medium">
                        {project.description}
                    </p>

                    {/* Bullet Details highlights */}
                    {project.details && (
                        <ul className="mb-6 space-y-2 text-left">
                            {project.details.slice(0, 2).map((detail, dIdx) => (
                                <li key={dIdx} className="text-xs text-slate-500 dark:text-slate-400 flex items-start">
                                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 mr-2 mt-1.5 flex-shrink-0" />
                                    <span className="leading-snug">{detail}</span>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                <div>
                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                        {project.techs.map((tech, techIndex) => (
                            <span
                                key={techIndex}
                                className="px-2.5 py-1 bg-slate-100 dark:bg-slate-900/60 border border-slate-200/20 dark:border-slate-800/40 text-slate-700 dark:text-slate-300 rounded-lg text-xs font-bold"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>

                    {/* Project category */}
                    <div className="flex items-center text-xs font-bold text-slate-500 dark:text-slate-455 pt-4 border-t border-slate-200/50 dark:border-slate-800/40">
                        <FolderOpen className="w-3.5 h-3.5 mr-1.5 text-indigo-500" />
                        {project.category}
                    </div>
                </div>
            </div>

            {/* Hover overlay details panel */}
            <div className={`absolute inset-0 bg-gradient-to-br from-indigo-900/95 to-cyan-900/95 flex flex-col items-center justify-center p-6 text-center transition-all duration-350 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'}`}>
                <h4 className="text-lg font-black text-white mb-2">{project.title}</h4>
                <p className="text-xs text-indigo-150 max-w-xs leading-relaxed mb-6 font-semibold">{project.description}</p>
                
                <div className="flex flex-col gap-2.5 items-center justify-center w-full max-w-[220px]">
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            onViewDetails(project);
                        }}
                        className="flex items-center justify-center gap-1.5 bg-white text-indigo-600 hover:bg-slate-50 w-full py-2.5 rounded-xl font-extrabold text-xs shadow-md transition-all hover:scale-105"
                    >
                        <Eye size={14} />
                        <span>View Details</span>
                    </button>
                    
                    <div className="flex gap-2.5 w-full">
                        {project.demo && (
                            <a
                                href={project.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="flex-1 flex items-center justify-center gap-1.5 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white py-2 rounded-xl font-bold text-[10px] shadow-md transition-all hover:scale-105 border border-white/10"
                            >
                                <ExternalLink size={10} />
                                <span>Demo</span>
                            </a>
                        )}
                        {project.code && (
                            <a
                                href={project.code}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="flex-1 flex items-center justify-center gap-1.5 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white py-2 rounded-xl font-bold text-[10px] shadow-md transition-all hover:scale-105 border border-white/10"
                            >
                                <Github size={10} />
                                <span>Code</span>
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

// Project Details / Case Study Modal Component
const ProjectModal = ({ project, onClose }) => {
    React.useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "Escape") onClose();
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [onClose]);

    React.useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "unset";
        };
    }, []);

    if (!project) return null;

    return (
        <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-955/75 backdrop-blur-md"
            onClick={onClose}
        >
            <div 
                className="bg-white dark:bg-[#0c101b] border border-slate-200/50 dark:border-slate-800/60 rounded-3xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto relative p-6 sm:p-8 text-left space-y-6 animate-scale-up"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 bg-slate-100 dark:bg-slate-900 border border-slate-200/20 dark:border-slate-800 text-slate-700 dark:text-slate-350 rounded-xl hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-500 dark:hover:text-white transition-all transform hover:scale-105"
                >
                    <X size={18} />
                </button>

                {/* Header */}
                <div className="flex items-center space-x-4 pr-10">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center text-3xl shadow-md text-white select-none shrink-0">
                        {project.icon || '🚀'}
                    </div>
                    <div>
                        <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white leading-tight">
                            {project.title}
                        </h3>
                        <div className="flex flex-wrap items-center gap-2 mt-2">
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold border text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/30 border-emerald-100 dark:border-emerald-900/30">
                                {project.status}
                            </span>
                            <span className="inline-flex items-center text-xs font-semibold text-slate-400 dark:text-slate-500">
                                <Calendar className="w-3.5 h-3.5 mr-1" />
                                {project.timeline}
                            </span>
                        </div>
                    </div>
                </div>

                {/* Description */}
                <div className="border-t border-slate-200/50 dark:border-slate-800/40 pt-5">
                    <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-semibold">
                        {project.description}
                    </p>
                </div>

                {/* Technologies Employed */}
                <div className="space-y-3">
                    <h4 className="text-sm font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider flex items-center">
                        <Code2 className="w-4 h-4 mr-2 text-indigo-500" />
                        Technologies Employed
                    </h4>
                    <div className="flex flex-wrap gap-2">
                        {project.techs.map((tech, index) => (
                            <span
                                key={index}
                                className="px-3 py-1.5 bg-slate-100 dark:bg-slate-900 border border-slate-200/20 dark:border-slate-800/40 text-slate-700 dark:text-slate-300 rounded-xl text-xs font-bold"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Detailed Features & Architecture */}
                <div className="space-y-3">
                    <h4 className="text-sm font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider flex items-center">
                        <Sparkles className="w-4 h-4 mr-2 text-indigo-500" />
                        Detailed Features &amp; Architecture
                    </h4>
                    <ul className="space-y-3">
                        {project.details.map((detail, index) => (
                            <li key={index} className="flex items-start">
                                <ArrowRight className="w-4 h-4 text-cyan-500 mr-3 mt-1 shrink-0" />
                                <span className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                                    {detail}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Footer Action Links */}
                <div className="flex flex-col sm:flex-row gap-3 pt-5 border-t border-slate-200/50 dark:border-slate-800/40">
                    {project.demo && (
                        <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-600 to-cyan-500 hover:shadow-lg text-white py-3 rounded-2xl font-extrabold text-sm shadow-md transition-all hover:scale-102"
                        >
                            <Eye size={16} />
                            <span>Live Demo / Platform</span>
                        </a>
                    )}
                    {project.code && (
                        <a
                            href={project.code}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 flex items-center justify-center gap-2 bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-800 dark:text-white py-3 rounded-2xl font-extrabold text-sm shadow-md transition-all hover:scale-102 border border-slate-200/20 dark:border-slate-800/40"
                        >
                            <Github size={16} />
                            <span>View Source Code</span>
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

export const ProjectsSection = () => {
    const mousePosition = useMousePosition('projects');
    const { projects: filteredProjects, categories, activeCategory, handleCategoryChange, activeType, handleTypeChange } = useProjectFilter();
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <section
            id="projects"
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
                    title="Featured Projects" 
                    subtitle="A selection of high-performance web systems, customizable dashboards, and desktop applications."
                />

                {/* ── Primary Type Tabs ── */}
                <div className="flex justify-center mb-8">
                    <div className="inline-flex items-center p-1 bg-white/80 dark:bg-slate-900/60 backdrop-blur-md border border-slate-200/30 dark:border-slate-800/50 rounded-2xl shadow-sm gap-1">
                        <button
                            onClick={() => handleTypeChange('professional')}
                            className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 ${
                                activeType === 'professional'
                                    ? 'bg-gradient-to-r from-indigo-600 to-cyan-500 text-white shadow-md'
                                    : 'text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400'
                            }`}
                        >
                            <Briefcase className="w-4 h-4" />
                            Professional & Client
                        </button>
                        <button
                            onClick={() => handleTypeChange('personal')}
                            className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 ${
                                activeType === 'personal'
                                    ? 'bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-md'
                                    : 'text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400'
                            }`}
                        >
                            <User className="w-4 h-4" />
                            Personal Projects
                        </button>
                    </div>
                </div>

                {/* ── Secondary Category Filter Pills ── */}
                {categories.length > 2 && (
                    <div className="flex flex-wrap justify-center gap-2 mb-10">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => handleCategoryChange(category)}
                                className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all duration-200 border ${
                                    activeCategory === category
                                        ? activeType === 'professional'
                                            ? 'bg-indigo-600 border-transparent text-white shadow-sm'
                                            : 'bg-purple-600 border-transparent text-white shadow-sm'
                                        : 'bg-white/70 dark:bg-slate-900/50 border-slate-200/20 dark:border-slate-800/40 text-slate-600 dark:text-slate-400 hover:border-slate-300'
                                }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                )}

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {filteredProjects.map((project, index) => (
                        <ProjectCard 
                            key={index} 
                            project={project} 
                            index={index} 
                            onViewDetails={setSelectedProject}
                        />
                    ))}
                </div>

                {/* Bottom Call to Action Card */}
                <div className="text-center mt-20">
                    <div className="glass-panel p-8 sm:p-12 rounded-3xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-indigo-500/5 to-cyan-500/5 blur-3xl pointer-events-none rounded-full" />
                        <div className="max-w-2xl mx-auto text-center relative z-10">
                            <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-md text-white">
                                <Sparkles className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mb-3">
                                Interested in cooperating?
                            </h3>
                            <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed font-semibold text-sm sm:text-base">
                                Whether you're looking for a performance-focused backend dev, a scalable frontend setup, or general architectural consulting, let's connect!
                            </p>
                            <a
                                href="#contact"
                                className="inline-flex items-center px-6 py-3.5 bg-gradient-to-r from-indigo-600 to-cyan-500 text-white font-bold rounded-2xl shadow-md hover:shadow-lg hover:scale-105 transition-all"
                            >
                                Let's get in touch
                                <ArrowUpRight className="ml-2 w-4 h-4" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Project Details Modal */}
            {selectedProject && (
                <ProjectModal 
                    project={selectedProject} 
                    onClose={() => setSelectedProject(null)} 
                />
            )}
        </section>
    );
};