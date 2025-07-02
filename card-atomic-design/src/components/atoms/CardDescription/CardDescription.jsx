import React from "react";
import styles from "./CardDescription.module.scss";

/* 
   * CardDescription component
   @param {Object} props - The properties passed to the component.
   @param {React.ReactNode} props.children - The content to be displayed inside the card description.
   @returns {JSX.Element} The rendered CardDescription component.
 */
export default function CardDescription({ children }) {
  return <p className={styles.text}>{children}</p>;
}
