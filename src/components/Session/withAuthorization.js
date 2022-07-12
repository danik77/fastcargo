import React, { useEffect } from "react";
import AuthUserContext from "./context";
import { withFirebase } from "../Firebase";
import * as ROUTES from "../../constants/routes";
import { useRouter } from "next/router";

const withAuthorization = (condition) => (Component) => {
  const WithAuthorization = (props) => {
    const router = useRouter();

    useEffect(() => {
      const listener = props.firebase.onAuthUserListener(
        (authUser) => {
          if (!condition(authUser)) {
            router.push(ROUTES.SIGN_IN);
          }
        },
        () => router.push(ROUTES.SIGN_IN)
      );

      return () => {
        listener();
      };
    });

    return (
      <AuthUserContext.Consumer>
        {(authUser) =>
          condition(authUser) ? <Component {...props} /> : <p>No access</p>
        }
      </AuthUserContext.Consumer>
    );
  };

  return withFirebase(WithAuthorization);
};

export default withAuthorization;
