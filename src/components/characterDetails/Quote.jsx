import React from "react";
import { useTranslation } from "react-i18next";

import Error from "../../pages/error/Error";

const Quote = ({ quote }) => {
  const [t] = useTranslation("global");

  function getRandomQuote(quote) {
    if (quote.length > 0) {
      return quote[Math.floor(Math.random() * quote.length)];
    } else {
      return {};
    }
  }
  if (quote.error) {
    return <Error error={quote} onlyToast={true} />;
  }
  if (!quote.error) {
    return (
      <div className="padding-quote text-center-quote">
        <h4 className="margin-10px-bottom font-size24 md-font-size22 sm-font-size20 font-weight-600">
          {t("details.famousQuote")}
        </h4>
        <p className="sm-width-95 sm-margin-auto">
          {getRandomQuote(quote).quote || t("details.noQuote")}
        </p>
      </div>
    );
  }
};

export default Quote;
