import "./Skills.css";
import { motion } from "framer-motion";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

const skills = [
  {
    icon: <FaReact />,
    name: "React",
    level: 90,
  },
  {
    icon: <FaJs />,
    name: "JavaScript",
    level: 85,
  },
  {
    icon: <FaHtml5 />,
    name: "HTML5",
    level: 95,
  },
  {
    icon: <FaCss3Alt />,
    name: "CSS3",
    level: 92,
  },
  {
    icon: <FaGitAlt />,
    name: "Git",
    level: 85,
  },
  {
    icon: <FaGithub />,
    name: "GitHub",
    level: 90,
  },
];

export default function Skills() {
  return (
    <section className="skills" id="skills">

      <div className="section-title">
        <span>SKILLS</span>
        <h2>Technologies I Use</h2>
      </div>

      <div className="skills-grid">

        {skills.map((skill, index) => (

          <motion.div
            key={index}
            className="skill-card"
            whileHover={{
              y:-10,
              scale:1.03
            }}
          >

            <div className="skill-icon">

              {skill.icon}

            </div>

            <h3>{skill.name}</h3>

            <div className="progress">

              <div
                className="progress-bar"
                style={{
                  width:`${skill.level}%`
                }}
              ></div>

            </div>

            <span>{skill.level}%</span>

          </motion.div>

        ))}

      </div>

    </section>
  );
}