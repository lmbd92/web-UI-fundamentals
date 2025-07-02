import styles from "./Card.module.scss";
import CardTitle from "../../atoms/CardTitle";
import CardImage from "../../atoms/CardImage";
import CardDescription from "../../atoms/CardDescription";
import ThemeToggle from "../../atoms/ThemeToggle";

/* 
    * Card Component
    @param {Object} props - Component properties
    @param {string} props.image - URL of the card image
    @param {string} props.title - Title of the card
    @param {string} props.description - Description of the card
    @param {Function} props.onButtonClick - Callback function for button click
    @returns {JSX.Element} Rendered Card component
 */
export default function Card({
  image,
  title,
  description,
  onButtonClick,
  isDark,
  onToggleTheme,
}) {
  return (
    <div className={styles.card}>
      <CardImage src={image} alt={title} />
      <div className={styles.content}>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
        <ThemeToggle isDark={isDark} onToggle={onToggleTheme} />
      </div>
    </div>
  );
}
