import styles from '../../../styles/Styles.module.css' // переставити
import Image from 'next/image'
import localStyle from './style.module.scss'; 


const ContactSocial = () => {
	return (
		<div className={localStyle.social}  >
								<div className={localStyle.social__item}>
									<a href='https://facebook.com'>
                  <Image
                    src="/images/icons/facebook.png"
                    alt="facebook"
                    width={30}
                    height={30}
                    loading="eager"
                    priority={true}
                  />
                   </a>
                </div>

                	<div className={localStyle.social__item}>
                	<a href='https://instagram.com'>
                  <Image
                    src="/images/icons/instagram.png"
                    alt="instagram"
                    width={30}
                    height={30}
                    loading="eager"
                    priority={true}
                  />
                   </a>
                </div>

                	<div className={localStyle.social__item}>
                   <a href='https://telegram.com'>
                      <Image
                        src="/images/icons/telegram.png"
                        alt="telegram"
                        width={30}
                        height={30}
                    loading="eager"
                        priority={true}
                      />
                     </a>
                </div>

                	<div className={localStyle.social__item}>
	                	 

	                 <a href='https://whatsapp.com'>
                  <Image
                    src="/images/icons/whatsapp.png"
                    alt="youtube"
                    width={30}
                    height={30}
                    loading="eager"
                    priority={true}
                  />
                   </a>
                </div>
                </div>
		);
}

export default ContactSocial;