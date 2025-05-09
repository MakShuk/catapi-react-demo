import React, { ReactNode } from "react";
import styles from "./Card.module.css";

interface CardProps {
  children: ReactNode;
}

const Card: React.FC<CardProps> = ({ children }) => (
  <div className={styles.card} tabIndex={0} aria-label="Карточка">
    {children}
  </div>
);

export default Card;