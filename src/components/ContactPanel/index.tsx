import Logo from "../Logo";
import styles from "../../../styles/Styles.module.css";
import Image from "next/image";
import localStyle from "./style.module.scss";
import ContactSocial from "./ContactSocial";
import ContactPhones from "./ContactPhones";

const ContactPanel = (props: any) => {
	return (
		<div className={localStyle.contactPanel}>
			<ContactPhones />
			<ContactSocial />
		</div>
	);
};

export default ContactPanel;
