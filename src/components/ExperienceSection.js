import React from "react";
import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import { experiences } from "../constants/data";

export const ExperienceSection = React.memo(() => {
    return (
        <section id="experience" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <SectionTitle title="Experience" />

                <div className="max-w-5xl mx-auto relative">
                    {/* Timeline line */}
                    <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-indigo-200 via-indigo-300 to-indigo-200" />

                    <div className="space-y-16 pb-6">
                        {experiences.map((exp, index) => (
                            <div
                                key={exp.title + index}
                                className={`relative flex items-start ${index % 2 === 1 ? "md:justify-end" : ""
                                    }`}
                            >
                                {/* Timeline dot */}
                                <div className="absolute left-2 top-6 md:left-1/2 md:-translate-x-1/2 w-5 h-5 bg-indigo-600 rounded-full border-4 border-white shadow-md z-10" />

                                {/* Card Container */}
                                <motion.div
                                    initial={{
                                        opacity: 0,
                                        y: 40,
                                        x: index % 2 === 0 ? -40 : 40, // animate from side
                                        scale: 0.95,
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        y: 0,
                                        x: 0,
                                        scale: 1,
                                    }}
                                    viewport={{ once: true, amount: 0.3 }}
                                    transition={{ duration: 0.6, ease: "easeOut" }}
                                    className={`ml-12 md:ml-0 md:w-5/12 ${index % 2 === 1 ? "md:pr-8" : "md:pl-8"
                                        }`}
                                >
                                    <div className="relative group">
                                        {/* Glow effect */}
                                        <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-indigo-500 via-purple-500 to-cyan-500 blur-2xl opacity-20 group-hover:opacity-35 transition-opacity duration-500" />

                                        {/* Card */}
                                        <div className="relative bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-gray-100 transform group-hover:-translate-y-1 group-hover:scale-[1.02]">
                                            {/* Period Badge */}
                                            <div className="inline-block bg-indigo-600 text-white px-4 py-1.5 rounded-full text-xs font-medium tracking-wide mb-4 shadow-sm">
                                                {exp.period}
                                            </div>

                                            {/* Title */}
                                            <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-indigo-600 transition-colors">
                                                {exp.title}
                                            </h3>

                                            {/* Company */}
                                            <p className="text-indigo-600 font-semibold text-sm mb-3">
                                                {exp.company}
                                            </p>

                                            {/* Description */}
                                            <p className="text-gray-600 leading-relaxed text-sm">
                                                {exp.description}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
});
