import React from "react";
import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";
import { scrollToSection } from "../utils/utils";
import profileImg from "../assets/images/profile.jpg";
import { ExternalLink, Code, Linkedin, Github, ChevronDown } from "lucide-react";

export const HeroSection = React.memo(() => {
    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden"
        >
            {/* Animated mesh gradient blobs */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="absolute inset-0 pointer-events-none"
            >
                <motion.div
                    animate={{ x: [0, 25, -25, 0], y: [0, -20, 20, 0] }}
                    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-24 -right-24 w-80 sm:w-[28rem] h-80 sm:h-[28rem] bg-gradient-to-br from-indigo-500 to-cyan-500 rounded-full opacity-20 blur-3xl"
                />
                <motion.div
                    animate={{ x: [0, -25, 25, 0], y: [0, 20, -20, 0] }}
                    transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-12 -left-24 w-64 sm:w-80 h-64 sm:h-80 bg-gradient-to-br from-purple-500 to-pink-400 rounded-full opacity-15 blur-2xl"
                />
            </motion.div>

            {/* Content */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Left Text Section */}
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="space-y-6"
                    >
                        {/* Heading with Typed Animation */}
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight leading-tight mb-5"
                        >
                            <span className="bg-gradient-to-r from-indigo-600 to-cyan-500 bg-clip-text text-transparent">
                                <ReactTyped
                                    strings={[
                                        "Hi, I'm Ajay Pal",
                                        "A Software Developer",
                                        "Frontend Specialist",
                                        "React and React Native Expert"
                                    ]}
                                    typeSpeed={50}
                                    backSpeed={25}
                                    backDelay={1500}
                                    loop
                                />
                            </span>
                        </motion.h1>

                        {/* Intro Paragraph */}
                        <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed max-w-2xl">
                            Results-driven <span className="font-semibold text-indigo-600">Software Developer</span> with
                            <span className="font-semibold text-indigo-600"> 3+ years</span> of experience building performant,scalable, and user-focused web & mobile applications.Specializing in
                            <span className="font-medium text-gray-800"> React.js</span>,
                            <span className="font-medium text-gray-800"> Next.js</span>, and
                            <span className="font-medium text-gray-800"> React Native</span> — with deep expertise in
                            <span className="font-medium text-gray-800"> Tailwind CSS</span> and
                            <span className="font-medium text-gray-800"> Material UI</span>.Experienced in delivering enterprise-grade financial platforms, AI dashboards, and compliance-driven tools with measurable performance gains and excellent UX.
                        </p>

                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row flex-wrap gap-4 pt-2">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => scrollToSection("contact")}
                                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-indigo-600 to-cyan-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-2xl hover:from-indigo-700 hover:to-cyan-600 transition-all"
                            >
                                Get In Touch
                                <ExternalLink className="ml-2 w-4 h-4" />
                            </motion.button>

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => scrollToSection("projects")}
                                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 border-[3px] border-indigo-600 text-indigo-600 font-semibold rounded-xl hover:bg-indigo-600 hover:text-white transition-all"
                            >
                                View Projects
                                <Code className="ml-2 w-4 h-4" />
                            </motion.button>
                        </div>
                    </motion.div>


                    {/* Right Profile Card */}
                    <motion.div
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                        initial={{ scale: 0.95, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        className="flex justify-center lg:justify-end"
                    >
                        <motion.div
                            whileHover={{ rotateY: 5, rotateX: -5, scale: 1.02 }}
                            transition={{ type: "spring", stiffness: 180 }}
                            className="relative group"
                        >
                            {/* Glow effect */}
                            <div className="absolute inset-0 w-64 sm:w-80 h-64 sm:h-80 rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-cyan-500 blur-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" />

                            {/* Profile Card */}
                            <div className="relative w-60 sm:w-72 h-72 sm:h-80 rounded-3xl shadow-2xl bg-white/80 backdrop-blur-md flex flex-col items-center justify-center p-6 border border-gray-200 hover:border-indigo-200 transition-colors">
                                {/* Profile Image */}
                                <div className="relative w-28 sm:w-32 h-28 sm:h-32 rounded-full overflow-hidden shadow-lg ring-4 ring-white ring-offset-2 ring-offset-white group-hover:ring-indigo-200 transition-all">
                                    <img
                                        alt="Ajay Pal"
                                        src={profileImg}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                </div>

                                {/* Name & Title */}
                                <h3 className="mt-4 sm:mt-5 text-xl sm:text-2xl font-bold text-gray-800 group-hover:text-indigo-600 transition-colors">
                                    Ajay Pal
                                </h3>
                                <p className="text-gray-500 text-xs sm:text-sm tracking-wide">Software Developer</p>

                                {/* Social Icons */}
                                <div className="mt-4 sm:mt-5 flex space-x-3">
                                    <a
                                        aria-label="Visit LinkedIn profile"
                                        href="https://linkedin.com/in/ajay-pal"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2 bg-indigo-100 text-indigo-600 rounded-full hover:bg-indigo-600 hover:text-white transition-colors duration-300"
                                    >
                                        <Linkedin size={18} />
                                    </a>
                                    <a
                                        aria-label="Visit GitHub profile"
                                        href="https://github.com/ajay-pal"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-800 hover:text-white transition-colors duration-300"
                                    >
                                        <Github size={18} />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Scroll down indicator */}
                <motion.div
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, repeat: Infinity, repeatType: "mirror" }}
                    className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-gray-400"
                >
                    <ChevronDown size={28} className="animate-bounce" />
                </motion.div>
            </div>
        </section>
    );
});
