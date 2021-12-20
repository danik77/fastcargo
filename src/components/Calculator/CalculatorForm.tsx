import { useState } from 'react';
import style from './style.module.scss';


import { useTranslation } from 'next-i18next';

 

 
  


const INITIAL_STATE = {
	type: "",
	cost: "",
	weight: "",
	volume: "",
	paper: "",
	name: "",
	phone: "",
	email: ""
}

 

const CARGO_TYPES = [
"autoparts",
"electrical",
"phones-computers",
"clothing",
"textiles",
"equipment",
"food-group",
"alcohol",
"tobacco",
"households",
"cosmethicts",
"other"
]

const CalculatorForm = (props: any) => {

	   const { t } = useTranslation('forms');

	const [formData, setFormData] = useState(INITIAL_STATE)

	const submitForm = (e: any) => {
		e.preventDefault();
		console.log(formData)
		props.closeForm && props.closeForm();
		setFormData(INITIAL_STATE);
		//alert("Send")
	}

	const handleChange = (e: any) => {
		setFormData({...formData, [e.target.name]: e.target.value})
	}


	return (
		<div className={props.style}>
		 <form className={style.calc__form} onSubmit={submitForm} style={{maxWidth: '300px'}}>
		 <h3>{t('calc-cargo-value')}</h3>
		 
				 
				<select name="type"  onChange={handleChange} value={formData.type}>
				<option value={0}>{t('select-option')}</option>
					{CARGO_TYPES.map(i => (
						<option value={t(i)}>{t(i)}</option>
					))}
				</select>
				<label>{t('cargo-attrs')}</label>
				<input type="text" name="cost" value={formData.cost} onChange={handleChange} placeholder={t('price')}/>
 				<input type="text" name="weight" value={formData.weight} onChange={handleChange} placeholder={t('weight')}/>
 				<input type="text" name="volume" value={formData.volume} onChange={handleChange} placeholder={t('volume')}/>
 				<label>{t('papers')}</label>
 				<input type="text" name="paper" value={formData.paper} onChange={handleChange} placeholder={t('set-doc-type')}/>
 				<label>{t('contacts')}</label>
 				<input type="text" name="name" value={formData.name} onChange={handleChange} placeholder={t('name')}/>
 				<input type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder={t('phone')}/>
 				<input type="text" name="email" value={formData.email} onChange={handleChange} placeholder={t('email')}/>

				<input type="submit" className="btn" value={t('calc-value')} />
			</form>
		</div>
	);
}

export default CalculatorForm;