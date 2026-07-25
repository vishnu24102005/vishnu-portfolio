import "./App.css";
import { Link, Routes, Route } from "react-router-dom";
import About from "./About.jsx";
import Achievements from "./Achievements.jsx";
import Projects from "./Projects.jsx";
import Experience from "./Experience.jsx";

function Home() {
  return (
    <div className="portfolio">
      {/* ================= NAVBAR ================= */}

      <nav className="navbar">
        <div className="logo">Vishnu Sanjay Kumar P</div>

        <div className="nav-links">
          <a href="#home">Home</a>

          {/* Opens About page */}
          <Link to="/about">About</Link>

          <Link to="/Projects">Projects</Link>
          <Link to="/Experience">Experience</Link>
          <Link to="/Achievements">Achievements</Link>
          <a href="#contact">Contact</a>
        </div>

        <a
          href="/VISHNU_SANJAY_KUMAR_95072317114.pdf"
          download="Vishnu_Sanjay_Kumar.pdf"
          className="resume-btn"
        >
          Resume ↓
        </a>
      </nav>

      {/* ================= HERO ================= */}

      <section id="home" className="hero">
        <div className="hero-content">
          <p className="small-title">
            AI ENGINEERING • SOFTWARE DEVELOPMENT • CONNECTED SYSTEMS (IoT)
          </p>

          <p className="hello">Hello, I'm</p>

          <h1>Vishnu Sanjay Kumar</h1>

          <h2>AI & Data Science Engineer</h2>

          <p className="intro">
            I build intelligent applications and software solutions that combine
            Artificial Intelligence, Machine Learning, and modern software
            technologies.
          </p>

          {/* Buttons */}

          <div className="hero-buttons">
            <Link to="/Projects" className="primary-btn">
              Explore My Work ↗
            </Link>

            <a
              href="/VISHNU_SANJAY_KUMAR_95072317114.pdf"
              download="Vishnu_Sanjay_Kumar.pdf"
              className="secondary-btn"
            >
              Download Resume ↓
            </a>
          </div>

          {/* Technology Identity */}

          <p className="technologies">
            Java <span>•</span>
            Python <span>•</span>
            AI/ML <span>•</span>
            Full Stack Development MERN <span>•</span>
            IoT
          </p>

          {/* Social Links */}

          <div className="social-links">
            <a
              href="https://github.com/vishnu24102005?tab=repositories"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/vishnu-sanjay-kumar-p-45427a290/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>

            <a href="mailto:vishnusanjay605@gmail.com">Email</a>

            <a
              href="https://leetcode.com/u/vishnu_sanjay_kumar/"
              target="_blank"
              rel="noreferrer"
            >
              LeetCode
            </a>
          </div>
        </div>

        {/* ================= PROFILE PHOTO ================= */}

        <div className="hero-photo">
          <div className="photo-circle">
            <div className="photo-placeholder">
              <img
                src="/photo.jpg"
                alt="Vishnu Sanjay Kumar"
                className="profile-photo"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHAT I DO ================= */}

      <section className="what-i-do">
        <div className="do-item">
          <span>01</span>
          <h3>AI & Machine Learning</h3>
        </div>

        <div className="do-item">
          <span>02</span>
          <h3>Software Development</h3>
        </div>

        <div className="do-item">
          <span>03</span>
          <h3>IoT & Intelligent Systems</h3>
        </div>
      </section>

      {/* ================= FEATURED WORK ================= */}

      <section id="projects" className="section">
        <div className="section-header">
          <div>
            <p className="section-label">SELECTED WORK</p>

            <h2>Featured Work</h2>
          </div>

          <Link to="/Projects" className="view-link">
            View All Projects ↗
          </Link>
        </div>

        <div className="project-grid">
          <div className="project-card">
            <span className="project-number">01</span>

            <div>
              <h3>VISAI</h3>
              <p>Predictive Maintenance System</p>
            </div>

            <span className="project-arrow">↗</span>
          </div>

          <div className="project-card">
            <span className="project-number">02</span>

            <div>
              <h3>ZenPath</h3>
              <p>AI-Based Stress Prediction Platform</p>
            </div>

            <span className="project-arrow">↗</span>
          </div>

          <div className="project-card">
            <span className="project-number">03</span>

            <div>
              <h3>PalmIntelli</h3>
              <p>AI + IoT Assistive System</p>
            </div>

            <span className="project-arrow">↗</span>
          </div>
        </div>
      </section>

      {/* ================= ABOUT PREVIEW ================= */}

      <section id="about" className="about-preview">
        <div>
          <p className="section-label">A LITTLE ABOUT ME</p>

          <h2>Building practical solutions with AI, software & IoT.</h2>
        </div>

        <div>
          <p>
            I'm an AI & Data Science student passionate about building practical
            AI, software, and IoT solutions.
          </p>

          {/* THIS OPENS ABOUT.JSX */}

          <Link to="/about" className="view-link">
            More About Me ↗
          </Link>
        </div>
      </section>

      {/* ================= ACHIEVEMENTS ================= */}

      <section id="achievements" className="section">
        <div className="section-header">
          <div>
            <p className="section-label">MILESTONES</p>

            <h2>Achievements</h2>
          </div>

          <Link to="/Achievements" className="view-link">
            View All Achievements ↗
          </Link>
        </div>

        <div className="achievement-grid">
          <div className="achievement-card">
            <span>🏆</span>
            <h3>Hackathon Winner</h3>
          </div>

          <div className="achievement-card">
            <span>🏆</span>
            <h3>VISAI 2025 Winner</h3>
          </div>

          <div className="achievement-card">
            <span>💡</span>
            <h3>Innovation Grant Recipient</h3>
          </div>
        </div>
      </section>

      {/* ================= EXPERIENCE ================= */}

      <section id="experience" className="experience-anchor"></section>

      {/* ================= FINAL CTA ================= */}

      <section id="contact" className="cta">
        <p className="section-label">HAVE AN IDEA?</p>

        <h2>Let's Build Something Meaningful.</h2>

        <p>Interested in working together or discussing an opportunity?</p>

        <a href="mailto:vishnusanjay605@gmail.com" className="primary-btn">
          Contact Me
        </a>
      </section>

      {/* ================= FOOTER ================= */}

      <footer>
        <div className="footer-info">
          <strong>Vishnu Sanjay Kumar</strong>

          <span>AI & Data Science Engineer</span>
        </div>

        <div className="footer-links">
          <a
            href="https://github.com/vishnu24102005?tab=repositories"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/vishnu-sanjay-kumar-p-45427a290/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

          <a href="mailto:vishnusanjay605@gmail.com">Email</a>
        </div>

        <p>© 2026 Vishnu Sanjay Kumar</p>
      </footer>
    </div>
  );
}

/* ================= ROUTING ================= */

function App() {
  return (
    <Routes>
      {/* Front page */}
      <Route path="/" element={<Home />} />

      {/* About page */}
      <Route path="/about" element={<About />} />

      {/* Project Pages */}
      <Route path="/projects" element={<Projects />} />

      {/* Expericence */}
      <Route path="/Experience" element={<Experience />} />
      <Route path="/achievements" element={<Achievements />} />
    </Routes>
  );
}

export default App;
