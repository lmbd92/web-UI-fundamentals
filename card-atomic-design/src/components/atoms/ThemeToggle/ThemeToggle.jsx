import React from "react";
import styles from "./ThemeToggle.module.scss";

/*
 * ThemeToggle component to switch between light and dark themes.
 * @param {boolean} isDark - Indicates if the current theme is dark.
 * @param {function} onToggle - Function to call when the theme is toggled.
 * @returns {JSX.Element} A button that toggles the theme.
 */
export default function ThemeToggle({ isDark, onToggle }) {
  return (
    <button className={styles.btn} onClick={onToggle}>
      {isDark ? "☀️ Light" : "🌙 Dark"}
    </button>
  );
}
