import type { NextPage } from 'next'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useTranslation } from 'next-i18next';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';


//import Admin from '../src/components/Admin';


const AdminPage: NextPage = () => {

 

  return (
    <div className={styles.container}>

      <main className={styles.main}>
        <h2>Admin page</h2>
        {/* <Admin /> */}

      

        <div>
          <h3>Slider</h3>
        </div>

        <div>
          <h3>Texts</h3>
        </div>
      </main>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
     // ...(await serverSideTranslations(locale, ['common', 'navigation'])),
    },
  };
}

export default AdminPage;
