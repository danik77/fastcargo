import Logo from '../Logo';
import styles from '../../../styles/Styles.module.css' // переставити
import Image from 'next/image'

import localStyle from './style.module.scss'; 


import ContactSocial from './ContactSocial'

import ContactPhones from './ContactPhones'


const ContactPanel = () => {
	return (
		<>
		<div className={styles.contactPanel} style={{display: 'flex', marginRight: "200px"}}>
			 
<ContactPhones />
					 <ContactSocial />
		</div>
		</>
		)
}

export default ContactPanel;
