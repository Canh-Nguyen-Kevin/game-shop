import React, { useEffect, useState } from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: "redirect",
  signInSuccessUrl: "/signedIn",
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    // firebase.auth.FacebookAuthProvider.PROVIDER_ID,
  ],
  // callbacks: {
  //   // Avoid redirects after sign-in.
  //   signInSuccessWithAuthResult: () => false,
  // },
}
const Auth = () => {
  return (
    <div>
      Auth
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
    </div>
  );
};

export default Auth;
