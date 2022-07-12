import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { appWithTranslation } from "next-i18next";
import Firebase, { FirebaseContext } from "../src/components/Firebase";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import Navigation from "../src/components/Navigation";
import styles from "../styles/Styles.module.css";
import React, { useState, useEffect } from "react";
import LoadContext from "../src/components/context.js";

const LangContext = React.createContext(null);
export const DataContext = React.createContext(null);
export const firebase = new Firebase();

function App({ Component, pageProps }: AppProps) {
  const [load, setLoad] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    firebase.db.ref("data").on("value", (snapshot) => {
      setData(snapshot.val());
      setLoad(true);
    });
  }, []);

  return (
    <>
      <Head>
        <title>Fast Cargo</title>
        <meta name="description" content="Fast Cargo" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;600&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
      </Head>
      <FirebaseContext.Provider value={firebase}>
        <DataContext.Provider value={data}>
          <div
            className="lds-dual-ring"
            style={load ? { display: "none" } : { display: "block" }}
          ></div>
          <div style={load ? { visibility: "visible" } : { visibility: "hidden" }}>
            <div>
              <Header />
              <Navigation />
              <Component {...pageProps} />
            </div>
          </div>
        </DataContext.Provider>
      </FirebaseContext.Provider>
    </>
  );
}

export default appWithTranslation(App);
