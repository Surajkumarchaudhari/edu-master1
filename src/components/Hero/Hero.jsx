import heroImg from "../../assets/hero.jpg";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Hero.css";

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  return (
    <section className="hero">
      {/* Floating animated shapes */}
      <div className="hero-shape hero-shape-1"></div>
      <div className="hero-shape hero-shape-2"></div>
      <div className="hero-shape hero-shape-3"></div>

      <div className="hero-container">

        {/* LEFT */}
        <div className="hero-left" data-aos="fade-right">
          <div className="hero-card">
            <h1>
              India’s Most Trusted <br />
              <span>Coaching Institute</span>
            </h1>

            <p>
              Preparing students for JEE & NEET with top faculties, structured
              courses, test-series & doubt support.
            </p>

            {/* SEARCH BAR */}
            <div className="hero-search">
              <div className="search-input-wrapper">
                <i className="search-icon">🔍</i>
                <input
                  type="text"
                  placeholder="Search for JEE / NEET / Class 11 & 12 courses"
                />
              </div>

              <select className="search-select">
                <option value="">Select Category</option>
                <option value="jee-main">JEE Main</option>
                <option value="jee-advanced">JEE Advanced</option>
                <option value="neet">NEET UG</option>
                <option value="foundation">Foundation (8th–10th)</option>
                <option value="boards">Board Exams</option>
              </select>

              <button className="btn search-btn">Search</button>
            </div>

            {/* Buttons */}
            <div className="hero-buttons">
              <button className="btn primary">Explore Courses →</button>
              <button className="btn outline">Get Admission</button>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="hero-right" data-aos="zoom-in">
          <img src={heroImg} alt="Students" className="hero-img" />

          {/* Small glass badge */}
          <div className="hero-badge">
            <span>100K+</span>
            <p>Students Trust Us</p>
          </div>
        </div>

      </div>

      {/* Bottom wave */}
      <div className="hero-wave"></div>
    </section>
  );
};

export default Hero;
