import React from 'react';
import AboutStyles from './AboutSection.module.css';
import heroImage from '../../Assets/goal.jpg'; // ku dar image la mid ah magacan
import educationImage from '../../Assets/HeroAbout.jpg';
import foodImage from '../../Assets/food.jpg';
import healthImage from '../../Assets/HealthAbout.jpg';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import AboutProv from './AboutProv/AboutProv';
import DonationMeatsOfArafa from './DonationMeatsOfArafa/DonationMeatsOfArafa';
const AboutSection = () => {
  return (
    <>
      <Header />

      <div className={AboutStyles.container}>
        {/* Hero Section */}
        <section className={AboutStyles.hero}>
          <img src={heroImage} alt="Jawaari Foundation" className={AboutStyles.heroImage} />
          <div className={AboutStyles.overlay}>
            <h1 style={{ color: 'white' }}>Jawaari Foundation</h1>
            <p style={{ color: 'white' }}>Empowering Communities Through Education, Food & Healthcare</p>
          </div>
        </section>

        {/* About Section */}
        <section className={AboutStyles.about}>
          <h2>About Us</h2>



          <p>
            <strong>Jawaari Foundation</strong> The Jawari Foundation, established in 2024, is a non-profit organization dedicated to preserving the legacy of Professor Jawari and advancing his vision for education, governance, and equality. We work to empower individuals and communities through scholarships, leadership programs, and advocacy, building a future where knowledge, integrity, and opportunity are shared by all.

            Rooted in Jawari’s lifelong commitment to Somalia and its people, the Foundation serves as a bridge between past achievements and future aspirations — promoting inclusive education, fostering democracy, and inspiring the next generation of leaders.
          </p>
          <p>
            Our mission is to create a sustainable and just society where everyone has equal opportunities to thrive and live with dignity.
            We believe in working hand-in-hand with communities to develop solutions that are both compassionate and practical.
          </p>
        </section>

        <AboutProv />
        <DonationMeatsOfArafa/>

        {/* Services Section */}
        <section className={AboutStyles.services}>
          <h2>Our Services</h2>

          <div className={AboutStyles.serviceCard}>
            <img src={educationImage} alt="Scholarship Program" />
            <div>
              <h3>Scholarship Program</h3>
              <p>
                We provide scholarships to bright students from disadvantaged backgrounds.
                Our support covers tuition fees, school supplies, and mentorship programs to ensure long-term academic success.
              </p>
            </div>
          </div>

          <div className={AboutStyles.serviceCard}>
            <img src={foodImage} alt="Food Aid Program" />
            <div>
              <h3>Food Aid Program</h3>
              <p>
                To combat hunger and food insecurity, we distribute essential food packages to families in need,
                especially during emergencies and seasonal crises.
              </p>
            </div>
          </div>

          <div className={AboutStyles.serviceCard}>
            <img src={healthImage} alt="Healthcare Access" />
            <div>
              <h3>Healthcare Access</h3>
              <p>
                We facilitate free medical check-ups, provide medication, and promote public health awareness in underserved communities.
                Our goal is to make quality healthcare accessible to all.
              </p>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
};

export default AboutSection;
