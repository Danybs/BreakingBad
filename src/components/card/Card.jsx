import React from "react";
import { Link } from "react-router-dom";

const Card = ({ character }) => {
  return (
    <div className="card">
      <Link to={`character/${character?.id}`}>
        <h1>{character?.name}</h1>
        <img src={`${character?.img}`} alt="Character" />
      </Link>
    </div>
  );
};

export default Card;
