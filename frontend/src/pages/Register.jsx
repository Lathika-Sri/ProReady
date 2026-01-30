import { useState } from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "../components/ThemeToggle";
import API from "../api/api";
import "../styles/auth.css";
import register from "../assets/register.png";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    await API.post("/auth/register", { name, email, password });
    window.location.href = "/";
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
    src={register /* or registerImg */}
    alt="learning illustration"
    className="center-avatar"
  />
</div>


      <div className="auth-content">
        <ThemeToggle />

        <div className="auth-card">
          <h2>Create Account</h2>
          <p>Start your placement journey with ProReady</p>

          <form onSubmit={handleRegister}>
            <input placeholder="Full Name" onChange={(e) => setName(e.target.value)} />
            <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />

            <button className="auth-btn">Register</button>
            <button type="button" className="auth-btn google-btn">
              Continue with Google
            </button>
          </form>

          <div className="auth-footer">
            Already have an account? <Link to="/">Login</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
