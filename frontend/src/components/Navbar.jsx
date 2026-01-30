import { Link } from "react-router-dom";
import { Sun, Moon } from "lucide-react";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className="w-full flex justify-between items-center px-10 py-5">
      <h1 className="text-2xl font-bold">ProReady</h1>

      <div className="flex items-center gap-6">
        <Link to="/">Home</Link>

        <div className="relative group">
          <span className="cursor-pointer">Features</span>
          <div className="absolute hidden group-hover:block bg-white dark:bg-black border rounded-md mt-2 p-3">
            <p>Time Tracking</p>
            <p>Goal Tracking</p>
            <p>Analytics</p>
          </div>
        </div>

        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>

        <button onClick={toggleTheme}>
          {theme === "light" ? <Moon /> : <Sun />}
        </button>
      </div>
    </nav>
  );
}
