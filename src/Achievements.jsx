import { useState } from "react";
import "./Achievements.css";

const achievements = [
  // =========================================================
  // INTERNATIONAL RECOGNITION
  // =========================================================

  {
    id: 1,
    category: "International Recognition",
    type: "GLOBAL NOMINEE",
    title: "NASA Space Apps Challenge 2025",
    description:
      "Selected as a Global Nominee in NASA Space Apps Challenge 2025, among 11,500+ participants/teams globally.",
    year: "2025",

    // Add 1, 2, 3 or 4 images here
    images: [
      "/nasa/1.png",
      "/nasa/2.png",
      "/nasa/3.png",
    ],
  },

  {
    id: 2,
    category: "International Recognition",
    type: "INTERNATIONAL HONORABLE MENTION",
    title: "Yesist’12 International Innovation Contest 2024",
    description:
      "Received an Honorable Mention at the Yesist’12 International Innovation Contest held in Tunisia, North Africa.",
    year: "2024",

    images: [
      "/tun/2.jpg",
      "/tun/3.jpg",
      "/tun/4.jpg",
      "/tun/1.jpg",
      "/tun/5.jpg",

    ],
  },

  // =========================================================
  // NATIONAL-LEVEL COMPETITIONS
  // =========================================================

  {
    id: 3,
    category: "National-Level Competition",
    type: "WINNER",
    title: "Hack the Mountain 2024",
    description:
      "Won the Hack the Mountain 2024 National Online Hackathon, recognized for AI-based problem solving and innovative solution development.",
    year: "2024",

    images: [
      "/HM/1.png",
      "/HM/2.png",
      "/HM/3.png",
    ],
  },

  {
    id: 4,
    category: "National-Level Competition",
    type: "WINNER",
    title: "VISAI 2025",
    description:
      "Won VISAI 2025 for developing an AI-based Predictive Maintenance System.",
    year: "2025",

    images: [
      "/visai/2.jpg",
      "/visai/1.png",
      "/visai/3.jpg",
    ],
  },

  // =========================================================
  // INSTITUTIONAL ACHIEVEMENTS
  // =========================================================

  {
    id: 5,
    category: "Institutional-Level Achievement",
    type: "WINNER",
    title: "HACK2HIRE AI Challenge 2025",
    description:
      "Won the HACK2HIRE AI Challenge 2025 at the college level by developing an AI-powered Memory Aid mobile application for cognitive assistance.",
    year: "2025",

    images: [
      "/hack/1.jpg",
      "/hack/2.jpeg",
    ],
  },

  // =========================================================
  // INNOVATION & FUNDING
  // =========================================================

  {
    id: 6,
    category: "Innovation & Funding",
    type: "INNOVATION GRANT RECIPIENT",
    title: "EDII Tamil Nadu — Innovation Voucher Programme",
    description:
      "Received an Innovation Grant of ₹2.5 Lakhs through the EDII Tamil Nadu Innovation Voucher Programme for AI/IoT-based innovation project development.",
    year: "2025",
    grant: "₹2.5 Lakhs",

    images: [
      "/EDII/edii (1).png",
      "/EDII/edii2.jpg",
      "/EDII/edii (2).png",
    ],
  },
];


// =========================================================
// ACHIEVEMENT CARD
// =========================================================

function AchievementCard({
  achievement,
  onClick,
}) {
  return (
    <div
      className="achievement-card"
      onClick={onClick}
    >

      {/* IMAGE */}

      <div className="achievement-image-wrapper">

        <img
          src={achievement.images[0]}
          alt={`${achievement.title} achievement`}
          className="achievement-image"
        />

        <div className="achievement-overlay">
          <span>
            View Achievement ↗
          </span>
        </div>

      </div>


      {/* INFORMATION */}

      <div className="achievement-info">

        <span className="achievement-date">
          {achievement.year}
        </span>

        <p className="achievement-type">
          {achievement.type}
        </p>

        <h3>
          {achievement.title}
        </h3>

        <p className="achievement-description">
          {achievement.description}
        </p>

        {achievement.grant && (
          <span className="achievement-grant">
            {achievement.grant}
          </span>
        )}

      </div>

    </div>
  );
}


// =========================================================
// ACHIEVEMENTS PAGE
// =========================================================

function Achievements() {

  const [selectedAchievement, setSelectedAchievement] =
    useState(null);

  const [currentImage, setCurrentImage] =
    useState(0);


  // =========================================================
  // OPEN MODAL
  // =========================================================

  const openAchievement = (achievement) => {

    setSelectedAchievement(achievement);

    setCurrentImage(0);
  };


  // =========================================================
  // CLOSE MODAL
  // =========================================================

  const closeAchievement = () => {

    setSelectedAchievement(null);

    setCurrentImage(0);
  };


  // =========================================================
  // NEXT IMAGE
  // =========================================================

  const nextImage = () => {

    if (!selectedAchievement) return;

    setCurrentImage(
      (prev) =>
        (prev + 1) %
        selectedAchievement.images.length
    );
  };


  // =========================================================
  // PREVIOUS IMAGE
  // =========================================================

  const previousImage = () => {

    if (!selectedAchievement) return;

    setCurrentImage(
      (prev) =>
        (prev -
          1 +
          selectedAchievement.images.length) %
        selectedAchievement.images.length
    );
  };


  // =========================================================
  // CATEGORIES
  // =========================================================

  const categories = [
    "International Recognition",
    "National-Level Competition",
    "Institutional-Level Achievement",
    "Innovation & Funding",
  ];


  return (
    <main className="achievements-page">


      {/* =====================================================
          HEADER
      ===================================================== */}

      <section className="achievements-header">

        <p className="section-label">
          ACHIEVEMENTS
        </p>

        <h1>
          Recognition, competitions
          <br />
          & innovation milestones.
        </h1>

        <p className="achievements-intro">
          A collection of achievements from international
          competitions, hackathons, innovation programs,
          and AI-focused challenges.
        </p>

      </section>


      {/* =====================================================
          ACHIEVEMENT CATEGORIES
      ===================================================== */}

      <div className="achievements-container">

        {categories.map((category, categoryIndex) => {

          const categoryAchievements =
            achievements.filter(
              (achievement) =>
                achievement.category === category
            );


          // Don't display empty categories

          if (categoryAchievements.length === 0) {
            return null;
          }


          return (

            <section
              className="achievement-category"
              key={category}
            >


              {/* CATEGORY HEADER */}

              <div className="category-heading">

                <p className="category-number">

                  {String(
                    categoryIndex + 1
                  ).padStart(2, "0")}

                </p>

                <h2>
                  {category}
                </h2>

              </div>


              {/* =================================================
                  ACHIEVEMENT GRID
              ================================================= */}

              <div className="achievement-grid">

                {categoryAchievements.map(
                  (achievement) => (

                    <AchievementCard
                      key={achievement.id}
                      achievement={achievement}
                      onClick={() =>
                        openAchievement(
                          achievement
                        )
                      }
                    />

                  )
                )}

              </div>

            </section>

          );
        })}

      </div>


      {/* =====================================================
          ACHIEVEMENT MODAL
      ===================================================== */}

      {selectedAchievement && (

        <div
          className="achievement-modal"
          onClick={closeAchievement}
        >

          <div
            className="achievement-modal-content"
            onClick={(e) =>
              e.stopPropagation()
            }
          >


            {/* =================================================
                CLOSE BUTTON
            ================================================= */}

            <button
              className="achievement-close"
              onClick={closeAchievement}
            >
              ×
            </button>


            {/* =================================================
                IMAGE VIEWER
            ================================================= */}

            <div className="achievement-viewer">


              {/* PREVIOUS */}

              {selectedAchievement.images.length >
                1 && (

                <button
                  className="achievement-nav previous"
                  onClick={previousImage}
                >
                  ←
                </button>

              )}


              {/* MAIN IMAGE */}

              <img
                src={
                  selectedAchievement.images[
                    currentImage
                  ]
                }
                alt={
                  selectedAchievement.title
                }
                className="achievement-full-image"
              />


              {/* NEXT */}

              {selectedAchievement.images.length >
                1 && (

                <button
                  className="achievement-nav next"
                  onClick={nextImage}
                >
                  →
                </button>

              )}

            </div>


            {/* =================================================
                IMAGE COUNTER
            ================================================= */}

            {selectedAchievement.images.length >
              1 && (

              <div className="achievement-image-counter">

                {currentImage + 1} /{" "}
                {selectedAchievement.images.length}

              </div>

            )}


            {/* =================================================
                DETAILS
            ================================================= */}

            <div className="modal-achievement-info">

              <p className="modal-achievement-type">
                {selectedAchievement.type}
              </p>

              <h2>
                {selectedAchievement.title}
              </h2>

              <p>
                {selectedAchievement.description}
              </p>


              <div className="modal-achievement-meta">

                <span>
                  {selectedAchievement.year}
                </span>


                {selectedAchievement.grant && (

                  <span>
                    {selectedAchievement.grant}
                  </span>

                )}

              </div>

            </div>


            {/* =================================================
                IMAGE THUMBNAILS
            ================================================= */}

            {selectedAchievement.images.length >
              1 && (

              <div className="achievement-thumbnails">

                {selectedAchievement.images.map(
                  (image, index) => (

                    <button
                      key={image}
                      className={
                        currentImage === index
                          ? "thumbnail active"
                          : "thumbnail"
                      }
                      onClick={() =>
                        setCurrentImage(index)
                      }
                    >

                      <img
                        src={image}
                        alt={`Achievement ${
                          index + 1
                        }`}
                      />

                    </button>

                  )
                )}

              </div>

            )}

          </div>

        </div>

      )}

    </main>
  );
}


export default Achievements;