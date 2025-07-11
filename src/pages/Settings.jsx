import React, { useContext } from "react";
import { ThemeContext } from "../assets/store/Themecontext";
import styles from "./Settings.module.css";

const Settings = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div className={`${styles.container} ${darkMode ? styles.dark : ""}`}>
      <h1 className={styles.title}>Settings</h1>
      <p className={styles.description}>
        Customize your preferences and app settings here.
      </p>

      <div className={styles.settingItem}>
        <label htmlFor="notifications">Enable Notifications</label>
        <input type="checkbox" id="notifications" />
      </div>

      <div className={styles.settingItem}>
        <label htmlFor="language">Language</label>
        <select id="language">
          <option>English</option>
          <option>Urdu</option>
          <option>Spanish</option>
          <option>French</option>
        </select>
      </div>
    </div>
  );
};

export default Settings;
