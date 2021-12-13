import Logo from '../Logo';
import styles from '../../../styles/Styles.module.css' // переставити

const Footer = () => {
	return (
		<div className={styles.footer}>
			<div className={styles.container}>
				<div className={styles.footer__inner}>
					<div className="footer__1">
			 			{/* <Logo style="footer" /> */}
						<h3>FastCargo © 2021</h3>
					</div>
				{/*
					<div className="footer__2">
						<h3>Соцмережі</h3>
						<p>facebook</p>
					</div>
					<div className="footer__3">
						<h3>Email</h3>
						<p>ADMIN@FASTCARGO.COM.UA</p>
					</div>
					<div className="footer__4">
						<h3>Адреса</h3>
						<p>ОФІС В УКРАЇНІ</p>
					<p>М. ЛЬВІВ, ВУЛ. ПІД ГОЛОСКОМ 4-Б</p>
					<p>ОФІС В ПОЛЬЩІ</p>
					<p>37-700 PRZEMYŚL</p>
					</div>*/}
				</div>
			</div>
		</div>
		)
}

export default Footer;
