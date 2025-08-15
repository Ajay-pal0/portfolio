import { links } from "./links";
import profileImage from '../assets/images/profile.jpg';
import { FaReact, FaJs, FaPython, FaCode, FaCertificate } from "react-icons/fa";
import { Code, Database, BarChart3, Settings, Server, Smartphone, Home, User, Briefcase, Mail, Code2 } from "lucide-react";

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

// Hero Section Data
export const heroData = {
    typingStrings: [
        "Hi, I'm Ajay Pal",
        "A Software Developer",
        "Frontend Specialist",
        "React & React Native Expert"
    ],
    badgeText: "Available for new opportunities",
    description: "Results-driven Software Developer with 3+ years of experience building performant, scalable, and user-focused applications.",
    techStack: ['React.js', 'Next.js', 'React Native', 'Tailwind CSS', 'TypeScript'],
    stats: [
        { number: "3+", label: "Years Experience" },
        { number: "50+", label: "Projects Completed" },
        { number: "100%", label: "Client Satisfaction" }
    ],
    status: "Available for work"
};

// About Section Data
export const aboutData = {
    stats: [
        { number: "3+", label: "Years Experience" },
        { number: "50+", label: "Projects" },
        { number: "15+", label: "Technologies" },
        { number: "100%", label: "Client Satisfaction" }
    ],
    personalInfo: [
        { label: "Name", value: profileData?.name },
        { label: "Email", value: profileData?.email },
        { label: "Location", value: profileData?.location },
        { label: "Phone", value: profileData?.phone }
    ],
    bio: {
        story: `I'm a passionate Software Developer with expertise in modern frontend technologies. I specialize in
                creating scalable web and mobile applications that deliver exceptional user experiences.`,
        journey: `My journey spans diverse projects including accounting software, AI dashboards,
                HRMS systems, and compliance-driven tools. I'm passionate about clean code, performance optimization, and innovative solutions.`,
        lovedTechs: ['React.js', 'React Native', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js']
    },
    achievements: [
        { title: "Certified", subtitle: "Developer", icon: "Award", color: "green" },
        { title: "Available", subtitle: "For Work", icon: "Coffee", color: "blue" }
    ]
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
    { href: "home", label: "Home", icon: Home },
    { href: "about", label: "About", icon: User },
    { href: "projects", label: "Projects", icon: Code2 },
    { href: "experience", label: "Experience", icon: Briefcase },
    { href: "contact", label: "Contact", icon: Mail }
];


export const stats = [
    { number: "3+", label: "Years Experience" },
    { number: "15+", label: "Projects Completed" },
    { number: "7+", label: "Certifications" },
    { number: "5", label: "Tech Stacks" },
];

export const personalInfo = [
    { label: "Name", value: profileData?.name },
    { label: "Location", value: profileData?.location },
    { label: "Phone", value: profileData?.phone },
    { label: "Email", value: profileData?.email },
    { label: "Degree", value: "B.Sc IT" },
];

export const socialLinks = [
    { type: "linkedin", href: links.linkedin },
    { type: "github", href: links.github },
    { type: "twitter", href: links.twitter },
];

export const footerData = {
    copyright: "© " + new Date().getFullYear() + " Ajay Pal. All rights reserved.",
    madeWith: "Made with",
};

export const skillCategories = [
    { title: "Frontend", icon: Code, skills: ["React.js", "React Native", "JavaScript", "TypeScript", "HTML5", "CSS3", "Tailwind CSS"] },
    { title: "State Management", icon: Database, skills: ["Redux", "Context API", "REST APIs", "GraphQL", "Firebase"] },
    { title: "Visualization", icon: BarChart3, skills: ["Chart.js", "Highcharts", "D3.js", "React Grid Layout"] },
    { title: "Tools", icon: Settings, skills: ["Git", "GitHub", "Webpack", "Jest", "Tauri"] },
    { title: "Backend", icon: Server, skills: ["Node.js", "Express.js", "Python", "Django", "Rust"] },
    { title: "Mobile & Desktop", icon: Smartphone, skills: ["React Native", "Tauri", "PWA", "Cross-platform"] },
];

export const projects = [
    { title: "Finycs - Cloud Accounting", description: "Comprehensive cloud accounting platform with real-time dashboards, GST compliance modules, and multi-device accessibility.", icon: "💰", gradient: "from-indigo-500 to-cyan-500", techs: ["React.js", "React Native", "Redux", "Chart.js"], demo: links.projects.finycs, code: "", category: "Web App", status: "Live" },
    { title: "Foundation AI Dashboard", description: "Customizable drag-and-drop dashboard for analytics with real-time data visualization and AI-powered validation.", icon: "🧠", gradient: "from-purple-500 to-pink-500", techs: ["React.js", "Grid Layout", "Keycloak", "Jest"], demo: "", code: "", category: "AI/ML", status: "Development" },
    { title: "Inventory Management", description: "Desktop inventory management tool built with Tauri and React with Tally ERP integration.", icon: "📦", gradient: "from-green-500 to-teal-500", techs: ["Tauri", "React.js", "Rust", "REST API"], demo: "", code: "", category: "Desktop App", status: "Completed" },
    { title: "Indian Constitution App", description: "Mobile app for exploring Indian Constitution with knowledge graph interface and offline mode.", icon: "⚖️", gradient: "from-orange-500 to-red-500", techs: ["React Native", "Redux", "SQLite", "TTS"], demo: "", code: "", category: "Mobile App", status: "Live" },
    { title: "Get It Done - HRMS", description: "Complete HRMS and task management system with Kanban boards and gamified rewards.", icon: "📋", gradient: "from-blue-500 to-indigo-500", techs: ["React.js", "Firebase", "Chart.js", "Real-time"], demo: links.projects.gid, code: "", category: "Web App", status: "Live" },
    { title: "Finalyze - Financial Analysis", description: "Financial analysis platform with interactive dashboards and multi-period comparisons.", icon: "📊", gradient: "from-yellow-500 to-orange-500", techs: ["React.js", "Highcharts", "Material UI", "Express.js"], demo: "", code: "", category: "Web App", status: "Completed" },
];

export const experiences = [
    { period: "Oct 2021 – Present", title: "Software Developer", company: "Artdex & Cognoscis Technologies LLP", description: "Led frontend efforts across multiple SaaS platforms including Finycs, Foundation AI, and internal tools. Developed production-grade mobile and desktop applications with React Native and Tauri.", location: "Remote", type: "Full-time", technologies: ["React.js", "React Native", "Tauri", "TypeScript", "Node.js", "SaaS"], achievements: ["Led frontend development across multiple SaaS platforms", "Built production-grade mobile applications with React Native", "Developed desktop applications using Tauri", "Worked on Finycs and Foundation AI platforms"] },
    { period: "2020 - 2021", title: "Full-Stack Development", company: "Professional Development", description: "Completed comprehensive full-stack development program focusing on modern web technologies, database design, and software architecture principles.", location: "Self-paced", type: "Learning", technologies: ["JavaScript", "Node.js", "React", "MongoDB", "SQL", "Git"], achievements: ["Mastered modern web technologies", "Learned database design and architecture", "Built full-stack applications", "Gained software engineering principles"] },
    { period: "2017 - 2020", title: "B.Sc Information Technology", company: "JVM Mehta Degree College", description: "Graduated with comprehensive knowledge in computer science fundamentals, programming languages, and software engineering principles.", location: "India", type: "Education", technologies: ["Java", "C++", "Database Management", "Data Structures", "Algorithms"], achievements: ["Strong foundation in computer science", "Programming language proficiency", "Software engineering principles", "Database management skills"] },
];

// Contact Section Data
export const contactData = {
    contactInfo: [
        { icon: "Mail", title: "Email", value: profileData?.email, href: "mailto:ajaypal05192@gmail.com" },
        { icon: "Phone", title: "Phone", value: profileData?.phone, href: "tel:+917208401709" },
        { icon: "MapPin", title: "Location", value: profileData?.location },
    ],
    socialLinks: [
        { icon: "Linkedin", href: links.linkedin, label: "LinkedIn" },
        { icon: "Github", href: links.github, label: "GitHub" },
        { icon: "Twitter", href: links.twitter, label: "Twitter" },
    ],
    message: "I'm always interested in hearing about new opportunities and exciting projects. Whether you have a question or just want to say hi, I'll try my best to get back to you!"
};

// Project Categories
export const projectCategories = ["All", "Web App", "Mobile App", "Desktop App", "AI/ML"];

// Animation Settings
export const animationSettings = {
    floatingParticles: {
        count: 6,
        minDelay: 0,
        maxDelay: 5,
        minDuration: 3,
        maxDuration: 7
    },
    typingAnimation: {
        typeSpeed: 100,
        deleteSpeed: 50,
        pauseTime: 2000
    }
};
