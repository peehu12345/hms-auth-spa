import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthLayout from "../components/AuthLayout";
import "../styles/login.scss";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // temporary behavior: accept non-empty credentials and go to dashboard
    if (email.trim() && password.trim()) {
      navigate("/dashboard");
    } else {
      alert("Please enter email and password");
    }
  };

  return (
    <AuthLayout>
      <h2 className="title">Sign In</h2>

      <form onSubmit={handleLogin} style={{ maxWidth: 430, margin: "0 auto" }}>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button className="btn-primary" type="submit">Sign In</button>

        <div className="forgot" style={{ textAlign: "center" }}>
          <a href="/forgot">Forgot Password?</a>
        </div>

        <p className="alt-text">
          Don't have an account? <a href="/register">Sign Up</a>
        </p>
      </form>
    </AuthLayout>
  );
};

export default Login;
