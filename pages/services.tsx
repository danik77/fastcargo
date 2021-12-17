import {useState, useEffect} from 'react'
import type { NextPage } from 'next'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useTranslation } from 'next-i18next';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
 import CallbackButton from '../src/components/CallbackForm/CallbackButton';


 import { AnimationOnScroll } from 'react-animation-on-scroll';


 const SERVICES = 13;


const IMAGES = [
'0',
'calculator.png',
'problem-solving.png',
  'dollar-currency-symbol.png',
'shipped.png',
'handshake.png',
'talking.png',
  'warehouse.png',
'package-box.png',
'truck.png',
  'discount.png',
'document.png',
'customs-agent2.png'

];
 
const Services: NextPage = (props) => {

  const { t } = useTranslation('common');

const [nextGo, setNextGo] = useState(false)
  useEffect(() => {
    // window is accessible here.
    setNextGo(true)
  }, []);
  

  return (
    <>
    {nextGo &&
      <> 
            <div style={{backgroundImage: 'url(/images/cargo2.jpg)'}} className={`${styles.page} ${styles.pageText} ${styles.background}`}>
            <div  className={styles.sliderStyle}></div>
   
    <div className={`${styles.container} ${styles.containerCentered}`}>
      <main className={styles.main}>
        <h2>{t('services-title')}</h2>
        <p>{t('services-desc')}</p>
        <CallbackButton /> 
          </main>
    </div>
    </div>




  <div className={`${styles.container} ${styles.infopage}`} style={{background: "linear-gradient(284.89deg, #bebf2f 40.15%, #f2ff00 178.17%)"}}>
{/*ВИНЕСТИ В ФУНКЦІЮ ! */}

  {new Array(13).fill(0).map((item, i) => (
    <>
    { i != 0 &&
    <div className={styles.infopage__item}>
      <div className={`${styles.infopage__left}  ${i %2 == 1 ? `${styles.infopage__label}` : `${styles.infopage__icon}`}`}>
        {i %2 == 1 &&  <AnimationOnScroll animateIn="animate__fadeInLeft" animateOnce={true}><p>{t(`services${i}`)}</p></AnimationOnScroll>}

          {i %2 == 0 && <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true}><Image
              src={IMAGES[i] ? `/images/services/${IMAGES[i]}` : "/images/icons/box.png"}
              alt="Picture of the author"
                 width={200}
              height={200}
             
              className={styles.infopage__image}
            /></AnimationOnScroll>
          }
      </div>

      <div className={`${styles.infopage__right} ${i %2 == 1 ? `${styles.infopage__icon}` : `${styles.infopage__label}`}`}>
       {i %2 == 1 && 
         <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true}>
         <Image
               src={IMAGES[i] ? `/images/services/${IMAGES[i]}` : "/images/icons/box.png"}
              alt="Picture of the author"
                 width={200}
              height={200}
              className={styles.infopage__image}
            />
            </AnimationOnScroll>
          }

         {i %2 == 0 &&   <AnimationOnScroll animateIn="animate__fadeInRight" animateOnce={true}><p>{t(`services${i}`)}</p></AnimationOnScroll>}
      </div>
 
    </div>
  }
    </>
  ))
}

  </div>

{/*

     <div className={`${styles.container} ${styles.infopage}`}>

      <div className={styles.infopage__item}>
        <div className={`${styles.infopage__left} ${styles.infopage__text}`}>
          <p>{t('services1')}</p>
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
         src="/images/cargo1.jpg"
              alt="Picture of the author"
            width={800}
              height={400} 
              className={styles.infopage__image}
            />
        </div>
        <div className={`${styles.infopage__right} ${styles.infopage__text}`}>
          <p>{t('services2')}</p>
        </div>
      </div>

      <div className={styles.infopage__item}>
        <div className={`${styles.infopage__left} ${styles.infopage__text}`}>
          <p>{t('services3')}</p>
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
     
    </div>




    <div className={`${styles.container}  `}>
       <ul>
     
         
         <li>{t('services1')}</li>
         <li>{t('services2')}</li>
         <li>{t('services3')}</li>
         <li>{t('services4')}</li>
         <li>{t('services5')}</li>
         <li>{t('services6')}</li>
         <li>{t('services7')}</li>
         <li>{t('services8')}</li>
         <li>{t('services9')}</li>
         <li>{t('services10')}</li>
         <li>{t('services11')}</li>
         <li>{t('services12')}</li>
         <li>{t('services13')}</li>
 

    </ul>  

    <div className={`${styles.container} ${styles.main} `}><CallbackButton /></div>
    </div>  */}

    </>
  }
  </>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || "", ['common', 'navigation', 'icons', 'forms'])),
    },
  };
}

export default Services;
