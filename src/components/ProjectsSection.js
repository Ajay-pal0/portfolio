import React from "react";
import { motion } from "framer-motion";
import { projects } from "../constants/data";
import { ExternalLink, Github } from "lucide-react";
import SectionTitle from "./SectionTitle";

export const ProjectsSection = React.memo(() => {
    return (
        <section id="projects" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <SectionTitle title=" Featured Projects" />

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 items-stretch">
                    {projects.map((project, index) => (
                        <motion.article
                            key={project.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.06 }}
                            className="relative group h-full"
                        >
                            {/* Glow Effect */}
                            <div className="absolute -inset-4 rounded-2xl bg-gradient-to-br from-indigo-500 via-purple-500 to-cyan-500 blur-xl opacity-15 group-hover:opacity-30 transition-opacity duration-500" />

                            {/* Card */}
                            <div className="relative bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden flex flex-col h-full transform transition-all duration-300 group-hover:-translate-y-1 group-hover:scale-[1.02] group-hover:shadow-xl">
                                <div
                                    className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center`}
                                >
                                    <span className="text-6xl">{project.icon}</span>
                                </div>
                                <div className="p-6 flex flex-col flex-grow">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-600 mb-4 leading-relaxed text-sm flex-grow">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.techs.map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex space-x-4 mt-auto">
                                        {project.demo && (
                                            <a
                                                href={project.demo}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center text-indigo-600 hover:text-indigo-700 text-sm font-medium"
                                            >
                                                <ExternalLink className="w-4 h-4 mr-2" /> Demo
                                            </a>
                                        )}
                                        {project.code && (
                                            <a
                                                href={project.code}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center text-indigo-600 hover:text-indigo-700 text-sm font-medium"
                                            >
                                                <Github className="w-4 h-4 mr-2" /> Code
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
});
