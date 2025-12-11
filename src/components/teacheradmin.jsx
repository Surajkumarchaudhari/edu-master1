// src/components/teacheradmin.jsx
import React, { useState, useEffect } from "react";
import {
  Maximize2,
  AlertTriangle,
  Settings,
  CheckCircle,
  X,
  Save,
  ArrowLeft,
  Sun,
  Moon,
} from "lucide-react";

import "./teacheradmin.css";

// ------------------ CONSTANTS ------------------ //

const EXAM_TYPES = {
  JEE_MAINS: {
    id: "JEE_MAINS",
    name: "JEE Mains (B.E./B.Tech)",
    subjects: ["Physics", "Chemistry", "Mathematics"],
    pattern: {
      sections: [
        {
          name: "Section A",
          type: "SCQ",
          count: 20,
          description: "Single Correct Option. +4, -1",
        },
        {
          name: "Section B",
          type: "NUM_DECIMAL",
          count: 10,
          description: "Numerical Value. +4, -1",
        },
      ],
    },
    duration: 180,
  },
  JEE_ADV: {
    id: "JEE_ADV",
    name: "JEE Advanced (Paper 1)",
    subjects: ["Physics", "Chemistry", "Mathematics"],
    pattern: {
      sections: [
        {
          name: "Section 1",
          type: "MCQ",
          count: 4,
          description: "One or More Correct. +4, -2",
        },
        {
          name: "Section 2",
          type: "NUM_INTEGER",
          count: 4,
          description: "Non-Negative Integer. +3, 0",
        },
        {
          name: "Section 3",
          type: "MATRIX",
          count: 2,
          description: "Matrix Match Type. +3, -1",
        },
        {
          name: "Section 4",
          type: "COMPREHENSION",
          count: 4,
          description: "Passage Based. +3, -1",
        },
      ],
    },
    duration: 180,
  },
  NEET: {
    id: "NEET",
    name: "NEET (UG)",
    subjects: ["Physics", "Chemistry", "Botany", "Zoology"],
    pattern: {
      sections: [
        {
          name: "Section A",
          type: "SCQ",
          count: 35,
          description: "All Compulsory. +4, -1",
        },
        {
          name: "Section B",
          type: "SCQ",
          count: 15,
          description: "Attempt any 10. +4, -1",
        },
      ],
    },
    duration: 200,
  },
};

// ------------------ MOCK PAPER GENERATOR ------------------ //

const generateMockPaper = (examTypeKey) => {
  const config = EXAM_TYPES[examTypeKey];
  let questionId = 1;
  const paper = {};

  config.subjects.forEach((sub) => {
    paper[sub] = [];
    config.pattern.sections.forEach((sec) => {
      let passageText = null;

      for (let i = 0; i < sec.count; i++) {
        if (sec.type === "COMPREHENSION" && i % 2 === 0) {
          passageText = `(Passage for Q${i + 1}-${i + 2}) Consider a system of particles interacting under a central force F = -kr^n. The potential energy is given by U(r) = kr^(n+1)/(n+1). For a stable circular orbit to exist... (Assume standard notation).`;
        }

        let qData = {
          id: questionId++,
          text: `[${sub} - ${sec.name}] Question ${i + 1}. `,
          type: sec.type,
          section: sec.name,
          subject: sub,
          passage: sec.type === "COMPREHENSION" ? passageText : null,
          visited: false,
          status: "not_visited",
          userAnswer: null,
        };

        if (sec.type === "MATRIX") {
          qData.text += "Match List-I with List-II.";
          qData.rows = [
            { id: "A", text: "Item A" },
            { id: "B", text: "Item B" },
            { id: "C", text: "Item C" },
            { id: "D", text: "Item D" },
          ];
          qData.cols = [
            { id: "p", text: "Property P" },
            { id: "q", text: "Property Q" },
            { id: "r", text: "Property R" },
            { id: "s", text: "Property S" },
            { id: "t", text: "Property T" },
          ];
          qData.correct = { A: ["p"], B: ["q", "r"], C: ["s"], D: ["t"] };
        } else if (sec.type.startsWith("NUM")) {
          qData.text +=
            sec.type === "NUM_INTEGER"
              ? "Find the integer value."
              : "Find the value (decimal allowed).";
          qData.correct = "5";
          qData.options = [];
        } else {
          qData.text += "Select the correct option.";
          qData.options = ["Option A", "Option B", "Option C", "Option D"];
          qData.correct = sec.type === "MCQ" ? [0, 2] : [0];
        }

        paper[sub].push(qData);
      }
    });
  });

  return paper;
};

// ------------------ THEME TOGGLE ------------------ //

const ThemeToggle = ({ theme, onToggle }) => (
  <button className="theme-toggle-btn" onClick={onToggle}>
    <span className="theme-toggle-icon">
      {theme === "light" ? <Moon size={15} /> : <Sun size={15} />}
    </span>
    <span className="theme-toggle-label">
      {theme === "light" ? "Dark" : "Light"} Mode
    </span>
  </button>
);

// ------------------ ROOT COMPONENT ------------------ //

export default function TeacherAdmin() {
  const [view, setView] = useState("admin");
  const [selectedExam, setSelectedExam] = useState("JEE_ADV");
  const [paperData, setPaperData] = useState(null);
  const [examState, setExamState] = useState(null);
  const [theme, setTheme] = useState("light");

  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  useEffect(() => {
    // set theme attribute on <html>
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const startExam = (examKey) => {
    const data = generateMockPaper(examKey);
    setPaperData(data);
    setExamState({
      currentSubject: EXAM_TYPES[examKey].subjects[0],
      currentQIndex: 0,
      answers: {},
      timeLeft: EXAM_TYPES[examKey].duration * 60,
      paletteOpen: true,
    });
    setSelectedExam(examKey);
    setView("exam");
  };

  return (
    <div className="teacher-admin-root">
      {view === "lobby" && (
        <Lobby
          onStart={startExam}
          onAdmin={() => setView("admin")}
          theme={theme}
          onToggleTheme={toggleTheme}
        />
      )}

      {view === "admin" && (
        <AdminPanel
          onBack={() => setView("lobby")}
          theme={theme}
          onToggleTheme={toggleTheme}
        />
      )}

      {view === "exam" && examState && (
        <ExamInterface
          config={EXAM_TYPES[selectedExam]}
          paper={paperData}
          state={examState}
          setState={setExamState}
          onSubmit={() => setView("result")}
          theme={theme}
          onToggleTheme={toggleTheme}
        />
      )}

      {view === "result" && examState && (
        <ResultPage
          config={EXAM_TYPES[selectedExam]}
          paper={paperData}
          state={examState}
          onExit={() => setView("lobby")}
          theme={theme}
          onToggleTheme={toggleTheme}
        />
      )}
    </div>
  );
}

// ------------------ LOBBY ------------------ //

const Lobby = ({ onStart, onAdmin, theme, onToggleTheme }) => (
  <div className="lobby-container">
    <div className="lobby-content fade-in">
      <div className="lobby-header">
        <div className="lobby-header-top">
          <div className="lobby-header-text">
            <h1>National Mock Test Agency</h1>
            <p className="subtitle">
              Real-time simulation for JEE &amp; NEET aspirants
            </p>
          </div>
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
        </div>
      </div>

      <div className="exam-grid">
        {Object.values(EXAM_TYPES).map((exam) => (
          <div
            key={exam.id}
            className="exam-card"
            onClick={() => onStart(exam.id)}
          >
            <h3>{exam.name}</h3>

            <div className="exam-meta">
              <div className="meta-item">
                <i>⏱</i>
                <span>Duration: {exam.duration} mins</span>
              </div>
              <div className="meta-item">
                <i>📚</i>
                <span>Subjects: {exam.subjects.join(", ")}</span>
              </div>
            </div>

            <button
              type="button"
              className="start-btn"
              onClick={(e) => {
                e.stopPropagation();
                onStart(exam.id);
              }}
            >
              Take Mock Test
            </button>
          </div>
        ))}
      </div>

      <div style={{ textAlign: "center" }}>
        <button className="admin-panel-btn" onClick={onAdmin}>
          <Settings size={18} />
          Teacher / Admin Panel
        </button>
      </div>
    </div>
  </div>
);

// ------------------ EXAM INTERFACE ------------------ //

const ExamInterface = ({
  config,
  paper,
  state,
  setState,
  onSubmit,
  theme,
  onToggleTheme,
}) => {
  const { currentSubject, currentQIndex, timeLeft, answers, paletteOpen } =
    state;
  const currentQuestionsList = paper[currentSubject];
  const question = currentQuestionsList[currentQIndex];
  const qStatus = answers[question.id]?.status || "not_visited";
  const qValue = answers[question.id]?.val;

  // timer
  useEffect(() => {
    const timer = setInterval(() => {
      setState((prev) => {
        if (!prev) return prev;
        if (prev.timeLeft <= 0) {
          clearInterval(timer);
          onSubmit();
          return prev;
        }
        return { ...prev, timeLeft: prev.timeLeft - 1 };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [setState, onSubmit]);

  const formatTime = (s) => {
    const h = Math.floor(s / 3600);
    const m = Math.floor((s % 3600) / 60);
    const sec = s % 60;
    const pad = (n) => (n < 10 ? `0${n}` : `${n}`);
    return `${pad(h)}:${pad(m)}:${pad(sec)}`;
  };

  const updateStatus = (qId, status, val = undefined) => {
    setState((prev) => ({
      ...prev,
      answers: {
        ...prev.answers,
        [qId]: {
          status,
          val: val !== undefined ? val : prev.answers[qId]?.val,
        },
      },
    }));
  };

  const handlePaletteClick = (idx) => {
    updateStatus(
      question.id,
      qStatus === "not_visited" ? "not_answered" : qStatus
    );
    setState((prev) => ({ ...prev, currentQIndex: idx }));
  };

  // option handlers
  const handleOptionSelect = (val) => {
    if (question.type === "MCQ") {
      let currentVal = qValue || [];
      if (currentVal.includes(val)) {
        currentVal = currentVal.filter((v) => v !== val);
      } else {
        currentVal = [...currentVal, val];
      }
      updateStatus(question.id, "not_answered", currentVal);
    } else {
      updateStatus(question.id, "not_answered", val);
    }
  };

  const handleNumericalChange = (e) => {
    const val = e.target.value;
    if (question.type === "NUM_INTEGER") {
      if (/^\d*$/.test(val)) updateStatus(question.id, "not_answered", val);
    } else {
      if (/^-?\d*\.?\d*$/.test(val)) updateStatus(question.id, "not_answered", val);
    }
  };

  const handleMatrixSelect = (rowId, colId) => {
    let currentMatrix = qValue || {};
    let rowVals = currentMatrix[rowId] || [];
    if (rowVals.includes(colId)) {
      rowVals = rowVals.filter((c) => c !== colId);
    } else {
      rowVals = [...rowVals, colId];
    }
    updateStatus(question.id, "not_answered", {
      ...currentMatrix,
      [rowId]: rowVals,
    });
  };

  const hasAnswer = () => {
    if (qValue === undefined || qValue === null || qValue === "") return false;
    if (question.type === "MATRIX")
      return Object.values(qValue).some((arr) => arr && arr.length > 0);
    if (Array.isArray(qValue)) return qValue.length > 0;
    return true;
  };

  const moveToNext = () => {
    if (currentQIndex < currentQuestionsList.length - 1) {
      setState((prev) => ({
        ...prev,
        currentQIndex: prev.currentQIndex + 1,
      }));
    }
  };

  const handleSaveNext = () => {
    updateStatus(question.id, hasAnswer() ? "answered" : "not_answered");
    moveToNext();
  };

  const handleReviewNext = (markOnly = false) => {
    const status =
      hasAnswer() && !markOnly ? "marked_answered" : "marked";
    updateStatus(question.id, status);
    moveToNext();
  };

  const renderMatrix = () => (
    <div className="matrix-wrapper">
      <div className="matrix-lists">
        <div>
          <h4>List-I</h4>
          {question.rows.map((row) => (
            <div key={row.id} className="matrix-list-item">
              <b>{row.id}.</b> {row.text}
            </div>
          ))}
        </div>
        <div>
          <h4>List-II</h4>
          {question.cols.map((col) => (
            <div key={col.id} className="matrix-list-item">
              <b>{col.id}.</b> {col.text}
            </div>
          ))}
        </div>
      </div>
      <table className="matrix-table">
        <thead>
          <tr>
            <th />
            {question.cols.map((col) => (
              <th key={col.id}>{col.id}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {question.rows.map((row) => (
            <tr key={row.id}>
              <td className="matrix-row-label">{row.id}</td>
              {question.cols.map((col) => {
                const isChecked = (qValue?.[row.id] || []).includes(col.id);
                return (
                  <td
                    key={col.id}
                    className={`matrix-cell ${isChecked ? "selected" : ""}`}
                    onClick={() => handleMatrixSelect(row.id, col.id)}
                  >
                    <div className="matrix-checkbox" />
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <div className="exam-interface">
      {/* Top bar */}
      <div className="exam-topbar">
        <div className="exam-title">{config.name}</div>

        <div className="exam-topbar-right">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />

          <div className="candidate-info">
            <div className="candidate-details">
              <div className="name">Candidate Name</div>
              <div className="subject">{currentSubject}</div>
            </div>
            <div className="candidate-avatar">JD</div>
          </div>
        </div>
      </div>

      {/* Subject Tabs + Timer */}
      <div className="subject-tabs-container">
        {config.subjects.map((sub) => (
          <button
            key={sub}
            className={`subject-tab ${
              currentSubject === sub ? "active" : ""
            }`}
            onClick={() =>
              setState((prev) => ({
                ...prev,
                currentSubject: sub,
                currentQIndex: 0,
              }))
            }
          >
            {sub}
          </button>
        ))}

        <div className="timer-container">
          <span className="timer-label">Time Left:</span>
          <span className="timer-display">{formatTime(timeLeft)}</span>
        </div>
      </div>

      {/* Main layout */}
      <div className="exam-main-content">
        {/* Question Panel */}
        <div className="question-panel">
          <div className="question-header">
            <div className="question-number">
              Question No. {currentQIndex + 1}
            </div>
            <div className="question-actions">
              <button className="action-btn" type="button">
                <Maximize2 size={16} />
              </button>
              <button className="action-btn" type="button">
                <AlertTriangle size={16} />
              </button>
            </div>
          </div>

          <div className="question-content">
            <div className="section-info">
              <span className="section-badge">
                Section: {question.section}
              </span>
              <span className="question-type">
                {question.type} (+4, -1)
              </span>
            </div>

            {question.type === "COMPREHENSION" && question.passage && (
              <div className="passage-box">
                <h4>Read the passage:</h4>
                <p>{question.passage}</p>
              </div>
            )}

            <div className="question-text">{question.text}</div>

            {/* Type based render */}
            {question.type === "MATRIX" ? (
              renderMatrix()
            ) : question.type.startsWith("NUM") ? (
              <div className="numerical-wrapper">
                <label>Answer:</label>
                <input
                  type="text"
                  className="numerical-input"
                  placeholder={
                    question.type === "NUM_INTEGER"
                      ? "Integer only"
                      : "Value"
                  }
                  value={qValue || ""}
                  onChange={handleNumericalChange}
                />
              </div>
            ) : (
              <div className="options-grid">
                {question.options.map((opt, idx) => {
                  const isSel =
                    question.type === "MCQ"
                      ? (qValue || []).includes(idx)
                      : qValue === idx;
                  return (
                    <div
                      key={idx}
                      className={`option-item ${
                        isSel ? "selected" : ""
                      }`}
                      onClick={() => handleOptionSelect(idx)}
                    >
                      <div className="option-radio">
                        <input
                          type={
                            question.type === "MCQ"
                              ? "checkbox"
                              : "radio"
                          }
                          checked={!!isSel}
                          readOnly
                        />
                      </div>
                      <div className="option-label">{opt}</div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* controls */}
          <div className="question-controls">
            <div className="control-left">
              <button
                type="button"
                className="control-btn btn-save"
                onClick={handleSaveNext}
              >
                SAVE &amp; NEXT
              </button>
              <button
                type="button"
                className="control-btn btn-clear"
                onClick={() =>
                  updateStatus(question.id, "not_visited", null)
                }
              >
                CLEAR
              </button>
              <button
                type="button"
                className="control-btn btn-review"
                onClick={() => handleReviewNext(false)}
              >
                SAVE &amp; MARK FOR REVIEW
              </button>
              <button
                type="button"
                className="control-btn btn-mark"
                onClick={() => handleReviewNext(true)}
              >
                MARK FOR REVIEW &amp; NEXT
              </button>
            </div>

            <button
              type="button"
              className="control-btn btn-next"
              onClick={moveToNext}
            >
              NEXT
            </button>
          </div>
        </div>

        {/* Palette Panel */}
        {paletteOpen && (
          <div className="palette-panel">
            <div className="palette-header">
              <div className="palette-avatar">JD</div>
              <div className="palette-student-name">John Doe</div>
            </div>

            <div className="legend-container">
              <div className="legend-grid">
                <div className="legend-item">
                  <span className="legend-box answered">1</span>
                  <span>Answered</span>
                </div>
                <div className="legend-item">
                  <span className="legend-box not-answered">2</span>
                  <span>Not Answered</span>
                </div>
                <div className="legend-item">
                  <span className="legend-box not-visited">0</span>
                  <span>Not Visited</span>
                </div>
                <div className="legend-item">
                  <span className="legend-box marked">3</span>
                  <span>Marked for Review</span>
                </div>
              </div>
            </div>

            <div className="palette-content">
              <div className="subject-section">
                <div className="subject-title">{currentSubject}</div>
                <div className="question-palette-grid">
                  {currentQuestionsList.map((q, idx) => {
                    const s = state.answers[q.id]?.status || "not_visited";
                    let className = "not-visited";
                    if (s === "answered") className = "answered";
                    if (s === "not_answered") className = "not-answered";
                    if (s === "marked") className = "marked";
                    if (s === "marked_answered")
                      className = "marked-answered";
                    return (
                      <button
                        key={q.id}
                        type="button"
                        className={`palette-btn ${className} ${
                          currentQIndex === idx ? "current" : ""
                        }`}
                        onClick={() => handlePaletteClick(idx)}
                      >
                        {idx + 1}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="palette-footer">
              <button
                type="button"
                className="btn-submit-exam"
                onClick={onSubmit}
              >
                SUBMIT EXAM
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// ------------------ ADMIN PANEL / BUILDER ------------------ //

const AdminPanel = ({ onBack, theme, onToggleTheme }) => {
  const [activeType, setActiveType] = useState("SCQ");
  const [questionText, setQuestionText] = useState("");
  const [passageText, setPassageText] = useState("");
  const [options, setOptions] = useState(["", "", "", ""]);
  const [matrixConfig, setMatrixConfig] = useState({
    rows: [{ id: "A", text: "" }],
    cols: [{ id: "p", text: "" }],
  });

  const addMatrixRow = () =>
    setMatrixConfig((prev) => ({
      ...prev,
      rows: [
        ...prev.rows,
        { id: String.fromCharCode(65 + prev.rows.length), text: "" },
      ],
    }));

  const addMatrixCol = () =>
    setMatrixConfig((prev) => ({
      ...prev,
      cols: [
        ...prev.cols,
        { id: String.fromCharCode(112 + prev.cols.length), text: "" },
      ],
    }));

  return (
    <div className="admin-builder">
      <div className="builder-header">
        <div className="builder-title">
          <button className="back-btn" onClick={onBack}>
            <ArrowLeft size={20} />
          </button>
          <h2>Exam Builder Studio</h2>
        </div>

        <div className="builder-right">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />

          <div className="builder-actions">
            <button className="btn-discard" type="button">
              Discard
            </button>
            <button className="btn-save-question" type="button">
              <Save size={18} />
              Save Question
            </button>
          </div>
        </div>
      </div>

      <div className="builder-content">
        {/* Sidebar */}
        <div className="builder-sidebar">
          <div className="sidebar-section-title">Question Type</div>
          {[
            { id: "SCQ", label: "Single Choice (SCQ)" },
            { id: "MCQ", label: "Multiple Choice (MCQ)" },
            { id: "NUM_INTEGER", label: "Integer Type (0-9)" },
            { id: "NUM_DECIMAL", label: "Decimal Value" },
            { id: "MATRIX", label: "Matrix Match" },
            { id: "COMPREHENSION", label: "Comprehension / Passage" },
          ].map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => setActiveType(t.id)}
              className={`type-btn ${activeType === t.id ? "active" : ""}`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Main Form */}
        <div className="builder-main">
          {/* Question Text */}
          <div className="form-section">
            <div className="form-section-title">Question Text</div>
            <textarea
              className="form-textarea"
              value={questionText}
              onChange={(e) => setQuestionText(e.target.value)}
              placeholder="Enter the main question statement here..."
            />
          </div>

          {/* Passage */}
          {activeType === "COMPREHENSION" && (
            <div className="form-section">
              <div className="form-section-title">Passage Content</div>
              <textarea
                className="form-textarea"
                style={{ minHeight: 180 }}
                value={passageText}
                onChange={(e) => setPassageText(e.target.value)}
                placeholder="Enter the paragraph or passage text here..."
              />
            </div>
          )}

          {/* Options / Matrix / Numerical */}
          <div className="form-section">
            <div className="form-section-title">
              {activeType === "MATRIX"
                ? "Matrix Configuration"
                : "Answer Options"}
            </div>

            {(activeType === "SCQ" ||
              activeType === "MCQ" ||
              activeType === "COMPREHENSION") && (
              <>
                {options.map((opt, i) => (
                  <div key={i} className="option-form-item">
                    <div className="option-letter">
                      {String.fromCharCode(65 + i)}
                    </div>
                    <input
                      className="option-input"
                      placeholder={`Option ${String.fromCharCode(65 + i)}`}
                      value={opt}
                      onChange={(e) => {
                        const copy = [...options];
                        copy[i] = e.target.value;
                        setOptions(copy);
                      }}
                    />
                    <input
                      type={activeType === "MCQ" ? "checkbox" : "radio"}
                      name="correct"
                      className="option-checkbox"
                    />
                  </div>
                ))}

                <button
                  type="button"
                  className="btn-add-option"
                  onClick={() => setOptions((prev) => [...prev, ""])}
                >
                  + Add Option
                </button>
              </>
            )}

            {activeType.startsWith("NUM") && (
              <div className="numerical-preview">
                <div className="preview-label">Answer Input:</div>
                <input
                  disabled
                  className="preview-input"
                  placeholder={
                    activeType === "NUM_INTEGER" ? "Integer" : "Decimal"
                  }
                />
                <span className="validation-badge">
                  Validation:{" "}
                  {activeType === "NUM_INTEGER"
                    ? "Digits Only (0-9)"
                    : "Float Allowed"}
                </span>
              </div>
            )}

            {activeType === "MATRIX" && (
              <div className="matrix-builder">
                <div className="matrix-column">
                  <h4>Rows (List-I)</h4>
                  {matrixConfig.rows.map((r, i) => (
                    <div key={i} className="matrix-row">
                      <div className="matrix-label">{r.id}</div>
                      <input
                        className="matrix-text"
                        placeholder="Row text"
                        value={r.text}
                        onChange={(e) => {
                          const rows = [...matrixConfig.rows];
                          rows[i].text = e.target.value;
                          setMatrixConfig((prev) => ({
                            ...prev,
                            rows,
                          }));
                        }}
                      />
                    </div>
                  ))}
                  <button
                    type="button"
                    className="btn-add-row"
                    onClick={addMatrixRow}
                  >
                    + Add Row
                  </button>
                </div>

                <div className="matrix-column">
                  <h4>Columns (List-II)</h4>
                  {matrixConfig.cols.map((c, i) => (
                    <div key={i} className="matrix-row">
                      <div className="matrix-label">{c.id}</div>
                      <input
                        className="matrix-text"
                        placeholder="Column text"
                        value={c.text}
                        onChange={(e) => {
                          const cols = [...matrixConfig.cols];
                          cols[i].text = e.target.value;
                          setMatrixConfig((prev) => ({
                            ...prev,
                            cols,
                          }));
                        }}
                      />
                    </div>
                  ))}
                  <button
                    type="button"
                    className="btn-add-col"
                    onClick={addMatrixCol}
                  >
                    + Add Column
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// ------------------ RESULT PAGE ------------------ //

const ResultPage = ({ config, paper, state, onExit, theme, onToggleTheme }) => {
  const calculateScore = () => {
    let score = 0,
      attempted = 0,
      correct = 0,
      wrong = 0;

    Object.keys(paper).forEach((subject) => {
      paper[subject].forEach((q) => {
        const userAns = state.answers[q.id]?.val;
        const status = state.answers[q.id]?.status;

        if (status === "answered" || status === "marked_answered") {
          attempted++;
          let isCorrect = false;

          if (["SCQ", "COMPREHENSION"].includes(q.type)) {
            if (userAns === q.correct[0]) isCorrect = true;
          } else if (q.type === "MCQ") {
            const userArr = (userAns || []).sort().join(",");
            const corrArr = q.correct.sort().join(",");
            if (userArr === corrArr) isCorrect = true;
          } else if (q.type.startsWith("NUM")) {
            if (String(userAns) === String(q.correct)) isCorrect = true;
          } else if (q.type === "MATRIX") {
            if (userAns && typeof userAns === "object") {
              let allMatch = true;
              Object.keys(q.correct).forEach((row) => {
                const uRow = (userAns[row] || []).sort().join(",");
                const cRow = (q.correct[row] || []).sort().join(",");
                if (uRow !== cRow) allMatch = false;
              });
              if (allMatch) isCorrect = true;
            }
          }

          if (isCorrect) {
            correct++;
            score += 4;
          } else {
            wrong++;
            score -= q.type.startsWith("NUM") ? 0 : 1;
          }
        }
      });
    });

    return { score, attempted, correct, wrong };
  };

  const stats = calculateScore();

  return (
    <div className="result-container">
      <div className="result-card fade-in">
        <div className="result-header">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <h2>Exam Result</h2>
              <p className="result-subtitle">{config.name}</p>
            </div>
            <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          </div>
        </div>

        <div className="result-content">
          <div className="score-summary">
            <div className="score-card primary">
              <div className="score-value">{stats.score}</div>
              <div className="score-label">Total Score</div>
            </div>
            <div className="score-card secondary">
              <div className="score-value">{stats.attempted}</div>
              <div className="score-label">Attempted Questions</div>
            </div>
          </div>

          <div className="result-stats">
            <div className="stat-item">
              <div className="stat-label">
                <span className="stat-icon correct">
                  <CheckCircle size={16} />
                </span>
                <span>Correct Answers</span>
              </div>
              <div className="stat-value correct">{stats.correct}</div>
            </div>

            <div className="stat-item">
              <div className="stat-label">
                <span className="stat-icon incorrect">
                  <X size={16} />
                </span>
                <span>Incorrect Answers</span>
              </div>
              <div className="stat-value incorrect">{stats.wrong}</div>
            </div>
          </div>

          <button className="btn-return" onClick={onExit}>
            Return to Lobby
          </button>
        </div>
      </div>
    </div>
  );
};
