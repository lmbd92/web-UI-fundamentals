import React from "react";
import styles from "./CardButton.module.scss";

/* 
    * CardButton component
    @param {Object} props - The properties passed to the component.
    @param {React.ReactNode} props.children - The content to be displayed inside the button.
    @param {Function} props.onClick - The function to be called when the button is clicked.
    @returns {JSX.Element} The rendered CardButton component.
 */
export default function CardButton({ children, onClick }) {
  return (
    <button className={styles.btn} onClick={onClick}>
      {children}
    </button>
  );
}
