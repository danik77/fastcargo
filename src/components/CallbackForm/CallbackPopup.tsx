import { useState, useEffect } from 'react';
import CallbackForm from './CallbackForm';
import style from './style.module.scss'

const CallbackPopup = (props: any) => {

	const [enabled, setEnabled] = useState(true);

	const onSubmitHandler = () => {
		closeForm();
	}

	const closeForm = () => {
		props.closeForm();
	}

	return(
		<div>
			 <CallbackForm className={style.contact__popup} closeForm={closeForm} /> 
			<div className={style.overlay} onClick={closeForm}></div>
		</div>
	);
}

export default CallbackPopup;
