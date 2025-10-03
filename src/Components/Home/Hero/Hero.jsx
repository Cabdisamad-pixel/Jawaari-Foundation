import React from "react";
import Herostyles from "./Hero.module.css";

function Hero() {
  return (
    <section className={Herostyles.hero}>
      <span className={Herostyles.tag}>For Al-Hilaal University Students</span>
      <h1>Your Gateway to Prestigious Scholarships</h1>
      <p>
        Join hundreds of students preparing for Presidential and Nomdor
        scholarships. Connect, learn, and achieve your academic dreams.
      </p>
      <div className={Herostyles.actions}>
        <button className={Herostyles.primary}>Start Your Journey →</button>
        <button className={Herostyles.secondary}>Learn More</button>
      </div>
    </section>
  );
}

export default Hero;
