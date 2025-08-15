import React from "react";
import { FloatingParticles } from "./common";
import { heroData, profileData } from "../constants/data";
import { useTypingAnimation, useMousePosition, useScrollToSection } from "../hooks";
import { Code, Linkedin, Github, ChevronDown, Sparkles, ArrowRight } from "lucide-react";

// Typing animation component
const TypedText = () => {
    const { text } = useTypingAnimation();
    return (
        <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent">
            {text}
            <span className="animate-pulse">|</span>
        </span>
    );
};

export const HeroSection = () => {
    const mousePosition = useMousePosition();
    const { scrollToSection } = useScrollToSection();

    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center overflow-hidden"
            style={{
                background: `
                radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(99, 102, 241, 0.1) 0%, transparent 50%),
                linear-gradient(135deg, #f8fafc 0%, #e2e8f0 25%, #f1f5f9 50%, #e2e8f0 75%, #f8fafc 100%)
              `
            }}
        >
            {/* Animated background blobs */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-20 blur-3xl animate-pulse bg-gradient-to-tr from-indigo-500 via-cyan-400 to-purple-500" style={{ animationDuration: '8s' }} />
                <div className="absolute bottom-0 -left-32 w-80 h-80 rounded-full opacity-15 blur-2xl animate-pulse bg-gradient-to-tr from-purple-500 via-pink-400 to-cyan-500" style={{ animationDuration: '12s', animationDelay: '2s' }} />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full opacity-10 blur-3xl animate-pulse bg-gradient-to-tr from-yellow-500 via-red-500 to-purple-500" style={{ animationDuration: '15s', animationDelay: '4s' }} />
            </div>

            <FloatingParticles />

            {/* Main content */}
            <div className="container mx-auto px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                    {/* Left Section */}
                    <div className="space-y-8 order-2 lg:order-1">
                        {/* Badge */}
                        <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-indigo-500/10 to-cyan-500/10 border border-indigo-200 rounded-full text-sm font-medium text-indigo-700 backdrop-blur-sm">
                            <Sparkles className="w-4 h-4 mr-2" />
                            {heroData.badgeText}
                        </div>

                        {/* Heading */}
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1]">
                            <TypedText />
                        </h1>

                        {/* Description */}
                        <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl">
                            {heroData.description}
                        </p>

                        {/* Tech stack pills */}
                        <div className="flex flex-wrap gap-2">
                            {heroData.techStack.map((tech, index) => (
                                <span
                                    key={tech}
                                    className="px-3 py-1 text-sm font-medium bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full text-gray-700 hover:border-indigo-300 hover:text-indigo-600 transition-colors"
                                    style={{ animationDelay: `${index * 100}ms` }}
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <button
                                onClick={() => scrollToSection("contact")}
                                className="group relative px-8 py-4 bg-gradient-to-r from-indigo-600 to-cyan-500 text-white font-bold rounded-2xl shadow-lg hover:scale-105 transition-all duration-300"
                            >
                                <span className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                                <span className="relative flex items-center">
                                    Get In Touch
                                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </span>
                            </button>

                            <button
                                onClick={() => scrollToSection("projects")}
                                className="group px-8 py-4 bg-white/80 backdrop-blur-sm border-2 border-indigo-200 text-indigo-600 font-bold rounded-2xl hover:bg-indigo-600 hover:text-white transition-all duration-300 shadow-lg"
                            >
                                <span className="relative flex items-center">
                                    View Projects
                                    <Code className="ml-2 w-4 h-4 group-hover:rotate-12 transition-transform" />
                                </span>
                            </button>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-6 pt-6 border-t border-gray-200">
                            {heroData.stats.map((stat, index) => (
                                <div key={index} className="text-center">
                                    <div className="text-2xl font-bold text-indigo-600">{stat.number}</div>
                                    <div className="text-sm text-gray-500">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Profile Card */}
                    <div className="flex justify-center lg:justify-end my-10 sm:my-0 order-1 lg:order-2">
                        <div className="group relative">
                            {/* Glow layers */}
                            <div className="absolute inset-0 w-80 h-80 rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-cyan-500 blur-3xl opacity-30 group-hover:opacity-50 animate-pulse transition-all" />
                            <div className="absolute inset-0 w-80 h-80 rounded-full bg-gradient-to-br from-pink-400 via-purple-400 to-indigo-400 blur-2xl opacity-20 group-hover:opacity-40 animate-pulse transition-all" style={{ animationDelay: '1s' }} />

                            {/* Profile Card */}
                            <div className="relative w-80 h-96 rounded-3xl shadow-2xl bg-white/90 backdrop-blur-xl flex flex-col items-center justify-center p-8 border border-white/50 hover:border-indigo-200 transition-all duration-500 group-hover:scale-105 group-hover:-rotate-1">
                                {/* Profile Image */}
                                <div className="relative w-36 h-36 rounded-full shadow-2xl ring-4 ring-white group-hover:ring-indigo-200 transition-transform duration-500 transform group-hover:scale-110">
                                    <img
                                        src={profileData.profileImage}
                                        alt={profileData.name}
                                        className="w-full h-full object-cover rounded-full"
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-white/20"></div>
                                </div>

                                {/* Name & Title */}
                                <h3 className="mt-6 text-3xl font-black text-gray-800 group-hover:text-indigo-600 transition-colors duration-300">
                                    {profileData.name}
                                </h3>
                                <p className="text-gray-500 text-base font-medium mt-1">{profileData.title}</p>

                                {/* Status */}
                                <div className="flex items-center mt-3 px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">
                                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                                    {heroData.status}
                                </div>

                                {/* Social Links */}
                                <div className="mt-6 flex space-x-4">
                                    <a href={profileData.linkedin} target="_blank" rel="noopener noreferrer"
                                        className="p-3 bg-gradient-to-br from-indigo-100 to-indigo-50 text-indigo-600 rounded-xl hover:from-indigo-600 hover:to-indigo-700 hover:text-white transition-all transform hover:scale-110 hover:-translate-y-1 shadow-lg"
                                    >
                                        <Linkedin size={20} />
                                    </a>
                                    <a href={profileData.github} target="_blank" rel="noopener noreferrer"
                                        className="p-3 bg-gradient-to-br from-gray-100 to-gray-50 text-gray-700 rounded-xl hover:from-gray-800 hover:to-gray-900 hover:text-white transition-all transform hover:scale-110 hover:-translate-y-1 shadow-lg"
                                    >
                                        <Github size={20} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Scroll indicator */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                    <ChevronDown className="w-6 h-6 text-gray-400" />
                </div>
            </div>

            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-20px) rotate(180deg); }
                }
                .animate-float {
                    animation: float 6s ease-in-out infinite;
                }
            `}</style>
        </section>
    );
};
