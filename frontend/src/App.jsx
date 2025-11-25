import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import ResetEmailSent from "./pages/ResetEmailSent";
import ResetPassword from "./pages/ResetPassword";
import LoginError from "./pages/LoginError";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot" element={<ForgotPassword />} />
        <Route path="/email-sent" element={<ResetEmailSent />} />
        <Route path="/reset" element={<ResetPassword />} />
        <Route path="/error" element={<LoginError />} />

        {/* 🟢 Yeh add kiya hai */}
        <Route path="/dashboard" element={<h1>Welcome to Dashboard</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
