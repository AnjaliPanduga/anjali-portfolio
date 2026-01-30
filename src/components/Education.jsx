import { motion } from "framer-motion";

export default function Education() {
  return (
    <motion.section id="education" whileInView={{ opacity: 1 }} initial={{ opacity: 0 }}>
      <h2>Education</h2>
      <ul>
        <li>🎓 M.Sc Data Science – VCIW University (CGPA 8.70)</li>
        <li>🎓 B.Sc Data Science – Osmania University (CGPA 9.20)</li>
      </ul>
    </motion.section>
  );
}
