import { motion } from "framer-motion";
import girl from "../assets/contact-girl.png";

export default function Contact() {
  return (
    <motion.section id="contact"
      className="page"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.8 }}
    >
      <div className="content">
        <div>
          <h1>Contact</h1>
          <p>Let’s connect! You can reach me through:</p>

          <div className="contact-icons">
            {/* Email */}
            <motion.a
              href="mailto:pandugaanjali2003@gmail.com"
              whileHover={{ scale: 1.1 }}
              className="contact-icon"
            >
              📧
              <span>Email</span>
            </motion.a>

            {/* LinkedIn */}
            <motion.a
              href="https://www.linkedin.com/in/anjali-panduga-88935a266/"
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.1 }}
              className="contact-icon"
            >
              🔗
              <span>LinkedIn</span>
            </motion.a>

            {/* GitHub */}
            <motion.a
              href="https://github.com/AnjaliPanduga"
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.1 }}
              className="contact-icon"
            >
              💻
              <span>GitHub</span>
            </motion.a>
          </div>
        </div>

        <img src={girl} alt="Contact illustration" />
      </div>
    </motion.section>
  );
}
