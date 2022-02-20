import React from "react";
import { useTranslation } from "react-i18next";

import Page from "../../pages/Page";
import ComplexList from "../complexList/ComplexList";
import Quote from "./Quote";

const CharacterDetails = ({ character, quote }) => {
  const [t] = useTranslation("global");
  return (
    <Page>
      <h1 className="charactersTitle">
        {t("details.title")}
        {character?.name}
      </h1>
      <div className="row">
        <div className="visual-info">
          <img src={character?.img} alt="" />
        </div>
        <div className="main-info">
          <ComplexList char={character} blackList={["char_id", "img"]} />
        </div>
      </div>
      <Quote quote={quote} />
    </Page>
  );
};

export default CharacterDetails;
