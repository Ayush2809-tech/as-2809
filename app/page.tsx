'use client'

import {
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  GraduationCap,
  Mail,
  MapPin,
  Menu,
  Terminal,
  Trophy,
  X,
} from 'lucide-react'
import { useState } from 'react'

const skills = ['Python', 'Django', 'JavaScript', 'React', 'HTML', 'CSS', 'Bootstrap', 'SQL', 'Git', 'GitHub', 'REST APIs']

const projects = [
  {
    number: '01',
    title: 'Biotech Park Admission System',
    description: 'An online admission management system built using Python, Django, HTML, CSS, Bootstrap and SQL.',
    technologies: ['Python', 'Django', 'HTML', 'CSS', 'Bootstrap', 'SQL'],
    github: 'https://github.com/Ayush2809-tech',
    demo: '#contact',
  },
  {
    number: '02',
    title: 'EduRegister',
    description: 'A responsive student registration interface designed as a clean web UI project.',
    technologies: ['HTML', 'CSS', 'Bootstrap', 'JavaScript'],
    github: 'https://github.com/Ayush2809-tech',
    demo: '#contact',
  },
  {
    number: '03',
    title: 'DepthWizard',
    description: 'A browser-based 3D terrain visualization platform that transforms single-view satellite imagery and elevation data into an interactive 3D terrain experience for disaster management and related applications.',
    technologies: ['WebGPU', 'JavaScript', '3D Visualization', 'GIS'],
    github: 'https://github.com/Ayush2809-tech',
  },
]

const navItems = [
  ['About', '#about'],
  ['Skills', '#skills'],
  ['Projects', '#projects'],
  ['Experience', '#experience'],
  ['Contact', '#contact'],
]

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <main className="site-shell">
      <nav className="navbar" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="Ayush Saxena home">
          <span className="brand-mark">AS</span>
          <span>Ayush Saxena</span>
        </a>
        <button className="menu-toggle" type="button" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
        <div className={`nav-links ${menuOpen ? 'is-open' : ''}`}>
          {navItems.map(([label, href]) => <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}
          <a className="nav-cta" href="mailto:saxenaayush2809@gmail.com">Let&apos;s connect <ArrowUpRight size={15} /></a>
        </div>
      </nav>

      <section id="top" className="hero section-wrap">
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot" /> Available for opportunities</p>
          <h1>Building useful<br /><span>digital experiences.</span></h1>
          <p className="hero-intro">I&apos;m <strong>Ayush Saxena</strong> — a Full Stack Developer and CSE (AI &amp; ML) student who builds practical web applications using Python, Django, JavaScript, React, and modern web technologies.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">View projects <ArrowUpRight size={17} /></a>
            <a className="button button-ghost" href="https://github.com/Ayush2809-tech" target="_blank" rel="noreferrer"><span className="social-glyph">GH</span> GitHub profile</a>
          </div>
          <div className="hero-meta"><span><MapPin size={15} /> India</span><span><Terminal size={15} /> CSE (AI &amp; ML)</span></div>
        </div>
        <div className="hero-visual">
          <div className="hero-glow" />
          <div className="portrait-frame"><img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/as-p9momNYkOn6MQy2WooU43EAFPSSbrq.jpg" alt="Portrait of Ayush Saxena" /></div>
          <div className="code-card"><span className="code-dot" /><span className="code-line code-purple">const</span> <span className="code-line">developer</span> <span className="code-line code-muted">=</span><br /><span className="code-indent">{`{ passion: `}<span className="code-green">&quot;real-world apps&quot;</span> {`}`}</span></div>
        </div>
      </section>

      <section id="about" className="section-wrap about-section">
        <div className="section-label"><span>01</span> About me</div>
        <div className="about-grid"><h2>Curious by nature.<br /><span>Practical by design.</span></h2><div className="about-copy"><p>I&apos;m a B.Tech Computer Science &amp; Engineering student specializing in Artificial Intelligence and Machine Learning, with a strong interest in full-stack development.</p><p>I enjoy turning ideas into reliable, user-friendly products with Python, Django, JavaScript, React, and thoughtful engineering. My focus is always on learning by building and creating software that solves real problems.</p></div></div>
      </section>

      <section id="skills" className="section-wrap skills-section">
        <div className="section-heading"><div className="section-label"><span>02</span> Toolkit</div><h2>Tools I use to<br /><em>make things work.</em></h2></div>
        <div className="skills-list">{skills.map((skill, index) => <div className="skill-pill" key={skill}><span>{String(index + 1).padStart(2, '0')}</span>{skill}</div>)}</div>
      </section>

      <section id="projects" className="section-wrap projects-section">
        <div className="section-heading projects-heading"><div><div className="section-label"><span>03</span> Selected work</div><h2>Projects with<br /><em>purpose.</em></h2></div><p>Some things I&apos;ve built while learning, experimenting, and solving practical problems.</p></div>
        <div className="project-grid">{projects.map((project) => <article className="project-card" key={project.number}><div className="project-top"><span className="project-number">{project.number}</span><Code2 size={21} /></div><h3>{project.title}</h3><p>{project.description}</p><div className="tech-list">{project.technologies.map((tech) => <span key={tech}>{tech}</span>)}</div><div className="project-links"><a href={project.github} target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={15} /></a>{project.demo && <a href={project.demo}>Live demo <ArrowUpRight size={15} /></a>}</div></article>)}</div>
      </section>

      <section id="experience" className="section-wrap experience-section">
        <div className="section-label"><span>04</span> Experience &amp; education</div>
        <div className="timeline-grid"><div><h2>Where I&apos;ve<br /><em>grown.</em></h2><div className="timeline-item"><div className="timeline-icon"><BriefcaseBusiness size={19} /></div><div><p className="timeline-kicker">45 DAYS · SUMMER INTERNSHIP</p><h3>Python &amp; Django Summer Intern</h3><p className="timeline-company">Softpro India Computer Technologies Pvt. Ltd.</p><p>Worked on the Online Admission System for Biotech Park, Lucknow using Python, Django, HTML, CSS, Bootstrap and SQL.</p><div className="award-line"><Trophy size={15} /> A+ internship performance · Best Speaker Award</div></div></div></div><div><h2>What I&apos;m<br /><em>learning.</em></h2><div className="timeline-item"><div className="timeline-icon"><GraduationCap size={19} /></div><div><p className="timeline-kicker">CURRENTLY PURSUING</p><h3>B.Tech – Computer Science &amp; Engineering (AI &amp; ML)</h3><p className="timeline-company">Dronacharya Group of Institutions, Greater Noida</p><div className="education-scores"><span>Class 12 <strong>81.2%</strong></span><span>Class 10 <strong>90.5%</strong></span></div></div></div></div></div>
      </section>

      <section className="section-wrap achievements-section"><div className="section-label"><span>05</span> Highlights</div><div className="achievement-grid"><h2>Always learning.<br /><em>Always building.</em></h2><ul><li>Best Speaker Award during Summer Internship</li><li>GitHub Student Developer Pack</li><li>Consistent problem solving and DSA practice</li><li>Multiple real-world development projects</li></ul></div></section>

      <section id="contact" className="contact-section"><div className="section-wrap contact-inner"><div><div className="section-label"><span>06</span> Connect</div><h2>Let&apos;s build something<br /><em>meaningful.</em></h2><p>Have a project, opportunity, or just want to say hello? My inbox is always open.</p></div><a className="email-link" href="mailto:saxenaayush2809@gmail.com">saxenaayush2809@gmail.com <ArrowUpRight size={20} /></a><div className="social-links"><a href="https://github.com/Ayush2809-tech" target="_blank" rel="noreferrer"><span className="social-glyph">GH</span> GitHub</a><a href="https://www.linkedin.com/in/ayush-saxena-2809s/" target="_blank" rel="noreferrer"><span className="social-glyph">LI</span> LinkedIn</a><a href="https://leetcode.com/u/Ayush2815/" target="_blank" rel="noreferrer"><span className="leetcode-icon">LC</span> LeetCode</a><a href="mailto:saxenaayush2809@gmail.com"><Mail size={18} /> Email</a></div></div></section>

      <footer className="footer section-wrap"><span>© 2026 Ayush Saxena</span><span>Built with passion for software development.</span><a href="#top" aria-label="Back to top">Back to top ↑</a></footer>
    </main>
  )
}
