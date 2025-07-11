import React, { useContext, useEffect, useRef } from "react";
import styles from "./Welcome.module.css";
import { FaSearch, FaMicrophone } from "react-icons/fa";
import img1 from "../assets/images/fox.webp";
import { ThemeContext } from "../assets/store/Themecontext";
import { gsap } from "gsap";

const Welcome = () => {
  const { darkMode } = useContext(ThemeContext);
  const cardRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      cardRef.current,
      { opacity: 0, y: 60, scale: 0.9, rotation: -2 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        rotation: 0,
        duration: 1.2,
        ease: "elastic.out(1, 0.5)",
      }
    );
  }, []);

  return (
    <div
      ref={cardRef}
      className={styles.card}
      style={{
        backgroundColor: darkMode ? "#2d2454" : "#fff",
        color: darkMode ? "#fff" : "#000",
        boxShadow: darkMode
          ? "0 6px 12px rgba(0, 0, 0, 0.9)"
          : "0 6px 12px rgba(0, 0, 0, 0.15)",
      }}
    >
      <div className={styles.left}>
        <img src={img1} alt="Fox" className={styles.fox} />
      </div>

      <div className={styles.right}>
        <h3>Welcome back Tyler!</h3>
        <p>
          You’ve earned <strong>82%</strong> of your goal this week.
          <br />
          Keep up the great work!
        </p>

        <div
          className={styles.searchBox}
          style={{
            backgroundColor: darkMode ? "#3a2e71" : "#f1f1f1",
          }}
        >
          <FaSearch
            className={styles.icon}
            color={darkMode ? "#fff" : "#555"}
          />
          <input
            type="text"
            placeholder="What can we help you find today?"
            style={{
              backgroundColor: darkMode ? "#3a2e71" : "#f1f1f1",
              color: darkMode ? "#fff" : "#000",
              border: "none",
              outline: "none",
            }}
          />
          <FaMicrophone
            className={styles.icon}
            color={darkMode ? "#fff" : "#555"}
          />
        </div>
      </div>
    </div>
  );
};

export default Welcome;
