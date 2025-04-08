import { ArrowRight } from "lucide-react";
import styles from "../Component/CTA.module.css"
export default function CTA(){
    return(
      <section className={styles.ctasection}>
      <div className={styles.container}>
        <div className={styles.ctacontent}>
          <h2 className={styles.ctatitle}>Start Your Heart Risk Assessment Now!</h2>
          <p className={styles.ctasubtitle}>Take the first step towards a healthier heart and a longer life.</p>
          <button size="lg" variant="secondary" className={styles.ctabuttonlarge}>
            Get Started
            <ArrowRight className={styles.buttonicon} />
          </button>
        </div>
      </div>
    </section>
    )
}