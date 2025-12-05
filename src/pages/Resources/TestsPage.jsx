import React from "react";
import { Link } from "react-router-dom";
import "./ResourceInner.css";

const TestsPage = () => {
  const list = [
    { id: 1, title: "Mock Test 1", file: "mock1.pdf" },
    { id: 2, title: "Mock Test 2", file: "mock2.pdf" },
    { id: 3, title: "Mock Test 3", file: "mock3.pdf" },
  ];

  return (
    <div className="inner-page">
      <h2>📊 Test Series</h2>

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

export default TestsPage;
