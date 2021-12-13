import styles from '../../../styles/Styles.module.css' // переставити
import Image from 'next/image'
import localStyle from './style.module.scss'; 


const ContactPhones = (props) => {
	return (
		<div className={styles.phones} style={{display: 'flex', color: 'white', marginRight: '50px',  alignItems: "center", 
		flexDirection:  props.style == "footer" ? "column" : "row"}}>
		{ props.style != "footer" &&
            <Image
              src="/images/icons/phone-white.png"
              alt="Picture of the author"
                 width={15}
              height={15}
              loading="eager"
                    priority={true}
              
            />
         }
				<div className={styles.phones__item}><a href="tel:+380683334930">+380683334930</a></div>
				<div className={styles.phones__item}><a href="tel:+380683334930">+380683334930</a></div>
			</div>
		);
}

export default ContactPhones;