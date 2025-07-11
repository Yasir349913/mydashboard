import React, { useContext } from "react";
import styles from "./BarChart.module.css";
import { ThemeContext } from "../assets/store/Themecontext";

const BarChart = () => {
  const { darkMode } = useContext(ThemeContext);

  const bars = [
    {
      day: "Mon",
      segments: [
        { height: 35, color: "#96e875" }, // light green
        { height: 70, color: "#9a7ee3" }, // purple
      ],
    },
    {
      day: "Tue",
      segments: [
        { height: 35, color: "#9a7ee3" },
        { height: 35, color: "#6d6d6d" }, // gray
      ],
    },
    {
      day: "Wed",
      segments: [
        { height: 35, color: "#ef653c" }, // orange
        { height: 20, color: "#6d6d6d" }, // gray
        { height: 25, color: "#9a7ee3" },
      ],
    },
    {
      day: "Thu",
      segments: [
        { height: 80, color: "#000000" }, // black
      ],
    },
    {
      day: "Fri",
      segments: [
        { height: 35, color: "#96e875" },
        { height: 65, color: "#6d6d6d" },
      ],
    },
    {
      day: "Sat",
      segments: [
        { height: 20, color: "#ef653c" },
        { height: 50, color: "#9a7ee3" },
      ],
    },
    {
      day: "Sun",
      segments: [
        { height: 40, color: "#6d6d6d" },
        { height: 35, color: "#9a7ee3" },
      ],
    },
  ];

  return (
    <div
      className={styles.container}
      style={{
        backgroundColor: darkMode ? "#120f2d" : "#fff",
        color: darkMode ? "white" : "black",
      }}
    >
      <div className={styles.buttonsContainer}>
        <button
          className={`${styles.btn} ${styles.active}`}
          style={{
            backgroundColor: darkMode ? "#2d2454" : "#f0f0f0",
            color: darkMode ? "white" : "black",
            borderColor: darkMode ? "#444" : "#ccc",
          }}
        >
          Time Spent Learning
        </button>
        <button
          className={styles.btn}
          style={{
            backgroundColor: darkMode ? "#2d2454" : "#f0f0f0",
            color: darkMode ? "white" : "black",
            borderColor: darkMode ? "#444" : "#ccc",
          }}
        >
          Statistics
        </button>
      </div>

      <div className={styles.chartBox}>
        <div className={styles.chart}>
          {bars.map(({ day, segments }) => (
            <div key={day} className={styles.barGroup}>
              <div className={styles.bar}>
                {segments.map((seg, idx) => (
                  <div
                    key={idx}
                    className={styles.segment}
                    style={{
                      height: `${seg.height}px`,
                      backgroundColor: seg.color,
                      borderRadius: "4px 4px 0 0",
                    }}
                  />
                ))}
              </div>
              <div
                className={styles.label}
                style={{ color: darkMode ? "white" : "black" }}
              >
                {day}
              </div>
            </div>
          ))}
        </div>

        <div className={styles.legend}>
          <div className={styles.legendItem}>
            <span
              className={styles.legendColor}
              style={{ backgroundColor: "#96e875" }}
            ></span>{" "}
            Easy Learning
          </div>
          <div className={styles.legendItem}>
            <span
              className={styles.legendColor}
              style={{ backgroundColor: "#9a7ee3" }}
            ></span>{" "}
            In Progress
          </div>
          <div className={styles.legendItem}>
            <span
              className={styles.legendColor}
              style={{ backgroundColor: "#ef653c" }}
            ></span>{" "}
            Hard Learning
          </div>
          <div className={styles.legendItem}>
            <span
              className={styles.legendColor}
              style={{ backgroundColor: "#6d6d6d" }}
            ></span>{" "}
            Pending
          </div>
        </div>
      </div>
    </div>
  );
};

export default BarChart;
