import { useState } from "react";
import "./Certification.css";

const certifications = [
  // ================= AI / MACHINE LEARNING =================
  {
    id: 1,
    category: "Artificial Intelligence / Machine Learning",
    title: "Machine Learning",
    issuer: "Stanford Online – Coursera",
    date: "Feb 2026",
    image: "/ML.png",
  },
  {
    id: 2,
    category: "Artificial Intelligence / Machine Learning",
    title: "Machine Learning",
    issuer: "Pantech Solutions",
    date: "Jun 2024",
    image: "/Pan.png",
  },
  {
    id: 3,
    category: "Artificial Intelligence / Machine Learning",
    title: "Large Language Models (LLM)",
    issuer: "NPTEL",
    date: "Jan – Apr 2025",
    score: "55%",
    image: "/nptelLLM.png",
  },

  // ================= SOFTWARE / FULL STACK =================
  {
    id: 4,
    category: "Software Development / Full Stack",
    title: "MERN Stack Development",
    issuer: "Packt – Coursera",
    date: "May 2026",
    image: "/bc.png",
  },
  {
    id: 5,
    category: "Software Development / Full Stack",
    title: "Spring Framework for Java Development",
    issuer: "Coursera SkillUp",
    date: "Apr 2026",
    image: "/sp.png",
  },
  {
    id: 6,
    category: "Software Development / Full Stack",
    title: "Java Development with Databases",
    issuer: "Coursera SkillUp",
    date: "Apr 2026",
    image: "/sd.png",
  },
  {
    id: 7,
    category: "Software Development / Full Stack",
    title:
      "Cloud Native, Microservices, Containers, DevOps & Agile",
    issuer: "IBM – Coursera",
    date: "Apr 2026",
    image: "/sm.png",
  },

  // ================= IOT / EMBEDDED =================
  {
    id: 8,
    category: "IoT / Embedded Systems",
    title: "Embedded Systems & IoT",
    issuer: "Offline Certification",
    date: "Apr – May 2024",
    image: "/IOT applications using nodemcu &raspberry pi(one week workshop).jpeg",
  },
  {
    id: 9,
    category: "IoT / Embedded Systems",
    title: "Industry 4.0 & Industrial IoT",
    issuer: "NPTEL",
    date: "Jan – Apr 2025",
    score: "Elite • 72%",
    image: "/nptelIOT.png",
  },

  // ================= PROGRAMMING / CS =================
  {
    id: 10,
    category: "Programming / CS Fundamentals",
    title: "The Joy of Computing Using Python",
    issuer: "NPTEL",
    date: "Jan – Apr 2025",
    score: "Elite • 65%",
    image: "/nptelp.png",
  },
  {
    id: 11,
    category: "Programming / CS Fundamentals",
    title: "Privacy and Security in Online Social Media",
    issuer: "NPTEL",
    date: "Jul – Oct 2025",
    score: "Elite • 67%",
    image: "/nptelpp.png",
  },
  {
  id: 12,
  category: "Software Development / Full Stack",
  title: "Young CTO - Series 2, Mobile Application Development Workshop",
  issuer: "Maxelerator Foundation",
  date: "Feb 22 – 23, 2024",
  score: "Certificate of Participation",
  image: "/YOUNG CTO.jpg",
  },
];

function Certifications() {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const categories = [
    "Artificial Intelligence / Machine Learning",
    "Software Development / Full Stack",
    "IoT / Embedded Systems",
    "Programming / CS Fundamentals",
  ];

  return (
    <div className="certifications-page">

      {/* ================= HEADER ================= */}

      <section className="certifications-header">

        <p className="section-label">
          CERTIFICATIONS
        </p>

        <h1>
          Continuous Learning
        </h1>

        <p className="certifications-intro">
          Certifications and courses that have strengthened my
          knowledge across Artificial Intelligence, Machine Learning,
          Software Development, Full Stack Development, IoT and
          Computer Science fundamentals.
        </p>

      </section>


      {/* ================= CERTIFICATION SECTIONS ================= */}

      <div className="certifications-container">

        {categories.map((category) => {

          const categoryCertificates = certifications.filter(
            (certificate) =>
              certificate.category === category
          );

          return (
            <section
              className="certificate-category"
              key={category}
            >

              <div className="category-heading">

                <p className="category-number">
                  {String(
                    categories.indexOf(category) + 1
                  ).padStart(2, "0")}
                </p>

                <h2>
                  {category}
                </h2>

              </div>


              <div className="certificate-grid">

                {categoryCertificates.map(
                  (certificate) => (

                    <div
                      className="certificate-card"
                      key={certificate.id}
                      onClick={() =>
                        setSelectedCertificate(
                          certificate
                        )
                      }
                    >

                      {/* Certificate Preview */}

                      <div className="certificate-image-wrapper">

                        <img
                          src={certificate.image}
                          alt={`${certificate.title} certificate`}
                          className="certificate-image"
                        />

                        <div className="certificate-overlay">
                          <span>
                            View Certificate ↗
                          </span>
                        </div>

                      </div>


                      {/* Certificate Information */}

                      <div className="certificate-info">

                        <span className="certificate-date">
                          {certificate.date}
                        </span>

                        <h3>
                          {certificate.title}
                        </h3>

                        <p className="certificate-issuer">
                          {certificate.issuer}
                        </p>

                        {certificate.score && (
                          <span className="certificate-score">
                            {certificate.score}
                          </span>
                        )}

                      </div>

                    </div>

                  )
                )}

              </div>

            </section>
          );
        })}

      </div>


      {/* ================= CERTIFICATE MODAL ================= */}

      {selectedCertificate && (

        <div
          className="certificate-modal"
          onClick={() =>
            setSelectedCertificate(null)
          }
        >

          <div
            className="certificate-modal-content"
            onClick={(e) =>
              e.stopPropagation()
            }
          >

            {/* CLOSE */}

            <button
              className="certificate-close"
              onClick={() =>
                setSelectedCertificate(null)
              }
            >
              ×
            </button>


            {/* IMAGE */}

            <img
              src={selectedCertificate.image}
              alt={selectedCertificate.title}
              className="certificate-full-image"
            />


            {/* DETAILS */}

            <div className="modal-certificate-info">

              <h2>
                {selectedCertificate.title}
              </h2>

              <p>
                {selectedCertificate.issuer}
              </p>

              <span>
                {selectedCertificate.date}
              </span>

            </div>

          </div>

        </div>

      )}

    </div>
  );
}

export default Certifications;