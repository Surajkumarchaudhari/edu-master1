import React from "react";
import { Link } from "react-router-dom";
import "./ResourceInner.css";

const PapersPage = () => {
  const list = [
    { id: 1, title: "2021 Question Paper", file: "2021.pdf" },
    { id: 2, title: "2022 Question Paper", file: "2022.pdf" },
    { id: 3, title: "2023 Question Paper", file: "2023.pdf" },
  ];

  return (
    <div className="inner-page">
      <h2>📝 Previous Year Papers</h2>

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

export default PapersPage;
