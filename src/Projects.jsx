import { useState } from "react";
import "./Projects.css";

const projects = [
  {
    number: "01",
    name: "MachinaGuard",
    title: "AI-Powered Predictive Maintenance System",
    technologies: [
      "Python",
      "Flask",
      "Scikit-Learn",
      "MySQL",
      "IoT Sensors",
    ],

    description:
      "An AI-powered predictive maintenance system that uses industrial IoT sensor data to monitor equipment health and predict potential machine failures. Machine learning classification models are used to identify failure conditions and help reduce equipment downtime.",

    features: [
      "Industrial IoT sensor monitoring",
      "Machine failure prediction",
      "Machine learning classification",
      "Equipment health monitoring",
    ],

    contribution:
      "Developed the machine learning workflow, data preprocessing, prediction system, and backend integration for equipment health monitoring.",

    images: [
      "/p1.png",
      "/p2.png",
      "/p3.png",
      "/p4.png",
    ],

    live: "https://drive.google.com/file/d/1sDZo0-8f-hYEWeflpt702UX6--gJN3UY/view",
    github: "",
  },

  {
    number: "02",
    name: "MobiSafe",
    title: "AI-Powered Fall Detection & Emergency Alert System",

    technologies: [
      "ESP32",
      "TinyML",
      "Edge Impulse",
      "Neural Networks",
      "GPS",
    ],

    description:
      "A TinyML-based wearable system designed for real-time fall detection using IMU sensor data. An optimized neural network model runs directly on the ESP32 for edge AI inference, with GPS-based emergency alerts for rapid notification.",

    features: [
      "Real-time fall detection",
      "TinyML edge inference",
      "ESP32-based wearable system",
      "GPS emergency alerts",
    ],

    contribution:
      "Worked on the TinyML model development, edge deployment, sensor integration, and real-time fall detection workflow.",

    images: [
      "/m1.jpeg",
      "/m2.jpeg","/m3.jpeg","/m4.png"
    ],

    live: "https://drive.google.com/drive/folders/1abfxFxPQYPB0BdTgmCDfKPPA1sqkSjTp",
    github: "https://github.com/vishnu24102005/fall-detection",
  },

  {
    number: "03",
    name: "OnioVault",
    title: "Smart Modular IoT-Based Onion Cold Storage System",

    technologies: [
      "ESP32",
      "MQTT",
      "IoT Sensors",
    ],

    description:
      "An IoT-based cold storage system designed for onion preservation through real-time environmental monitoring. The system uses ESP32, MQTT, and IoT sensors to monitor storage conditions.",

    features: [
      "Real-time environmental monitoring",
      "ESP32-based IoT system",
      "MQTT communication",
      "Storage condition monitoring",
    ],

    contribution:
      "Worked on IoT sensor integration, ESP32 development, MQTT communication, and real-time monitoring of storage conditions.",

    images: [
      "/o (1).png",
      "/o (2).png",
      "/o (3).png",
      "/o (4).png",
    ],

    live: "https://drive.google.com/file/d/1s0GcLfSil-VtTGO07VpHJJDmC8d8gHeX/view",
    github: "",
  },

  {
    number: "04",
    name: "Memory Aid",
    title: "AI-Powered Cognitive Assistance Mobile Application",

    technologies: [
      "Flutter",
      "Dart",
      "Python",
      "MySQL",
      "Machine Learning",
      "Ollama",
    ],

    description:
      "An AI-powered mobile application designed for task scheduling, reminders, and cognitive assistance. The Flutter application integrates backend data synchronization and AI-driven reminders to provide personalized assistance.",

    features: [
      "AI-powered reminders",
      "Task scheduling",
      "Personalized assistance",
      "Mobile application interface",
    ],

    contribution:
      "Developed the Flutter application interface, backend integration, database connectivity, and AI-assisted reminder functionality.",

    images: [
      "/s (1).png",
      "/s (2).png",
      "/s (3).png",
      "/s (4).png",
    ],

    live: "https://drive.google.com/file/d/1lGfYlEIYfgH9EXRN8dsiDzLVYFJOHmJv/view",
    github: "https://github.com/vishnu24102005/cognitiveAI",
  },

  {
    number: "05",
    name: "WheatGuard",
    title: "AI-Powered Wheat Disease Detection System",

    technologies: [
      "CNN",
      "TensorFlow",
      "Computer Vision",
      "Deep Learning",
    ],

    description:
      "A computer vision system that uses a CNN-based deep learning model to classify wheat diseases from leaf images. The project includes image preprocessing and TensorFlow model training for multi-class disease detection.",

    features: [
      "Wheat leaf image classification",
      "CNN-based disease detection",
      "Image preprocessing",
      "Multi-class classification",
    ],

    contribution:
      "Worked on image preprocessing, CNN model development, training, evaluation, and integration of the disease detection workflow.",

    images: [
      "/w1 (1).png",

    ],

    live: "https://wheat-disease-1.onrender.com/",
    github: "https://github.com/vishnu24102005/wheat_disease",
  },

  {
    number: "06",
    name: "ZenPath",
    title: "AI-Based Stress Prediction System",

    technologies: [
      "FastAPI",
      "Random Forest",
      "PostgreSQL",
      "Machine Learning",
      "REST API",
    ],

    description:
      "A machine learning-powered stress prediction platform with a FastAPI backend. The system provides authentication, stress prediction, and prediction-history APIs while storing user prediction data in PostgreSQL.",

    features: [
      "AI-based stress prediction",
      "User authentication",
      "Prediction history",
      "REST API backend",
      "PostgreSQL database",
    ],

    contribution:
      "Developed the FastAPI backend, machine learning prediction workflow, authentication APIs, PostgreSQL integration, and prediction history functionality.",

    images: [
      "/st (1).png",
      "/st (3).png"
    ],

    live: "https://zen-path-frontend.vercel.app/",
    github: "https://github.com/vishnu24102005/ZenPathFrontend",

  },
];


function ProjectCard({ project }) {

  const [currentImage, setCurrentImage] = useState(0);


  const nextImage = () => {

    setCurrentImage(
      (prev) => (prev + 1) % project.images.length
    );

  };


  const previousImage = () => {

    setCurrentImage(
      (prev) =>
        (prev - 1 + project.images.length) %
        project.images.length
    );

  };


  return (

    <article className="project-case-study">

      {/* ================= IMAGE SLIDER ================= */}

      <div className="project-slider">

        <img
          src={project.images[currentImage]}
          alt={`${project.name} screenshot ${currentImage + 1}`}
          className="project-image"
        />


        {/* Previous */}

        <button
          className="slider-button slider-prev"
          onClick={previousImage}
          aria-label="Previous image"
        >
          ←
        </button>


        {/* Next */}

        <button
          className="slider-button slider-next"
          onClick={nextImage}
          aria-label="Next image"
        >
          →
        </button>


        {/* Image counter */}

        <div className="image-counter">

          {currentImage + 1} / {project.images.length}

        </div>


        {/* Dots */}

        <div className="slider-dots">

          {project.images.map((_, index) => (

            <button
              key={index}
              className={
                index === currentImage
                  ? "slider-dot active"
                  : "slider-dot"
              }
              onClick={() => setCurrentImage(index)}
              aria-label={`Show image ${index + 1}`}
            />

          ))}

        </div>

      </div>


      {/* ================= PROJECT INFORMATION ================= */}

      <div className="project-information">


        {/* Project Number */}

        <span className="case-number">
          PROJECT {project.number}
        </span>


        {/* Project Name */}

        <h2>
          {project.name}
        </h2>


        {/* Project Title */}

        <h3>
          {project.title}
        </h3>


        {/* Technologies */}

        <div className="technology-tags">

          {project.technologies.map((technology) => (

            <span key={technology}>
              {technology}
            </span>

          ))}

        </div>


        {/* About */}

        <div className="project-detail">

          <p className="detail-label">
            ABOUT THE PROJECT
          </p>

          <p className="detail-text">
            {project.description}
          </p>

        </div>


        {/* Key Features */}

        <div className="project-detail">

          <p className="detail-label">
            KEY FEATURES
          </p>

          <ul className="feature-list">

            {project.features.map((feature) => (

              <li key={feature}>
                {feature}
              </li>

            ))}

          </ul>

        </div>


        {/* Contribution */}

        <div className="project-detail">

          <p className="detail-label">
            MY CONTRIBUTION
          </p>

          <p className="detail-text">
            {project.contribution}
          </p>

        </div>


        {/* Links */}

        <div className="project-links">

          {project.live && (

            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="project-live-button"
            >
              Live Project ↗
            </a>

          )}


          {project.github && (

            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="project-github-button"
            >
              GitHub ↗
            </a>

          )}

        </div>

      </div>

    </article>

  );
}


function Projects() {

  return (

    <main className="projects-page">


      {/* ================= PAGE HEADER ================= */}

      <section className="projects-header">

        <p className="projects-label">
          PROJECTS
        </p>

        <h1>
          Selected Work
        </h1>

        <p className="projects-intro">
          A collection of AI, software, IoT and intelligent
          systems I've designed and developed.
        </p>

      </section>


      {/* ================= PROJECTS ================= */}

      <section className="projects-list">

        {projects.map((project) => (

          <ProjectCard
            key={project.number}
            project={project}
          />

        ))}

      </section>


    </main>

  );

}


export default Projects;