import React from 'react';
import styles from './Founder.module.css';

import imageFounder from '../../../Assets/Gudoomiyaha.jfif'

const Founder = () => {
  return (
    <section className={styles.founderSection} aria-labelledby="founder-title">
      <h2 id="founder-title" className={styles.title}>Founder</h2>

      <div className={styles.container}>
        <div className={styles.imageWrap}>
          <img src={imageFounder}  className={styles.image} />
        </div>

        <div className={styles.content}>
          <h3 className={styles.name}>Professor Cabdicasiis Jawaari</h3>

          <p className={styles.paragraph}>
            Professor Cabdicasiis Jawaari is the founder of Jawari Foundation, a distinguished Somali leader who has long been recognized for his dedication, competence, and contributions in the fields of education, leadership, and public service.
          </p>

          <p className={styles.paragraph}>
            He founded the organization based on his vision that equal access to education and opportunities is the key to sustainable development and a society built on justice and equality.
          </p>

          <p className={styles.paragraph}>
            His goal is for <strong>Jawari Foundation</strong> to become an institution trusted by all Somalis wherever they are, with a particular commitment to supporting people with special needs and vulnerable communities, while envisioning a future for Somalia built on knowledge, opportunity, and unity.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Founder;
