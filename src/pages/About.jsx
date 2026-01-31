import { motion } from "framer-motion";
import girl from "../assets/about-girl.png";

export default function About() {
  return (
    <motion.section className="page" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
      <div className="content">
        <div>
          <h1>About Me</h1>
          <p>
            I enjoy working with real-world datasets to clean data, perform
            exploratory data analysis, and extract insights that support
            data-driven decision making.
          </p>
        </div>
        <img src={girl} alt="About illustration" />
      </div>
    </motion.section>
  );
}
