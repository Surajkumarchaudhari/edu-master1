import React from "react";
import { Link } from "react-router-dom";
import "./ResourceInner.css";

const LecturesPage = () => {
  const list = [
    { id: 1, title: "Lecture 1 - Basics", file: "lec1.mp4" },
    { id: 2, title: "Lecture 2 - Operators", file: "lec2.mp4" },
    { id: 3, title: "Lecture 3 - Loops", file: "lec3.mp4" },
  ];

  return (
    <div className="inner-page">
      <h2>🎧 Video Lectures</h2>

      <div className="file-list">
        {list.map((item) => (
          <Link key={item.id} to={`/resources/preview/${item.id}`} state={item}>
            <div className="file-card">
              <h4>{item.title}</h4>
              <p>{item.file}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LecturesPage;
