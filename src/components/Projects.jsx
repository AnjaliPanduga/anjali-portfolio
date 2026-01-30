import { motion } from "framer-motion";

export default function Projects() {
  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9 }}
    >
      <h2>Projects</h2>

      <div className="card">
        <h3>Multilingual Language Translation & TTS App</h3>
        <p>
          Streamlit-based multilingual translation app with text-to-speech
          support for 50+ languages.
        </p>
        <a
          href="https://multilingual-language-translation-app.streamlit.app/"
          target="_blank"
          rel="noreferrer"
        >
          Live Demo
        </a>
        <a
          href="https://github.com/AnjaliPanduga/Language-Translation-App"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
      </div>

      <div className="card">
        <h3>🥑 Avocado Price Prediction</h3>
        <p>
          End-to-end ML pipeline with regression models and Streamlit deployment.
        </p>
        <a
          href="https://avocado-price-prediction-using-machine-learning.streamlit.app/"
          target="_blank"
          rel="noreferrer"
        >
          Live Demo
        </a>
        <a
          href="https://github.com/AnjaliPanduga/Avocado-Price-Prediction-Using-Machine-Learning"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
      </div>
    </motion.section>
  );
}
