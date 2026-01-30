import { motion } from "framer-motion";

export default function Certifications() {
  return (
    <motion.section
      id="certifications"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9 }}
    >
      <h2>Certifications</h2>
      <ul>
        <li>📜 Virtual Internship in Data Science – NASSCOM</li>
        <li>📜 SQL (Basic, Intermediate & Advanced) – HackerRank</li>
        <li>📜 Python (Basic) – HackerRank</li>
      </ul>
    </motion.section>
  );
}
