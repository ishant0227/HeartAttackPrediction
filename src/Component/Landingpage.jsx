import Header from "./Header";
import styles from "../Component/Landingpage.module.css"
import Hero from "./Hero";
import Howitworks from "./How_It_Works";
import Testimonials from "./Testimonials";
import CTA from "./CTA";
import Footer from "./Footer";




export default function Landingpage(){
    return(

      <div className={styles.bg}>
            <div className={styles.pagecontainer}>
            <Header  />
            <div id=""><Hero/></div> 
            <div id="how-it-works"><Howitworks/></div>
            <div><Testimonials/></div>
            <CTA/>
            <Footer/>
            
          </div>
        </div>

    )
}