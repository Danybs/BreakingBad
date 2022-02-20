import React, { useEffect } from "react";

import { useTranslation } from "react-i18next";

import { toast } from "react-toastify";

import Page from "../Page";

const Error = ({ error, onlyToast }) => {
  const [t] = useTranslation("global");

  useEffect(() => {
    toast.error(t(error?.message));
  }, [error?.message, t]);

  if (!onlyToast) {
    return (
      <Page>
        <h1 style={{ textAlign: "center" }}>{t(error.message)}</h1>
      </Page>
    );
  } else {
    return <></>;
  }
};

export default Error;
