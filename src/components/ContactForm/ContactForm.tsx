import { useState } from 'react';
import style from './style.module.scss';
import { useTranslation } from 'next-i18next';

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
		props.closeForm && props.closeForm();
		setFormData(INITIAL_STATE);
		alert("Send")
	}

	const handleChange = (e: any) => {
		setFormData({...formData, [e.target.name]: e.target.value})
	}


	return (
		<div className={props.className}>
			<form className={style.contact__form} onSubmit={submitForm}>

				<input type="text" name="name" value={formData.name} onChange={handleChange} placeholder={t('name')} />
				<input type="email" name="email" value={formData.email} onChange={handleChange} placeholder={t('email')} />
				<textarea name="message" value={formData.message} onChange={handleChange} placeholder={t('message')} />
				<input type="submit" className="btn" value={t('send')} />
 
			</form>
		</div>
	);
}

export default ContactForm;