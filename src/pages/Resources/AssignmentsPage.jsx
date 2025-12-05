import React from "react";
import { Link } from "react-router-dom";
import "./ResourceInner.css";

const AssignmentsPage = () => {
  const list = [
    { id: 1, title: "Assignment 1", file: "assign1.pdf" },
    { id: 2, title: "Assignment 2", file: "assign2.pdf" },
  ];

  return (
    <div className="inner-page">
      <h2>📂 Assignments</h2>

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

export default AssignmentsPage;
