import React, { useState, useEffect } from "react";
import "./Admissions.css";

import ProgramModal from "../../components/ProgramModal";
import SuccessPopup from "../../components/SuccessPopup";
import programsData from "../../data/programs.json";

const Admissions = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [popup, setPopup] = useState(false);
  const [modalData, setModalData] = useState({});
  const [programs, setPrograms] = useState([]);

  useEffect(() => {
    const list = Object.keys(programsData).map((key) => ({
      key,
      ...programsData[key],
    }));
    setPrograms(list);
  }, []);

  const openModal = (key) => {
    setModalData(programsData[key]);
    setModalOpen(true);
  };

  const handleSubmit = () => setPopup(true);

  return (
    <div className="admission-page">

      {/* HERO SECTION */}
      <section className="hero-section">

        <div className="hero-left">
          <h1>
            Build Your Future With  
            <span> India's Leading Coaching</span>
          </h1>

          <p className="hero-sub">Expert Teachers • Smart Tests • Doubt Support</p>

          <div className
