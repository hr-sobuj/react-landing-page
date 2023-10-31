import React from "react";
import { FaCoffee, FaLaptop, FaRocket } from "react-icons/fa";
import styles from "../../styles/Home/Services.module.css";

const servicesData = [
  {
    id: 1,
    icon: <FaCoffee className={styles.serviceIcon} />,
    title: "Quality Products",
    description:
      "Explore our wide range of quality products that are designed to meet your needs and expectations. We are committed to providing you with the best.",
  },
  {
    id: 2,
    icon: <FaLaptop className={styles.serviceIcon} />,
    title: "Technology Solutions",
    description:
      "Our expert team offers innovative technology solutions to help your business thrive in the digital age. Discover how we can enhance your operations.",
  },
  {
    id: 3,
    icon: <FaRocket className={styles.serviceIcon} />,
    title: "Efficient Services",
    description:
      "Experience efficient and reliable services that prioritize your satisfaction. We're dedicated to delivering solutions that make a difference.",
  },
];

function Services() {
  return (
    <section className={styles.service} id="service">
      <div className="container">
        <h2 className={styles.serviceTitle}>Our Services</h2>
        <div className={styles.serviceItems}>
          {servicesData.map((service) => (
            <div key={service.id} className={styles.serviceItem}>
              {service.icon}
              <h3 className={styles.serviceItemTitle}>{service.title}</h3>
              <p className={styles.serviceItemDescription}>
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
