import { useNavigate } from "react-router-dom";
import styles from "../Component/Hero.module.css"
import HealthyHeart from "../assets/Healthy_Heart.jpeg";
import { ArrowRight } from "lucide-react"
export default function Hero(){
const navigate = useNavigate();

    return(
    
    <section className={styles.herosection}>
        <div className={styles.herobgoverlay}></div>
        <div className={styles.container}>
          <div className={styles.herocontent}>
            <div className={styles.herotext}>
              <h1 className={styles.herotitle}>Know Your Heart Health Risk in Minutes!</h1>
              <p className={styles.herosubtitle}>
                Take a quick assessment based on your lifestyle and medical factors to evaluate your heart attack risk.
              </p>
              <div className={styles.herobuttons}>
                <button onClick={()=> navigate("/Survey")}  className={styles.surveybutton}>Fill a survey</button>
                <button disabled onClick={()=> navigate("/Form")}   className={styles.ctabutton}>
                  Get Started
                  <ArrowRight className={styles.buttonicon} />
                </button>
                <button disabled className={styles.secondarybutton}>
                  For Doctors
                </button>
              </div>
            </div>

            <div className={styles.heroimagecontainer}>
              <img
                src={HealthyHeart}
                alt="Digital heart health monitoring"
                width="600"
                height="400"
                className={styles.heroimage}
              />
            </div>
            </div>
     </div>  
     </section>   
    )
}