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

      <div className="hero-container">

        {/* LEFT */}
        <div className="hero-left" data-aos="fade-right">
          <h1>
            India’s Most Trusted <br />
            <span>Coaching Institute</span>
          </h1>

          <p>
            Preparing students for JEE & NEET with top faculties, structured courses,
            test-series & doubt support.
          </p>

          <div className="hero-buttons">
            <button className="btn primary">Explore Courses →</button>
            <button className="btn outline">Get Admission</button>
          </div>
        </div>

        {/* RIGHT */}
        <div className="hero-right" data-aos="zoom-in">
         <img
  src={heroImg}
  alt="Students"
  className="hero-img"
/>

        </div>

      </div>

    </section>
  );
};

export default Hero;
