import React from "react";
import styles from "./CardTitle.module.scss";

/* 
   * CardTitle Component
   @param {Object} props - Component properties
   @param {React.ReactNode} props.children - Content to be displayed inside the title
   @returns {JSX.Element} Rendered CardTitle component
 */
export default function CardTitle({ children }) {
  return <h2 className={styles.title}>{children}</h2>;
}
