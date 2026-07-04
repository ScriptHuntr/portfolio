import "./Projects.css";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Tahwissa",
    desc: "Tourism platform built with React.",
    image: "https://picsum.photos/600/400?1",
  },
  {
    title: "Pizza Project",
    desc: "Restaurant website with modern UI.",
    image: "https://picsum.photos/600/400?2",
  },
  {
    title: "Crypto Dashboard",
    desc: "Interactive crypto dashboard.",
    image: "https://picsum.photos/600/400?3",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="projects">

      <div className="section-title">
        <span>PORTFOLIO</span>
        <h2>Featured Projects</h2>
      </div>

      <div className="projects-grid">

        {projects.map((project, index) => (

          <motion.div
            key={index}
            className="project-card"
            whileHover={{
              y: -12,
              rotateX: 5,
              rotateY: -5
            }}
            transition={{ duration: .3 }}
          >

            <img
              src={project.image}
              alt={project.title}
            />

            <div className="project-content">

              <h3>{project.title}</h3>

              <p>{project.desc}</p>

              <div className="project-buttons">

                <button>

                  <FaGithub />

                  Code

                </button>

                <button>

                  <FaExternalLinkAlt />

                  Live

                </button>

              </div>

            </div>

          </motion.div>

        ))}

      </div>

    </section>
  );
}