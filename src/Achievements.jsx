import "./Achievements.css";

const achievements = [
  {
    number: "01",
    icon: "🌍",
    type: "GLOBAL NOMINEE",
    title: "NASA Space Apps Challenge 2025",
    description:
      "Selected as a Global Nominee in NASA Space Apps Challenge 2025, among 11,500+ participants/teams globally.",
    category: "International Recognition",
    year: "2025",
  },

  {
    number: "02",
    icon: "🌍",
    type: "INTERNATIONAL HONORABLE MENTION",
    title: "Yesist’12 International Innovation Contest 2024",
    description:
      "Received an Honorable Mention at the Yesist’12 International Innovation Contest held in Tunisia, North Africa.",
    category: "International Recognition",
    year: "2024",
  },

  {
    number: "03",
    icon: "🏆",
    type: "WINNER",
    title: "Hack the Mountain 2024",
    description:
      "Won the Hack the Mountain 2024 National Online Hackathon, recognized for AI-based problem solving and innovative solution development.",
    category: "National-Level Competition",
    year: "2024",
  },

  {
    number: "04",
    icon: "🏆",
    type: "WINNER",
    title: "VISAI 2025",
    description:
      "Won VISAI 2025 for developing an AI-based Predictive Maintenance System.",
    category: "National-Level Competition",
    year: "2025",
  },

  {
    number: "05",
    icon: "🏆",
    type: "WINNER",
    title: "HACK2HIRE AI Challenge 2025",
    description:
      "Won the HACK2HIRE AI Challenge 2025 at the college level by developing an AI-powered Memory Aid mobile application for cognitive assistance.",
    category: "Institutional-Level Achievement",
    year: "2025",
  },

  {
    number: "06",
    icon: "💡",
    type: "INNOVATION GRANT RECIPIENT",
    title: "EDII Tamil Nadu — Innovation Voucher Programme (IVP)",
    description:
      "Received an Innovation Grant of ₹2.5 Lakhs through the EDII Tamil Nadu Innovation Voucher Programme for AI/IoT-based innovation project development.",
    category: "Innovation & Funding",
    year: "2025",
    grant: "₹2.5 Lakhs",
  },
];


function AchievementCard({ achievement }) {
  return (
    <article className="achievement-item">

      {/* Number */}

      <div className="achievement-number">
        {achievement.number}
      </div>


      {/* Main Card */}

      <div className="achievement-card">


        {/* Top Row */}

        <div className="achievement-top">

          <div className="achievement-icon">
            {achievement.icon}
          </div>

          <div className="achievement-year">
            {achievement.year}
          </div>

        </div>


        {/* Type */}

        <p className="achievement-type">
          {achievement.type}
        </p>


        {/* Title */}

        <h2>
          {achievement.title}
        </h2>


        {/* Description */}

        <p className="achievement-description">
          {achievement.description}
        </p>


        {/* Bottom Information */}

        <div className="achievement-meta">

          <div>

            <span className="meta-label">
              CATEGORY
            </span>

            <span className="meta-value">
              {achievement.category}
            </span>

          </div>


          {achievement.grant && (
            <div>

              <span className="meta-label">
                GRANT
              </span>

              <span className="meta-value grant-value">
                {achievement.grant}
              </span>

            </div>
          )}

        </div>

      </div>

    </article>
  );
}


function Achievements() {

  return (
    <main className="achievements-page">


      {/* ================= HEADER ================= */}

      <section className="achievements-header">

        <p className="achievements-label">
          ACHIEVEMENTS
        </p>

        <h1>
          Recognition, competitions
          & innovation milestones.
        </h1>

        <p className="achievements-intro">
          A collection of achievements from international
          competitions, hackathons, innovation programs,
          and AI-focused challenges.
        </p>

      </section>


      {/* ================= SUMMARY ================= */}

      <section className="achievement-summary">

        <div className="summary-item">

          <strong>06</strong>

          <span>
            Major Achievements
          </span>

        </div>


        <div className="summary-item">

          <strong>02</strong>

          <span>
            International Recognition
          </span>

        </div>


        <div className="summary-item">

          <strong>03</strong>

          <span>
            Competition Wins
          </span>

        </div>


        <div className="summary-item">

          <strong>₹2.5L</strong>

          <span>
            Innovation Grant
          </span>

        </div>

      </section>


      {/* ================= ACHIEVEMENT LIST ================= */}

      <section className="achievements-list">

        {achievements.map((achievement) => (
          <AchievementCard
            key={achievement.number}
            achievement={achievement}
          />
        ))}

      </section>


    </main>
  );
}


export default Achievements;