import React from "react";
import styles from "../Component/Header.module.css"; 
import Logo from "./Logo";



export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container } >
      <div className={styles.headercontainer}>
        <Logo/>
        <marquee>DISCLAMIR* This tool provides an estimated heart attack risk based on lifestyle and clinical inputs.
         It does not consider genetic heart conditions or structural issues like heart valve disorders.</marquee>
    </div>
      </div>
    </header>
  );
}