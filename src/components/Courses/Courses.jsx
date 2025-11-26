import React, { useState } from "react";
import CourseCard from "../CourseCard/CourseCard";
import "./Courses.css";


import {
  FaAtom,
  FaCalculator,
  FaCogs,
  FaDraftingCompass,
  FaFlask,
  FaLeaf,
  FaHeartbeat,
  FaDna,
  FaBookOpen
} from "react-icons/fa";

import { GiMicroscope } from "react-icons/gi";
import { TbWaveSine } from "react-icons/tb";

const Courses = () => {
  const [filter, setFilter] = useState("all");

  return (
    <section className="courses-section">
      <div className="courses-container">

        {/* 🔥 FILTER BUTTONS - Top Left Small Container */}
        <div className="course-filter-box">
          <button
            className={`filter-btn ${filter === "all" ? "active" : ""}`}
            onClick={() => setFilter("all")}
          >
            All
          </button>

          <button
            className={`filter-btn ${filter === "jee" ? "active" : ""}`}
            onClick={() => setFilter("jee")}
          >
            JEE Courses
          </button>

          <button
            className={`filter-btn ${filter === "neet" ? "active" : ""}`}
            onClick={() => setFilter("neet")}
          >
            NEET Courses
          </button>
        </div>

        {/* ---------------- JEE COURSES ---------------- */}
        {(filter === "all" || filter === "jee") && (
          <>
            <h2 className="heading">JEE Courses</h2>
            <div className="category-sep"></div>

            <div className="course-grid">

              <CourseCard theme="jee" icon={<FaAtom />} title="JEE Main + Advanced" subtitle="1-Year Target Batch" />
              <CourseCard theme="jee" icon={<FaCalculator />} title="JEE Mains (1 Year)" subtitle="PCM Full Syllabus" />
              <CourseCard theme="jee" icon={<FaDraftingCompass />} title="JEE Crash Course" subtitle="Revision + 80 Tests" />
              <CourseCard theme="jee" icon={<FaCogs />} title="JEE Droppers Batch" subtitle="Repeaters Special" />
              <CourseCard theme="jee" icon={<FaFlask />} title="JEE Foundation Class 9" subtitle="Concept Building" />
              <CourseCard theme="jee" icon={<FaBookOpen />} title="JEE Foundation Class 10" subtitle="Early PCM Prep" />

            </div>
          </>
        )}

        {/* ---------------- NEET COURSES ---------------- */}
        {(filter === "all" || filter === "neet") && (
          <>
            <h2 className="heading neet-heading">NEET Courses</h2>
            <div className="category-sep neet"></div>

            <div className="course-grid">

              <CourseCard theme="neet" icon={<FaHeartbeat />} title="NEET Target Batch (1 Year)" subtitle="Complete PCB Prep" />
              <CourseCard theme="neet" icon={<FaFlask />} title="NEET Crash Course" subtitle="100+ Revision Tests" />
              <CourseCard theme="neet" icon={<FaDna />} title="NEET Droppers" subtitle="Repeaters Special Batch" />
              <CourseCard theme="neet" icon={<GiMicroscope />} title="NEET Foundation Class 9" subtitle="Biology + Chemistry Basics" />
              <CourseCard theme="neet" icon={<FaLeaf />} title="NEET Foundation Class 10" subtitle="Concept Booster" />
              <CourseCard theme="neet" icon={<TbWaveSine />} title="NEET Score Booster (PCB)" subtitle="Extra Tests + Doubts" />

            </div>
          </>
        )}
        
      </div>
    </section>
  );
};

export default Courses;
