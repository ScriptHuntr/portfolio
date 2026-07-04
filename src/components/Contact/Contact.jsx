import "./Contact.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section className="contact" id="contact">

      <div className="section-title">
        <span>CONTACT</span>
        <h2>Let's Work Together</h2>
      </div>

      <div className="contact-container">

        <motion.div
          className="contact-info"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
        >

          <h3>Get In Touch</h3>

          <p>
            Interested in working together or have a project in mind?
            Feel free to contact me.
          </p>

          <div className="info">
            <FaEnvelope />
            <span>your@email.com</span>
          </div>

          <div className="social-links">

            <a href="#">
              <FaGithub />
            </a>

            <a href="#">
              <FaLinkedin />
            </a>

          </div>

        </motion.div>

        <motion.form
          className="contact-form"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
        >

          <input
            type="text"
            placeholder="Your Name"
          />

          <input
            type="email"
            placeholder="Email"
          />

          <textarea
            rows="6"
            placeholder="Message"
          ></textarea>

          <button type="submit">
            Send Message
          </button>

        </motion.form>

      </div>

    </section>
  );
}