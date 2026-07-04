import "./Experience.css";
import { motion } from "framer-motion";

const timeline = [
  {
    year: "2026",
    title: "React Developer",
    description:
      "Building modern React applications with reusable components and clean UI.",
  },
  {
    year: "2025",
    title: "Front-End Development",
    description:
      "Mastered HTML, CSS, JavaScript, Git and responsive web design.",
  },
  {
    year: "2024",
    title: "Started Programming",
    description:
      "Began learning programming and web development from scratch.",
  },
];

export default function Experience() {
  return (
    <section className="experience" id="experience">

      <div className="section-title">
        <span>JOURNEY</span>
        <h2>My Experience</h2>
      </div>

      <div className="timeline">

        {timeline.map((item, index) => (

          <motion.div
            key={index}
            className="timeline-item"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .6, delay: index * .2 }}
          >

            <div className="timeline-dot"></div>

            <div className="timeline-content">

              <span>{item.year}</span>

              <h3>{item.title}</h3>

              <p>{item.description}</p>

            </div>

          </motion.div>

        ))}

      </div>

    </section>
  );
}