import React from "react";
import { useState, useEffect } from "react";
import AuthUserContext from "./context";
import { withFirebase } from "../Firebase";

const withAuthentication = (Component) => {
  const WithAuthentication = (props) => {
    const [authUser, setAuthUser] = useState(null);
    const [groupId, setGroupId] = useState(null);

    useEffect(() => {
      if (typeof window !== "undefined") {
        setAuthUser(JSON.parse(localStorage.getItem("authUser")));
        const listener = props.firebase.onAuthUserListener(
          (authUser) => {
            localStorage.setItem("authUser", JSON.stringify(authUser));
            setAuthUser(authUser);
          },
          () => {
            localStorage.removeItem("authUser");
            setAuthUser(null);
          }
        );
      }

      return () => {
        listener();
      };
    }, []);

    return (
      <AuthUserContext.Provider value={authUser}>
        <Component {...props} />
      </AuthUserContext.Provider>
    );
  };

  return withFirebase(WithAuthentication);
};

export default withAuthentication;
