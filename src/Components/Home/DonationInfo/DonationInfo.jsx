import React from 'react';
import styles from './DonationInfo.module.css';

import imageDonation1 from '../../../Assets/donationPeople.jpg';

import imageDonation2 from '../../../Assets/Kids.jpg'

const DonationInfo = () => {
  return (
    <section className={styles.donationInfo}>
      <div className={styles.topSection}>
        <div className={styles.imageBox}>
          <img
            src={imageDonation1}
            alt="Fundraising"
            className={styles.image}
          />
          <span className={styles.tag}>Fundraising</span>
          <span className={styles.tag}>Charity</span>
        </div>
        <div className={styles.textBox}>
          <h2>Donation for the better of our future world</h2>
          <p>
            WeHope is more than a charity; it's a movement dedicated to shaping a brighter
            future for women, children, and our planet. Through empowering programs,
            dedicated volunteers, and a global reach, we're fostering positive change
            and hope in communities worldwide.
          </p>
          <button className={styles.learnMore}>Learn More</button>
        </div>
      </div>
      <div className={styles.bottomSection}>
        <div className={styles.statBox}>
          <h3>50%</h3>
          <p>of kids worldwide don't have education</p>
        </div>
        <div className={styles.imageBoxSmall}>
          <img
            src={imageDonation2}
            alt="Happy kids"
            className={styles.imageSmall}
          />
        </div>
      </div>
    </section>
  );
};

export default DonationInfo;
