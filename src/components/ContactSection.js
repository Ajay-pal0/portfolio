import React from "react";
import { FloatingParticles } from "./common";
import { personalData } from "../data";
import { useContactForm, useMousePosition } from "../hooks";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Contact, Send, Sparkles } from "lucide-react";

// Section Title
const SectionTitle = ({ title, subtitle }) => (
  <div className="text-center mb-16 relative z-10">
    <div className="inline-flex items-center justify-center p-2.5 bg-indigo-50 dark:bg-indigo-950/40 rounded-full mb-4 border border-indigo-100 dark:border-indigo-800/20">
      <Contact className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
    </div>
    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">{title}</h2>
    <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-semibold">
      {subtitle}
    </p>
    <div className="mt-5 w-20 h-1.5 bg-gradient-to-r from-indigo-600 to-cyan-500 rounded-full mx-auto"></div>
  </div>
);

export const ContactSection = React.memo(() => {
  const { formData, isSubmitting, submitStatus, statusMessage, handleInputChange, handleSubmit } = useContactForm();
  const mousePosition = useMousePosition('contact');

  const iconMap = {
    Mail: <Mail className="w-5.5 h-5.5" />,
    Phone: <Phone className="w-5.5 h-5.5" />,
    MapPin: <MapPin className="w-5.5 h-5.5" />,
    Linkedin: <Linkedin className="w-5.5 h-5.5" />,
    Github: <Github className="w-5.5 h-5.5" />,
    Twitter: <Twitter className="w-5.5 h-5.5" />
  };

  const contactInfo = [
    { icon: "Mail", title: "Email", value: personalData.email, href: `mailto:${personalData.email}` },
    { icon: "Phone", title: "Phone", value: personalData.phone, href: `tel:${personalData.phone.replace(/\s+/g, '')}` },
    { icon: "MapPin", title: "Location", value: personalData.location },
  ];

  const socialLinks = [
    { icon: "Linkedin", href: personalData.linkedin, label: "LinkedIn" },
    { icon: "Github", href: personalData.github, label: "GitHub" },
    { icon: "Twitter", href: personalData.twitter, label: "Twitter" },
  ];

  return (
    <section
      id="contact"
      className="relative py-20 sm:py-28 overflow-hidden bg-slate-50 dark:bg-[#080b11] transition-colors border-t border-slate-200/40 dark:border-slate-800/30"
      style={{
        background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(99, 102, 241, 0.04) 0%, transparent 60%)`,
      }}
    >
      <FloatingParticles />

      <div className="container mx-auto px-6 sm:px-8 relative z-10 max-w-6xl">
        <SectionTitle 
          title="Let's Connect" 
          subtitle="I'm always open to discussing full-stack roles, system migrations, or new SaaS ventures."
        />

        <div className="grid lg:grid-cols-2 gap-10 items-stretch text-left">
          {/* Contact Details */}
          <div className="flex flex-col justify-between space-y-8">
            <div>
              <h3 className="text-xl sm:text-2xl font-black text-slate-800 dark:text-white mb-4">Contact Information</h3>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 font-semibold leading-relaxed mb-6">
                Feel free to reach out via email or phone. I usually respond within a few hours to schedule a talk.
              </p>

              <div className="space-y-4">
                {contactInfo.map((item) => (
                  <div
                    key={item.title}
                    className="group flex items-center space-x-4 p-4 bg-white/70 dark:bg-[#0e1424]/75 backdrop-blur-xl border border-white/50 dark:border-white/5 rounded-2xl hover:scale-[1.01] transition-all duration-300"
                  >
                    <div className="p-3 bg-gradient-to-br from-indigo-500 to-cyan-500 rounded-xl text-white group-hover:scale-105 transition-transform duration-300">
                      {iconMap[item.icon]}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-xs font-bold text-slate-500 dark:text-slate-455 uppercase tracking-wider">{item.title}</h4>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-sm sm:text-base font-extrabold text-slate-800 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-sm sm:text-base font-extrabold text-slate-855 dark:text-slate-200">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links card */}
            <div className="glass-panel p-6 rounded-3xl">
              <h4 className="text-sm font-bold text-slate-800 dark:text-slate-250 uppercase tracking-wider mb-4">Connect on Socials</h4>
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="group p-3 bg-slate-100/80 dark:bg-slate-900/60 text-slate-600 dark:text-slate-400 rounded-2xl hover:bg-gradient-to-r hover:from-indigo-600 hover:to-cyan-500 hover:text-white dark:hover:text-white transition-all transform hover:scale-110 hover:-translate-y-0.5 border border-slate-200/20 dark:border-slate-800/50 shadow-sm"
                  >
                    <div className="group-hover:scale-105 transition-transform">
                      {iconMap[social.icon]}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-panel p-8 sm:p-10 rounded-3xl relative overflow-hidden">
            <h3 className="text-xl sm:text-2xl font-black text-slate-800 dark:text-white mb-6">Send an Inquiry</h3>
            
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-250/20 text-emerald-600 dark:text-emerald-450 rounded-2xl flex items-start space-x-3 text-xs sm:text-sm font-semibold animate-fade-in">
                <Sparkles className="w-5 h-5 shrink-0 mt-0.5 text-emerald-500" />
                <span>{statusMessage}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-xs font-bold text-slate-500 dark:text-slate-455 uppercase tracking-wider mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 bg-slate-100/50 dark:bg-slate-900/50 border border-slate-250 dark:border-slate-800/80 rounded-xl text-slate-800 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all disabled:opacity-50"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-bold text-slate-500 dark:text-slate-455 uppercase tracking-wider mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 bg-slate-100/50 dark:bg-slate-900/50 border border-slate-250 dark:border-slate-800/80 rounded-xl text-slate-800 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all disabled:opacity-50"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-xs font-bold text-slate-500 dark:text-slate-455 uppercase tracking-wider mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 bg-slate-100/50 dark:bg-slate-900/50 border border-slate-250 dark:border-slate-800/80 rounded-xl text-slate-800 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all disabled:opacity-50"
                  placeholder="What's this about?"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-xs font-bold text-slate-500 dark:text-slate-455 uppercase tracking-wider mb-2">
                  Message
                  </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  disabled={isSubmitting}
                  rows={5}
                  className="w-full px-4 py-3 bg-slate-100/50 dark:bg-slate-900/50 border border-slate-250 dark:border-slate-800/80 rounded-xl text-slate-800 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all resize-none disabled:opacity-50"
                  placeholder="Describe your project, timeline, or open role..."
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 bg-gradient-to-r from-indigo-600 to-cyan-500 text-white font-bold rounded-xl shadow-md hover:shadow-lg hover:scale-[1.01] transition-all flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                {!isSubmitting && (
                  <Send size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
});
