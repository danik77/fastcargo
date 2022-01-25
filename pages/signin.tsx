import SignIn from '../src/components/SignIn';
import styles from '../styles/Home.module.css'

const SignInPage = () => {
	return (
 


				<div className="admin">


 <div style={{backgroundImage: 'url(/images/cargo1.jpg)'}} className={`${styles.page} ${styles.pageText} ${styles.background}`}>
<div  className={styles.sliderStyle}></div>
    <div className={`${styles.container} ${styles.containerCentered}`}>
      <main className={styles.main}>
        <h1>Адміністративна панель</h1>
      </main>
    </div>
    </div>


  
     

    <div className={`${styles.container} ${styles.infopage}`}>

      <main className={styles.main}>
      


  
					 <SignIn /> 
 
      </main>
      </div>
   


    </div>


 
	);
}


export default SignInPage;