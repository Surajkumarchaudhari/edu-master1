import React from "react";
import "./Admissions.css";

const Admissions = () => {
  return (
    <div className="admission-page">

      {/* HERO SECTION */}
      <section className="hero-section">
        <div className="hero-left">
          <h1>
            Join India’s Top Coaching  
            <span> – Admissions Open</span>
          </h1>

          <p className="hero-sub">
            Expert faculty • Structured courses • Daily doubt solving • Personalized mentorship
          </p>

          <div className="hero-buttons">
            <button className="btn-primary">Apply for Free Counselling</button>
            <button className="btn-outline">Download Prospectus</button>
          </div>

          <div className="hero-stats">
            <p>⭐ 4.8/5 Student Ratings</p>
            <p>🎓 10,000+ Students Trained</p>
            <p>🏆 Top AIR Ranks Every Year</p>
          </div>
        </div>

        <div className="hero-form">
          <h3>Quick Apply</h3>

          <input type="text" placeholder="Full Name" />
          <input type="text" placeholder="Phone Number" />

          <select>
            <option>JEE Main + Advanced</option>
            <option>NEET Target Batch</option>
            <option>Foundation Class 9</option>
            <option>Foundation Class 10</option>
          </select>

          <button className="btn-primary full">Get Counselling</button>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="why-section">
        <h2>Why Students Trust Us</h2>

        <div className="why-grid">
          <div className="why-card">
            <h4>📘 Comprehensive Syllabus</h4>
            <p>Complete and structured preparation with expert-designed material.</p>
          </div>

          <div className="why-card">
            <h4>🧠 Adaptive Tests</h4>
            <p>Smart tests that adjust difficulty according to student performance.</p>
          </div>

          <div className="why-card">
            <h4>👨‍🏫 Expert Faculty</h4>
            <p>Experienced teachers with proven track record & dedication.</p>
          </div>

          <div className="why-card">
            <h4>💬 Live Doubt Sessions</h4>
            <p>Daily doubt solving to help students stay on track.</p>
          </div>
        </div>
      </section>

      {/* PROGRAMS */}
      <section className="program-section">
        <h2>Choose a Program</h2>

        <div className="program-grid">
          <div className="program-card">
            <h3>JEE Main + Advanced</h3>
            <p>1-Year / 2-Year Programs</p>
            <button className="btn-program">Explore →</button>
          </div>

          <div className="program-card">
            <h3>NEET Target Batch</h3>
            <p>Complete PCB Preparation</p>
            <button className="btn-program">Explore →</button>
          </div>

          <div className="program-card">
            <h3>Foundation Class 9</h3>
            <p>Concept Building + Olympiad Prep</p>
            <button className="btn-program">Explore →</button>
          </div>

          <div className="program-card">
            <h3>Foundation Class 10</h3>
            <p>PCM + PCB Basics Strengthening</p>
            <button className="btn-program">Explore →</button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Admissions;
