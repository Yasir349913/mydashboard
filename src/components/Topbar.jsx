import React, { useContext } from "react";
import styles from "./Topbar.module.css";
import { FaSearch, FaQuestionCircle } from "react-icons/fa";
import { ThemeContext } from "../assets/store/Themecontext";

const TopBar = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div
      className={styles.topBar}
      style={{
        backgroundColor: darkMode ? "#120f2d" : "#fff",
        color: darkMode ? "white" : "black",
      }}
    >
      <div className={styles.left}>
        <h2>My Dashboard</h2>
      </div>
      <div className={styles.right}>
        <div
          className={styles.iconCircle}
          style={{
            backgroundColor: darkMode ? "#2d2454" : "#eee",
            color: darkMode ? "white" : "black",
          }}
        >
          <FaSearch />
        </div>
        <div
          className={styles.iconCircle}
          style={{
            backgroundColor: darkMode ? "#2d2454" : "#eee",
            color: darkMode ? "white" : "black",
          }}
        >
          <FaQuestionCircle />
        </div>
        <span
          className={styles.label}
          style={{ color: darkMode ? "white" : "black" }}
        >
          {darkMode ? "Dark Learning" : "Light Learning"}
        </span>
      </div>
    </div>
  );
};

export default TopBar;
