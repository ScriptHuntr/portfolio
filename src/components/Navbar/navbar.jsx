import "./Navbar.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

function Navbar() {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      className={scroll ? "navbar active" : "navbar"}
    >
      <div className="logo">
        <span>Script</span>Huntr
      </div>

      <ul className="nav-links">

        <li><a href="#hero">Home</a></li>

        <li><a href="#about">About</a></li>

        <li><a href="#projects">Projects</a></li>

        <li><a href="#skills">Skills</a></li>

        <li><a href="#contact">Contact</a></li>

      </ul>

      <div className="socials">

        <FaGithub />

        <FaLinkedin />

      </div>
    </motion.nav>
  );
}

export default Navbar;