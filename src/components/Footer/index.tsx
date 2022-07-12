import Logo from "../Logo";
import styles from "../../../styles/Styles.module.css"; 
import ContactSocial from "../ContactPanel/ContactSocial";
import ContactPhones from "../ContactPanel/ContactPhones";
import { useTranslation } from "next-i18next";

const Footer = () => {
	const { t, i18n } = useTranslation("common");

	return (
		<div className={styles.footer}>
			<div className={styles.container}>
				<div className={styles.footer__inner}>
					<div className="footer__1">
						<Logo style="footer" />
						<h3>FastCargo © 2021</h3>
					</div>

					<div className="footer__2">
						<ContactPhones style="footer" />
						<ContactSocial />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
