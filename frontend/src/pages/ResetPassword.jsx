import React from "react";
import AuthLayout from "../components/AuthLayout";
import "../styles/resetPassword.scss";

const ResetPassword = () => {
  return (
    <AuthLayout>
      <h2 className="title">Reset Password</h2>

      <div className="form-group">
        <label>New Password</label>
        <input type="password" placeholder="Enter New Password" />
      </div>

      <button className="btn-primary">Reset</button>
    </AuthLayout>
  );
};

export default ResetPassword;
