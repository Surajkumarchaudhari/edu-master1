import React from "react";
import "./Resources.css";

const Resources = () => {
  return (
    <div className="resources-page">

      {/* HEADER */}
      <section className="res-hero">
        <h1>Student Resources</h1>
        <p>Your complete study support hub — notes, PDFs, test series, assignments & more.</p>
      </section>

      {/* RESOURCE CARDS */}
      <section className="res-grid">
        <div className="res-card">
          <div className="res-icon">📘</div>
          <h3>Study Materials</h3>
          <p>Structured chapter notes designed by expert faculty.</p>
          <button>Download Notes →</button>
        </div>

        <div className="res-card">
          <div className="res-icon">📝</div>
          <h3>Previous Year Papers</h3>
          <p>All JEE & NEET past papers with solutions.</p>
          <button>View Papers →</button>
        </div>

        <div className="res-card">
          <div className="res-icon">📊</div>
          <h3>Test Series</h3>
          <p>Adaptive test series with smart analytics.</p>
          <button>Attempt Test →</button>
        </div>

        <div className="res-card">
          <div className="res-icon">🎧</div>
          <h3>Video Lectures</h3>
          <p>Recorded lectures for revision & concept clarity.</p>
          <button>Watch Lectures →</button>
        </div>

        <div className="res-card">
          <div className="res-icon">💬</div>
          <h3>Doubt Support</h3>
          <p>Ask doubts anytime & get expert solutions instantly.</p>
          <button>Ask Doubts →</button>
        </div>

        <div className="res-card">
          <div className="res-icon">📂</div>
          <h3>Assignments</h3>
          <p>Daily & weekly assignments to track progress.</p>
          <button>Download Assignments →</button>
        </div>
      </section>

      {/* EXTRA SECTION */}
      <section className="extra-section">
        <h2>Boost Your Preparation</h2>

        <div className="extra-grid">
          <div className="extra-card">
            <h4>Formula Sheets</h4>
            <p>Quick revision sheets for last-minute preparation.</p>
            <button>Download →</button>
          </div>

          <div className="extra-card">
            <h4>Important Questions</h4>
            <p>Hand-picked questions expected in exams.</p>
            <button>View →</button>
          </div>

          <div className="extra-card">
            <h4>Exam Strategy Guide</h4>
            <p>Time management & scoring strategies by toppers.</p>
            <button>Read →</button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Resources;
