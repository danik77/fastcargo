import type { NextPage } from 'next'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useTranslation } from 'next-i18next';
 import CallbackButton from '../src/components/CallbackForm/CallbackButton';
 import IconsWork from '../src/components/IconsWork';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const HowWeWork: NextPage = () => {

  const { t } = useTranslation('common');

  return (
     <><div  className={styles.sliderStyle}></div>
            <div  style={{backgroundImage: 'url(/images/cargo1.jpg)', backgroundSize: 'cover'}} className={`${styles.page} ${styles.page100vh}`}>
    <div className={styles.container}>

      <main className={styles.main}>
        <h2>{t('work-title')}</h2>
      <IconsWork />
  <CallbackButton />
      </main>
    </div>
    </div>
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

export default HowWeWork;
