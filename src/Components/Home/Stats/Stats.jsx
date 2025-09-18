import React from "react";
import styles from "./Stats.module.css";

function Stats() {
  const data = [
    { number: "500+", label: "Active Students" },
    { number: "50+", label: "Scholarship Winners" },
    { number: "25+", label: "Partner Universities" },
    { number: "100+", label: "Active Clubs" },
  ];

  return (
    <section className={styles.stats}>
      {data.map((item, index) => (
        <div key={index} className={styles.card}>
          <h2>{item.number}</h2>
          <p>{item.label}</p>
        </div>
      ))}
    </section>
  );
}

export default Stats;
