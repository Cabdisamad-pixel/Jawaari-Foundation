import React from "react";
import AboutProvStyles from './AboutProv.module.css'
import provImage from '../../../Assets/prov.webp'
const AboutProv = () => {
    return (
        <div className={AboutProvStyles.aboutContainer}>
            {/* Section cusub oo ugu sareysa */}
            <section className={AboutProvStyles.introSection}>
                <div className={AboutProvStyles.introContent}>
                    <div className={AboutProvStyles.imageBox}>
                        <img
                            src={provImage}
                            alt="Prof. Maxamed Cusmaan Jawaari"
                            className={AboutProvStyles.profileImage}
                        />
                    </div>
                    <div className={AboutProvStyles.textBox}>
                        <h2 className={AboutProvStyles.heading}>Jawaari Foundation</h2>
                        <p className={AboutProvStyles.description}>
                            The Jawari Foundation is named after the former Speaker of the Somali Parliament, <strong>Prof. Mohamed Osman Jawari</strong> . His name was chosen to honor his leadership role and his efforts toward the development of Somali society. This charitable organization is dedicated to continuing his legacy by focusing on education, healthcare, and support for vulnerable communities.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutProv;
