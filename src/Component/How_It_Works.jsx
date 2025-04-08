import styles from "../Component/How_it_works.module.css"
import { ClipboardCheck, Activity } from "lucide-react";
export default function Howitworks(){
    return(
        <section className={styles.howitworkssection}>
        <div className={styles.container}>
          <div className={styles.sectionheader}>
            <h2 className={styles.sectiontitle}>How It Works</h2>
            <p className={styles.sectionsubtitle}>
              Our simple three-step process helps you understand your heart health risk
            </p>
          </div>
          <div className={styles.stepscontainer}>
            <div className={styles.step}>
              <div className={styles.stepiconcontainer}>
                <ClipboardCheck className={styles.stepicon} />
              </div>
              <h3 className={styles.steptitle}>Answer a Few Questions</h3>
              <p className={styles.stepdescription}>
                Fill out a simple lifestyle and health-based form with your medical history and habits.
              </p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepiconcontainer}>
                <Activity className={styles.stepicon} />
              </div>
              <h3 className={styles.steptitle}>Get Instant Results</h3>
              <p className={styles.stepdescription}>
                The system evaluates your risk level using AI and provides immediate feedback.
              </p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepiconcontainer}>
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
                  className={styles.stepicon}
                >
                  <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
                  <path d="M3 9V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4" />
                  <path d="M13 13h4" />
                  <path d="M13 17h4" />
                  <path d="M9 13h.01" />
                  <path d="M9 17h.01" />
                </svg>
              </div>
              <h3 className={styles.steptitle}>Consult a Doctor (If Needed)</h3>
              <p className={styles.stepdescription}>
                Connect with a specialist for expert advice based on your risk assessment results.
              </p>
            </div>
          </div>
        </div>
      </section>
    )
}