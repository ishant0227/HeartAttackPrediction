import { NavLink } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

import styles from "../Component/Nav.module.css";

export default function Nav({ isOpen }) {
  return (
    <nav className={`${styles.mainnav} ${isOpen ? styles.open : styles.close}`}>
      <NavLink to="/" className={styles.navlink}>
        Home
      </NavLink>
      <NavLink
        to="/about"
        className={styles.navlink}
        onClick={(e) => {
          e.preventDefault();
          const section = document.getElementById("about");
          if (section) section.scrollIntoView({ behavior: "smooth" });
        }}
      >
        About
      </NavLink>
      <HashLink
        to="/how-it-works"
        
        className={styles.navlink}
        onClick={(e) => {
          e.preventDefault();
          const section = document.getElementById("how-it-works");
          if (section) section.scrollIntoView({ behavior: "smooth" });
        }}
      >
        How It Works
      </HashLink>
      <NavLink to="/Survey" className={styles.navlink}>
        Survey
      </NavLink>
      <NavLink   to="/login" className={styles.navlink} onClick={(e) => {
          e.preventDefault();
          const section = document.getElementById("login");
          if (section) section.scrollIntoView({ behavior: "smooth" });
        }}>
        Login / Register
      </NavLink>
    </nav>
  );
}
