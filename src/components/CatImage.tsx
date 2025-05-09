import React from "react";
import styles from "./CatImage.module.css";

const CatImage: React.FC = () => (
  <div className={styles.catImageWrapper} tabIndex={0} aria-label="Картинка кота">
    <svg
      className={styles.catSvg}
      viewBox="0 0 300 220"
      fill="black"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M20 200 Q40 120 80 160 Q100 180 120 160 Q140 140 180 180 Q200 200 220 180 Q260 140 280 200 Q270 210 250 210 Q230 210 210 200 Q190 190 170 210 Q150 230 130 210 Q110 190 90 210 Q70 230 50 210 Q30 190 20 200 Z" />
      <path d="M80 160 Q60 100 100 80 Q120 70 140 100 Q160 130 180 100 Q200 70 220 80 Q260 100 240 160" />
      <circle cx="110" cy="120" r="8" fill="#fff"/>
      <circle cx="190" cy="120" r="8" fill="#fff"/>
      <circle cx="110" cy="120" r="4" fill="#000"/>
      <circle cx="190" cy="120" r="4" fill="#000"/>
    </svg>
  </div>
);

export default CatImage;