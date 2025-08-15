import React from "react";
import { useMousePosition } from "../hooks";
import { FloatingParticles } from "./common";
import { skillCategories, certificates } from "../constants/data";
import { ExternalLink, Star, Zap, Trophy, CheckCircle2, ArrowUpRight } from "lucide-react";

// Enhanced Section Title Component
const SectionTitle = ({ title }) => (
    <div className="text-center mb-20">
        <div className="inline-flex items-center justify-center p-3 bg-gradient-to-br from-indigo-100 to-cyan-100 rounded-2xl mb-6">
            <Star className="w-8 h-8 text-indigo-600" />
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-4">
            {title}
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            My technical expertise and professional certifications that drive innovation
        </p>
        <div className="mt-8 w-24 h-1 bg-gradient-to-r from-indigo-600 to-cyan-500 mx-auto rounded-full"></div>
    </div>
);


export const SkillsAndCertifications = () => {
    const mousePosition = useMousePosition('skills');

    return (
        <section
            id="skills"
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
                <SectionTitle title="Skills & Certifications" />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Skills Section */}
                    <div className="space-y-8">
                        <div className="text-center lg:text-left">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center justify-center lg:justify-start">
                                <Zap className="w-6 h-6 mr-2 text-indigo-500" />
                                Technical Skills
                            </h3>
                            <p className="text-gray-600">
                                A comprehensive toolkit of technologies and frameworks I use to build exceptional applications
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {skillCategories.map((category, index) => (
                                <div
                                    key={index}
                                    className="group bg-white/90 backdrop-blur-xl rounded-3xl shadow-xl p-6 hover:shadow-2xl hover:shadow-indigo-500/20 transition-all duration-500 transform hover:scale-105 border border-white/50 hover:border-indigo-200"
                                    style={{ animationDelay: `${index * 100}ms` }}
                                >
                                    {/* Category header */}
                                    <div className="flex items-center space-x-3 mb-4">
                                        <div className="p-2 bg-gradient-to-br from-indigo-500 to-cyan-500 rounded-xl text-white">
                                            <category.icon className="w-5 h-5" />
                                        </div>
                                        <h4 className="text-lg font-bold text-gray-900">{category.title}</h4>
                                    </div>

                                    {/* Skills list */}
                                    <div className="flex flex-wrap gap-2">
                                        {category.skills.map((skill, skillIndex) => (
                                            <span
                                                key={skillIndex}
                                                className="px-3 py-1 bg-gradient-to-r from-indigo-100 to-cyan-100 text-indigo-700 rounded-full text-sm font-semibold border border-indigo-200 hover:from-indigo-200 hover:to-cyan-200 transition-colors cursor-default"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Certifications Section */}
                    <div className="space-y-8">
                        <div className="text-center lg:text-left">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center justify-center lg:justify-start">
                                <Trophy className="w-6 h-6 mr-2 text-indigo-500" />
                                Certifications
                            </h3>
                            <p className="text-gray-600">
                                Professional certifications that validate my expertise and commitment to continuous learning
                            </p>
                        </div>

                        <div className="space-y-4">
                            {certificates.map((cert, index) => (
                                <div
                                    key={index}
                                    className="group bg-white/90 backdrop-blur-xl rounded-3xl shadow-xl p-6 hover:shadow-2xl hover:shadow-indigo-500/20 transition-all duration-500 transform hover:scale-105 border border-white/50 hover:border-indigo-200"
                                    style={{ animationDelay: `${index * 100}ms` }}
                                >
                                    <div className="flex items-start space-x-4">
                                        {/* Certificate icon */}
                                        <div className="flex-shrink-0">
                                            <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-cyan-500 rounded-xl flex items-center justify-center text-white">
                                                {cert.icon}
                                            </div>
                                        </div>

                                        {/* Certificate details */}
                                        <div className="flex-1 min-w-0">
                                            <h4 className="text-lg font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">
                                                {cert.title}
                                            </h4>
                                            <p className="text-gray-600 text-sm mb-2">{cert.issuer}</p>
                                            <div className="flex items-center justify-between">
                                                <span className="text-sm text-gray-500">{cert.date}</span>
                                                {cert.link && (
                                                    <a
                                                        href={cert.link}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="flex items-center space-x-1 text-indigo-600 hover:text-indigo-700 transition-colors"
                                                    >
                                                        <span className="text-sm font-medium">View</span>
                                                        <ExternalLink className="w-4 h-4" />
                                                    </a>
                                                )}
                                            </div>
                                        </div>

                                        {/* Status indicator */}
                                        <div className="flex-shrink-0">
                                            <CheckCircle2 className="w-6 h-6 text-green-500" />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Call to Action */}
                        <div className="bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-3xl p-6 text-white text-center">
                            <h4 className="text-xl font-bold mb-2">Ready to Learn More?</h4>
                            <p className="text-indigo-100 mb-4">
                                I'm constantly expanding my skill set and staying updated with the latest technologies
                            </p>
                            <a
                                href="#contact"
                                className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm rounded-2xl text-white font-semibold hover:bg-white/30 transition-all duration-300 transform hover:scale-105"
                            >
                                Let's Discuss Your Project
                                <ArrowUpRight className="ml-2 w-4 h-4" />
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