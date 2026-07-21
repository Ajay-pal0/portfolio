import React, { useState, useEffect } from "react";
import { personalData } from "../data";
import { useScrollToSection, useMousePosition, useActiveSection, useTheme } from "../hooks";
import { X, ChevronUp, Linkedin, Github, Sun, Moon, Home, User, Briefcase, Mail, Code2 } from "lucide-react";

export const Header = () => {
  const mousePosition = useMousePosition("header");
  const { toggleTheme, isDark } = useTheme();
  
  const navItems = [
    { href: "home", label: "Home", icon: Home },
    { href: "about", label: "About", icon: User },
    { href: "experience", label: "Experience", icon: Briefcase },
    { href: "skills", label: "Skills", icon: Code2 },
    { href: "projects", label: "Projects", icon: Code2 },
    { href: "contact", label: "Contact", icon: Mail }
  ];

  const sectionIds = navItems.map((item) => item.href);
  const activeSection = useActiveSection(sectionIds);
  const { scrollToSection } = useScrollToSection();
  
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Detect scroll for header effects
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock scroll when menu open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* Header */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-white/80 dark:bg-[#080b11]/85 backdrop-blur-xl shadow-lg border-b border-slate-200/50 dark:border-slate-800/30"
            : "bg-white/40 dark:bg-transparent backdrop-blur-sm border-b border-transparent"
        }`}
        style={{
          background: isScrolled
            ? undefined
            : `radial-gradient(circle at ${mousePosition.x}px 50px, rgba(99, 102, 241, 0.04) 0%, transparent 70%)`
        }}
      >
        {/* Top gradient line */}
        <div className={`h-[3px] bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 transition-opacity duration-500 ${isScrolled ? 'opacity-100' : 'opacity-0'}`} />

        <div className="container mx-auto px-6">
          <nav className="flex items-center justify-between py-4">

            {/* Logo */}
            <button
              onClick={() => scrollToSection("home")}
              aria-label="Go to Home"
              className="flex items-center space-x-3 group"
            >
              {/* Profile Image with gradient ring on hover */}
              <div className="relative">
                <img
                  src={process.env.PUBLIC_URL + personalData.profileImage}
                  alt={personalData.name}
                  className="w-10 h-10 rounded-full object-cover ring-2 ring-indigo-500/20 dark:ring-indigo-400/20 shadow-md transition-all duration-300 group-hover:ring-indigo-500"
                />
              </div>

              {/* Name and Title */}
              <div className="flex flex-col text-left">
                <span className="text-xl sm:text-2xl font-black bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500 dark:from-indigo-400 dark:via-purple-400 dark:to-cyan-400 bg-clip-text text-transparent">
                  {personalData.name}
                </span>
                <span className="text-[10px] text-slate-500 dark:text-slate-400 font-semibold tracking-wider uppercase">
                  {personalData.title}
                </span>
              </div>
            </button>

            {/* Desktop Nav */}
            <div className="hidden lg:block">
              <ul className="flex items-center space-x-1 bg-slate-100/70 dark:bg-slate-900/60 backdrop-blur-md rounded-2xl p-1.5 border border-slate-200/30 dark:border-slate-800/30">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = activeSection === item.href;
                  return (
                    <li key={item.href}>
                      <button
                        onClick={() => scrollToSection(item.href)}
                        aria-label={`Go to ${item.label}`}
                        className={`group relative flex items-center space-x-1.5 px-4 py-2 rounded-xl font-semibold transition-all duration-300 ${
                          isActive
                            ? "bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 shadow-md"
                            : "text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-white/40 dark:hover:bg-slate-800/30"
                        }`}
                      >
                        <Icon className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
                        <span className="text-sm">{item.label}</span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Actions & Theme Toggler */}
            <div className="hidden md:flex items-center space-x-4">
              {/* Theme Toggler */}
              <button
                onClick={toggleTheme}
                aria-label="Toggle theme"
                className="p-2.5 rounded-xl bg-slate-100/80 dark:bg-slate-900/80 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-white dark:hover:bg-slate-800 border border-slate-200/20 dark:border-slate-800/50 shadow-sm transition-all duration-300 hover:scale-105"
              >
                {isDark ? <Sun className="w-5 h-5 animate-spin-slow" /> : <Moon className="w-5 h-5" />}
              </button>

              {/* Social Links */}
              <div className="flex items-center space-x-1">
                <a
                  href={personalData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="group p-2.5 rounded-xl bg-slate-100/80 dark:bg-slate-900/80 text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-white dark:hover:bg-slate-800 transition-all duration-300 hover:shadow-md hover:shadow-indigo-500/10 transform hover:scale-105 border border-slate-200/20 dark:border-slate-800/50"
                >
                  <Linkedin className="w-4 h-4 group-hover:scale-110 transition-transform" />
                </a>
                <a
                  href={personalData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="group p-2.5 rounded-xl bg-slate-100/80 dark:bg-slate-900/80 text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-white dark:hover:bg-slate-800 transition-all duration-300 hover:shadow-md hover:shadow-indigo-500/10 transform hover:scale-105 border border-slate-200/20 dark:border-slate-800/50"
                >
                  <Github className="w-4 h-4 group-hover:scale-110 transition-transform" />
                </a>
              </div>

              <button
                onClick={() => scrollToSection("contact")}
                className="group relative px-5 py-2.5 bg-gradient-to-r from-indigo-600 to-cyan-500 text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:shadow-indigo-500/20 transform hover:scale-105 transition-all duration-300 overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative text-sm">Let's Talk</span>
              </button>
            </div>

            {/* Mobile Actions Container */}
            <div className="flex md:hidden items-center space-x-2">
              <button
                onClick={toggleTheme}
                aria-label="Toggle theme"
                className="p-2 rounded-xl bg-slate-100/80 dark:bg-slate-900/80 text-slate-700 dark:text-slate-300 border border-slate-200/20 dark:border-slate-800/50"
              >
                {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>

              {/* Mobile Menu Button */}
              <button
                aria-label="Toggle mobile menu"
                onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-xl bg-slate-100/80 dark:bg-slate-900/80 text-slate-700 dark:text-slate-300 border border-slate-200/20 dark:border-slate-800/50 transition-all duration-300"
              >
                <div className="relative w-6 h-6">
                  <span className={`absolute block h-0.5 w-5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 top-3' : 'top-1.5'}`} />
                  <span className={`absolute block h-0.5 w-5 bg-current transition-all duration-300 top-3 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
                  <span className={`absolute block h-0.5 w-5 bg-current transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 top-3' : 'top-4'}`} />
                </div>
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden transition-all duration-300 ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Mobile Menu */}
      <div
        className={`fixed right-0 top-0 h-full w-80 bg-white/95 dark:bg-[#090d16]/95 backdrop-blur-xl shadow-2xl z-50 md:hidden flex flex-col transform transition-all duration-300 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex items-center justify-between p-6 border-b border-slate-200/50 dark:border-slate-800/50 bg-slate-50/50 dark:bg-slate-900/30">
          <div className="flex items-center space-x-3 text-left">
            <img
              src={process.env.PUBLIC_URL + personalData.profileImage}
              alt={personalData.name}
              className="w-10 h-10 rounded-full object-cover ring-2 ring-indigo-500/20 shadow-md"
            />
            <div>
              <h3 className="font-bold text-slate-800 dark:text-slate-100">{personalData.name}</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">{personalData.title}</p>
            </div>
          </div>
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>

        <nav className="flex-1 p-6">
          <ul className="space-y-2">
            {navItems.map((item, index) => {
              const Icon = item.icon;
              const isActive = activeSection === item.href;
              return (
                <li
                  key={item.href}
                  className={`transform transition-all duration-300 ${isMobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'}`}
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  <button
                    onClick={() => {
                      scrollToSection(item.href);
                      setMobileMenuOpen(false);
                    }}
                    className={`group flex items-center space-x-3 w-full p-3 rounded-xl transition-all duration-300 ${
                      isActive
                        ? 'bg-gradient-to-r from-indigo-600 to-cyan-500 text-white shadow-md'
                        : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/50 hover:text-indigo-600 dark:hover:text-indigo-400'
                    }`}
                  >
                    <Icon className="w-5 h-5 transition-transform" />
                    <span className="font-semibold">{item.label}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="p-6 border-t border-slate-200/50 dark:border-slate-800/50 bg-slate-50/50 dark:bg-slate-900/30">
          <div className="flex justify-center space-x-4 mb-4">
            <a
              href={personalData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-3 rounded-xl bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all shadow-sm border border-slate-200/20 dark:border-slate-800/50"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href={personalData.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-3 rounded-xl bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all shadow-sm border border-slate-200/20 dark:border-slate-800/50"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
          <button
            onClick={() => {
              scrollToSection("contact");
              setMobileMenuOpen(false);
            }}
            className="w-full px-6 py-3 bg-gradient-to-r from-indigo-600 to-cyan-500 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Get In Touch
          </button>
        </div>
      </div>

      {/* Back to Top */}
      <button
        onClick={() => scrollToSection("home")}
        aria-label="Back to top"
        className={`fixed bottom-6 right-6 p-3 rounded-full shadow-lg bg-gradient-to-r from-indigo-600 to-cyan-500 text-white z-40 transform transition-all duration-300 hover:scale-110 hover:shadow-xl ${isScrolled ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0 pointer-events-none'}`}
      >
        <ChevronUp className="w-5 h-5" />
      </button>

      {/* Scroll Progress */}
      <div
        className={`fixed top-0 left-0 h-[3px] bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 z-50 transition-all duration-300 ${isScrolled ? 'w-full' : 'w-0'}`}
        style={{
          width: `${Math.min(100, (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100)}%`
        }}
      />
    </>
  );
};
