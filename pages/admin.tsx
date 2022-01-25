import type { NextPage } from 'next'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useTranslation } from 'next-i18next';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';


import Admin from '../src/components/Admin';
//import Tabs from '../src/components/Tabs';


//import { firebase } from './_app.js'; 


//import { handler } from './api/hello.ts';



import useSWR from 'swr';


import { useState, useEffect } from 'react'

import Firebase, { FirebaseContext } from '../src/components/Firebase';

export const firebase = new Firebase();




 



const fetcher = async (...args) => {
  const res = await fetch(...args);

  return res.json();
};



 

const AdminPage: NextPage = (props) => {

  const { t } = useTranslation('common');

  const [data, setData] = useState(null)

 
// console.log(firebase)



 

/*
firebase.db.ref('users').on('value', snap => {
  console.log("SNAPPPP ")
  return 1;
  })

  const SUKA = async () => {
   const res = await firebase.db.ref('users') /// new Promise 
      .on('value', snapshot => {
        const dataObject = snapshot.val();
  console.log("uuu");
        console.log(dataObject)
        return dataObject;
 
      })

      //return res;

     console.log("SUKA")
     console.log(typeof(res))
  }

*/

   const { data2 } = useSWR(`/api/hello`, fetcher);

 


 useEffect(() => {
   //setTimeout(() => setData({...data, dr2: "danik2"}), 3000);


//firebase.db.ref('data/email').set('dranik222@google.com');


 
//SUKA();

 

/*
firebase.db.ref('users')
      .on('value', snapshot => {
        const dataObject = snapshot.val();
  console.log("uuu");
        console.log(dataObject)
        return dataObject;
 
      }).then(console.log('ddsdfsd'));
*/

 
    


 }, [])

  return (
<>


 <div style={{backgroundImage: 'url(/images/cargo1.jpg)'}} className={`${styles.page} ${styles.pageText} ${styles.background}`}>
<div  className={styles.sliderStyle}></div>
    <div className={`${styles.container} ${styles.containerCentered}`}>
      <main className={styles.main}>
        <h1>Адміністративна панель</h1>
      </main>
    </div>
    </div>


  
     

    <div className={`${styles.container} ${styles.infopage}`}>

      <main className={styles.main}>
      


         <Admin /> 
 
      </main>
      </div>
   


    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
/*
  const result = await firebase.db.ref('users')
      .on('value', snapshot => {
        const dataObject = snapshot.val();
  console.log("uuu");
        console.log(dataObject)
return dataObject;
      });
      
*/


 //let firebase = new Firebase();
 

  let data = {};

  await firebase.db.ref('data/email').on('value', snapshot => {
        data = snapshot.val();
      }); 

 


  return {
    props: {
 
      data,
      ...(await serverSideTranslations(locale, ['common', 'navigation'])),
    },
  };
}



 

export default AdminPage;
