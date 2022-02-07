 
import React, { useState, useEffect } from 'react';
//import CallbackForm from './CallbackForm';

import style from './style.module.css'


import { useTranslation } from 'next-i18next';

const MessageSent = (props: any) => {

//	const [enabled, setEnabled] = useState(true);
	//const [scrollY, setScrollY] = useState(""); //???

/*
	const onSubmitHandler = () => {
		closeForm();
	}
*/
const { t } = useTranslation('forms');

	const closePopup = () => {
		console.log("dssdf")
		props.closePopup();


	}
 	
 

	return(
		<div>
			 	<div className={style.messageSent} >
				<h3>{t('messageSent')}</h3>
				<button className="btn btn-yellow" onClick={closePopup}>Ok</button>
			</div>
			<div className={style.overlay} onClick={closePopup}></div>
		</div>
	);
}

export default MessageSent;


/*
	const [ enabled, setEnabled ] = useState(true);
	return (
		<div>
				<h3>Sent!</h3>
				<button className="btn btn-yellow">Ok</button>
			</div>
	);
	*/