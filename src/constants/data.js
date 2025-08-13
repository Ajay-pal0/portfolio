import profileImage from '../assets/images/profile.jpg';
import { FaReact, FaJs, FaPython, FaCode, FaCertificate } from "react-icons/fa";
import { Code, Database, BarChart3, Settings, Server, Smartphone } from "lucide-react";
import { links } from "./links";

export const profileData = {
    name: "Ajay Pal",
    phone: "+91 7208401709",
    title: "Software Developer",
    email: "ajaypal05192@gmail.com",
    location: "Airoli, Navi Mumbai, India",
    github: links.github,
    linkedin: links.linkedin,
    summary: `Results-driven Software Developer with 3+ years of experience in building performant,
            scalable, and user-centric web and mobile applications. Specializes in modern frontend
            frameworks like React.js and React Native, with strong proficiency in Tailwind CSS and Material UI.`,
    profileImage: profileImage,
    resumeLink: links.resume
};

export const certificates = [
    { title: "Frontend Developer (React)", issuer: "HackerRank", date: "Jan 2025", icon: <FaReact className="text-blue-500" />, link: links.hackerrank.react },
    { title: "JavaScript (Basic)", issuer: "HackerRank", date: "Feb 2022", icon: <FaJs className="text-yellow-500" />, link: links.hackerrank.javascript },
    { title: "React", issuer: "TestDome", date: "Dec 2021", icon: <FaCode className="text-green-500" />, link: links.testdome.react },
    { title: "React (Basic)", issuer: "HackerRank", date: "Dec 2021", icon: <FaReact className="text-blue-500" />, link: links.hackerrank.reactBasic },
    { title: "Python (Basic)", issuer: "HackerRank", date: "Oct 2021", icon: <FaPython className="text-yellow-500" />, link: links.hackerrank.python },
    { title: "MTA: Intro to Programming (Python)", issuer: "Microsoft", date: "Jul 2021", icon: <FaCertificate className="text-indigo-500" />, link: links.credly.pythonMTA },
];

export const navItems = [
    { href: "home", label: "Home" },
    { href: "about", label: "About" },
    { href: "experience", label: "Experience" },
    { href: "skills", label: "Skills" },
    { href: "projects", label: "Projects" },
    { href: "contact", label: "Contact" },
];

export const stats = [
    { number: "3+", label: "Years Experience" },
    { number: "15+", label: "Projects Completed" },
    { number: "7+", label: "Certifications" },
    { number: "5", label: "Tech Stacks" },
];

export const personalInfo = [
    { label: "Name", value: "Ajay Santram Pal" },
    { label: "Location", value: "Navi Mumbai, India" },
    { label: "Phone", value: "+91 7208401709" },
    { label: "Email", value: "ajaypal05192@gmail.com" },
    { label: "Degree", value: "B.Sc IT" },
];

export const socialLinks = [
    { type: "linkedin", href: links.linkedin },
    { type: "github", href: links.github },
    { type: "twitter", href: links.twitter },
];

export const skillCategories = [
    { title: "Frontend", icon: Code, skills: ["React.js", "React Native", "JavaScript", "TypeScript", "HTML5", "CSS3", "Tailwind CSS"] },
    { title: "State Management", icon: Database, skills: ["Redux", "Context API", "REST APIs", "GraphQL", "Firebase"] },
    { title: "Visualization", icon: BarChart3, skills: ["Chart.js", "Highcharts", "D3.js", "React Grid Layout"] },
    { title: "Tools", icon: Settings, skills: ["Git", "GitHub", "Webpack", "Jest", "Tauri"] },
    { title: "Backend", icon: Server, skills: ["Node.js", "Express.js", "Python", "Django", "Rust"] },
    { title: "Mobile & Desktop", icon: Smartphone, skills: ["React Native", "Tauri", "PWA", "Cross-platform"] },
];

export const projects = [
    { title: "Finycs - Cloud Accounting", description: "Comprehensive cloud accounting platform with real-time dashboards, GST compliance modules, and multi-device accessibility.", icon: "💰", gradient: "from-indigo-500 to-cyan-500", techs: ["React.js", "React Native", "Redux", "Chart.js"], demo: links.projects.finycs, code: "" },
    { title: "Foundation AI Dashboard", description: "Customizable drag-and-drop dashboard for analytics with real-time data visualization and AI-powered validation.", icon: "🧠", gradient: "from-purple-500 to-pink-500", techs: ["React.js", "Grid Layout", "Keycloak", "Jest"], demo: "", code: "" },
    { title: "Inventory Management", description: "Desktop inventory management tool built with Tauri and React with Tally ERP integration.", icon: "📦", gradient: "from-green-500 to-teal-500", techs: ["Tauri", "React.js", "Rust", "REST API"], demo: "", code: "" },
    { title: "Indian Constitution App", description: "Mobile app for exploring Indian Constitution with knowledge graph interface and offline mode.", icon: "⚖️", gradient: "from-orange-500 to-red-500", techs: ["React Native", "Redux", "SQLite", "TTS"], demo: "", code: "" },
    { title: "Get It Done - HRMS", description: "Complete HRMS and task management system with Kanban boards and gamified rewards.", icon: "📋", gradient: "from-blue-500 to-indigo-500", techs: ["React.js", "Firebase", "Chart.js", "Real-time"], demo: links.projects.gid, code: "" },
    { title: "Finalyze - Financial Analysis", description: "Financial analysis platform with interactive dashboards and multi-period comparisons.", icon: "📊", gradient: "from-yellow-500 to-orange-500", techs: ["React.js", "Highcharts", "Material UI", "Express.js"], demo: "", code: "" },
];

export const experiences = [
    { period: "Oct 2021 – Present", title: "Software Developer", company: "Artdex & Cognoscis Technologies LLP", description: "Led frontend efforts across multiple SaaS platforms including Finycs, Foundation AI, and internal tools. Developed production-grade mobile and desktop applications with React Native and Tauri." },
    { period: "2020 - 2021", title: "Full-Stack Development", company: "Professional Development", description: "Completed comprehensive full-stack development program focusing on modern web technologies, database design, and software architecture principles." },
    { period: "2017 - 2020", title: "B.Sc Information Technology", company: "JVM Mehta Degree College", description: "Graduated with comprehensive knowledge in computer science fundamentals, programming languages, and software engineering principles." },
];
