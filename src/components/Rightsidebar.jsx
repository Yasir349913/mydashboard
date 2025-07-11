import React, { useContext, useState } from "react";
import styles from "./Rightsidebar.module.css";
import {
  FaFlask,
  FaCode,
  FaAtom,
  FaClock,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import img2 from "../assets/images/avator.jpg";
import { ThemeContext } from "../assets/store/Themecontext";

const RightSidebar = () => {
  const { darkMode } = useContext(ThemeContext);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  return (
    <>
      {/* Hamburger button visible on mobile */}
      <button
        className={`${styles.hamburger} ${
          darkMode ? styles.darkHamburger : ""
        }`}
        onClick={toggleSidebar}
        aria-label="Toggle sidebar"
      >
        {sidebarOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      {/* Sidebar */}
      <div
        className={`${styles.rightSidebar} ${darkMode ? styles.dark : ""} ${
          sidebarOpen ? styles.open : ""
        }`}
      >
        <div className={styles.profile}>
          <img src={img2} alt="User" className={styles.avatar} />
          <div className={styles.userInfo}>
            <h4>Kitty Jones</h4>
            <p>Level 12 Learner</p>
          </div>
        </div>

        <div className={styles.section}>
          <h3>Recommended</h3>
          <div className={styles.recommendList}>
            <div className={styles.recommendItem}>
              <FaFlask className={styles.icon} />
              <div>
                <p className={styles.title}>Chemistry Basics</p>
                <p className={styles.subtitle}>
                  Start learning the basics of chemistry
                </p>
              </div>
            </div>
            <div className={styles.recommendItem}>
              <FaCode className={styles.icon} />
              <div>
                <p className={styles.title}>Intermediate Coding</p>
                <p className={styles.subtitle}>
                  Learn about loops, conditions, and more
                </p>
              </div>
            </div>
            <div className={styles.recommendItem}>
              <FaAtom className={styles.icon} />
              <div>
                <p className={styles.title}>Advanced Science</p>
                <p className={styles.subtitle}>
                  Dig into the wonders of the universe
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.section}>
          <h3>Recent Activity</h3>
          <ul className={styles.activityList}>
            <li>
              <FaClock style={{ marginRight: 6 }} /> Exp - Secondary Idea
            </li>
            <li>
              <FaClock style={{ marginRight: 6 }} /> Exp - Secondary Idea
            </li>
            <li>
              <FaClock style={{ marginRight: 6 }} /> Experiment - Coding
              Challenge
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default RightSidebar;
