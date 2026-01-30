import { useState } from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "../components/ThemeToggle";
import API from "../api/api";
import "../styles/auth.css";
import loginImg from "../assets/login.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    const res = await API.post("/auth/login", { email, password });
    localStorage.setItem("token", res.data.token);
    window.location.href = "/dashboard";
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-image">
  {/* Orbit Ring */}
  <div className="orbit">
    <span>Track</span>
    <span>Focus</span>
    <span>Growth</span>
  </div>

  {/* Center Image */}
  <img
    src={loginImg /* or registerImg */}
    alt="learning illustration"
    className="center-avatar"
  />
</div>


      <div className="auth-content">
        <ThemeToggle />

        <div className="auth-card">
          <h2>Welcome Back 👋</h2>
          <p>Login to continue your preparation</p>

          <form onSubmit={handleLogin}>
            <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />

            <button className="auth-btn">Login</button>
            <button type="button" className="auth-btn google-btn">
              Continue with Google
            </button>
          </form>

          <div className="auth-footer">
            Don’t have an account? <Link to="/register">Register</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
