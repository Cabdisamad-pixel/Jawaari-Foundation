import React from 'react';
import styles from './HeroSection.module.css';

import HeroImage from '../../../Assets/HeroImage.png'

const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1>
          Giving <span className={styles.highlight}>Hope</span>,<br />
          Creating Impact
        </h1>
        <p>
          Be a part of something great. We are utterly dedicated to giving
          hope to those in need, creating a lasting impact for them.
        </p>
        <div className={styles.buttons}>
          <button className={styles.donate}>Donate Now</button>
          <button className={styles.learn}>Learn More</button>
        </div>
        <div className={styles.stats}>
          <div>
            <h3>$1M+</h3>
            <p>Fund Raised</p>
          </div>
          <div>
            <h3>500+</h3>
            <p>Dedicated Volunteers</p>
          </div>
          <div>
            <h3>100%</h3>
            <p>Delivered Donations</p>
          </div>
          <div>
            <h3>250K</h3>
            <p>Charity Participation</p>
          </div>
        </div>
      </div>
      <div className={styles.image}>
        <img src={HeroImage} style={{width:'100rem', height:'20rem'}} />
      </div>
    </section>
  );
};

export default HeroSection;
