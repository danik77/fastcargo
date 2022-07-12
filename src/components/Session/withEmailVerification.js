import React, { useState } from "react";
import AuthUserContext from "./context";
import { withFirebase } from "../Firebase";
import * as CODES from "../../constants/codes";

const needsEmailVerification = (authUser) =>
  authUser &&
  !authUser.emailVerified &&
  authUser.providerData
    .map((provider) => provider.providerId)
    .includes("password");

const withEmailVerification = (Component) => {
  const WithEmailVerification = (props) => {
    const [state, setState] = useState({ isSent: false });

    const onSendEmailVerification = () => {
      props.firebase
        .doSendEmailVerification()
        .then(() => setState({ isSent: true }));
    };

    return (
      <AuthUserContext.Consumer>
        {(context) => (
          <>
            {needsEmailVerification(context?.authUser) ? (
              <div>
                {state.isSent ? (
                  <p>{CODES.MESSAGES.EMAIL_SENT}</p>
                ) : (
                  <p>{CODES.MESSAGES.EMAIL_VERIFY}</p>
                )}

                <button
                  type="button"
                  onClick={onSendEmailVerification}
                  disabled={state.isSent}
                >
                  Send confirmation E-Mail
                </button>
              </div>
            ) : (
              <Component {...props} />
            )}
          </>
        )}
      </AuthUserContext.Consumer>
    );
  };

  return withFirebase(WithEmailVerification);
};

export default withEmailVerification;
