import React, { useContext, useEffect, useState } from "react";
import styles from "./Sidebar.module.css";
import { FaHome, FaBook, FaChartBar, FaCog, FaPowerOff } from "react-icons/fa";
import { Link } from "react-router-dom";
import img1 from "../assets/images/dashboardlogo.avif";
import img2 from "../assets/images/avator.jpg";
import { ThemeContext } from "../assets/store/Themecontext";

const Sidebar = () => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);
  const [animate, setAnimate] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAnimate(true);
    }, 100);
    return () => clearTimeout(timeout);
  }, []);

  // Close sidebar on navigation for mobile
  const handleLinkClick = () => {
    if (window.innerWidth <= 480) {
      setSidebarOpen(false);
    }
  };

  return (
    <>
      {/* Hamburger button for mobile */}
      <div
        className={styles.hamburger}
        onClick={() => setSidebarOpen(!sidebarOpen)}
        style={{ color: darkMode ? "white" : "black" }}
        aria-label="Toggle sidebar menu"
      >
        <div></div>
        <div></div>
        <div></div>
      </div>

      <div
        className={`${styles.sidebar} ${sidebarOpen ? styles.open : ""}`}
        style={{
          backgroundColor: darkMode ? "#120f2d" : "#fff",
          color: darkMode ? "white" : "black",
        }}
      >
        <div className={styles.logo}>
          <img src={img1} alt="Dashboard Logo" />
        </div>

        <nav className={styles.nav}>
          <Link
            to="/"
            onClick={handleLinkClick}
            className={`${styles.navItem} ${animate ? styles.visible : ""}`}
            style={{ color: darkMode ? "white" : "black" }}
          >
            <FaHome /> Dashboard
          </Link>
          <Link
            to="/courses"
            onClick={handleLinkClick}
            className={`${styles.navItem} ${animate ? styles.visible : ""}`}
            style={{ color: darkMode ? "white" : "black" }}
          >
            <FaBook /> My Courses
          </Link>
          <Link
            to="/analytics"
            onClick={handleLinkClick}
            className={`${styles.navItem} ${animate ? styles.visible : ""}`}
            style={{ color: darkMode ? "white" : "black" }}
          >
            <FaChartBar /> Analytics
          </Link>
          <Link
            to="/settings"
            onClick={handleLinkClick}
            className={`${styles.navItem} ${animate ? styles.visible : ""}`}
            style={{ color: darkMode ? "white" : "black" }}
          >
            <FaCog /> Settings
          </Link>
          <Link
            to="/logout"
            onClick={handleLinkClick}
            className={`${styles.navItem} ${animate ? styles.visible : ""}`}
            style={{ color: darkMode ? "white" : "black" }}
          >
            <FaPowerOff /> Logout
          </Link>
        </nav>

        <div
          className={`${styles.darkModeToggle} ${
            animate ? styles.visible : ""
          }`}
          style={{
            backgroundColor: darkMode ? "#2d2454" : "#eee",
            color: darkMode ? "white" : "black",
          }}
        >
          <span>{darkMode ? "Dark Mode" : "Light Mode"}</span>
          <label className={styles.switch}>
            <input
              type="checkbox"
              checked={darkMode}
              onChange={toggleDarkMode}
            />
            <span className={styles.slider}></span>
          </label>
        </div>

        <div className={`${styles.avatarBox} ${animate ? styles.visible : ""}`}>
          <img src={img2} alt="User Avatar" className={styles.avatar} />
          <div
            className={styles.avatarCard}
            style={{ backgroundColor: darkMode ? "#2d2454" : "#eee" }}
          >
            <div
              className={styles.avatarText}
              style={{ color: darkMode ? "#e0e0e0" : "#333" }}
            >
              <p>headlamp1</p>
              <p>accountant's</p>
              <p>character</p>
            </div>
          </div>
          <button className={styles.chatNow}>Chat Now</button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
