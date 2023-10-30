import React from "react";
import heroImage from "../../assets/images/hero.png";
import styles from "../../styles/Home/HeroSection.module.css";

function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles["hero-content"]}>
          <div className={styles["content-left"]}>
            <h1 className={styles["hero-title"]}>Welcome to Our Website</h1>
            <p className={styles["hero-description"]}>
              Your destination for incredible products and services.
            </p>
            <button className={styles["cta-button"]}>Get Started</button>
          </div>
          <div className={styles["content-right"]}>
            <img
              src={heroImage}
              alt="Hero"
              className={styles["animated-image"]}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
