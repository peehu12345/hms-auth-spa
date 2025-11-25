import React from "react";
import "../styles/authlayout.scss";

const AuthLayout = ({ children }) => {
  return (
    <div className="auth-wrapper">

      {/* Top browser-style header (full width) */}
      <div className="top-header">
        <div className="window-dots">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      {/* Main form container (no card) - positioned slightly down from top header */}
      <div className="form-container">
        {children}
      </div>

      {/* Footer branding (bottom center) */}
      <div className="footer-wrap">
        <p className="powered">
          Powered By <span className="skill">Skill</span><span className="vertex">Vertex✔</span>
        </p>
      </div>
    </div>
  );
};

export default AuthLayout;
