import { motion } from "framer-motion";
import girl from "../assets/education-girl.png";

export default function Education() {
  return (
    <motion.section className="page" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
      <div className="content">
        <div>
          <h1>Education</h1>
          <p>B.Tech / Degree — Your College Name</p>
        </div>
        <img src={girl} alt="Education illustration" />
      </div>
    </motion.section>
  );
}
