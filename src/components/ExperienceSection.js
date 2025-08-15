import React from "react";
import { useState } from "react";
import { useMousePosition } from "../hooks";
import { FloatingParticles } from "./common";
import { experiences } from "../constants/data";
import { Briefcase, MapPin, Calendar, Award, TrendingUp, Code, } from "lucide-react";

// Enhanced Section Title Component
const SectionTitle = ({ title }) => (
    <div className="text-center mb-20">
        <div className="inline-flex items-center justify-center p-3 bg-gradient-to-br from-indigo-100 to-cyan-100 rounded-2xl mb-6">
            <Briefcase className="w-8 h-8 text-indigo-600" />
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-4">
            My {title}
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A journey through my professional growth and the impact I've made at each step
        </p>
        <div className="mt-8 w-24 h-1 bg-gradient-to-r from-indigo-600 to-cyan-500 mx-auto rounded-full"></div>
    </div>
);


export const ExperienceSection = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const mousePosition = useMousePosition('experience');

    const getTypeColor = (type) => {
        switch (type) {
            case 'Full-time': return 'text-green-600 bg-green-100';
            case 'Learning': return 'text-blue-600 bg-blue-100';
            case 'Education': return 'text-purple-600 bg-purple-100';
            default: return 'text-gray-600 bg-gray-100';
        }
    };

    return (
        <section
            id="experience"
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
                <SectionTitle title="Experience" />

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Timeline Navigation */}
                    <div className="lg:col-span-1">
                        <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl p-6 border border-white/50">
                            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                                <TrendingUp className="w-5 h-5 mr-2 text-indigo-500" />
                                Timeline
                            </h3>
                            <div className="space-y-4">
                                {experiences.map((experience, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setActiveIndex(index)}
                                        className={`w-full text-left p-4 rounded-2xl transition-all duration-300 ${activeIndex === index
                                                ? 'bg-gradient-to-r from-indigo-500 to-cyan-500 text-white shadow-lg'
                                                : 'bg-gray-50 hover:bg-white hover:shadow-md text-gray-700'
                                            }`}
                                    >
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="font-semibold text-sm">{experience.period}</span>
                                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(experience.type)}`}>
                                                {experience.type}
                                            </span>
                                        </div>
                                        <h4 className="font-bold">{experience.title}</h4>
                                        <p className="text-sm opacity-80">{experience.company}</p>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Experience Details */}
                    <div className="lg:col-span-2">
                        <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-white/50">
                            {experiences[activeIndex] && (
                                <div className="space-y-6">
                                    {/* Header */}
                                    <div className="flex items-start justify-between">
                                        <div>
                                            <h3 className="text-3xl font-bold text-gray-900 mb-2">
                                                {experiences[activeIndex].title}
                                            </h3>
                                            <div className="flex items-center space-x-4 text-gray-600 mb-4">
                                                <div className="flex items-center">
                                                    <Briefcase className="w-4 h-4 mr-2" />
                                                    {experiences[activeIndex].company}
                                                </div>
                                                <div className="flex items-center">
                                                    <MapPin className="w-4 h-4 mr-2" />
                                                    {experiences[activeIndex].location}
                                                </div>
                                                <div className="flex items-center">
                                                    <Calendar className="w-4 h-4 mr-2" />
                                                    {experiences[activeIndex].period}
                                                </div>
                                            </div>
                                        </div>
                                        <span className={`px-4 py-2 rounded-full text-sm font-semibold ${getTypeColor(experiences[activeIndex].type)}`}>
                                            {experiences[activeIndex].type}
                                        </span>
                                    </div>

                                    {/* Description */}
                                    <div className="prose prose-lg text-gray-600 leading-relaxed">
                                        <p>{experiences[activeIndex].description}</p>
                                    </div>

                                    {/* Technologies */}
                                    <div>
                                        <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                                            <Code className="w-5 h-5 mr-2 text-indigo-500" />
                                            Technologies & Skills
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {experiences[activeIndex].technologies.map((tech, index) => (
                                                <span
                                                    key={index}
                                                    className="px-3 py-1 bg-gradient-to-r from-indigo-100 to-cyan-100 text-indigo-700 rounded-full text-sm font-semibold border border-indigo-200"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Achievements */}
                                    <div>
                                        <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                                            <Award className="w-5 h-5 mr-2 text-indigo-500" />
                                            Key Achievements
                                        </h4>
                                        <ul className="space-y-3">
                                            {experiences[activeIndex].achievements.map((achievement, index) => (
                                                <li key={index} className="flex items-start space-x-3">
                                                    <div className="w-2 h-2 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full mt-2 flex-shrink-0"></div>
                                                    <span className="text-gray-600">{achievement}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            )}
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
              
              .prose p {
                margin-bottom: 1.5rem;
                font-size: 1.1rem;
                line-height: 1.8;
              }
            `}</style>
        </section>
    );
};