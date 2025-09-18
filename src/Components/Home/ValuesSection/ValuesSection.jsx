import React from 'react';
import styles from './ValuesSection.module.css';

const values = [
  {
    id: 1,
    title: "Community Growth",
    description:
      "SBuilding strong, resilient communities through education and collaboration.",
    imgSrc: "https://i.pinimg.com/1200x/a4/fe/da/a4feda2573e84a349db82afae0326ea5.jpg",
  },
  {
    id: 2,
    title: "Preserve Nature",
    description:
      "Promoting environmental sustainability and conservation efforts globally.",
    imgSrc: "https://i.pinimg.com/736x/f3/c9/29/f3c929272aeda3f29a5a7277f323633e.jpg",
  },
  {
    id: 3,
    title: "Nurture Children",
    description:
      "Providing safe environments and nurturing support for children to thrive.",
    imgSrc: "https://i.pinimg.com/1200x/93/f4/56/93f456a574e3e7f538da7355b5d8c7c0.jpg",
  },
];

const ValuesSection = () => {
  return (
    <section className={styles.valuesSection}>
      <h2>Our Core Values</h2>
      <div className={styles.valuesContainer}>
        {values.map(({ id, title, description, imgSrc }) => (
          <div key={id} className={styles.valueCard}>
            <img src={imgSrc} alt={title} className={styles.valueImage} />
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ValuesSection;
