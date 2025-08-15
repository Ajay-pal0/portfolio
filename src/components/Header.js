import React, { useState, useEffect } from "react";
import { navItems, socialLinks, profileData } from "../constants/data";
import { useScrollToSection, useMousePosition, useActiveSection } from "../hooks";
import { X, ChevronUp, Linkedin, Github, Twitter, Sparkles } from "lucide-react";

export const Header = () => {
  const mousePosition = useMousePosition("header");
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
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled
          ? "bg-white/95 backdrop-blur-xl shadow-xl border-b border-gray-200/50"
          : "bg-white/80 backdrop-blur-md border-b border-transparent"
          }`}
        style={{
          background: isScrolled
            ? `rgba(255, 255, 255, 0.95)`
            : `radial-gradient(circle at ${mousePosition.x}px 50px, rgba(99, 102, 241, 0.05) 0%, rgba(255, 255, 255, 0.8) 70%)`
        }}
      >
        {/* Top gradient line */}
        <div className={`h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 transition-opacity duration-500 ${isScrolled ? 'opacity-100' : 'opacity-0'}`} />

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
                  src={profileData.profileImage}
                  alt={profileData.name}
                  className="w-10 h-10 rounded-full object-cover ring-2 ring-white shadow-lg transition-all duration-300 group-hover:ring-purple-600"
                />
                {/* Optional subtle hover effect behind the ring */}
                <div className="absolute -inset-1 rounded-full border-2 border-transparent group-hover:border-gradient-to-r from-indigo-600 to-cyan-500 pointer-events-none" />
              </div>

              {/* Name and Title */}
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-black bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent">
                  {profileData.name}
                </span>
                <span className="text-xs text-gray-500 font-medium tracking-wide">
                  {profileData.title}
                </span>

                {/* Gradient Underline (visible on hover) */}
                <div className="mt-1 w-0 h-1 bg-gradient-to-r from-indigo-600 to-cyan-500 rounded-full transition-all duration-300 group-hover:w-full" />
              </div>

              {/* Sparkle Icon */}
              <Sparkles className="w-4 h-4 text-indigo-400 opacity-30 animate-pulse" />
            </button>

            {/* Desktop Nav */}
            <div className="hidden lg:block">
              <ul className="flex items-center space-x-1 bg-gray-50/80 backdrop-blur-sm rounded-2xl p-2 border border-gray-200/50">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = activeSection === item.href;
                  return (
                    <li key={item.href}>
                      <button
                        onClick={() => scrollToSection(item.href)}
                        aria-label={`Go to ${item.label}`}
                        className={`group relative flex items-center space-x-2 px-4 py-2.5 rounded-xl font-medium transition-all duration-300 ${isActive
                          ? "bg-white text-indigo-600 shadow-lg shadow-indigo-500/20"
                          : "text-gray-600 hover:text-indigo-600 hover:bg-white/50"
                          }`}
                      >
                        <Icon className={`w-4 h-4 transition-transform duration-300 ${isActive ? 'scale-110' : 'group-hover:scale-110'}`} />
                        <span className="text-sm">{item.label}</span>
                        {isActive && <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-indigo-600 rounded-full animate-pulse" />}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Social & CTA */}
            <div className="hidden md:flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                {socialLinks.map((social) => (
                  <a
                    key={social.type}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.type}
                    className="group relative p-2.5 rounded-xl bg-gray-50/80 hover:bg-white text-gray-600 hover:text-indigo-600 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/20 transform hover:scale-105"
                  >
                    {social.type === "linkedin" && <Linkedin className="w-4 h-4 group-hover:scale-110 transition-transform" />}
                    {social.type === "github" && <Github className="w-4 h-4 group-hover:scale-110 transition-transform" />}
                    {social.type === "twitter" && <Twitter className="w-4 h-4 group-hover:scale-110 transition-transform" />}
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none capitalize">
                      {social.type}
                    </div>
                  </a>
                ))}
              </div>
              <button
                onClick={() => scrollToSection("contact")}
                className="group relative px-6 py-2.5 bg-gradient-to-r from-indigo-600 to-cyan-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:shadow-indigo-500/25 transform hover:scale-105 transition-all duration-300 overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative text-sm">Let's Talk</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              aria-label="Toggle mobile menu"
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden relative p-2.5 rounded-xl bg-gray-50/80 text-gray-600 hover:text-indigo-600 hover:bg-white transition-all duration-300 transform hover:scale-105"
            >
              <div className="relative w-6 h-6">
                <span className={`absolute block h-0.5 w-6 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 top-3' : 'top-1'}`} />
                <span className={`absolute block h-0.5 w-6 bg-current transition-all duration-300 top-3 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
                <span className={`absolute block h-0.5 w-6 bg-current transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 top-3' : 'top-5'}`} />
              </div>
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden transition-all duration-300 ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Mobile Menu */}
      <div
        className={`fixed right-0 top-0 h-full w-80 bg-white/95 backdrop-blur-xl shadow-2xl z-50 md:hidden flex flex-col transform transition-all duration-300 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex items-center justify-between p-6 border-b border-gray-200/50 bg-gradient-to-r from-indigo-50 to-cyan-50">
          <div className="flex items-center space-x-3">
            <img
              src={profileData.profileImage}
              alt={profileData.name}
              loading="lazy"
              className="w-10 h-10 rounded-full object-cover ring-2 ring-white shadow-lg"
            />
            <div>
              <h3 className="font-bold text-gray-800">{profileData.name}</h3>
              <p className="text-sm text-gray-500">{profileData.title}</p>
            </div>
          </div>
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="p-2 rounded-lg text-gray-600 hover:text-indigo-600 hover:bg-white/50 transition-colors"
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
                  style={{ animationDelay: `${index * 50}ms` }}
                  className={`transform transition-all duration-300 ${isMobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'}`}
                >
                  <button
                    onClick={() => {
                      scrollToSection(item.href);
                      setMobileMenuOpen(false);
                    }}
                    className={`group flex items-center space-x-3 w-full p-3 rounded-xl transition-all duration-300 ${isActive
                      ? 'bg-gradient-to-r from-indigo-500 to-cyan-500 text-white shadow-lg'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-indigo-600'
                      }`}
                  >
                    <Icon className={`w-5 h-5 transition-transform duration-300 ${isActive ? 'scale-110' : 'group-hover:scale-110'}`} />
                    <span className="font-medium">{item.label}</span>
                    {isActive && <div className="ml-auto w-2 h-2 bg-white rounded-full animate-pulse" />}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="p-6 border-t border-gray-200/50 bg-gray-50/50">
          <div className="flex justify-center space-x-4 mb-4">
            {socialLinks.map((social) => (
              <a
                key={social.type}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.type}
                className="p-3 rounded-xl bg-white text-gray-600 hover:text-indigo-600 transition-colors shadow-sm hover:shadow-md"
              >
                {social.type === "linkedin" && <Linkedin className="w-5 h-5" />}
                {social.type === "github" && <Github className="w-5 h-5" />}
                {social.type === "twitter" && <Twitter className="w-5 h-5" />}
              </a>
            ))}
          </div>
          <button
            onClick={() => {
              scrollToSection("contact");
              setMobileMenuOpen(false);
            }}
            className="w-full px-6 py-3 bg-gradient-to-r from-indigo-600 to-cyan-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Get In Touch
          </button>
        </div>
      </div>

      {/* Back to Top */}
      <button
        onClick={() => scrollToSection("home")}
        aria-label="Back to top"
        className={`fixed bottom-6 right-6 p-4 rounded-full shadow-xl bg-gradient-to-r from-indigo-600 to-cyan-500 text-white z-40 transform transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-indigo-500/25 ${isScrolled ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0 pointer-events-none'}`}
      >
        <ChevronUp className="w-5 h-5" />
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-600 to-cyan-500 animate-ping opacity-30" />
      </button>

      {/* Scroll Progress */}
      <div
        className={`fixed top-0 left-0 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 z-50 transition-all duration-300 ${isScrolled ? 'w-full' : 'w-0'}`}
        style={{
          width: `${Math.min(100, (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100)}%`
        }}
      />
    </>
  );
};
