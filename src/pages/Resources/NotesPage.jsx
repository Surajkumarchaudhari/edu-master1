import React from "react";
import { useNavigate } from "react-router-dom"; // <-- for back button
import "./ResourceInner.css";

const NotesPage = () => {
  const navigate = useNavigate();

  const list = [
    { id: 1, title: "Chapter 1 - Introduction", file: "intro.pdf", size: "2.1 MB" },
    { id: 2, title: "Chapter 2 - Data Types", file: "datatypes.pdf", size: "1.7 MB" },
    { id: 3, title: "Chapter 3 - Conditions", file: "conditions.pdf", size: "2.8 MB" },
  ];

  return (
    <div className="inner-wrapper">

      {/* 🔙 BACK BUTTON */}
      <button className="back-btn" onClick={() => navigate(-1)}>
        ⬅ Back
      </button>

      {/* HEADER */}
      <div className="inner-header">
        <div className="inner-icon">📘</div>
        <div>
          <h2 className="inner-title">Study Materials</h2>
          <p className="inner-subtitle">Structured chapter notes for revision.</p>
        </div>
      </div>

      {/* NOTES GRID */}
      <div className="notes-grid">
        {list.map((item) => (
          <div key={item.id} className="notes-card">
            <div className="notes-info">
              <span className="notes-fileicon">📄</span>
              <div>
                <h4 className="notes-heading">{item.title}</h4>
                <p className="notes-sub">
                  {item.file} • {item.size}
                </p>
              </div>
            </div>

            <div className="notes-actions">
              <a
                href={`/notes/${item.file}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn view-btn"
              >
                👁 Preview
              </a>

              <a
                href={`/notes/${item.file}`}
                download
                className="btn download-btn"
              >
                ⬇ Download
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotesPage;
