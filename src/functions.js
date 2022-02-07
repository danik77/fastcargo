
import { useContext } from 'react'
import { DataContext } from '../pages/_app'

//import firebase from '../pages/_app.tsx'
import Firebase, { FirebaseContext } from '../src/components/Firebase';

 const firebase = new Firebase();



export const sendMail = (data, subject) => {


	//const contextData = useContext(DataContext)

	const time = new Date().toLocaleString();
	  //contextData?.email; //'danik77p@gmail.com'
	 
	const mailServer = 	`https://yanmall.leopolis.org.ua/mail-fastcargo.php`
console.log("fdd")
console.log(firebase)

 firebase.db.ref('data').on('value', snapshot => {
        //setData(snapshot.val());
       // setLoad(true);

        const contextData = snapshot.val()

			const address = contextData.email;
const mail = {...data, subject, time, address};

       	fetch(mailServer, {
		  method: 'POST',
		  headers: {
		    'Content-Type': 'application/json'
		  },
		  body: JSON.stringify(mail) //'name=danik'
		}).then((response) => { console.log(response); response.text()})
		  .then((text) => {
		  	console.log("suc")
		  	console.log(text)

		  })
		  .catch((error) => {
		  		console.log("err")
		  	console.log(error)
			});



      
     });


 



}


  