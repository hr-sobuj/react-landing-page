/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"; // Import the icons
import styles from "../../styles/Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>Contact Us</h3>
            <p className={styles.footerInfo}>
              Email:{" "}
              <a style={{ color: "#bbb" }} href="mailto:sobuj.hrs@gmail.com">
                sobuj.hrs@gmail.com
              </a>
              <br />
              Phone: +8801797972527
              <br />
              Address: Pabna, Dhaka, Bangladesh.
            </p>
          </div>
          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>Follow Us</h3>
            <div className={styles.socialIcons}>
              <a
                href="https://www.facebook.com/hr.sobuj.bd/"
                className={styles.iconLink}
              >
                <FaFacebook />
              </a>
              <a
                href="https://twitter.com/MdHabib44881730"
                className={styles.iconLink}
              >
                <FaTwitter />
              </a>
              <a
                href="https://www.instagram.com/_hr_sobuj/"
                className={styles.iconLink}
              >
                <FaInstagram />
              </a>
            </div>
          </div>
          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>Useful Links</h3>
            <ul className={styles.footerLinks}>
              <li>
                <a href="#about">About Us</a>
              </li>
              <li>
                <a href="#service">Services</a>
              </li>
              <li>
                <a href="#portfolio">Portfolio</a>
              </li>
              <li>
                <a href="#testimonial">Testimonials</a>
              </li>
            </ul>
          </div>
          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>Additional Section 1</h3>
            <p className={styles.footerInfo}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam,
              eos odit? Tenetur dignissimos odit, deserunt
            </p>
          </div>
          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>Additional Section 2</h3>
            <p className={styles.footerInfo}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam,
              eos odit? Tenetur dignissimos odit, deserunt
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
