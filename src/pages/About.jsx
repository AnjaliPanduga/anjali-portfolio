import { motion } from "framer-motion";
import girl from "../assets/about-girl.png";

export default function About() {
  return (
    <motion.section className="page" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
      <div className="content">
        <div>
          <h1>About Me</h1>
          <p>
            I am a highly motivated fresher with a strong foundation in <b>Data Analysis,
            Machine Learning, and Python</b>. I enjoy working with real-world datasets
            to clean data, perform exploratory data analysis, and extract meaningful
            insights that support data-driven decision-making.
           <br /><br />
            I have hands-on experience in building <b>end-to-end machine learning projects</b>,
            comparing multiple models, and deploying interactive applications using
            <b>Streamlit</b>. I am continuously improving my skills in analytics,
            statistics, and visualization, and I am actively seeking opportunities
            where I can contribute, learn, and grow as a Data Analyst or Data Scientist.
          </p>
        </div>
        <img src={girl} alt="About illustration" />
      </div>
    </motion.section>
  );
}
