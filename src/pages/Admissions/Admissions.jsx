import React, { useState } from "react";
import "./Admissions.css";

import ProgramModal from "../../components/ProgramModal";
import SuccessPopup from "../../components/SuccessPopup";

const Admissions = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [popup, setPopup] = useState(false);
  const [modalData, setModalData] = useState({});

  const programs = {
    jee: {
      title: "JEE Main + Advanced",
      desc: "Highly intensive program for JEE aspirants targeting IITs.",
      points: [
        "Complete PCM syllabus",
        "Advanced test series",
        "Expert mentorship",
        "Daily practice sheets"
      ]
    },

    neet: {
      title: "NEET Target Batch",
      desc: "Perfect program for students targeting NEET 2025.",
      points: [
        "Full PCB syllabus",
        "Weekly mock tests",
        "Doubt solving sessions",
        "Assignments & PYQs"
      ]
    }
  };

  const openModal = (program) => {
    setModalData(programs[program]);
    setModalOpen(true);
  };

  const handleSubmit = () => setPopup(true);

  return (
    <div className="admission-page">

      {/* HERO */}
      <section className="hero-section">

        <div className="hero-left">
          <h1>
            Build Your Future With  
            <span> India's Leading Coaching</span>
          </h1>

          <p className="hero-sub">Expert Teachers • Smart Tests • Doubt Support</p>

          <div className="hero-buttons">
            <button className="btn-primary glow">Apply for Free Counselling</button>
            <button className="btn-outline">Download Prospectus</button>
          </div>
        </div>

        <div className="hero-form glass">
          <h3>Quick Apply</h3>

          <input type="text" placeholder="Full Name" />
          <input type="text" placeholder="Phone Number" />

          <select>
            <option>Select Program</option>
            <option>JEE</option>
            <option>NEET</option>
          </select>

          <button className="btn-primary full glow" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </section>

      {/* PROGRAMS */}
      <section className="program-section">
        <h2>Programs We Offer</h2>

        <div className="program-grid">
          <div className="program-card fade-in">
            <h3>JEE Main + Advanced</h3>
            <p>Intensive 1–2 year training</p>
            <button className="btn-program" onClick={() => openModal("jee")}>Explore →</button>
          </div>

          <div className="program-card fade-in">
            <h3>NEET Target Batch</h3>
            <p>Complete PCB preparation</p>
            <button className="btn-program" onClick={() => openModal("neet")}>Explore →</button>
          </div>
        </div>
      </section>

      {/* MODALS */}
      <ProgramModal open={modalOpen} onClose={() => setModalOpen(false)} data={modalData} />
      <SuccessPopup show={popup} onClose={() => setPopup(false)} />

    </div>
  );
};

export default Admissions;
