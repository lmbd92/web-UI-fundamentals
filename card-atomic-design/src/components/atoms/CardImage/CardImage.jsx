import React from "react";
import styles from "./CardImage.module.scss";

/* 
   * CardImage component
   @param {Object} props - The properties passed to the component.
   @param {string} props.src - The source URL of the image.
   @param {string} props.alt - The alt text for the image.
   @returns {JSX.Element} The rendered CardImage component.
 */
export default function CardImage({ src, alt }) {
  return <img className={styles.image} src={src} alt={alt} />;
}
