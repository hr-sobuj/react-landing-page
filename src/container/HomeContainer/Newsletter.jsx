import React from "react";
import styles from "../../styles/Home/Newsletter.module.css";

function Newsletter() {
  return (
    <section className={styles.newsletter} id="newsletter">
      <div className={styles.container}>
        <h2 className={styles.newsletterTitle}>Subscribe to Our Newsletter</h2>
        <p className={styles.newsletterDescription}>
          Get the latest updates and news delivered to your inbox.
        </p>
        <div className={styles.newsletterForm}>
          <input
            type="email"
            placeholder="Enter your email"
            className={styles.newsletterInput}
          />
          <button className={styles.newsletterButton}>Subscribe</button>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;
