import { useState } from 'react';
import style from './style.module.scss';
import { useTranslation } from 'next-i18next';

import { sendMail } from '../../functions.js';

const INITIAL_STATE = {
	name: "",
	email: "",
	message: ""
}

const ContactForm = (props: any) => {

	   const { t } = useTranslation('forms');

	const [formData, setFormData] = useState(INITIAL_STATE)

	const submitForm = (e: any) => {
		e.preventDefault();
		console.log(formData)

		const subject = "Message from site";
		sendMail(formData, subject);



		props.closeForm && props.closeForm();
		setFormData(INITIAL_STATE);
		alert('Done');///////////////////// TRANSLATE ! if error
		//setSent(true); !!!!!!!!!!!!!!!!!!!!!!!!!!!11 
	}

	const handleChange = (e: any) => {
		setFormData({...formData, [e.target.name]: e.target.value})
	}


	return (
		<div className={props.className}>
		 
			<form className={style.contact__form} onSubmit={submitForm}>
	<h3>{t('contact-us')}</h3>
				<input type="text" name="name" value={formData.name} onChange={handleChange} placeholder={t('name')} required={true} />
				<input type="email" name="email" value={formData.email} onChange={handleChange} placeholder={t('email')} required={true} />
				<textarea name="message" value={formData.message} onChange={handleChange} placeholder={t('message')} required={true} />
				<input type="submit" className="btn" value={t('send')} />
 
			</form>
		</div>
	);
}

export default ContactForm;