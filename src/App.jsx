import { useState } from 'react'
import './App.css'

// SVG Icons
const Icons = {
  Menu: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="3" y1="6" x2="21" y2="6"></line>
      <line x1="3" y1="12" x2="21" y2="12"></line>
      <line x1="3" y1="18" x2="21" y2="18"></line>
    </svg>
  ),
  Close: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
  ),
  Email: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
      <polyline points="22,6 12,13 2,6"></polyline>
    </svg>
  ),
  Phone: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
    </svg>
  ),
  Location: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
      <circle cx="12" cy="10" r="3"></circle>
    </svg>
  ),
  GitHub: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>
  ),
  LinkedIn: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
    </svg>
  ),
  Globe: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="2" y1="12" x2="22" y2="12"></line>
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
    </svg>
  ),
  Code: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="16 18 22 12 16 6"></polyline>
      <polyline points="8 6 2 12 8 18"></polyline>
    </svg>
  ),
  Server: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
      <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
      <line x1="6" y1="6" x2="6.01" y2="6"></line>
      <line x1="6" y1="18" x2="6.01" y2="18"></line>
    </svg>
  ),
  Database: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
    </svg>
  ),
  Blockchain: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="1" y="4" width="6" height="6" rx="1"></rect>
      <rect x="9" y="4" width="6" height="6" rx="1"></rect>
      <rect x="17" y="4" width="6" height="6" rx="1"></rect>
      <rect x="5" y="14" width="6" height="6" rx="1"></rect>
      <rect x="13" y="14" width="6" height="6" rx="1"></rect>
      <line x1="4" y1="10" x2="8" y2="14"></line>
      <line x1="12" y1="10" x2="8" y2="14"></line>
      <line x1="12" y1="10" x2="16" y2="14"></line>
      <line x1="20" y1="10" x2="16" y2="14"></line>
    </svg>
  ),
  Tools: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
    </svg>
  ),
  Education: () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
      <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
    </svg>
  ),
  Arrow: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="5" y1="12" x2="19" y2="12"></line>
      <polyline points="12 5 19 12 12 19"></polyline>
    </svg>
  ),
}


const portfolioData = {
  name: "Muhammad Maaz Aleem",
  title: "Full Stack Developer (MERN / Web3)",
  location: "Islamabad, Pakistan",
  email: "muhammadmaazaleem@gmail.com",
  phone: "+92 313 7584180",
  linkedin: "linkedin.com/in/muhammad-maaz-aleem-b16b1028b",
  github: "github.com/MuhammadMaazAleem",
  profileImage: "/profile.png",
  
  summary: "Passionate Full-Stack Developer with 1.5 years of hands-on experience building modern, scalable, and secure web applications. Strong expertise in MERN stack, backend development, and growing specialization in Blockchain & Web3 technologies. Proven ability to transform ideas into high-quality digital products using clean, maintainable code and industry best practices.",
  
  experience: {
    title: "Full Stack Developer",
    type: "Freelance",
    location: "Islamabad, Pakistan",
    period: "2023 – Present",
    responsibilities: [
      "Designed and developed full-stack web applications using React, Node.js, Express, and MongoDB.",
      "Built secure RESTful APIs and backend systems with authentication and role-based access control.",
      "Improved application performance and scalability through optimized database queries and modular architecture.",
      "Collaborated with clients to gather requirements and deliver production-ready solutions.",
      "Gained 1.5 years of real-world experience across multiple projects and technologies."
    ]
  },
  
  projects: [
    {
      title: "Hospital Management System",
      tech: ["Java"],
      description: "A comprehensive hospital management system for managing patient records, appointments, and medical staff.",
      github: "https://github.com/MuhammadMaazAleem/Hospital_managment_system"
    },
    {
      title: "Sports Shop E-Commerce",
      tech: ["JavaScript", "React", "Node.js"],
      description: "Full-featured sports equipment e-commerce platform with product catalog and shopping cart functionality.",
      github: "https://github.com/MuhammadMaazAleem/SportsShop"
    },
    {
      title: "SwatServe",
      tech: ["Dart", "Flutter"],
      description: "A mobile application built with Flutter for service management and delivery in the Swat region.",
      github: "https://github.com/MuhammadMaazAleem/SwatServe"
    },
    {
      title: "Car Rental Website",
      tech: ["JavaScript", "React", "Node.js"],
      description: "A modern car rental platform with booking system, vehicle management, and user authentication.",
      github: "https://github.com/MuhammadMaazAleem/car-rental-website"
    },
    {
      title: "E-Commerce Store",
      tech: ["Python", "Django", "PostgreSQL"],
      description: "Complete e-commerce platform with product management, shopping cart, and secure checkout. Scalable backend architecture.",
      github: "https://github.com/MuhammadMaazAleem/ecommerce-store"
    },
    {
      title: "Secure VPN Desktop Application",
      tech: ["React", "TypeScript", "Electron", "Vite"],
      description: "Modern cross-platform VPN desktop application with clean interface and secure connection protocols.",
      github: "https://github.com/MuhammadMaazAleem/secure-vpn-dekstop"
    },
    {
      title: "Crypto Staking Wallet",
      tech: ["React", "TypeScript", "Web3"],
      description: "Cryptocurrency staking wallet with secure transaction management and responsive Web3 integration.",
      github: "https://github.com/MuhammadMaazAleem/stakewallet"
    },
    {
      title: "Blockchain DApp Frontend",
      tech: ["React", "Tailwind CSS", "Web3", "Vite"],
      description: "Decentralized application frontend with smart contract integration and secure blockchain transactions.",
      github: "https://github.com/MuhammadMaazAleem/Blockchain-frontEnd"
    },
    {
      title: "Currency Converter",
      tech: ["JavaScript", "HTML", "CSS", "API"],
      description: "Real-time currency converter with external API integration, country flags, and live exchange rates.",
      github: "https://github.com/MuhammadMaazAleem/currency-converter"
    },
    {
      title: "Task Management System",
      tech: ["React", "Node.js", "MongoDB"],
      description: "Task management web app with authentication, CRUD operations, real-time updates, and notification system.",
      github: "https://github.com/MuhammadMaazAleem"
    }
  ],
  
  education: {
    degree: "Bachelor of Science in Computer Science (BSCS)",
    institution: "Air University, Islamabad",
    period: "2024 – Present",
    field: "Software Development & Emerging Technologies"
  },
  
  skills: {
    languages: ["JavaScript", "TypeScript", "Python", "Java", "Dart", "HTML", "CSS"],
    frontend: ["React.js", "Tailwind CSS", "Three.js", "Flutter"],
    backend: ["Node.js", "Express.js", "Django"],
    databases: ["MongoDB", "PostgreSQL"],
    blockchain: ["Web3", "DApp Development", "Smart Contract Integration"],
    tools: ["Git", "GitHub", "Electron", "Vite", "REST APIs"]
  },
  
  languages: ["Urdu (Fluent)", "English (Professional)"],
  
  interests: [
    "Blockchain & Web3 Development",
    "Full-Stack Engineering",
    "Secure & Scalable Systems",
    "Emerging Web Technologies",
    "Artificial Intelligence and Advanced Technologies"
  ]
}

// Navbar Component
function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  
  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#education", label: "Education" },
    { href: "#contact", label: "Contact" },
  ]
  
  return (
    <nav className="navbar">
      <div className="container">
        <a href="#" className="navbar-logo">MMA</a>
        <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
          {navLinks.map((link) => (
            <a 
              key={link.href} 
              href={link.href}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
        <button className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <Icons.Close /> : <Icons.Menu />}
        </button>
      </div>
    </nav>
  )
}

// Hero Section
function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="container">
        <div className="hero-wrapper">
          <div className="hero-image">
            <img 
              src={portfolioData.profileImage} 
              alt={portfolioData.name}
            />
          </div>
          <div className="hero-content">
            <p className="hero-greeting">Hello, I'm</p>
            <h1 className="hero-name">{portfolioData.name}</h1>
            <p className="hero-title">{portfolioData.title}</p>
            <p className="hero-description">{portfolioData.summary}</p>
            <div className="hero-buttons">
              <a href="#contact" className="btn btn-primary">Get In Touch</a>
              <a href="#projects" className="btn btn-secondary">View Projects</a>
            </div>
            <div className="hero-socials">
              <a 
                href={`https://${portfolioData.github}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
                title="GitHub"
              >
                <Icons.GitHub />
              </a>
              <a 
                href={`https://${portfolioData.linkedin}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
                title="LinkedIn"
              >
                <Icons.LinkedIn />
              </a>
              <a 
                href={`https://${portfolioData.portfolio}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
                title="Portfolio"
              >
                <Icons.Globe />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// About Section
function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <p className="about-text">
            {portfolioData.summary}
          </p>
          <div className="about-stats">
            <div className="stat-item">
              <div className="stat-number">1.5+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">{portfolioData.projects.length}+</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">15+</div>
              <div className="stat-label">Technologies</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Skills Section
function Skills() {
  const skillCategories = [
    { title: "Languages", icon: <Icons.Code />, skills: portfolioData.skills.languages },
    { title: "Frontend", icon: <Icons.Globe />, skills: portfolioData.skills.frontend },
    { title: "Backend", icon: <Icons.Server />, skills: portfolioData.skills.backend },
    { title: "Databases", icon: <Icons.Database />, skills: portfolioData.skills.databases },
    { title: "Blockchain", icon: <Icons.Blockchain />, skills: portfolioData.skills.blockchain },
    { title: "Tools & Platforms", icon: <Icons.Tools />, skills: portfolioData.skills.tools },
  ]
  
  return (
    <section className="skills" id="skills">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        <div className="skills-grid">
          {skillCategories.map((category) => (
            <div key={category.title} className="skill-category">
              <h3 className="skill-category-title">
                <span className="skill-category-icon">{category.icon}</span>
                {category.title}
              </h3>
              <div className="skill-tags">
                {category.skills.map((skill) => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Experience Section
function Experience() {
  const { experience } = portfolioData
  
  return (
    <section className="experience" id="experience">
      <div className="container">
        <h2 className="section-title">Work Experience</h2>
        <div className="experience-card">
          <div className="experience-header">
            <div>
              <h3 className="experience-title">{experience.title}</h3>
              <p className="experience-company">{experience.type}</p>
            </div>
            <div className="experience-meta">
              <p className="experience-date">{experience.period}</p>
              <p className="experience-location">{experience.location}</p>
            </div>
          </div>
          <ul className="experience-list">
            {experience.responsibilities.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

// Projects Section
function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {portfolioData.projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
                {project.github && (
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    View on GitHub <Icons.Arrow />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Education Section
function Education() {
  const { education } = portfolioData
  
  return (
    <section className="education" id="education">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <div className="education-card">
          <div className="education-icon">
            <Icons.Education />
          </div>
          <div className="education-info">
            <h3>{education.degree}</h3>
            <p>{education.institution}</p>
            <p>{education.period}</p>
            <p className="field">{education.field}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

// Contact Section
function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="contact-content">
          <h2 className="section-title">Get In Touch</h2>
          <p className="contact-text">
            I'm currently open to new opportunities and collaborations. 
            Feel free to reach out if you'd like to work together!
          </p>
          <div className="contact-info">
            <div className="contact-item">
              <span className="contact-item-icon"><Icons.Email /></span>
              <a href={`mailto:${portfolioData.email}`}>{portfolioData.email}</a>
            </div>
            <div className="contact-item">
              <span className="contact-item-icon"><Icons.Phone /></span>
              <span>{portfolioData.phone}</span>
            </div>
            <div className="contact-item">
              <span className="contact-item-icon"><Icons.Location /></span>
              <span>{portfolioData.location}</span>
            </div>
          </div>
          <div className="contact-socials">
            <a 
              href={`https://${portfolioData.github}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="contact-social-link"
              title="GitHub"
            >
              <Icons.GitHub />
            </a>
            <a 
              href={`https://${portfolioData.linkedin}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="contact-social-link"
              title="LinkedIn"
            >
              <Icons.LinkedIn />
            </a>
            <a 
              href={`https://${portfolioData.portfolio}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="contact-social-link"
              title="Portfolio"
            >
              <Icons.Globe />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

// Footer
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p className="footer-content">
          © {new Date().getFullYear()} <span>Muhammad Maaz Aleem</span>. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

// Main App
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </>
  )
}

export default App
