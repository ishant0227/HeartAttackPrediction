import styles from "../Component/Button.module.css"

export default function Button(){
    return(


        <div className={styles.headeractions}>
            <button variant="outline" size="sm" className={styles.loginbtn}>
              Login
            </button>
            <button size="sm" className={styles.registerbtn}>
              Register
            </button>
            <button variant="ghost" size="sm" className={styles.mobilemenubtn}>
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
                className="menu-icon"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
              {/* <span className="sr-only">Profile</span> */}
            </button>
          </div>


    )
}