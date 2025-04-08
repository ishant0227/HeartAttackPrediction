import heartIcon from "../assets/heart_icon.png";
import styles from "../Component/Logo.module.css";
import Nav from "./Nav";
import { useState } from "react";

export default function Logo() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={heartIcon} alt="Heart Logo" className={styles.logoicon} />
        <span className={styles.logotext}>Heart Attack Risk Predictor</span>
      </div>

      <button className={styles.toggleButton} onClick={toggleMenu}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="4" x2="20" y1="6" y2="6" />
          <line x1="4" x2="20" y1="12" y2="12" />
          <line x1="4" x2="20" y1="18" y2="18" />
        </svg>
      </button>

      <Nav isOpen={menuOpen} />
    </header>
  );
}
