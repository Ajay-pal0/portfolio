import React from "react";
import { scrollToSection } from "../utils/utils";
import { motion, useScroll } from "framer-motion";
import profileImg from "../assets/images/profile.jpg";
import { navItems, socialLinks } from "../constants/data";
import { Menu, X, ChevronUp, Linkedin, Github, Twitter } from "lucide-react";

export const Header = () => {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState("home");
  const [isMobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  // Detect scroll for header shadow
  React.useEffect(() => {
    const unsub = scrollY.on("change", (v) => setIsScrolled(v > 80));
    return () => unsub();
  }, [scrollY]);

  // Active section highlight
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.6 }
    );

    navItems.forEach((item) => {
      const section = document.getElementById(item.href);
      if (section) observer.observe(section);
    });
    return () => observer.disconnect();
  }, []);

  // Lock scroll when menu open
  React.useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* Header */}
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className={`fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md z-40 border-b border-transparent transition-all ${isScrolled ? "shadow-lg border-gray-200" : ""
          }`}
      >
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between py-4">
            {/* Logo with Animation */}
            <motion.button
              onClick={() => scrollToSection("home")}
              aria-label="Go to Home"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative flex items-center space-x-2"
            >
              {/* Profile Image */}
              <motion.img
                src={profileImg}
                alt="Ajay Pal"
                className="w-10 h-10 rounded-full border-2 border-indigo-500 shadow-md"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              />

              {/* Name with underline */}
              <span className="relative">
                <span className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-indigo-600 to-cyan-500 bg-clip-text text-transparent">
                  Ajay Pal
                </span>
                <motion.span
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.6, delay: 0.3, ease: "easeInOut" }}
                  className="absolute -bottom-1.5 left-0 h-[2px] bg-gradient-to-r from-indigo-600 to-cyan-500"
                />
              </span>
            </motion.button>

            {/* Desktop Nav */}
            <ul className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <li key={item.href}>
                  <button
                    onClick={() => scrollToSection(item.href)}
                    aria-label={`Go to ${item.label}`}
                    className={`font-medium relative transition-colors ${activeSection === item.href
                      ? "text-indigo-600"
                      : "text-gray-600 hover:text-indigo-600"
                      }`}
                  >
                    {item.label}
                    <motion.span
                      layoutId="activeNav"
                      className={`absolute -bottom-1 left-0 h-0.5 bg-indigo-600 ${activeSection === item.href ? "w-full" : "w-0"
                        }`}
                      transition={{ duration: 0.3 }}
                    />
                  </button>
                </li>
              ))}
            </ul>

            {/* Social Links (desktop) */}
            <div className="hidden md:flex items-center space-x-3">
              {socialLinks.map((s) => (
                <a
                  key={s.type}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.type}
                  className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  {s.type === "linkedin" && <Linkedin className="w-5 h-5" />}
                  {s.type === "github" && <Github className="w-5 h-5" />}
                  {s.type === "twitter" && <Twitter className="w-5 h-5" />}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              aria-label="Toggle mobile menu"
              onClick={() => setMobileMenuOpen((v) => !v)}
              className="md:hidden text-gray-600 hover:text-indigo-600 transition-colors"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: isMobileMenuOpen ? 0.5 : 0,
          pointerEvents: isMobileMenuOpen ? "auto" : "none",
        }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 bg-black z-30 md:hidden"
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Mobile Menu */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: isMobileMenuOpen ? 0 : "100%" }}
        transition={{ duration: 0.3 }}
        className="fixed right-0 top-0 h-full w-64 bg-white shadow-xl z-40 md:hidden flex flex-col"
      >
        <div className="flex items-center justify-between p-4 border-b">
          <span className="text-xl font-bold text-indigo-600">Menu</span>
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="text-gray-600 hover:text-indigo-600"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>
        <nav className="p-4 flex-1">
          <ul className="space-y-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <button
                  onClick={() => {
                    scrollToSection(item.href);
                    setMobileMenuOpen(false);
                  }}
                  className="block w-full text-left py-2 text-gray-800 hover:text-indigo-600 transition-colors"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
        <div className="p-4 border-t flex space-x-3">
          {socialLinks.map((s) => (
            <a
              key={s.type}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.type}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {s.type === "linkedin" && <Linkedin className="w-5 h-5" />}
              {s.type === "github" && <Github className="w-5 h-5" />}
              {s.type === "twitter" && <Twitter className="w-5 h-5" />}
            </a>
          ))}
        </div>
      </motion.div>

      {/* Back to Top Button */}
      <motion.button
        onClick={() => scrollToSection("home")}
        aria-label="Back to top"
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: isScrolled ? 1 : 0,
          y: isScrolled ? 0 : 20,
        }}
        transition={{ duration: 0.3 }}
        className="fixed bottom-6 right-6 p-3 rounded-full shadow-lg bg-white border hover:bg-gray-50 transition-colors"
      >
        <ChevronUp />
      </motion.button>
    </>
  );
};
