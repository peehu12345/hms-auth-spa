import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthLayout from "../components/AuthLayout";
import "../styles/register.scss";

const Register = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    // Temporary success → redirect
    navigate("/");

    // Agar API call lagani ho later:
    // const res = await axios.post("/api/register", { name, email, password });
    // if (res.status === 200) navigate("/");
  };

  return (
    <AuthLayout>
      <h2 className="title">Sign Up</h2>

      <form onSubmit={handleRegister}>
        <div className="form-group">
          <label>Full Name</label>
          <input 
            type="text" 
            placeholder="Enter Name" 
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

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

        <button className="btn-primary" type="submit">Register</button>
      </form>

      <p className="alt-text">
        Already have an account? <a href="/">Sign In</a>
      </p>
    </AuthLayout>
  );
};

export default Register;
