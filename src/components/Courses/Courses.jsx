import React, { useState, useEffect } from "react";
import CourseCard from "../CourseCard/CourseCard";
import "./Courses.css";
import coursesData from "../../data/courses-data.json";
import { useNavigate } from "react-router-dom";

// Icons
import {
  FaAtom,
  FaCalculator,
  FaCogs,
  FaDraftingCompass,
  FaHeartbeat,
  FaFlask,
  FaDna
} from "react-icons/fa";

const iconMap = {
  FaAtom: <FaAtom />,
  FaCalculator: <FaCalculator />,
  FaCogs: <FaCogs />,
  FaDraftingCompass: <FaDraftingCompass />,
  FaHeartbeat: <FaHeartbeat />,
  FaFlask: <FaFlask />,
  FaDna: <FaDna />
};

const Courses = () => {
  const [filter, setFilter] = useState("all");
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setCourses(coursesData);
  }, []);

  const filteredCourses =
    filter === "all"
      ? courses
      : courses.filter((course) => course.category === filter);

  return (
    <section className="courses-section">
      <div className="courses-container">

        {/* FILTER BUTTONS */}
        <div className="course-filter-box">
          <button className={`filter-btn ${filter === "all" ? "active" : ""}`}
            onClick={() => setFilter("all")}
          >
            All
          </button>

          <button className={`filter-btn ${filter === "jee" ? "active" : ""}`}
            onClick={() => setFilter("jee")}
          >
            JEE Courses
          </button>

          <button className={`filter-btn ${filter === "neet" ? "active" : ""}`}
            onClick={() => setFilter("neet")}
          >
            NEET Courses
          </button>
        </div>

        <div className="course-grid">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              onClick={() => navigate(`/courses/${course.slug}`)}
              style={{ cursor: "pointer" }}
            >
              <CourseCard
                theme={course.category}
                icon={iconMap[course.icon]}
                title={course.title}
                subtitle={course.subtitle}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Courses;
