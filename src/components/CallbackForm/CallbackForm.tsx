import { useState } from "react";
import style from "./style.module.scss";
import { useTranslation } from "next-i18next";
import { sendMail } from "../../functions.js";
import MessageSent from "../MessageSent";

const INITIAL_STATE = {
	name: "",
	phone: "",
};

const CallbackForm = (props: any) => {
	const { t } = useTranslation("forms");

	const [formData, setFormData] = useState(INITIAL_STATE);
	const [sent, setSent] = useState(false);
	const [hide, setHide] = useState(false);

	const submitForm = (e: any) => {
		e.preventDefault();
		const subject = "Запит на дзвінок з сайту fastcargo.com.ua";
		sendMail(formData, subject);
		if (props.type !== "static") setHide(true);
		setSent(true);
		setFormData(INITIAL_STATE);
	};

	const handleChange = (e: any) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const closePopup = () => {
		setSent(false);
		props.closeForm && props.closeForm();
	};

	return (
		<>
			{!hide && (
				<div className={props.className}>
					<form className={style.contact__form} onSubmit={submitForm}>
						<>
							<h3>{t("get-price")}</h3>
							<input
								type="text"
								name="name"
								value={formData.name}
								onChange={handleChange}
								placeholder={t("name")}
								required={true}
							/>
							<input
								type="text"
								name="phone"
								value={formData.phone}
								onChange={handleChange}
								placeholder={t("phone")}
								required={true}
							/>
							<input type="submit" className="btn" value={t("send")} />
							<p>{t("data-used")}</p>
						</>
					</form>
				</div>
			)}
			{sent && <MessageSent closePopup={closePopup} />}
		</>
	);
};

export default CallbackForm;