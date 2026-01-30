import { motion } from "framer-motion";
import girl from "../assets/girl.png";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>Hi, I'm <span>Anjali Panduga</span></h1>
        <h3>Data Scientist | Data Analyst</h3>
        <p>
          Turning data into insights using Machine Learning and Analytics.
        </p>
      </motion.div>

      <motion.img
        src={girl}
        alt="AI Girl"
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
      />
    </section>
  );
}
