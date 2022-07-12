import React, { Component } from "react";
import {
  AuthUserContext,
  withAuthorization,
  withEmailVerification,
} from "../Session";
import { withFirebase } from "../Firebase";
import { PasswordForgetForm } from "../PasswordForget";
import PasswordChangeForm from "../PasswordChange";

import * as CODES from "../../constants/codes";

const AccountPage = () => (
  <AuthUserContext.Consumer>
    {(authUser) => (
      <div>
        <h3>Аккаунт: {authUser.email}</h3>
        <PasswordForgetForm />
        <PasswordChangeForm />
      </div>
    )}
  </AuthUserContext.Consumer>
);

const condition = (authUser) => !!authUser;

export default withEmailVerification(withAuthorization(condition)(AccountPage));
