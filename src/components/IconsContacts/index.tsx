 import Image from 'next/image';
import styles from './style.module.css';
import { useTranslation } from 'next-i18next';

 const IconsContacts = () => {

const { t, i18n } = useTranslation('icons');


 
   return (
<div className={styles.contactsIcons} >
          <div className={styles.contactsIcons__item}>
          <div>
            <Image
              src="/images/icons/phone.png"
              alt="Picture of the author"
              width={100}
              height={100}
              loading="eager"
            />
            </div>
            <div  className={styles.contactsIcons__text}>
              <p>Телефон </p>
              <p>+38 067 1111111   </p> 
             <p>+48 16 678 0870</p>  
            </div>
             
          </div>
          <div className={styles.contactsIcons__item}>
            <div>
            <Image
              src="/images/icons/local.png"
              alt="Picture of the author"
              width={100}
              height={100}
              loading="eager"
            />
            </div>
               <div  className={styles.contactsIcons__text}>
              <p>{t('office-ukr')}</p>
              <p>{t('address-ukr')}</p> 
             <p>{t('office-pl')}</p>  
             <p>37-700 Przemyśl</p>
            </div>
          </div>
          <div className={styles.contactsIcons__item}>
           <div>
            <Image
              src="/images/icons/letter-circle.png"
              alt="Picture of the author"
              width={100}
              height={100}
              loading="eager"
              className={styles.contactsIcons__img}
            />
            </div>           
            <div className={styles.contactsIcons__text}>
              <p>E-mail </p>
              <p>admin@fastcargo.com.ua</p> 
 
            </div>
          </div>
        </div>
 
     );
 }

 export default IconsContacts;