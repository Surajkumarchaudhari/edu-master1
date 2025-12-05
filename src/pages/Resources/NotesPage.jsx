import React from "react";
import { Link } from "react-router-dom";
import "./ResourceInner.css";

const NotesPage = () => {
  const list = [
    { id: 1, title: "Chapter 1 - Introduction", file: "intro.pdf" },
    { id: 2, title: "Chapter 2 - Data Types", file: "datatypes.pdf" },
    { id: 3, title: "Chapter 3 - Conditions", file: "conditions.pdf" },
  ];

  return (
    <div className="inner-page">
      <h2>📘 Study Materials</h2>

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

export default NotesPage;
