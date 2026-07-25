import "./About.css";

function About() {
  return (
    <div className="about-page">

      {/* ================= HERO ================= */}

      <section className="about-hero">

        <p className="about-label">
          ABOUT ME
        </p>

        <h1>
          Building Intelligent Systems Across
          <span> AI, Software & Edge Computing</span>
        </h1>

      </section>


      {/* ================= ABOUT + PHOTO ================= */}

      <section className="about-introduction">

        {/* PHOTO */}

        <div className="about-photo-container">

          <div className="about-photo">

            {/* Replace this with your actual photo */}
            <div className="photo-placeholder">

              <img
                src="/photo.jpg"
                alt="Vishnu Sanjay Kumar"
                className="profile-photo"
              />

              <p>
                YOUR PHOTO
              </p>

            </div>

          </div>

        </div>


        {/* CONTENT */}

        <div className="about-content">

          <div className="about-block">

            <p className="section-label">
              ABOUT ME
            </p>

            <h2>
              Who I Am
            </h2>

            <p>
              I am an Artificial Intelligence and Data Science
              undergraduate with hands-on experience in Machine
              Learning, Deep Learning, IoT systems, and full-stack
              development.
            </p>

            <p>
              I enjoy building practical solutions that combine
              intelligent models, software applications, and
              connected systems to solve real-world problems.
            </p>

          </div>


          {/* OBJECTIVE */}

          <div className="about-block objective">

            <p className="section-label">
              OBJECTIVE
            </p>

            <h2>
              What I Aim To Build
            </h2>

            <p>
              To build scalable and intelligent systems as a
              Software Developer or Machine Learning Engineer,
              applying AI, software engineering, and emerging
              technologies to solve meaningful real-world problems.
            </p>

          </div>

        </div>

      </section>


      {/* ================= ACADEMIC BACKGROUND ================= */}

      <section className="academic-section">

        <div className="section-heading">

          <div>

            <p className="section-label">
              ACADEMIC BACKGROUND
            </p>

            <h2>
              Education
            </h2>

          </div>

        </div>


        <div className="academic-grid">

          {/* DEGREE */}

          <div className="degree-card">

            <div className="academic-number">
              01
            </div>

            <div className="degree-content">

              <p className="degree-type">
                B.Tech
              </p>

              <h3>
                Artificial Intelligence & Data Science
              </h3>

              <p className="college-name">
                Francis Xavier Engineering College,
                Tirunelveli
              </p>

              <p className="study-period">
                2023 — 2027
              </p>

              <div className="cgpa-box">

                <span>
                  CGPA
                </span>

                <strong>
                  8.4 / 10
                </strong>

              </div>

            </div>

          </div>


          {/* SCHOOL EDUCATION */}

          <div className="school-grid">

            {/* HSC */}

            <div className="school-card">

              <span className="school-number">
                02
              </span>

              <p className="school-type">
                HSC
              </p>

              <h3>
                Muthamil Public School
              </h3>

              <p>
                CBSE • Tirunelveli
              </p>

              <span className="school-year">
                2023
              </span>

              <strong className="percentage">
                64%
              </strong>

            </div>


            {/* SSLC */}

            <div className="school-card">

              <span className="school-number">
                03
              </span>

              <p className="school-type">
                SSLC
              </p>

              <h3>
                Muthamil Public School
              </h3>

              <p>
                CBSE • Tirunelveli
              </p>

              <span className="school-year">
                2021
              </span>

              <strong className="percentage">
                65%
              </strong>

            </div>

          </div>

        </div>

      </section>


      {/* ================= MY DOMAINS ================= */}

      <section className="domains-section">

        <div className="domains-heading">

          <p className="section-label">
            MY DOMAINS
          </p>

          <h2>
            What I Build With
          </h2>

          <p>
            Six areas where I combine software engineering,
            artificial intelligence, and connected systems.
          </p>

        </div>


        <div className="domains-grid">

          {/* 01 */}

          <div className="domain-card">

            <span className="domain-number">
              01
            </span>

            <div>

              <p className="domain-category">
                JAVA FULL STACK
              </p>

              <h3>
                Java Full Stack Developer
              </h3>

              <p className="domain-tech">
                Spring Boot • REST APIs • MySQL • Backend Development
              </p>

            </div>

          </div>


          {/* 02 */}

          <div className="domain-card">

            <span className="domain-number">
              02
            </span>

            <div>

              <p className="domain-category">
                MACHINE LEARNING
              </p>

              <h3>
                Machine Learning Engineer
              </h3>

              <p className="domain-tech">
                Python • Scikit-Learn • Model Development
                • Model Training • Data Preprocessing
                • Classification • Model Evaluation
              </p>

            </div>

          </div>


          {/* 03 */}

          <div className="domain-card">

            <span className="domain-number">
              03
            </span>

            <div>

              <p className="domain-category">
                DEEP LEARNING
              </p>

              <h3>
                Deep Learning Engineer
              </h3>

              <p className="domain-tech">
                TensorFlow • CNN • ANN • Computer Vision
              </p>

            </div>

          </div>


          {/* 04 */}

          <div className="domain-card featured-domain">

            <span className="domain-number">
              04
            </span>

            <div>

              <p className="domain-category">
                EDGE AI
              </p>

              <h3>
                Edge AI / TinyML Developer
              </h3>

              <p className="domain-tech">
                TinyML • ESP32 • Edge Impulse
                • Neural Networks • Real-Time Inference
              </p>

            </div>

          </div>


          {/* 05 */}

          <div className="domain-card">

            <span className="domain-number">
              05
            </span>

            <div>

              <p className="domain-category">
                JAVASCRIPT FULL STACK
              </p>

              <h3>
                JavaScript Full Stack Developer
              </h3>

              <p className="domain-tech">
                JavaScript • React.js • Node.js
                • Express.js • MongoDB • MERN Stack
              </p>

            </div>

          </div>


          {/* 06 */}

          <div className="domain-card">

            <span className="domain-number">
              06
            </span>

            <div>

              <p className="domain-category">
                CROSS-PLATFORM DEVELOPMENT
              </p>

              <h3>
                Cross-Platform App Developer
              </h3>

              <p className="domain-tech">
                Dart • Flutter • Python • MySQL
              </p>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
}

export default About;