import {
  withAuthorization,
  withEmailVerification,
  withAuthentication,
} from "../Session";

import { useState, useEffect } from "react";
import Tabs from "../Tabs";
import { withFirebase } from "../Firebase";
import style from "./style.module.css";
import SignOutButton from "../SignOut";
import AccountPage from "../Account";
import Image from "next/image";
import ImageUploader from "../Image";

const INITIAL_STATE = {
  email: "",
  phone1: "",
  phone2: "",
  addressUkr: "",
  addressPl: "",
  socialFacebook: "",
  socialTelegram: "",
  socialWhatsapp: "",
  socialInstagram: "",
};

const Admin = (props) => {
  const [state, setState] = useState(INITIAL_STATE);
  const [slider, setSlider] = useState([]);

  useEffect(() => {
    props.firebase.db.ref("data").once("value", (snapshot) => {
      const dataObject = snapshot.val();
      setState({ ...dataObject });
    });

  }, []);

  const onChangeText = (event: any) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const onChangeData = (e: any) => {
    props.firebase.db.ref("data").set({
      ...state,
    });
    e.preventDefault();
    alert("Дані змінено");
  };

  const onListenForStorage = () => {
    props.firebase.storage
      .ref(`slider`)
      .listAll()
      .then((res) => {
        res.items.forEach((itemRef) => {
          const slide = {};
          slide.ref = itemRef;
          itemRef.getDownloadURL().then((url) => {
            slide.url = url;
            let newSlider = slider;
            newSlider.push(slide);
            setSlider(newSlider);
          });
        });
      })
      .catch((error) => {});
  };

  const onSlideUpload = () => {
    setSlider([]);
    onListenForStorage();
  };

  const onSlideDelete = (item) => {
    confirm("Want to delete?")
      ? item.ref
          .delete()
          .then(() => {
            setSlider([]);
            onListenForStorage();
          })
          .catch((error) => {})
      : null;
  };

  return (
    <div className="admin">
      <Tabs>
        <div label="Контакти" className="admin__tab">
          <form
            className={style.adminForm}
            onSubmit={(event) => onChangeData(event)}
            method="post"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <span>Email: </span>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={state.email}
              onChange={onChangeText}
            />
            <span>Телефон 1: </span>
            <input
              type="text"
              name="phone1"
              placeholder="Phone1"
              value={state.phone1}
              onChange={onChangeText}
            />
            <span>Телефон 2: </span>
            <input
              type="text"
              name="phone2"
              placeholder="Phone2"
              value={state.phone2}
              onChange={onChangeText}
            />
            <span>Адреса Україна: </span>
            <input
              type="text"
              name="addressUkr"
              placeholder="Address UA"
              value={state.addressUkr}
              onChange={onChangeText}
            />
            <span>Адреса Польща: </span>
            <input
              type="text"
              name="addressPl"
              placeholder="Address PL"
              value={state.addressPl}
              onChange={onChangeText}
            />
            <br />
            <span>Facebook: </span>
            <input
              type="text"
              name="socialFacebook"
              placeholder="Facebook"
              value={state.socialFacebook}
              onChange={onChangeText}
            />
            <span>Telegram: </span>
            <input
              type="text"
              name="socialTelegram"
              placeholder="Telegram"
              value={state.socialTelegram}
              onChange={onChangeText}
            />
            <span>WhatsApp: </span>
            <input
              type="text"
              name="socialWhatsapp"
              placeholder="Whatsapp"
              value={state.socialWhatsapp}
              onChange={onChangeText}
            />
            <span>Instagram: </span>
            <input
              type="text"
              name="socialInstagram"
              placeholder="Instagram"
              value={state.socialInstagram}
              onChange={onChangeText}
            />

            <button className="btn btn-blue" type="submit">
              Надіслати
            </button>
          </form>
        </div>

        <div label="Аккаунт" className="admin__tab">
          <AccountPage />
          <SignOutButton />
        </div>
      </Tabs>
    </div>
  );
};

const condition = (authUser: any) => authUser && !!authUser.roles["ADMIN"];

export default withFirebase(
  withAuthentication(withEmailVerification(withAuthorization(condition)(Admin)))
);
