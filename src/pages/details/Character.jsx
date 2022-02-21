import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import CharacterDetails from "../../components/characterDetails/CharacterDetails";
import Spinner from "../../components/spinner/Spinner";
import Error from "../error/Error";

import { getDetailsCharacters } from "../../core/services/characters/characters-service";
import { getRandomQuote } from "../../core/services/quotes/quotes-services";

const Character = () => {
  const [char, setChar] = useState([]);
  const [quote, setQuote] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true)
    getDetailsCharacters(id)
    .then(async (res) => {
      setChar(res);
      if (!res.error) {
        getRandomQuote({ author: res.name }).then((res) => {
          setQuote(res);
        });
      }
    })
    .finally(() => setLoading(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  if (loading) {
    return <Spinner />;
  }

  if (char.error) {
    return <Error error={char} />;
  }
  if (!char.error) {
    return <CharacterDetails character={char} quote={quote} />;
  }
};

export default Character;
