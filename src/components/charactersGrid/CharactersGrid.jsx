import React from "react";
import { useTranslation } from "react-i18next";

import Page from "../../pages/Page";
import Card from "../card/Card";

const CharactersGrid = ({ characters }) => {
  const [t] = useTranslation("global");

  return (
    <Page>
      <h1 className="charactersTitle">{t("home.title")}</h1>
      <section className="cards">
        {(characters || []).map((character) => (
          <Card key={character.id} character={character} />
        ))}
      </section>
    </Page>
  );
};
export default CharactersGrid;
