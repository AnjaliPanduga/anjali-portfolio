import { motion } from "framer-motion";
import girl from "../assets/projects-girl.png";

export default function Projects() {
  return (
    <motion.section
      className="page"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="content">
        <div>
          <h1>Projects</h1>

          {/* Project 1 */}
          <div className="project-card">
            <h3>🌐 Multilingual Language Translation & Text-to-Speech App</h3>
            <p>
              A Streamlit-based web application that supports translation across
              50+ languages with real-time Text-to-Speech using gTTS.
            </p>
            <p>
              <a
                href="https://github.com/AnjaliPanduga/Language-Translation-App"
                target="_blank"
                rel="noreferrer"
              >
                🔗 GitHub
              </a>{" "}
              |{" "}
              <a
                href="https://multilingual-language-translation-app.streamlit.app/"
                target="_blank"
                rel="noreferrer"
              >
                🚀 Live Demo
              </a>
            </p>
          </div>

          {/* Project 2 */}
          <div className="project-card">
            <h3>📊 Customer Churn Prediction Using Machine Learning</h3>
            <p>
              Built a classification model to predict customer churn using
              Logistic Regression, Random Forest, and XGBoost with evaluation
              metrics like accuracy and ROC-AUC.
            </p>
            <p>
              <a
                href="https://github.com/AnjaliPanduga/Customer-Churn-Prediction-"
                target="_blank"
                rel="noreferrer"
              >
                🔗 GitHub
              </a>{" "}
              |{" "}
              <a
                href="https://customer-churn-pediction-app.streamlit.app/"
                target="_blank"
                rel="noreferrer"
              >
                🚀 Live Demo
              </a>
            </p>
          </div>

          {/* Project 3 */}
          <div className="project-card">
            <h3>🎓 Student Registration Dual App (Tkinter & Streamlit)</h3>
            <p>
              A dual-interface student management system with CRUD operations,
              MySQL integration, and CSV export functionality.
            </p>
            <p>
              <a
                href="https://github.com/AnjaliPanduga/student-registration-dual-app"
                target="_blank"
                rel="noreferrer"
              >
                🔗 GitHub
              </a>{" "}
              |{" "}
              <a
                href="https://student-registration-dual-app.streamlit.app/"
                target="_blank"
                rel="noreferrer"
              >
                🚀 Live Demo
              </a>
            </p>
          </div>

          {/* Project 4 */}
          <div className="project-card">
            <h3>🥑 Avocado Price Prediction Using Machine Learning</h3>
            <p>
              Developed an end-to-end regression pipeline to predict avocado
              prices using historical data with model comparison and deployment
              in Streamlit.
            </p>
            <p>
              <a
                href="https://github.com/AnjaliPanduga/Avocado-Price-Prediction-Using-Machine-Learning"
                target="_blank"
                rel="noreferrer"
              >
                🔗 GitHub
              </a>{" "}
              |{" "}
              <a
                href="https://avocado-price-prediction-using-machine-learning.streamlit.app/"
                target="_blank"
                rel="noreferrer"
              >
                🚀 Live Demo
              </a>
            </p>
          </div>
        </div>

        <img src={girl} alt="Projects illustration" />
      </div>
    </motion.section>
  );
}

    
