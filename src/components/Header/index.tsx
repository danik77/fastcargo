import Logo from '../Logo';
import Navigation from '../Navigation';
import LangSwitch from '../LangSwitch';
import ContactPanel from '../ContactPanel';
import styles from '../../../styles/Styles.module.css' // переставити


import localStyle from './style.module.css' // 


const Header = () => {
	return (
		<>
		<div className={styles.header}>
		<Logo style="header" />
			<div style={{display: "flex", width: '1200px', justifyContent: "end", alignItems: "center"}} className="container">
			 <ContactPanel /> 
			<LangSwitch />
			</div>
		</div>
		</>
		)
}

export default Header;
