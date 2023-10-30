import React from "react";
import { FaCoffee, FaLaptop, FaRocket } from "react-icons/fa";
import styles from "../../styles/Services.module.css";

function Services() {
  return (
    <section className={styles.service}>
      <div className="container">
        <h2 className={styles.serviceTitle}>Our Services</h2>
        <div className={styles.serviceItems}>
          <div className={styles.serviceItem}>
            <FaCoffee className={styles.serviceIcon} />
            <h3 className={styles.serviceItemTitle}>Quality Products</h3>
            <p className={styles.serviceItemDescription}>
              Explore our wide range of quality products that are designed to
              meet your needs and expectations. We are committed to providing
              you with the best.
            </p>
          </div>
          <div className={styles.serviceItem}>
            <FaLaptop className={styles.serviceIcon} />
            <h3 className={styles.serviceItemTitle}>Technology Solutions</h3>
            <p className={styles.serviceItemDescription}>
              Our expert team offers innovative technology solutions to help
              your business thrive in the digital age. Discover how we can
              enhance your operations.
            </p>
          </div>
          <div className={styles.serviceItem}>
            <FaRocket className={styles.serviceIcon} />
            <h3 className={styles.serviceItemTitle}>Efficient Services</h3>
            <p className={styles.serviceItemDescription}>
              Experience efficient and reliable services that prioritize your
              satisfaction. We're dedicated to delivering solutions that make a
              difference.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
