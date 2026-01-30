import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import RadialOrbitalTimelineDemo from "../demo/RadialOrbitalTimelineDemo";

export default function Landing() {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="min-h-screen flex items-center px-16">
        <div className="w-1/2">
          <h1 className="text-5xl font-bold">
            Build Your <span className="text-purple-600">Career</span> with ProReady
          </h1>
          <p className="mt-6 text-lg">
            Track, focus, and grow your placement preparation.
          </p>
          <Link
            to="/register"
            className="inline-block mt-8 px-6 py-3 rounded-full bg-purple-600 text-white"
          >
            Get Started
          </Link>
        </div>
        <div className="w-1/2" />
      </section>

      {/* ORBITAL SECTION */}
      <section className="min-h-screen flex items-center px-16">
        <div className="w-1/2 text-5xl font-bold">
          About <br /> ProReady
        </div>
        <div className="w-1/2">
          <RadialOrbitalTimelineDemo />
        </div>
      </section>

      <Footer />
    </>
  );
}
