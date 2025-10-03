import React from 'react';
import DonationArafastyles from './DonationMeatsOfArafa.module.css';
// import VideoOfDonationMeats from 'https://www.facebook.com/reel/4032324343707059'

const DonationMeatsOfArafa = () => {
  return (
    <section className={DonationArafastyles.container}>
      <h2 className={DonationArafastyles.title}>
        Meat Distribution on the Day of Arafah in Deyniile District – A Humanitarian Initiative by Jawaari Foundation
      </h2>
      <p className={DonationArafastyles.paragraph}>
        On the blessed Day of Arafah, one of the most sacred days in the Islamic calendar, the community in Deyniile witnessed a meaningful act of compassion and solidarity. Hundreds of underprivileged families across various neighborhoods in the district received fresh meat as part of a charitable distribution effort that brought the joy of Eid to homes that often go without.
      </p>
      <p className={DonationArafastyles.paragraph}>
        Recognizing the growing needs within the community—especially during festive seasons—Jawaari Foundation launched a well-coordinated initiative to provide meat to families unable to afford it. The distribution process was carefully organized in collaboration with local elders, youth volunteers, and grassroots committees who ensured an orderly and fair distribution.
      </p>
      <p className={DonationArafastyles.paragraph}>
        This effort brought happiness to many households, particularly children and mothers from low-income backgrounds. For many of them, it was the first time in years that they had access to quality meat during Eid. Community members expressed sincere gratitude and highlighted the meaningful difference that such initiatives make in their daily lives.
      </p>
      <p className={DonationArafastyles.paragraph}>
        Jawaari Foundation remains committed to supporting the Deyniile community beyond seasonal projects. With a broader vision focused on education, healthcare, clean water, and social welfare, the Foundation continues to carry forward the legacy of service and leadership that defines its mission.
      </p>

      {/* Video Section */}
      <div className={DonationArafastyles.videoWrapper}>
        <iframe
          className={DonationArafastyles.video}
          src='https://www.facebook.com/reel/4032324343707059'
          title="Meat Distribution by Jawaari Foundation"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};

export default DonationMeatsOfArafa;
