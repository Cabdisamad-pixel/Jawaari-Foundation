import React from 'react';
import stylesScScholarshipWinners from './ScholarshipWinners.module.css';

import image1 from '../../../Assets/ScholarShipWinner.jpg';
import image2 from '../../../Assets/ScholarShipWinner1.jpg';
import image3 from '../../../Assets/ScholarShipWinner2.jpg';


const ScholarshipWinners = () => {
    return (
        <section className={stylesScScholarshipWinners.container}>
            <h2 className={stylesScScholarshipWinners.title}>Meet Our Scholarship Winners</h2>
            <p className={stylesScScholarshipWinners.description}>
                These outstanding students have earned prestigious scholarships through hard work and dedication.
                Get inspired by their stories and start your journey today.
            </p>

            <div className={stylesScScholarshipWinners.grid}>
                <div className={stylesScScholarshipWinners.Alone} style={{backgroundImage:`url(${image1})`}}>
                </div>
                <div className={stylesScScholarshipWinners.inlineImageWinners}>
                    <div className={stylesScScholarshipWinners.card} style={{backgroundImage:`url(${image2})`}}>
                    </div>

                    <div className={stylesScScholarshipWinners.card} style={{backgroundImage:`url(${image3})`}}>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ScholarshipWinners;
