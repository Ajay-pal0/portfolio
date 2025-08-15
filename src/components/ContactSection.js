import React from "react";
import { FloatingParticles } from "./common";
import { contactData } from "../constants/data";
import { useContactForm, useMousePosition } from "../hooks";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Contact } from "lucide-react";

// Section Title
const SectionTitle = ({ title }) => (
  <div className="text-center mb-20 relative z-10">
    <div className="inline-flex items-center justify-center p-3 bg-gradient-to-br from-indigo-100 to-cyan-100 rounded-2xl mb-6">
      <Contact className="w-8 h-8 text-indigo-600" />
    </div>
    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">{title}</h2>
    <p className="text-lg text-gray-300 max-w-2xl mx-auto">
      I'm open to collaborations, projects, and exciting opportunities.
    </p>
    <div className="mt-8 w-24 h-1 bg-gradient-to-r from-indigo-600 to-cyan-500 mx-auto rounded-full"></div>
  </div>
);

export const ContactSection = React.memo(() => {
  const { formData, handleInputChange, handleSubmit } = useContactForm();
  const mousePosition = useMousePosition();

  const iconMap = {
    Mail: <Mail className="w-6 h-6" />,
    Phone: <Phone className="w-6 h-6" />,
    MapPin: <MapPin className="w-6 h-6" />,
    Linkedin: <Linkedin className="w-6 h-6" />,
    Github: <Github className="w-6 h-6" />,
    Twitter: <Twitter className="w-6 h-6" />
  };

  return (
    <section
      id="contact"
      className="relative py-20 sm:py-32 overflow-hidden bg-gray-900 text-white"
      style={{
        background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(99,102,241,0.05) 0%, transparent 50%), linear-gradient(135deg, #111827 0%, #1f2937 100%)`,
      }}
    >
      <FloatingParticles />

      <div className="container mx-auto px-6 sm:px-8 relative z-10 max-w-6xl">
        <SectionTitle title="Let's Work Together" />

        <div className="grid lg:grid-cols-2 gap-12 mt-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
            <p className="text-gray-300 mb-8 text-lg leading-relaxed">
              {contactData.message}
            </p>

            <div className="space-y-4">
              {contactData.contactInfo.map((item, i) => (
                <div
                  key={item.title}
                  className="group flex items-center space-x-4 p-4 bg-white/5 backdrop-blur-sm rounded-2xl hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-indigo-400/30"
                >
                  <div className="p-3 bg-gradient-to-br from-indigo-500 to-cyan-500 rounded-xl text-white group-hover:scale-110 transition-transform duration-300">
                    {iconMap[item.icon]}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-white">{item.title}</h4>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-gray-300 hover:text-indigo-400 transition-colors duration-300"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-gray-300">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="mt-8">
              <h4 className="text-xl font-bold text-white mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                {contactData.socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group p-4 bg-white/5 backdrop-blur-sm rounded-2xl hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-indigo-400/30 transform hover:scale-110 hover:-translate-y-1"
                  >
                    <div className="text-white group-hover:text-indigo-400 transition-colors duration-300">
                      {iconMap[social.icon]}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                  placeholder="What's this about?"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-indigo-600 to-cyan-500 text-white font-bold rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-indigo-500/25 transform hover:scale-105 transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      <style jsx>{`
              @keyframes float {
                0%, 100% { transform: translateY(0px) rotate(0deg); }
                25% { transform: translateY(-10px) rotate(90deg); }
                50% { transform: translateY(-20px) rotate(180deg); }
                75% { transform: translateY(-10px) rotate(270deg); }
              }
              .animate-float {
                animation: float 8s ease-in-out infinite;
              }
            `}</style>
    </section>
  );
});
