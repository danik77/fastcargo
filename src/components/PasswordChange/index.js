import React, { Component, useState } from "react";
import { withFirebase } from "../Firebase";
import * as CODES from "../../constants/codes";

const INITIAL_STATE = {
  passwordOne: "",
  passwordTwo: "",
  error: null,
  passwordChanged: false,
};

const PasswordChangeForm = (props) => {
  const [state, setState] = useState({ ...INITIAL_STATE });

  const onSubmit = (event) => {
    const { passwordOne } = state;

    props.firebase
      .doPasswordUpdate(passwordOne)
      .then(() => {
        setState({ ...INITIAL_STATE });
        setState({ ...INITIAL_STATE, passwordChanged: true });
      })
      .catch((error) => {
        setState({ ...INITIAL_STATE, error });
      });

    event.preventDefault();
  };

  const onChange = (event) => {
    setState({
      ...INITIAL_STATE,
      [event.target.name]: event.target.value,
      error: null,
      passwordChanged: false,
    });
  };

  const { passwordOne, passwordTwo, error, passwordChanged } = state;
  const isInvalid = passwordOne !== passwordTwo || passwordOne === "";

  return (
    <form onSubmit={onSubmit}>
      <input
        name="passwordOne"
        value={passwordOne}
        onChange={onChange}
        type="password"
        placeholder="Новий пароль"
      />
      <input
        name="passwordTwo"
        value={passwordTwo}
        onChange={onChange}
        type="password"
        placeholder="Підтвердити пароль"
      />
      <button disabled={isInvalid} type="submit">
        Змінити пароль
      </button>

      {error && (
        <p>
          {CODES.CODES[error.code] ? CODES.CODES[error.code] : error.message}
        </p>
      )}
      {passwordChanged && <p>{CODES.CODES["password-changed"]}</p>}
    </form>
  );
};

export default withFirebase(PasswordChangeForm);
