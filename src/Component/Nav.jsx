import { NavLink } from "react-router-dom"
import styles from "../Component/Nav.module.css"
export default function Nav(){
    return(
    <>
     {/* Navigation Menu */}
     <nav className={styles.mainnav}>
          <NavLink to="/" className={styles.navlink}>
            Home
          </NavLink>
          <NavLink to="/about"  className={styles.navlink}  
          onClick={(e)=>{e.preventDefault(); 
          const section = document.getElementById("about");
          if(section){section.scrollIntoView}

           }}>
            About
          </NavLink>
          <NavLink to="/how-it-works" className={styles.navlink}  
          onClick={(e)=>{e.preventDefault();
            const section = document.getElementById("how-it-works");
            if(section){section.scrollIntoView({behavior:"smooth"}) } } }>
            How It Works
          </NavLink>
          <NavLink to="/login" className={styles.navlink}>
            Login / Register
          </NavLink >
        </nav>
    </>
    )

}