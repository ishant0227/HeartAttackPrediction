import styles from "../Component/Landingpage.module.css"
import Hero from "./Hero";
import Howitworks from "./How_It_Works";
import Testimonials from "./Testimonials";
import CTA from "./CTA";
import Footer from "./Footer";
import heartIcon from "../assets/heart_icon.png";




export default function Landingpage(){
    return(

      <div styles={{
        backgroundImage:`url(${heartIcon})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height:"100vh",
        padding: "0%",
        backgroundRepeat: "no-repeat",
        overflow: "auto",
        
      }}>
            <div className={styles.pagecontainer}>
            
            <div id="hero"><Hero/></div> 
            <div id="how-it-works"><Howitworks/></div>
            <div><Testimonials/></div>
            <CTA/>
            <Footer/>
            
          </div>
        </div>

    )
}