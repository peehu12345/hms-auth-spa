import React from "react";
import AuthLayout from "../components/AuthLayout";
import "../styles/resetEmail.scss";

const ResetEmailSent = () => {
  return (
    <AuthLayout>
      <h2 className="title">Email Sent</h2>

      <p className="info">
        We have sent reset instructions to your email.
      </p>

      <button className="btn-primary">Okay</button>
    </AuthLayout>
  );
};

export default ResetEmailSent;
