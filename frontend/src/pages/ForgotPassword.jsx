import React from "react";
import AuthLayout from "../components/AuthLayout";
import "../styles/forgot.scss";

const ForgotPassword = () => {
  return (
    <AuthLayout>
      <h2 className="title">Forgot Password?</h2>

      <p className="info">
        Enter your email address and we will send you instructions to reset it.
      </p>

      <div className="form-group">
        <label>Email</label>
        <input type="email" placeholder="Enter Email" />
      </div>

      <button className="btn-primary">Send Email</button>

      <p className="alt-text"><a href="/">Back</a></p>
    </AuthLayout>
  );
};

export default ForgotPassword;
