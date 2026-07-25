import "./Experience.css";

const experiences = [
  {
    number: "01",
    company: "Srishti Innovative Pvt. Ltd.",
    role: "Artificial Intelligence & IoT Intern",
    duration: "Dec 2025 — Jan 2026",
    location: "Bangalore",

    technologies: [
      "AI",
      "Machine Learning",
      "Computer Vision",
      "IoT",
    ],

    description:
      "Developed an AI-based anomaly detection system for real-time traffic and intrusion prediction using machine learning models with dashboard-based monitoring and alerts.",

    contributions: [
      "Developed AI-based anomaly detection",
      "Built ML models for traffic and intrusion prediction",
      "Implemented computer vision using ArUco markers",
      "Integrated object tracking with IoT systems",
    ],
  },

  {
    number: "02",
    company: "Marcello Tech — AICTE",
    role: "Machine Learning, AI & Deep Learning Intern",
    duration: "Jul 2024 — Sep 2024",
    location: "",

    technologies: [
      "Machine Learning",
      "Deep Learning",
      "Python",
    ],

    description:
      "Built and trained machine learning and deep learning models using Python for real-world datasets.",

    contributions: [
      "Data preprocessing",
      "Model training",
      "Model testing",
      "Performance improvement",
      "Worked across the complete ML lifecycle",
    ],
  },

  {
    number: "03",
    company: "Quantanics TechServ Pvt. Ltd.",
    role: "Embedded Systems & IoT Intern",
    duration: "Apr 2024 — May 2024",
    location: "",

    technologies: [
      "Embedded Systems",
      "IoT",
      "NodeMCU",
      "Raspberry Pi",
    ],

    description:
      "Worked on embedded IoT systems using NodeMCU and Raspberry Pi for sensor data acquisition and real-time monitoring applications.",

    contributions: [
      "Sensor data acquisition",
      "Real-time monitoring",
      "IoT data pipelines",
      "Prepared data for machine learning training",
      "Explored edge-device deployment concepts",
    ],
  },
];


function ExperienceItem({ experience }) {

  return (
    <article className="experience-item">

      {/* Timeline number */}

      <div className="experience-number">
        {experience.number}
      </div>


      {/* Timeline line */}

      <div className="timeline-line">
        <span className="timeline-dot"></span>
      </div>


      {/* Experience content */}

      <div className="experience-content">

        <div className="experience-top">

          <div>

            <p className="experience-company">
              {experience.company}
            </p>

            <h2 className="experience-role">
              {experience.role}
            </h2>

          </div>


          <div className="experience-date">

            <span>
              {experience.duration}
            </span>

            {experience.location && (
              <span>
                {experience.location}
              </span>
            )}

          </div>

        </div>


        {/* Technology tags */}

        <div className="experience-tags">

          {experience.technologies.map((technology) => (
            <span key={technology}>
              {technology}
            </span>
          ))}

        </div>


        {/* About */}

        <div className="experience-detail">

          <p className="experience-label">
            ABOUT THE EXPERIENCE
          </p>

          <p className="experience-description">
            {experience.description}
          </p>

        </div>


        {/* Contributions */}

        <div className="experience-detail">

          <p className="experience-label">
            KEY CONTRIBUTIONS
          </p>

          <ul className="contribution-list">

            {experience.contributions.map((contribution) => (
              <li key={contribution}>
                {contribution}
              </li>
            ))}

          </ul>

        </div>

      </div>

    </article>
  );
}


function Experience() {

  return (

    <main className="experience-page">


      {/* ================= HEADER ================= */}

      <section className="experience-header">

        <p className="experience-label-top">
          EXPERIENCE
        </p>

        <h1>
          Where I've gained practical experience
          through AI, Machine Learning, Software,
          and IoT development.
        </h1>

      </section>


      {/* ================= SNAPSHOT ================= */}

      <section className="experience-snapshot">

        <div className="snapshot-item">

          <strong>3</strong>

          <span>
            Internships
          </span>

        </div>


        <div className="snapshot-item">

          <strong>AI</strong>

          <span>
            Machine Learning
          </span>

        </div>


        <div className="snapshot-item">

          <strong>DL</strong>

          <span>
            Deep Learning
          </span>

        </div>


        <div className="snapshot-item">

          <strong>CV</strong>

          <span>
            Computer Vision
          </span>

        </div>


        <div className="snapshot-item">

          <strong>IoT</strong>

          <span>
            Embedded Systems
          </span>

        </div>

      </section>


      {/* ================= TIMELINE ================= */}

      <section className="experience-timeline">

        {experiences.map((experience) => (

          <ExperienceItem
            key={experience.number}
            experience={experience}
          />

        ))}

      </section>


    </main>
  );
}


export default Experience;