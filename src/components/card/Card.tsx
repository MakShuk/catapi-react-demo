import React, { ReactNode } from "react";
import { cn } from "../ui/lib/utils";
import styles from "./Card.module.css";

interface CardProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  tabIndex?: number;
}

const Card: React.FC<CardProps> = ({
  children,
  className,
  onClick,
  tabIndex = 0,
}) => (
  <div
    className={cn(styles.card, className)}
    onClick={onClick}
    tabIndex={tabIndex}
    aria-label="Карточка"
    role="article"
  >
    {children}
  </div>
);

export default Card;