import React from "react";
import { useTranslation } from "react-i18next";

export default function LanSelect() {
  const { i18n } = useTranslation("global");

  return (
    <select
      className="select-header"
      value={i18n.language}
      onChange={(e) => i18n.changeLanguage(e.target.value)}
    >
      <option value="en">EN</option>
      <option value="es">ES</option>
    </select>
  );
}
