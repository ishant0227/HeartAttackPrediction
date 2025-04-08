import { Heart} from "lucide-react";
import styles from "../Component/Footer.module.css";
import { Link } from "react-router-dom";


export default function Footer(){
    return(

        <footer className={styles.footer}>
        <div className={`${styles.container} ${styles.footercontainer}`}>
          <div className={styles.footerlogo}>
            <Heart className={styles.logoicon} />
            <p className={styles.copyright}>© {new Date().getFullYear()} Heart Attack Risk Predictor. All rights reserved.</p>
          </div>
          <nav className={styles.footernav}>
            <Link href="/about" className={styles.footerlink}>
              About
            </Link>
            <Link href="/contact" className={styles.footerlink}>
              Contact
            </Link>
            <Link href="/privacy" className={styles.footerlink}>
              Privacy Policy
            </Link>
          </nav>
        </div>
        <div className={styles.container}>
          <p className={styles.disclaimer}>
            Disclaimer: This tool provides risk predictions based on data inputs but is not a replacement for
            professional medical advice.
          </p>
        </div>
      </footer>
    

    )
}