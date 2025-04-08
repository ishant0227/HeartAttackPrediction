
import heartIcon from "../assets/heart_icon.png";
import styles from "../Component/Logo.module.css"; 
import Nav from "./Nav";
import Button from "./Button";

export default function Logo(){
    return(
        <div className={styles.logo}>
                  <img src={heartIcon} alt="Heart Logo" className={styles.logoicon} />
                  <span>Heart Attack Risk Predictor</span>
                  <Nav/>
                  <Button/>
                </div>
                
    )
}