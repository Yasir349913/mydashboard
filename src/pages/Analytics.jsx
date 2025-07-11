import React, { useContext } from "react";
import { ThemeContext } from "../assets/store/Themecontext";
import styles from "./Analytics.module.css";

const Analytics = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div className={`${styles.container} ${darkMode ? styles.dark : ""}`}>
      <h1 className={styles.title}>Analytics</h1>
      <p className={styles.description}>
        View your app performance and usage statistics here.
      </p>

      <div className={styles.chartPlaceholder}>
        <p>📊 Chart goes here</p>
      </div>
    </div>
  );
};

export default Analytics;
