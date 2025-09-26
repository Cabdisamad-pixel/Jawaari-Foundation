import React from 'react';
import ongoingDonationStyles from './OngoingDonations.module.css';

const donationsData = [
  {
    id: 1,
    title: "Accessible Education",
    description:
      "Free first aid schools are being opened to educate and support the Buur Hakabo community.",
    imgSrc: 'https://i.pinimg.com/1200x/c9/86/f7/c986f73f6e5c5f34ce811fa87fdc9810.jpg',
  },
  {
    id: 2,
    title: "Eye Surgery",
    description:
      "A small procedure can restore clear vision and brighten everyday life..",
    imgSrc: "https://i.pinimg.com/736x/9d/28/5b/9d285b25539a05179bc70a685c6ad74b.jpg",
  },
  {
    id: 3,
    title: "Wheelchairs",
    description:
      'Your wheelchair donation gives freedom of movement.A small gift can change a life forever.',
    imgSrc: "https://i.pinimg.com/1200x/50/24/97/5024973b81b430fe15f1a67b92b24ce2.jpg",
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
