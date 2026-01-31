import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  return (
    <nav
      className="w-full"
      style={{
        background: "var(--bg-color)",
        borderBottom: "1px solid var(--border-color)",
      }}
    >
      {/* CENTERED CONTAINER */}
      <div className="max-w-7xl mx-auto flex items-center justify-between px-10 py-4">
        
        {/* LEFT : BRAND */}
        <Link
          to="/"
          className="text-2xl font-bold tracking-wide"
          style={{ color: "var(--text-color)" }}
        >
          ProReady
        </Link>

        {/* RIGHT : NAV ITEMS */}
        <div className="flex items-center gap-6">
          
          {/* Home */}
          <Link
            to="/"
            className="text-sm font-medium transition hover:opacity-80"
            style={{ color: "var(--text-color)" }}
          >
            Home
          </Link>

          {/* Features Dropdown */}
          <div className="relative group">
            <span
              className="text-sm font-medium cursor-pointer transition hover:opacity-80"
              style={{ color: "var(--text-color)" }}
            >
              Features
            </span>

            <div
              className="absolute right-0 mt-3 w-52 hidden group-hover:block rounded-lg shadow-xl p-4 z-50"
              style={{
                background: "var(--card-bg)",
                border: "1px solid var(--border-color)",
              }}
            >
              <p className="py-1 text-sm cursor-pointer hover:opacity-80">
                Track Progress
              </p>
              <p className="py-1 text-sm cursor-pointer hover:opacity-80">
                Focus Mode
              </p>
              <p className="py-1 text-sm cursor-pointer hover:opacity-80">
                Growth Roadmap
              </p>
            </div>
          </div>

          {/* Divider */}
          <div
            className="h-6 w-px"
            style={{ background: "var(--border-color)" }}
          />

          {/* Login */}
         <div className="flex items-center gap-3">
            <Link
              to="/login"
              className="text-sm px-4 py-1.5 rounded-full font-medium transition"
              style={{
                background: "var(--primary-color)",
                color: "#000",
              }}
            >Login
            </Link>
            </div>

          {/* Register + Theme Toggle (GROUPED) */}
          <div className="flex items-center gap-3">
            <Link
              to="/register"
              className="text-sm px-4 py-1.5 rounded-full font-medium transition"
              style={{
                background: "var(--primary-color)",
                color: "#000",
              }}
            >
              Register
            </Link>

            {/* Theme Toggle */}
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
