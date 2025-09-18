import React from "react";
import styles from "./Hero.module.css";

function Hero() {
  return (
    <section className={styles.hero}>
      <span className={styles.tag}>For Uzbekistan University Students</span>
      <h1>Your Gateway to Prestigious Scholarships</h1>
      <p>
        Join hundreds of students preparing for Presidential and Nomdor
        scholarships. Connect, learn, and achieve your academic dreams.
      </p>
      <div className={styles.actions}>
        <button className={styles.primary}>Start Your Journey →</button>
        <button className={styles.secondary}>Learn More</button>
      </div>
    </section>
  );
}

export default Hero;
