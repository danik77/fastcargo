import type { NextPage } from "next";
import { GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import ContactPage from "../src/components/ContactPage";

const Contacts: NextPage = () => {
  return (
      <ContactPage />
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || "", [
        "common",
        "navigation",
        "icons",
        "forms",
      ])),
    },
  };
};

export default Contacts;
