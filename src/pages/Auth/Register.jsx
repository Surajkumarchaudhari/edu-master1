import React from "react";
import { Link } from "react-router-dom";
import "./Auth.css";

const Register = () => {
  return (
    <div className="auth-container">
      <div className="auth-box">

        <h2>Create Account</h2>
        <p className="auth-sub">Join EduMaster today</p>

        <input type="text" placeholder="Full Name" className="auth-input" />
        <input type="email" placeholder="Email" className="auth-input" />
        <input type="password" placeholder="Password" className="auth-input" />

        <button className="auth-btn">Register</button>

        <p className="auth-switch">
          Already have an account?{" "}
          <Link to="/login">Login</Link>
        </p>

      </div>
    </div>
  );
};

export default Register;
