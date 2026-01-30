import { motion } from "framer-motion";

export default function Skills() {
  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9 }}
    >
      <h2>Skills</h2>

      <div className="grid">
        <span>Python</span>
        <span>SQL</span>
        <span>Pandas</span>
        <span>NumPy</span>
        <span>Matplotlib</span>
        <span>Seaborn</span>
        <span>Scikit-learn</span>
        <span>Machine Learning</span>
        <span>EDA</span>
        <span>Statistics</span>
        <span>Streamlit</span>
        <span>Git & GitHub</span>
      </div>
    </motion.section>
  );
}

