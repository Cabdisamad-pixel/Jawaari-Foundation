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
                            Jawaari Foundation waxaa loogu magac daray Guddoomiyihii hore ee
                            Baarlamaanka Soomaaliya, <strong>Prof. Maxamed Cusmaan Jawaari</strong>.
                            Magaciisa ayaa loo xushay si loo xuso kaalintiisii hogaamineed iyo
                            dadaalkiisii ku aaddanaa horumarinta bulshada Soomaaliyeed.
                            Hay’addan deeq bixinta ah waxa ay u taagan tahay sii wadidda
                            dhaxalkiisa, iyadoo diiradda saaraysa waxbarashada, caafimaadka iyo
                            taageeridda bulshada nugul.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutProv;
