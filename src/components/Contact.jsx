import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9 }}
    >
      <h2>Contact</h2>
      <p>📧 pandugaanjali2003@gmail.com</p>
      <p>
        🔗 <a href="https://github.com/AnjaliPanduga" target="_blank" rel="noreferrer">
          GitHub
        </a>
      </p>
      <p>
        🔗 <a
          href="https://www.linkedin.com/in/anjali-panduga-88935a266/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
      </p>
    </motion.section>
  );
}
