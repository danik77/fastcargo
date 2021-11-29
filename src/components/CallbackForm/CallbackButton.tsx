import CallbackPopup from './CallbackPopup';
import { useState } from 'react';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';

import style from './style.module.scss';

const CallbackButton = () => {

	 const { t } = useTranslation('forms');

	const [showForm, setShowForm] = useState(false);

	const onClickHandler = () => {
		showForm ? null : setShowForm(true);
	}

	const closeForm = () => {
  	setShowForm(false)
	}

	return(
		<>
		<button className="btn btn-wide" onClick={onClickHandler}>{t('get-calc')}</button>
			{showForm && <CallbackPopup closeForm={closeForm} />}
		</>
	);
}


export default CallbackButton;