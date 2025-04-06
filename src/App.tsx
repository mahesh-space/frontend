import { useState } from 'react';
import { motion, useScroll } from 'framer-motion';
import './App.css';
export default function Resume() {
  const { scrollYProgress } = useScroll();
  const [darkMode, setDarkMode] = useState(false);

  // Content data
  const content = {
    skills: ['React', 'JavaScript', 'HTML5', 'CSS3', 'C++', 'Node.js'],
    education: {
      degree: "B.Tech Computer Science",
      institution: "NIELIT Ajmer",
      grades: ["Semester 1: 0.00 SGPA", "Semester 2: 0.00 SGPA"]
    },
    projects: [
      {
        title: "SnigdhamXFramedosti Website",
        description: "Combined cultural & photography club platform",
        stack: ["React", "Firebase", "CSS"]
      },
      {
        title: "Image Converter Web App",
        description: "Browser-based image format conversion",
        stack: ["JavaScript", "Canvas API"]
      }
    ]
  };

  return (
    <div className={`container ${darkMode ? 'dark' : ''}`}>
      {/* Scroll Progress Bar */}
      <motion.div 
        className="progress-bar" 
        style={{ scaleX: scrollYProgress }} 
      />

      {/* Header Section */}
      <header className="header">
        <motion.h1 initial={{ y: -20 }} animate={{ y: 0 }}>
          Mahesh Gurjar
          <motion.span
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 8, ease: 'linear' }}
          >
            ✨
          </motion.span>
        </motion.h1>
        <p>Frontend Developer | B.Tech in Computer Science</p>
        
        <div className="contact-links">
          <a href="mailto:jiwanamahesh@gmail.com">📧 Email</a>
          <a href="https://github.com/mahesh-space">💻 GitHub</a>
          <a href="https://linkedin.com/in/maheshjiwana">🔗 LinkedIn</a>
        </div>

        <button 
          className="theme-toggle"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? '☀️ Light' : '🌙 Dark'}
        </button>
      </header>

      {/* Education Card */}
      <GlassCard title="Education">
        <h3>{content.education.degree}</h3>
        <p>{content.education.institution}</p>
        <div className="grades">
          {content.education.grades.map((grade, i) => (
            <motion.div key={i} whileHover={{ scale: 1.05 }}>
              {grade}
            </motion.div>
          ))}
        </div>
      </GlassCard>

      {/* Skills Card */}
      <GlassCard title="Technical Skills">
        <div className="skills-grid">
          {content.skills.map((skill, i) => (
            <motion.div 
              key={i}
              className="skill-tag"
              whileHover={{ scale: 1.1 }}
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </GlassCard>

      {/* Projects Card */}
      <GlassCard title="Projects">
        <div className="projects-grid">
          {content.projects.map((project, i) => (
            <motion.div 
              key={i}
              className="project-card"
              whileHover={{ y: -5 }}
            >
              <h4>{project.title}</h4>
              <p>{project.description}</p>
              <div className="tech-stack">
                {project.stack.map((tech, j) => (
                  <span key={j}>{tech}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </GlassCard>
    </div>
  );
}

// Reusable Glass Card Component
const GlassCard = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <motion.section 
    className="glass-card"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
  >
    <h2>{title}</h2>
    {children}
  </motion.section>
);