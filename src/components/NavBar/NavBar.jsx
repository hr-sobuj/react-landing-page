import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-scroll";
import logo from "./../../assets/images/logo.png";

import styles from "../../styles/NavBar.module.css";

const navigationItems = [
  {
    id: "about",
    text: "About",
  },
  {
    id: "blog",
    text: "Blog",
  },
];

function NavBar() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className="container">
        <div className={styles.navbarContent}>
          <div className={styles.logo}>
            <img src={logo} alt="" />
          </div>
          <div className={styles.links}>
            <ul className={isMobileNavOpen ? styles.open : ""}>
              {navigationItems.map((item) => (
                <li key={item.id}>
                  <Link to={item.id} smooth={true} duration={500} offset={-80}>
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
            <div className={styles.mobileIcon} onClick={toggleMobileNav}>
              <FaBars />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
