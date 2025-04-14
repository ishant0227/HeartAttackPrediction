import Nav from './Nav';
import styles from './Thanks.module.css';

export default function Thanks() {
  return (
    <>
    <Nav/>
    <div className={styles.container}>
      <h1 className={styles.he}>Thanks for Filling the Survey!</h1>
      <p className={styles.pa}>We appreciate your time and contribution to better health insights.</p>
      <p>We are Still Working On Results </p>
    </div>
    </>
  );
}
