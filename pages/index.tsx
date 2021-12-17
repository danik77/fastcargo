import { useState, useEffect } from 'react';
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from "next/router";
import styles from '../styles/Home.module.css'

import { useTranslation } from 'next-i18next';


import { GetStaticProps } from 'next'

//import i18n from "i18next";
//import { initReactI18next } from "react-i18next";

import { serverSideTranslations } from 'next-i18next/serverSideTranslations'; //// В __апп


import Slider from '../src/components/Slider';
import IconsMain from '../src/components/IconsMain'; 
import IconsContacts from '../src/components/IconsContacts'; 
import IconsWork from '../src/components/IconsWork'; 
import CallbackButton from '../src/components/CallbackForm/CallbackButton';


 import { AnimationOnScroll } from 'react-animation-on-scroll';

 import Footer from '../src/components/Footer';



const Home: NextPage = (props) => {


  const [nextGo, setNextGo] = useState(false)

 

  const { i18n } = useTranslation();
  const { t } = useTranslation('common');

 

  const router = useRouter();
  const { id } = router.query;

 
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };


useEffect(() => {
    // window is accessible here.
    setNextGo(true)
  }, []);
  

  return (
    <div className={styles.homepage}>
    { nextGo && 
      <>
        <div className={styles.pageSlider}>

       
      <Slider />

      <div className={`${styles.container} ${styles.white}`}>
      <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true}><h1>{t('benefits-title')}</h1></AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__fadeIn" animateOnce={true}><IconsMain />  </AnimationOnScroll>
      </div>
      <div className={styles.colored}>
        <div className={styles.container} style={{padding: "20px 0px", fontSize: "18px", maxWidth: "900px"}}>
          <div className={styles.callback__wrap}>
            {/* <AnimationOnScroll animateIn="animate__bounceIn"> <div>d</div></AnimationOnScroll> */}
           <AnimationOnScroll animateIn="animate__fadeInLeft" animateOnce={true}> <h3>{t('about1')}</h3></AnimationOnScroll>
           <AnimationOnScroll animateIn="animate__fadeInRight" animateOnce={true}> <p>{t('about2')}</p></AnimationOnScroll>
<CallbackButton className="btn-black"/>
          </div>  
        </div>
      </div>


      {/* <div style={ backgroundImage: 'url(/images/cargo1.jpg)' className={`${styles.page}   ${styles.background}`}}> */}
      <div className={`${styles.container} ${styles.white}`}>
<AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true}><h1>{t('contacts-title')}</h1></AnimationOnScroll>
      <AnimationOnScroll animateIn="animate__fadeIn" animateOnce={true}>


           <IconsContacts /> 
       </AnimationOnScroll>
      </div>
     
      {/* </div> */}

 <div className={styles.colored}>
       <div className={`${styles.container}`}>
      <div className={styles.infopage__item}>
        <div className={`${styles.infopage__left} ${styles.infopage__text}`}>
<AnimationOnScroll animateIn="animate__fadeInLeft" animateOnce={true}><h3>{t('about4')}</h3></AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true}><p> {t('about5')} {t('about6')} {t('about7')}</p></AnimationOnScroll>
        </div>
        <div className={`${styles.infopage__right} ${styles.infopage__image}`}>
          <Image
              src="/images/cargo2.jpg"
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

      <div className={`${styles.container} ${styles.white}`}>
      <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true}><h1>{t('work-title')}</h1></AnimationOnScroll>
     <AnimationOnScroll animateIn="animate__fadeIn" animateOnce={true}><IconsWork /></AnimationOnScroll>

<div className={`${styles.callback__wrap}`}>
     <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true}><h3>{t('about5')}</h3></AnimationOnScroll>
     <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true}> <p>{t('about3')}</p></AnimationOnScroll>
       <CallbackButton />
       </div>
     </div>
     
 
  {/*
        <main className={styles.main}>
           <h1>{t('home1')}</h1>
           <div className={styles.block__list}>
             <div className={styles.block__item}>
               <h3>Block 1</h3>
               <p>Text</p>
             </div>
             <div className={styles.block__item}>
               <h3>Block 2</h3>
               <p>Text</p>
             </div>
            <div className={styles.block__item}>
               <h3>Block 3</h3>
               <p>Text</p>
             </div>

           </div>

           <h1>{t('home1')}</h1>
        </main>
*/}
   
      </div>
 <Footer /> 
         </>
    }
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

export default Home
