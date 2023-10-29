import React from "react";
import aboutUsImage from "../../assets/images/about.png";
import styles from "../../styles/AboutSection.module.css";

function AboutUsSection() {
  return (
    <section className={styles.aboutUs}>
      <div className="container">
        <div className={styles.aboutUsContent}>
          <div className={styles.aboutUsText}>
            <h2 className={styles.aboutUsTitle}>About Us</h2>
            <p className={styles.aboutUsDescription}>
              We are a passionate team dedicated to delivering top-notch
              products and services to our customers. With years of experience
              and a commitment to excellence, we strive to make a difference in
              every project we undertake.
            </p>
          </div>
          <div className={styles.aboutUsImage}>
            <img
              src={aboutUsImage}
              alt="About Us"
              className={styles.aboutUsImage}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUsSection;
