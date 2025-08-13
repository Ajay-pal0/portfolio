import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { skillCategories, certificates } from "../constants/data";
import SectionTitle from "./SectionTitle";

export const SkillsAndCertifications = React.memo(() => {
    return (
        <section
            id="skills"
            className="relative py-20 sm:py-24 bg-gray-50 overflow-hidden"
        >
            {/* Animated background blobs */}
            <motion.div
                animate={{ x: [0, 12, -12, 0], y: [0, -8, 8, 0] }}
                transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 left-0 w-48 sm:w-64 h-48 sm:h-64 bg-indigo-300 rounded-full opacity-15 blur-3xl -translate-x-1/2 -translate-y-1/2"
            />
            <motion.div
                animate={{ x: [0, -12, 12, 0], y: [0, 8, -8, 0] }}
                transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-0 right-0 w-56 sm:w-72 h-56 sm:h-72 bg-cyan-300 rounded-full opacity-15 blur-3xl translate-x-1/3 translate-y-1/3"
            />

            <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-6xl">
                <SectionTitle title="Skills & Certifications" />

                {/* Skills */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                        hidden: {},
                        visible: { transition: { staggerChildren: 0.05 } },
                    }}
                    className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-12 items-stretch"
                >
                    {skillCategories.map((category) => (
                        <motion.div
                            key={category.title}
                            viewport={{ once: true }}
                            className="relative group h-full"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                        >
                            {/* Glow */}
                            <div className="absolute -inset-4 rounded-2xl bg-gradient-to-br from-indigo-500 via-purple-500 to-cyan-500 blur-xl opacity-15 group-hover:opacity-30 transition-opacity duration-500" />

                            {/* Card */}
                            <div className="relative bg-white rounded-2xl shadow-lg border border-gray-100 p-6 sm:p-7 h-full flex flex-col justify-between transform transition-all duration-300 group-hover:-translate-y-1 group-hover:scale-[1.02] group-hover:shadow-xl">
                                <div>
                                    <div className="flex items-center space-x-3 mb-5">
                                        <category.icon className="w-7 h-7 text-indigo-600" />
                                        <h3 className="text-lg font-semibold text-gray-900">
                                            {category.title}
                                        </h3>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {category.skills.map((skill) => (
                                            <span
                                                key={skill}
                                                className="px-3 py-1.5 bg-gray-100 text-gray-700 text-xs rounded-full hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Certifications */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                        hidden: {},
                        visible: { transition: { staggerChildren: 0.05 } },
                    }}
                    className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-16 items-stretch"
                >
                    {certificates.map((cert, index) => (
                        <motion.a
                            key={cert.title}
                            href={cert.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05, duration: 0.5 }}
                            className="relative group h-full"
                        >
                            {/* Glow */}
                            <div className="absolute -inset-4 rounded-2xl bg-gradient-to-br from-indigo-500 via-purple-500 to-cyan-500 blur-xl opacity-15 group-hover:opacity-30 transition-opacity duration-500" />

                            {/* Card */}
                            <div className="relative bg-white rounded-2xl shadow-lg border border-gray-100 p-6 sm:p-7 h-full flex flex-col justify-between items-center text-center transform transition-all duration-300 group-hover:-translate-y-1 group-hover:scale-[1.02] group-hover:shadow-xl">
                                <div className="text-4xl mb-4">{cert.icon}</div>
                                <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-indigo-600 transition-colors">
                                    {cert.title}
                                </h3>
                                <p className="text-indigo-600 font-medium text-sm mb-1">{cert.issuer}</p>
                                <p className="text-xs text-gray-400 mb-4">{cert.date}</p>
                                <span className="inline-flex items-center text-indigo-600 hover:text-indigo-700 text-sm font-medium">
                                    <ExternalLink className="w-4 h-4 mr-2" /> View Certificate
                                </span>
                            </div>
                        </motion.a>
                    ))}
                </motion.div>

            </div>
        </section>
    );
});
