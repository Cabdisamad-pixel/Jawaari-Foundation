import React from "react";
import callToActionStyles from "./CallToAction.module.css";

function CallToAction() {
  return (
    <section className={callToActionStyles.cta}>
      <h2>Ready to Start Your Success Journey?</h2>
      <p>
        Join thousands of students who are already using ScholarHub UZ to achieve
        their academic goals. Your scholarship dreams are just one step away.
      </p>
      <button className={callToActionStyles.btn}>Create Free Account →</button>
    </section>
  );
}

export default CallToAction;
