import React from "react";
import { Link } from "react-router-dom";
import "./Auth.css";

const Login = () => {
  return (
    <div className="auth-container">
      <div className="auth-box">

        <h2>Welcome Back</h2>
        <p className="auth-sub">Login to continue</p>

        <input type="email" placeholder="Email" className="auth-input" />
        <input type="password" placeholder="Password" className="auth-input" />

        <button className="auth-btn">Login</button>

        <p className="auth-switch">
          Don’t have an account?{" "}
          <Link to="/register">Create Account</Link>
        </p>

      </div>
    </div>
  );
};

export default Login;
