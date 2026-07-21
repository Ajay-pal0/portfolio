import React from "react";
import { personalData } from "../data";
import { Github, Linkedin, Twitter, Heart, Code2, Sparkles } from "lucide-react";

export const Footer = React.memo(() => {
    const socialLinks = [
        {
            name: "LinkedIn", 
            href: personalData.linkedin,
            icon: Linkedin,
            color: "text-slate-500 hover:text-indigo-600 dark:hover:text-indigo-400"
        },
        {
            name: "GitHub",
            href: personalData.github,
            icon: Github,
            color: "text-slate-500 hover:text-slate-900 dark:hover:text-white"
        },
        {
            name: "Twitter",
            href: personalData.twitter,
            icon: Twitter,
            color: "text-slate-500 hover:text-sky-600 dark:hover:text-sky-400"
        }
    ];

    return (
        <footer className="relative py-14 bg-slate-100 dark:bg-[#06090e] border-t border-slate-200/50 dark:border-slate-800/40 overflow-hidden text-slate-600 dark:text-slate-400 transition-colors">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.04] pointer-events-none">
                <div className="h-full w-full bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.4)_1px,transparent_1px)] bg-[length:28px_28px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-2xl mx-auto text-center space-y-8">
                    
                    {/* Brand */}
                    <div>
                        <h3 className="text-2xl font-black bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500 dark:from-indigo-400 dark:via-purple-400 dark:to-cyan-400 bg-clip-text text-transparent mb-2 inline-flex items-center gap-1.5">
                            {personalData.name}
                            <Sparkles className="w-5 h-5 text-indigo-500 animate-pulse" />
                        </h3>
                        <p className="text-slate-500 dark:text-slate-400 text-sm font-semibold tracking-wide uppercase">{personalData.title}</p>
                    </div>

                    {/* Social Links */}
                    <div className="flex justify-center space-x-2">
                        {socialLinks.map((social) => {
                            const IconComponent = social.icon;
                            return (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.name}
                                    className={`group relative p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/20 dark:border-slate-800/50 shadow-sm transition-all duration-300 hover:scale-110 hover:-translate-y-0.5 ${social.color}`}
                                >
                                    <IconComponent className="w-5 h-5 transition-transform duration-300 group-hover:rotate-6" />
                                </a>
                            );
                        })}
                    </div>

                    {/* Divider */}
                    <div className="flex items-center justify-center">
                        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-850 to-transparent max-w-xs" />
                        <div className="mx-4 p-2 bg-white dark:bg-slate-900 rounded-full border border-slate-200/25 dark:border-slate-800/40 shadow-sm">
                            <Code2 className="w-4 h-4 text-slate-400" />
                        </div>
                        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-850 to-transparent max-w-xs" />
                    </div>

                    {/* Copyright */}
                    <div className="space-y-2 text-xs sm:text-sm font-semibold text-slate-500 dark:text-slate-455">
                        <p>© {new Date().getFullYear()} {personalData.name}. All rights reserved.</p>
                        <div className="flex flex-wrap items-center justify-center gap-1.5">
                            <span>Built with</span>
                            <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" />
                            <span>React</span>·<span>Tailwind CSS</span>·<span>Framer Motion</span>
                        </div>
                    </div>

                    {/* Status Badge */}
                    <div 
                        className="inline-flex items-center space-x-2 px-4 py-2 bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-250/20 dark:border-emerald-900/30 rounded-full text-xs font-bold text-emerald-600 dark:text-emerald-400 cursor-pointer hover:scale-105 transition-all"
                        onClick={() => window.open(personalData.linkedin, "_blank")}
                    >
                        <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse" />
                        <span>{personalData.status}</span>
                    </div>

                </div>
            </div>

            {/* Bottom Accent Line */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500" />
        </footer>
    );
});
