import React from "react";
import AuthLayout from "../components/AuthLayout";
import "../styles/error.scss";

const LoginError = () => {
  return (
    <AuthLayout>
      <h2 className="title">Sign In Error</h2>

      <p className="error-box">Invalid email or password</p>

      <button className="btn-primary">Try Again</button>

      <p className="alt-text">
        Don’t have an account? <a href="/register">Sign Up</a>
      </p>
    </AuthLayout>
  );
};

export default LoginError;
