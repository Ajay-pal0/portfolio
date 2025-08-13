import React from "react";
import { motion } from "framer-motion";
import { Download, User, Mail, MapPin, Phone } from "lucide-react";
import SectionTitle from "./SectionTitle";
import { stats, personalInfo } from "../constants/data";

export const AboutSection = React.memo(() => {
    const iconMap = {
        Name: <User className="w-4 h-4 text-indigo-500" />,
        Email: <Mail className="w-4 h-4 text-indigo-500" />,
        Location: <MapPin className="w-4 h-4 text-indigo-500" />,
        Phone: <Phone className="w-4 h-4 text-indigo-500" />,
    };

    return (
        <section
            id="about"
            className="relative py-16 sm:py-24 bg-gray-50 overflow-hidden"
        >
            {/* Animated background blobs */}
            <motion.div
                animate={{ x: [0, 15, -15, 0], y: [0, -10, 10, 0] }}
                transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 left-0 w-48 sm:w-64 h-48 sm:h-64 bg-indigo-300 rounded-full opacity-20 blur-3xl -translate-x-1/2 -translate-y-1/2"
            />
            <motion.div
                animate={{ x: [0, -15, 15, 0], y: [0, 10, -10, 0] }}
                transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-0 right-0 w-56 sm:w-72 h-56 sm:h-72 bg-cyan-300 rounded-full opacity-20 blur-3xl translate-x-1/3 translate-y-1/3"
            />

            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                <SectionTitle title="About Me" />

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 sm:gap-14 items-start mt-10">

                    {/* Personal Info Card */}
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="lg:col-span-1"
                    >
                        <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-100 hover:shadow-2xl transition-shadow">
                            <h3 className="text-xl sm:text-2xl font-bold text-indigo-700 mb-6">
                                Personal Info
                            </h3>
                            <div className="space-y-4 sm:space-y-5">
                                {personalInfo.map((item, idx) => (
                                    <div
                                        key={idx}
                                        className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-sm md:text-base gap-1 sm:gap-2"
                                    >
                                        <div className="flex items-center space-x-2 sm:space-x-4">
                                            {iconMap[item.label] || null}
                                            <span className="font-semibold text-gray-700">
                                                {item.label}:
                                            </span>
                                        </div>
                                        <span className="text-gray-600 break-all">
                                            {item.value}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            {/* Download CV Button */}
                            <motion.a
                                aria-label="Download CV from Google Drive"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileTap={{ scale: 0.97 }}
                                whileHover={{ scale: 1.05 }}
                                href="https://drive.google.com/file/d/12oR541j6L7cnow6Al_tzlFtYaJmOWp9T/view?usp=drive_link"
                                className="mt-6 sm:mt-8 w-full inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-indigo-600 to-indigo-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-2xl transition-all text-sm sm:text-base relative overflow-hidden group"
                            >
                                <span className="absolute inset-0 bg-white/10 translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
                                Download CV
                                <Download className="ml-2 w-4 h-4" />
                            </motion.a>
                        </div>
                    </motion.div>

                    {/* Bio & Stats */}
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-2"
                    >
                        <div className="mb-8">
                            <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-4 sm:mb-6">
                                I'm a passionate{" "}
                                <span className="font-semibold text-indigo-600">
                                    Software Developer
                                </span>{" "}
                                with expertise in modern frontend technologies. I specialize in
                                creating scalable web and mobile applications using{" "}
                                <span className="font-medium text-gray-800">React.js</span>,{" "}
                                <span className="font-medium text-gray-800">React Native</span>,
                                and other cutting-edge tools. My experience spans accounting
                                software, AI dashboards, HRMS systems, and compliance-driven
                                tools — all built with a strong focus on performance and user
                                experience.
                            </p>
                        </div>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 sm:gap-6">
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ y: 10, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.05 }}
                                    className="relative bg-white/80 backdrop-blur-md rounded-xl shadow-lg p-5 sm:p-6 text-center hover:-translate-y-2 transition-transform border border-gray-100 hover:shadow-xl hover:border-indigo-200"
                                >
                                    <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-indigo-600 to-cyan-500 bg-clip-text text-transparent mb-1 sm:mb-2">
                                        {stat.number}
                                    </div>
                                    <div className="text-xs sm:text-sm text-gray-600 uppercase tracking-wide">
                                        {stat.label}
                                    </div>
                                    <div className="absolute inset-0 rounded-xl border border-transparent hover:border-indigo-300 transition-colors"></div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
});
