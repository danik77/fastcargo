import type { NextPage } from 'next'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useTranslation } from 'next-i18next';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
 import CallbackButton from '../src/components/CallbackForm/CallbackButton';

 const SERVICES = 13;

 
const Services: NextPage = (props) => {

  const { t } = useTranslation('common');

  return (
      <> 
            <div style={{backgroundImage: 'url(/images/cargo1.jpg)', backgroundSize: 'cover'}} className={`${styles.page} ${styles.pageText}`}>
            <div  className={styles.sliderStyle}></div>
    <div className={styles.container}>
      <main className={styles.main}>
        <h2>{t('services-title')}</h2>
        <CallbackButton /> 
          </main>
    </div>
    </div>




  <div className={`${styles.container} ${styles.infopage}`}>
{/*ВИНЕСТИ В ФУНКЦІЮ ! */}

  {new Array(13).fill(0).map((item, i) => (
    <>
    { i != 0 &&
    <div className={styles.infopage__item}>
      <div className={`${styles.infopage__left}  ${i %2 == 1 ? `${styles.infopage__label}` : `${styles.infopage__icon}`}`}>
        {i %2 == 1 && <p>{t(`services${i}`)}</p>}

          {i %2 == 0 && <Image
              src="/images/icons/box.png"
              alt="Picture of the author"
                 width={200}
              height={200}
             
              className={styles.infopage__image}
            />
          }
      </div>

      <div className={`${styles.infopage__right} ${i %2 == 1 ? `${styles.infopage__icon}` : `${styles.infopage__label}`}`}>
       {i %2 == 1 && <Image
               src="/images/icons/box.png"
              alt="Picture of the author"
                 width={200}
              height={200}
              className={styles.infopage__image}
            />}

         {i %2 == 0 &&  <p>{t(`services${i}`)}</p>}
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
