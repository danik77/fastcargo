import Logo from '../Logo';
import styles from '../../../styles/Styles.module.css' // переставити
import Image from 'next/image'

import localStyle from './style.module.scss'; 


const ContactPanel = () => {
	return (
		<>
		<div className={styles.contactPanel} style={{display: 'flex', marginRight: "200px"}}>
			<div className={styles.phones} style={{display: 'flex', color: 'white', marginRight: '50px',  alignItems: "center"}}>
				<div className={styles.phones__item}><a href="tel:+380683334930">+380683334930</a></div>
				<div className={styles.phones__item}><a href="tel:+380683334930">+380683334930</a></div>
			</div>

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
	                	 

	                 <a href='https://youtube.com'>
                  <Image
                    src="/images/icons/youtube3.png"
                    alt="youtube"
                    width={30}
                    height={30}
                    loading="eager"
                    priority={true}
                  />
                   </a>
                </div>
                </div>
		</div>
		</>
		)
}

export default ContactPanel;
