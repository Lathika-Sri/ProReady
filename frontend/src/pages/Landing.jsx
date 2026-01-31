import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import RadialOrbitalTimelineDemo from "../demo/RadialOrbitalTimelineDemo";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <>
  

      {/* HERO SECTION */}
      <section className="min-h-screen flex items-center px-16">
        {/* LEFT */}
        <div className="flex-1">
          <h1 className="text-5xl font-bold leading-tight">
            Get <span style={{ color: "var(--primary-color)" }}>ProReady</span>
            <br />
            For Your Career Growth
          </h1>

          <p className="mt-6 text-lg">
            Track your progress, stay focused, and grow professionally.
          </p>

          <button
            className="mt-8 px-6 py-3 rounded-lg"
            style={{
              background: "var(--primary-color)",
              color: "#000",
            }}
            onClick={() => navigate("/register")}
          >
            Get Started
          </button>
        </div>

        {/* RIGHT */}
        <div className="flex-1 flex justify-center">
          {/* Placeholder for your orbital image animation */}
          <div className="w-[300px] h-[300px] rounded-full border-2 border-dashed"
               style={{ borderColor: "var(--primary-color)" }}>
            <div className="flex items-center justify-center h-full">
              Track · Focus · Growth
            </div>
          </div>
        </div>
      </section>

      {/* PART 2 – ABOUT + TIMELINE */}
      <section className="min-h-screen flex items-center px-16">
        <div className="flex-1">
          <h2 className="text-4xl font-bold">About ProReady</h2>
          <p className="mt-4 text-lg">
            ProReady helps students and professionals prepare, track, and grow
            with structured roadmaps and visual progress.
          </p>
        </div>

        <div className="flex-1">
          <RadialOrbitalTimelineDemo />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-6 text-center">
        © 2026 ProReady. All rights reserved.
      </footer>
    </>
  );
};

export default Landing;
