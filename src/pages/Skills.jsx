import { motion } from "framer-motion";
import girl from "../assets/skills-girl.png";

export default function Skills() {
  return (
    <motion.section id="skills"
      className="page" 
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.8 }}
    >
      <div className="content">
        <div>
          <h1>Skills</h1>

          <ul className="skills-list">
            <li><strong>Programming:</strong> Python, SQL</li>

            <li>
              <strong>Libraries & Tools:</strong> Pandas, NumPy, Matplotlib,
              Seaborn, Scikit-learn
            </li>

            <li>
              <strong>Machine Learning:</strong> Linear Regression, Logistic
              Regression, Decision Tree, Random Forest, KNN, Naive Bayes
            </li>

            <li>
              <strong>Deep Learning:</strong> Basics of Neural Networks
            </li>

            <li>
              <strong>Data Analysis:</strong> Exploratory Data Analysis (EDA),
              Feature Engineering, Data Cleaning
            </li>

            <li>
              <strong>Databases:</strong> MySQL
            </li>

            <li>
              <strong>Statistics:</strong> Probability, Hypothesis Testing
            </li>

            <li>
              <strong>Tools & Platforms:</strong> Jupyter Notebook, Spyder,
              Streamlit, Git, GitHub
            </li>
          </ul>
        </div>

        <img src={girl} alt="Skills illustration" />
      </div>
    </motion.section>
  );
}

