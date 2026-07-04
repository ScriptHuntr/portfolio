import "./Hero.css";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaArrowRight,
  FaCode,
  FaLaptopCode,
} from "react-icons/fa";

import profile from "../../assets/image/profile.png";

function Hero() {
  return (
    <section id="hero" className="hero">
      {/* Aurora Background */}
      <div className="blob blob1"></div>
      <div className="blob blob2"></div>

      <div className="hero-content">
        {/* ---------------- LEFT ---------------- */}

        <motion.div
          className="left"
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="hello">
            👋 Welcome to my Portfolio
          </span>

          <h1>
            Hi, I'm <span>ScriptHuntr</span>
          </h1>

          <h2>
            Front-End Developer & UI Engineer
          </h2>

          <p className="description">
            I design and build modern web applications with
            React, JavaScript and CSS. I enjoy creating fast,
            beautiful and interactive user experiences.
          </p>

          <div className="buttons">
            <button className="primary">
              View Projects
              <FaArrowRight />
            </button>

            <button className="secondary">
              <FaGithub />
              GitHub
            </button>
          </div>

          {/* Stats */}

          <div className="stats">
            <div className="stat">
              <h3>20+</h3>
              <span>Projects</span>
            </div>

            <div className="stat">
              <h3>3+</h3>
              <span>Years Learning</span>
            </div>

            <div className="stat">
              <h3>100%</h3>
              <span>Passion</span>
            </div>
          </div>
        </motion.div>

        {/* ---------------- RIGHT ---------------- */}

        <motion.div
          className="right"
          initial={{ opacity: 0, scale: .8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="profile-wrapper">
            <div className="halo"></div>

            <img
              src={profile}
              alt="Profile"
              className="profile-image"
            />
          </div>

          {/* Floating Cards */}

          <div className="floating-card card1">
            <FaCode className="card-icon" />

            <h3>React</h3>

            <span>Modern Front-End</span>
          </div>

          <div className="floating-card card2">
            <FaLaptopCode className="card-icon" />

            <h3>UI / UX</h3>

            <span>Creative Design</span>
          </div>

          {/* Badge */}

          <div className="badge">
            🚀 Open to Opportunities
          </div>
        </motion.div>
      </div>

      {/* Scroll */}

      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>

        <span>Scroll Down</span>
      </div>
    </section>
  );
}

export default Hero;