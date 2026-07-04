import "./About.css";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="about">

      <motion.div
        className="about-text"
        initial={{opacity:0,y:80}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:.8}}
      >

        <span className="section-tag">
          ABOUT ME
        </span>

        <h2>
          Passionate Front-End Developer
        </h2>

        <p>
          I enjoy building beautiful, responsive and modern web
          applications using React, JavaScript and CSS.

          My goal is to create fast and intuitive user experiences
          while continuously learning new technologies.
        </p>

      </motion.div>

      <motion.div
        className="about-cards"
        initial={{opacity:0,x:80}}
        whileInView={{opacity:1,x:0}}
      >

        <div className="about-card">
          <h3>🚀 Fast</h3>
          <p>Optimized performance.</p>
        </div>

        <div className="about-card">
          <h3>🎨 Modern</h3>
          <p>Clean UI / UX.</p>
        </div>

        <div className="about-card">
          <h3>📱 Responsive</h3>
          <p>Works on every device.</p>
        </div>

      </motion.div>

    </section>
  );
}