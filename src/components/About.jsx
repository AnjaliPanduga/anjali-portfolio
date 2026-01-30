import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9 }}
    >
      <h2>About Me</h2>
      <p>
        I am a highly motivated fresher with a strong foundation in Data Analysis,
        Machine Learning, and Python. I enjoy building end-to-end ML solutions.
      </p>
    </motion.section>
  );
}
