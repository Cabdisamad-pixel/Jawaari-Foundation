import React from 'react';
import ongoingDonationStyles from './OngoingDonations.module.css';

const donationsData = [
  {
    id: 1,
    title: "Accessible Education",
    description:
      "Providing quality education to children in underprivileged areas.",
    imgSrc: 'https://i.pinimg.com/1200x/6d/0b/76/6d0b7670918099732fd087ff78d4c2f1.jpg',
  },
  {
    id: 2,
    title: "Healthcare Outreach",
    description:
      "Bringing essential healthcare services to remote communities.",
    imgSrc: "https://i.pinimg.com/736x/71/67/99/7167996a96973692a330ee6d7ef22336.jpg",
  },
  {
    id: 3,
    title: "Food Bank Initiatives",
    description:
      "Ensuring nutritious meals for families facing food insecurity.",
    imgSrc: "https://i.pinimg.com/736x/c4/1d/3a/c41d3a8f64d0ef5ede8bdd33fb4abf79.jpg",
  },
];

const OngoingDonations = () => {
  return (
    <section className={ongoingDonationStyles.ongoingDonations}>
      <h2>Ongoing Donations</h2>
      <div className={ongoingDonationStyles.cards}>
        {donationsData.map(({ id, title, description, imgSrc }) => (
          <div key={id} className={ongoingDonationStyles.card}>
            <img src={imgSrc} alt={title} className={ongoingDonationStyles.cardImage} />
            <h3>{title}</h3>
            <p>{description}</p>
            <button className={ongoingDonationStyles.donateBtn}>Donate</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OngoingDonations;
