import "./App.css";

import {
  Link,
  Routes,
  Route,
} from "react-router-dom";

import { useRef, useState } from "react";

import emailjs from "@emailjs/browser";

import About from "./About.jsx";
import Achievements from "./Achievements.jsx";
import Projects from "./Projects.jsx";
import Experience from "./Experience.jsx";
import Certification from "./Certification.jsx";


/* =========================================================
   HOME PAGE
========================================================= */

function Home() {

  /* ================= CONTACT FORM ================= */

  const form = useRef();

  const [status, setStatus] = useState("");


  const sendEmail = (e) => {

    e.preventDefault();

    setStatus("Sending...");


    emailjs
      .sendForm(
        "service_411fjg3",
        "template_3kbbrw9",
        form.current,
        {
          publicKey: "hIFSNZ9h_yve14ba-",
        }
      )

      .then(
        () => {

          setStatus(
            "Message sent successfully! I'll get back to you soon."
          );

          form.current.reset();

        },

        (error) => {

          console.error("EmailJS Error:", error);

          setStatus(
            "Something went wrong. Please try again."
          );

        }
      );
  };


  return (

    <div>

      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <nav className="navbar">

        <div className="logo">
          Vishnu Sanjay Kumar P
        </div>


        <div className="nav-links">

          <a href="#home">
            Home
          </a>


          <Link to="/about">
            About
          </Link>


          <Link to="/projects">
            Projects
          </Link>


          <Link to="/experience">
            Experience
          </Link>


          <Link to="/achievements">
            Achievements
          </Link>

          <Link to="/certification">
            Certification
          </Link>


          <a href="#contact">
            Contact
          </a>

        </div>


        <a
          href="/VISHNU_SANJAY_KUMAR_95072317114.pdf"
          download="Vishnu_Sanjay_Kumar.pdf"
          className="resume-btn"
        >
          Resume ↓
        </a>

      </nav>



      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        id="home"
        className="hero"
      >

        <div className="hero-content">

          <p className="small-title">
            AI ENGINEERING • SOFTWARE DEVELOPMENT • CONNECTED SYSTEMS (IoT)
          </p>


          <p className="hello">
            Hello, I'm
          </p>


          <h1>
            Vishnu Sanjay Kumar
          </h1>


          <h2>
            AI & Data Science Engineer
          </h2>


          <p className="intro">

            I build intelligent applications and software solutions
            that combine Artificial Intelligence, Machine Learning,
            and modern software technologies.

          </p>


          {/* ================= BUTTONS ================= */}

          <div className="hero-buttons">

            <Link
              to="/projects"
              className="primary-btn"
            >
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


          {/* ================= TECHNOLOGIES ================= */}

          <p className="technologies">

            Java Full Stack Development <span>•</span>

            Python <span>•</span>

            AI/ML <span>•</span>

            Full Stack Development MERN <span>•</span>

            IoT

          </p>


          {/* ================= SOCIAL LINKS ================= */}

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


            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=vishnusanjay605@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Email
            </a>


            <a href="tel:+919360157609">
              Mobile
            </a>


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



      {/* =====================================================
          WHAT I DO
      ===================================================== */}

      <section className="what-i-do">

        <div className="do-item">

          <span>
            01
          </span>

          <h3>
            AI & Machine Learning
          </h3>

        </div>


        <div className="do-item">

          <span>
            02
          </span>

          <h3>
            Software Development
          </h3>

        </div>


        <div className="do-item">

          <span>
            03
          </span>

          <h3>
            IoT & Intelligent Systems
          </h3>

        </div>

      </section>



      {/* =====================================================
          FEATURED WORK
      ===================================================== */}

      <section
        id="projects"
        className="section"
      >

        <div className="section-header">

          <div>

            <p className="section-label">
              SELECTED WORK
            </p>

            <h2>
              Featured Work
            </h2>

          </div>


          <Link
            to="/projects"
            className="view-link"
          >
            View All Projects ↗
          </Link>

        </div>



        <div className="project-grid">

          {/* Project 1 */}

          <div className="project-card">

            <span className="project-number">
              01
            </span>

            <div>

              <h3>
                VISAI
              </h3>

              <p>
                Predictive Maintenance System
              </p>

            </div>

            <span className="project-arrow">
              ↗
            </span>

          </div>


          {/* Project 2 */}

          <div className="project-card">

            <span className="project-number">
              02
            </span>

            <div>

              <h3>
                ZenPath
              </h3>

              <p>
                AI-Based Stress Prediction Platform
              </p>

            </div>

            <span className="project-arrow">
              ↗
            </span>

          </div>


          {/* Project 3 */}

          <div className="project-card">

            <span className="project-number">
              03
            </span>

            <div>

              <h3>
                PalmIntelli
              </h3>

              <p>
                AI + IoT Assistive System
              </p>

            </div>

            <span className="project-arrow">
              ↗
            </span>

          </div>

        </div>

      </section>



      {/* =====================================================
          ABOUT PREVIEW
      ===================================================== */}

      <section
        id="about"
        className="about-preview"
      >

        <div>

          <p className="section-label">
            A LITTLE ABOUT ME
          </p>


          <h2>
            Building practical solutions with AI,
            software & IoT.
          </h2>

        </div>


        <div>

          <p>

            I'm an AI & Data Science student passionate
            about building practical AI, software,
            and IoT solutions.

          </p>


          <Link
            to="/about"
            className="view-link"
          >
            More About Me ↗
          </Link>

        </div>

      </section>



      {/* =====================================================
          ACHIEVEMENTS
      ===================================================== */}

      <section
        id="achievements"
        className="section"
      >

        <div className="section-header">

          <div>

            <p className="section-label">
              MILESTONES
            </p>


            <h2>
              Achievements
            </h2>

          </div>


          <Link
            to="/achievements"
            className="view-link"
          >
            View All Achievements ↗
          </Link>

        </div>



        <div className="achievement-grid">

          <div className="achievement-card">

            <span>
              🏆
            </span>

            <h3>
              Hackathon Winner
            </h3>

          </div>


          <div className="achievement-card">

            <span>
              🏆
            </span>

            <h3>
              VISAI 2025 Winner
            </h3>

          </div>


          <div className="achievement-card">

            <span>
              💡
            </span>

            <h3>
              Innovation Grant Recipient
            </h3>

          </div>

        </div>

      </section>



      {/* =====================================================
          EXPERIENCE
      ===================================================== */}

      <section
        id="experience"
        className="experience-anchor"
      >

        <div className="experience-preview">

          <p className="section-label">
            EXPERIENCE
          </p>

          <h2>
            Practical experience in AI,
            Machine Learning & IoT.
          </h2>


          <Link
            to="/experience"
            className="view-link"
          >
            View Experience ↗
          </Link>

        </div>

      </section>



      {/* =====================================================
          CONTACT SECTION
      ===================================================== */}

      <section
        id="contact"
        className="contact-section"
      >

        {/* ================= CONTACT HEADER ================= */}

        <div className="contact-header">

          <p className="section-label">
            GET IN TOUCH
          </p>


          <h2>
            Let's Build Something Meaningful.
          </h2>


          <p>
            Interested in working together or discussing
            an opportunity? Send me a message and I'll
            get back to you.
          </p>

        </div>



        <div className="contact-container">


          {/* =================================================
              CONTACT FORM
          ================================================= */}

          <div className="contact-form-wrapper">

            <p className="form-label">
              SEND A MESSAGE
            </p>


            <form
              ref={form}
              onSubmit={sendEmail}
            >


              {/* NAME + EMAIL */}

              <div className="form-row">


                <div className="form-group">

                  <label htmlFor="name">
                    Your Name
                  </label>


                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    required
                  />

                </div>



                <div className="form-group">

                  <label htmlFor="email">
                    Your Email
                  </label>


                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    required
                  />

                </div>

              </div>



              {/* SUBJECT */}

              <div className="form-group">

                <label htmlFor="subject">
                  Subject
                </label>


                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="What is this about?"
                  required
                />

              </div>



              {/* MESSAGE */}

              <div className="form-group">

                <label htmlFor="message">
                  Message
                </label>


                <textarea
                  id="message"
                  name="message"
                  rows="7"
                  placeholder="Write your message..."
                  required
                ></textarea>

              </div>



              {/* BUTTON */}

              <button
                type="submit"
                className="primary-btn contact-submit"
              >
                Send Message ↗
              </button>



              {/* STATUS */}

              {status && (

                <p className="form-status">
                  {status}
                </p>

              )}

            </form>

          </div>



          {/* =================================================
              YOUR CONTACT DETAILS
          ================================================= */}

          <div className="contact-details">

            <p className="form-label">
              CONTACT DETAILS
            </p>



            {/* EMAIL */}

            <div className="contact-detail">

              <span className="contact-detail-label">
                EMAIL
              </span>


              <a href="mailto:vishnusanjay605@gmail.com">

                vishnusanjay605@gmail.com

              </a>

            </div>



            {/* PHONE */}

            <div className="contact-detail">

              <span className="contact-detail-label">
                PHONE
              </span>


              <a href="tel:+919360157609">

                +91 93601 57609

              </a>

            </div>



            {/* LOCATION */}

            <div className="contact-detail">

              <span className="contact-detail-label">
                LOCATION
              </span>


              <p>
                Tirunelveli, Tamil Nadu, India
              </p>

            </div>



            {/* CONNECT */}

            <div className="contact-detail">

              <span className="contact-detail-label">
                CONNECT
              </span>


              <div className="contact-socials">

                <a
                  href="https://github.com/vishnu24102005"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub ↗
                </a>


                <a
                  href="https://www.linkedin.com/in/vishnu-sanjay-kumar-p-45427a290/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn ↗
                </a>


                <a
                  href="https://leetcode.com/u/vishnu_sanjay_kumar/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LeetCode ↗
                </a>

              </div>

            </div>

          </div>

        </div>

      </section>



      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer>

        <div className="footer-info">

          <strong>
            Vishnu Sanjay Kumar
          </strong>


          <span>
            AI & Data Science Engineer
          </span>

        </div>


        <div className="footer-links">

          <a
            href="https://github.com/vishnu24102005"
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


          <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=vishnusanjay605@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Email
            </a>

        </div>


        <p>
          © 2026 Vishnu Sanjay Kumar
        </p>

      </footer>

    </div>
  );
}



/* =========================================================
   ROUTING
========================================================= */

function App() {

  return (

    <Routes>

      {/* HOME */}

      <Route
        path="/"
        element={<Home />}
      />


      {/* ABOUT */}

      <Route
        path="/about"
        element={<About />}
      />


      {/* PROJECTS */}

      <Route
        path="/projects"
        element={<Projects />}
      />


      {/* EXPERIENCE */}

      <Route
        path="/experience"
        element={<Experience />}
      />


      {/* ACHIEVEMENTS */}

      <Route
        path="/achievements"
        element={<Achievements />}
      />
      <Route
        path="/certification"
        element={<Certification />}
      />

    </Routes>

  );
}


export default App; 