import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className="
        px-3 py-1.5
        rounded-full
        text-sm font-medium
        transition
      "
      style={{
        background: "var(--primary-color)",
        color: "#000",
      }}
    >
      {theme === "light" ? "dark" : "light"}
    </button>
  );
};

export default ThemeToggle;
