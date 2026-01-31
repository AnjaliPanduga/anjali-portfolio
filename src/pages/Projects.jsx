import { motion } from "framer-motion";
import girl from "../assets/projects-girl.png";

const projects = [
  {
    title: "🌍 Multilingual Language Translation & Text-to-Speech App",
    description:
      "Developed a multilingual web app using Python and Streamlit supporting 50+ languages. Implemented real-time translation using mtranslate and text-to-speech using gTTS.",
    tech: "Python, Streamlit, Pandas, mtranslate, gTTS",
    github: "https://github.com/AnjaliPanduga/Language-Translation-App",
    live: "https://multilingual-language-translation-app.streamlit.app/"
  },
  {
    title: "📉 Customer Churn Prediction Using Machine Learning",
    description:
      "Built a classification model to predict customer churn. Performed data preprocessing, feature engineering, and evaluated models using accuracy, precision, recall, F1-score, and ROC-AUC.",
    tech: "Python, Scikit-learn, Pandas, Matplotlib, Seaborn",
    github: "https://github.com/AnjaliPanduga/Customer-Churn-Prediction-",
    live: "https://customer-churn-pediction-app.streamlit.app/"
  },
  {
    title: "🎓 Student Registration Dual App (Tkinter & Streamlit)",
    description:
      "Developed a student registration system with desktop (Tkinter) and web (Streamlit) interfaces. Implemented CRUD operations and integrated MySQL database.",
    tech: "Python, Tkinter, Streamlit, MySQL",
    github: "https://github.com/AnjaliPanduga/student-registration-dual-app",
    live: "https://student-registration-dual-app.streamlit.app/"
  },
  {
    title: "🥑 Avocado Price Prediction Using Machine Learning",
    description:
      "Built an end-to-end ML pipeline to predict avocado prices. Compared multiple regression models and deployed an interactive Streamlit application.",
    tech: "Python, Scikit-learn, Streamlit, Matplotlib",
    github:
      "https://github.com/AnjaliPanduga/Avocado-Price-Prediction-Using-Machine-Learning",
    live:
      "https://avocado-price-prediction-using-machine-learning.streamlit.app/"
  }
];

export default function Projects() {
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
          <h1>Projects</h1>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <motion.div
                className="project-card"
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.03 }}
              >
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <p className="tech">
                  <strong>Tech Stack:</strong> {project.tech}
                </p>

                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noreferrer">
                    GitHub
                  </a>
                  <a href={project.live} target="_blank" rel="noreferrer">
                    Live Demo
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <img src={girl} alt="Projects illustration" />
      </div>
    </motion.section>
  );
}
