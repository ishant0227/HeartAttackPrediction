import React from "react";
import styles from "../Component/Header.module.css"; 
import Logo from "./Logo";



export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container } >
      <div className={styles.headercontainer}>
        <Logo/>
    </div>
      </div>
    </header>
  );
}
