import React, { Component } from "react";
import { PasswordForgetLink } from "../PasswordForget";
import { withFirebase } from "../Firebase";
import * as ROUTES from "../../constants/routes";
import * as CODES from "../../constants/codes";
import { useRouter } from "next/router";
import { useState } from "react";

const SignIn = () => (
  <div>
    <h1>Вхід</h1>
    <SignInForm />
  </div>
);

const INITIAL_STATE = {
  email: "",
  password: "",
  error: null,
  loading: false,
};

const SignInFormBase = (props) => {
  const [state, setState] = useState({ ...INITIAL_STATE });
  const router = useRouter();

  const onSubmit = (event) => {
    const { email, password, loading } = state;
    setState({ ...state, loading: true });

    props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        router.push(ROUTES.ADMIN);
        setState({ ...INITIAL_STATE });
      })
      .catch((error) => {
        setState({ ...state, error });
        setState({ ...state, loading: false });
      });

    event.preventDefault();
  };

  const onChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
      error: null,
    });
  };

  const { email, password, error, loading } = state;
  const isInvalid = password === "" || email === "";

  return (
    <>
      {!loading && (
        <form onSubmit={onSubmit}>
          <input
            name="email"
            value={email}
            onChange={onChange}
            type="text"
            placeholder="Email"
            required="required"
          />
          <input
            name="password"
            value={password}
            onChange={onChange}
            type="password"
            placeholder="Пароль"
            required="required"
          />
          <button disabled={isInvalid} type="submit">
            Ввійти
          </button>

          {error && (
            <p>
              {CODES.CODES[error.code]
                ? CODES.CODES[error.code]
                : error.message}
            </p>
          )}
        </form>
      )}

      {loading && <div className="lds-dual-ring"></div>}
    </>
  );
};

const SignInForm = withFirebase(SignInFormBase);

export default SignIn;
export { SignInForm };
