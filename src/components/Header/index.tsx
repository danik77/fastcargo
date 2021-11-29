import Logo from '../Logo';
import Navigation from '../Navigation';
import LangSwitch from '../LangSwitch';
import ContactPanel from '../ContactPanel';
import styles from '../../../styles/Styles.module.css' // переставити

const Header = () => {
	return (
		<>
		<div className={styles.header}>
			<div style={{display: "flex", width: '1200px', justifyContent: "space-between", alignItems: "center"}} className="container">
			<Logo />
			 <ContactPanel /> 
			<LangSwitch />
			</div>
		</div>
		</>
		)
}

export default Header;
