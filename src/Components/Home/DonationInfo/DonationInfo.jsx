import React from 'react';
import DonationInfostyles from './DonationInfo.module.css';

import imageDonation1 from '../../../Assets/donationPeople.jpg';

import imageDonation2 from '../../../Assets/Screenshot 2025-09-23 103221.png'

const DonationInfo = () => {
  return (
    <section className={DonationInfostyles.donationInfo}>
      <div className={DonationInfostyles.topSection}>
        <div className={DonationInfostyles.imageBox}>
          <img
            src={imageDonation1}
            alt="Fundraising"
            className={DonationInfostyles.image}
          />
          <span className={DonationInfostyles.tag}>Fundraising</span>
          <span className={DonationInfostyles.tag}>Charity</span>
        </div>
        <div className={DonationInfostyles.textBox}>
          <h2>Donation for the better of our future world</h2>
          <p>
            WeHope is more than a charity; it's a movement dedicated to shaping a brighter
            future for women, children, and our planet. Through empowering programs,
            dedicated volunteers, and a global reach, we're fostering positive change
            and hope in communities worldwide.
          </p>
          {/* <button className={styles.learnMore}>Learn More</button> */}
        </div>
      </div>
      <div className={DonationInfostyles.bottomSection}>
        <div className={DonationInfostyles.statBox}>
          <h3>50%</h3>
          <p>of kids worldwide don't have education</p>
        </div>
        <div className={DonationInfostyles.imageBoxSmall}>
          <img
            src={imageDonation2}
            alt="Happy kids"
            className={DonationInfostyles.imageSmall}
          />
        </div>
      </div>
    </section>
  );
};

export default DonationInfo;
