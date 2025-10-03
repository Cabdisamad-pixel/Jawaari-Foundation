import React from 'react';
import styles from './Founder.module.css';

import imageFounder from '../../../Assets/Gudoomiyaha.jfif'

const Founder = () => {
  return (
    <section className={styles.founderSection} aria-labelledby="founder-title">
      <h2 id="founder-title" className={styles.title}>Founder</h2>

      <div className={styles.container}>
        <div className={styles.imageWrap}>
          <img src={imageFounder}  className={styles.image} />
        </div>

        <div className={styles.content}>
          <h3 className={styles.name}>Professor Cabdicasiis Jawaari</h3>

          <p className={styles.paragraph}>
            Professor Cabdicasiis Jawaari waa aasaasaha <strong>Jawari Foundation</strong>, hoggaamiye bulshada Soomaaliyeed ka dhex muuqday muddo dheer,
            laguna xasuusto howl-karnimadiisa iyo kartidiisa dhanka waxbarashada, hogaaminta, iyo adeegga shacabka.
          </p>

          <p className={styles.paragraph}>
            Waxa uu aasaasay hay’addan isaga oo ka duulaya aragtidiisa ah in waxbarasho iyo fursado loo siman yahay ay yihiin furaha
            horumar waara iyo bulsho caddaalad iyo sinnaan ku dhisan.
          </p>

          <p className={styles.paragraph}>
            Ujeedkiisu waa in <strong>Jawari Foundation</strong> noqoto hay’ad ay ku kalsoonaan karaan dhammaan bulshada Soomaaliyeed meel kasta oo ay joogaan,
            si gaar ahna u garab istaagta dadka baahiyaha gaarka ah qaba iyo dadka danyarta ah, isagoo rajo ka leh mustaqbal Soomaaliya oo ku dhisan
            aqoon, fursad, iyo wadajir.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Founder;
