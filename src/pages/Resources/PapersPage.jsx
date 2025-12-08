import React from "react";
import { useNavigate } from "react-router-dom"; // <-- for back button
import "./ResourceInner.css";

const PapersPage = () => {
  const navigate = useNavigate();

  const list = [
    { id: 1, title: "2021 Question Paper", file: "2021.pdf", size: "2.6 MB" },
    { id: 2, title: "2022 Question Paper", file: "2022.pdf", size: "3.1 MB" },
    { id: 3, title: "2023 Question Paper", file: "2023.pdf", size: "2.9 MB" },
  ];

  return (
    <div className="inner-wrapper">

      {/* 🔙 BACK BUTTON */}
      <button className="back-btn" onClick={() => navigate(-1)}>
        ⬅ Back
      </button>

      {/* HEADER */}
      <div className="inner-header">
        <div className="inner-icon">📝</div>
        <div>
          <h2 className="inner-title">Previous Year Papers</h2>
          <p className="inner-subtitle">All past exams with solutions.</p>
        </div>
      </div>

      {/* PAPERS GRID */}
      <div className="notes-grid">
        {list.map((item) => (
          <div key={item.id} className="notes-card">
            <div className="notes-info">
              <span className="notes-fileicon">📄</span>
              <div>
                <h4 className="notes-heading">{item.title}</h4>
                <p className="notes-sub">{item.file} • {item.size}</p>
              </div>
            </div>

            <div className="notes-actions">
              <a
                href={`/papers/${item.file}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn view-btn"
              >
                👁 Preview
              </a>

              <a
                href={`/papers/${item.file}`}
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

export default PapersPage;
