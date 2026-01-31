import { motion } from "framer-motion";
import girl from "../assets/education-girl.png";

const educationData = [
  {
    degree: "Master of Science (M.Sc) – Data Science",
    institution: "VCIW University",
    duration: "2023 – 2025",
    score: "CGPA: 8.70 / 10",
    details:
      "Focused on advanced data science concepts including machine learning, statistical analysis, data preprocessing, and end-to-end ML pipeline development. Gained hands-on experience through academic and practical projects."
  },
  {
    degree: "Bachelor of Science (B.Sc) – Data Science",
    institution: "TSWRD College, Osmania University",
    duration: "2023 – 2025",
    score: "CGPA: 9.20 / 10",
    details:
      "Built a strong foundation in data analysis, statistics, and programming. Worked extensively with Python and data science libraries, and developed analytical thinking through real-world datasets and coursework."
  }
];

export default function Education() {
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
          <h1>Education</h1>

          <div className="education-list">
            {educationData.map((edu, index) => (
              <motion.div
                key={index}
                className="education-card"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <h3>{edu.degree}</h3>
                <p className="institution">{edu.institution}</p>
                <p className="duration">{edu.duration}</p>
                <p className="score">{edu.score}</p>
                <p className="details">{edu.details}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <img src={girl} alt="Education illustration" />
      </div>
    </motion.section>
  );
}
