import React, { useState, useEffect } from "react";
import style from "./style.module.css";
import { useTranslation } from "next-i18next";

const MessageSent = (props: any) => {
	const { t } = useTranslation("forms");

	const closePopup = () => {
		props.closePopup();
	};

	return (
		<div>
			<div className={style.messageSent}>
				<h3>{t("messageSent")}</h3>
				<button className="btn btn-yellow" onClick={closePopup}>
					Ok
				</button>
			</div>
			<div className={style.overlay} onClick={closePopup}></div>
		</div>
	);
};

export default MessageSent;
