import React from "react";
import logo from "../../assets/img/logo.png";
import { Link } from "react-router-dom";
import LanSelect from "../languageSelector/LanSelect";

export default function Header() {
  return (
    <header className="center">
      <Link to="/">
        <img src={logo} alt="breakingBad"></img>
      </Link>
      <LanSelect />
    </header>
  );
}
