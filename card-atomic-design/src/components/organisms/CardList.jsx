import React from "react";
import styles from "./CardList.module.scss";
import { Card } from "../../molecules/Card/Card";

/*
    * CardList Component
    @param {Object} props - Component properties
    @param {Array} props.items - Array of card items, each containing id, image, title, description, and onButtonClick function
    @returns {JSX.Element} Rendered CardList component   
 */
export default function CardList({ items }) {
  return (
    <div className={styles.grid}>
      {items.map((item) => (
        <Card key={item.id} {...item} onButtonClick={item.onButtonClick} />
      ))}
    </div>
  );
}
