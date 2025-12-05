import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./Preview.css";

const FilePreview = () => {
  const { state } = useLocation();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => setSubmitted(true);

  return (
    <div className="preview-page">
      <h2>{state?.title}</h2>
      <p>File: {state?.file}</p>

      <div className="preview-box">
        <p>📄 Preview Section (PDF/Image/Text Placeholder)</p>
      </div>

      {!submitted ? (
        <button className="submit-btn" onClick={handleSubmit}>
          Submit
        </button>
      ) : (
        <div className="success-msg">✔ Submitted Successfully!</div>
      )}
    </div>
  );
};

export default FilePreview;
