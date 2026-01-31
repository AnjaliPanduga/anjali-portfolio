import { motion } from "framer-motion";
import girl from "../assets/home-girl.png";

export default function Home() {
  return (
    <motion.section
      className="page"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.8 }}
    >
      <div className="content">
        <div>
          <h1>Hi, I’m <span>Anjali Panduga</span></h1>
          <h3>Data Scientist | Data Analyst</h3>
          <p>
            I am a highly motivated fresher with a strong foundation in data
            analysis, machine learning, and Python, focused on building
            data-driven solutions.
          </p>
        </div>
        <img src={girl} alt="Home illustration" />
      </div>
    </motion.section>
  );
}
