import React from "react";
import { Link } from "react-router-dom";
import "./ResourceInner.css";

const DoubtsPage = () => {
  const list = [
    { id: 1, title: "Ask Doubt 1", file: "doubt1.txt" },
    { id: 2, title: "Ask Doubt 2", file: "doubt2.txt" },
  ];

  return (
    <div className="inner-page">
      <h2>💬 Doubt Support</h2>

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

export default DoubtsPage;
