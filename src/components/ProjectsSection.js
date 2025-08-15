import React, { useState } from "react";
import { FloatingParticles } from "./common";
import { useProjectFilter, useMousePosition } from "../hooks";
import { ExternalLink, Github, ArrowUpRight, Sparkles, Code2, Eye, Star, FolderOpen } from "lucide-react";

// Enhanced Section Title Component (matching your style)
const SectionTitle = ({ title }) => (
    <div className="text-center mb-20">
        <div className="inline-flex items-center justify-center p-3 bg-gradient-to-br from-indigo-100 to-cyan-100 rounded-2xl mb-6">
            <Star className="w-8 h-8 text-indigo-600" />
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-4">
            {title}
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Innovative solutions that showcase my technical expertise and problem-solving abilities
        </p>
        <div className="mt-8 w-24 h-1 bg-gradient-to-r from-indigo-600 to-cyan-500 mx-auto rounded-full"></div>
    </div>
);


// Project Card Component
const ProjectCard = ({ project, index }) => {
    const [isHovered, setIsHovered] = useState(false);

    const getStatusColor = (status) => {
        switch (status) {
            case 'Live': return 'text-green-600 bg-green-100';
            case 'Development': return 'text-yellow-600 bg-yellow-100';
            case 'Completed': return 'text-blue-600 bg-blue-100';
            default: return 'text-gray-600 bg-gray-100';
        }
    };

    return (
        <div
            className="group relative bg-white/90 backdrop-blur-xl rounded-3xl shadow-xl hover:shadow-2xl hover:shadow-indigo-500/20 transition-all duration-500 transform hover:scale-105 hover:-rotate-1 border border-white/50 hover:border-indigo-200 overflow-hidden"
            style={{ animationDelay: `${index * 100}ms` }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-cyan-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* Project header */}
            <div className="relative p-8">
                <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center space-x-4">
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${project.gradient} flex items-center justify-center text-2xl shadow-lg`}>
                            {project.icon}
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">
                                {project.title}
                            </h3>
                            <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(project.status)}`}>
                                {project.status}
                            </span>
                        </div>
                    </div>
                    <div className="flex space-x-2">
                        {project.demo && (
                            <a
                                href={project.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 bg-indigo-100 text-indigo-600 rounded-xl hover:bg-indigo-600 hover:text-white transition-all duration-300 transform hover:scale-110"
                            >
                                <ExternalLink className="w-4 h-4" />
                            </a>
                        )}
                        {project.code && (
                            <a
                                href={project.code}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 bg-gray-100 text-gray-600 rounded-xl hover:bg-gray-800 hover:text-white transition-all duration-300 transform hover:scale-110"
                            >
                                <Github className="w-4 h-4" />
                            </a>
                        )}
                    </div>
                </div>

                {/* Project description */}
                <p className="text-gray-600 leading-relaxed mb-6">
                    {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                    {project.techs.map((tech, techIndex) => (
                        <span
                            key={techIndex}
                            className="px-3 py-1 bg-gradient-to-r from-indigo-100 to-cyan-100 text-indigo-700 rounded-full text-sm font-semibold border border-indigo-200"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                {/* Project category */}
                <div className="flex items-center text-sm text-gray-500">
                    <FolderOpen className="w-4 h-4 mr-2" />
                    {project.category}
                </div>
            </div>

            {/* Hover overlay */}
            <div className={`absolute inset-0 bg-gradient-to-br from-indigo-600/90 to-cyan-600/90 flex items-center justify-center transition-all duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
                <div className="text-center text-white">
                    <div className="text-2xl font-bold mb-2">View Project</div>
                    <div className="flex justify-center space-x-4">
                        {project.demo && (
                            <a
                                href={project.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-xl hover:bg-white/30 transition-all duration-300"
                            >
                                <Eye className="w-4 h-4" />
                                <span>Demo</span>
                            </a>
                        )}
                        {project.code && (
                            <a
                                href={project.code}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-xl hover:bg-white/30 transition-all duration-300"
                            >
                                <Code2 className="w-4 h-4" />
                                <span>Code</span>
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export const ProjectsSection = () => {
    const mousePosition = useMousePosition('projects');
    const { projects: filteredProjects, categories, activeCategory, handleCategoryChange } = useProjectFilter();

    return (
        <section
            id="projects"
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
                <SectionTitle title="Featured Projects" />

                {/* Category Filter */}
                <div className="flex flex-wrap justify-center gap-4 mb-16">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => handleCategoryChange(category)}
                            className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 ${activeCategory === category
                                ? 'bg-gradient-to-r from-indigo-600 to-cyan-500 text-white shadow-lg shadow-indigo-500/25'
                                : 'bg-white/80 backdrop-blur-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 border border-gray-200 hover:border-indigo-200'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </div>

                {/* Call to Action */}
                <div className="text-center mt-16">
                    <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl p-8 lg:p-12 border border-white/50">
                        <div className="max-w-2xl mx-auto">
                            <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <Sparkles className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                                Ready to Start Your Next Project?
                            </h3>
                            <p className="text-gray-600 mb-8 leading-relaxed">
                                Let's collaborate to bring your ideas to life with cutting-edge technology and innovative solutions.
                            </p>
                            <a
                                href="#contact"
                                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-600 to-cyan-500 text-white font-bold rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-indigo-500/25 transform hover:scale-105 transition-all duration-300"
                            >
                                Get In Touch
                                <ArrowUpRight className="ml-2 w-5 h-5" />
                            </a>
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
            `}</style>
        </section>
    );
};