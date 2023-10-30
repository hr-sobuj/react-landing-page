import React, { useState } from "react";
import styles from "../../styles/Testimonials.module.css";

const testimonialsData = [
  {
    id: 1,
    author: "John Doe",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    author: "Jane Smith",
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    id: 3,
    author: "Alice Johnson",
    text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
];

function Testimonials() {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonialIndex(
      (prevIndex) => (prevIndex + 1) % testimonialsData.length
    );
  };

  const prevTestimonial = () => {
    setCurrentTestimonialIndex(
      (prevIndex) =>
        (prevIndex - 1 + testimonialsData.length) % testimonialsData.length
    );
  };

  return (
    <section className={styles.testimonials}>
      <div className="container">
        <h2 className={styles.testimonialsTitle}>Testimonials</h2>
        <div className={styles.testimonial}>
          <button
            className={styles.testimonialButton}
            onClick={prevTestimonial}
          >
            &lt;
          </button>
          <div className={styles.testimonialContent}>
            <p className={styles.testimonialText}>
              {testimonialsData[currentTestimonialIndex].text}
            </p>
            <p className={styles.testimonialAuthor}>
              - {testimonialsData[currentTestimonialIndex].author}
            </p>
          </div>
          <button
            className={styles.testimonialButton}
            onClick={nextTestimonial}
          >
            &gt;
          </button>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
