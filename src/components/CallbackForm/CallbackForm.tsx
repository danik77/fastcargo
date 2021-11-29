import { useState } from 'react';
import style from './style.module.scss';


import { useTranslation } from 'next-i18next';

const INITIAL_STATE = {
	name: "",
	phone: ""
}

const CallbackForm = (props: any) => {

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
						<h3>{t('get-price')}</h3>
				<input type="text" name="name" value={formData.name} onChange={handleChange} placeholder={t('name')} />
				<input type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder={t('phone')} /> 
				<input type="submit" className="btn" value={t('send')} />
								<p>{t('data-used')}</p>
			</form>

{/*

			{ sent && (
				<div>
					<h3>Message Sent!</h3>
					<br />
					<button className="btn btn-yellow"  onClick={closeForm}>Ok</button>
				</div>
			)}
		*/}
		</div>
	);
}

export default CallbackForm;