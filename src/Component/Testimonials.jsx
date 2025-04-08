
import styles from "../Component/Testimonials.module.css"
export default function Testimonials(){
    return(
        <section className={styles.testimonialssection}>
        <div className={styles.container}>
          <div className={styles.sectionheader}>
            <h2 className={styles.sectiontitle}>What Our Users Say</h2>
            <p className={styles.sectionsubtitle}>Hear from people who have used our heart risk assessment tool</p>
          </div>
          <div className={styles.testimonialsgrid}>
            <div className={styles.testimonialcard}>
              <div className={styles.testimonialstars}>
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className={styles.staricon}
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>
              <p className={styles.testimonialtext}>
                "This tool helped me identify risk factors I wasn't aware of. I've made lifestyle changes based on the
                recommendations and feel much better."
              </p>
              <div className={styles.testimonialauthor}>
                <div className={styles.authoravatar}></div>
                <div className={styles.authorinfo}>
                  <p className={styles.authorname}>Sarah Johnson</p>
                  <p className={styles.authordetails}>Age 45</p>
                </div>
              </div>
            </div>
            <div className={styles.testimonialcard}>
              <div className={styles.testimonialstars}>
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className={styles.staricon}
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>
              <p className={styles.testimonialtext}>
                "As someone with a family history of heart disease, this assessment gave me peace of mind and actionable
                steps to reduce my risk."
              </p>
              <div className={styles.testimonialauthor}>
                <div className={styles.authoravatar}></div>
                <div className={styles.authorinfo}>
                  <p className={styles.authorname}>Michael Rodriguez</p>
                  <p className={styles.authordetails}>Age 52</p>
                </div>
              </div>
            </div>
            <div className={styles.testimonialcard}>
              <div className={styles.testimonialstars}>
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className={styles.staricon}
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>
              <p className={styles.testimonialtext}>
                "The assessment was quick and easy to complete. The results were eye-opening and motivated me to make
                healthier choices."
              </p>
              <div className={styles.testimonialauthor}>
                <div className={styles.authoravatar}></div>
                <div className={styles.authorinfo}>
                  <p className={styles.authorname}>Jennifer Lee</p>
                  <p className={styles.authordetails}>Age 38</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}