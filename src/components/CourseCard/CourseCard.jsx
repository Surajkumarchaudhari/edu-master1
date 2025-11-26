import React from "react";
import "./CourseCard.css";

const CourseCard = ({ title, subtitle, icon, theme }) => {
  return (
    <div className="course-card">
      <div className="left">
        <h3 className="course-title">{title}</h3>
        <p className="course-sub">{subtitle}</p>

        <button
          className={`course-btn ${theme === "jee" ? "jee-btn" : "neet-btn"}`}
        >
          Explore →
        </button>
      </div>

      <div className="card-icon">
        <div
          className={`card-icon-bg ${
            theme === "jee" ? "jee-bg" : "neet-bg"
          }`}
        >
          {icon}
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
