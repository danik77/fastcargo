import React, { Component, useState } from "react";
import { Link } from "next/link";
import { withFirebase } from "../Firebase";
import * as ROUTES from "../../constants/routes";
import * as CODES from "../../constants/codes";

const PasswordForgetPage = () => (
  <div>
    <h1>Відновити пароль</h1>
    <PasswordForgetForm />
  </div>
);

const INITIAL_STATE = {
  email: "",
  error: null,
};

const PasswordForgetFormBase = (props) => {
  const [state, setState] = useState({ ...INITIAL_STATE });

  const onSubmit = (event) => {
    const { email } = state;

    props.firebase
      .doPasswordReset(email)
      .then(() => {
        setState({ ...INITIAL_STATE });
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
    });
  };

  const { email, error } = state;

  const isInvalid = email === "";

  return (
    <form onSubmit={onSubmit}>
      <input
        name="email"
        value={state.email}
        onChange={onChange}
        type="text"
        placeholder="Email"
      />
      <button disabled={isInvalid} type="submit">
        Відновити пароль
      </button>

      {error && (
        <p>
          {CODES.CODES[error.code] ? CODES.CODES[error.code] : error.message}
        </p>
      )}
    </form>
  );
};

export default PasswordForgetPage;

const PasswordForgetForm = withFirebase(PasswordForgetFormBase);

export { PasswordForgetForm };
