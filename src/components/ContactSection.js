import React from "react";
import SectionTitle from "./SectionTitle";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react";

export const ContactSection = React.memo(() => {
    const [formData, setFormData] = React.useState({ name: "", email: "", subject: "", message: "" });

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, subject, message } = formData;
        const mailtoLink = `mailto:ajaypal05192@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
            `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
        )}`;
        window.location.href = mailtoLink;
        setFormData({ name: "", email: "", subject: "", message: "" });
        alert("Thank you! Your email client should open now.");
    };

    const handleInputChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    return (
        <section id="contact" className="py-20 bg-gray-900 text-white">
            <div className="container mx-auto px-4">
                <SectionTitle title="Let's Work Together" className="text-white" />

                <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Contact Info */}
                    <div>
                        <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
                        <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                            I'm always interested in hearing about new opportunities and exciting projects. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center">
                                <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center mr-4">
                                    <Mail className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                    <p className="text-gray-300">Email</p>
                                    <a href="mailto:ajaypal05192@gmail.com" className="text-white hover:text-indigo-400">ajaypal05192@gmail.com</a>
                                </div>
                            </div>

                            <div className="flex items-center">
                                <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center mr-4">
                                    <Phone className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                    <p className="text-gray-300">Phone</p>
                                    <a href="tel:+917208401709" className="text-white hover:text-indigo-400">+91 7208401709</a>
                                </div>
                            </div>

                            <div className="flex items-center">
                                <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center mr-4">
                                    <MapPin className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                    <p className="text-gray-300">Location</p>
                                    <p className="text-white">Airoli, Navi Mumbai, India</p>
                                </div>
                            </div>

                            <div className="flex space-x-4 pt-6">
                                <a href="https://www.linkedin.com/in/ajay-pal0" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-12 h-12 bg-gray-800 hover:bg-indigo-600 rounded-lg flex items-center justify-center">
                                    <Linkedin className="w-5 h-5 text-white" />
                                </a>
                                <a href="https://github.com/Ajay-pal0" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="w-12 h-12 bg-gray-800 hover:bg-indigo-600 rounded-lg flex items-center justify-center">
                                    <Github className="w-5 h-5 text-white" />
                                </a>
                                <a href="https://x.com/Shinchan_1432" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="w-12 h-12 bg-gray-800 hover:bg-indigo-600 rounded-lg flex items-center justify-center">
                                    <Twitter className="w-5 h-5 text-white" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Name *</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-white placeholder-gray-400"
                                    placeholder="Your Name"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email *</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-white placeholder-gray-400"
                                    placeholder="your.email@example.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">Subject *</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    required
                                    value={formData.subject}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-white placeholder-gray-400"
                                    placeholder="Subject"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message *</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    rows="5"
                                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-white placeholder-gray-400"
                                    placeholder="Your message here..."
                                />
                            </div>

                            <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
});
