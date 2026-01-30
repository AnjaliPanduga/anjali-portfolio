import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import girl from "../assets/girl.png";

const titles = ["Data Scientist", "Data Analyst"];

export default function Hero() {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [char, setChar] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (char < titles[index].length) {
        setText(text + titles[index][char]);
        setChar(char + 1);
      } else {
        setTimeout(() => {
          setText("");
          setChar(0);
          setIndex((index + 1) % titles.length);
        }, 1200);
      }
    }, 120);
    return () => clearTimeout(timeout);
  }, [char, text, index]);

  return (
    <section className="hero" id="home">
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>
          Hi, I'm <span>Anjali Panduga</span>
        </h1>

        <h3 className="typing">
          {text}
          <span className="cursor">|</span>
        </h3>

        <p>
          Turning real-world data into meaningful insights using Machine Learning
          and Analytics.
        </p>
      </motion.div>

      <motion.img
        src={girl}
        alt="AI Girl"
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
      />
    </section>
  );
}
