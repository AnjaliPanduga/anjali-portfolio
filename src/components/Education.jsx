import { motion } from "framer-motion";

export default function Education() {
  return (
    <motion.section
      id="education"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9 }}
    >
      <h2>Education</h2>
      <ul>
        <li>
          🎓 <b>M.Sc – Data Science</b><br />
          VCIW University (2023–2025) <br />
          CGPA: 8.70 / 10
        </li>
        <li style={{ marginTop: "15px" }}>
          🎓 <b>B.Sc – Data Science</b><br />
          TSWRD College, Osmania University <br />
          CGPA: 9.20 / 10
        </li>
      </ul>
    </motion.section>
  );
}
