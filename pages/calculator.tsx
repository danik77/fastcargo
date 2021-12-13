import type { NextPage } from 'next'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useTranslation } from 'next-i18next';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';


import Calculator from '../src/components/Calculator';

const CalculatorPage: NextPage = () => {

  const { t } = useTranslation('common');
  
  return (
      <> 
            <div  style={{backgroundImage: 'url(/images/cargo10.jpg)', backgroundSize: 'cover'}} className={`${styles.page} ${styles.pageText} ${styles.page100vh} ${styles.calculator}`}>
            <div  className={styles.sliderStyle}></div>
    <div className={styles.container}>
      <main className={styles.main}>
        <Calculator />
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

export default CalculatorPage;
