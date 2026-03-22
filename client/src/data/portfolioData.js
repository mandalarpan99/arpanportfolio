// ============================================================
//  CENTRALIZED DATA FILE — All portfolio content lives here
// ============================================================

export const personalInfo = {
  name: "Arpan Mandal",
  tagline: "Full-Stack Developer",
  subTagline: "MERN Stack · Software Engineer · Lifelong Learner",
  location: "Delhi, India",
  email: "mandalarpan2014@gmail.com",
  phone: "+91-9647427931",
  website: "https://arpanmandal.in",
  resumeUrl: "/ArpanMandal-Resume2026.pdf",
  bio: "I craft scalable web applications with clean code and thoughtful UX. Passionate about the MERN stack, system design, and turning complex problems into elegant digital solutions. When I'm not building, I'm learning — or reading about geopolitics.",
  roles: [
    "Full-Stack Developer",
    "MERN Stack Engineer",
    "React Enthusiast",
    "Problem Solver",
    "Tech Teacher",
  ],
  socials: {
    linkedin: "https://linkedin.com/in/arpanmin",
    github: "https://github.com/mandalarpan99",
    facebook: "https://facebook.com/",
    instagram: "https://instagram.com/",
  },
};

export const skills = [
  { name: "React.js", level: 90, category: "Frontend" },
  { name: "Next.js", level: 80, category: "Frontend" },
  { name: "JavaScript", level: 92, category: "Frontend" },
  { name: "TypeScript", level: 75, category: "Frontend" },
  { name: "HTML & CSS", level: 95, category: "Frontend" },
  { name: "Node.js", level: 85, category: "Backend" },
  { name: "Express.js", level: 85, category: "Backend" },
  { name: "PHP / CodeIgniter", level: 80, category: "Backend" },
  { name: "REST APIs", level: 88, category: "Backend" },
  { name: "JWT Auth", level: 82, category: "Backend" },
  { name: "MongoDB", level: 83, category: "Database" },
  { name: "MySQL / SQL", level: 85, category: "Database" },
  { name: "Git", level: 88, category: "Tools" },
  { name: "Postman", level: 85, category: "Tools" },
  { name: "Agile / JIRA", level: 78, category: "Tools" },
  { name: "Python", level: 78, category: "Programming" },
];

export const projects = [
  {
    id: 1,
    title: "Full-Stack Car Parking Platform",
    description: "A real-time car parking reservation system serving 150+ daily users. Built with optimised SQL queries, caching strategies, and automated booking logic that slashes wait times.",
    tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "CodeIgniter"],
    type: "Internship Project · DotLinker Technologies",
    highlights: ["150+ daily active users", "Real-time availability engine", "Optimised DB schema & REST APIs"],
    color: "#FF6B35",
    emoji: "🅿️",
  },
  {
    id: 2,
    title: "MERN Stack CMS",
    description: "A production-quality Content Management System built with the full MERN stack. Features JWT-based authentication, role-based access, Git branching workflow, and fully documented API endpoints.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT"],
    type: "Personal Project",
    highlights: ["JWT security best practices", "Role-based access control", "Fully documented REST API"],
    color: "#4ECDC4",
    emoji: "📝",
  },
  {
    id: 3,
    title: "Healthcare Provider Portal",
    description: "A hospital management portal connecting patients with doctors, hospital listings, reviews, and direct messaging. Translates complex healthcare workflows into an intuitive web interface.",
    tech: ["HTML", "CSS", "PHP", "MySQL", "Bootstrap"],
    type: "Academic Project",
    highlights: ["Doctor & hospital search", "Patient–doctor messaging", "Iterative UX improvements"],
    color: "#A8E6CF",
    emoji: "🏥",
  },
  {
    id: 4,
    title: "Personal Portfolio Website",
    description: "Designed and shipped a responsive, mobile-first portfolio using React.js. Showcases projects with interactive UI components, optimised performance, and seamless cross-device compatibility.",
    tech: ["React.js", "JavaScript", "HTML", "CSS", "Bootstrap"],
    type: "Personal Project · arpanmandal.in",
    highlights: ["Mobile-first design", "Interactive UI components", "Production deployed"],
    color: "#C3A6FF",
    emoji: "🌐",
  },
];

export const experience = [
  {
    role: "Full-Stack Developer Intern",
    company: "DotLinker Technologies Pvt. Ltd.",
    location: "Kolkata, India",
    period: "2023",
    type: "Internship",
    points: [
      "Engineered a full-stack car parking reservation platform used by 150+ daily users.",
      "Designed optimised database schemas and RESTful APIs, cutting reservation processing time significantly.",
      "Implemented secure authentication, input validation, and cross-browser responsive design.",
      "Collaborated in Agile stand-ups, self-learned CodeIgniter, and maintained clean Git version history.",
    ],
  },
];

export const education = [
  {
    degree: "Master of Computer Application (MCA)",
    institution: "Narula Institute of Technology",
    period: "Jun 2021 – Jul 2023",
    cgpa: "8.75",
    location: "Kolkata, India",
    courses: ["Full-Stack Development", "Data Structures & Algorithms", "Cloud Technologies"],
  },
  {
    degree: "Bachelor of Computer Application (BCA)",
    institution: "Narula Institute of Technology",
    period: "Jun 2018 – Jul 2021",
    cgpa: "8.11",
    location: "Kolkata, India",
    courses: ["Web Development", "Java", "PHP", "MySQL", "Python"],
  },
];

export const certifications = [
  { name: "Version Control with Git", issuer: "Coursera" },
  { name: "Cloud Computing Basics", issuer: "Coursera" },
  { name: "Java Programming Fundamentals", issuer: "Udemy" },
  { name: "PHP & MySQL for Web Development", issuer: "Udemy" },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];
