import { useContext } from "react";
import { DataContext } from "../pages/_app";
import Firebase, { FirebaseContext } from "../src/components/Firebase";

const firebase = new Firebase();

export const sendMail = (data, subject) => {
	const time = new Date().toLocaleString();
	const mailServer = `https://yanmall.leopolis.org.ua/mail-fastcargo.php`;

	firebase.db.ref("data").on("value", (snapshot) => {
		const contextData = snapshot.val();
		const address = contextData.email; 

		const mail = { ...data, subject, time, address };

		fetch(mailServer, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(mail),
		})
			.then((response) => {
				console.log(response);
				response.text();
			})
			.then((text) => {
				console.log(text);
			})
			.catch((error) => {
				console.log(error);
			});
	});
};
