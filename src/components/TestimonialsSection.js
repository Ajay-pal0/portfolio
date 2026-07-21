import React from "react";
import { testimonialsData } from "../data";
import { MessageSquare, Quote } from "lucide-react";
import { useMousePosition } from "../hooks";

// Section Title Component
const SectionTitle = ({ title, subtitle }) => (
    <div className="text-center mb-16">
        <div className="inline-flex items-center justify-center p-2.5 bg-indigo-50 dark:bg-indigo-950/40 rounded-full mb-4 border border-indigo-100 dark:border-indigo-800/20">
            <MessageSquare className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
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

export const TestimonialsSection = () => {
    const mousePosition = useMousePosition('testimonials');

    return (
        <section
            id="testimonials"
            className="relative py-20 sm:py-28 overflow-hidden bg-slate-50 dark:bg-[#080b11] transition-colors border-t border-slate-200/40 dark:border-slate-800/30"
            style={{
                background: `
                  radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(99, 102, 241, 0.04) 0%, transparent 60%)
                `
            }}
        >
            <div className="container mx-auto px-6 sm:px-8 relative z-10">
                <SectionTitle 
                    title="Client Testimonials" 
                    subtitle="Feedback from project stakeholders and product managers I have collaborated with."
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {testimonialsData.map((testimonial, index) => (
                        <div
                            key={index}
                            className="glass-panel p-8 sm:p-10 rounded-3xl relative overflow-hidden flex flex-col justify-between hover:scale-[1.01] transition-transform group"
                        >
                            {/* Decorative background quote icon */}
                            <div className="absolute -top-4 -right-4 w-28 h-28 opacity-5 dark:opacity-5 text-indigo-600 pointer-events-none group-hover:scale-110 transition-transform">
                                <Quote className="w-full h-full" />
                            </div>

                            <div className="relative z-10 text-left">
                                {/* Quote Icon */}
                                <div className="p-3 bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-100 dark:border-indigo-800/20 text-indigo-600 dark:text-indigo-400 w-11 h-11 rounded-xl flex items-center justify-center mb-6">
                                    <Quote size={18} />
                                </div>

                                {/* Review text */}
                                <p className="text-slate-600 dark:text-slate-300 leading-relaxed italic text-sm sm:text-base font-semibold mb-6">
                                    "{testimonial.feedback}"
                                </p>
                            </div>

                            {/* Author info */}
                            <div className="flex items-center gap-4 border-t border-slate-200/50 dark:border-slate-800/40 pt-6 mt-2 text-left relative z-10">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-indigo-500 to-cyan-400 flex items-center justify-center text-white font-extrabold text-lg shadow-md select-none">
                                    {testimonial.name.charAt(0)}
                                </div>
                                <div>
                                    <h4 className="font-extrabold text-sm sm:text-base text-slate-800 dark:text-slate-100 leading-tight">
                                        {testimonial.name}
                                    </h4>
                                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 font-bold">
                                        {testimonial.role} • <span className="text-indigo-600 dark:text-indigo-400">{testimonial.company}</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
