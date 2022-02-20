import React, { useState, useEffect } from "react";

import CharactersGrid from "../../components/charactersGrid/CharactersGrid";
import Spinner from "../../components/spinner/Spinner";
import Error from "../error/Error";

import { getAllCharacters } from "../../core/services/characters/characters-service";

const HomePage = () => {
  const [char, setChar] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchAllCharacters() {
    setChar(await getAllCharacters().finally(() => setLoading(!loading)));
  }

  useEffect(() => {
    fetchAllCharacters();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return <Spinner />;
  }

  if (char.error) {
    return <Error error={char} />;
  }

  if (!char.error) {
    return <CharactersGrid characters={char} />;
  }
};

export default HomePage;
