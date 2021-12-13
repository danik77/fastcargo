import type { NextPage } from 'next'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { GetStaticProps } from 'next'

import { useTranslation } from 'next-i18next';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations'; //// В __апп

 
//import backgroundImage from '/images/cargo1.jpg';
 import CallbackButton from '../src/components/CallbackForm/CallbackButton';
 


const About: NextPage = () => {

  const { t } = useTranslation('common');


  return (
    <div> 
            <div style={{backgroundImage: 'url(/images/cargo1.jpg)'}} className={`${styles.page} ${styles.pageText} ${styles.background}`}>
<div  className={styles.sliderStyle}></div>
    <div className={`${styles.container} ${styles.containerCentered}`}>
      <main className={styles.main}>
        <h1>{t('about-title')}</h1>
    
      
     <p>{t('about1')} {t('about2')} </p>
    
       
        <CallbackButton />


      </main>
    </div>
    </div>
    <div className={`${styles.container} ${styles.infopage}`}>

      <div className={styles.infopage__item}>
        <div className={`${styles.infopage__left} ${styles.infopage__text}`}>
          <p>{t('about4')} {t('about5')}  </p>
        </div>
        <div className={`${styles.infopage__right} ${styles.infopage__image}`}>
          <Image
              src="/images/cargo1.jpg"
              alt="Picture of the author"
                 width={800}
              height={400}
              layout="responsive"
              className={styles.infopage__image}
            />
        </div>
      </div>

      <div className={styles.infopage__item}>
        <div className={`${styles.infopage__left} ${styles.infopage__image}`}>
         <Image
         src="/images/cargo2.jpg"
              alt="Picture of the author"
            width={800}
              height={400} 
              className={styles.infopage__image}
            />
        </div>
        <div className={`${styles.infopage__right} ${styles.infopage__text}`}>
          <p>{t('about6')} {t('about7')}</p>
        </div>
      </div>

      <div className={styles.infopage__item}>
        <div className={`${styles.infopage__left} ${styles.infopage__text}`}>
          <p>{t('about8')} </p>
        </div>
        <div className={`${styles.infopage__right} ${styles.infopage__image}`}>
          <Image
              src="/images/cargo3.jpg"
              alt="Picture of the author"
                 width={800}
              height={400}
              layout="responsive"
              className={styles.infopage__image}
            />
        </div>
      </div>
     
    </div>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || "", ['common', 'navigation', 'icons', 'forms'])),
    },
  };
}


export default About
